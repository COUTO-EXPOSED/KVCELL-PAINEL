import {
  W as te,
  cf as se,
  r as u,
  w as _,
  j as t,
  g4 as ne,
  B as L,
  m as re,
  U as ie,
  dh as oe,
  d_ as O,
  G as R,
  a1 as q,
  bV as P,
  b2 as le,
  I as de,
  b3 as M,
  bA as ce,
  ae as me,
  cG as ue,
  bM as he,
  bU as A,
} from "./index-V8ZHCWL2.js";
import { R as U } from "./repeat-w4-mmjIn.js";
import { H as pe } from "./heart-handshake-DreyfAG7.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xe = te("CalendarHeart", [
    [
      "path",
      {
        d: "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",
        key: "136lmk",
      },
    ],
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "path",
      {
        d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
        key: "1t7hil",
      },
    ],
  ]),
  S = [
    {
      id: "sumidos",
      label: "Sumidos",
      icon: O,
      hint: "Sem retornar há mais de 120 dias",
      tone: "text-destructive bg-destructive/10",
    },
    {
      id: "risco",
      label: "Em risco",
      icon: me,
      hint: "Passaram do ciclo normal de retorno",
      tone: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
    },
    {
      id: "fieis",
      label: "Recorrentes",
      icon: U,
      hint: "3 ou mais atendimentos",
      tone: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
    },
    {
      id: "vip",
      label: "VIP",
      icon: ue,
      hint: "Top 10% em faturamento",
      tone: "text-primary bg-primary/10",
    },
    {
      id: "aniversario",
      label: "Aniversariantes",
      icon: xe,
      hint: "Fazem aniversário este mês",
      tone: "text-pink-600 dark:text-pink-400 bg-pink-500/10",
    },
    {
      id: "garantia",
      label: "Garantia vencendo",
      icon: he,
      hint: "Garantia acaba em até 15 dias",
      tone: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
    },
    {
      id: "novos",
      label: "Primeira visita",
      icon: pe,
      hint: "Só vieram uma vez — traga de volta",
      tone: "text-violet-600 dark:text-violet-400 bg-violet-500/10",
    },
  ];
function ve(r) {
  if (r == null) return 0;
  if (typeof r == "number") return isNaN(r) ? 0 : r;
  const d = parseFloat(
    String(r)
      .replace(/[^\d,.-]/g, "")
      .replace(/\./g, "")
      .replace(",", ".")
  );
  return isNaN(d) ? 0 : d;
}
const C = (r) =>
    r.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
  z = (r, d) => Math.floor((r.getTime() - d.getTime()) / 864e5);
