# KV CELL OS PREMIUM — checklist técnico

## Correções desta versão
- [x] Cliente selecionado por nome/telefone; IDs ficam internos.
- [x] Busca por início do nome e por números do telefone.
- [x] Formulário técnico separado de desbloqueio.
- [x] Orçamento de serviço separado de orçamento de desbloqueio.
- [x] Deslocamento opcional; campo de valor só aparece quando habilitado.
- [x] Garantia em dias digitáveis.
- [x] Checklist visual com caixas selecionáveis.
- [x] Checklist específico para aparelhos esquecidos/abandono.
- [x] Fotos em OS, desbloqueios, aparelhos e compras.
- [x] Link público de acompanhamento de OS e orçamento.
- [x] CRM de clientes com quantidade de serviços, última atividade, score e valor movimentado.
- [x] Atalho de WhatsApp com mensagem promocional.
- [x] Cadastro de usuários/funcionários com perfil, unidade e permissões.
- [x] Erros de gravação retornam mensagem JSON em vez de falhar silenciosamente.
- [x] Migração automática do SQLite para campos novos.

## Smoke test executado antes do empacotamento
- [x] `app.py` compila com Python.
- [x] `app.js` passa em `node --check`.
- [x] Login administrativo testado.
- [x] Cadastro de cliente testado.
- [x] Busca de cliente por telefone testada.
- [x] Estatísticas/score de cliente testados.
- [x] Cadastro de usuário testado.
- [x] Cadastro de OS testado.
- [x] Cadastro de orçamento testado.
- [x] Cadastro de aparelho esquecido testado.
- [x] Endpoint público de orçamento criado e validado.
- [x] `/api/health` validado.
- [x] Banco de teste removido do pacote final.

## Antes de produção
- [ ] Alterar senha inicial do administrador.
- [ ] Configurar HTTPS/domínio da Square Cloud (a Square fornece a camada web).
- [ ] Configurar backup externo além do backup local.
- [ ] Se quiser IA de precificação, adicionar chave/API em variável de ambiente.
