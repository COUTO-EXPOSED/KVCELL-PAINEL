import {
  r as i,
  w as m,
  cD as fe,
  ae,
  dd as ge,
  ad as B,
  c0 as q,
  j as e,
  b2 as Ce,
  I as L,
  c2 as je,
  b3 as T,
  h as Se,
  dc as te,
  U as D,
  bO as $,
  bS as Z,
  ce as Ee,
  z as Ae,
  bU as f,
  cG as xe,
  G as V,
  a1 as G,
  f as ee,
  p as P,
  e as ve,
  aa as se,
  B as v,
  ac as J,
  Y as De,
  $ as Oe,
  bX as qe,
  cz as ue,
  a9 as be,
  bm as ke,
  D as K,
  c as Q,
  a_ as X,
  d as Y,
  n as I,
  b1 as Fe,
  c7 as Re,
  bP as Le,
  bn as Te,
  bo as Pe,
  bp as ze,
  bq as $e,
  br as Ue,
  bs as Me,
  bt as Ve,
  bu as Ge,
  ga as Ie,
  bl as Be,
  bW as pe,
  df as We,
  ej as He,
  bv as Je,
  cE as Ke,
  O as Qe,
} from "./index-V8ZHCWL2.js";
import { U as Xe } from "./user-check-9aDtiEex.js";
const z = {
    sales: 0,
    revenue: 0,
    expenses: 0,
    profit: 0,
    registrations: 0,
    serviceOrders: 0,
    actions: 0,
    lastActivity: null,
  },
  Ye = new Set([
    "cliente_criado",
    "produto_criado",
    "os_criada",
    "orcamento_criado",
    "garantia_criada",
    "estoque_movimentacao",
    "fiado_registrado",
  ]);
function Ze(o, N) {
  const [u, O] = i.useState({}),
    [_, w] = i.useState(!0),
    k = N.map((b) => `${b.id}:${b.name}`).join("|"),
    C = i.useCallback(async () => {
      if (!o || N.length === 0) {
        O({}), w(!1);
        return;
      }
      w(!0);
      try {
        const [b, g] = await Promise.all([
            m
              .from("transactions")
              .select("amount, type, description, date, created_at")
              .eq("user_id", o)
              .ilike("description", "%[Func:%")
              .limit(5e3),
            m
              .from("employee_action_logs")
              .select("employee_id, action_type, created_at, metadata")
              .eq("owner_id", o)
              .order("created_at", { ascending: !1 })
              .limit(5e3),
          ]),
          l = {};
        N.forEach((n) => {
          l[n.id] = { ...z };
        }),
          (b.data || []).forEach((n) => {
            const a = (n.description || "").match(/\[Func:\s*([^\]]+)\]/i);
            if (!a) return;
            const p = a[1].trim().toLowerCase(),
              E = N.find((F) => F.name.trim().toLowerCase() === p);
            if (!E) return;
            const h = Number(n.amount) || 0,
              S = l[E.id];
            n.type === "income"
              ? ((S.revenue += h), (S.sales += 1))
              : n.type === "expense" && (S.expenses += h);
          }),
          (g.data || []).forEach((n) => {
            const x = l[n.employee_id];
            x &&
              ((x.actions += 1),
              Ye.has(n.action_type) && (x.registrations += 1),
              String(n.action_type).startsWith("os_") && (x.serviceOrders += 1),
              (!x.lastActivity ||
                new Date(n.created_at) > new Date(x.lastActivity)) &&
                (x.lastActivity = n.created_at));
          }),
          Object.values(l).forEach((n) => {
            n.profit = n.revenue - n.expenses;
          }),
          O(l);
      } catch {
      } finally {
        w(!1);
      }
    }, [o, k]);
  return (
    i.useEffect(() => {
      C();
    }, [C]),
    { stats: u, loading: _, reload: C }
  );
}
const es = {
    venda_pdv: te,
    receita: B,
    despesa: ge,
    cliente_criado: D,
    cliente_editado: D,
    cliente_removido: D,
    os_criada: $,
    os_editada: $,
    os_status: $,
    produto_criado: Z,
    estoque_movimentacao: Z,
  },
  ss = {
    venda_pdv: "bg-primary/10 text-primary",
    receita: "bg-primary/10 text-primary",
    despesa: "bg-destructive/10 text-destructive",
    cliente_criado: "bg-blue-500/10 text-blue-600",
    os_criada: "bg-amber-500/10 text-amber-600",
    os_status: "bg-purple-500/10 text-purple-600",
  };