function D(r, d, c) {
  const m = d.name.split(" ")[0];
  switch (r) {
    case "sumidos":
      return `Olá ${m}! Aqui é da ${c} 👋 Faz um tempo que não cuidamos do seu aparelho. Preparei uma condição especial pra você voltar: avaliação gratuita + desconto no serviço. Posso agendar?`;
    case "risco":
      return `Oi ${m}! Tudo certo com o seu ${
        d.devices[0] || "aparelho"
      }? Pelo nosso histórico já está na época da revisão. Quer que eu reserve um horário na ${c}?`;
    case "fieis":
      return `${m}, você é um dos nossos clientes mais fiéis 💚 Como agradecimento, liberei um benefício exclusivo no seu próximo serviço aqui na ${c}. Quer aproveitar?`;
    case "vip":
      return `Olá ${m}! Você faz parte do nosso grupo VIP da ${c}. Tenho prioridade de bancada e condição diferenciada reservada pra você. Posso te enviar os detalhes?`;
    case "aniversario":
      return `Parabéns, ${m}! 🎉 A equipe da ${c} preparou um presente de aniversário pra você: desconto especial em qualquer serviço este mês. Vamos usar?`;
    case "garantia":
      return `Oi ${m}! A garantia do serviço do seu ${
        d.devices[0] || "aparelho"
      } está acabando. Quer trazer para uma checagem gratuita antes do prazo terminar? — ${c}`;
    case "novos":
      return `Olá ${m}! Obrigado por confiar na ${c} 🙌 Como foi a experiência? Estou te enviando um cupom para o seu próximo serviço. Posso reservar?`;
  }
}
function ye() {
  const { effectiveUserId: r, isEmployee: d, loading: c } = se(),
    [m, $] = u.useState(!0),
    [b, B] = u.useState([]),
    [k, H] = u.useState([]),
    [I, F] = u.useState("nossa assistência"),
    [h, G] = u.useState("sumidos"),
    [y, Q] = u.useState("");
  u.useEffect(() => {
    if (c || !r) return;
    let a = !1;
    return (
      (async () => {
        $(!0);
        const [s, i, p] = await Promise.all([
          _.from("service_orders")
            .select(
              "client_name, client_phone, whatsapp, device_model, service_value, entry_date, created_at, status, warranty_expires_at"
            )
            .eq("user_id", r)
            .order("created_at", { ascending: !1 })
            .limit(3e3),
          _.from("clients")
            .select("name, phone, birth_date")
            .eq("user_id", r)
            .limit(3e3),
          _.from("user_settings")
            .select("company_name")
            .eq("user_id", r)
            .maybeSingle(),
        ]);
        a ||
          (B(s.data || []),
          H(i.data || []),
          p.data?.company_name && F(p.data.company_name),
          $(!1));
      })(),
      () => {
        a = !0;
      }
    );
  }, [r, c]);
  const { list: v, kpis: g } = u.useMemo(() => {
      const a = new Date(),
        s = a.getMonth(),
        i = new Map();
      k.forEach((e) => {
        if (!e.birth_date) return;
        const n = new Date(e.birth_date);
        !isNaN(n.getTime()) &&
          n.getMonth() === s &&
          (i.set(
            (e.phone || e.name || "").replace(/\D/g, "") ||
              String(e.name).toLowerCase(),
            !0
          ),
          i.set(
            String(e.name || "")
              .toLowerCase()
              .trim(),
            !0
          ));
      });
      const p = new Map();
      b.forEach((e) => {
        const n = (e.client_name || "").trim();
        if (!n) return;
        const f = (e.whatsapp || e.client_phone || "").replace(/\D/g, ""),
          j = f || n.toLowerCase(),
          w = new Date(e.entry_date || e.created_at),
          ee = !isNaN(w.getTime()),
          l = p.get(j) || {
            key: j,
            name: n,
            phone: f,
            visits: 0,
            ltv: 0,
            lastVisit: null,
            daysSince: 0,
            avgInterval: 0,
            nextVisitIn: null,
            warrantyEndsIn: null,
            birthdayThisMonth: !1,
            devices: [],
            segments: [],
            score: 0,
          };
        if (
          ((l.visits += 1),
          e.status !== "cancelled" && (l.ltv += ve(e.service_value)),
          ee && (!l.lastVisit || w > l.lastVisit) && (l.lastVisit = w),
          e.device_model &&
            !l.devices.includes(e.device_model) &&
            l.devices.push(e.device_model),
          e.warranty_expires_at)
        ) {
          const ae = new Date(e.warranty_expires_at),
            N = z(ae, a);
          N >= 0 &&
            (l.warrantyEndsIn === null || N < l.warrantyEndsIn) &&
            (l.warrantyEndsIn = N);
        }
        !l.phone && f && (l.phone = f), p.set(j, l);
      });
      const o = Array.from(p.values()),
        T = [...o].sort((e, n) => n.ltv - e.ltv),
        K = T[Math.max(0, Math.floor(T.length * 0.1) - 1)]?.ltv ?? 1 / 0;
      o.forEach((e) => {
        (e.daysSince = e.lastVisit ? z(a, e.lastVisit) : 999),
          (e.avgInterval =
            e.visits > 1 && e.lastVisit
              ? Math.max(20, Math.round(e.daysSince || 60))
              : 90),
          (e.nextVisitIn =
            e.visits > 1 ? Math.max(0, e.avgInterval - e.daysSince) : null),
          (e.birthdayThisMonth =
            i.get(e.phone) === !0 || i.get(e.name.toLowerCase().trim()) === !0);
        const n = [];
        e.daysSince > 120
          ? n.push("sumidos")
          : e.daysSince > 60 && n.push("risco"),
          e.visits >= 3 && n.push("fieis"),
          e.ltv >= K && e.ltv > 0 && n.push("vip"),
          e.birthdayThisMonth && n.push("aniversario"),
          e.warrantyEndsIn !== null &&
            e.warrantyEndsIn <= 15 &&
            n.push("garantia"),
          e.visits === 1 && e.daysSince > 30 && n.push("novos"),
          (e.segments = n),
          (e.score = Math.round(
            Math.min(
              100,
              e.visits * 12 +
                Math.min(40, e.ltv / 50) -
                Math.min(45, e.daysSince / 6) +
                (e.birthdayThisMonth ? 8 : 0)
            )
          ));
      });
      const X = o.filter((e) => e.visits >= 2).length,
        V = o.filter((e) => e.daysSince > 120),
        Y = o.length
          ? o.reduce((e, n) => e + n.ltv, 0) / Math.max(1, b.length)
          : 0;
      return {
        list: o,
        kpis: {
          total: o.length,
          recurrenceRate: o.length ? Math.round((X / o.length) * 100) : 0,
          avgLtv: o.length ? o.reduce((e, n) => e + n.ltv, 0) / o.length : 0,
          dormantRevenue: V.length * Y,
          dormantCount: V.length,
        },
      };
    }, [b, k]),
    W = u.useMemo(() => {
      const a = {};
      return (
        S.forEach(
          (s) => (a[s.id] = v.filter((i) => i.segments.includes(s.id)).length)
        ),
        a
      );
    }, [v]),
    x = u.useMemo(() => {
      const a = y.toLowerCase().trim();
      return v
        .filter((s) => s.segments.includes(h))
        .filter(
          (s) => !a || s.name.toLowerCase().includes(a) || s.phone.includes(a)
        )
        .sort((s, i) => i.score - s.score);
    }, [v, h, y]),
    Z = (a) => {
      const s = D(h, a, I);
      if (!a.phone) {
        navigator.clipboard.writeText(s),
          A.info("Cliente sem telefone — mensagem copiada.");
        return;
      }
      const i = a.phone.length <= 11 ? `55${a.phone}` : a.phone;
      window.open(`https://wa.me/${i}?text=${encodeURIComponent(s)}`, "_blank");
    },
    J = () => {
      const a = x.slice(0, 100).map(
        (s) => `${s.name} - ${s.phone || "sem telefone"}
${D(h, s, I)}`
      ).join(`

---

`);
      navigator.clipboard.writeText(a),
        A.success(`Campanha de ${Math.min(x.length, 100)} clientes copiada!`);
    },
    E = S.find((a) => a.id === h);
  return t.jsxs("div", {
    className: "space-y-4",
    children: [
      t.jsxs("div", {
        className:
          "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
        children: [
          t.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              t.jsx("div", {
                className:
                  "w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center",
                children: t.jsx(ne, { className: "w-5 h-5 text-primary" }),
              }),
              t.jsxs("div", {
                children: [
                  t.jsx("h1", {
                    className: "text-2xl font-bold",
                    children: "Radar de Recompra",
                  }),
                  t.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children:
                      "A IA de retenção que descobre quem está prestes a te esquecer — e traz de volta.",
                  }),
                ],
              }),
            ],
          }),
          t.jsxs(L, {
            onClick: J,
            variant: "outline",
            className: "gap-2 rounded-xl",
            disabled: !x.length,
            children: [t.jsx(re, { className: "w-4 h-4" }), " Copiar campanha"],
          }),
        ],
      }),
      t.jsx("div", {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
        children: [
          { label: "Clientes no radar", value: String(g.total), icon: ie },
          {
            label: "Taxa de recorrência",
            value: `${g.recurrenceRate}%`,
            icon: U,
          },
          ...(d
            ? []
            : [
                { label: "LTV médio", value: C(g.avgLtv), icon: oe },
                {
                  label: "Receita adormecida",
                  value: C(g.dormantRevenue),
                  icon: O,
                },
              ]),
        ].map((a) =>
          t.jsx(
            R,
            {
              className: "rounded-2xl border-border/60",
              children: t.jsxs(q, {
                className: "p-4",
                children: [
                  t.jsxs("div", {
                    className: "flex items-center gap-2 text-muted-foreground",
                    children: [
                      t.jsx(a.icon, { className: "w-3.5 h-3.5" }),
                      t.jsx("span", {
                        className: "text-[11px] uppercase tracking-wide",
                        children: a.label,
                      }),
                    ],
                  }),
                  m
                    ? t.jsx(P, { className: "h-7 w-24 mt-2" })
                    : t.jsx("p", {
                        className: "text-2xl font-bold mt-1",
                        children: a.value,
                      }),
                ],
              }),
            },
            a.label
          )
        ),
      }),
      t.jsx("div", {
        className: "grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-2",
        children: S.map((a) => {
          const s = a.icon,
            i = h === a.id;
          return t.jsxs(
            "button",
            {
              onClick: () => G(a.id),
              className: `rounded-2xl border p-3 text-left transition-all ${
                i
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border/60 bg-card hover:border-primary/40"
              }`,
              children: [
                t.jsx("div", {
                  className: `w-8 h-8 rounded-xl flex items-center justify-center ${a.tone}`,
                  children: t.jsx(s, { className: "w-4 h-4" }),
                }),
                t.jsx("p", {
                  className: "text-xs font-semibold mt-2",
                  children: a.label,
                }),
                t.jsx("p", {
                  className: "text-lg font-bold leading-tight",
                  children: W[a.id] ?? 0,
                }),
              ],
            },
            a.id
          );
        }),
      }),
      t.jsx(R, {
        className: "rounded-2xl border-border/60",
        children: t.jsxs(q, {
          className: "p-4 space-y-3",
          children: [
            t.jsxs("div", {
              className:
                "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
              children: [
                t.jsxs("div", {
                  children: [
                    t.jsx("h2", {
                      className: "font-semibold text-sm",
                      children: E.label,
                    }),
                    t.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: E.hint,
                    }),
                  ],
                }),
                t.jsxs("div", {
                  className: "relative w-full sm:w-64",
                  children: [
                    t.jsx(le, {
                      className:
                        "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",
                    }),
                    t.jsx(de, {
                      value: y,
                      onChange: (a) => Q(a.target.value),
                      placeholder: "Buscar cliente ou telefone",
                      className: "pl-9 rounded-xl",
                    }),
                  ],
                }),
              ],
            }),
            m
              ? t.jsx("div", {
                  className: "space-y-2",
                  children: Array.from({ length: 4 }).map((a, s) =>
                    t.jsx(P, { className: "h-16 w-full rounded-xl" }, s)
                  ),
                })
              : x.length === 0
              ? t.jsx("div", {
                  className: "py-10 text-center text-sm text-muted-foreground",
                  children: "Nenhum cliente neste grupo agora. 🎉",
                })
              : t.jsx("div", {
                  className: "space-y-2 max-h-[520px] overflow-y-auto pr-1",
                  children: x.map((a) =>
                    t.jsxs(
                      "div",
                      {
                        className:
                          "flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted transition-colors",
                        children: [
                          t.jsxs("div", {
                            className: "min-w-0 flex-1",
                            children: [
                              t.jsxs("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                  t.jsx("p", {
                                    className: "font-medium text-sm truncate",
                                    children: a.name,
                                  }),
                                  t.jsxs(M, {
                                    variant: "secondary",
                                    className: "text-[10px] h-5",
                                    children: [a.visits, "x atendimentos"],
                                  }),
                                  !d &&
                                    a.ltv > 0 &&
                                    t.jsxs(M, {
                                      variant: "outline",
                                      className: "text-[10px] h-5",
                                      children: ["LTV ", C(a.ltv)],
                                    }),
                                  a.birthdayThisMonth &&
                                    t.jsx(M, {
                                      className:
                                        "text-[10px] h-5 bg-pink-500/15 text-pink-600 border-0",
                                      children: "🎂 mês do aniversário",
                                    }),
                                ],
                              }),
                              t.jsxs("p", {
                                className:
                                  "text-[11px] text-muted-foreground truncate mt-0.5",
                                children: [
                                  a.devices[0] || "Aparelho não informado",
                                  " ·",
                                  " ",
                                  a.lastVisit
                                    ? `última visita há ${a.daysSince} dias`
                                    : "sem data",
                                  a.warrantyEndsIn !== null &&
                                  a.warrantyEndsIn <= 15
                                    ? ` · garantia acaba em ${a.warrantyEndsIn}d`
                                    : "",
                                ],
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              t.jsxs("div", {
                                className: "text-right hidden sm:block",
                                children: [
                                  t.jsx("p", {
                                    className:
                                      "text-[10px] text-muted-foreground uppercase",
                                    children: "Potencial",
                                  }),
                                  t.jsx("p", {
                                    className: "text-sm font-bold",
                                    children: Math.max(0, a.score),
                                  }),
                                ],
                              }),
                              t.jsxs(L, {
                                size: "sm",
                                className: "gap-1.5 rounded-xl",
                                onClick: () => Z(a),
                                children: [
                                  t.jsx(ce, { className: "w-3.5 h-3.5" }),
                                  " Reconquistar",
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      a.key
                    )
                  ),
                }),
          ],
        }),
      }),
    ],
  });
}
export { ye as default };
