(() => {
  const root = document.querySelector('#bot-app');
  const items = [
    ['dashboard', 'Visão geral', '◫'],
    ['services', 'Serviços', '▤'],
    ['users', 'Usuários e créditos', '◉'],
    ['orders', 'Registros', '↗'],
    ['payments', 'Pagamentos', '＄'],
    ['logs', 'Auditoria ao vivo', '≋'],
    ['settings', 'Integrações', '⚙']
  ];
  let active = 'dashboard';
  let timer;
  let liveBusy = false;
  let lastLogId = 0;
  let me;

  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const money = value => `R$ ${Number(value || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const date = value => value ? new Date(String(value).replace(' ', 'T') + (String(value).includes('Z') ? '' : '')).toLocaleString('pt-BR') : '—';

  async function api(path, options = {}) {
    const response = await fetch(path, {
      ...options,
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }
    });
    let data = {};
    try { data = await response.json(); } catch { /* Response may be empty. */ }
    if (response.status === 401) {
      clearInterval(timer);
      showLogin('Sua sessão expirou. Entre novamente.');
      throw new Error('Sessão expirada.');
    }
    if (!response.ok) throw new Error(data.error || 'Não foi possível concluir a operação.');
    return data;
  }

  function toast(message, error = false) {
    const element = document.querySelector('#toast');
    element.textContent = message;
    element.classList.toggle('error', error);
    element.classList.add('visible');
    setTimeout(() => element.classList.remove('visible'), 3200);
  }

  function showLogin(message = '') {
    root.innerHTML = `<main class="login-wrap"><form class="login-card" id="login-form">
      <a class="brand-mark" href="/">KV<span> CELL</span></a>
      <p class="eyebrow">CENTRAL DE OPERAÇÕES</p><h1>Painel do bot</h1>
      <p class="muted">Acesse com uma conta administradora do KV CELL.</p>
      ${message ? `<div class="notice">${esc(message)}</div>` : ''}
      <label>E-mail<input name="email" type="email" autocomplete="username" required></label>
      <label>Senha<input name="password" type="password" autocomplete="current-password" required></label>
      <button class="button primary wide">Entrar com segurança</button>
      <a class="back-link" href="/">Voltar ao painel KV CELL</a>
    </form></main>`;
    document.querySelector('#login-form').addEventListener('submit', async event => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(event.currentTarget));
      try {
        const result = await api('/api/login', { method: 'POST', body: JSON.stringify(values) });
        me = result.user;
        if (me.role !== 'admin') {
          await api('/api/logout', { method: 'POST', body: '{}' });
          showLogin('Esta área é exclusiva para administradores.');
          return;
        }
        boot();
      } catch (error) {
        if (document.querySelector('#login-form')) toast(error.message, true);
      }
    });
  }

  function boot() {
    if (me?.role !== 'admin') return showLogin('Esta área é exclusiva para administradores.');
    root.innerHTML = `<div class="layout">
      <aside class="sidebar">
        <a class="brand" href="/"><span class="brand-mark">KV</span><span><b>KV CELL</b><small>BOT CONTROL</small></span></a>
        <div class="sidebar-label">GESTÃO TELEGRAM</div>
        <nav>${items.map(([id, label, icon]) => `<button class="nav-item" data-page="${id}"><span class="nav-icon">${icon}</span>${label}</button>`).join('')}</nav>
        <div class="sidebar-bottom"><span class="status-dot"></span><span>Área administrativa</span><a href="/">Painel principal ↗</a></div>
      </aside>
      <main class="main">
        <header class="topbar"><div><p class="eyebrow">KV CELL • TELEGRAM</p><h1 id="page-title">Visão geral</h1></div>
          <div class="top-actions"><span class="user-chip">${esc(me.name || me.email || 'Administrador')}</span><button class="button secondary" id="refresh">Atualizar</button><button class="button ghost" id="logout">Sair</button></div>
        </header>
        <section id="content" aria-live="polite"></section>
      </main>
    </div><div id="modal" class="modal" aria-hidden="true"></div>`;
    root.querySelectorAll('[data-page]').forEach(button => button.addEventListener('click', () => openPage(button.dataset.page)));
    root.querySelector('#refresh').addEventListener('click', () => loadPage().catch(showError));
    root.querySelector('#logout').addEventListener('click', async () => {
      try { await api('/api/logout', { method: 'POST', body: '{}' }); } finally { me = null; showLogin(); }
    });
    root.addEventListener('click', onAction);
    root.addEventListener('submit', onSubmit);
    openPage('dashboard');
    timer = setInterval(() => {
      if (!liveBusy && ['dashboard', 'logs'].includes(active)) refreshLive();
    }, 5000);
  }

  function openPage(page) {
    active = page;
    root.querySelectorAll('[data-page]').forEach(button => button.classList.toggle('active', button.dataset.page === page));
    root.querySelector('#page-title').textContent = items.find(item => item[0] === page)?.[1] || 'Painel do bot';
    loadPage().catch(showError);
  }

  async function loadPage() {
    const content = root.querySelector('#content');
    content.innerHTML = '<div class="loading"><span></span>Carregando dados do painel…</div>';
    if (active === 'dashboard') return dashboard();
    if (active === 'services') return services();
    if (active === 'users') return users();
    if (active === 'orders') return orders();
    if (active === 'payments') return payments();
    if (active === 'logs') return logs();
    if (active === 'settings') return settings();
  }

  function showError(error) {
    const content = root.querySelector('#content');
    if (content) content.innerHTML = `<div class="error-card"><b>Não foi possível carregar os dados</b><p>${esc(error.message || 'Falha inesperada.')}</p><button class="button secondary" data-action="retry">Tentar novamente</button></div>`;
  }

  function pageHead(title, copy, action = '') {
    return `<div class="page-head"><div><h2>${title}</h2><p>${copy}</p></div>${action}</div>`;
  }

  function stat(label, value, note, icon) {
    return `<article class="stat-card"><span class="stat-icon">${icon}</span><p>${label}</p><strong>${value}</strong><small>${note}</small></article>`;
  }

  function statusTag(value) {
    const state = String(value || '').toLowerCase();
    const labels = {
      not_configured: 'Não configurado', connecting: 'Conectando',
      online: 'Conectado', error: 'Falha no bot', stopped: 'Parado',
      pending: 'Pendente', recebido: 'Recebido'
    };
    const label = labels[state] || value || '—';
    const kind = /ausente|erro|error|offline|bloqueado|falha|não configurado/.test(state) ? 'bad' :
      /received|confirm|online|ativo|conectado|processado|aprovado|configurado/.test(state) ? 'good' :
      /pendente|processando|starting|connecting|aguardando|atenção|presente|configura[cç][aã]o/.test(state) ? 'warn' : 'bad';
    return `<span class="tag ${kind}">${esc(label)}</span>`;
  }

  function logRows(rows) {
    if (!rows.length) return '<div class="empty-state">Nenhum evento registrado ainda.</div>';
    return `<div class="event-list">${rows.map(row => {
      lastLogId = Math.max(lastLogId, Number(row.id || 0));
      return `<div class="event-row"><span class="event-marker"></span><div><b>${esc(row.event)}</b><p>${esc(row.details || '')}${row.telegram_id ? ` · Telegram ${esc(row.telegram_id)}` : ''}</p></div><time>${esc(date(row.created_at))}</time></div>`;
    }).join('')}</div>`;
  }

  async function dashboard() {
    const data = await api('/api/bot/dashboard');
    root.querySelector('#content').innerHTML = `<section class="hero">
      <div><p class="eyebrow">PAINEL ADMINISTRATIVO</p><h2>Seu servidor, sob controle.</h2><p>Usuários, registros, créditos e integrações do bot em um só lugar.</p></div>
      <div class="hero-state">${statusTag(data.bot_state?.state)}<small>${esc(data.bot_state?.message || '')}</small></div>
    </section>
    <div class="stats-grid">
      ${stat('USUÁRIOS CADASTRADOS', data.users, `${data.active_users} com acesso ativo`, '◉')}
      ${stat('SERVIÇOS ATIVOS', data.services, 'Disponíveis no menu do bot', '▤')}
      ${stat('REGISTROS EM ABERTO', data.orders_pending, `${data.orders_total} registros no histórico`, '↗')}
      ${stat('CRÉDITOS PAGOS', money(data.credits_received), `${data.payments_pending} pagamentos aguardando`, '＄')}
    </div>
    <div class="split-grid"><section class="panel"><div class="panel-heading"><div><h3>Atividade recente</h3><p>Eventos do bot e ações administrativas</p></div><button class="text-button" data-go="logs">Ver auditoria →</button></div><div id="live-events">${logRows(data.logs || [])}</div></section>
      <section class="panel"><div class="panel-heading"><div><h3>Estado do sistema</h3><p>Presença das integrações configuradas</p></div><button class="text-button" data-go="settings">Abrir integrações →</button></div><div id="health-summary" class="health-list"><div class="health-item"><span>Bot Telegram</span>${statusTag(data.bot_state?.state)}</div><div class="health-item"><span>Asaas</span>${statusTag(data.credentials?.asaas_key ? 'Configurado' : 'Ausente')}</div><div class="health-item"><span>API do parceiro</span>${statusTag(data.credentials?.partner_key && data.credentials?.partner_url ? 'Configuração presente' : 'Ausente')}</div></div><p class="subtle">A API do parceiro só será marcada como conectada depois de uma operação oficial de validação.</p></section>
    </div>`;
  }

  async function services() {
    const [servicesList, categories] = await Promise.all([api('/api/bot/services'), api('/api/bot/categories')]);
    const categoryButtons = categories.map(category => `<span class="category-chip">${esc(category.name)}<button type="button" class="category-remove" data-action="category-delete" data-id="${category.id}" aria-label="Remover categoria ${esc(category.name)}">×</button></span>`).join('');
    root.querySelector('#content').innerHTML = `${pageHead('Serviços e categorias', 'Cadastre o que o bot oferece, os campos do formulário e as margens por perfil.',
      '<button class="button secondary" data-action="category-new">＋ Categoria</button><button class="button primary" data-action="service-new">＋ Novo serviço</button>')}
      <div class="category-row">${categoryButtons || '<span class="muted">Cadastre uma categoria para organizar os serviços.</span>'}</div>
      <section class="panel table-panel"><div class="table-wrap"><table><thead><tr><th>Serviço</th><th>Categoria</th><th>Custo USD</th><th>Preço cliente</th><th>Preço logista</th><th>Preço unlocker</th><th>Estado</th><th></th></tr></thead><tbody>
      ${servicesList.map(service => `<tr><td><b>${esc(service.name)}</b><small>${esc(service.kind)}${service.provider_service_id ? ` · ID ${esc(service.provider_service_id)}` : ''}</small></td><td>${esc(service.category_name || '—')}</td><td>${money(service.cost_usd)}</td><td>${money(clientPrice(service))}</td><td>${money(rolePrice(service, 'LOGISTA'))}</td><td>${money(rolePrice(service, 'UNLOCKER'))}</td><td>${statusTag(service.active ? 'Ativo' : 'Inativo')}</td><td class="actions"><button class="icon-button" data-action="service-edit" data-id="${service.id}" title="Editar">✎</button>${service.active ? `<button class="icon-button danger" data-action="service-disable" data-id="${service.id}" title="Desativar">×</button>` : ''}</td></tr>`).join('') || '<tr><td colspan="8" class="empty-state">Nenhum serviço cadastrado.</td></tr>'}
      </tbody></table></div></section>`;
  }

  function clientPrice(service) { return rolePrice(service, 'CLIENTE_FIXO'); }
  function rolePrice(service, role) {
    const cost = Number(service.cost_usd || 0) * Number(service.usd_rate || 5.4);
    const margin = Number(service[role === 'LOGISTA' ? 'margin_logista' : role === 'UNLOCKER' ? 'margin_unlocker' : 'margin_cliente'] || 0);
    return Math.max(cost * (1 + margin / 100), cost + Number(service.min_add || 0)) + Number(service.payment_fee ?? 0.99);
  }

  async function users(search = '') {
    const list = await api(`/api/bot/users?q=${encodeURIComponent(search)}`);
    root.querySelector('#content').innerHTML = `${pageHead('Usuários e saldo', 'Gerencie perfis, bloqueios e movimentações de crédito com trilha de auditoria.',
      '<button class="button secondary" data-go="logs">Ver movimentações →</button>')}
      <section class="panel table-panel"><div class="table-toolbar"><input class="search-input" id="user-search" placeholder="Buscar por nome, @usuário ou ID" value="${esc(search)}"><span>${list.length} resultado(s)</span></div>
      <div class="table-wrap"><table><thead><tr><th>Usuário Telegram</th><th>Perfil</th><th>Saldo</th><th>Cadastro</th><th>Acesso</th><th>Ações</th></tr></thead><tbody>
      ${list.map(user => `<tr><td><b>${esc(user.name || 'Sem nome')}</b><small>${user.username ? '@' + esc(user.username) + ' · ' : ''}ID ${esc(user.telegram_id)}</small></td><td>${esc(user.role)}</td><td><b>${Number(user.balance || 0).toFixed(2)} CRD</b></td><td>${esc(date(user.created_at))}</td><td>${statusTag(user.blocked ? 'Bloqueado' : 'Ativo')}</td><td class="actions"><button class="button mini primary" data-action="credit" data-id="${esc(user.telegram_id)}">Ajustar saldo</button><button class="button mini secondary" data-action="user-edit" data-id="${esc(user.telegram_id)}" data-role="${esc(user.role)}" data-blocked="${user.blocked ? '1' : '0'}">${user.blocked ? 'Desbloquear' : 'Bloquear'}</button></td></tr>`).join('') || '<tr><td colspan="6" class="empty-state">Nenhum usuário localizado. O bot registra o primeiro acesso pelo Telegram.</td></tr>'}
      </tbody></table></div></section>`;
    const input = root.querySelector('#user-search');
    let debounce;
    input.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => users(input.value).catch(showError), 250);
    });
  }

  async function orders() {
    const list = await api('/api/bot/orders');
    root.querySelector('#content').innerHTML = `${pageHead('Registros e pedidos', 'Pedidos aguardam processamento manual até a API do parceiro estar validada. Cancelar devolve os créditos automaticamente.')}
      <section class="panel table-panel"><div class="table-wrap"><table><thead><tr><th>Registro</th><th>Usuário</th><th>Serviço</th><th>Valor</th><th>Status</th><th>Data</th><th>Ações</th></tr></thead><tbody>
      ${list.map(item => `<tr><td><b>#${item.id}</b></td><td>${esc(item.name || item.username || '—')}<small>ID ${esc(item.telegram_id)}</small></td><td>${esc(item.service_name || 'Serviço removido')}</td><td>${Number(item.price || 0).toFixed(2)} CRD</td><td>${statusTag(item.status)}</td><td>${esc(date(item.created_at))}</td><td class="actions"><button class="button mini secondary" data-action="order-details" data-id="${item.id}">Dados</button>${String(item.status).toUpperCase() === 'PENDENTE' ? `<button class="button mini secondary" data-action="order-status" data-status="PROCESSANDO" data-id="${item.id}">Iniciar</button>` : ''}${['PENDENTE','PROCESSANDO'].includes(String(item.status).toUpperCase()) ? `<button class="button mini primary" data-action="order-status" data-status="CONCLUIDO" data-id="${item.id}">Concluir</button><button class="button mini secondary" data-action="order-status" data-status="CANCELADO" data-id="${item.id}">Cancelar + estornar</button>` : ''}</td></tr>`).join('') || '<tr><td colspan="7" class="empty-state">Ainda não há registros.</td></tr>'}
      </tbody></table></div></section>`;
  }

  async function payments() {
    const list = await api('/api/bot/payments');
    root.querySelector('#content').innerHTML = `${pageHead('Pagamentos PIX', 'Histórico das cobranças, créditos liberados e estado de confirmação do Asaas.')}
      <section class="panel table-panel"><div class="table-wrap"><table><thead><tr><th>Pagamento</th><th>Usuário</th><th>Valor</th><th>Créditos</th><th>Status</th><th>Data</th></tr></thead><tbody>
      ${list.map(item => `<tr><td><b>${esc(item.payment_id)}</b><small>ID interno #${item.id}</small></td><td>${esc(item.name || item.username || '—')}<small>ID ${esc(item.telegram_id)}</small></td><td>${money(item.amount)}</td><td>${Number(item.credits || 0).toFixed(2)} CRD</td><td>${statusTag(item.status)}</td><td>${esc(date(item.created_at))}</td></tr>`).join('') || '<tr><td colspan="6" class="empty-state">Ainda não há pagamentos.</td></tr>'}
      </tbody></table></div></section>`;
  }

  async function logs() {
    const [list, ledger] = await Promise.all([api('/api/bot/logs'), api('/api/bot/credit-ledger')]);
    root.querySelector('#content').innerHTML = `${pageHead('Auditoria ao vivo', 'Registros atualizados automaticamente a cada 5 segundos. Ações sensíveis ficam restritas ao painel.')}
      <section class="panel"><div class="panel-heading"><div><h3>Eventos do sistema</h3><p>Cadastro, login, pedidos, pagamentos e operações administrativas</p></div></div><div id="live-events">${logRows(list)}</div></section>
      <section class="panel table-panel"><div class="panel-heading"><div><h3>Movimentações de créditos</h3><p>Débitos, recargas, ajustes e estornos rastreáveis</p></div></div><div class="table-wrap"><table><thead><tr><th>Usuário Telegram</th><th>Movimento</th><th>Saldo após</th><th>Motivo</th><th>Responsável</th><th>Data</th></tr></thead><tbody>${ledger.map(row => `<tr><td>${esc(row.telegram_id)}</td><td>${Number(row.amount) > 0 ? '+' : ''}${Number(row.amount || 0).toFixed(2)} CRD</td><td>${Number(row.balance_after || 0).toFixed(2)} CRD</td><td>${esc(row.note)}</td><td>${esc(row.actor || 'Sistema')}</td><td>${esc(date(row.created_at))}</td></tr>`).join('') || '<tr><td colspan="6" class="empty-state">Nenhuma movimentação ainda.</td></tr>'}</tbody></table></div></section>`;
  }

  async function settings() {
    const data = await api('/api/bot/config');
    const credentials = [
      ['Bot Telegram', data.credentials.telegram_token, 'TELEGRAM_TOKEN'],
      ['Grupo de auditoria', data.credentials.telegram_group, 'TELEGRAM_LOG_CHAT_ID ou TELEGRAM_GROUP_ID'],
      ['Chave Asaas', data.credentials.asaas_key, 'ASAAS_API_KEY'],
      ['Segredo do webhook', data.credentials.asaas_webhook, 'ASAAS_WEBHOOK_TOKEN'],
      ['URL do parceiro', data.credentials.partner_url, 'PARTNER_API_URL'],
      ['Usuário do parceiro', data.credentials.partner_user, 'PARTNER_API_USER'],
      ['Chave do parceiro', data.credentials.partner_key, 'PARTNER_API_KEY']
    ];
    const values = data.settings || {};
    root.querySelector('#content').innerHTML = `${pageHead('Integrações e parâmetros', 'Segredos são lidos do ambiente do servidor e nunca retornados à interface.',
      '<button class="button primary" data-action="check-api">⌁ Verificar conexões</button>')}
      <div id="api-result"></div>
      <div class="settings-grid"><section class="panel"><div class="panel-heading"><div><h3>Credenciais do servidor</h3><p>Configure no ambiente da Square Cloud, não no navegador.</p></div></div>
        <div class="integration-list">${credentials.map(([name, ready, key]) => `<div class="integration"><span class="integration-icon">${ready ? '✓' : '!'}</span><div><b>${esc(name)}</b><small>${esc(key)}</small></div>${statusTag(ready ? 'Configurado' : 'Ausente')}</div>`).join('')}</div>
        <div class="notice">Os tokens nunca são exibidos nem gravados por esta tela. Depois de alterar variáveis no provedor, reinicie o serviço.</div>
      </section>
      <section class="panel"><div class="panel-heading"><div><h3>Parâmetros comerciais</h3><p>Valores usados no cálculo de créditos dos serviços.</p></div></div>
        <form id="settings-form" class="form-grid">
          <label>Cotação USD → BRL<input name="usd_rate" type="number" step="0.01" min="0" value="${esc(values.usd_rate || '5.40')}" required></label>
          <label>Taxa fixa de pagamento (R$)<input name="payment_fee" type="number" step="0.01" min="0" value="${esc(values.payment_fee || '0.99')}" required></label>
          <label class="full">Link de suporte<input name="support_url" type="url" placeholder="https://t.me/..." value="${esc(values.support_url || '')}"></label>
          <label class="full">ID do grupo Telegram<input value="${esc(values.telegram_group_id || '')}" readonly><small>Configurado no ambiente; o ID não é uma credencial secreta.</small></label>
          <button class="button primary">Salvar parâmetros</button>
        </form>
      </section></div>
      <section class="panel partner-note"><div class="panel-heading"><div><h3>Catálogo do servidor parceiro</h3><p>Importação protegida para não criar pedidos ou preços incorretos.</p></div>${statusTag(data.credentials.partner_url && data.credentials.partner_key ? 'Configuração presente' : 'Não configurado')}</div><p>${esc(data.partner_sync)}</p><p class="subtle">O pacote enviado não inclui documentação do formato de listagem da API do fornecedor. Com as chaves disponíveis, o painel ainda precisa do endpoint/operação oficial para buscar o catálogo com segurança.</p></section>`;
  }

  async function refreshLive() {
    liveBusy = true;
    try {
      if (!document.querySelector('#live-events')) return;
      const rows = await api('/api/bot/logs?after=0');
      const host = document.querySelector('#live-events');
      if (host) host.innerHTML = logRows(rows);
      if (active === 'dashboard') {
        const data = await api('/api/bot/dashboard');
        const status = document.querySelector('.hero-state');
        if (status) status.innerHTML = `${statusTag(data.bot_state?.state)}<small>${esc(data.bot_state?.message || '')}</small>`;
        const health = document.querySelector('#health-summary');
        if (health) health.innerHTML = `<div class="health-item"><span>Bot Telegram</span>${statusTag(data.bot_state?.state)}</div><div class="health-item"><span>Asaas</span>${statusTag(data.credentials?.asaas_key ? 'Configurado' : 'Ausente')}</div><div class="health-item"><span>API do parceiro</span>${statusTag(data.credentials?.partner_key && data.credentials?.partner_url ? 'Configuração presente' : 'Ausente')}</div>`;
      }
    } catch (error) {
      console.warn('Atualização ao vivo do painel do bot falhou:', error.message);
    } finally { liveBusy = false; }
  }

  function showModal(title, body, submitLabel = 'Salvar') {
    const modal = root.querySelector('#modal');
    modal.innerHTML = `<div class="modal-backdrop" data-action="modal-close"></div><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header><div><p class="eyebrow">KV CELL • CONFIGURAÇÃO</p><h2 id="modal-title">${title}</h2></div><button type="button" class="icon-button" data-action="modal-close" aria-label="Fechar">×</button></header><form id="modal-form"><div class="modal-body">${body}</div><footer><button type="button" class="button ghost" data-action="modal-close">Cancelar</button><button class="button primary">${submitLabel}</button></footer></form></section>`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('[data-action="modal-close"]')?.focus();
  }

  async function showServiceForm(id = 0) {
    const [categoryList, serviceList] = await Promise.all([api('/api/bot/categories'), api('/api/bot/services')]);
    const item = serviceList.find(service => Number(service.id) === Number(id)) || {};
    const options = categoryList.map(category => `<option value="${category.id}" ${Number(item.category_id) === Number(category.id) ? 'selected' : ''}>${esc(category.name)}</option>`).join('');
    showModal(id ? 'Editar serviço' : 'Cadastrar serviço', `<div class="form-grid">
      <label>Nome do serviço *<input name="name" maxlength="120" value="${esc(item.name || '')}" required></label>
      <label>Categoria *<select name="category_id" required>${options || '<option value="">Cadastre uma categoria primeiro</option>'}</select></label>
      <label>Tipo<select name="kind"><option ${item.kind === 'REGISTRO' || !item.kind ? 'selected' : ''}>REGISTRO</option><option ${item.kind === 'ALUGUEL' ? 'selected' : ''}>ALUGUEL</option><option ${item.kind === 'CREDITO' ? 'selected' : ''}>CREDITO</option></select></label>
      <label>ID do serviço no parceiro<input name="provider_service_id" value="${esc(item.provider_service_id || '')}" maxlength="120"></label>
      <label>Custo do parceiro (USD)<input name="cost_usd" type="number" min="0" step="0.01" value="${Number(item.cost_usd || 0)}"></label>
      <label>Acréscimo mínimo (CRD)<input name="min_add" type="number" min="0" step="0.01" value="${Number(item.min_add || 0)}"></label>
      <label>Margem cliente (%)<input name="margin_cliente" type="number" min="0" step="0.1" value="${Number(item.margin_cliente ?? 30)}"></label>
      <label>Margem logista (%)<input name="margin_logista" type="number" min="0" step="0.1" value="${Number(item.margin_logista ?? 40)}"></label>
      <label>Margem unlocker (%)<input name="margin_unlocker" type="number" min="0" step="0.1" value="${Number(item.margin_unlocker ?? 30)}"></label>
      <label class="full">Descrição<textarea name="description" rows="2">${esc(item.description || '')}</textarea></label>
      <label class="full">Campos pedidos ao usuário (JSON)<textarea name="fields_json" rows="4" placeholder='[{"name":"imei","label":"IMEI"}]'>${esc(item.fields_json || '[]')}</textarea><small>Use uma lista JSON; os dados digitados não são enviados aos logs do grupo.</small></label>
      <label>Tutorial (URL)<input name="tutorial_url" type="url" value="${esc(item.tutorial_url || '')}"></label>
      <label>Download (URL)<input name="download_url" type="url" value="${esc(item.download_url || '')}"></label>
      <label class="full">Mensagem antes do pedido<textarea name="before_message" rows="2">${esc(item.before_message || '')}</textarea></label>
      <label class="check-label"><input name="active" type="checkbox" ${item.active === 0 ? '' : 'checked'}> Serviço ativo</label>
    </div>`);
    const form = root.querySelector('#modal-form');
    form.dataset.actionType = id ? 'service-save' : 'service-create';
    form.dataset.id = id;
  }

  async function onAction(event) {
    const button = event.target.closest('[data-action],[data-go]');
    if (!button) return;
    if (button.dataset.go) return openPage(button.dataset.go);
    const { action, id } = button.dataset;
    try {
      if (action === 'retry') return loadPage().catch(showError);
      if (action === 'modal-close') {
        const modal = root.querySelector('#modal');
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        return;
      }
      if (action === 'service-new') return showServiceForm();
      if (action === 'service-edit') return showServiceForm(id);
      if (action === 'category-new') {
        const categories = await api('/api/bot/categories');
        const options = categories.filter(category => !category.parent_id).map(category => `<option value="${category.id}">${esc(category.name)}</option>`).join('');
        showModal('Nova categoria', `<label>Nome da categoria *<input name="name" maxlength="80" required></label><label>Categoria principal<select name="parent_id"><option value="">Categoria raiz</option>${options}</select></label>`);
        root.querySelector('#modal-form').dataset.actionType = 'category-create';
        return;
      }
      if (action === 'service-disable') {
        if (!confirm('Desativar este serviço? Os pedidos anteriores serão mantidos.')) return;
        await api(`/api/bot/services?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
        toast('Serviço desativado.');
        return services();
      }
      if (action === 'category-delete') {
        if (!confirm('Remover esta categoria? Categorias usadas por serviços ou subcategorias não podem ser removidas.')) return;
        await api(`/api/bot/categories?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
        toast('Categoria removida.');
        return services();
      }
      if (action === 'order-status') {
        const status = button.dataset.status;
        if (status === 'CANCELADO' && !confirm('Cancelar o pedido e devolver os créditos ao saldo do usuário?')) return;
        await api(`/api/bot/orders?id=${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify({ status }) });
        toast(status === 'CANCELADO' ? 'Pedido cancelado e créditos devolvidos.' : `Pedido atualizado: ${status}.`);
        return orders();
      }
      if (action === 'order-details') {
        if (!confirm('Os dados do formulário podem conter informações pessoais ou credenciais. Exibir somente em ambiente privado?')) return;
        const detail = await api(`/api/bot/order-details?id=${encodeURIComponent(id)}`);
        const entries = Object.entries(detail.data || {});
        const dataHtml = entries.length
          ? entries.map(([key, value]) => `<label>${esc(key)}<textarea rows="2" readonly>${esc(typeof value === 'string' ? value : JSON.stringify(value))}</textarea></label>`).join('')
          : '<p class="muted">Este pedido não contém campos adicionais.</p>';
        showModal(`Dados privados do pedido #${detail.id}`, `<div class="notice">A consulta foi registrada na auditoria. Estes dados não são enviados ao grupo do Telegram.</div><p class="muted">${esc(detail.service_name || 'Serviço')}</p><div class="form-grid">${dataHtml}</div>`, 'Fechar');
        const closeButton = root.querySelector('#modal-form button.primary');
        closeButton.type = 'button';
        closeButton.addEventListener('click', () => {
          root.querySelector('#modal').classList.remove('open');
          root.querySelector('#modal').setAttribute('aria-hidden', 'true');
        }, { once: true });
        return;
      }
      if (action === 'credit') {
        const user = (await api('/api/bot/users?q=' + encodeURIComponent(id))).find(item => String(item.telegram_id) === String(id));
        if (!user) throw new Error('Usuário não encontrado.');
        showModal('Movimentar créditos', `<div class="balance-summary"><b>${esc(user.name || user.username || id)}</b><span>Saldo atual: ${Number(user.balance || 0).toFixed(2)} CRD</span></div><label>Movimento<select name="direction"><option value="add">Adicionar créditos</option><option value="remove">Remover créditos</option></select></label><label>Valor em CRD *<input name="amount" type="number" min="0.01" max="100000" step="0.01" required></label><label>Motivo da movimentação *<input name="note" maxlength="200" required></label>`);
        root.querySelector('#modal-form').dataset.actionType = 'credit';
        root.querySelector('#modal-form').dataset.id = id;
        return;
      }
      if (action === 'user-edit') {
        const blocked = button.dataset.blocked !== '1';
        showModal(blocked ? 'Bloquear acesso' : 'Atualizar usuário', `<p class="muted">${blocked ? 'O usuário não poderá usar o bot enquanto estiver bloqueado.' : 'O usuário poderá voltar a usar os serviços do bot.'}</p><label>Perfil<select name="role"><option ${button.dataset.role === 'CLIENTE_FIXO' ? 'selected' : ''}>CLIENTE_FIXO</option><option ${button.dataset.role === 'LOGISTA' ? 'selected' : ''}>LOGISTA</option><option ${button.dataset.role === 'UNLOCKER' ? 'selected' : ''}>UNLOCKER</option></select></label>`);
        root.querySelector('#modal-form').dataset.actionType = 'user-update';
        root.querySelector('#modal-form').dataset.id = id;
        root.querySelector('#modal-form').dataset.blocked = blocked ? '1' : '0';
        return;
      }
      if (action === 'check-api') {
        const host = root.querySelector('#api-result');
        host.innerHTML = '<div class="notice">Verificando Telegram e Asaas…</div>';
        const result = await api('/api/bot/check', { method: 'POST', body: '{}' });
        host.innerHTML = `<section class="panel check-results">${Object.entries(result.checks).map(([name, check]) => `<div class="health-item"><span>${esc(name.toUpperCase())}<small>${esc(check.detail)}</small></span>${statusTag(check.ok ? 'Conectado' : 'Atenção')}</div>`).join('')}</section>`;
        toast('Verificação concluída.');
      }
    } catch (error) { toast(error.message, true); }
  }

  async function onSubmit(event) {
    if (event.target.id === 'settings-form') {
      event.preventDefault();
      try {
        const values = Object.fromEntries(new FormData(event.target));
        await api('/api/bot/settings', { method: 'PUT', body: JSON.stringify({ settings: values }) });
        toast('Parâmetros comerciais salvos.');
      } catch (error) { toast(error.message, true); }
      return;
    }
    if (event.target.id !== 'modal-form') return;
    event.preventDefault();
    const form = event.target;
    const values = Object.fromEntries(new FormData(form));
    try {
      if (form.dataset.actionType === 'category-create') {
        await api('/api/bot/categories', { method: 'POST', body: JSON.stringify(values) });
        toast('Categoria criada.');
      } else if (form.dataset.actionType === 'service-create' || form.dataset.actionType === 'service-save') {
        values.active = form.elements.active.checked ? 1 : 0;
        const editing = form.dataset.actionType === 'service-save';
        await api(`/api/bot/services${editing ? `?id=${encodeURIComponent(form.dataset.id)}` : ''}`, { method: editing ? 'PUT' : 'POST', body: JSON.stringify(values) });
        toast(editing ? 'Serviço atualizado.' : 'Serviço cadastrado.');
      } else if (form.dataset.actionType === 'credit') {
        const amount = Number(values.amount) * (values.direction === 'remove' ? -1 : 1);
        await api(`/api/bot/users/${encodeURIComponent(form.dataset.id)}/credit`, { method: 'POST', body: JSON.stringify({ amount, note: values.note }) });
        toast('Saldo atualizado e movimento registrado.');
      } else if (form.dataset.actionType === 'user-update') {
        await api('/api/bot/users', { method: 'PUT', body: JSON.stringify({ telegram_id: form.dataset.id, role: values.role, blocked: form.dataset.blocked === '1' }) });
        toast(form.dataset.blocked === '1' ? 'Acesso bloqueado.' : 'Acesso liberado.');
      }
      root.querySelector('#modal').classList.remove('open');
      await loadPage();
    } catch (error) { toast(error.message, true); }
  }

  async function start() {
    try {
      const result = await api('/api/me');
      me = result.user;
      if (me.role !== 'admin') return showLogin('Esta área é exclusiva para administradores.');
      boot();
    } catch {
      showLogin();
    }
  }

  start();
})();
