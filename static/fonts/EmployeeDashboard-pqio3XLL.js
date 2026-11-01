import {
  z as Ue,
  cf as Ye,
  u as Qe,
  cD as Ge,
  r as l,
  w as a,
  bU as xe,
  j as e,
  bV as z,
  bO as He,
  bW as We,
  dc as U,
  U as ue,
  gb as Xe,
  f as Je,
  df as Ke,
  bS as pe,
  b$ as he,
  b4 as Ze,
  G as d,
  dg as C,
  ae as ge,
  C as et,
  c0 as Y,
  B as q,
  g9 as tt,
  b3 as R,
  dI as st,
  by as at,
  p as fe,
  X as rt,
  c2 as nt,
  I as ot,
  bP as lt,
  dq as dt,
} from "./index-V8ZHCWL2.js";
import { C as ct } from "./CashRegisterPanel-BVzuOyMf.js";
import { A as Q } from "./arrow-up-right-BQKFXF8e.js";
import "./calendar-D5yT29JG.js";
import "./isSameDay-C3Dd1gMO.js";
import "./isBefore-BYSD3akg.js";
import "./filter-zlxD6zAv.js";
import "./minus-BvnD96RC.js";
import "./coins-BAvQgDWQ.js";
import "./arrow-up-down-Bp1BbkwY.js";
import "./arrow-up-BO8-gqvp.js";
const vt = () => {
  const { user: G, loading: $ } = Ue(),
    {
      effectiveUserId: s,
      isEmployee: j,
      employeeName: O,
      employeeId: x,
      permissions: n,
      loading: E,
    } = Ye(),
    r = Qe(),
    { format: p } = Ge(),
    [H, be] = l.useState(""),
    [W, je] = l.useState(""),
    [X, J] = l.useState([]),
    [N, K] = l.useState(""),
    [v, Z] = l.useState(!1),
    [ee, D] = l.useState(0),
    te = l.useRef(null),
    [P, Ne] = l.useState(!1),
    [se, ve] = l.useState([]),
    [ae, ye] = l.useState([]),
    [o, we] = l.useState({
      totalSales: 0,
      todayRevenue: 0,
      monthRevenue: 0,
      monthExpenses: 0,
      monthProfit: 0,
      openOS: 0,
      completedOS: 0,
      pendingOS: 0,
      totalClients: 0,
      lowStock: 0,
      totalQuotations: 0,
      totalParts: 0,
      todaySalesCount: 0,
      totalOS: 0,
    }),
    [f, ke] = l.useState({
      revenue: 0,
      expenses: 0,
      cogs: 0,
      profit: 0,
      salesCount: 0,
      osCompleted: 0,
    });
  l.useEffect(() => {
    if (!($ || E)) {
      if (!G) {
        r("/login", { replace: !0 });
        return;
      }
      if (!j || !s) {
        r("/dashboard", { replace: !0 });
        return;
      }
    }
  }, [G, $, E, j, s, r]),
    l.useEffect(() => {
      if (!s || !j) return;
      let t = !1;
      const i = async () => {
        const g = new Date(),
          le = `${g.getFullYear()}-${String(g.getMonth() + 1).padStart(
            2,
            "0"
          )}-${String(g.getDate()).padStart(2, "0")}`,
          w = `${g.getFullYear()}-${String(g.getMonth() + 1).padStart(
            2,
            "0"
          )}-01`,
          T = new Date(g.getFullYear(), g.getMonth() + 1, 0),
          k = `${T.getFullYear()}-${String(T.getMonth() + 1).padStart(
            2,
            "0"
          )}-${String(T.getDate()).padStart(2, "0")}`,
          [_, Oe, de, Ee, De, Pe, Te, Me, Le, Be, Ae] = await Promise.all([
            a
              .from("user_settings")
              .select("company_logo, company_name")
              .eq("user_id", s)
              .maybeSingle(),
            a
              .from("transactions")
              .select("id", { count: "exact", head: !0 })
              .eq("user_id", s)
              .eq("type", "income"),
            a
              .from("transactions")
              .select("amount")
              .eq("user_id", s)
              .eq("type", "income")
              .eq("date", le),
            a
              .from("transactions")
              .select("amount, type, category, product_id, description")
              .eq("user_id", s)
              .gte("date", w)
              .lte("date", k),
            a
              .from("stock_movements")
              .select("quantity, purchase_value, reason, type")
              .eq("user_id", s)
              .gte("created_at", `${w}T00:00:00`)
              .lte("created_at", `${k}T23:59:59.999`),
            a.from("service_orders").select("status").eq("user_id", s),
            a
              .from("clients")
              .select("id", { count: "exact", head: !0 })
              .eq("user_id", s),
            a
              .from("parts")
              .select("id, quantity, min_quantity")
              .eq("user_id", s),
            a
              .from("quotations")
              .select("id", { count: "exact", head: !0 })
              .eq("user_id", s),
            a
              .from("transactions")
              .select("description, amount, created_at, payment_method")
              .eq("user_id", s)
              .eq("type", "income")
              .eq("date", le)
              .order("created_at", { ascending: !1 })
              .limit(8),
            a
              .from("service_orders")
              .select("id, client_name, device_model, status, created_at")
              .eq("user_id", s)
              .order("created_at", { ascending: !1 })
              .limit(5),
          ]);
        if (t) return;
        _.data?.company_name && be(_.data.company_name),
          _.data?.company_logo && je(_.data.company_logo);
        const Ie = (de.data || []).reduce(
            (m, L) => m + (Number(L.amount) || 0),
            0
          ),
          M = dt({
            transactions: Ee.data || [],
            stockMovements: De.data || [],
          }),
          S = Pe.data || [],
          ce = Me.data || [];
        if (
          (ve(Be.data || []),
          ye(Ae.data || []),
          we({
            totalSales: Oe.count || 0,
            todayRevenue: Ie,
            monthRevenue: M.totalRevenue,
            monthExpenses: M.totalExpenses,
            monthProfit: M.netProfit,
            openOS: S.filter((m) => m.status === "open").length,
            completedOS: S.filter((m) => m.status === "completed").length,
            pendingOS: S.filter((m) =>
              ["pending", "in-progress", "waiting-parts"].includes(m.status)
            ).length,
            totalClients: Te.count || 0,
            lowStock: ce.filter((m) => m.quantity <= m.min_quantity).length,
            totalQuotations: Le.count || 0,
            totalParts: ce.length,
            todaySalesCount: (de.data || []).length,
            totalOS: S.length,
          }),
          x)
        ) {
          const [m, L] = await Promise.all([
              a
                .from("transactions")
                .select("type, amount, product_id, description")
                .eq("user_id", s)
                .eq("created_by_employee_id", x)
                .gte("date", w)
                .lte("date", k),
              a
                .from("service_orders")
                .select(
                  "id, technician_name, status, total_value, completed_at"
                )
                .eq("user_id", s)
                .eq("status", "completed")
                .gte("completed_at", `${w}T00:00:00`)
                .lte("completed_at", `${k}T23:59:59.999`),
            ]),
            Ve = m.data || [];
          let B = 0,
            A = 0,
            ie = 0;
          const I = new Set(),
            V = {};
          for (const c of Ve) {
            const b = Number(c.amount) || 0;
            if (c.type === "income") {
              if (((B += b), (ie += 1), c.product_id)) {
                I.add(c.product_id);
                const me = String(c.description || "").match(/\((\d+)x\)/),
                  ze = me ? parseInt(me[1], 10) : 1;
                V[c.product_id] = (V[c.product_id] || 0) + ze;
              }
            } else c.type === "expense" && (A += b);
          }
          let F = 0;
          if (I.size > 0) {
            const { data: c } = await a
              .from("parts")
              .select("id, unit_price")
              .in("id", Array.from(I));
            for (const b of c || [])
              F += (Number(b.unit_price) || 0) * (V[b.id] || 0);
          }
          const Fe = (L.data || []).filter(
            (c) =>
              O &&
              c.technician_name &&
              String(c.technician_name).trim().toLowerCase() ===
                O.trim().toLowerCase()
          );
          ke({
            revenue: B,
            expenses: A,
            cogs: F,
            profit: B - A - F,
            salesCount: ie,
            osCompleted: Fe.length,
          });
        }
        Ne(!0);
      };
      i();
      let u = null;
      const h = () => {
          u && clearTimeout(u), (u = setTimeout(() => i(), 600));
        },
        qe = a
          .channel(`emp_trans_realtime_${s}`)
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "transactions",
              filter: `user_id=eq.${s}`,
            },
            () => h()
          )
          .subscribe(),
        Re = a
          .channel(`emp_stock_realtime_${s}`)
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "stock_movements",
              filter: `user_id=eq.${s}`,
            },
            () => h()
          )
          .subscribe(),
        $e = a
          .channel(`emp_os_realtime_${s}`)
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "service_orders",
              filter: `user_id=eq.${s}`,
            },
            () => h()
          )
          .subscribe();
      return () => {
        (t = !0),
          u && clearTimeout(u),
          a.removeChannel(qe),
          a.removeChannel(Re),
          a.removeChannel($e);
      };
    }, [s, j]),
    l.useEffect(() => {
      if (!x) return;
      re();
      const t = a
        .channel(`emp_chat_${x}`)
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "employee_messages",
            filter: `employee_id=eq.${x}`,
          },
          (i) => {
            const u = i.new;
            J((h) => [...h, u]),
              u.sender_type === "owner" &&
                (D((h) => h + 1), v || xe.info("💬 Nova mensagem do técnico!"));
          }
        )
        .subscribe();
      return () => {
        a.removeChannel(t);
      };
    }, [x]),
    l.useEffect(() => {
      te.current?.scrollIntoView({ behavior: "smooth" });
    }, [X]);
  const re = async () => {
      if (!x) return;
      const { data: t } = await a
        .from("employee_messages")
        .select("*")
        .eq("employee_id", x)
        .order("created_at", { ascending: !0 })
        .limit(100);
      t &&
        (J(t),
        D(t.filter((i) => i.sender_type === "owner" && !i.read).length),
        await a
          .from("employee_messages")
          .update({ read: !0 })
          .eq("employee_id", x)
          .eq("sender_type", "owner")
          .eq("read", !1));
    },
    _e = async () => {
      if (!N.trim() || !x || !s) return;
      const { error: t } = await a
        .from("employee_messages")
        .insert({
          employee_id: x,
          owner_id: s,
          sender_type: "employee",
          message: N.trim(),
        });
      if (t) {
        xe.error("Erro ao enviar mensagem");
        return;
      }
      K("");
    },
    y = n.ver_faturamento === !0,
    ne = n.ver_lucro === !0,
    Se = l.useMemo(() => {
      const t = new Date().getHours();
      return t < 12 ? "Bom dia" : t < 18 ? "Boa tarde" : "Boa noite";
    }, []),
    Ce = {
      open: {
        label: "Aberta",
        color: "bg-blue-500/15 text-blue-700 dark:text-blue-400",
      },
      "in-progress": {
        label: "Em andamento",
        color: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
      },
      completed: {
        label: "Concluída",
        color: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
      },
      pending: {
        label: "Pendente",
        color: "bg-orange-500/15 text-orange-700 dark:text-orange-400",
      },
      "waiting-parts": {
        label: "Aguardando",
        color: "bg-purple-500/15 text-purple-700 dark:text-purple-400",
      },
      delivered: {
        label: "Entregue",
        color: "bg-green-500/15 text-green-700 dark:text-green-400",
      },
    };
  if ($ || E)
    return e.jsxs("div", {
      className: "p-4 sm:p-6 space-y-5",
      children: [
        e.jsx(z, { className: "h-20 w-full rounded-3xl" }),
        e.jsx("div", {
          className: "grid grid-cols-2 gap-3",
          children: [1, 2, 3, 4].map((t) =>
            e.jsx(z, { className: "h-32 rounded-3xl" }, t)
          ),
        }),
        e.jsx(z, { className: "h-48 w-full rounded-3xl" }),
      ],
    });
  const oe = [
    n.os && {
      icon: He,
      label: "Nova OS",
      onClick: () => r("/os?new=true"),
      gradient: "from-blue-500 to-blue-600",
    },
    n.precificacao && {
      icon: We,
      label: "Precificação",
      onClick: () => r("/precificacao"),
      gradient: "from-primary to-primary/70",
    },
    n.vendas && {
      icon: U,
      label: "Vender",
      onClick: () => r("/financeiro"),
      gradient: "from-emerald-500 to-emerald-600",
    },
    n.clientes && {
      icon: ue,
      label: "Clientes",
      onClick: () => r("/clientes"),
      gradient: "from-violet-500 to-violet-600",
    },
    n.orcamentos && {
      icon: Xe,
      label: "Orçamento",
      onClick: () => r("/orcamentos"),
      gradient: "from-amber-500 to-amber-600",
    },
    n.garantias && {
      icon: Je,
      label: "Garantia",
      onClick: () => r("/garantias"),
      gradient: "from-rose-500 to-rose-600",
    },
    n.fiado && {
      icon: Ke,
      label: "Fiado",
      onClick: () => r("/fiado"),
      gradient: "from-cyan-500 to-cyan-600",
    },
    n.estoque && {
      icon: pe,
      label: "Estoque",
      onClick: () => r("/estoque"),
      gradient: "from-orange-500 to-orange-600",
    },
    n.catalogo && {
      icon: he,
      label: "Catálogo",
      onClick: () => r("/catalogo-config"),
      gradient: "from-pink-500 to-pink-600",
    },
  ].filter(Boolean);
  return e.jsxs("div", {
    className: "min-h-full bg-background",
    children: [
      e.jsxs("div", {
        className: "mx-auto max-w-4xl px-4 sm:px-6 py-6 space-y-6",
        children: [
          e.jsx("div", {
            className:
              "rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/10 p-6",
            children: e.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                W
                  ? e.jsx("img", {
                      src: W,
                      alt: "",
                      className:
                        "h-14 w-14 rounded-2xl object-cover border-2 border-background shadow-lg",
                    })
                  : e.jsx("div", {
                      className:
                        "h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center",
                      children: e.jsx(he, {
                        className: "h-7 w-7 text-primary",
                      }),
                    }),
                e.jsxs("div", {
                  className: "flex-1",
                  children: [
                    e.jsxs("h1", {
                      className:
                        "text-2xl sm:text-3xl font-black tracking-tight",
                      children: [
                        Se,
                        ", ",
                        e.jsx("span", {
                          className: "text-primary",
                          children: O?.split(" ")[0] || "Funcionário",
                        }),
                      ],
                    }),
                    e.jsxs("p", {
                      className:
                        "text-sm text-muted-foreground mt-1 flex items-center gap-2",
                      children: [
                        e.jsx(Ze, { className: "h-4 w-4" }),
                        new Date().toLocaleDateString("pt-BR", {
                          weekday: "long",
                          day: "2-digit",
                          month: "long",
                        }),
                        H &&
                          e.jsxs("span", {
                            className: "hidden sm:inline",
                            children: ["· ", H],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          P &&
            e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between px-1",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-sm font-bold uppercase tracking-widest text-muted-foreground/50",
                      children: "Meu Desempenho no Mês",
                    }),
                    e.jsx("span", {
                      className: "text-xs text-muted-foreground/60",
                      children: new Date().toLocaleDateString("pt-BR", {
                        month: "long",
                        year: "numeric",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                  children: [
                    e.jsxs(d, {
                      className:
                        "rounded-2xl border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 mb-2",
                          children: [
                            e.jsx(C, {
                              className:
                                "h-5 w-5 text-emerald-600 dark:text-emerald-400",
                            }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold uppercase tracking-wider text-emerald-600/70 dark:text-emerald-400/70",
                              children: "Faturamento gerado",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "text-2xl font-black text-emerald-700 dark:text-emerald-400",
                          children: p(f.revenue),
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mt-1",
                          children: "por você",
                        }),
                      ],
                    }),
                    e.jsxs(d, {
                      className:
                        "rounded-2xl border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 mb-2",
                          children: [
                            e.jsx(ge, { className: "h-5 w-5 text-primary" }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold uppercase tracking-wider text-primary/70",
                              children: "Lucro gerado",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: `text-2xl font-black ${
                            f.profit >= 0 ? "text-primary" : "text-destructive"
                          }`,
                          children: p(f.profit),
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mt-1",
                          children: "líquido para o dono",
                        }),
                      ],
                    }),
                    e.jsxs(d, {
                      className: "rounded-2xl border-border/30 p-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 mb-2",
                          children: [
                            e.jsx(U, {
                              className:
                                "h-5 w-5 text-violet-600 dark:text-violet-400",
                            }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold uppercase tracking-wider text-muted-foreground/60",
                              children: "Vendas",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-black",
                          children: f.salesCount,
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mt-1",
                          children: "no mês",
                        }),
                      ],
                    }),
                    e.jsxs(d, {
                      className: "rounded-2xl border-border/30 p-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 mb-2",
                          children: [
                            e.jsx(et, {
                              className:
                                "h-5 w-5 text-blue-600 dark:text-blue-400",
                            }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold uppercase tracking-wider text-muted-foreground/60",
                              children: "OS concluídas",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-black",
                          children: f.osCompleted,
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mt-1",
                          children: "por você",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          (y || ne) &&
            P &&
            e.jsxs("div", {
              className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
              children: [
                y &&
                  e.jsxs(d, {
                    className:
                      "rounded-2xl border-border/30 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                          e.jsx(C, {
                            className:
                              "h-5 w-5 text-emerald-600 dark:text-emerald-400",
                          }),
                          e.jsx("span", {
                            className:
                              "text-xs font-bold uppercase tracking-wider text-emerald-600/70 dark:text-emerald-400/70",
                            children: "Receita Mês",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-2xl font-black text-emerald-700 dark:text-emerald-400",
                        children: p(o.monthRevenue),
                      }),
                      e.jsxs("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: ["Hoje: ", p(o.todayRevenue)],
                      }),
                    ],
                  }),
                y &&
                  e.jsxs(d, {
                    className: "rounded-2xl border-border/30 p-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                          e.jsx(ge, { className: "h-5 w-5 text-destructive" }),
                          e.jsx("span", {
                            className:
                              "text-xs font-bold uppercase tracking-wider text-muted-foreground/60",
                            children: "Despesas",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-2xl font-black text-destructive",
                        children: p(o.monthExpenses),
                      }),
                      e.jsxs("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: [o.todaySalesCount, " vendas hoje"],
                      }),
                    ],
                  }),
                ne &&
                  e.jsxs(d, {
                    className: "rounded-2xl border-border/30 p-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                          e.jsx(C, { className: "h-5 w-5 text-primary" }),
                          e.jsx("span", {
                            className:
                              "text-xs font-bold uppercase tracking-wider text-muted-foreground/60",
                            children: "Lucro",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: `text-2xl font-black ${
                          o.monthProfit >= 0
                            ? "text-primary"
                            : "text-destructive"
                        }`,
                        children: p(o.monthProfit),
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: "Líquido do mês",
                      }),
                    ],
                  }),
                e.jsxs(d, {
                  className: "rounded-2xl border-border/30 p-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2 mb-2",
                      children: [
                        e.jsx(Y, {
                          className:
                            "h-5 w-5 text-violet-600 dark:text-violet-400",
                        }),
                        e.jsx("span", {
                          className:
                            "text-xs font-bold uppercase tracking-wider text-muted-foreground/60",
                          children: "OS",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-2xl font-black",
                      children: o.totalOS,
                    }),
                    e.jsxs("p", {
                      className: "text-sm text-muted-foreground mt-1",
                      children: [o.openOS, " abertas"],
                    }),
                  ],
                }),
              ],
            }),
          n.vendas &&
            e.jsx("button", {
              onClick: () => r("/financeiro"),
              className:
                "group w-full rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-6 text-primary-foreground transition-all hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98]",
              children: e.jsxs("div", {
                className: "flex items-center gap-5",
                children: [
                  e.jsx("div", {
                    className:
                      "h-16 w-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center shrink-0 backdrop-blur-sm",
                    children: e.jsx(C, { className: "h-8 w-8" }),
                  }),
                  e.jsxs("div", {
                    className: "flex-1 text-left min-w-0",
                    children: [
                      e.jsx("p", {
                        className: "text-xl font-black",
                        children: "Abrir Frente de Caixa",
                      }),
                      e.jsx("p", {
                        className: "text-sm opacity-70 mt-1",
                        children:
                          "PDV completo · Troco · Desconto · Cupom fiscal · Impressão",
                      }),
                    ],
                  }),
                  e.jsx(Q, {
                    className:
                      "h-7 w-7 opacity-40 group-hover:opacity-100 transition-opacity shrink-0",
                  }),
                ],
              }),
            }),
          n.vendas &&
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx("p", {
                  className:
                    "text-sm font-bold uppercase tracking-widest text-muted-foreground/50 px-1",
                  children: "Controle de Caixa",
                }),
                e.jsx(ct, {}),
              ],
            }),
          oe.length > 0 &&
            e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsx("p", {
                  className:
                    "text-sm font-bold uppercase tracking-widest text-muted-foreground/50 px-1",
                  children: "Atalhos Rápidos",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-4 sm:grid-cols-8 gap-2.5",
                  children: oe.map((t) =>
                    e.jsxs(
                      "button",
                      {
                        onClick: t.onClick,
                        className:
                          "flex flex-col items-center gap-2.5 rounded-2xl p-4 transition-all hover:scale-105 hover:shadow-lg active:scale-95",
                        children: [
                          e.jsx("div", {
                            className: `h-12 w-12 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center shadow-lg`,
                            children: e.jsx(t.icon, {
                              className: "h-6 w-6 text-white",
                            }),
                          }),
                          e.jsx("span", {
                            className: "text-xs font-bold text-foreground",
                            children: t.label,
                          }),
                        ],
                      },
                      t.label
                    )
                  ),
                }),
              ],
            }),
          !y &&
            P &&
            e.jsxs("div", {
              className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
              children: [
                n.os &&
                  e.jsx("button", {
                    onClick: () => r("/os"),
                    className: "text-left",
                    children: e.jsxs(d, {
                      className:
                        "rounded-2xl border-border/30 p-4 hover:border-primary/30 hover:shadow-md transition-all",
                      children: [
                        e.jsx(Y, { className: "h-6 w-6 text-blue-500 mb-2" }),
                        e.jsx("p", {
                          className: "text-3xl font-black leading-none",
                          children: o.openOS,
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground mt-1.5",
                          children: "OS abertas",
                        }),
                      ],
                    }),
                  }),
                n.clientes &&
                  e.jsx("button", {
                    onClick: () => r("/clientes"),
                    className: "text-left",
                    children: e.jsxs(d, {
                      className:
                        "rounded-2xl border-border/30 p-4 hover:border-primary/30 hover:shadow-md transition-all",
                      children: [
                        e.jsx(ue, {
                          className: "h-6 w-6 text-violet-500 mb-2",
                        }),
                        e.jsx("p", {
                          className: "text-3xl font-black leading-none",
                          children: o.totalClients,
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground mt-1.5",
                          children: "Clientes",
                        }),
                      ],
                    }),
                  }),
                n.estoque &&
                  e.jsx("button", {
                    onClick: () => r("/estoque"),
                    className: "text-left",
                    children: e.jsxs(d, {
                      className:
                        "rounded-2xl border-border/30 p-4 hover:border-primary/30 hover:shadow-md transition-all",
                      children: [
                        e.jsx(pe, {
                          className: `h-6 w-6 mb-2 ${
                            o.lowStock > 0
                              ? "text-amber-500"
                              : "text-orange-500"
                          }`,
                        }),
                        e.jsx("p", {
                          className: "text-3xl font-black leading-none",
                          children: o.totalParts,
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground mt-1.5",
                          children:
                            o.lowStock > 0
                              ? e.jsxs("span", {
                                  className:
                                    "text-amber-600 dark:text-amber-400 font-semibold",
                                  children: [o.lowStock, " em baixa"],
                                })
                              : "Peças",
                        }),
                      ],
                    }),
                  }),
                n.vendas &&
                  e.jsx("button", {
                    onClick: () => r("/financeiro"),
                    className: "text-left",
                    children: e.jsxs(d, {
                      className:
                        "rounded-2xl border-border/30 p-4 hover:border-primary/30 hover:shadow-md transition-all",
                      children: [
                        e.jsx(U, {
                          className: "h-6 w-6 text-emerald-500 mb-2",
                        }),
                        e.jsx("p", {
                          className: "text-3xl font-black leading-none",
                          children: o.todaySalesCount,
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground mt-1.5",
                          children: "Vendas hoje",
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          e.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
            children: [
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between px-1",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-sm font-bold uppercase tracking-widest text-muted-foreground/50",
                        children: "Vendas Recentes",
                      }),
                      n.vendas &&
                        e.jsxs(q, {
                          variant: "ghost",
                          size: "sm",
                          className: "text-xs h-7 rounded-xl",
                          onClick: () => r("/financeiro"),
                          children: [
                            "Ver todas ",
                            e.jsx(Q, { className: "h-3.5 w-3.5 ml-1" }),
                          ],
                        }),
                    ],
                  }),
                  e.jsx(d, {
                    className: "rounded-2xl border-border/30 overflow-hidden",
                    children:
                      se.length === 0
                        ? e.jsxs("div", {
                            className: "p-10 text-center",
                            children: [
                              e.jsx(tt, {
                                className:
                                  "h-10 w-10 mx-auto text-muted-foreground/15 mb-3",
                              }),
                              e.jsx("p", {
                                className: "text-base text-muted-foreground/50",
                                children: "Nenhuma venda hoje",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-sm text-muted-foreground/30 mt-1",
                                children: "As vendas do dia aparecerão aqui",
                              }),
                            ],
                          })
                        : e.jsx("div", {
                            className: "divide-y divide-border/20",
                            children: se.map((t, i) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center justify-between px-4 py-3.5 hover:bg-accent/20 transition-colors",
                                  children: [
                                    e.jsxs("div", {
                                      className: "min-w-0 flex-1",
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-sm font-semibold truncate",
                                          children:
                                            t.description
                                              ?.replace(/Venda PDV - /, "")
                                              .split("[")[0]
                                              ?.trim() || "Venda",
                                        }),
                                        e.jsxs("p", {
                                          className:
                                            "text-xs text-muted-foreground/60 mt-0.5",
                                          children: [
                                            new Date(
                                              t.created_at
                                            ).toLocaleTimeString("pt-BR", {
                                              hour: "2-digit",
                                              minute: "2-digit",
                                            }),
                                            t.payment_method &&
                                              ` · ${t.payment_method}`,
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx(R, {
                                      variant: "secondary",
                                      className:
                                        "text-sm font-bold shrink-0 rounded-xl px-3 py-1",
                                      children: p(Number(t.amount)),
                                    }),
                                  ],
                                },
                                i
                              )
                            ),
                          }),
                  }),
                ],
              }),
              n.os &&
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between px-1",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-sm font-bold uppercase tracking-widest text-muted-foreground/50",
                          children: "OS Recentes",
                        }),
                        e.jsxs(q, {
                          variant: "ghost",
                          size: "sm",
                          className: "text-xs h-7 rounded-xl",
                          onClick: () => r("/os"),
                          children: [
                            "Ver todas ",
                            e.jsx(Q, { className: "h-3.5 w-3.5 ml-1" }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx(d, {
                      className: "rounded-2xl border-border/30 overflow-hidden",
                      children:
                        ae.length === 0
                          ? e.jsxs("div", {
                              className: "p-10 text-center",
                              children: [
                                e.jsx(Y, {
                                  className:
                                    "h-10 w-10 mx-auto text-muted-foreground/15 mb-3",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-base text-muted-foreground/50",
                                  children: "Nenhuma OS",
                                }),
                              ],
                            })
                          : e.jsx("div", {
                              className: "divide-y divide-border/20",
                              children: ae.map((t) => {
                                const i = Ce[t.status] || {
                                  label: t.status,
                                  color: "bg-muted text-muted-foreground",
                                };
                                return e.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex items-center justify-between px-4 py-3.5 hover:bg-accent/20 transition-colors cursor-pointer",
                                    onClick: () => r("/os"),
                                    children: [
                                      e.jsxs("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "text-sm font-semibold truncate",
                                            children:
                                              t.client_name || "Cliente",
                                          }),
                                          e.jsxs("p", {
                                            className:
                                              "text-xs text-muted-foreground/60 mt-0.5",
                                            children: [
                                              t.device_model ||
                                                "Sem dispositivo",
                                              " · ",
                                              new Date(
                                                t.created_at
                                              ).toLocaleDateString("pt-BR"),
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsx(R, {
                                        className: `text-xs font-semibold shrink-0 rounded-xl px-3 py-1 ${i.color}`,
                                        children: i.label,
                                      }),
                                    ],
                                  },
                                  t.id
                                );
                              }),
                            }),
                    }),
                  ],
                }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-3",
            children: [
              n.os &&
                o.pendingOS > 0 &&
                e.jsx("button", {
                  onClick: () => r("/os"),
                  className: "w-full text-left",
                  children: e.jsx(d, {
                    className:
                      "rounded-2xl border-amber-500/20 bg-amber-500/5 p-5 hover:border-amber-500/40 transition-all",
                    children: e.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "h-10 w-10 rounded-xl bg-amber-500/15 flex items-center justify-center",
                              children: e.jsx(st, {
                                className:
                                  "h-5 w-5 text-amber-600 dark:text-amber-400",
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-base font-bold text-amber-700 dark:text-amber-400",
                                  children: "OS Pendentes",
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Aguardando atendimento",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx(R, {
                          className:
                            "rounded-xl text-base px-4 py-1.5 bg-amber-500 text-white",
                          children: o.pendingOS,
                        }),
                      ],
                    }),
                  }),
                }),
              n.estoque &&
                o.lowStock > 0 &&
                e.jsx("button", {
                  onClick: () => r("/estoque"),
                  className: "w-full text-left",
                  children: e.jsx(d, {
                    className:
                      "rounded-2xl border-destructive/20 bg-destructive/5 p-5 hover:border-destructive/40 transition-all",
                    children: e.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "h-10 w-10 rounded-xl bg-destructive/15 flex items-center justify-center",
                              children: e.jsx(at, {
                                className: "h-5 w-5 text-destructive",
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-base font-bold text-destructive",
                                  children: "Estoque Baixo",
                                }),
                                e.jsxs("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: [
                                    o.lowStock,
                                    " ",
                                    o.lowStock === 1
                                      ? "item precisa"
                                      : "itens precisam",
                                    " de reposição",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx(R, {
                          className: "rounded-xl text-base px-4 py-1.5",
                          variant: "destructive",
                          children: o.lowStock,
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          }),
        ],
      }),
      e.jsxs("button", {
        className:
          "fixed bottom-20 right-4 z-30 h-14 w-14 rounded-full bg-foreground text-background shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95",
        onClick: () => {
          Z(!v), v || (D(0), re());
        },
        children: [
          e.jsx(fe, { className: "h-6 w-6" }),
          ee > 0 &&
            e.jsx("span", {
              className:
                "absolute -top-1 -right-1 h-6 min-w-6 flex items-center justify-center rounded-full bg-destructive text-xs font-bold text-destructive-foreground px-1.5",
              children: ee,
            }),
        ],
      }),
      v &&
        e.jsxs("div", {
          className:
            "fixed bottom-36 right-4 z-30 w-[calc(100%-2rem)] max-w-sm bg-card border-2 border-border/40 rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between px-5 py-4 bg-foreground text-background",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx(fe, { className: "h-5 w-5" }),
                    e.jsx("span", {
                      className: "text-base font-bold",
                      children: "Chat com Técnico",
                    }),
                  ],
                }),
                e.jsx(q, {
                  variant: "ghost",
                  size: "icon",
                  className:
                    "h-8 w-8 text-background/60 hover:text-background hover:bg-background/10 rounded-xl",
                  onClick: () => Z(!1),
                  children: e.jsx(rt, { className: "h-5 w-5" }),
                }),
              ],
            }),
            e.jsx(nt, {
              className: "h-72 p-4",
              children: e.jsxs("div", {
                className: "space-y-2.5",
                children: [
                  X.map((t) =>
                    e.jsx(
                      "div",
                      {
                        className: `flex ${
                          t.sender_type === "employee"
                            ? "justify-end"
                            : "justify-start"
                        }`,
                        children: e.jsxs("div", {
                          className: `max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                            t.sender_type === "employee"
                              ? "bg-primary text-primary-foreground rounded-br-md"
                              : "bg-muted rounded-bl-md"
                          }`,
                          children: [
                            t.message,
                            e.jsx("p", {
                              className: `text-[10px] mt-1 ${
                                t.sender_type === "employee"
                                  ? "text-primary-foreground/50"
                                  : "text-muted-foreground/50"
                              }`,
                              children: new Date(
                                t.created_at
                              ).toLocaleTimeString("pt-BR", {
                                hour: "2-digit",
                                minute: "2-digit",
                              }),
                            }),
                          ],
                        }),
                      },
                      t.id
                    )
                  ),
                  e.jsx("div", { ref: te }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "p-4 border-t border-border/20",
              children: e.jsxs("form", {
                onSubmit: (t) => {
                  t.preventDefault(), _e();
                },
                className: "flex gap-2",
                children: [
                  e.jsx(ot, {
                    placeholder: "Mensagem...",
                    value: N,
                    onChange: (t) => K(t.target.value),
                    className: "flex-1 h-11 rounded-2xl text-sm",
                  }),
                  e.jsx(q, {
                    type: "submit",
                    size: "icon",
                    className: "h-11 w-11 rounded-2xl shrink-0",
                    disabled: !N.trim(),
                    children: e.jsx(lt, { className: "h-5 w-5" }),
                  }),
                ],
              }),
            }),
          ],
        }),
    ],
  });
};
export { vt as default };