function as({ employeeId: o, employeeName: N, stats: u }) {
  const [O, _] = i.useState([]),
    [w, k] = i.useState(""),
    [C, b] = i.useState(!0),
    { format: g } = fe();
  i.useEffect(() => {
    if (!o) return;
    let a = !0;
    (async () => {
      b(!0);
      const { data: h } = await m
        .from("employee_action_logs")
        .select("*")
        .eq("employee_id", o)
        .order("created_at", { ascending: !1 })
        .limit(300);
      a && (_(h || []), b(!1));
    })();
    const E = m
      .channel(`emp_logs_${o}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "employee_action_logs",
          filter: `employee_id=eq.${o}`,
        },
        (h) => _((S) => [h.new, ...S])
      )
      .subscribe();
    return () => {
      (a = !1), m.removeChannel(E);
    };
  }, [o]);
  const l = O.filter(
      (a) =>
        (a.action_description || "").toLowerCase().includes(w.toLowerCase()) ||
        (a.action_type || "").toLowerCase().includes(w.toLowerCase())
    ),
    n = (a) =>
      new Date(a).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    x = [
      {
        label: "Receita gerada",
        value: g(u?.revenue || 0),
        icon: ae,
        tone: "text-primary",
      },
      {
        label: "Despesas",
        value: g(u?.expenses || 0),
        icon: ge,
        tone: "text-destructive",
      },
      {
        label: "Saldo",
        value: g(u?.profit || 0),
        icon: B,
        tone: "text-foreground",
      },
      {
        label: "Ações",
        value: String(u?.actions || 0),
        icon: q,
        tone: "text-foreground",
      },
    ];
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsx("div", {
        className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
        children: x.map((a) =>
          e.jsxs(
            "div",
            {
              className: "rounded-2xl border border-border/50 bg-muted/30 p-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-1.5 mb-1",
                  children: [
                    e.jsx(a.icon, { className: `w-3.5 h-3.5 ${a.tone}` }),
                    e.jsx("span", {
                      className: "text-[10px] text-muted-foreground",
                      children: a.label,
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: `text-sm font-bold truncate ${a.tone}`,
                  children: a.value,
                }),
              ],
            },
            a.label
          )
        ),
      }),
      e.jsxs("div", {
        className: "relative",
        children: [
          e.jsx(Ce, {
            className:
              "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
          }),
          e.jsx(L, {
            value: w,
            onChange: (a) => k(a.target.value),
            placeholder: `Buscar atividade de ${N}...`,
            className: "pl-9 rounded-xl",
          }),
        ],
      }),
      e.jsx(je, {
        className: "h-[45vh] pr-3",
        children: C
          ? e.jsx("div", {
              className: "py-10 text-center text-sm text-muted-foreground",
              children: "Carregando atividades...",
            })
          : l.length === 0
          ? e.jsxs("div", {
              className: "py-10 text-center text-sm text-muted-foreground",
              children: [
                e.jsx(q, { className: "w-8 h-8 mx-auto mb-2 opacity-40" }),
                "Nenhuma atividade registrada ainda.",
              ],
            })
          : e.jsx("div", {
              className: "space-y-2",
              children: l.map((a) => {
                const p = es[a.action_type] || q;
                return e.jsxs(
                  "div",
                  {
                    className:
                      "flex items-start gap-3 rounded-2xl border border-border/40 bg-card p-3",
                    children: [
                      e.jsx("div", {
                        className: `w-8 h-8 rounded-xl flex items-center justify-center ${
                          ss[a.action_type] || "bg-muted text-muted-foreground"
                        }`,
                        children: e.jsx(p, { className: "w-4 h-4" }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx("p", {
                            className: "text-sm font-medium truncate",
                            children: a.action_description,
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-2 mt-0.5",
                            children: [
                              e.jsx(T, {
                                variant: "outline",
                                className: "text-[10px]",
                                children: a.action_type,
                              }),
                              e.jsxs("span", {
                                className:
                                  "text-[10px] text-muted-foreground flex items-center gap-1",
                                children: [
                                  e.jsx(Se, { className: "w-3 h-3" }),
                                  " ",
                                  n(a.created_at),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  a.id
                );
              }),
            }),
      }),
    ],
  });
}
const A = {
    os: !1,
    clientes: !1,
    tecnicos: !1,
    estoque: !1,
    vendas: !1,
    faturamento: !1,
    orcamentos: !1,
    precificacao: !1,
    antivirus: !1,
    garantias: !1,
    fiado: !1,
    cadastro_produtos: !1,
    relatorios: !1,
    ver_precos: !1,
    ver_lucro: !1,
    ver_faturamento: !1,
    ver_preco_custo: !1,
    fornecedores: !1,
    comunidade: !1,
    catalogo: !1,
    compra_usados: !1,
    peliculas: !1,
    servicos_indicacoes: !1,
    caixa_bloqueado: !1,
  },
  he = {
    os: {
      label: "Ordens de Serviço",
      icon: q,
      description: "Criar e gerenciar OS",
    },
    clientes: { label: "Clientes", icon: D, description: "Gerenciar clientes" },
    tecnicos: {
      label: "Técnicos",
      icon: Ie,
      description: "Gerenciar área técnica",
    },
    estoque: {
      label: "Estoque",
      icon: Z,
      description: "Gerenciar estoque e peças",
    },
    vendas: {
      label: "Vendas / PDV",
      icon: te,
      description: "Realizar vendas e PDV",
    },
    faturamento: {
      label: "Financeiro",
      icon: B,
      description: "Acessar módulo financeiro",
    },
    orcamentos: {
      label: "Orçamentos",
      icon: Be,
      description: "Criar e gerenciar orçamentos",
    },
    precificacao: {
      label: "Precificação",
      icon: pe,
      description: "Criar tabelas de preços e serviços",
    },
    antivirus: {
      label: "Remoção de Vírus",
      icon: pe,
      description: "Varrer e remover malwares via ADB",
    },
    garantias: {
      label: "Garantias",
      icon: ee,
      description: "Gerenciar garantias",
    },
    fiado: {
      label: "Fiado / Crédito",
      icon: We,
      description: "Gerenciar vendas fiado",
    },
    cadastro_produtos: {
      label: "Cadastro de Produtos",
      icon: $,
      description: "Cadastrar e editar produtos",
    },
    relatorios: {
      label: "Relatórios",
      icon: ve,
      description: "Visualizar relatórios e métricas",
    },
    ver_precos: {
      label: "Ver Preços",
      icon: se,
      description: "Visualizar preços dos produtos",
    },
    ver_lucro: {
      label: "Ver Lucro Líquido",
      icon: ae,
      description: "Visualizar lucro líquido e margem",
    },
    ver_faturamento: {
      label: "Ver Faturamento",
      icon: B,
      description: "Visualizar receita e despesas",
    },
    ver_preco_custo: {
      label: "Ver Preço de Custo",
      icon: be,
      description: "Visualizar preço de custo dos produtos",
    },
    fornecedores: {
      label: "Fornecedores",
      icon: He,
      description: "Gerenciar fornecedores",
    },
    comunidade: {
      label: "Comunidade",
      icon: P,
      description: "Acessar comunidade",
    },
    catalogo: {
      label: "Catálogo",
      icon: Je,
      description: "Gerenciar catálogo digital",
    },
    compra_usados: {
      label: "Compra de Usados",
      icon: Xe,
      description: "Compra e venda de usados",
    },
    peliculas: {
      label: "Películas",
      icon: $,
      description: "Compatibilidade de películas",
    },
    servicos_indicacoes: {
      label: "Serviços e Indicações",
      icon: Ke,
      description: "Acessar parcerias e indicações",
    },
    caixa_bloqueado: {
      label: "🔒 Bloquear Abrir/Fechar Caixa",
      icon: Qe,
      description:
        "Quando ativado, impede o funcionário de abrir e fechar o caixa",
    },
  },
  is = () => {
    Ee();
    const { user: o } = Ae(),
      { format: N } = fe(),
      [u, O] = i.useState([]),
      [_, w] = i.useState(null),
      [k, C] = i.useState(!0),
      [b, g] = i.useState(!1),
      [l, n] = i.useState(null),
      [x, a] = i.useState(null),
      [p, E] = i.useState(null),
      [h, S] = i.useState(null),
      [F, re] = i.useState([]),
      [W, ie] = i.useState(""),
      [oe, H] = i.useState({}),
      ne = i.useRef(null),
      [d, y] = i.useState({
        name: "",
        email: "",
        password: "",
        permissions: { ...A },
      });
    i.useEffect(() => {
      o && U();
    }, [o]),
      i.useEffect(() => {
        if (!o || u.length === 0) return;
        const s = u.map((c) => c.id),
          t = m
            .channel("owner_emp_chat")
            .on(
              "postgres_changes",
              { event: "INSERT", schema: "public", table: "employee_messages" },
              (c) => {
                const r = c.new;
                s.includes(r.employee_id) &&
                  (r.sender_type === "employee" &&
                    (H((j) => ({
                      ...j,
                      [r.employee_id]: (j[r.employee_id] || 0) + 1,
                    })),
                    f.info("Nova mensagem de funcionário!")),
                  p && r.employee_id === p.id && re((j) => [...j, r]));
              }
            )
            .subscribe();
        return () => {
          m.removeChannel(t);
        };
      }, [o, u, p]),
      i.useEffect(() => {
        ne.current?.scrollIntoView({ behavior: "smooth" });
      }, [F]);
    const U = async () => {
        if (o) {
          C(!0);
          try {
            const [s, t] = await Promise.all([
              m
                .from("employees")
                .select("*")
                .eq("owner_id", o.id)
                .order("created_at", { ascending: !1 }),
              m
                .from("user_multi_plans")
                .select("*, multi_user_plans(*)")
                .eq("user_id", o.id)
                .eq("is_active", !0)
                .maybeSingle(),
            ]);
            if (s.error) throw s.error;
            const c = (s.data || []).map((r) => ({
              ...r,
              permissions:
                typeof r.permissions == "string"
                  ? JSON.parse(r.permissions)
                  : r.permissions,
            }));
            if ((O(c), w(t.data), c.length > 0)) {
              const { data: r } = await m
                  .from("employee_messages")
                  .select("employee_id")
                  .eq("sender_type", "employee")
                  .eq("read", !1)
                  .in(
                    "employee_id",
                    c.map((M) => M.id)
                  ),
                j = {};
              (r || []).forEach((M) => {
                j[M.employee_id] = (j[M.employee_id] || 0) + 1;
              }),
                H(j);
            }
          } catch (s) {
            f.error("Erro ao carregar dados: " + s.message);
          } finally {
            C(!1);
          }
        }
      },
      { stats: R } = Ze(
        o?.id,
        u.map((s) => ({ id: s.id, name: s.name }))
      ),
      le = _?.multi_user_plans?.max_employees || 0,
      ce = u.length,
      de = ce < le,
      ye = async () => {
        if (!o) return;
        const s = d.name.trim(),
          t = d.email.trim().toLowerCase();
        if (!s || !t) {
          f.error("Preencha nome e email");
          return;
        }
        if (!l && !d.password) {
          f.error("Senha é obrigatória para novos funcionários");
          return;
        }
        if (!l && !de) {
          f.error("Limite de funcionários atingido para seu plano");
          return;
        }
        try {
          const { data: c, error: r } = await m.functions.invoke(
            "create-employee",
            {
              body: {
                employee_id: l?.id,
                name: s,
                email: t,
                password: d.password || void 0,
                permissions: d.permissions,
                owner_id: o.id,
              },
            }
          );
          if (r) {
            const j = await r.context?.json?.().catch(() => null);
            throw new Error(j?.error || r.message);
          }
          if (c?.error) throw new Error(c.error);
          f.success(
            l
              ? "Funcionário e acesso atualizados!"
              : "Funcionário criado com sucesso! Ele já pode fazer login."
          ),
            g(!1),
            n(null),
            y({ name: "", email: "", password: "", permissions: { ...A } }),
            U();
        } catch (c) {
          f.error("Erro: " + c.message);
        }
      },
      Ne = async () => {
        if (x)
          try {
            const { error: s } = await m
              .from("employees")
              .delete()
              .eq("id", x.id);
            if (s) throw s;
            f.success("Funcionário removido"), a(null), U();
          } catch (s) {
            f.error("Erro: " + s.message);
          }
      },
      _e = async (s) => {
        try {
          const { error: t } = await m
            .from("employees")
            .update({ is_active: !s.is_active })
            .eq("id", s.id);
          if (t) throw t;
          f.success(
            s.is_active ? "Funcionário desativado" : "Funcionário ativado"
          ),
            U();
        } catch (t) {
          f.error("Erro: " + t.message);
        }
      },
      we = async (s) => {
        E(s);
        const { data: t } = await m
          .from("employee_messages")
          .select("*")
          .eq("employee_id", s.id)
          .order("created_at", { ascending: !0 })
          .limit(100);
        re(t || []),
          await m
            .from("employee_messages")
            .update({ read: !0 })
            .eq("employee_id", s.id)
            .eq("sender_type", "employee")
            .eq("read", !1),
          H((c) => ({ ...c, [s.id]: 0 }));
      },
      me = async () => {
        if (!W.trim() || !p || !o) return;
        const { error: s } = await m
          .from("employee_messages")
          .insert({
            employee_id: p.id,
            owner_id: o.id,
            sender_type: "owner",
            message: W.trim(),
          });
        if (s) {
          f.error("Erro ao enviar");
          return;
        }
        ie("");
      };
    if (!_) {
      const s = "5511999999999",
        t = encodeURIComponent(
          "Olá! Tenho interesse em contratar um plano Multi Usuários para gerenciar funcionários no Tech OS PRO."
        ),
        c = [
          {
            name: "Multi Usuários Básico",
            employees: 1,
            price: "R$ 39,90",
            highlight: !1,
          },
          {
            name: "Multi Usuários Silver",
            employees: 2,
            price: "R$ 44,90",
            highlight: !0,
          },
          {
            name: "Multi Usuários Gold",
            employees: 3,
            price: "R$ 49,90",
            highlight: !1,
          },
        ];
      return e.jsx(e.Fragment, {
        children: e.jsxs("div", {
          className: "max-w-3xl mx-auto py-8 sm:py-12",
          children: [
            e.jsxs("div", {
              className: "text-center mb-8",
              children: [
                e.jsx("div", {
                  className:
                    "w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center",
                  children: e.jsx(xe, { className: "w-8 h-8 text-primary" }),
                }),
                e.jsx("h2", {
                  className: "text-2xl sm:text-3xl font-bold mb-2",
                  children: "Planos Multi Usuários",
                }),
                e.jsx("p", {
                  className: "text-muted-foreground max-w-md mx-auto",
                  children:
                    "Adicione funcionários ao seu sistema com permissões personalizadas. Tudo integrado ao seu painel.",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid gap-4 sm:grid-cols-3 mb-8",
              children: c.map((r) =>
                e.jsxs(
                  V,
                  {
                    className: `relative overflow-hidden transition-all hover:shadow-lg ${
                      r.highlight
                        ? "ring-2 ring-primary shadow-lg scale-[1.02]"
                        : "border-border/50"
                    }`,
                    children: [
                      r.highlight &&
                        e.jsx("div", {
                          className:
                            "absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center text-xs font-bold py-1",
                          children: "MAIS POPULAR",
                        }),
                      e.jsxs(G, {
                        className: `p-6 text-center ${
                          r.highlight ? "pt-9" : ""
                        }`,
                        children: [
                          e.jsx("h3", {
                            className: "font-bold text-lg mb-1",
                            children: r.name,
                          }),
                          e.jsx("p", {
                            className:
                              "text-3xl font-extrabold text-primary mb-1",
                            children: r.price,
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground mb-4",
                            children: "/mês",
                          }),
                          e.jsxs("div", {
                            className:
                              "flex items-center justify-center gap-2 p-3 rounded-lg bg-muted/50 mb-4",
                            children: [
                              e.jsx(D, { className: "w-5 h-5 text-primary" }),
                              e.jsxs("span", {
                                className: "font-semibold",
                                children: [
                                  r.employees,
                                  " ",
                                  r.employees === 1
                                    ? "Funcionário"
                                    : "Funcionários",
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("ul", {
                            className:
                              "text-sm text-muted-foreground space-y-2 text-left",
                            children: [
                              e.jsxs("li", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(ee, {
                                    className:
                                      "w-3.5 h-3.5 text-primary flex-shrink-0",
                                  }),
                                  " Permissões granulares",
                                ],
                              }),
                              e.jsxs("li", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(P, {
                                    className:
                                      "w-3.5 h-3.5 text-primary flex-shrink-0",
                                  }),
                                  " Chat em tempo real",
                                ],
                              }),
                              e.jsxs("li", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(ve, {
                                    className:
                                      "w-3.5 h-3.5 text-primary flex-shrink-0",
                                  }),
                                  " Métricas individuais",
                                ],
                              }),
                              e.jsxs("li", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(se, {
                                    className:
                                      "w-3.5 h-3.5 text-primary flex-shrink-0",
                                  }),
                                  " Controle de visibilidade",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  r.name
                )
              ),
            }),
            e.jsxs("div", {
              className: "text-center",
              children: [
                e.jsxs(v, {
                  size: "lg",
                  className: "gap-2 text-base px-8",
                  onClick: () =>
                    window.open(`https://wa.me/${s}?text=${t}`, "_blank"),
                  children: [
                    e.jsx(P, { className: "w-5 h-5" }),
                    "Contratar via WhatsApp",
                  ],
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground mt-3",
                  children: "Fale conosco e ative seu plano em minutos",
                }),
              ],
            }),
          ],
        }),
      });
    }
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "max-w-7xl mx-auto space-y-6",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs("h1", {
                      className: "text-2xl font-bold flex items-center gap-2",
                      children: [
                        e.jsx(D, { className: "w-6 h-6 text-primary" }),
                        "Funcionários",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground text-sm mt-1",
                      children: "Gerencie os funcionários da sua equipe",
                    }),
                  ],
                }),
                e.jsxs(v, {
                  onClick: () => {
                    if (!de) {
                      f.error("Limite de funcionários atingido para seu plano");
                      return;
                    }
                    n(null),
                      y({
                        name: "",
                        email: "",
                        password: "",
                        permissions: { ...A },
                      }),
                      g(!0);
                  },
                  className: "gap-2",
                  children: [
                    e.jsx(J, { className: "w-4 h-4" }),
                    "Novo Funcionário",
                  ],
                }),
              ],
            }),
            e.jsx(V, {
              className:
                "bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20",
              children: e.jsx(G, {
                className: "p-4 sm:p-6",
                children: e.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center",
                          children: e.jsx(xe, {
                            className: "w-6 h-6 text-primary",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h3", {
                              className: "font-bold text-lg",
                              children: _.multi_user_plans.name,
                            }),
                            e.jsxs("p", {
                              className: "text-sm text-muted-foreground",
                              children: [N(_.multi_user_plans.price), "/mês"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        e.jsxs("div", {
                          className:
                            "text-center px-4 py-2 rounded-lg bg-background/60",
                          children: [
                            e.jsx("p", {
                              className: "text-2xl font-bold text-primary",
                              children: ce,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Ativos",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "text-center px-4 py-2 rounded-lg bg-background/60",
                          children: [
                            e.jsx("p", {
                              className: "text-2xl font-bold",
                              children: le,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Limite",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            k
              ? e.jsx("div", {
                  className: "flex items-center justify-center py-12",
                  children: e.jsx("div", {
                    className:
                      "w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin",
                  }),
                })
              : u.length === 0
              ? e.jsx(V, {
                  className: "border-dashed",
                  children: e.jsxs(G, {
                    className: "py-12 text-center",
                    children: [
                      e.jsx(D, {
                        className:
                          "w-12 h-12 text-muted-foreground mx-auto mb-4",
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Nenhum funcionário cadastrado",
                      }),
                      e.jsxs(v, {
                        variant: "outline",
                        className: "mt-4",
                        onClick: () => {
                          y({
                            name: "",
                            email: "",
                            password: "",
                            permissions: { ...A },
                          }),
                            g(!0);
                        },
                        children: [
                          e.jsx(J, { className: "w-4 h-4 mr-2" }),
                          "Adicionar primeiro funcionário",
                        ],
                      }),
                    ],
                  }),
                })
              : e.jsx("div", {
                  className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                  children: u.map((s) =>
                    e.jsxs(
                      V,
                      {
                        className: `transition-all hover:shadow-md ${
                          s.is_active ? "" : "opacity-60"
                        }`,
                        children: [
                          e.jsx(De, {
                            className: "pb-3",
                            children: e.jsxs("div", {
                              className: "flex items-start justify-between",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    e.jsx("div", {
                                      className: `w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                                        s.is_active
                                          ? "bg-primary/20 text-primary"
                                          : "bg-muted text-muted-foreground"
                                      }`,
                                      children: s.name.charAt(0).toUpperCase(),
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx(Oe, {
                                          className: "text-base",
                                          children: s.name,
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground",
                                          children: s.email,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx(T, {
                                  variant: s.is_active
                                    ? "default"
                                    : "secondary",
                                  className: "text-xs",
                                  children: s.is_active ? "Ativo" : "Inativo",
                                }),
                              ],
                            }),
                          }),
                          e.jsxs(G, {
                            className: "space-y-4",
                            children: [
                              e.jsxs("div", {
                                className: "grid grid-cols-3 gap-2",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "text-center p-2 rounded-xl bg-muted/50",
                                    children: [
                                      e.jsx(te, {
                                        className:
                                          "w-3.5 h-3.5 mx-auto mb-1 text-primary",
                                      }),
                                      e.jsx("p", {
                                        className: "text-sm font-bold",
                                        children: (R[s.id] || z).sales,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] text-muted-foreground",
                                        children: "Vendas",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "text-center p-2 rounded-xl bg-muted/50",
                                    children: [
                                      e.jsx(qe, {
                                        className:
                                          "w-3.5 h-3.5 mx-auto mb-1 text-primary",
                                      }),
                                      e.jsx("p", {
                                        className: "text-sm font-bold",
                                        children: (R[s.id] || z).registrations,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] text-muted-foreground",
                                        children: "Cadastros",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "text-center p-2 rounded-xl bg-muted/50",
                                    children: [
                                      e.jsx(ae, {
                                        className:
                                          "w-3.5 h-3.5 mx-auto mb-1 text-primary",
                                      }),
                                      e.jsx("p", {
                                        className: "text-sm font-bold truncate",
                                        children: N((R[s.id] || z).profit),
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] text-muted-foreground",
                                        children: "Saldo gerado",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("button", {
                                type: "button",
                                onClick: () => S(s),
                                className:
                                  "w-full flex items-center justify-between gap-2 rounded-xl border border-border/50 bg-muted/20 px-3 py-2 text-xs hover:bg-muted/40 transition-colors",
                                children: [
                                  e.jsxs("span", {
                                    className:
                                      "flex items-center gap-2 text-muted-foreground",
                                    children: [
                                      e.jsx(q, {
                                        className: "w-3.5 h-3.5 text-primary",
                                      }),
                                      (R[s.id] || z).actions,
                                      " registros no histórico",
                                    ],
                                  }),
                                  e.jsx("span", {
                                    className: "text-primary font-medium",
                                    children: "Ver logs",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex flex-wrap gap-1",
                                children: [
                                  Object.entries(s.permissions || {})
                                    .filter(([, t]) => t)
                                    .slice(0, 6)
                                    .map(([t]) =>
                                      e.jsxs(
                                        T,
                                        {
                                          variant: "outline",
                                          className:
                                            "text-[10px] bg-primary/5 text-primary border-primary/20",
                                          children: ["✓ ", he[t]?.label || t],
                                        },
                                        t
                                      )
                                    ),
                                  Object.entries(s.permissions || {}).filter(
                                    ([, t]) => t
                                  ).length > 6 &&
                                    e.jsxs(T, {
                                      variant: "outline",
                                      className: "text-[10px]",
                                      children: [
                                        "+",
                                        Object.entries(
                                          s.permissions || {}
                                        ).filter(([, t]) => t).length - 6,
                                      ],
                                    }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-2 pt-2 border-t border-border/50",
                                children: [
                                  e.jsxs(v, {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "flex-1 h-8 text-xs",
                                    onClick: () => {
                                      n(s),
                                        y({
                                          name: s.name,
                                          email: s.email,
                                          password: "",
                                          permissions: {
                                            ...A,
                                            ...s.permissions,
                                          },
                                        }),
                                        g(!0);
                                    },
                                    children: [
                                      e.jsx(ue, {
                                        className: "w-3.5 h-3.5 mr-1",
                                      }),
                                      "Editar",
                                    ],
                                  }),
                                  e.jsxs(v, {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "h-8 relative",
                                    onClick: () => we(s),
                                    children: [
                                      e.jsx(P, { className: "w-3.5 h-3.5" }),
                                      (oe[s.id] || 0) > 0 &&
                                        e.jsx(T, {
                                          variant: "destructive",
                                          className:
                                            "absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[9px]",
                                          children: oe[s.id],
                                        }),
                                    ],
                                  }),
                                  e.jsx(v, {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "h-8",
                                    onClick: () => _e(s),
                                    children: s.is_active
                                      ? e.jsx(be, { className: "w-3.5 h-3.5" })
                                      : e.jsx(se, { className: "w-3.5 h-3.5" }),
                                  }),
                                  e.jsx(v, {
                                    variant: "ghost",
                                    size: "sm",
                                    className:
                                      "h-8 hover:bg-destructive/10 hover:text-destructive",
                                    onClick: () => a(s),
                                    children: e.jsx(ke, {
                                      className: "w-3.5 h-3.5",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      s.id
                    )
                  ),
                }),
          ],
        }),
        e.jsx(K, {
          open: !!h,
          onOpenChange: (s) => !s && S(null),
          children: e.jsxs(Q, {
            className: "max-w-2xl",
            children: [
              e.jsx(X, {
                children: e.jsxs(Y, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(q, { className: "w-5 h-5 text-primary" }),
                    "Atividades de ",
                    h?.name,
                  ],
                }),
              }),
              h &&
                e.jsx(as, {
                  employeeId: h.id,
                  employeeName: h.name,
                  stats: R[h.id],
                }),
            ],
          }),
        }),
        e.jsx(K, {
          open: b,
          onOpenChange: g,
          children: e.jsxs(Q, {
            className: "max-w-lg max-h-[90vh] overflow-y-auto",
            children: [
              e.jsx(X, {
                children: e.jsxs(Y, {
                  className: "flex items-center gap-2",
                  children: [
                    l
                      ? e.jsx(ue, { className: "w-5 h-5" })
                      : e.jsx(J, { className: "w-5 h-5" }),
                    l ? "Editar Funcionário" : "Novo Funcionário",
                  ],
                }),
              }),
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(I, { children: "Nome" }),
                      e.jsx(L, {
                        value: d.name,
                        onChange: (s) => y({ ...d, name: s.target.value }),
                        placeholder: "Nome do funcionário",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(I, { children: "Email / Login" }),
                      e.jsx(L, {
                        type: "email",
                        value: d.email,
                        onChange: (s) => y({ ...d, email: s.target.value }),
                        placeholder: "email@exemplo.com",
                        disabled: !!l,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(I, {
                        children: l ? "Nova senha (opcional)" : "Senha",
                      }),
                      e.jsx(L, {
                        type: "password",
                        value: d.password,
                        onChange: (s) => y({ ...d, password: s.target.value }),
                        placeholder: l
                          ? "Deixe vazio para manter a atual"
                          : "Mínimo 8 caracteres",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      e.jsxs(I, {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(ee, { className: "w-4 h-4 text-primary" }),
                          "Permissões de Acesso (Abas do Sistema)",
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex gap-2 mb-2",
                        children: [
                          e.jsx(v, {
                            type: "button",
                            variant: "outline",
                            size: "sm",
                            onClick: () => {
                              const s = {};
                              Object.keys(A).forEach((t) => (s[t] = !0)),
                                y({ ...d, permissions: s });
                            },
                            children: "Marcar Todas",
                          }),
                          e.jsx(v, {
                            type: "button",
                            variant: "outline",
                            size: "sm",
                            onClick: () => y({ ...d, permissions: { ...A } }),
                            children: "Desmarcar Todas",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "space-y-1.5 bg-muted/30 rounded-lg p-3 max-h-[300px] overflow-y-auto",
                        children: Object.entries(he).map(
                          ([s, { label: t, icon: c, description: r }]) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center justify-between p-2 rounded-lg hover:bg-background/50 transition-colors",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx(c, {
                                        className:
                                          "w-4 h-4 text-muted-foreground",
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className: "text-sm font-medium",
                                            children: t,
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-xs text-muted-foreground",
                                            children: r,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx(Fe, {
                                    checked: d.permissions[s] || !1,
                                    onCheckedChange: (j) =>
                                      y({
                                        ...d,
                                        permissions: {
                                          ...d.permissions,
                                          [s]: j,
                                        },
                                      }),
                                  }),
                                ],
                              },
                              s
                            )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(Re, {
                children: [
                  e.jsx(v, {
                    variant: "outline",
                    onClick: () => g(!1),
                    children: "Cancelar",
                  }),
                  e.jsx(v, {
                    onClick: ye,
                    children: l ? "Salvar Alterações" : "Criar Funcionário",
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx(K, {
          open: !!p,
          onOpenChange: () => E(null),
          children: e.jsxs(Q, {
            className: "max-w-md h-[500px] flex flex-col",
            children: [
              e.jsx(X, {
                children: e.jsxs(Y, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(P, { className: "w-5 h-5 text-primary" }),
                    "Chat com ",
                    p?.name,
                  ],
                }),
              }),
              e.jsx(je, {
                className: "flex-1 pr-4",
                children: e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    F.length === 0 &&
                      e.jsx("p", {
                        className:
                          "text-center text-muted-foreground py-8 text-sm",
                        children: "Nenhuma mensagem",
                      }),
                    F.map((s) =>
                      e.jsx(
                        "div",
                        {
                          className: `flex ${
                            s.sender_type === "owner"
                              ? "justify-end"
                              : "justify-start"
                          }`,
                          children: e.jsxs("div", {
                            className: `max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                              s.sender_type === "owner"
                                ? "bg-primary text-primary-foreground rounded-br-md"
                                : "bg-muted rounded-bl-md"
                            }`,
                            children: [
                              e.jsx("p", { children: s.message }),
                              e.jsx("p", {
                                className: `text-[10px] mt-1 ${
                                  s.sender_type === "owner"
                                    ? "text-primary-foreground/60"
                                    : "text-muted-foreground"
                                }`,
                                children: new Date(
                                  s.created_at
                                ).toLocaleTimeString("pt-BR", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }),
                              }),
                            ],
                          }),
                        },
                        s.id
                      )
                    ),
                    e.jsx("div", { ref: ne }),
                  ],
                }),
              }),
              e.jsxs("div", {
                className: "flex gap-2 pt-2 border-t",
                children: [
                  e.jsx(L, {
                    value: W,
                    onChange: (s) => ie(s.target.value),
                    placeholder: "Digite sua mensagem...",
                    onKeyDown: (s) => s.key === "Enter" && me(),
                    className: "flex-1",
                  }),
                  e.jsx(v, {
                    onClick: me,
                    size: "icon",
                    children: e.jsx(Le, { className: "w-4 h-4" }),
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx(Te, {
          open: !!x,
          onOpenChange: () => a(null),
          children: e.jsxs(Pe, {
            children: [
              e.jsxs(ze, {
                children: [
                  e.jsx($e, { children: "Remover Funcionário" }),
                  e.jsxs(Ue, {
                    children: [
                      "Tem certeza que deseja remover ",
                      e.jsx("strong", { children: x?.name }),
                      "? Essa ação não pode ser desfeita.",
                    ],
                  }),
                ],
              }),
              e.jsxs(Me, {
                children: [
                  e.jsx(Ve, { children: "Cancelar" }),
                  e.jsx(Ge, {
                    onClick: Ne,
                    className:
                      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    children: "Remover",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
export { is as default };
