import {
  W as Xt,
  cD as He,
  cf as Qe,
  r as p,
  w as y,
  bU as k,
  j as e,
  D as Pe,
  c as Ee,
  a_ as $e,
  d as Te,
  n as G,
  b5 as Me,
  b6 as qe,
  b7 as Ve,
  b8 as Le,
  b9 as me,
  I as re,
  T as wt,
  B as T,
  a8 as Ot,
  X as gt,
  s as zt,
  ca as Xe,
  bi as St,
  bI as Be,
  bF as Mt,
  ad as tt,
  dk as qt,
  dl as st,
  ba as lt,
  c7 as nt,
  A as Yt,
  cL as Zt,
  a3 as ut,
  bm as Vt,
  bT as ot,
  dN as Kt,
  dO as es,
  df as Pt,
  dy as ts,
  dP as ss,
  dQ as as,
  dR as Et,
  dS as Ke,
  dT as Ct,
  by as ft,
  bY as Ye,
  bP as jt,
  bx as ns,
  bn as rs,
  bo as os,
  bp as is,
  bq as ls,
  br as cs,
  bs as ds,
  bt as ms,
  bu as us,
  b3 as We,
  G as K,
  Y as le,
  $ as ce,
  dd as Lt,
  a1 as de,
  U as ct,
  b4 as xs,
  bb as dt,
  bc as vt,
  bd as _t,
  be as Nt,
  bf as mt,
  bg as Ut,
  bh as at,
  cY as bt,
  bv as Bt,
  bj as Je,
  dU as Wt,
  bk as xt,
  bR as ps,
  b2 as Ht,
  bz as hs,
  h as it,
  bA as $t,
  z as gs,
  bB as fs,
  bC as js,
  bD as Tt,
  bE as Rt,
  bl as vs,
  a2 as _s,
  dV as Ns,
  a4 as bs,
  bM as kt,
  ae as ys,
  cb as ws,
  cc as Ss,
  cd as Cs,
} from "./index-V8ZHCWL2.js";
import { C as Qt } from "./CurrencyExportDialog-HmiEHQbG.js";
import { L as Ds } from "./link-DySSB7S9.js";
import { S as Fs } from "./scale-_P6jyxG7.js";
import {
  T as Ps,
  a as Es,
  b as pt,
  c as ze,
  d as $s,
  e as Ae,
} from "./table-Dmiq7g5Z.js";
import { L as Ts, a as ht } from "./LineChart-B4BF0mru.js";
import { L as yt } from "./Legend-D2w1zv2n.js";
import { F as Gt } from "./filter-zlxD6zAv.js";
import { C as Rs } from "./calendar-clock-CIO_7BUd.js";
import { H as ks } from "./heart-handshake-DreyfAG7.js";
import "./getRadiusAndStrokeWidthFromDot-BVjcHO9P.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const At = Xt("SquareSplitHorizontal", [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
]);
function As({ open: a, onOpenChange: t, onSuccess: i }) {
  const { symbol: s } = He(),
    {
      effectiveUserId: r,
      authUserId: c,
      isEmployee: b,
      employeeId: x,
      loading: h,
    } = Qe(),
    d = r || c || "",
    [P, _] = p.useState(!1),
    [M, U] = p.useState([]),
    [$, z] = p.useState(""),
    [N, S] = p.useState([]),
    [J, Z] = p.useState([]),
    [oe, L] = p.useState([]),
    [q, V] = p.useState(!1),
    [j, ae] = p.useState({
      amount: "",
      description: "",
      due_date: "",
      installments: "1",
      downPayment: "",
      paymentFrequency: "monthly",
    }),
    [ee, he] = p.useState({ pix_key: "", receiver_name: "", bank: "" }),
    ge = (l) => {
      if (!j.amount) return "0,00";
      const g = parseFloat(j.amount.replace(",", ".")) || 0,
        A = j.downPayment ? parseFloat(j.downPayment.replace(",", ".")) : 0,
        ne = Math.max(0, g - A),
        m = l || parseInt(j.installments) || 1;
      return m <= 0
        ? "0,00"
        : (ne / m).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
    },
    be = () => {
      if (!j.amount) return 0;
      const l = parseFloat(j.amount.replace(",", ".")),
        g = j.downPayment ? parseFloat(j.downPayment.replace(",", ".")) : 0;
      return Math.max(0, l - g);
    };
  p.useEffect(() => {
    a && !h && d && (ue(), n(), Ce());
  }, [a, h, d]);
  const Ce = async () => {
      if (!d) return;
      const { data: l, error: g } = await y
        .from("user_settings")
        .select("pix_key, receiver_name, bank")
        .eq("user_id", d)
        .maybeSingle();
      g ||
        (l &&
          he({
            pix_key: l.pix_key || "",
            receiver_name: l.receiver_name || "",
            bank: l.bank || "",
          }));
    },
    ue = async () => {
      if (!d) return;
      const { data: l, error: g } = await y
        .from("clients")
        .select("*")
        .eq("user_id", d)
        .order("name");
      if (g) {
        k.error("Erro ao carregar clientes");
        return;
      }
      U(l || []);
    },
    n = async () => {
      if (!d) return;
      const { data: l, error: g } = await y
        .from("products")
        .select("id, name, code, cost_price, sale_price, quantity")
        .eq("user_id", d)
        .order("name");
      g || Z(l || []);
    },
    v = () => {
      V(!0);
    },
    R = (l) => {
      const g = J.find((A) => A.id === l);
      g &&
        (S([
          ...N,
          {
            code: g.code || "",
            description: g.name,
            number: "1",
            identifier: g.id,
          },
        ]),
        L([...oe, g.id]),
        V(!1),
        k.success(`Produto "${g.name}" adicionado`));
    },
    B = () => {
      S([...N, { code: "", description: "", number: "", identifier: "" }]),
        V(!1);
    },
    F = (l) => {
      S(N.filter((g, A) => A !== l));
    },
    I = (l, g, A) => {
      const ne = [...N];
      (ne[l][g] = A), S(ne);
    },
    C = async (l) => {
      if ((l.preventDefault(), !$)) {
        k.error("Selecione um cliente cadastrado");
        return;
      }
      _(!0);
      try {
        if (!c || !d) throw new Error("Usuário não autenticado");
        const g = `PN-${Date.now()}`,
          A = `PROP-${Date.now()}`,
          ne = N.map((D) => {
            const Y = J.find((Oe) => Oe.id === D.identifier),
              Ie = parseInt(D.number || "1", 10) || 1;
            return Y ? { product: Y, quantityUsed: Ie } : null;
          }).filter((D) => !!D);
        if (ne.length > 0) {
          const D = ne.reduce(
            (we, { product: te, quantityUsed: pe }) =>
              we + Number(te.cost_price) * pe,
            0
          );
          if (D > 0) {
            const { error: we } = await y
              .from("transactions")
              .insert({
                user_id: d,
                type: "expense",
                amount: D,
                description: `Custo de produtos usados na promissória - ${ne
                  .map(
                    ({ product: te, quantityUsed: pe }) => `${te.name} (x${pe})`
                  )
                  .join(", ")}`,
                category: "Produtos Fiado",
                date: Xe(),
                payment_method: "Fiado",
                created_by_employee_id: b ? x : null,
              });
          }
          const Y = ne.map(({ product: we }) => we.name),
            { data: Ie, error: Oe } = await y
              .from("parts")
              .select("id, name, quantity, unit_price, category")
              .eq("user_id", d)
              .eq("category", "Produto")
              .in("name", Y);
          for (const { product: we, quantityUsed: te } of ne) {
            const pe = Ie?.find((O) => O.name === we.name);
            if (!pe) continue;
            const o = Math.max(0, (pe.quantity || 0) - te),
              { error: u } = await y
                .from("parts")
                .update({ quantity: o })
                .eq("id", pe.id);
            if (u) continue;
            const { error: f } = await y
              .from("stock_movements")
              .insert({
                user_id: d,
                part_id: pe.id,
                type: "saida",
                quantity: te,
                reason: `Produto usado na promissória ${g}: ${we.name}`,
                sale_value: we.sale_price,
                purchase_value: pe.unit_price,
              });
          }
        }
        const m = parseFloat(j.amount.replace(",", ".")),
          E = j.downPayment ? parseFloat(j.downPayment.replace(",", ".")) : 0,
          W = Math.max(0, m - E),
          X = parseInt(j.installments),
          ie = W / X;
        if (E > 0) {
          const { error: D } = await y
            .from("transactions")
            .insert({
              user_id: d,
              type: "income",
              amount: E,
              description: `Valor de entrada da promissória ${g}`,
              category: "Fiado - Entrada",
              date: Xe(),
              payment_method: "Fiado",
              created_by_employee_id: b ? x : null,
            });
        }
        const fe = {
            user_id: d,
            client_id: $,
            note_number: g,
            proposal_number: A,
            type: X === 1 ? "ÚNICA" : "PARCELADA",
            issue_date: Xe(),
            due_date: j.due_date,
            amount: W,
            description: j.description,
            products: N,
            pix_key: ee.pix_key,
            receiver_name: ee.receiver_name,
            bank: ee.bank,
            status: "pending",
            installments: X,
            parent_note_id: null,
            created_by_employee_id: b ? x : null,
          },
          { data: je, error: H } = await y
            .from("promissory_notes")
            .insert(fe)
            .select()
            .single();
        if (H) throw H;
        const De = [],
          [Re, Ue, Fe] = j.due_date.split("-").map(Number),
          ke = (D, Y, Ie, Oe) => {
            const we = j.paymentFrequency;
            if (we === "weekly") {
              const te = new Date(D, Y - 1, Ie);
              return (
                te.setDate(te.getDate() + Oe * 7),
                `${te.getFullYear()}-${String(te.getMonth() + 1).padStart(
                  2,
                  "0"
                )}-${String(te.getDate()).padStart(2, "0")}`
              );
            } else if (we === "biweekly") {
              const te = new Date(D, Y - 1, Ie);
              return (
                te.setDate(te.getDate() + Oe * 15),
                `${te.getFullYear()}-${String(te.getMonth() + 1).padStart(
                  2,
                  "0"
                )}-${String(te.getDate()).padStart(2, "0")}`
              );
            } else {
              let te = D,
                pe = Y + Oe,
                o = Ie;
              for (; pe > 12; ) (pe -= 12), (te += 1);
              const u = new Date(te, pe, 0).getDate();
              return (
                o > u && (o = u),
                `${te}-${String(pe).padStart(2, "0")}-${String(o).padStart(
                  2,
                  "0"
                )}`
              );
            }
          };
        for (let D = 0; D < X; D++) {
          const Y = ke(Re, Ue, Fe, D);
          De.push({
            user_id: d,
            client_id: $,
            note_number: `${g}-${D + 1}/${X}`,
            proposal_number: A,
            type: X === 1 ? "ÚNICA" : "PARCELADA",
            issue_date: Xe(),
            due_date: Y,
            amount: ie,
            description: j.description,
            products: N,
            pix_key: ee.pix_key,
            receiver_name: ee.receiver_name,
            bank: ee.bank,
            status: "pending",
            installments: X,
            installment_number: D + 1,
            installment_value: ie,
            parent_note_id: je.id,
            created_by_employee_id: b ? x : null,
          });
        }
        const { error: ye } = await y.from("promissory_notes").insert(De);
        if (ye) throw ye;
        k.success("Promissória criada com sucesso!"), i(), t(!1), w();
      } catch {
        k.error("Erro ao criar promissória");
      } finally {
        _(!1);
      }
    },
    w = () => {
      ae({
        amount: "",
        description: "",
        due_date: "",
        installments: "1",
        downPayment: "",
        paymentFrequency: "monthly",
      }),
        z(""),
        S([]),
        L([]),
        V(!1);
    };
  return e.jsx(Pe, {
    open: a,
    onOpenChange: t,
    children: e.jsxs(Ee, {
      className: "max-w-3xl max-h-[90vh] overflow-y-auto",
      children: [
        e.jsx($e, { children: e.jsx(Te, { children: "Nova Promissória" }) }),
        e.jsxs("form", {
          onSubmit: C,
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx(G, { children: "Cliente *" }),
                e.jsxs(Me, {
                  value: $,
                  onValueChange: z,
                  children: [
                    e.jsx(qe, {
                      children: e.jsx(Ve, {
                        placeholder: "Selecione um cliente cadastrado",
                      }),
                    }),
                    e.jsx(Le, {
                      children: M.map((l) =>
                        e.jsxs(
                          me,
                          { value: l.id, children: [l.name, " - ", l.cpf] },
                          l.id
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs(G, { children: ["Valor Total (", s, ") *"] }),
                    e.jsx(re, {
                      type: "text",
                      placeholder: "0,00",
                      value: j.amount,
                      onChange: (l) => ae({ ...j, amount: l.target.value }),
                      required: !0,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs(G, {
                      children: ["Valor de Entrada (", s, ") - Opcional"],
                    }),
                    e.jsx(re, {
                      type: "text",
                      placeholder: "0,00",
                      value: j.downPayment,
                      onChange: (l) =>
                        ae({ ...j, downPayment: l.target.value }),
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground mt-1",
                      children: "Será registrado como receita imediata",
                    }),
                  ],
                }),
              ],
            }),
            j.downPayment &&
              e.jsxs("div", {
                className: "p-3 bg-primary/10 rounded-lg",
                children: [
                  e.jsxs("p", {
                    className: "text-sm font-medium",
                    children: [
                      "Valor a parcelar: ",
                      s,
                      " ",
                      be().toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: "Valor total menos entrada",
                  }),
                ],
              }),
            e.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx(G, { children: "Parcelas *" }),
                    e.jsxs(Me, {
                      value: j.installments,
                      onValueChange: (l) => ae({ ...j, installments: l }),
                      children: [
                        e.jsx(qe, { children: e.jsx(Ve, {}) }),
                        e.jsx(Le, {
                          children: Array.from(
                            { length: 24 },
                            (l, g) => g + 1
                          ).map((l) =>
                            e.jsxs(
                              me,
                              {
                                value: l.toString(),
                                children: [l, "x de ", s, " ", ge(l)],
                              },
                              l
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(G, { children: "Frequência de Vencimento *" }),
                    e.jsxs(Me, {
                      value: j.paymentFrequency,
                      onValueChange: (l) => ae({ ...j, paymentFrequency: l }),
                      children: [
                        e.jsx(qe, { children: e.jsx(Ve, {}) }),
                        e.jsxs(Le, {
                          children: [
                            e.jsx(me, {
                              value: "weekly",
                              children: "Semanal (7 dias)",
                            }),
                            e.jsx(me, {
                              value: "biweekly",
                              children: "Quinzenal (15 dias)",
                            }),
                            e.jsx(me, {
                              value: "monthly",
                              children: "Mensal (30 dias)",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(G, { children: "Primeiro Vencimento *" }),
                    e.jsx(re, {
                      type: "date",
                      value: j.due_date,
                      onChange: (l) => ae({ ...j, due_date: l.target.value }),
                      required: !0,
                    }),
                  ],
                }),
              ],
            }),
            parseInt(j.installments) > 1 &&
              e.jsxs("div", {
                className: "p-3 bg-primary/10 rounded-lg",
                children: [
                  e.jsxs("p", {
                    className: "text-sm font-medium",
                    children: [j.installments, "x de ", s, " ", ge()],
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: [
                      "As parcelas serão geradas automaticamente com vencimento",
                      " ",
                      j.paymentFrequency === "weekly"
                        ? "semanal (a cada 7 dias)"
                        : j.paymentFrequency === "biweekly"
                        ? "quinzenal (a cada 15 dias)"
                        : "mensal",
                    ],
                  }),
                ],
              }),
            e.jsxs("div", {
              children: [
                e.jsx(G, { children: "Descrição da Obra/Serviço *" }),
                e.jsx(wt, {
                  placeholder: "Descreva o serviço ou obra realizada",
                  value: j.description,
                  onChange: (l) => ae({ ...j, description: l.target.value }),
                  required: !0,
                  rows: 3,
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [
                    e.jsx(G, { children: "Produtos" }),
                    e.jsxs(T, {
                      type: "button",
                      size: "sm",
                      variant: "default",
                      onClick: v,
                      children: [
                        e.jsx(Ot, { className: "w-4 h-4 mr-1" }),
                        "Adicionar Produto",
                      ],
                    }),
                  ],
                }),
                q &&
                  e.jsxs("div", {
                    className: "mb-4 p-4 border rounded-lg bg-card",
                    children: [
                      e.jsx(G, {
                        className: "mb-2 block",
                        children: "Selecionar Produto",
                      }),
                      J.length > 0
                        ? e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs(Me, {
                                onValueChange: R,
                                children: [
                                  e.jsx(qe, {
                                    children: e.jsx(Ve, {
                                      placeholder:
                                        "Escolha um produto cadastrado",
                                    }),
                                  }),
                                  e.jsx(Le, {
                                    children: J.map((l) =>
                                      e.jsxs(
                                        me,
                                        {
                                          value: l.id,
                                          children: [
                                            l.name,
                                            " - ",
                                            l.code || "Sem código",
                                            " (Custo: R$ ",
                                            Number(l.cost_price).toLocaleString(
                                              "pt-BR",
                                              { minimumFractionDigits: 2 }
                                            ),
                                            ")",
                                          ],
                                        },
                                        l.id
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  e.jsx(T, {
                                    type: "button",
                                    size: "sm",
                                    variant: "outline",
                                    onClick: B,
                                    children: "Adicionar Produto Manual",
                                  }),
                                  e.jsx(T, {
                                    type: "button",
                                    size: "sm",
                                    variant: "ghost",
                                    onClick: () => V(!1),
                                    children: "Cancelar",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children:
                                  "Nenhum produto cadastrado. Adicione um produto manual.",
                              }),
                              e.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  e.jsx(T, {
                                    type: "button",
                                    size: "sm",
                                    variant: "outline",
                                    onClick: B,
                                    children: "Adicionar Produto Manual",
                                  }),
                                  e.jsx(T, {
                                    type: "button",
                                    size: "sm",
                                    variant: "ghost",
                                    onClick: () => V(!1),
                                    children: "Cancelar",
                                  }),
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
                oe.length > 0 &&
                  e.jsxs("div", {
                    className: "mb-4 p-3 bg-primary/10 rounded-lg text-sm",
                    children: [
                      e.jsx("span", {
                        className: "font-medium",
                        children: "Custo total dos produtos: ",
                      }),
                      "R$ ",
                      J.filter((l) => oe.includes(l.id))
                        .reduce((l, g) => l + Number(g.cost_price), 0)
                        .toLocaleString("pt-BR", { minimumFractionDigits: 2 }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children:
                          "Será registrado automaticamente como despesa",
                      }),
                    ],
                  }),
                N.map((l, g) =>
                  e.jsxs(
                    "div",
                    {
                      className:
                        "grid grid-cols-1 md:grid-cols-5 gap-2 mb-2 p-3 border rounded",
                      children: [
                        e.jsx(re, {
                          placeholder: "Código",
                          value: l.code,
                          onChange: (A) => I(g, "code", A.target.value),
                        }),
                        e.jsx(re, {
                          placeholder: "Descrição",
                          value: l.description,
                          onChange: (A) => I(g, "description", A.target.value),
                          className: "md:col-span-2",
                        }),
                        e.jsx(re, {
                          placeholder: "Nº",
                          value: l.number,
                          onChange: (A) => I(g, "number", A.target.value),
                        }),
                        e.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            e.jsx(re, {
                              placeholder: "Identificador",
                              value: l.identifier,
                              onChange: (A) =>
                                I(g, "identifier", A.target.value),
                            }),
                            e.jsx(T, {
                              type: "button",
                              size: "icon",
                              variant: "ghost",
                              onClick: () => F(g),
                              children: e.jsx(gt, { className: "w-4 h-4" }),
                            }),
                          ],
                        }),
                      ],
                    },
                    g
                  )
                ),
              ],
            }),
            e.jsxs("div", {
              className: "flex justify-end gap-2 pt-4",
              children: [
                e.jsx(T, {
                  type: "button",
                  variant: "outline",
                  onClick: () => t(!1),
                  children: "Cancelar",
                }),
                e.jsxs(T, {
                  type: "submit",
                  disabled: P,
                  children: [
                    P && e.jsx(zt, { className: "w-4 h-4 mr-2 animate-spin" }),
                    "Criar Promissória",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Is = async (a) => {
  const t = new St({ orientation: "portrait", unit: "mm", format: "a4" }),
    i = t.internal.pageSize.getWidth();
  t.internal.pageSize.getHeight();
  const s = 15;
  let r = s;
  if (a.company.logo)
    try {
      t.addImage(a.company.logo, "PNG", s, r, 35, 18);
    } catch {}
  t.setFontSize(24),
    t.setFont("helvetica", "bold"),
    t.text("NOTA PROMISSÓRIA", i / 2, r + 12, { align: "center" }),
    (r += 30),
    t.setDrawColor(0, 0, 0),
    t.setLineWidth(0.5),
    t.rect(s, r, i - 2 * s, 25),
    t.setFontSize(10),
    t.setFont("helvetica", "bold"),
    t.text(`Nº: ${a.note_number}`, s + 5, r + 7),
    t.text(
      `Emissão: ${new Date(a.issue_date + "T12:00:00").toLocaleDateString(
        "pt-BR"
      )}`,
      s + 5,
      r + 14
    ),
    t.text(
      `Vencimento: ${new Date(a.due_date + "T12:00:00").toLocaleDateString(
        "pt-BR"
      )}`,
      s + 5,
      r + 21
    );
  const c = a.installment_value || a.amount;
  t.setFontSize(14),
    t.setFont("helvetica", "bold"),
    !a.installment_number && a.installments && a.installments > 1
      ? (t.text(
          `VALOR TOTAL: R$ ${a.amount.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}`,
          i - s - 5,
          r + 10,
          { align: "right" }
        ),
        t.setFontSize(10),
        t.text(
          `${a.installments}x de R$ ${a.installment_value?.toLocaleString(
            "pt-BR",
            { minimumFractionDigits: 2 }
          )}`,
          i - s - 5,
          r + 17,
          { align: "right" }
        ))
      : (t.text(
          `VALOR: R$ ${c.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}`,
          i - s - 5,
          r + 12,
          { align: "right" }
        ),
        a.installment_number &&
          (t.setFontSize(10),
          t.text(
            `Parcela ${a.installment_number}/${a.installments}`,
            i - s - 5,
            r + 20,
            { align: "right" }
          ))),
    (r += 32),
    t.setFontSize(9),
    t.setFont("helvetica", "bold"),
    t.text("Valor por Extenso:", s, r),
    (r += 5),
    t.setFont("helvetica", "normal");
  const b = Os(c),
    x = t.splitTextToSize(b, i - 2 * s);
  t.text(x, s, r),
    (r += x.length * 5 + 8),
    t.setFontSize(10),
    t.setFont("helvetica", "normal");
  const h = `Por esta NOTA PROMISSÓRIA, pagarei por mim e por meus herdeiros e sucessores ao(à) credor(a) ${
      a.company.name
    }, inscrito(a) no CNPJ sob o nº ${
      a.company.cnpj || "___________________"
    }, ou à sua ordem, a quantia acima especificada, referente a ${
      a.description
    }.`,
    d = t.splitTextToSize(h, i - 2 * s);
  t.text(d, s, r),
    (r += d.length * 5 + 10),
    t.setFont("helvetica", "bold"),
    t.setFontSize(11),
    t.text("DADOS DO CREDOR", s, r),
    (r += 2),
    t.setLineWidth(0.3),
    t.rect(s, r, i - 2 * s, 30),
    t.line(s, r + 7.5, i - s, r + 7.5),
    t.line(s, r + 15, i - s, r + 15),
    t.line(s, r + 22.5, i - s, r + 22.5),
    t.setFont("helvetica", "normal"),
    t.setFontSize(9);
  const P = a.company.document_type === "nif" ? "NIF" : "CNPJ";
  if (
    (t.text(`Nome/Razão Social: ${a.company.name}`, s + 2, r + 5),
    t.text(`${P}: ${a.company.cnpj || ""}`, s + 2, r + 12.5),
    t.text(`Endereço: ${a.company.address || ""}`, s + 2, r + 20),
    t.text(`Telefone: ${a.company.phone || ""}`, s + 2, r + 27.5),
    (r += 35),
    t.setFont("helvetica", "bold"),
    t.setFontSize(11),
    t.text("DADOS DO DEVEDOR (EMITENTE)", s, r),
    (r += 2),
    t.setLineWidth(0.3),
    t.rect(s, r, i - 2 * s, 30),
    t.line(s, r + 7.5, i - s, r + 7.5),
    t.line(s, r + 15, i - s, r + 15),
    t.line(s, r + 22.5, i - s, r + 22.5),
    t.setFont("helvetica", "normal"),
    t.setFontSize(9),
    t.text(`Nome Completo: ${a.client.name}`, s + 2, r + 5),
    t.text(`CPF: ${a.client.cpf || ""}`, s + 2, r + 12.5),
    t.text(
      `Endereço: ${a.client.address || ""} - ${a.client.city || ""}`,
      s + 2,
      r + 20
    ),
    t.text(`Telefone/WhatsApp: ${a.client.phone || ""}`, s + 2, r + 27.5),
    (r += 35),
    a.products && a.products.length > 0)
  ) {
    t.setFont("helvetica", "bold"),
      t.setFontSize(11),
      t.text("PRODUTOS/SERVIÇOS", s, r),
      (r += 2),
      t.setLineWidth(0.3);
    const N = 7.5 + a.products.length * 6;
    t.rect(s, r, i - 2 * s, N),
      t.line(s, r + 7.5, i - s, r + 7.5),
      t.setFontSize(9),
      t.text("Cód", s + 2, r + 5),
      t.text("Descrição", s + 20, r + 5),
      (r += 7.5),
      t.setFont("helvetica", "normal"),
      t.setFontSize(8),
      a.products.forEach((S, J) => {
        t.text(S.code || "-", s + 2, r + 4),
          t.text(S.description || "-", s + 20, r + 4),
          (r += 6),
          J < a.products.length - 1 && t.line(s, r - 2, i - s, r - 2);
      }),
      (r += 5);
  }
  if (a.company.fine_rate || a.company.daily_interest_rate) {
    if (
      ((r += 3),
      t.setFontSize(9),
      t.setFont("helvetica", "bold"),
      t.text("Informações sobre atrasos:", s, r),
      t.setFont("helvetica", "normal"),
      t.setFontSize(8),
      (r += 4),
      a.company.fine_rate &&
        a.company.fine_rate > 0 &&
        (t.text(
          `• Multa: ${a.company.fine_rate.toFixed(
            2
          )}% sobre o valor (aplicada uma única vez)`,
          s + 2,
          r
        ),
        (r += 4)),
      a.company.daily_interest_rate && a.company.daily_interest_rate > 0)
    ) {
      const N = (a.company.daily_interest_rate * 30).toFixed(2);
      t.text(
        `• Juros: ${a.company.daily_interest_rate.toFixed(
          3
        )}% ao dia (aprox. ${N}% ao mês)`,
        s + 2,
        r
      ),
        (r += 4);
    }
    r += 6;
  }
  const _ =
      a.company.payment_type === "mbway"
        ? "INFORMAÇÕES DE PAGAMENTO (MB WAY):"
        : "INFORMAÇÕES DE PAGAMENTO (PIX):",
    M = a.company.payment_type === "mbway" ? "Telefone" : "Chave PIX",
    U = a.company.payment_type === "mbway" ? "Instituição" : "Banco";
  if (a.company.pix_qrcode)
    try {
      const S = i - s - 35;
      t.addImage(a.company.pix_qrcode, "PNG", S, r, 35, 35),
        t.setFontSize(7),
        t.setFont("helvetica", "bold");
      const J =
        a.company.payment_type === "mbway"
          ? "Pague via MB Way"
          : "Pague via PIX";
      t.text(J, S + 35 / 2, r + 35 + 4, { align: "center" }),
        t.setFontSize(9),
        t.setFont("helvetica", "bold"),
        t.text(_, s, r),
        t.setFont("helvetica", "normal"),
        t.setFontSize(8),
        t.text(`${M}: ${a.pix_key || ""}`, s, r + 6),
        t.text(`Favorecido: ${a.receiver_name || ""}`, s, r + 11),
        t.text(`${U}: ${a.bank || ""}`, s, r + 16),
        (r += 47);
    } catch {}
  else
    t.setFontSize(9),
      t.setFont("helvetica", "bold"),
      t.text(_, s, r),
      t.setFont("helvetica", "normal"),
      t.setFontSize(8),
      t.text(`${M}: ${a.pix_key || ""}`, s, r + 6),
      t.text(`Favorecido: ${a.receiver_name || ""}`, s, r + 11),
      t.text(`${U}: ${a.bank || ""}`, s, r + 16),
      (r += 25);
  t.setLineWidth(0.3);
  const $ = r;
  if (!a.installment_number && a.installments && a.installments > 1) {
    const N = $ + 10;
    t.line(s + 2, N, s + 55, N),
      t.setFont("helvetica", "bold"),
      t.setFontSize(8),
      t.text("Assinatura do Devedor", s + 15, N + 5),
      t.setFont("helvetica", "normal"),
      t.setFontSize(7),
      t.text(a.client.name, s + 15, N + 10),
      t.text(`CPF: ${a.client.cpf || ""}`, s + 15, N + 14);
    const S = s + 70;
    t.line(S, N, S + 55, N),
      t.setFont("helvetica", "bold"),
      t.setFontSize(8),
      t.text("Assinatura da Loja", S + 15, N + 5),
      t.setFont("helvetica", "normal"),
      t.setFontSize(7),
      t.text(a.company.name, S + 10, N + 10);
    const J = a.company.document_type === "nif" ? "NIF" : "CNPJ";
    t.text(`${J}: ${a.company.cnpj || ""}`, S + 10, N + 14);
    const Z = i - s - 55;
    t.line(Z, N, i - s - 2, N),
      t.setFont("helvetica", "bold"),
      t.setFontSize(8),
      t.text("Testemunha", Z + 15, N + 5),
      t.setFont("helvetica", "normal"),
      t.setFontSize(7),
      t.text("Nome: _____________________", Z + 2, N + 10),
      t.text("CPF: _____________________", Z + 2, N + 14);
  } else {
    const N = $ + 10;
    t.line(s + 5, N, s + 75, N),
      t.setFont("helvetica", "bold"),
      t.setFontSize(8),
      t.text("Assinatura do Devedor", s + 20, N + 5),
      t.setFont("helvetica", "normal"),
      t.setFontSize(7),
      t.text(a.client.name, s + 20, N + 10),
      t.text(`CPF: ${a.client.cpf || ""}`, s + 20, N + 14);
    const S = i - s - 75;
    t.line(S, N, i - s - 5, N),
      t.setFont("helvetica", "bold"),
      t.setFontSize(8),
      t.text("Testemunha", S + 20, N + 5),
      t.setFont("helvetica", "normal"),
      t.setFontSize(7),
      t.text("Nome: _______________________________", S, N + 10),
      t.text("CPF: _______________________________", S, N + 14);
  }
  const z = a.installment_number
    ? `Promissoria_${a.note_number}_Parcela_${a.installment_number}.pdf`
    : `Promissoria_${a.note_number}.pdf`;
  return t.save(z), t;
};
function Os(a) {
  const t = Math.floor(a),
    i = Math.round((a - t) * 100),
    s = [
      "",
      "UM",
      "DOIS",
      "TRÊS",
      "QUATRO",
      "CINCO",
      "SEIS",
      "SETE",
      "OITO",
      "NOVE",
    ],
    r = [
      "DEZ",
      "ONZE",
      "DOZE",
      "TREZE",
      "QUATORZE",
      "QUINZE",
      "DEZESSEIS",
      "DEZESSETE",
      "DEZOITO",
      "DEZENOVE",
    ],
    c = [
      "",
      "",
      "VINTE",
      "TRINTA",
      "QUARENTA",
      "CINQUENTA",
      "SESSENTA",
      "SETENTA",
      "OITENTA",
      "NOVENTA",
    ],
    b = [
      "",
      "CENTO",
      "DUZENTOS",
      "TREZENTOS",
      "QUATROCENTOS",
      "QUINHENTOS",
      "SEISCENTOS",
      "SETECENTOS",
      "OITOCENTOS",
      "NOVECENTOS",
    ];
  let x = "";
  if (t === 0) x = "ZERO REAIS";
  else if (t === 100) x = "CEM REAIS";
  else if (t < 10) x = s[t] + " " + (t === 1 ? "REAL" : "REAIS");
  else if (t >= 10 && t < 20) x = r[t - 10] + " REAIS";
  else if (t < 100) {
    const h = Math.floor(t / 10),
      d = t % 10;
    x = c[h] + (d > 0 ? " E " + s[d] : "") + " REAIS";
  } else if (t < 1e3) {
    const h = Math.floor(t / 100),
      d = t % 100;
    if (((x = b[h]), d > 0))
      if (d >= 10 && d < 20) x += " E " + r[d - 10];
      else {
        const P = Math.floor(d / 10),
          _ = d % 10;
        (x += " E " + (P > 0 ? c[P] : "")),
          _ > 0 && (x += (P > 0 ? " E " : "") + s[_]);
      }
    x += " REAIS";
  } else if (t < 1e6) {
    const h = Math.floor(t / 1e3),
      d = t % 1e3;
    if (h === 1) x = "MIL";
    else if (h < 10) x = s[h] + " MIL";
    else if (h >= 10 && h < 20) x = r[h - 10] + " MIL";
    else if (h < 100) {
      const P = Math.floor(h / 10),
        _ = h % 10;
      x = c[P] + (_ > 0 ? " E " + s[_] : "") + " MIL";
    } else {
      const P = Math.floor(h / 100),
        _ = h % 100;
      if (((x = b[P]), _ > 0))
        if (_ >= 10 && _ < 20) x += " E " + r[_ - 10];
        else {
          const M = Math.floor(_ / 10),
            U = _ % 10;
          (x += " E " + (M > 0 ? c[M] : "")),
            U > 0 && (x += (M > 0 ? " E " : "") + s[U]);
        }
      x += " MIL";
    }
    if (d > 0)
      if (d === 100) x += " E CEM";
      else if (d < 10) x += " E " + s[d];
      else if (d >= 10 && d < 20) x += " E " + r[d - 10];
      else if (d < 100) {
        const P = Math.floor(d / 10),
          _ = d % 10;
        (x += " E " + c[P]), _ > 0 && (x += " E " + s[_]);
      } else {
        const P = Math.floor(d / 100),
          _ = d % 100;
        if (((x += " E " + b[P]), _ > 0))
          if (_ >= 10 && _ < 20) x += " E " + r[_ - 10];
          else {
            const M = Math.floor(_ / 10),
              U = _ % 10;
            (x += " E " + (M > 0 ? c[M] : "")),
              U > 0 && (x += (M > 0 ? " E " : "") + s[U]);
          }
      }
    x += " REAIS";
  } else x = "R$ " + a.toFixed(2).replace(".", ",");
  if (i > 0)
    if (i >= 10 && i < 20) x += " E " + r[i - 10] + " CENTAVOS";
    else if (i < 10) x += " E " + s[i] + (i === 1 ? " CENTAVO" : " CENTAVOS");
    else {
      const h = Math.floor(i / 10),
        d = i % 10;
      (x += " E " + c[h]), d > 0 && (x += " E " + s[d]), (x += " CENTAVOS");
    }
  return x;
}
async function zs(a) {
  const t = new St(),
    i = t.internal.pageSize.getWidth();
  let s = 20;
  const r = a.currency || "BRL",
    c = (h) => Mt(h, r);
  if (a.company.logo)
    try {
      t.addImage(a.company.logo, "PNG", 15, s, 30, 30);
    } catch {}
  t.setFontSize(16),
    t.setFont("helvetica", "bold"),
    t.text(a.company.name || "Empresa", a.company.logo ? 50 : 15, s + 10),
    t.setFontSize(9),
    t.setFont("helvetica", "normal"),
    a.company.cnpj &&
      t.text(`CNPJ: ${a.company.cnpj}`, a.company.logo ? 50 : 15, s + 16),
    a.company.address &&
      t.text(a.company.address, a.company.logo ? 50 : 15, s + 21),
    a.company.phone &&
      t.text(`Tel: ${a.company.phone}`, a.company.logo ? 50 : 15, s + 26),
    (s += 45),
    t.setFontSize(18),
    t.setFont("helvetica", "bold"),
    t.setTextColor(0, 100, 0),
    t.text("EXTRATO DE PAGAMENTOS", i / 2, s, { align: "center" }),
    t.setTextColor(0, 0, 0),
    (s += 12),
    t.setDrawColor(200, 200, 200),
    t.line(15, s, i - 15, s),
    (s += 10),
    t.setFontSize(10),
    t.setFont("helvetica", "bold"),
    t.text("DADOS DA PROMISSÓRIA", 15, s),
    (s += 7),
    t.setFont("helvetica", "normal"),
    t.text(`Número: ${a.note_number}`, 15, s),
    (s += 6),
    t.text(`Cliente: ${a.client_name}`, 15, s),
    (s += 6),
    t.text(`Data de Emissão: ${Be(a.issue_date)}`, 15, s),
    (s += 6),
    t.setFont("helvetica", "bold"),
    t.text(`Valor Total da Promissória: ${c(a.total_amount)}`, 15, s),
    (s += 12),
    t.line(15, s, i - 15, s),
    (s += 10),
    t.setFont("helvetica", "bold"),
    t.text("HISTÓRICO DE PAGAMENTOS REALIZADOS", 15, s),
    (s += 8),
    t.setFillColor(240, 240, 240),
    t.rect(15, s - 5, i - 30, 8, "F"),
    t.setFontSize(9),
    t.text("Parcela", 17, s),
    t.text("Vencimento", 50, s),
    t.text("Pagamento", 85, s),
    t.text("Valor Original", 120, s),
    t.text("Valor Pago", 160, s),
    (s += 8),
    t.setFont("helvetica", "normal");
  let b = 0;
  a.payments.forEach((h, d) => {
    s > 270 &&
      (t.addPage(),
      (s = 20),
      t.setFont("helvetica", "bold"),
      t.setFillColor(240, 240, 240),
      t.rect(15, s - 5, i - 30, 8, "F"),
      t.setFontSize(9),
      t.text("Parcela", 17, s),
      t.text("Vencimento", 50, s),
      t.text("Pagamento", 85, s),
      t.text("Valor Original", 120, s),
      t.text("Valor Pago", 160, s),
      (s += 8),
      t.setFont("helvetica", "normal")),
      d % 2 === 0 &&
        (t.setFillColor(250, 250, 250), t.rect(15, s - 5, i - 30, 7, "F")),
      t.text(`${h.installment_number}/${h.total_installments}`, 17, s),
      t.text(Be(h.due_date), 50, s),
      t.text(Be(h.paid_date), 85, s),
      t.text(
        `R$ ${h.original_value.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}`,
        120,
        s
      ),
      h.paid_value !== h.original_value &&
        (t.setFont("helvetica", "bold"), t.setTextColor(0, 100, 0)),
      t.text(
        `R$ ${h.paid_value.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}`,
        160,
        s
      ),
      t.setFont("helvetica", "normal"),
      t.setTextColor(0, 0, 0),
      (b += h.paid_value),
      (s += 7);
  }),
    (s += 5),
    t.setLineWidth(0.5),
    t.line(15, s, i - 15, s),
    (s += 8),
    t.setFontSize(11),
    t.setFont("helvetica", "bold"),
    t.text("TOTAL RECEBIDO:", 120, s),
    t.setTextColor(0, 100, 0),
    t.text(
      `R$ ${b.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
      160,
      s
    ),
    t.setTextColor(0, 0, 0),
    (s += 10),
    t.setFontSize(9),
    t.setFont("helvetica", "normal");
  const x = a.total_amount - b;
  t.text(`Total de parcelas pagas: ${a.payments.length}`, 15, s),
    (s += 5),
    x > 0
      ? t.text(
          `Valor pendente: R$ ${x.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}`,
          15,
          s
        )
      : (t.setFont("helvetica", "bold"),
        t.setTextColor(0, 150, 0),
        t.text("✓ PROMISSÓRIA QUITADA", 15, s),
        t.setTextColor(0, 0, 0),
        t.setFont("helvetica", "normal")),
    (s += 15),
    t.setFontSize(8),
    t.setTextColor(128, 128, 128),
    t.text(
      `Extrato gerado em ${new Date().toLocaleDateString(
        "pt-BR"
      )} às ${new Date().toLocaleTimeString("pt-BR")}`,
      i / 2,
      s,
      { align: "center" }
    ),
    (s += 4),
    t.text(
      "Este documento é um extrato de controle interno e não substitui a promissória original.",
      i / 2,
      s,
      { align: "center" }
    ),
    t.save(
      `Extrato_Pagamentos_${a.note_number.replace(
        /\//g,
        "-"
      )}_${Date.now()}.pdf`
    );
}
function Ms({
  open: a,
  onOpenChange: t,
  originalValue: i,
  valueWithFees: s,
  installmentInfo: r,
  onConfirm: c,
}) {
  const { format: b } = He(),
    [x, h] = p.useState("original"),
    [d, P] = p.useState(""),
    _ = () => {
      let $ = i;
      if (x === "fees") $ = s;
      else if (x === "custom") {
        const N = parseFloat(d.replace(",", "."));
        if (isNaN(N) || N <= 0) return;
        $ = N;
      }
      const z = $ < i;
      c($, z), z || t(!1);
    },
    M = () => {
      h("original"), P(""), t(!1);
    },
    U = () => {
      const $ = parseFloat(d.replace(",", "."));
      return isNaN($) || $ <= 0
        ? null
        : $ < i
        ? e.jsxs("p", {
            className: "text-xs text-amber-600 dark:text-amber-400 mt-1",
            children: ["⚠️ Pagamento parcial: faltarão ", b(i - $)],
          })
        : null;
    };
  return e.jsx(Pe, {
    open: a,
    onOpenChange: M,
    children: e.jsxs(Ee, {
      className: "sm:max-w-[500px]",
      children: [
        e.jsx($e, {
          children: e.jsxs(Te, {
            className: "flex items-center gap-2",
            children: [
              e.jsx(tt, { className: "w-5 h-5" }),
              "Confirmar Pagamento",
            ],
          }),
        }),
        e.jsxs("div", {
          className: "space-y-4 py-4",
          children: [
            e.jsxs("div", {
              className: "bg-muted p-3 rounded-lg",
              children: [
                e.jsx("p", {
                  className: "text-sm text-muted-foreground mb-1",
                  children: "Parcela",
                }),
                e.jsx("p", { className: "font-medium", children: r }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsx(G, {
                  className: "text-base font-semibold",
                  children: "Como o cliente pagou?",
                }),
                e.jsxs(qt, {
                  value: x,
                  onValueChange: ($) => h($),
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors",
                      children: [
                        e.jsx(st, {
                          value: "original",
                          id: "original",
                          className: "mt-1",
                        }),
                        e.jsxs("div", {
                          className: "flex-1",
                          children: [
                            e.jsx(G, {
                              htmlFor: "original",
                              className: "font-medium cursor-pointer",
                              children: "Valor Original",
                            }),
                            e.jsx("p", {
                              className: "text-2xl font-bold text-primary mt-1",
                              children: b(i),
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground mt-1",
                              children: "Sem multas ou juros",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors",
                      children: [
                        e.jsx(st, {
                          value: "fees",
                          id: "fees",
                          className: "mt-1",
                        }),
                        e.jsxs("div", {
                          className: "flex-1",
                          children: [
                            e.jsx(G, {
                              htmlFor: "fees",
                              className: "font-medium cursor-pointer",
                              children: "Valor com Multa e Juros",
                            }),
                            e.jsx("p", {
                              className:
                                "text-2xl font-bold text-destructive mt-1",
                              children: b(s),
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground mt-1",
                              children: "Inclui multa e juros por atraso",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors",
                      children: [
                        e.jsx(st, {
                          value: "custom",
                          id: "custom",
                          className: "mt-1",
                        }),
                        e.jsxs("div", {
                          className: "flex-1",
                          children: [
                            e.jsx(G, {
                              htmlFor: "custom",
                              className: "font-medium cursor-pointer",
                              children: "Valor Personalizado",
                            }),
                            e.jsx(re, {
                              type: "text",
                              placeholder: "0,00",
                              value: d,
                              onChange: ($) => P($.target.value),
                              disabled: x !== "custom",
                              className: "mt-2",
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground mt-1",
                              children:
                                "Digite o valor que foi efetivamente pago",
                            }),
                            x === "custom" && U(),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20",
              children: [
                e.jsx(lt, {
                  className: "w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0",
                }),
                e.jsxs("p", {
                  className: "text-xs text-muted-foreground",
                  children: [
                    "O valor confirmado será registrado automaticamente no financeiro como receita.",
                    x === "custom" &&
                      " Se for menor que o valor da parcela, você poderá redistribuir o restante.",
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs(nt, {
          children: [
            e.jsx(T, { variant: "outline", onClick: M, children: "Cancelar" }),
            e.jsx(T, { onClick: _, children: "Confirmar Pagamento" }),
          ],
        }),
      ],
    }),
  });
}
function qs({
  open: a,
  onOpenChange: t,
  installmentValue: i,
  paidAmount: s,
  remainingInstallmentsCount: r,
  onConfirm: c,
}) {
  const { format: b } = He(),
    [x, h] = p.useState("next"),
    d = i - s,
    P = r > 0 ? d / r : 0,
    _ = () => {
      c(x), t(!1);
    };
  return r === 0
    ? e.jsx(Pe, {
        open: a,
        onOpenChange: t,
        children: e.jsxs(Ee, {
          className: "sm:max-w-[450px]",
          children: [
            e.jsx($e, {
              children: e.jsxs(Te, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(lt, { className: "w-5 h-5 text-amber-500" }),
                  "Pagamento Parcial",
                ],
              }),
            }),
            e.jsx("div", {
              className: "space-y-4 py-4",
              children: e.jsxs("div", {
                className:
                  "p-4 rounded-lg bg-amber-500/10 border border-amber-500/20",
                children: [
                  e.jsxs("p", {
                    className: "text-sm",
                    children: [
                      e.jsx("strong", { children: "Atenção:" }),
                      " Esta é a última parcela e o cliente pagou apenas",
                      " ",
                      e.jsx("strong", { children: b(s) }),
                      " de",
                      " ",
                      e.jsx("strong", { children: b(i) }),
                      ".",
                    ],
                  }),
                  e.jsxs("p", {
                    className: "text-sm mt-2",
                    children: [
                      "O valor restante de ",
                      e.jsx("strong", {
                        className: "text-destructive",
                        children: b(d),
                      }),
                      " ",
                      "ficará como pendência.",
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs(nt, {
              children: [
                e.jsx(T, {
                  variant: "outline",
                  onClick: () => t(!1),
                  children: "Cancelar",
                }),
                e.jsx(T, { onClick: _, children: "Confirmar Pagamento" }),
              ],
            }),
          ],
        }),
      })
    : e.jsx(Pe, {
        open: a,
        onOpenChange: t,
        children: e.jsxs(Ee, {
          className: "sm:max-w-[500px]",
          children: [
            e.jsx($e, {
              children: e.jsxs(Te, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(At, { className: "w-5 h-5" }),
                  "Pagamento Parcial - Redistribuir Valor",
                ],
              }),
            }),
            e.jsxs("div", {
              className: "space-y-4 py-4",
              children: [
                e.jsxs("div", {
                  className:
                    "grid grid-cols-3 gap-2 text-sm bg-muted p-3 rounded-lg",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-muted-foreground",
                          children: "Valor Parcela",
                        }),
                        e.jsx("p", {
                          className: "font-semibold",
                          children: b(i),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-muted-foreground",
                          children: "Valor Pago",
                        }),
                        e.jsx("p", {
                          className: "font-semibold text-primary",
                          children: b(s),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-muted-foreground",
                          children: "Restante",
                        }),
                        e.jsx("p", {
                          className: "font-semibold text-destructive",
                          children: b(d),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsxs(G, {
                      className: "text-base font-semibold",
                      children: [
                        "O que fazer com o valor restante (",
                        b(d),
                        ")?",
                      ],
                    }),
                    e.jsxs(qt, {
                      value: x,
                      onValueChange: (M) => h(M),
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors",
                          children: [
                            e.jsx(st, {
                              value: "next",
                              id: "next",
                              className: "mt-1",
                            }),
                            e.jsxs("div", {
                              className: "flex-1",
                              children: [
                                e.jsxs(G, {
                                  htmlFor: "next",
                                  className:
                                    "font-medium cursor-pointer flex items-center gap-2",
                                  children: [
                                    e.jsx(Yt, {
                                      className: "w-4 h-4 text-blue-500",
                                    }),
                                    "Adicionar à Próxima Parcela",
                                  ],
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-sm text-muted-foreground mt-1",
                                  children: [
                                    "A próxima parcela terá valor de",
                                    " ",
                                    e.jsx("strong", {
                                      className: "text-foreground",
                                      children: b(i + d),
                                    }),
                                  ],
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-1",
                                  children: ["(Valor original + ", b(d), ")"],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors",
                          children: [
                            e.jsx(st, {
                              value: "distribute",
                              id: "distribute",
                              className: "mt-1",
                            }),
                            e.jsxs("div", {
                              className: "flex-1",
                              children: [
                                e.jsxs(G, {
                                  htmlFor: "distribute",
                                  className:
                                    "font-medium cursor-pointer flex items-center gap-2",
                                  children: [
                                    e.jsx(At, {
                                      className: "w-4 h-4 text-green-500",
                                    }),
                                    "Dividir Entre Todas as Parcelas a Vencer",
                                  ],
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-sm text-muted-foreground mt-1",
                                  children: [
                                    "O valor restante de ",
                                    e.jsx("strong", {
                                      className: "text-foreground",
                                      children: b(d),
                                    }),
                                    " será dividido igualmente entre as ",
                                    e.jsx("strong", { children: r }),
                                    " parcelas que ainda faltam vencer.",
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "mt-2 p-2 bg-green-500/10 rounded border border-green-500/20",
                                  children: [
                                    e.jsxs("p", {
                                      className:
                                        "text-sm font-medium text-green-700 dark:text-green-400",
                                      children: [
                                        "Cálculo: ",
                                        b(d),
                                        " ÷ ",
                                        r,
                                        " = ",
                                        e.jsx("strong", { children: b(P) }),
                                      ],
                                    }),
                                    e.jsxs("p", {
                                      className:
                                        "text-xs text-muted-foreground mt-1",
                                      children: [
                                        "Cada uma das ",
                                        r,
                                        " parcela(s) pendente(s) receberá apenas +",
                                        b(P),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20",
                  children: [
                    e.jsx(lt, {
                      className: "w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0",
                    }),
                    e.jsxs("p", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        "O valor de ",
                        b(s),
                        " será registrado automaticamente no financeiro como receita.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(nt, {
              children: [
                e.jsx(T, {
                  variant: "outline",
                  onClick: () => t(!1),
                  children: "Cancelar",
                }),
                e.jsx(T, { onClick: _, children: "Confirmar Redistribuição" }),
              ],
            }),
          ],
        }),
      });
}
function Vs({ open: a, onOpenChange: t, note: i, onUpdate: s }) {
  const { format: r } = He(),
    {
      effectiveUserId: c,
      authUserId: b,
      isEmployee: x,
      employeeId: h,
      permissions: d,
      loading: P,
    } = Qe(),
    _ = c || b || "",
    M = !x || d?.ver_faturamento === !0,
    U = (o) => (M ? r(o) : "•••"),
    [$, z] = p.useState([]),
    [N, S] = p.useState(!1),
    [J, Z] = p.useState(!1),
    [oe, L] = p.useState(!1),
    [q, V] = p.useState(!1),
    [j, ae] = p.useState(null),
    [ee, he] = p.useState(null),
    [ge, be] = p.useState({ fineRate: 2, dailyInterestRate: 0.033 }),
    [Ce, ue] = p.useState(!1),
    [n, v] = p.useState(null),
    [R, B] = p.useState(""),
    [F, I] = p.useState(!1),
    [C, w] = p.useState({
      description: "",
      amount: "",
      pix_key: "",
      receiver_name: "",
      bank: "",
    }),
    [l, g] = p.useState({}),
    [A, ne] = p.useState(!1);
  p.useEffect(() => {
    i && a && !P && _ && m();
  }, [i, a, P, _]);
  const m = async () => {
      if (i) {
        S(!0);
        try {
          if (!_) return;
          const [o, u] = await Promise.all([
            y
              .from("promissory_notes")
              .select(
                `
            id, note_number, proposal_number, type, issue_date, due_date, amount, 
            description, pix_key, receiver_name, bank, status, client_id,
            installments, installment_number, installment_value, paid_at, paid_amount,
            clients (name, address, city, cpf, phone)
          `
              )
              .eq("parent_note_id", i.id)
              .order("installment_number", { ascending: !0 }),
            y
              .from("user_settings")
              .select("company_name, fine_rate, daily_interest_rate")
              .eq("user_id", _)
              .maybeSingle(),
          ]);
          if (o.error) throw o.error;
          const f = (o.data || []).map((se) => ({ ...se, products: [] })),
            O = new Date(),
            Q = `${O.getFullYear()}-${String(O.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(O.getDate()).padStart(2, "0")}`,
            ve = f.map((se) =>
              se.status !== "paid" && se.due_date < Q
                ? { ...se, status: "overdue" }
                : se
            );
          z(ve),
            u.data &&
              (B(u.data.company_name || ""),
              be({
                fineRate: u.data.fine_rate || 2,
                dailyInterestRate: u.data.daily_interest_rate || 0.033,
              }));
        } catch {
          k.error("Erro ao carregar dados");
        } finally {
          S(!1);
        }
      }
    },
    E = async () => {
      if (i)
        try {
          const { data: o, error: u } = await y
            .from("promissory_notes")
            .select(
              `
          id, note_number, proposal_number, type, issue_date, due_date, amount, 
          description, pix_key, receiver_name, bank, status, client_id,
          installments, installment_number, installment_value, paid_at, paid_amount,
          clients (name, address, city, cpf, phone)
        `
            )
            .eq("parent_note_id", i.id)
            .order("installment_number", { ascending: !0 });
          if (u) throw u;
          const f = (o || []).map((se) => ({ ...se, products: [] })),
            O = new Date(),
            Q = `${O.getFullYear()}-${String(O.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(O.getDate()).padStart(2, "0")}`,
            ve = f.map((se) =>
              se.status !== "paid" && se.due_date < Q
                ? { ...se, status: "overdue" }
                : se
            );
          z(ve);
        } catch {}
    },
    W = (o) => {
      const u = o.installment_value || o.amount,
        [f, O, Q] = o.due_date.split("-").map(Number),
        ve = new Date(f, O - 1, Q),
        se = new Date(),
        xe =
          new Date(se.getFullYear(), se.getMonth(), se.getDate()).getTime() -
          ve.getTime(),
        _e = Math.max(0, Math.floor(xe / (1e3 * 60 * 60 * 24)));
      if (_e === 0) return u;
      const Ne = u * (ge.fineRate / 100),
        Ze = u * (ge.dailyInterestRate / 100) * _e;
      return u + Ne + Ze;
    },
    X = (o) => {
      ae(o), L(!0);
    },
    ie = async (o, u) => {
      if (!j) return;
      const f = j.installment_value || j.amount;
      if (u && o < f) {
        he({ amount: o, installment: j }), L(!1), V(!0);
        return;
      }
      await fe(o);
    },
    fe = async (o) => {
      if (j)
        try {
          if (!_) return;
          const { error: u } = await y
            .from("promissory_notes")
            .update({
              status: "paid",
              paid_at: new Date().toISOString(),
              paid_amount: o,
            })
            .eq("id", j.id);
          if (u) throw u;
          const { error: f } = await y
            .from("transactions")
            .insert({
              user_id: _,
              type: "income",
              amount: o,
              description: `Pagamento de promissória - ${i?.note_number} - Parcela ${j.installment_number}/${j.installments}`,
              category: "Fiado",
              date: Xe(),
              payment_method: "Fiado",
              created_by_employee_id: x ? h : null,
            });
          if (f) throw f;
          await H(),
            k.success("Parcela marcada como paga e receita registrada!"),
            E(),
            s?.(),
            ae(null),
            L(!1);
        } catch {
          k.error("Erro ao marcar como paga");
        }
    },
    je = async (o) => {
      if (!ee || !j) return;
      const { amount: u, installment: f } = ee,
        Q = (f.installment_value || f.amount) - u;
      try {
        if (!_) return;
        const { error: ve } = await y
          .from("promissory_notes")
          .update({
            status: "paid",
            paid_at: new Date().toISOString(),
            paid_amount: u,
          })
          .eq("id", f.id);
        if (ve) throw ve;
        const { error: se } = await y
          .from("transactions")
          .insert({
            user_id: _,
            type: "income",
            amount: u,
            description: `Pagamento parcial de promissória - ${i?.note_number} - Parcela ${f.installment_number}/${f.installments}`,
            category: "Fiado",
            date: Xe(),
            payment_method: "Fiado",
            created_by_employee_id: x ? h : null,
          });
        if (se) throw se;
        const Se = $.filter(
          (xe) =>
            xe.status !== "paid" &&
            (xe.installment_number || 0) > (f.installment_number || 0)
        ).sort(
          (xe, _e) =>
            (xe.installment_number || 0) - (_e.installment_number || 0)
        );
        if (Se.length > 0)
          if (o === "next") {
            const xe = Se[0],
              _e = (xe.installment_value || 0) + Q;
            await y
              .from("promissory_notes")
              .update({ installment_value: _e })
              .eq("id", xe.id),
              k.success(
                `Valor restante de ${r(Q)} adicionado à próxima parcela!`
              );
          } else {
            const xe = Q / Se.length,
              _e = Se.map((Ne) => {
                const Ge = (Ne.installment_value || 0) + xe;
                return y
                  .from("promissory_notes")
                  .update({ installment_value: Ge })
                  .eq("id", Ne.id);
              });
            await Promise.all(_e),
              k.success(
                `Valor restante de ${r(Q)} dividido em ${
                  Se.length
                } parcela(s) (+${r(xe)} cada)!`
              );
          }
        await H(), E(), s?.(), ae(null), he(null), V(!1);
      } catch {
        k.error("Erro ao processar pagamento parcial");
      }
    },
    H = async () => {
      const { data: o } = await y
        .from("promissory_notes")
        .select("status")
        .eq("parent_note_id", i?.id);
      o?.every((f) => f.status === "paid") &&
        i &&
        (await y
          .from("promissory_notes")
          .update({ status: "quitado" })
          .eq("id", i.id),
        Re());
    },
    De = () =>
      j
        ? $.filter(
            (o) =>
              o.status !== "paid" &&
              (o.installment_number || 0) > (j.installment_number || 0)
          ).length
        : 0,
    Re = () => {
      if (!i) return;
      const o = i.clients,
        u = o?.phone?.replace(/\D/g, "") || "",
        f = `🎉 *Parabéns!* 🎉

Sua promissória foi *QUITADA* com sucesso!

📋 *Detalhes:*
Número: ${i.note_number}
Cliente: ${o?.name}
Valor Total: ${r(Number(i.amount))}

✅ Todas as parcelas foram pagas!

Agradecemos pela sua pontualidade e confiança. Estamos sempre à disposição para novos negócios!

_Mensagem automática - Sistema de Gestão_`,
        O = u ? `https://wa.me/55${u}?text=${encodeURIComponent(f)}` : "";
      O &&
        (window.open(O, "_blank"),
        k.success("Mensagem de parabéns enviada via WhatsApp!"));
    },
    Ue = async (o) => {
      try {
        if (!_) return;
        if (o.status === "paid") {
          const { error: f } = await y
            .from("transactions")
            .delete()
            .eq("user_id", _)
            .eq("category", "Fiado")
            .ilike(
              "description",
              `%${i?.note_number}%Parcela ${o.installment_number}%`
            );
        }
        const { error: u } = await y
          .from("promissory_notes")
          .delete()
          .eq("id", o.id);
        if (u) throw u;
        k.success("Parcela cancelada!"), E(), s?.();
      } catch {
        k.error("Erro ao cancelar parcela");
      }
    },
    Fe = async () => {
      if (i)
        try {
          const { error: o } = await y
            .from("promissory_notes")
            .delete()
            .eq("parent_note_id", i.id);
          if (o) throw o;
          const { error: u } = await y
            .from("promissory_notes")
            .delete()
            .eq("id", i.id);
          if (u) throw u;
          k.success("Promissória excluída!"), Z(!1), t(!1), s?.();
        } catch {
          k.error("Erro ao excluir promissória");
        }
    },
    ke = async (o) => {
      const u = o || i;
      if (u)
        try {
          const { data: f } = await y
              .from("clients")
              .select("*")
              .eq("id", u.client_id)
              .single(),
            { data: O } = await y
              .from("user_settings")
              .select("*")
              .eq("user_id", _)
              .maybeSingle();
          if (!f || !O) {
            k.error("Dados incompletos para gerar PDF");
            return;
          }
          const Q = { ...u };
          !u.installment_number &&
            u.installments &&
            u.installments > 1 &&
            (Q.installment_value = u.amount / u.installments),
            await Is({
              ...Q,
              pix_key: O.pix_key || Q.pix_key || "",
              receiver_name: O.receiver_name || Q.receiver_name || "",
              bank: O.bank || Q.bank || "",
              client: {
                name: f.name,
                address: f.address || "",
                city: f.city || "",
                cpf: f.cpf || "",
                phone: f.phone || "",
              },
              company: {
                name: O.company_name || "",
                address: O.company_address || "",
                cnpj: O.company_cnpj || "",
                document_type: O.company_document_type || "cnpj",
                phone: O.company_phone || "",
                logo: O.company_logo || void 0,
                pix_qrcode: O.pix_qrcode || void 0,
                fine_rate: O.fine_rate || void 0,
                daily_interest_rate: O.daily_interest_rate || void 0,
                payment_type: O.payment_type || "pix",
              },
            }),
            k.success("PDF gerado com sucesso!");
        } catch {
          k.error("Erro ao gerar PDF");
        }
    },
    ye = (o) => {
      const u = o || i;
      if (!u) return;
      const f = u.installment_number
          ? `
Parcela: ${u.installment_number}/${u.installments}`
          : "",
        Q = `Olá! Sua promissória está ${
          u.status === "overdue" ? "VENCIDA" : "a vencer"
        }:

Número: ${u.note_number}${f}
Valor: R$ ${Number(u.installment_value || u.amount).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}
Vencimento: ${Be(u.due_date)}

Por favor, regularize sua situação o quanto antes.`,
        se = (o?.clients || i?.clients)?.phone?.replace(/\D/g, "") || "",
        Se = se
          ? `https://wa.me/55${se}?text=${encodeURIComponent(Q)}`
          : `https://wa.me/?text=${encodeURIComponent(Q)}`;
      window.open(Se, "_blank"), k.success("Abrindo WhatsApp...");
    },
    D = (o, u) => {
      const f = u || i;
      if (!f) return;
      const O = u?.clients || i?.clients,
        Q = O?.name || "Cliente",
        ve = O?.phone?.replace(/\D/g, "") || "",
        Se = `R$ ${Number(f.installment_value || f.amount).toLocaleString(
          "pt-BR",
          { minimumFractionDigits: 2 }
        )}`,
        xe = Be(f.due_date),
        _e = R || "nossa empresa",
        Ne = f.installment_number
          ? `${f.installment_number}/${f.installments}`
          : "",
        Ze = f.status === "overdue",
        Ge = Ze
          ? `R$ ${W(f).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
          : Se,
        Dt = {
          lembrete: `📋 *LEMBRETE DE VENCIMENTO*

Prezado(a) *${Q}*,

Informamos que o boleto/título nº *${f.note_number}*${
            Ne ? ` (Parcela ${Ne})` : ""
          } no valor de *${Se}* vence em *${xe}*.

Evite encargos e mantenha seu nome limpo realizando o pagamento até a data.

📱 Acesse o link de pagamento para pagar via PIX.

Atenciosamente,
*${_e}*

_Central de Cobranças_`,
          cobranca: `⚠️ *AVISO DE COBRANÇA*

Prezado(a) *${Q}*,

Identificamos uma pendência financeira em seu nome referente ao título nº *${
            f.note_number
          }*${Ne ? ` (Parcela ${Ne})` : ""}.

💰 Valor original: *${Se}*
📅 Vencimento: *${xe}*
${
  Ze
    ? `💸 Valor atualizado (com multa e juros): *${Ge}*
`
    : ""
}
Solicitamos a regularização imediata para evitar:
• Inclusão nos órgãos de proteção ao crédito (Serasa/SPC)
• Protesto em cartório
• Restrição de crédito

Entre em contato para negociar.

*${_e}*
_Departamento de Cobrança_`,
          negociacao: `🤝 *PROPOSTA DE NEGOCIAÇÃO*

Prezado(a) *${Q}*,

Sabemos que imprevistos acontecem. Por isso, gostaríamos de oferecer condições especiais para regularizar sua pendência:

📋 Título: *${f.note_number}*${Ne ? ` (Parcela ${Ne})` : ""}
💰 Valor: *${Ge}*

✅ Opções disponíveis:
• Pagamento à vista com possibilidade de desconto
• Reparcelamento do saldo devedor
• Extensão do prazo de vencimento

Responda esta mensagem para conversarmos sobre a melhor opção para você.

*${_e}*
_Departamento Financeiro_`,
          ultimoAviso: `🔴 *ÚLTIMO AVISO — ANTES DA NEGATIVAÇÃO*

Prezado(a) *${Q}*,

Esta é a última tentativa de contato amigável antes de encaminharmos seu débito para os procedimentos legais.

📋 Título: *${f.note_number}*${Ne ? ` (Parcela ${Ne})` : ""}
💰 Valor atualizado: *${Ge}*
📅 Vencido desde: *${xe}*

⚖️ *Consequências do não pagamento:*
1. Inclusão no Serasa, SPC e Boa Vista
2. Protesto do título em cartório
3. Perda de score de crédito
4. Impossibilidade de obter financiamentos
5. Possível ação judicial de cobrança

⏰ Prazo: *48 horas* para regularização.

Entre em contato URGENTE para evitar estas medidas.

*${_e}*
_Departamento Jurídico_`,
          boleto: `🏦 *BOLETO REGISTRADO EM SEU NOME*

Prezado(a) *${Q}*,

Informamos que há um título/boleto registrado em seu nome junto ao sistema bancário:

📋 Protocolo: *${f.note_number}*${
            Ne
              ? `
📄 Parcela: *${Ne}*`
              : ""
          }
💰 Valor: *${Ge}*
📅 Vencimento: *${xe}*
🏢 Cedente: *${_e}*

🔗 Este título está sincronizado com as instituições financeiras parceiras. O pagamento pode ser realizado via PIX através do link de acompanhamento.

⚠️ O não pagamento poderá resultar em registro junto aos bureaus de crédito.

Atenciosamente,
*${_e}*
_Central de Cobranças_`,
        },
        Ft = Dt[o] || Dt.lembrete,
        Jt = ve
          ? `https://wa.me/55${ve}?text=${encodeURIComponent(Ft)}`
          : `https://wa.me/?text=${encodeURIComponent(Ft)}`;
      window.open(Jt, "_blank"), k.success("Cobrança enviada via WhatsApp!");
    },
    Y = async () => {
      if (i)
        try {
          if (!_) return;
          const { data: o } = await y
            .from("user_settings")
            .select("*")
            .eq("user_id", _)
            .maybeSingle();
          if (!o) {
            k.error("Configurações da empresa não encontradas");
            return;
          }
          const u = $.filter((f) => f.paid_amount && f.status === "paid");
          if (u.length === 0) {
            k.error("Nenhuma parcela paga para gerar extrato");
            return;
          }
          v({
            note_number: i.note_number,
            client_name: i.clients?.name || "Cliente não identificado",
            total_amount: i.amount,
            issue_date: i.issue_date,
            payments: u.map((f) => ({
              installment_number: f.installment_number || 1,
              total_installments: f.installments || 1,
              due_date: f.due_date,
              paid_date: f.paid_at || f.due_date,
              original_value: f.installment_value || f.amount,
              paid_value: f.paid_amount || 0,
            })),
            company: {
              name: o.company_name || "",
              cnpj: o.company_cnpj || void 0,
              address: o.company_address || void 0,
              phone: o.company_phone || void 0,
              logo: o.company_logo || void 0,
            },
          }),
            ue(!0);
        } catch {
          k.error("Erro ao preparar extrato de pagamentos");
        }
    },
    Ie = async (o) => {
      if (n)
        try {
          await zs({ ...n, currency: o }),
            k.success("Extrato de pagamentos gerado com sucesso!"),
            v(null);
        } catch {
          k.error("Erro ao gerar extrato de pagamentos");
        }
    },
    Oe = async () => {
      if (!i?.access_token) {
        k.error("Link de acompanhamento não disponível");
        return;
      }
      const o = i.access_token.substring(0, 8),
        f = `${window.location.origin}/promissoria/${o}`;
      try {
        await navigator.clipboard.writeText(f),
          k.success(`Link de ${R || "acompanhamento"} copiado!`);
      } catch {
        k.error("Erro ao copiar link");
      }
    },
    we = () => {
      if (!i) return;
      w({
        description: i.description || "",
        amount: Number(i.amount).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        pix_key: i.pix_key || "",
        receiver_name: i.receiver_name || "",
        bank: i.bank || "",
      });
      const o = {};
      $.forEach((u) => {
        u.status !== "paid" &&
          (o[u.id] = {
            due_date: u.due_date,
            installment_value: Number(
              u.installment_value || u.amount
            ).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
          });
      }),
        g(o),
        I(!0);
    },
    te = async () => {
      if (!(!i || !_)) {
        ne(!0);
        try {
          const o =
              parseFloat(C.amount.replace(/\./g, "").replace(",", ".")) || 0,
            { error: u } = await y
              .from("promissory_notes")
              .update({
                description: C.description,
                amount: o,
                pix_key: C.pix_key,
                receiver_name: C.receiver_name,
                bank: C.bank,
              })
              .eq("id", i.id);
          if (u) throw u;
          for (const [f, O] of Object.entries(l)) {
            const Q =
                parseFloat(
                  O.installment_value.replace(/\./g, "").replace(",", ".")
                ) || 0,
              { error: ve } = await y
                .from("promissory_notes")
                .update({
                  due_date: O.due_date,
                  installment_value: Q,
                  amount: Q,
                })
                .eq("id", f);
          }
          k.success("Promissória atualizada com sucesso!"), I(!1), m(), s?.();
        } catch {
          k.error("Erro ao salvar alterações");
        } finally {
          ne(!1);
        }
      }
    },
    pe = (o) => {
      const u = {
          pending: { label: "Pendente", variant: "outline" },
          paid: { label: "Pago", variant: "default" },
          overdue: { label: "Vencido", variant: "destructive" },
          quitado: { label: "Quitado", variant: "secondary" },
        },
        { label: f, variant: O } = u[o] || u.pending;
      return e.jsx(We, { variant: O, children: f });
    };
  return i
    ? e.jsxs(e.Fragment, {
        children: [
          e.jsx(Pe, {
            open: a,
            onOpenChange: t,
            children: e.jsxs(Ee, {
              className: "max-w-4xl max-h-[90vh] overflow-y-auto",
              children: [
                e.jsx($e, {
                  children: e.jsxs(Te, {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsx("span", {
                        children: F
                          ? "Editar Promissória"
                          : "Detalhes da Promissória",
                      }),
                      e.jsx("div", {
                        className: "flex gap-2 flex-wrap",
                        children: F
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(T, {
                                  size: "sm",
                                  variant: "outline",
                                  onClick: () => I(!1),
                                  children: "Cancelar",
                                }),
                                e.jsx(T, {
                                  size: "sm",
                                  onClick: te,
                                  disabled: A,
                                  children: A ? "Salvando..." : "Salvar",
                                }),
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsxs(T, {
                                  size: "sm",
                                  variant: "outline",
                                  onClick: we,
                                  children: [
                                    e.jsx(Zt, { className: "w-4 h-4 mr-1" }),
                                    "Editar",
                                  ],
                                }),
                                e.jsxs(T, {
                                  size: "sm",
                                  variant: "outline",
                                  onClick: Oe,
                                  children: [
                                    e.jsx(Ds, { className: "w-4 h-4 mr-1" }),
                                    "Link",
                                  ],
                                }),
                                e.jsxs(T, {
                                  size: "sm",
                                  variant: "outline",
                                  onClick: () => ke(),
                                  children: [
                                    e.jsx(ut, { className: "w-4 h-4 mr-1" }),
                                    "Imprimir",
                                  ],
                                }),
                                e.jsxs(T, {
                                  size: "sm",
                                  variant: "destructive",
                                  onClick: () => Z(!0),
                                  children: [
                                    e.jsx(Vt, { className: "w-4 h-4 mr-1" }),
                                    "Excluir",
                                  ],
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  className: "space-y-6",
                  children: F
                    ? e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Número",
                                  }),
                                  e.jsx("p", {
                                    className: "font-medium",
                                    children: i.note_number,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Cliente",
                                  }),
                                  e.jsx("p", {
                                    className: "font-medium",
                                    children: i.clients?.name,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx(G, { children: "Valor Total" }),
                              e.jsx(re, {
                                value: C.amount,
                                onChange: (o) =>
                                  w({
                                    ...C,
                                    amount: o.target.value.replace(
                                      /[^\d,]/g,
                                      ""
                                    ),
                                  }),
                                placeholder: "0,00",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx(G, { children: "Descrição" }),
                              e.jsx(wt, {
                                value: C.description,
                                onChange: (o) =>
                                  w({ ...C, description: o.target.value }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "grid grid-cols-3 gap-3",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx(G, { children: "Chave PIX" }),
                                  e.jsx(re, {
                                    value: C.pix_key,
                                    onChange: (o) =>
                                      w({ ...C, pix_key: o.target.value }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx(G, { children: "Nome do Recebedor" }),
                                  e.jsx(re, {
                                    value: C.receiver_name,
                                    onChange: (o) =>
                                      w({
                                        ...C,
                                        receiver_name: o.target.value,
                                      }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx(G, { children: "Banco" }),
                                  e.jsx(re, {
                                    value: C.bank,
                                    onChange: (o) =>
                                      w({ ...C, bank: o.target.value }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          $.filter((o) => o.status !== "paid").length > 0 &&
                            e.jsxs("div", {
                              className: "border-t pt-4",
                              children: [
                                e.jsx("h3", {
                                  className: "font-semibold mb-3",
                                  children: "Parcelas Pendentes",
                                }),
                                e.jsx("div", {
                                  className: "space-y-3",
                                  children: $.filter(
                                    (o) => o.status !== "paid"
                                  ).map((o) =>
                                    e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center gap-3 p-3 border rounded-lg bg-accent/30",
                                        children: [
                                          e.jsxs("span", {
                                            className:
                                              "text-sm font-medium min-w-[100px]",
                                            children: [
                                              "Parcela ",
                                              o.installment_number,
                                              "/",
                                              o.installments,
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex-1 grid grid-cols-2 gap-3",
                                            children: [
                                              e.jsxs("div", {
                                                children: [
                                                  e.jsx(G, {
                                                    className: "text-xs",
                                                    children: "Vencimento",
                                                  }),
                                                  e.jsx(re, {
                                                    type: "date",
                                                    value:
                                                      l[o.id]?.due_date ||
                                                      o.due_date,
                                                    onChange: (u) =>
                                                      g((f) => ({
                                                        ...f,
                                                        [o.id]: {
                                                          ...f[o.id],
                                                          due_date:
                                                            u.target.value,
                                                        },
                                                      })),
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                children: [
                                                  e.jsx(G, {
                                                    className: "text-xs",
                                                    children: "Valor",
                                                  }),
                                                  e.jsx(re, {
                                                    value:
                                                      l[o.id]
                                                        ?.installment_value ||
                                                      "",
                                                    onChange: (u) =>
                                                      g((f) => ({
                                                        ...f,
                                                        [o.id]: {
                                                          ...f[o.id],
                                                          installment_value:
                                                            u.target.value.replace(
                                                              /[^\d,]/g,
                                                              ""
                                                            ),
                                                        },
                                                      })),
                                                    placeholder: "0,00",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      o.id
                                    )
                                  ),
                                }),
                              ],
                            }),
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Número",
                                  }),
                                  e.jsx("p", {
                                    className: "font-medium",
                                    children: i.note_number,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Cliente",
                                  }),
                                  e.jsx("p", {
                                    className: "font-medium",
                                    children: i.clients?.name,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Valor Total",
                                  }),
                                  e.jsx("p", {
                                    className: "font-medium text-lg",
                                    children: U(Number(i.amount)),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Data de Emissão",
                                  }),
                                  e.jsx("p", {
                                    className: "font-medium",
                                    children: Be(i.issue_date),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Descrição",
                              }),
                              e.jsx("p", {
                                className: "font-medium",
                                children: i.description,
                              }),
                            ],
                          }),
                          $.length > 0 &&
                            e.jsxs("div", {
                              className: "border-t pt-4",
                              children: [
                                e.jsxs("h3", {
                                  className: "font-semibold mb-4",
                                  children: ["Parcelas (", $.length, "x)"],
                                }),
                                e.jsx("div", {
                                  className: "space-y-3",
                                  children: $.map((o) =>
                                    e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex flex-col gap-3 p-4 border rounded-lg bg-accent/50",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "flex justify-between items-start",
                                            children: e.jsxs("div", {
                                              className: "flex-1",
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2 mb-1",
                                                  children: [
                                                    e.jsxs("p", {
                                                      className: "font-medium",
                                                      children: [
                                                        "Parcela ",
                                                        o.installment_number,
                                                        "/",
                                                        o.installments,
                                                      ],
                                                    }),
                                                    pe(o.status),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-2 gap-2 text-sm",
                                                  children: [
                                                    e.jsxs("div", {
                                                      children: [
                                                        e.jsx("span", {
                                                          className:
                                                            "text-muted-foreground",
                                                          children: "Valor: ",
                                                        }),
                                                        e.jsx("span", {
                                                          className:
                                                            "font-medium",
                                                          children: U(
                                                            Number(
                                                              o.installment_value ||
                                                                0
                                                            )
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsxs("div", {
                                                      children: [
                                                        e.jsx("span", {
                                                          className:
                                                            "text-muted-foreground",
                                                          children:
                                                            "Vencimento: ",
                                                        }),
                                                        e.jsx("span", {
                                                          className:
                                                            "font-medium",
                                                          children: Be(
                                                            o.due_date
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                    o.paid_amount &&
                                                      o.status === "paid" &&
                                                      e.jsxs("div", {
                                                        className: "col-span-2",
                                                        children: [
                                                          e.jsx("span", {
                                                            className:
                                                              "text-muted-foreground",
                                                            children:
                                                              "Valor Pago: ",
                                                          }),
                                                          e.jsx("span", {
                                                            className:
                                                              "font-semibold text-primary",
                                                            children: U(
                                                              Number(
                                                                o.paid_amount
                                                              )
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                          e.jsxs("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                              o.status !== "paid" &&
                                                e.jsxs("div", {
                                                  className:
                                                    "flex flex-col gap-1",
                                                  children: [
                                                    e.jsxs(T, {
                                                      size: "sm",
                                                      variant: "default",
                                                      onClick: () => X(o),
                                                      children: [
                                                        e.jsx(ot, {
                                                          className:
                                                            "w-4 h-4 mr-1",
                                                        }),
                                                        "Confirmar Pagamento",
                                                      ],
                                                    }),
                                                    o.status === "overdue" &&
                                                      e.jsxs("span", {
                                                        className:
                                                          "text-xs text-muted-foreground",
                                                        children: [
                                                          "Com multa/juros: R$ ",
                                                          W(o).toLocaleString(
                                                            "pt-BR",
                                                            {
                                                              minimumFractionDigits: 2,
                                                            }
                                                          ),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              e.jsxs(T, {
                                                size: "sm",
                                                variant: "outline",
                                                onClick: () => ke(o),
                                                children: [
                                                  e.jsx(ut, {
                                                    className: "w-4 h-4 mr-1",
                                                  }),
                                                  "Imprimir",
                                                ],
                                              }),
                                              e.jsxs(Kt, {
                                                children: [
                                                  e.jsx(es, {
                                                    asChild: !0,
                                                    children: e.jsxs(T, {
                                                      size: "sm",
                                                      variant: "outline",
                                                      className: "gap-1",
                                                      children: [
                                                        e.jsx(Pt, {
                                                          className: "w-4 h-4",
                                                        }),
                                                        "Cobrar",
                                                        e.jsx(ts, {
                                                          className: "w-3 h-3",
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  e.jsxs(ss, {
                                                    align: "end",
                                                    className: "w-56",
                                                    children: [
                                                      e.jsx(as, {
                                                        className:
                                                          "text-xs text-muted-foreground",
                                                        children:
                                                          "Enviar via WhatsApp",
                                                      }),
                                                      e.jsx(Et, {}),
                                                      e.jsxs(Ke, {
                                                        onClick: () =>
                                                          D("lembrete", o),
                                                        children: [
                                                          e.jsx(Ct, {
                                                            className:
                                                              "w-4 h-4 mr-2 text-blue-500",
                                                          }),
                                                          e.jsxs("div", {
                                                            children: [
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-sm font-medium",
                                                                children:
                                                                  "Lembrete de Vencimento",
                                                              }),
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-[10px] text-muted-foreground",
                                                                children:
                                                                  "Aviso amigável",
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      e.jsxs(Ke, {
                                                        onClick: () =>
                                                          D("boleto", o),
                                                        children: [
                                                          e.jsx(Pt, {
                                                            className:
                                                              "w-4 h-4 mr-2 text-indigo-500",
                                                          }),
                                                          e.jsxs("div", {
                                                            children: [
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-sm font-medium",
                                                                children:
                                                                  "Boleto Registrado",
                                                              }),
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-[10px] text-muted-foreground",
                                                                children:
                                                                  "Notificação formal de título",
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      e.jsxs(Ke, {
                                                        onClick: () =>
                                                          D("cobranca", o),
                                                        children: [
                                                          e.jsx(ft, {
                                                            className:
                                                              "w-4 h-4 mr-2 text-amber-500",
                                                          }),
                                                          e.jsxs("div", {
                                                            children: [
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-sm font-medium",
                                                                children:
                                                                  "Aviso de Cobrança",
                                                              }),
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-[10px] text-muted-foreground",
                                                                children:
                                                                  "Tom firme com consequências",
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      e.jsxs(Ke, {
                                                        onClick: () =>
                                                          D("negociacao", o),
                                                        children: [
                                                          e.jsx(Fs, {
                                                            className:
                                                              "w-4 h-4 mr-2 text-emerald-500",
                                                          }),
                                                          e.jsxs("div", {
                                                            children: [
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-sm font-medium",
                                                                children:
                                                                  "Proposta de Negociação",
                                                              }),
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-[10px] text-muted-foreground",
                                                                children:
                                                                  "Oferecer acordo",
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      e.jsx(Et, {}),
                                                      e.jsxs(Ke, {
                                                        onClick: () =>
                                                          D("ultimoAviso", o),
                                                        children: [
                                                          e.jsx(Ye, {
                                                            className:
                                                              "w-4 h-4 mr-2 text-red-500",
                                                          }),
                                                          e.jsxs("div", {
                                                            children: [
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-sm font-medium",
                                                                children:
                                                                  "Último Aviso (Serasa)",
                                                              }),
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-[10px] text-muted-foreground",
                                                                children:
                                                                  "Ameaça de negativação",
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              e.jsxs(T, {
                                                size: "sm",
                                                variant: "outline",
                                                onClick: () => ye(o),
                                                children: [
                                                  e.jsx(jt, {
                                                    className: "w-4 h-4 mr-1",
                                                  }),
                                                  "WhatsApp",
                                                ],
                                              }),
                                              o.status !== "paid" &&
                                                e.jsxs(T, {
                                                  size: "sm",
                                                  variant: "destructive",
                                                  onClick: () => Ue(o),
                                                  children: [
                                                    e.jsx(ns, {
                                                      className: "w-4 h-4 mr-1",
                                                    }),
                                                    "Cancelar",
                                                  ],
                                                }),
                                            ],
                                          }),
                                        ],
                                      },
                                      o.id
                                    )
                                  ),
                                }),
                                $.some((o) => o.paid_amount) &&
                                  e.jsxs("div", {
                                    className:
                                      "mt-6 p-4 border rounded-lg bg-primary/5",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center justify-between mb-3",
                                        children: [
                                          e.jsx("h4", {
                                            className: "font-semibold",
                                            children:
                                              "Extrato de Pagamentos Realizados",
                                          }),
                                          e.jsxs(T, {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: Y,
                                            children: [
                                              e.jsx(ut, {
                                                className: "w-4 h-4 mr-1",
                                              }),
                                              "Exportar PDF",
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          $.filter((o) => o.paid_amount).map(
                                            (o) =>
                                              e.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "flex justify-between items-center text-sm p-2 bg-background rounded",
                                                  children: [
                                                    e.jsxs("div", {
                                                      children: [
                                                        e.jsxs("span", {
                                                          className:
                                                            "font-medium",
                                                          children: [
                                                            "Parcela ",
                                                            o.installment_number,
                                                            "/",
                                                            o.installments,
                                                          ],
                                                        }),
                                                        e.jsxs("span", {
                                                          className:
                                                            "text-muted-foreground ml-2",
                                                          children: [
                                                            "(",
                                                            Be(
                                                              o.paid_at ||
                                                                o.due_date
                                                            ),
                                                            ")",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsxs("span", {
                                                      className:
                                                        "font-semibold text-primary",
                                                      children: [
                                                        "R$ ",
                                                        Number(
                                                          o.paid_amount
                                                        ).toLocaleString(
                                                          "pt-BR",
                                                          {
                                                            minimumFractionDigits: 2,
                                                          }
                                                        ),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                o.id
                                              )
                                          ),
                                          e.jsxs("div", {
                                            className:
                                              "flex justify-between items-center pt-2 border-t font-semibold",
                                            children: [
                                              e.jsx("span", {
                                                children: "Total Recebido:",
                                              }),
                                              e.jsxs("span", {
                                                className:
                                                  "text-lg text-primary",
                                                children: [
                                                  "R$ ",
                                                  $.filter((o) => o.paid_amount)
                                                    .reduce(
                                                      (o, u) =>
                                                        o +
                                                        Number(u.paid_amount),
                                                      0
                                                    )
                                                    .toLocaleString("pt-BR", {
                                                      minimumFractionDigits: 2,
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                        ],
                      }),
                }),
              ],
            }),
          }),
          e.jsx(rs, {
            open: J,
            onOpenChange: Z,
            children: e.jsxs(os, {
              children: [
                e.jsxs(is, {
                  children: [
                    e.jsx(ls, { children: "Confirmar exclusão" }),
                    e.jsx(cs, {
                      children:
                        "Tem certeza que deseja excluir esta promissória e todas as suas parcelas? Esta ação não pode ser desfeita.",
                    }),
                  ],
                }),
                e.jsxs(ds, {
                  children: [
                    e.jsx(ms, { children: "Cancelar" }),
                    e.jsx(us, { onClick: Fe, children: "Excluir" }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(Ms, {
            open: oe,
            onOpenChange: L,
            originalValue: j?.installment_value || j?.amount || 0,
            valueWithFees: j ? W(j) : 0,
            installmentInfo: j
              ? `${i?.note_number} - Parcela ${j.installment_number}/${j.installments}`
              : "",
            onConfirm: ie,
          }),
          e.jsx(qs, {
            open: q,
            onOpenChange: (o) => {
              V(o), o || he(null);
            },
            installmentValue:
              ee?.installment.installment_value || ee?.installment.amount || 0,
            paidAmount: ee?.amount || 0,
            remainingInstallmentsCount: De(),
            onConfirm: je,
          }),
          e.jsx(Qt, { open: Ce, onOpenChange: ue, onConfirm: Ie }),
        ],
      })
    : null;
}
function Ls({ open: a, onOpenChange: t }) {
  const { effectiveUserId: i, authUserId: s, loading: r } = Qe(),
    c = i || s || "",
    [b, x] = p.useState(!0),
    [h, d] = p.useState([]),
    [P, _] = p.useState([]),
    [M, U] = p.useState(!1),
    [$, z] = p.useState(!1),
    [N, S] = p.useState([]),
    [J, Z] = p.useState([]),
    [oe, L] = p.useState(""),
    [q, V] = p.useState(""),
    [j, ae] = p.useState("all"),
    [ee, he] = p.useState({
      totalOverdueAmount: 0,
      totalOverdueCount: 0,
      clientsWithOverdue: 0,
      averageDelayDays: 0,
    });
  p.useEffect(() => {
    a && !r && c && ue();
  }, [a, r, c]),
    p.useEffect(() => {
      let n = N;
      oe &&
        (n = n.filter((v) =>
          v.client_name.toLowerCase().includes(oe.toLowerCase())
        )),
        q && (n = n.filter((v) => v.client_cpf?.includes(q))),
        j !== "all" && (n = n.filter((v) => v.status === j)),
        Z(n);
    }, [oe, q, j, N]);
  const ge = async (n) => {
      try {
        const { data: v, error: R } = await y
          .from("promissory_notes")
          .select(
            `
          *,
          clients (
            id,
            name,
            cpf
          )
        `
          )
          .eq("user_id", n)
          .eq("status", "overdue")
          .not("parent_note_id", "is", null);
        if (R) throw R;
        const B = new Map();
        v?.forEach((I) => {
          const C = Math.floor(
            (new Date().getTime() - new Date(I.due_date).getTime()) / 864e5
          );
          if (C >= 10) {
            const w = I.client_id,
              l = B.get(w);
            l
              ? ((l.overdue_count += 1),
                (l.total_overdue += Number(I.installment_value || I.amount)),
                (l.max_days_overdue = Math.max(l.max_days_overdue, C)))
              : B.set(w, {
                  client_id: w,
                  client_name: I.clients?.name || "Cliente Desconhecido",
                  client_cpf: I.clients?.cpf || null,
                  max_days_overdue: C,
                  overdue_count: 1,
                  total_overdue: Number(I.installment_value || I.amount),
                });
          }
        });
        for (const [I, C] of B) {
          const { data: w } = await y
            .from("inadimplencia_blacklist")
            .select("*")
            .eq("user_id", n)
            .eq("client_id", I)
            .eq("status", "inadimplente")
            .maybeSingle();
          w
            ? await y
                .from("inadimplencia_blacklist")
                .update({
                  days_overdue: C.max_days_overdue,
                  overdue_installments_count: C.overdue_count,
                  total_overdue_amount: C.total_overdue,
                })
                .eq("id", w.id)
            : await y
                .from("inadimplencia_blacklist")
                .insert({
                  user_id: n,
                  client_id: I,
                  client_name: C.client_name,
                  client_cpf: C.client_cpf,
                  days_overdue: C.max_days_overdue,
                  overdue_installments_count: C.overdue_count,
                  total_overdue_amount: C.total_overdue,
                  status: "inadimplente",
                });
        }
        const { data: F } = await y
          .from("inadimplencia_blacklist")
          .select("*")
          .eq("user_id", n)
          .eq("status", "inadimplente");
        if (F)
          for (const I of F) {
            const { data: C } = await y
              .from("promissory_notes")
              .select("id")
              .eq("user_id", n)
              .eq("client_id", I.client_id)
              .eq("status", "overdue")
              .limit(1);
            (!C || C.length === 0) &&
              (await y
                .from("inadimplencia_blacklist")
                .update({
                  status: "regularizado",
                  regularized_at: new Date().toISOString(),
                })
                .eq("id", I.id));
          }
      } catch {}
    },
    be = async (n) => {
      try {
        const { data: v, error: R } = await y
          .from("inadimplencia_blacklist")
          .select("*")
          .eq("user_id", n)
          .order("blacklisted_at", { ascending: !1 });
        if (R) throw R;
        S(v || []), Z(v || []);
      } catch {
        k.error("Erro ao carregar blacklist");
      }
    },
    Ce = async (n) => {
      try {
        const { error: v } = await y
          .from("inadimplencia_blacklist")
          .delete()
          .eq("id", n);
        if (v) throw v;
        k.success("Cliente removido da blacklist"), c && (await be(c));
      } catch {
        k.error("Erro ao remover da blacklist");
      }
    },
    ue = async () => {
      x(!0);
      try {
        if (!c) return;
        await ge(c), await be(c);
        const { data: n, error: v } = await y
          .from("promissory_notes")
          .select(
            `
          *,
          clients (
            name
          )
        `
          )
          .eq("user_id", c)
          .eq("status", "overdue")
          .not("parent_note_id", "is", null);
        if (v) throw v;
        const R = new Map();
        let B = 0;
        n?.forEach((m) => {
          const E = m.client_id,
            W = m.clients?.name || "Cliente não encontrado",
            X = Number(m.installment_value || m.amount),
            ie = new Date(m.due_date),
            fe = Math.floor(
              (new Date().getTime() - ie.getTime()) / (1e3 * 60 * 60 * 24)
            );
          if (((B += fe), R.has(E))) {
            const je = R.get(E);
            (je.total_overdue += X),
              (je.overdue_count += 1),
              new Date(m.due_date) < new Date(je.oldest_overdue) &&
                (je.oldest_overdue = m.due_date);
          } else
            R.set(E, {
              client_id: E,
              client_name: W,
              total_overdue: X,
              overdue_count: 1,
              oldest_overdue: m.due_date,
            });
        });
        const F = Array.from(R.values()).sort(
          (m, E) => E.overdue_count - m.overdue_count
        );
        d(F);
        const I = F.reduce((m, E) => m + E.total_overdue, 0),
          C = n?.length || 0,
          w = C > 0 ? Math.round(B / C) : 0;
        he({
          totalOverdueAmount: I,
          totalOverdueCount: C,
          clientsWithOverdue: F.length,
          averageDelayDays: w,
        });
        const l = new Date();
        l.setMonth(l.getMonth() - 6);
        const { data: g } = await y
            .from("promissory_notes")
            .select("*")
            .eq("user_id", c)
            .not("parent_note_id", "is", null)
            .gte("due_date", l.toISOString()),
          A = new Map();
        g?.forEach((m) => {
          const E = new Date(m.due_date).toLocaleDateString("pt-BR", {
            month: "short",
            year: "numeric",
          });
          A.has(E) ||
            A.set(E, { month: E, total: 0, overdue: 0, paid: 0, pending: 0 });
          const W = A.get(E);
          (W.total += 1),
            m.status === "overdue" && (W.overdue += 1),
            m.status === "paid" && (W.paid += 1),
            m.status === "pending" && (W.pending += 1);
        });
        const ne = Array.from(A.values());
        _(ne);
      } catch {
        k.error("Erro ao carregar relatório");
      } finally {
        x(!1);
      }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(Pe, {
        open: a,
        onOpenChange: t,
        children: e.jsxs(Ee, {
          className: "max-w-6xl max-h-[90vh] overflow-y-auto",
          children: [
            e.jsx($e, {
              children: e.jsxs(Te, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(ft, { className: "w-5 h-5 text-red-500" }),
                  "Relatório de Inadimplência",
                ],
              }),
            }),
            b
              ? e.jsx("div", {
                  className: "py-12 text-center text-muted-foreground",
                  children: "Carregando dados...",
                })
              : e.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    e.jsxs("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                      children: [
                        e.jsxs(K, {
                          children: [
                            e.jsx(le, {
                              className: "pb-2",
                              children: e.jsxs(ce, {
                                className:
                                  "text-sm font-medium flex items-center gap-2",
                                children: [
                                  e.jsx(Lt, {
                                    className: "w-4 h-4 text-red-500",
                                  }),
                                  "Total Vencido",
                                ],
                              }),
                            }),
                            e.jsx(de, {
                              children: e.jsxs("div", {
                                className: "text-2xl font-bold text-red-600",
                                children: [
                                  "R$ ",
                                  ee.totalOverdueAmount.toLocaleString(
                                    "pt-BR",
                                    { minimumFractionDigits: 2 }
                                  ),
                                ],
                              }),
                            }),
                          ],
                        }),
                        e.jsxs(K, {
                          children: [
                            e.jsx(le, {
                              className: "pb-2",
                              children: e.jsxs(ce, {
                                className:
                                  "text-sm font-medium flex items-center gap-2",
                                children: [
                                  e.jsx(ft, {
                                    className: "w-4 h-4 text-orange-500",
                                  }),
                                  "Parcelas Vencidas",
                                ],
                              }),
                            }),
                            e.jsx(de, {
                              children: e.jsx("div", {
                                className: "text-2xl font-bold text-orange-600",
                                children: ee.totalOverdueCount,
                              }),
                            }),
                          ],
                        }),
                        e.jsxs(K, {
                          className:
                            "cursor-pointer transition-all hover:shadow-lg hover:scale-105",
                          onClick: () => U(!0),
                          children: [
                            e.jsx(le, {
                              className: "pb-2",
                              children: e.jsxs(ce, {
                                className:
                                  "text-sm font-medium flex items-center gap-2",
                                children: [
                                  e.jsx(ct, {
                                    className: "w-4 h-4 text-yellow-500",
                                  }),
                                  "Clientes Inadimplentes",
                                ],
                              }),
                            }),
                            e.jsxs(de, {
                              children: [
                                e.jsx("div", {
                                  className:
                                    "text-2xl font-bold text-yellow-600",
                                  children: ee.clientsWithOverdue,
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-1",
                                  children: "Clique para ver detalhes",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs(K, {
                          children: [
                            e.jsx(le, {
                              className: "pb-2",
                              children: e.jsxs(ce, {
                                className:
                                  "text-sm font-medium flex items-center gap-2",
                                children: [
                                  e.jsx(xs, {
                                    className: "w-4 h-4 text-purple-500",
                                  }),
                                  "Atraso Médio",
                                ],
                              }),
                            }),
                            e.jsx(de, {
                              children: e.jsxs("div", {
                                className: "text-2xl font-bold text-purple-600",
                                children: [ee.averageDelayDays, " dias"],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                      children: [
                        e.jsxs(K, {
                          children: [
                            e.jsx(le, {
                              children: e.jsx(ce, {
                                children: "Evolução de Inadimplência (6 meses)",
                              }),
                            }),
                            e.jsx(de, {
                              children: e.jsx(dt, {
                                width: "100%",
                                height: 300,
                                children: e.jsxs(Ts, {
                                  data: P,
                                  children: [
                                    e.jsx(vt, { strokeDasharray: "3 3" }),
                                    e.jsx(_t, { dataKey: "month" }),
                                    e.jsx(Nt, {}),
                                    e.jsx(mt, {}),
                                    e.jsx(yt, {}),
                                    e.jsx(ht, {
                                      type: "monotone",
                                      dataKey: "overdue",
                                      stroke: "#ef4444",
                                      name: "Vencidas",
                                      strokeWidth: 2,
                                    }),
                                    e.jsx(ht, {
                                      type: "monotone",
                                      dataKey: "pending",
                                      stroke: "#eab308",
                                      name: "Pendentes",
                                      strokeWidth: 2,
                                    }),
                                    e.jsx(ht, {
                                      type: "monotone",
                                      dataKey: "paid",
                                      stroke: "#22c55e",
                                      name: "Pagas",
                                      strokeWidth: 2,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        e.jsxs(K, {
                          children: [
                            e.jsx(le, {
                              children: e.jsx(ce, {
                                children: "Status das Parcelas por Mês",
                              }),
                            }),
                            e.jsx(de, {
                              children: e.jsx(dt, {
                                width: "100%",
                                height: 300,
                                children: e.jsxs(Ut, {
                                  data: P,
                                  children: [
                                    e.jsx(vt, { strokeDasharray: "3 3" }),
                                    e.jsx(_t, { dataKey: "month" }),
                                    e.jsx(Nt, {}),
                                    e.jsx(mt, {}),
                                    e.jsx(yt, {}),
                                    e.jsx(at, {
                                      dataKey: "overdue",
                                      fill: "#ef4444",
                                      name: "Vencidas",
                                    }),
                                    e.jsx(at, {
                                      dataKey: "pending",
                                      fill: "#eab308",
                                      name: "Pendentes",
                                    }),
                                    e.jsx(at, {
                                      dataKey: "paid",
                                      fill: "#22c55e",
                                      name: "Pagas",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs(K, {
                      children: [
                        e.jsx(le, {
                          children: e.jsx(ce, {
                            children: "Ranking de Inadimplência por Cliente",
                          }),
                        }),
                        e.jsx(de, {
                          children:
                            h.length === 0
                              ? e.jsx("p", {
                                  className:
                                    "text-center text-muted-foreground py-8",
                                  children:
                                    "Nenhum cliente inadimplente no momento",
                                })
                              : e.jsx("div", {
                                  className: "space-y-3",
                                  children: h.map((n, v) => {
                                    const R = Math.floor(
                                      (new Date().getTime() -
                                        new Date(n.oldest_overdue).getTime()) /
                                        864e5
                                    );
                                    return e.jsx(
                                      "div",
                                      {
                                        className:
                                          "p-4 border rounded-lg hover:bg-accent/50 transition-colors",
                                        children: e.jsx("div", {
                                          className:
                                            "flex items-start justify-between gap-4",
                                          children: e.jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2 mb-1",
                                                children: [
                                                  e.jsxs(We, {
                                                    variant: "outline",
                                                    className: "text-xs",
                                                    children: ["#", v + 1],
                                                  }),
                                                  e.jsx("h4", {
                                                    className: "font-semibold",
                                                    children: n.client_name,
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm mt-2",
                                                children: [
                                                  e.jsxs("div", {
                                                    children: [
                                                      e.jsx("span", {
                                                        className:
                                                          "text-muted-foreground",
                                                        children:
                                                          "Parcelas vencidas: ",
                                                      }),
                                                      e.jsx("span", {
                                                        className:
                                                          "font-medium text-red-600",
                                                        children:
                                                          n.overdue_count,
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsxs("div", {
                                                    children: [
                                                      e.jsx("span", {
                                                        className:
                                                          "text-muted-foreground",
                                                        children:
                                                          "Valor total: ",
                                                      }),
                                                      e.jsxs("span", {
                                                        className:
                                                          "font-medium text-red-600",
                                                        children: [
                                                          "R$ ",
                                                          n.total_overdue.toLocaleString(
                                                            "pt-BR",
                                                            {
                                                              minimumFractionDigits: 2,
                                                            }
                                                          ),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsxs("div", {
                                                    children: [
                                                      e.jsx("span", {
                                                        className:
                                                          "text-muted-foreground",
                                                        children:
                                                          "Atraso mais antigo: ",
                                                      }),
                                                      e.jsxs("span", {
                                                        className:
                                                          "font-medium text-red-600",
                                                        children: [R, " dias"],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      },
                                      n.client_id
                                    );
                                  }),
                                }),
                        }),
                      ],
                    }),
                    e.jsxs(K, {
                      children: [
                        e.jsx(le, {
                          children: e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsxs(ce, {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx(Ye, {
                                        className: "h-5 w-5 text-destructive",
                                      }),
                                      "Blacklist de Inadimplência",
                                    ],
                                  }),
                                  e.jsx(bt, {
                                    children:
                                      "Registro permanente de clientes com 10+ dias de atraso",
                                  }),
                                ],
                              }),
                              e.jsxs(T, {
                                variant: "outline",
                                size: "sm",
                                onClick: () => z(!0),
                                children: [
                                  e.jsx(Gt, { className: "h-4 w-4 mr-2" }),
                                  "Ver Blacklist Completa",
                                ],
                              }),
                            ],
                          }),
                        }),
                        e.jsx(de, {
                          children: e.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              e.jsxs("div", {
                                className: "grid gap-4 md:grid-cols-3",
                                children: [
                                  e.jsxs(K, {
                                    children: [
                                      e.jsx(le, {
                                        className: "pb-3",
                                        children: e.jsx(ce, {
                                          className: "text-sm font-medium",
                                          children: "Total na Blacklist",
                                        }),
                                      }),
                                      e.jsx(de, {
                                        children: e.jsx("div", {
                                          className: "text-2xl font-bold",
                                          children: N.length,
                                        }),
                                      }),
                                    ],
                                  }),
                                  e.jsxs(K, {
                                    children: [
                                      e.jsx(le, {
                                        className: "pb-3",
                                        children: e.jsx(ce, {
                                          className: "text-sm font-medium",
                                          children: "Ainda Inadimplentes",
                                        }),
                                      }),
                                      e.jsx(de, {
                                        children: e.jsx("div", {
                                          className:
                                            "text-2xl font-bold text-destructive",
                                          children: N.filter(
                                            (n) => n.status === "inadimplente"
                                          ).length,
                                        }),
                                      }),
                                    ],
                                  }),
                                  e.jsxs(K, {
                                    children: [
                                      e.jsx(le, {
                                        className: "pb-3",
                                        children: e.jsx(ce, {
                                          className: "text-sm font-medium",
                                          children: "Regularizados",
                                        }),
                                      }),
                                      e.jsx(de, {
                                        children: e.jsx("div", {
                                          className:
                                            "text-2xl font-bold text-green-600",
                                          children: N.filter(
                                            (n) => n.status === "regularizado"
                                          ).length,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "text-sm text-muted-foreground",
                                children: e.jsxs("p", {
                                  children: [
                                    e.jsx("strong", {
                                      children: "Importante:",
                                    }),
                                    " Clientes que atrasarem 10 dias ou mais são automaticamente registrados na blacklist, mesmo após regularização.",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        }),
      }),
      e.jsx(Pe, {
        open: M,
        onOpenChange: U,
        children: e.jsxs(Ee, {
          className: "max-w-4xl max-h-[80vh] overflow-y-auto",
          children: [
            e.jsx($e, {
              children: e.jsxs(Te, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(ct, { className: "w-5 h-5 text-yellow-500" }),
                  "Clientes Inadimplentes (",
                  h.length,
                  ")",
                ],
              }),
            }),
            e.jsx("div", {
              className: "space-y-3",
              children:
                h.length === 0
                  ? e.jsx("p", {
                      className: "text-center text-muted-foreground py-8",
                      children: "Nenhum cliente inadimplente no momento",
                    })
                  : h.map((n, v) => {
                      const R = Math.floor(
                        (new Date().getTime() -
                          new Date(n.oldest_overdue).getTime()) /
                          864e5
                      );
                      return e.jsx(
                        "div",
                        {
                          className:
                            "p-4 border rounded-lg hover:bg-accent/50 transition-colors",
                          children: e.jsx("div", {
                            className: "flex items-start justify-between gap-4",
                            children: e.jsxs("div", {
                              className: "flex-1",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2 mb-1",
                                  children: [
                                    e.jsxs(We, {
                                      variant: "outline",
                                      className: "text-xs",
                                      children: ["#", v + 1],
                                    }),
                                    e.jsx("h4", {
                                      className: "font-semibold",
                                      children: n.client_name,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm mt-2",
                                  children: [
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("span", {
                                          className: "text-muted-foreground",
                                          children: "Parcelas vencidas: ",
                                        }),
                                        e.jsx("span", {
                                          className: "font-medium text-red-600",
                                          children: n.overdue_count,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("span", {
                                          className: "text-muted-foreground",
                                          children: "Valor total: ",
                                        }),
                                        e.jsxs("span", {
                                          className: "font-medium text-red-600",
                                          children: [
                                            "R$ ",
                                            n.total_overdue.toLocaleString(
                                              "pt-BR",
                                              { minimumFractionDigits: 2 }
                                            ),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("span", {
                                          className: "text-muted-foreground",
                                          children: "Atraso mais antigo: ",
                                        }),
                                        e.jsxs("span", {
                                          className: "font-medium text-red-600",
                                          children: [R, " dias"],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        },
                        n.client_id
                      );
                    }),
            }),
          ],
        }),
      }),
      e.jsx(Pe, {
        open: $,
        onOpenChange: z,
        children: e.jsxs(Ee, {
          className: "max-w-6xl max-h-[80vh] overflow-y-auto",
          children: [
            e.jsxs($e, {
              children: [
                e.jsxs(Te, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(Ye, { className: "h-5 w-5 text-destructive" }),
                    "Blacklist de Inadimplência",
                  ],
                }),
                e.jsx(bt, {
                  children:
                    "Histórico permanente de clientes com atrasos significativos (10+ dias)",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "grid gap-4 md:grid-cols-4",
                  children: [
                    e.jsx(re, {
                      placeholder: "Filtrar por nome...",
                      value: oe,
                      onChange: (n) => L(n.target.value),
                    }),
                    e.jsx(re, {
                      placeholder: "Filtrar por CPF...",
                      value: q,
                      onChange: (n) => V(n.target.value),
                    }),
                    e.jsxs(Me, {
                      value: j,
                      onValueChange: ae,
                      children: [
                        e.jsx(qe, {
                          children: e.jsx(Ve, { placeholder: "Status" }),
                        }),
                        e.jsxs(Le, {
                          children: [
                            e.jsx(me, { value: "all", children: "Todos" }),
                            e.jsx(me, {
                              value: "inadimplente",
                              children: "Inadimplente",
                            }),
                            e.jsx(me, {
                              value: "regularizado",
                              children: "Regularizado",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx(T, {
                      variant: "outline",
                      onClick: () => {
                        L(""), V(""), ae("all");
                      },
                      children: "Limpar Filtros",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "border rounded-lg",
                  children: e.jsxs(Ps, {
                    children: [
                      e.jsx(Es, {
                        children: e.jsxs(pt, {
                          children: [
                            e.jsx(ze, { children: "Cliente" }),
                            e.jsx(ze, { children: "CPF" }),
                            e.jsx(ze, { children: "Status" }),
                            e.jsx(ze, {
                              className: "text-right",
                              children: "Dias em Atraso",
                            }),
                            e.jsx(ze, {
                              className: "text-right",
                              children: "Parcelas Atrasadas",
                            }),
                            e.jsx(ze, {
                              className: "text-right",
                              children: "Valor Total",
                            }),
                            e.jsx(ze, { children: "Data Blacklist" }),
                            e.jsx(ze, { children: "Data Regularização" }),
                            e.jsx(ze, {
                              className: "text-right",
                              children: "Ações",
                            }),
                          ],
                        }),
                      }),
                      e.jsx($s, {
                        children:
                          J.length === 0
                            ? e.jsx(pt, {
                                children: e.jsx(Ae, {
                                  colSpan: 9,
                                  className:
                                    "text-center text-muted-foreground",
                                  children: "Nenhum registro encontrado",
                                }),
                              })
                            : J.map((n) =>
                                e.jsxs(
                                  pt,
                                  {
                                    children: [
                                      e.jsx(Ae, {
                                        className: "font-medium",
                                        children: n.client_name,
                                      }),
                                      e.jsx(Ae, {
                                        children:
                                          n.client_cpf || "Não informado",
                                      }),
                                      e.jsx(Ae, {
                                        children: e.jsx(We, {
                                          variant:
                                            n.status === "inadimplente"
                                              ? "destructive"
                                              : "secondary",
                                          children:
                                            n.status === "inadimplente"
                                              ? "Inadimplente"
                                              : "Regularizado",
                                        }),
                                      }),
                                      e.jsxs(Ae, {
                                        className: "text-right",
                                        children: [n.days_overdue, " dias"],
                                      }),
                                      e.jsx(Ae, {
                                        className: "text-right",
                                        children: n.overdue_installments_count,
                                      }),
                                      e.jsx(Ae, {
                                        className: "text-right",
                                        children: new Intl.NumberFormat(
                                          "pt-BR",
                                          { style: "currency", currency: "BRL" }
                                        ).format(
                                          Number(n.total_overdue_amount)
                                        ),
                                      }),
                                      e.jsx(Ae, {
                                        children: new Date(
                                          n.blacklisted_at
                                        ).toLocaleDateString("pt-BR"),
                                      }),
                                      e.jsx(Ae, {
                                        children: n.regularized_at
                                          ? new Date(
                                              n.regularized_at
                                            ).toLocaleDateString("pt-BR")
                                          : "-",
                                      }),
                                      e.jsx(Ae, {
                                        className: "text-right",
                                        children: e.jsx(T, {
                                          variant: "destructive",
                                          size: "sm",
                                          onClick: () => Ce(n.id),
                                          children: e.jsx(Vt, {
                                            className: "h-4 w-4",
                                          }),
                                        }),
                                      }),
                                    ],
                                  },
                                  n.id
                                )
                              ),
                      }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  className: "text-sm text-muted-foreground",
                  children: e.jsxs("p", {
                    children: [
                      e.jsx("strong", { children: "Legenda:" }),
                      " Esta lista é permanente. Mesmo após regularização, o cliente permanece registrado com seu histórico completo de inadimplência.",
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Us({ open: a, onOpenChange: t }) {
  const { symbol: i } = He(),
    { effectiveUserId: s, authUserId: r, loading: c } = Qe(),
    b = s || r || "",
    [x, h] = p.useState(2),
    [d, P] = p.useState(0.033),
    [_, M] = p.useState(!1);
  p.useEffect(() => {
    a && !c && b && U();
  }, [a, c, b]);
  const U = async () => {
      if (!b) return;
      const { data: z } = await y
        .from("user_settings")
        .select("fine_rate, daily_interest_rate")
        .eq("user_id", b)
        .maybeSingle();
      z && (h(z.fine_rate || 2), P(z.daily_interest_rate || 0.033));
    },
    $ = async () => {
      M(!0);
      try {
        if (!b) return;
        const { data: z } = await y
            .from("user_settings")
            .select("id")
            .eq("user_id", b)
            .maybeSingle(),
          N = { user_id: b, fine_rate: x, daily_interest_rate: d },
          { error: S } = z
            ? await y.from("user_settings").update(N).eq("id", z.id)
            : await y.from("user_settings").insert([N]);
        if (S) throw S;
        k.success("Configurações de multas e juros salvas!"), t(!1);
      } catch {
        k.error("Erro ao salvar configurações");
      } finally {
        M(!1);
      }
    };
  return e.jsx(Pe, {
    open: a,
    onOpenChange: t,
    children: e.jsxs(Ee, {
      className: "sm:max-w-[500px]",
      children: [
        e.jsxs($e, {
          children: [
            e.jsxs(Te, {
              className: "flex items-center gap-2",
              children: [
                e.jsx(Bt, { className: "w-5 h-5" }),
                "Configurar Multas e Juros",
              ],
            }),
            e.jsx(bt, {
              children:
                "Configure as taxas aplicadas automaticamente em parcelas vencidas",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "space-y-4 py-4",
          children: [
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx(G, {
                  htmlFor: "fineRate",
                  children: "Taxa de Multa (%)",
                }),
                e.jsx(re, {
                  id: "fineRate",
                  type: "number",
                  step: "0.1",
                  min: "0",
                  value: x,
                  onChange: (z) => h(parseFloat(z.target.value) || 0),
                  placeholder: "2.0",
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children:
                    "Multa aplicada uma única vez quando a parcela vence (ex: 2% = R$ 2,00 em R$ 100,00)",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx(G, {
                  htmlFor: "dailyInterestRate",
                  children: "Taxa de Juros Diária (%)",
                }),
                e.jsx(re, {
                  id: "dailyInterestRate",
                  type: "number",
                  step: "0.001",
                  min: "0",
                  value: d,
                  onChange: (z) => P(parseFloat(z.target.value) || 0),
                  placeholder: "0.033",
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children:
                    "Juros aplicados por dia de atraso (ex: 0,033% ao dia = 1% ao mês)",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "p-4 rounded-lg bg-muted border border-border",
              children: [
                e.jsx("h4", {
                  className: "font-medium text-sm mb-2",
                  children: "Exemplo de Cálculo",
                }),
                e.jsxs("p", {
                  className: "text-xs text-muted-foreground mb-3",
                  children: ["Parcela de ", i, " 100,00 vencida há 10 dias:"],
                }),
                e.jsxs("div", {
                  className: "space-y-1 text-xs",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: "Valor Original:",
                        }),
                        e.jsxs("span", {
                          className: "font-medium",
                          children: [i, " 100,00"],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        e.jsxs("span", {
                          className: "text-muted-foreground",
                          children: ["Multa (", x, "%):"],
                        }),
                        e.jsxs("span", {
                          className: "font-medium",
                          children: [i, " ", ((100 * x) / 100).toFixed(2)],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        e.jsxs("span", {
                          className: "text-muted-foreground",
                          children: ["Juros (10 dias × ", d, "%):"],
                        }),
                        e.jsxs("span", {
                          className: "font-medium",
                          children: [
                            i,
                            " ",
                            (((100 * d) / 100) * 10).toFixed(2),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", { className: "h-px bg-border my-2" }),
                    e.jsxs("div", {
                      className: "flex justify-between text-base",
                      children: [
                        e.jsx("span", {
                          className: "font-semibold",
                          children: "Total:",
                        }),
                        e.jsxs("span", {
                          className: "font-bold text-primary",
                          children: [
                            i,
                            " ",
                            (
                              100 +
                              (100 * x) / 100 +
                              ((100 * d) / 100) * 10
                            ).toFixed(2),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "p-3 rounded-lg bg-blue-500/10 border border-blue-500/20",
              children: e.jsxs("p", {
                className: "text-xs text-muted-foreground",
                children: [
                  e.jsx("strong", { children: "Importante:" }),
                  " Estas configurações serão aplicadas automaticamente em todas as parcelas vencidas e aparecerão descritas nas promissórias geradas.",
                ],
              }),
            }),
          ],
        }),
        e.jsxs(nt, {
          children: [
            e.jsx(T, {
              variant: "outline",
              onClick: () => t(!1),
              children: "Cancelar",
            }),
            e.jsx(T, {
              onClick: $,
              disabled: _,
              children: _ ? "Salvando..." : "Salvar Configurações",
            }),
          ],
        }),
      ],
    }),
  });
}
const Bs = async (a) => {
  const t = new St({ orientation: "portrait", unit: "mm", format: "a4" }),
    i = t.internal.pageSize.getWidth(),
    s = t.internal.pageSize.getHeight(),
    r = 15;
  let c = r;
  const b = a.currency || "BRL",
    x = (N, S, J = 12) => {
      t.setFontSize(J);
      const Z = t.getTextWidth(N);
      t.text(N, (i - Z) / 2, S);
    },
    h = (N) => Mt(N, b);
  t.setFontSize(20),
    t.setFont("helvetica", "bold"),
    x("RELATÓRIO DE CONTROLE DE FIADO", c),
    (c += 10),
    t.setFontSize(12),
    t.setFont("helvetica", "normal"),
    x(a.period, c),
    (c += 15),
    t.setFontSize(10),
    t.setFont("helvetica", "bold"),
    t.text("DADOS DA EMPRESA", r, c),
    (c += 5),
    t.setFont("helvetica", "normal"),
    t.text(`${a.company.name}`, r, c),
    (c += 5),
    t.text(`CNPJ: ${a.company.cnpj || "Não informado"}`, r, c),
    (c += 5),
    t.text(`Endereço: ${a.company.address || "Não informado"}`, r, c),
    (c += 5),
    t.text(`Telefone: ${a.company.phone || "Não informado"}`, r, c),
    (c += 15),
    t.setDrawColor(200, 200, 200),
    t.line(r, c, i - r, c),
    (c += 10),
    t.setFontSize(14),
    t.setFont("helvetica", "bold"),
    t.text("RESUMO GERAL", r, c),
    (c += 10),
    t.setFontSize(10),
    t.setFont("helvetica", "normal");
  const d = r,
    P = i / 2,
    _ = 7;
  t.setFont("helvetica", "bold"),
    t.text("Total de Promissórias:", d, c),
    t.setFont("helvetica", "normal"),
    t.text(`${a.stats.totalNotes}`, d + 50, c),
    t.setFont("helvetica", "bold"),
    t.text("Valor Total:", P, c),
    t.setFont("helvetica", "normal"),
    t.text(h(a.stats.totalAmount), P + 50, c),
    (c += _),
    t.setFont("helvetica", "bold"),
    t.text("Promissórias Pagas:", d, c),
    t.setFont("helvetica", "normal"),
    t.text(`${a.stats.paidNotes}`, d + 50, c),
    t.setFont("helvetica", "bold"),
    t.text("Total Recebido:", P, c),
    t.setFont("helvetica", "normal"),
    t.setTextColor(0, 128, 0),
    t.text(h(a.stats.totalPaid), P + 50, c),
    t.setTextColor(0, 0, 0),
    (c += _),
    t.setFont("helvetica", "bold"),
    t.text("Promissórias Vencidas:", d, c),
    t.setFont("helvetica", "normal"),
    t.text(`${a.stats.overdueNotes}`, d + 50, c),
    t.setFont("helvetica", "bold"),
    t.text("Total Vencido:", P, c),
    t.setFont("helvetica", "normal"),
    t.setTextColor(255, 0, 0),
    t.text(h(a.stats.totalOverdue), P + 50, c),
    t.setTextColor(0, 0, 0),
    (c += _),
    t.setFont("helvetica", "bold"),
    t.text("Total Pendente:", P, c),
    t.setFont("helvetica", "normal"),
    t.setTextColor(255, 165, 0),
    t.text(h(a.stats.totalPending), P + 50, c),
    t.setTextColor(0, 0, 0),
    (c += _ * 1.5),
    t.line(r, c, i - r, c),
    (c += 10),
    t.setFontSize(12),
    t.setFont("helvetica", "bold"),
    t.text("LUCRO LÍQUIDO:", r, c),
    t.setFontSize(14),
    t.setTextColor(0, 128, 0),
    t.text(h(a.stats.profit), r + 40, c),
    t.setTextColor(0, 0, 0),
    (c += 15),
    t.line(r, c, i - r, c),
    (c += 10),
    t.setFontSize(14),
    t.setFont("helvetica", "bold"),
    t.text("INDICADORES DE DESEMPENHO", r, c),
    (c += 10),
    t.setFontSize(10),
    t.setFont("helvetica", "normal");
  const M =
      a.stats.totalNotes > 0
        ? ((a.stats.paidNotes / a.stats.totalNotes) * 100).toFixed(1)
        : "0",
    U =
      a.stats.totalNotes > 0
        ? ((a.stats.overdueNotes / a.stats.totalNotes) * 100).toFixed(1)
        : "0",
    $ =
      a.stats.totalAmount > 0
        ? ((a.stats.totalPaid / a.stats.totalAmount) * 100).toFixed(1)
        : "0";
  t.text(`Taxa de Recebimento: ${$}%`, r, c),
    (c += _),
    t.text(`Percentual de Promissórias Pagas: ${M}%`, r, c),
    (c += _),
    t.text(`Percentual de Promissórias Vencidas: ${U}%`, r, c),
    (c += _),
    t.text(
      `Ticket Médio: ${h(
        a.stats.totalNotes > 0 ? a.stats.totalAmount / a.stats.totalNotes : 0
      )}`,
      r,
      c
    ),
    (c += 15),
    t.setFontSize(8),
    t.setTextColor(128, 128, 128),
    t.text(
      `Relatório gerado em ${new Date().toLocaleString("pt-BR")}`,
      r,
      s - 10
    );
  const z = `relatorio_fiado_${a.period.replace(/\s/g, "_")}.pdf`;
  t.save(z);
};
function Ws({ open: a, onOpenChange: t }) {
  const { effectiveUserId: i, authUserId: s, loading: r } = Qe(),
    c = i || s || "",
    [b, x] = p.useState(!1),
    [h, d] = p.useState("month"),
    [P, _] = p.useState(Je(new Date(), "yyyy-MM")),
    [M, U] = p.useState(Je(new Date(), "yyyy-MM-dd")),
    [$, z] = p.useState(!1),
    [N, S] = p.useState(null),
    J = async () => {
      x(!0);
      try {
        if (r || !c) {
          k.error("Usuário não autenticado");
          return;
        }
        let L;
        if (h === "month") {
          const l = new Date(P + "-01T12:00:00");
          L = Je(l, "MMMM 'de' yyyy", { locale: xt });
        } else {
          const l = new Date(M + "T12:00:00");
          L = Je(l, "dd 'de' MMMM 'de' yyyy", { locale: xt });
        }
        const { data: q } = await y
            .from("user_settings")
            .select("*")
            .eq("user_id", c)
            .single(),
          { data: V, error: j } = await y
            .from("promissory_notes")
            .select("*")
            .eq("user_id", c)
            .not("parent_note_id", "is", null);
        if (j) throw j;
        const { data: ae, error: ee } = await y
          .from("promissory_notes")
          .select("*")
          .eq("user_id", c)
          .is("parent_note_id", null);
        if (ee) throw ee;
        const he =
            V?.filter((l) => l.status === "pending").reduce(
              (l, g) => l + Number(g.installment_value || g.amount),
              0
            ) || 0,
          ge =
            V?.filter((l) => l.status === "paid").reduce(
              (l, g) =>
                l + Number(g.paid_amount || g.installment_value || g.amount),
              0
            ) || 0,
          be =
            V?.filter((l) => l.status === "overdue").reduce(
              (l, g) => l + Number(g.installment_value || g.amount),
              0
            ) || 0,
          { data: Ce } = await y
            .from("transactions")
            .select("amount")
            .eq("user_id", c)
            .eq("type", "income")
            .eq("category", "Fiado - Entrada"),
          ue = Ce?.reduce((l, g) => l + Number(g.amount), 0) || 0,
          n = ge + ue,
          v = he + n + be,
          { data: R } = await y
            .from("transactions")
            .select("amount")
            .eq("user_id", c)
            .eq("type", "expense")
            .like("description", "%Custo de produto%"),
          B = R?.reduce((l, g) => l + Number(g.amount), 0) || 0,
          F = n - B,
          I = ae?.length || 0,
          C =
            ae?.filter((l) => {
              const g = V?.filter((A) => A.parent_note_id === l.id) || [];
              return g.length > 0 && g.every((A) => A.status === "paid");
            }).length || 0,
          w =
            ae?.filter((l) =>
              (V?.filter((A) => A.parent_note_id === l.id) || []).some(
                (A) => A.status === "overdue"
              )
            ).length || 0;
        S({
          period: L,
          stats: {
            totalPending: he,
            totalPaid: n,
            totalOverdue: be,
            totalAmount: v,
            profit: F,
            totalNotes: I,
            paidNotes: C,
            overdueNotes: w,
          },
          company: {
            name: q?.company_name || "Empresa",
            cnpj: q?.company_cnpj || "",
            address: q?.company_address || "",
            phone: q?.company_phone || "",
            logo: q?.company_logo || "",
          },
        }),
          z(!0);
      } catch {
        k.error("Erro ao gerar relatório");
      } finally {
        x(!1);
      }
    },
    Z = async (L) => {
      if (N)
        try {
          await Bs({ ...N, currency: L }),
            k.success("Relatório gerado com sucesso!"),
            t(!1),
            S(null);
        } catch {
          k.error("Erro ao gerar PDF");
        }
    },
    oe = () => {
      const L = [];
      for (let q = 0; q < 12; q++) {
        const V = new Date();
        V.setMonth(V.getMonth() - q),
          L.push({
            value: Je(V, "yyyy-MM"),
            label: Je(V, "MMMM 'de' yyyy", { locale: xt }),
          });
      }
      return L;
    };
  return e.jsxs(Pe, {
    open: a,
    onOpenChange: t,
    children: [
      e.jsxs(Ee, {
        className: "sm:max-w-[425px]",
        children: [
          e.jsx($e, {
            children: e.jsxs(Te, {
              className: "flex items-center gap-2",
              children: [
                e.jsx(Wt, { className: "h-5 w-5" }),
                "Exportar Relatório em PDF",
              ],
            }),
          }),
          e.jsxs("div", {
            className: "space-y-4 py-4",
            children: [
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(G, { children: "Período do Relatório" }),
                  e.jsxs(Me, {
                    value: h,
                    onValueChange: (L) => d(L),
                    children: [
                      e.jsx(qe, { children: e.jsx(Ve, {}) }),
                      e.jsxs(Le, {
                        children: [
                          e.jsx(me, { value: "month", children: "Por Mês" }),
                          e.jsx(me, { value: "day", children: "Por Dia" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              h === "month" &&
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(G, { children: "Selecionar Mês" }),
                    e.jsxs(Me, {
                      value: P,
                      onValueChange: _,
                      children: [
                        e.jsx(qe, { children: e.jsx(Ve, {}) }),
                        e.jsx(Le, {
                          children: oe().map((L) =>
                            e.jsx(
                              me,
                              { value: L.value, children: L.label },
                              L.value
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              h === "day" &&
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(G, { children: "Selecionar Dia" }),
                    e.jsx("input", {
                      type: "date",
                      value: M,
                      onChange: (L) => U(L.target.value),
                      className:
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    }),
                  ],
                }),
            ],
          }),
          e.jsxs("div", {
            className: "flex justify-end gap-2",
            children: [
              e.jsx(T, {
                variant: "outline",
                onClick: () => t(!1),
                disabled: b,
                children: "Cancelar",
              }),
              e.jsxs(T, {
                onClick: J,
                disabled: b,
                children: [
                  b && e.jsx(zt, { className: "mr-2 h-4 w-4 animate-spin" }),
                  "Gerar PDF",
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx(Qt, { open: $, onOpenChange: z, onConfirm: Z }),
    ],
  });
}
const rt = {
    critical: {
      label: "Críticos (+30 dias)",
      emoji: "🔴",
      color: "bg-red-500/10 text-red-500 border-red-500/20",
      description: "Atraso superior a 30 dias — ação urgente",
    },
    overdue: {
      label: "Atrasados",
      emoji: "🟠",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      description: "Parcelas vencidas — cobrar imediatamente",
    },
    upcoming: {
      label: "A Vencer",
      emoji: "🟡",
      color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      description: "Vencem nos próximos 7 dias — lembrete preventivo",
    },
    on_time: {
      label: "Em Dia",
      emoji: "💚",
      color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      description: "Pagamentos em dia — manter relacionamento",
    },
    paid: {
      label: "Quitados",
      emoji: "✅",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      description: "Débito totalmente quitado",
    },
  },
  et = {
    critical: [
      {
        label: "Cobrança urgente",
        icon: "🚨",
        template: (a, t, i) => `Olá ${a}, tudo bem?

Identificamos que seu pagamento está *${i} dias em atraso*, no valor de *R$ ${t.toFixed(
          2
        )}*.

Entendemos que imprevistos acontecem, mas precisamos regularizar essa situação o quanto antes para evitar medidas adicionais.

💡 Podemos negociar uma forma de pagamento que caiba no seu bolso. Que tal conversarmos?

Aguardo seu retorno! 🤝`,
      },
      {
        label: "Última tentativa",
        icon: "⚠️",
        template: (a, t, i) => `${a}, essa é uma *comunicação importante*.

Seu débito de *R$ ${t.toFixed(2)}* está com *${i} dias de atraso*.

Precisamos resolver isso urgentemente. Caso contrário, infelizmente teremos que tomar medidas adicionais.

📞 Entre em contato HOJE para negociarmos.

Contamos com você! 🙏`,
      },
      {
        label: "Proposta de acordo",
        icon: "🤝",
        template: (a, t) => `Olá ${a}!

Queremos ajudar você a quitar seu débito de *R$ ${t.toFixed(2)}*.

🎯 *Proposta especial:*
Estamos dispostos a negociar condições facilitadas para você regularizar sua situação.

✅ Parcelamento flexível
✅ Possibilidade de desconto
✅ Sem burocracia

Vamos conversar? Estou à disposição! 😊`,
      },
    ],
    overdue: [
      {
        label: "Lembrete de atraso",
        icon: "📋",
        template: (a, t, i) => `Olá ${a}! 👋

Passando para lembrar que há uma parcela no valor de *R$ ${t.toFixed(
          2
        )}* em atraso há *${i} dia(s)*.

Sei que pode ter esquecido, acontece! 😊

Consegue efetuar o pagamento hoje?

Qualquer dúvida, estou aqui! 🤝`,
      },
      {
        label: "Cobrança amigável",
        icon: "💬",
        template: (a, t) => `${a}, tudo bem?

Notei que o pagamento de *R$ ${t.toFixed(2)}* ainda está pendente.

Sei que imprevistos acontecem, mas gostaria de resolver isso da melhor forma possível.

💳 Aceito Pix, dinheiro ou transferência.

Quando consegue fazer o pagamento? 😊`,
      },
      {
        label: "Aviso de multa/juros",
        icon: "📊",
        template: (a, t, i) => `Olá ${a},

Informamos que sua parcela de *R$ ${t.toFixed(2)}* venceu há *${i} dia(s)*.

⚠️ *Atenção:* Conforme combinado, valores em atraso podem sofrer acréscimo de multa e juros.

Evite cobranças extras! Regularize seu pagamento o quanto antes.

Precisa de ajuda? Estou à disposição! 🤝`,
      },
    ],
    upcoming: [
      {
        label: "Lembrete de vencimento",
        icon: "🔔",
        template: (a, t, i, s) => `Olá ${a}! 📅

Lembrando que sua próxima parcela de *R$ ${t.toFixed(2)}* vence em *${s}*.

Assim você se programa e evita atrasos! 😊

Qualquer dúvida sobre formas de pagamento, é só chamar! 💳`,
      },
      {
        label: "Lembrete preventivo",
        icon: "⏰",
        template: (a, t, i) => `${a}, passando para lembrar! ⏰

Sua parcela de *R$ ${t.toFixed(2)}* vence em *${i} dia(s)*.

✅ Pix
✅ Dinheiro
✅ Transferência

Aguardo seu pagamento. Obrigado pela pontualidade! 🙏`,
      },
    ],
    on_time: [
      {
        label: "Agradecimento",
        icon: "🎉",
        template: (a) => `Olá ${a}! 🎉

Obrigado por manter seus pagamentos em dia! Clientes como você fazem toda a diferença.

Continue assim! Se precisar de algo, estamos à disposição.

Um abraço! 💚`,
      },
      {
        label: "Próximo vencimento",
        icon: "📅",
        template: (a, t, i, s) => `Olá ${a}! 📅

Sua próxima parcela de *R$ ${t.toFixed(2)}* está programada para *${s}*.

Obrigado por manter tudo em dia! 💚`,
      },
    ],
    paid: [
      {
        label: "Confirmação de quitação",
        icon: "✅",
        template: (a) => `Parabéns ${a}! 🎉🎉

Seu débito foi *totalmente quitado*! ✅

Muito obrigado pela confiança e pela pontualidade nos pagamentos.

Sempre que precisar, estaremos aqui! 💚🤝`,
      },
    ],
  };
function Hs() {
  const { format: a } = He(),
    {
      effectiveUserId: t,
      authUserId: i,
      isEmployee: s,
      permissions: r,
      loading: c,
    } = Qe(),
    b = t || i || "",
    x = !s || r?.ver_faturamento === !0,
    h = (n) => (x ? a(n) : "•••"),
    [d, P] = p.useState([]),
    [_, M] = p.useState(!0),
    [U, $] = p.useState(""),
    [z, N] = p.useState("overdue"),
    [S, J] = p.useState(null),
    [Z, oe] = p.useState(""),
    [L, q] = p.useState("");
  p.useEffect(() => {
    c || !b || V();
  }, [c, b]);
  const V = async () => {
      M(!0);
      try {
        if (!b) return;
        const { data: n, error: v } = await y
          .from("promissory_notes")
          .select("*, clients(name, phone)")
          .eq("user_id", b)
          .not("parent_note_id", "is", null)
          .order("due_date", { ascending: !0 });
        if (v) throw v;
        const { data: R } = await y
            .from("promissory_notes")
            .select("id, description, note_number")
            .eq("user_id", b)
            .is("parent_note_id", null),
          B = new Map();
        R?.forEach((w) =>
          B.set(w.id, {
            description: w.description,
            note_number: w.note_number,
          })
        );
        const F = new Date(),
          I = F.toISOString().split("T")[0],
          C = new Map();
        (n || []).forEach((w) => {
          const l = w.client_id,
            g = w.clients?.name || "Desconhecido",
            A = w.clients?.phone || null,
            ne = B.get(w.parent_note_id),
            m = Number(w.installment_value || w.amount),
            E =
              w.status === "overdue" ||
              (w.status === "pending" && w.due_date < I),
            W = w.status === "pending" && w.due_date >= I,
            X = w.status === "paid",
            ie = new Date(w.due_date + "T00:00:00"),
            fe = E
              ? Math.ceil((F.getTime() - ie.getTime()) / (1e3 * 60 * 60 * 24))
              : 0,
            je = W
              ? Math.ceil((ie.getTime() - F.getTime()) / (1e3 * 60 * 60 * 24))
              : 1 / 0;
          C.has(l) ||
            C.set(l, {
              client_id: l,
              client_name: g,
              client_phone: A,
              total_debt: 0,
              total_overdue: 0,
              total_pending: 0,
              total_paid: 0,
              overdue_count: 0,
              pending_count: 0,
              oldest_overdue_date: null,
              days_overdue: 0,
              segment: "paid",
              installments: [],
            });
          const H = C.get(l);
          (H.total_debt += m),
            E
              ? ((H.total_overdue += m),
                H.overdue_count++,
                fe > H.days_overdue && (H.days_overdue = fe),
                (!H.oldest_overdue_date ||
                  w.due_date < H.oldest_overdue_date) &&
                  (H.oldest_overdue_date = w.due_date))
              : W
              ? ((H.total_pending += m), H.pending_count++)
              : X && (H.total_paid += m),
            H.installments.push({
              id: w.id,
              due_date: w.due_date,
              amount: m,
              status: E ? "overdue" : w.status,
              note_number: ne?.note_number || "",
              description: ne?.description || "",
            });
        }),
          C.forEach((w) => {
            if (w.days_overdue > 30) w.segment = "critical";
            else if (w.overdue_count > 0) w.segment = "overdue";
            else if (w.pending_count > 0) {
              const l = w.installments
                .filter((g) => g.status === "pending")
                .sort((g, A) => g.due_date.localeCompare(A.due_date))[0];
              if (l) {
                const g = Math.ceil(
                  (new Date(l.due_date + "T00:00:00").getTime() - F.getTime()) /
                    864e5
                );
                w.segment = g <= 7 ? "upcoming" : "on_time";
              } else w.segment = "on_time";
            } else w.segment = "paid";
          }),
          P(Array.from(C.values()));
      } catch (n) {
        k.error("Erro ao carregar dados CRM: " + n.message);
      } finally {
        M(!1);
      }
    },
    j = p.useMemo(() => {
      const n = {};
      return (
        Object.keys(rt).forEach((v) => (n[v] = 0)),
        d.forEach((v) => n[v.segment]++),
        n
      );
    }, [d]),
    ae = p.useMemo(() => {
      const n = {};
      return (
        Object.keys(rt).forEach((v) => (n[v] = 0)),
        d.forEach((v) => {
          v.client_phone && n[v.segment]++;
        }),
        n
      );
    }, [d]),
    ee = p.useMemo(() => d.reduce((n, v) => n + v.total_overdue, 0), [d]),
    he = p.useMemo(
      () =>
        d
          .filter((n) => n.segment === z)
          .filter(
            (n) =>
              n.client_name.toLowerCase().includes(U.toLowerCase()) ||
              (n.client_phone || "").includes(U)
          )
          .sort(
            (n, v) =>
              v.days_overdue - n.days_overdue ||
              v.total_overdue - n.total_overdue
          ),
      [d, z, U]
    ),
    ge = (n, v) => {
      const R = n.replace(/\D/g, ""),
        B = R.length <= 11 ? `55${R}` : R;
      window.open(`https://wa.me/${B}?text=${encodeURIComponent(v)}`, "_blank");
    },
    be = (n) => {
      if (!n.client_phone) {
        k.error(`${n.client_name} não tem telefone cadastrado.`);
        return;
      }
      const v = et[n.segment] || [];
      if (v.length === 0) return;
      const R =
          n.segment === "paid"
            ? n.total_debt
            : n.total_overdue || n.total_pending,
        B = n.installments.find((C) => C.status === "pending"),
        F = B
          ? new Date(B.due_date + "T00:00:00").toLocaleDateString("pt-BR")
          : void 0,
        I = v[0].template(n.client_name, R, n.days_overdue, F);
      ge(n.client_phone, I);
    },
    Ce = (n) => {
      J(n);
      const v = et[n.segment] || [],
        R =
          n.segment === "paid"
            ? n.total_debt
            : n.total_overdue || n.total_pending,
        B = n.installments.find((I) => I.status === "pending"),
        F = B
          ? new Date(B.due_date + "T00:00:00").toLocaleDateString("pt-BR")
          : void 0;
      v.length > 0
        ? (oe(v[0].template(n.client_name, R, n.days_overdue, F)), q("0"))
        : (oe(""), q(""));
    },
    ue = rt[z];
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsx("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2",
        children: Object.entries(rt).map(([n, v]) =>
          e.jsx(
            K,
            {
              className: `p-2 sm:p-3 cursor-pointer transition-all hover:scale-105 ${
                z === n ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
              }`,
              onClick: () => N(n),
              children: e.jsxs("div", {
                className: "text-center",
                children: [
                  e.jsx("span", { className: "text-lg", children: v.emoji }),
                  e.jsx("p", {
                    className: "text-xl font-bold",
                    children: j[n],
                  }),
                  e.jsx("p", {
                    className:
                      "text-[10px] text-muted-foreground font-medium truncate",
                    children: v.label,
                  }),
                  e.jsxs("p", {
                    className: "text-[10px] text-green-600",
                    children: ["📱 ", ae[n]],
                  }),
                ],
              }),
            },
            n
          )
        ),
      }),
      e.jsxs("div", {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-2",
        children: [
          e.jsx(K, {
            className: "p-3",
            children: e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx(tt, { className: "w-4 h-4 text-red-500" }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-[10px] text-muted-foreground",
                      children: "Total em Atraso",
                    }),
                    e.jsx("p", {
                      className: "text-sm font-bold text-red-600",
                      children: h(ee),
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(K, {
            className: "p-3",
            children: e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx(ct, { className: "w-4 h-4 text-orange-500" }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-[10px] text-muted-foreground",
                      children: "Clientes Inadimplentes",
                    }),
                    e.jsx("p", {
                      className: "text-sm font-bold",
                      children: j.critical + j.overdue,
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(K, {
            className: "p-3",
            children: e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx(Rs, { className: "w-4 h-4 text-amber-500" }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-[10px] text-muted-foreground",
                      children: "A Vencer (7 dias)",
                    }),
                    e.jsx("p", {
                      className: "text-sm font-bold",
                      children: j.upcoming,
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(K, {
            className: "p-3",
            children: e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx(Lt, { className: "w-4 h-4 text-emerald-500" }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-[10px] text-muted-foreground",
                      children: "Taxa de Recuperação",
                    }),
                    e.jsx("p", {
                      className: "text-sm font-bold text-emerald-600",
                      children:
                        d.length > 0
                          ? `${Math.round((j.paid / d.length) * 100)}%`
                          : "0%",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      e.jsx(K, {
        className:
          "p-3 bg-gradient-to-r from-primary/5 to-transparent border-primary/20",
        children: e.jsxs("div", {
          className: "flex items-center justify-between flex-wrap gap-2",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("span", { className: "text-2xl", children: ue.emoji }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h3", {
                      className: "font-bold text-sm sm:text-base",
                      children: ue.label,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: ue.description,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(T, {
              variant: "outline",
              size: "sm",
              onClick: V,
              className: "gap-1",
              children: [e.jsx(ps, { className: "w-3 h-3" }), " Atualizar"],
            }),
          ],
        }),
      }),
      e.jsxs("div", {
        className: "relative",
        children: [
          e.jsx(Ht, {
            className:
              "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
          }),
          e.jsx(re, {
            placeholder: "Buscar cliente por nome ou telefone...",
            value: U,
            onChange: (n) => $(n.target.value),
            className: "pl-10 text-sm",
          }),
        ],
      }),
      _
        ? e.jsx("div", {
            className: "text-center py-8 text-muted-foreground text-sm",
            children: "Carregando dados...",
          })
        : he.length === 0
        ? e.jsxs("div", {
            className: "text-center py-8 text-muted-foreground",
            children: [
              e.jsx(ct, { className: "w-10 h-10 mx-auto mb-2 opacity-30" }),
              e.jsx("p", {
                className: "text-sm",
                children: "Nenhum cliente neste segmento.",
              }),
            ],
          })
        : e.jsx("div", {
            className: "space-y-2",
            children: he.map((n) => {
              const v = et[n.segment] || [],
                R = n.installments.filter((F) => F.status === "overdue"),
                B = n.installments
                  .filter((F) => F.status === "pending")
                  .slice(0, 3);
              return e.jsx(
                K,
                {
                  className: "p-3 sm:p-4 hover:shadow-md transition-shadow",
                  children: e.jsx("div", {
                    className: "space-y-3",
                    children: e.jsxs("div", {
                      className:
                        "flex items-start justify-between gap-3 flex-wrap",
                      children: [
                        e.jsxs("div", {
                          className: "flex-1 min-w-[180px]",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2 mb-1",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "font-semibold text-sm sm:text-base",
                                  children: n.client_name,
                                }),
                                e.jsx(We, {
                                  variant: "outline",
                                  className: `text-[10px] ${ue.color}`,
                                  children: ue.label,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex flex-wrap items-center gap-2 text-xs",
                              children: [
                                n.client_phone &&
                                  e.jsxs("span", {
                                    className:
                                      "text-green-600 flex items-center gap-1",
                                    children: [
                                      e.jsx(hs, { className: "w-3 h-3" }),
                                      " ",
                                      n.client_phone,
                                    ],
                                  }),
                                n.total_overdue > 0 &&
                                  e.jsxs("span", {
                                    className: "text-red-600 font-semibold",
                                    children: [
                                      "⚠️ ",
                                      h(n.total_overdue),
                                      " em atraso",
                                    ],
                                  }),
                                n.days_overdue > 0 &&
                                  e.jsxs("span", {
                                    className: "text-red-500",
                                    children: ["(", n.days_overdue, " dias)"],
                                  }),
                                n.total_pending > 0 &&
                                  e.jsxs("span", {
                                    className: "text-amber-600",
                                    children: [
                                      "📅 ",
                                      h(n.total_pending),
                                      " a vencer",
                                    ],
                                  }),
                              ],
                            }),
                            R.length > 0 &&
                              e.jsx("div", {
                                className: "mt-2 space-y-1",
                                children: R.slice(0, 3).map((F) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "text-[11px] text-red-600 flex items-center gap-1",
                                      children: [
                                        e.jsx(Ye, { className: "w-3 h-3" }),
                                        "Parcela ",
                                        h(F.amount),
                                        " — venceu ",
                                        new Date(
                                          F.due_date + "T00:00:00"
                                        ).toLocaleDateString("pt-BR"),
                                      ],
                                    },
                                    F.id
                                  )
                                ),
                              }),
                            B.length > 0 &&
                              R.length === 0 &&
                              e.jsx("div", {
                                className: "mt-2 space-y-1",
                                children: B.map((F) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "text-[11px] text-amber-600 flex items-center gap-1",
                                      children: [
                                        e.jsx(it, { className: "w-3 h-3" }),
                                        "Parcela ",
                                        h(F.amount),
                                        " — vence ",
                                        new Date(
                                          F.due_date + "T00:00:00"
                                        ).toLocaleDateString("pt-BR"),
                                      ],
                                    },
                                    F.id
                                  )
                                ),
                              }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "flex flex-wrap items-center gap-1.5",
                          children: n.client_phone
                            ? e.jsxs(e.Fragment, {
                                children: [
                                  e.jsxs(T, {
                                    size: "sm",
                                    variant: "default",
                                    className:
                                      "gap-1 text-xs h-8 bg-green-600 hover:bg-green-700",
                                    onClick: () => be(n),
                                    children: [
                                      e.jsx(Ct, { className: "w-3 h-3" }),
                                      "Lembrete",
                                    ],
                                  }),
                                  v.slice(0, 2).map((F, I) =>
                                    e.jsxs(
                                      T,
                                      {
                                        variant: "outline",
                                        size: "sm",
                                        className:
                                          "gap-1 text-[11px] h-8 hover:bg-green-500/10 hover:text-green-600 hover:border-green-500/30",
                                        onClick: () => {
                                          const C =
                                              n.total_overdue ||
                                              n.total_pending,
                                            w = n.installments.find(
                                              (A) => A.status === "pending"
                                            ),
                                            l = w
                                              ? new Date(
                                                  w.due_date + "T00:00:00"
                                                ).toLocaleDateString("pt-BR")
                                              : void 0,
                                            g = F.template(
                                              n.client_name,
                                              C,
                                              n.days_overdue,
                                              l
                                            );
                                          ge(n.client_phone, g);
                                        },
                                        children: [
                                          e.jsx($t, { className: "w-3 h-3" }),
                                          F.label,
                                        ],
                                      },
                                      I
                                    )
                                  ),
                                  e.jsxs(T, {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "gap-1 text-[11px] h-8",
                                    onClick: () => Ce(n),
                                    children: [
                                      e.jsx(jt, { className: "w-3 h-3" }),
                                      " Personalizar",
                                    ],
                                  }),
                                ],
                              })
                            : e.jsx(We, {
                                variant: "outline",
                                className: "text-xs bg-muted/30",
                                children: "Sem telefone cadastrado",
                              }),
                        }),
                      ],
                    }),
                  }),
                },
                n.client_id
              );
            }),
          }),
      e.jsx(Pe, {
        open: !!S,
        onOpenChange: (n) => !n && J(null),
        children: e.jsxs(Ee, {
          className: "max-w-lg",
          children: [
            e.jsx($e, {
              children: e.jsxs(Te, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx($t, { className: "w-5 h-5 text-green-500" }),
                  "Mensagem para ",
                  S?.client_name,
                ],
              }),
            }),
            e.jsxs("div", {
              className: "space-y-4 py-2",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground mb-2",
                      children: "Script de cobrança:",
                    }),
                    e.jsxs(Me, {
                      value: L,
                      onValueChange: (n) => {
                        q(n);
                        const v = et[S?.segment || "overdue"] || [],
                          R = parseInt(n);
                        if (v[R] && S) {
                          const B = S.total_overdue || S.total_pending,
                            F = S.installments.find(
                              (C) => C.status === "pending"
                            ),
                            I = F
                              ? new Date(
                                  F.due_date + "T00:00:00"
                                ).toLocaleDateString("pt-BR")
                              : void 0;
                          oe(
                            v[R].template(S.client_name, B, S.days_overdue, I)
                          );
                        }
                      },
                      children: [
                        e.jsx(qe, {
                          children: e.jsx(Ve, {
                            placeholder: "Escolher script",
                          }),
                        }),
                        e.jsx(Le, {
                          children: (et[S?.segment || "overdue"] || []).map(
                            (n, v) =>
                              e.jsxs(
                                me,
                                {
                                  value: v.toString(),
                                  children: [n.icon, " ", n.label],
                                },
                                v
                              )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(wt, {
                  value: Z,
                  onChange: (n) => oe(n.target.value),
                  rows: 8,
                  placeholder: "Digite sua mensagem personalizada...",
                }),
                e.jsxs("div", {
                  className:
                    "p-3 rounded-lg bg-muted/50 text-xs text-muted-foreground space-y-1",
                  children: [
                    e.jsxs("p", {
                      children: [
                        e.jsx("strong", { children: "Cliente:" }),
                        " ",
                        S?.client_name,
                      ],
                    }),
                    e.jsxs("p", {
                      children: [
                        e.jsx("strong", { children: "Telefone:" }),
                        " ",
                        S?.client_phone || "Não cadastrado",
                      ],
                    }),
                    e.jsxs("p", {
                      children: [
                        e.jsx("strong", { children: "Valor em atraso:" }),
                        " ",
                        h(S?.total_overdue || 0),
                      ],
                    }),
                    e.jsxs("p", {
                      children: [
                        e.jsx("strong", { children: "Dias em atraso:" }),
                        " ",
                        S?.days_overdue || 0,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(nt, {
              children: [
                e.jsx(T, {
                  variant: "outline",
                  onClick: () => J(null),
                  children: "Cancelar",
                }),
                e.jsxs(T, {
                  onClick: () => {
                    S?.client_phone && Z && (ge(S.client_phone, Z), J(null));
                  },
                  className: "gap-2",
                  disabled: !S?.client_phone,
                  children: [
                    e.jsx(jt, { className: "w-4 h-4" }),
                    "Enviar via WhatsApp",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const It = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
function na() {
  const { user: a, loading: t } = gs(),
    { effectiveUserId: i, isEmployee: s, permissions: r, loading: c } = Qe(),
    b = i || a?.id || "",
    { format: x } = He(),
    h = !s || r.ver_faturamento === !0,
    d = (m) => (h ? x(m) : "•••"),
    [P, _] = p.useState([]),
    [M, U] = p.useState(""),
    [$, z] = p.useState(!0),
    [N, S] = p.useState(!1),
    [J, Z] = p.useState(!1),
    [oe, L] = p.useState(null),
    [q, V] = p.useState(null),
    [j, ae] = p.useState("all"),
    [ee, he] = p.useState(!0),
    [ge, be] = p.useState(!1),
    [Ce, ue] = p.useState(!1),
    [n, v] = p.useState(!1),
    [R, B] = p.useState([]),
    [F, I] = p.useState({
      totalPending: 0,
      totalPaid: 0,
      totalOverdue: 0,
      totalAmount: 0,
    });
  p.useEffect(() => {
    if (!(t || c || !b)) return C(), l();
  }, [t, c, b]);
  const C = async () => {
      z(!0);
      try {
        if (!b) {
          _([]), B([]);
          return;
        }
        const { data: m, error: E } = await y
          .from("promissory_notes")
          .select(
            `
          *,
          clients (
            name,
            cpf,
            phone
          )
        `
          )
          .eq("user_id", b)
          .is("parent_note_id", null)
          .order("created_at", { ascending: !1 });
        if (E) throw E;
        const W = new Date(),
          X = `${W.getFullYear()}-${String(W.getMonth() + 1).padStart(
            2,
            "0"
          )}-${String(W.getDate()).padStart(2, "0")}`,
          ie = (H) => {
            const De = new Date(H + "T00:00:00"),
              Re = new Date();
            return (
              Re.setHours(0, 0, 0, 0),
              Math.ceil((De.getTime() - Re.getTime()) / (1e3 * 60 * 60 * 24))
            );
          },
          fe = await Promise.all(
            (m || []).map(async (H) => {
              const { data: De } = await y
                  .from("promissory_notes")
                  .select("status, due_date")
                  .eq("parent_note_id", H.id),
                Re =
                  De?.some(
                    (ye) =>
                      ye.status === "overdue" ||
                      (ye.status === "pending" && ye.due_date < X)
                  ) || !1,
                Ue =
                  De?.filter(
                    (ye) => ye.status === "pending" && ye.due_date >= X
                  ) || [];
              let Fe = 1 / 0,
                ke = !1;
              return (
                Ue.length > 0 &&
                  ((Fe =
                    Ue.map((D) => ({ ...D, days: ie(D.due_date) })).sort(
                      (D, Y) => D.days - Y.days
                    )[0]?.days ?? 1 / 0),
                  (ke = Fe <= 3 && Fe >= 0)),
                {
                  ...H,
                  products: H.products || [],
                  hasOverdueInstallments: Re,
                  daysUntilDue: Fe,
                  hasUpcomingDue: ke,
                }
              );
            })
          );
        _(fe);
        const je = fe.filter((H) => H.hasUpcomingDue);
        B(je), await w(b);
      } catch {
        k.error("Erro ao carregar promissórias");
      } finally {
        z(!1);
      }
    },
    w = async (m) => {
      try {
        const { data: E, error: W } = await y
          .from("promissory_notes")
          .select("*")
          .eq("user_id", m)
          .not("parent_note_id", "is", null);
        if (W) throw W;
        const X = new Date(),
          ie = `${X.getFullYear()}-${String(X.getMonth() + 1).padStart(
            2,
            "0"
          )}-${String(X.getDate()).padStart(2, "0")}`,
          fe =
            E?.filter((D) => D.status === "pending" && D.due_date < ie).map(
              (D) => D.id
            ) || [];
        fe.length > 0 &&
          (await y
            .from("promissory_notes")
            .update({ status: "overdue" })
            .in("id", fe));
        const je =
            E?.map((D) => ({
              ...D,
              status:
                D.status === "pending" && D.due_date < ie
                  ? "overdue"
                  : D.status,
            })) || [],
          H = je
            .filter((D) => D.status === "pending")
            .reduce((D, Y) => D + Number(Y.installment_value || Y.amount), 0),
          De = je
            .filter((D) => D.status === "paid")
            .reduce(
              (D, Y) =>
                D + Number(Y.paid_amount || Y.installment_value || Y.amount),
              0
            ),
          { data: Re } = await y
            .from("transactions")
            .select("amount")
            .eq("user_id", m)
            .eq("type", "income")
            .eq("category", "Fiado - Entrada"),
          Ue = Re?.reduce((D, Y) => D + Number(Y.amount), 0) || 0,
          Fe = De + Ue,
          ke = je
            .filter((D) => D.status === "overdue")
            .reduce((D, Y) => D + Number(Y.installment_value || Y.amount), 0),
          ye = H + Fe + ke;
        I({
          totalPending: H,
          totalPaid: Fe,
          totalOverdue: ke,
          totalAmount: ye,
        });
      } catch {}
    },
    l = () => {
      if (!b) return () => {};
      const m = y
        .channel(`promissory_notes_changes_${b}`)
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "promissory_notes",
            filter: `user_id=eq.${b}`,
          },
          () => {
            C();
          }
        )
        .subscribe();
      return () => {
        y.removeChannel(m);
      };
    },
    g = P.filter((m) => {
      const E = M.toLowerCase(),
        W = M.replace(/\D/g, ""),
        X = (m.clients?.cpf || "").replace(/\D/g, ""),
        ie = (m.clients?.phone || "").replace(/\D/g, "");
      if (
        !(
          m.note_number.toLowerCase().includes(E) ||
          m.clients?.name?.toLowerCase().includes(E) ||
          (m.clients?.cpf || "").toLowerCase().includes(E) ||
          (W.length >= 3 && X.includes(W)) ||
          (W.length >= 3 && ie.includes(W))
        )
      )
        return !1;
      if (q) return m.status === q;
      switch (j) {
        case "overdue":
          return m.hasOverdueInstallments;
        case "upcoming":
          return m.hasUpcomingDue;
        case "on_time":
          return (
            !m.hasOverdueInstallments &&
            !m.hasUpcomingDue &&
            m.status !== "paid"
          );
        case "paid":
          return m.status === "paid";
        case "all":
        default:
          return !0;
      }
    }),
    A = [
      { name: "Pendente", value: F.totalPending },
      { name: "Pago", value: F.totalPaid },
      { name: "Vencido", value: F.totalOverdue },
    ].filter((m) => m.value > 0),
    ne = P.reduce((m, E) => {
      const W = new Date(E.created_at).toLocaleDateString("pt-BR", {
          month: "short",
          year: "numeric",
        }),
        X = m.find((ie) => ie.month === W);
      return (
        X
          ? ((X.total += Number(E.amount)),
            E.status === "paid" && (X.paid += Number(E.amount)))
          : m.push({
              month: W,
              total: Number(E.amount),
              paid: E.status === "paid" ? Number(E.amount) : 0,
            }),
        m
      );
    }, []);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("div", {
        className: "flex flex-col gap-3 md:gap-4",
        children: e.jsx("div", {
          className: "flex items-center justify-between",
          children: e.jsx("h1", {
            className: "text-xl md:text-3xl font-bold",
            children: "Controle de Fiado",
          }),
        }),
      }),
      e.jsxs(fs, {
        defaultValue: "fiado",
        className: "space-y-4",
        children: [
          e.jsxs(js, {
            className: "grid w-full grid-cols-2 max-w-md",
            children: [
              e.jsxs(Tt, {
                value: "fiado",
                className: "gap-1.5",
                children: [
                  e.jsx(tt, { className: "w-4 h-4" }),
                  " Promissórias",
                ],
              }),
              e.jsxs(Tt, {
                value: "crm",
                className: "gap-1.5",
                children: [
                  e.jsx(ks, { className: "w-4 h-4" }),
                  " CRM & Cobrança",
                ],
              }),
            ],
          }),
          e.jsxs(Rt, {
            value: "fiado",
            className: "space-y-4 md:space-y-6",
            children: [
              e.jsxs("div", {
                className: "flex flex-wrap gap-2",
                children: [
                  e.jsxs(T, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => ue(!0),
                    className: "flex-1 sm:flex-initial",
                    children: [
                      e.jsx(Bt, { className: "w-4 h-4 mr-1 sm:mr-2" }),
                      e.jsx("span", {
                        className: "text-xs sm:text-sm",
                        children: "Multas/Juros",
                      }),
                    ],
                  }),
                  e.jsxs(T, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => be(!0),
                    className: "flex-1 sm:flex-initial",
                    children: [
                      e.jsx(vs, { className: "w-4 h-4 mr-1 sm:mr-2" }),
                      e.jsx("span", {
                        className: "text-xs sm:text-sm",
                        children: "Relatório",
                      }),
                    ],
                  }),
                  e.jsxs(T, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => v(!0),
                    className: "flex-1 sm:flex-initial",
                    children: [
                      e.jsx(Wt, { className: "w-4 h-4 mr-1 sm:mr-2" }),
                      e.jsx("span", {
                        className: "text-xs sm:text-sm",
                        children: "PDF",
                      }),
                    ],
                  }),
                  e.jsxs(T, {
                    size: "sm",
                    onClick: () => S(!0),
                    className: "flex-1 sm:flex-initial",
                    children: [
                      e.jsx(Ot, { className: "w-4 h-4 mr-1 sm:mr-2" }),
                      e.jsx("span", {
                        className: "text-xs sm:text-sm",
                        children: "Nova",
                      }),
                    ],
                  }),
                ],
              }),
              ee &&
                R.length > 0 &&
                e.jsxs(_s, {
                  className:
                    "border-amber-500 bg-amber-50 dark:bg-amber-950/30",
                  children: [
                    e.jsx(Ct, { className: "h-4 w-4 text-amber-600" }),
                    e.jsxs(Ns, {
                      className:
                        "text-amber-800 dark:text-amber-400 flex items-center justify-between",
                      children: [
                        e.jsxs("span", {
                          children: [
                            "⚠️ Atenção! ",
                            R.length,
                            " promissória(s) com vencimento próximo",
                          ],
                        }),
                        e.jsx(T, {
                          variant: "ghost",
                          size: "sm",
                          className: "h-6 w-6 p-0",
                          onClick: () => he(!1),
                          children: e.jsx(gt, { className: "h-4 w-4" }),
                        }),
                      ],
                    }),
                    e.jsx(bs, {
                      className: "text-amber-700 dark:text-amber-300",
                      children: e.jsxs("div", {
                        className: "mt-2 space-y-1",
                        children: [
                          R.slice(0, 3).map((m) =>
                            e.jsxs(
                              "div",
                              {
                                className: "flex items-center gap-2 text-sm",
                                children: [
                                  e.jsx(it, { className: "h-3 w-3" }),
                                  e.jsx("span", {
                                    className: "font-medium",
                                    children: m.clients?.name,
                                  }),
                                  e.jsxs("span", {
                                    children: [
                                      "- Vence em ",
                                      m.daysUntilDue === 0
                                        ? "HOJE"
                                        : `${m.daysUntilDue} dia(s)`,
                                    ],
                                  }),
                                  e.jsx(T, {
                                    variant: "link",
                                    size: "sm",
                                    className:
                                      "h-auto p-0 text-amber-800 dark:text-amber-300 underline",
                                    onClick: () => {
                                      L(m), Z(!0);
                                    },
                                    children: "Ver detalhes",
                                  }),
                                ],
                              },
                              m.id
                            )
                          ),
                          R.length > 3 &&
                            e.jsxs("p", {
                              className: "text-xs mt-2",
                              children: [
                                "...e mais ",
                                R.length - 3,
                                " promissória(s)",
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              e.jsxs("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(Gt, { className: "h-4 w-4 text-muted-foreground" }),
                      e.jsx("span", {
                        className: "text-sm font-medium",
                        children: "Filtrar:",
                      }),
                    ],
                  }),
                  e.jsxs(Me, {
                    value: j,
                    onValueChange: (m) => {
                      ae(m), V(null);
                    },
                    children: [
                      e.jsx(qe, {
                        className: "w-[180px] h-8 text-xs",
                        children: e.jsx(Ve, { placeholder: "Selecione..." }),
                      }),
                      e.jsxs(Le, {
                        children: [
                          e.jsx(me, {
                            value: "all",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(tt, { className: "h-3 w-3" }),
                                e.jsx("span", { children: "Todas" }),
                              ],
                            }),
                          }),
                          e.jsx(me, {
                            value: "overdue",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(Ye, {
                                  className: "h-3 w-3 text-red-500",
                                }),
                                e.jsx("span", { children: "Vencidas" }),
                              ],
                            }),
                          }),
                          e.jsx(me, {
                            value: "upcoming",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(it, {
                                  className: "h-3 w-3 text-amber-500",
                                }),
                                e.jsx("span", {
                                  children: "A Vencer (≤3 dias)",
                                }),
                              ],
                            }),
                          }),
                          e.jsx(me, {
                            value: "on_time",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(kt, {
                                  className: "h-3 w-3 text-green-500",
                                }),
                                e.jsx("span", { children: "Em Dia" }),
                              ],
                            }),
                          }),
                          e.jsx(me, {
                            value: "paid",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(ot, {
                                  className: "h-3 w-3 text-blue-500",
                                }),
                                e.jsx("span", { children: "Quitadas" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (j !== "all" || q) &&
                    e.jsxs(T, {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => {
                        ae("all"), V(null);
                      },
                      className: "h-8 text-xs",
                      children: [
                        e.jsx(gt, { className: "h-3 w-3 mr-1" }),
                        "Limpar",
                      ],
                    }),
                  e.jsxs(We, {
                    variant: "secondary",
                    className: "text-xs",
                    children: [g.length, " resultado(s)"],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4",
                children: [
                  e.jsxs(K, {
                    className: `cursor-pointer transition-all hover:shadow-lg ${
                      q === null ? "ring-2 ring-primary" : ""
                    }`,
                    onClick: () => V(null),
                    children: [
                      e.jsxs(le, {
                        className:
                          "flex flex-row items-center justify-between pb-1 md:pb-2 p-3 md:p-6",
                        children: [
                          e.jsx(ce, {
                            className: "text-xs md:text-sm font-medium",
                            children: "Total Geral",
                          }),
                          e.jsx(tt, {
                            className:
                              "h-3 w-3 md:h-4 md:w-4 text-muted-foreground",
                          }),
                        ],
                      }),
                      e.jsx(de, {
                        className: "p-3 pt-0 md:p-6 md:pt-0",
                        children: e.jsx("div", {
                          className: "text-sm md:text-2xl font-bold",
                          children: d(F.totalAmount),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs(K, {
                    className: `cursor-pointer transition-all hover:shadow-lg ${
                      q === "pending" ? "ring-2 ring-yellow-500" : ""
                    }`,
                    onClick: () => V(q === "pending" ? null : "pending"),
                    children: [
                      e.jsxs(le, {
                        className:
                          "flex flex-row items-center justify-between pb-1 md:pb-2 p-3 md:p-6",
                        children: [
                          e.jsx(ce, {
                            className: "text-xs md:text-sm font-medium",
                            children: "A Receber",
                          }),
                          e.jsx(lt, {
                            className: "h-3 w-3 md:h-4 md:w-4 text-yellow-500",
                          }),
                        ],
                      }),
                      e.jsx(de, {
                        className: "p-3 pt-0 md:p-6 md:pt-0",
                        children: e.jsx("div", {
                          className:
                            "text-sm md:text-2xl font-bold text-yellow-600",
                          children: d(F.totalPending),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs(K, {
                    className: `cursor-pointer transition-all hover:shadow-lg ${
                      q === "paid" ? "ring-2 ring-green-500" : ""
                    }`,
                    onClick: () => V(q === "paid" ? null : "paid"),
                    children: [
                      e.jsxs(le, {
                        className:
                          "flex flex-row items-center justify-between pb-1 md:pb-2 p-3 md:p-6",
                        children: [
                          e.jsx(ce, {
                            className: "text-xs md:text-sm font-medium",
                            children: "Recebido",
                          }),
                          e.jsx(ot, {
                            className: "h-3 w-3 md:h-4 md:w-4 text-green-500",
                          }),
                        ],
                      }),
                      e.jsx(de, {
                        className: "p-3 pt-0 md:p-6 md:pt-0",
                        children: e.jsx("div", {
                          className:
                            "text-sm md:text-2xl font-bold text-green-600",
                          children: d(F.totalPaid),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs(K, {
                    className: `cursor-pointer transition-all hover:shadow-lg ${
                      q === "overdue" ? "ring-2 ring-red-500" : ""
                    }`,
                    onClick: () => V(q === "overdue" ? null : "overdue"),
                    children: [
                      e.jsxs(le, {
                        className:
                          "flex flex-row items-center justify-between pb-1 md:pb-2 p-3 md:p-6",
                        children: [
                          e.jsx(ce, {
                            className: "text-xs md:text-sm font-medium",
                            children: "Vencido",
                          }),
                          e.jsx(ys, {
                            className: "h-3 w-3 md:h-4 md:w-4 text-red-500",
                          }),
                        ],
                      }),
                      e.jsx(de, {
                        className: "p-3 pt-0 md:p-6 md:pt-0",
                        children: e.jsx("div", {
                          className:
                            "text-sm md:text-2xl font-bold text-red-600",
                          children: d(F.totalOverdue),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              h &&
                e.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6",
                  children: [
                    e.jsxs(K, {
                      children: [
                        e.jsx(le, {
                          className: "p-3 md:p-6",
                          children: e.jsx(ce, {
                            className: "text-sm md:text-base",
                            children: "Distribuição por Status",
                          }),
                        }),
                        e.jsx(de, {
                          className: "p-3 md:p-6 pt-0",
                          children: e.jsx(dt, {
                            width: "100%",
                            height: 200,
                            children: e.jsxs(ws, {
                              children: [
                                e.jsx(Ss, {
                                  data: A,
                                  cx: "50%",
                                  cy: "50%",
                                  labelLine: !1,
                                  label: (m) =>
                                    `${m.name}: R$ ${m.value.toFixed(2)}`,
                                  outerRadius: 60,
                                  fill: "#8884d8",
                                  dataKey: "value",
                                  children: A.map((m, E) =>
                                    e.jsx(
                                      Cs,
                                      { fill: It[E % It.length] },
                                      `cell-${E}`
                                    )
                                  ),
                                }),
                                e.jsx(mt, {}),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    e.jsxs(K, {
                      children: [
                        e.jsx(le, {
                          className: "p-3 md:p-6",
                          children: e.jsx(ce, {
                            className: "text-sm md:text-base",
                            children: "Evolução Mensal",
                          }),
                        }),
                        e.jsx(de, {
                          className: "p-3 md:p-6 pt-0",
                          children: e.jsx(dt, {
                            width: "100%",
                            height: 200,
                            children: e.jsxs(Ut, {
                              data: ne,
                              children: [
                                e.jsx(vt, { strokeDasharray: "3 3" }),
                                e.jsx(_t, {
                                  dataKey: "month",
                                  style: { fontSize: "10px" },
                                }),
                                e.jsx(Nt, { style: { fontSize: "10px" } }),
                                e.jsx(mt, {}),
                                e.jsx(yt, {
                                  wrapperStyle: { fontSize: "10px" },
                                }),
                                e.jsx(at, {
                                  dataKey: "total",
                                  fill: "#8884d8",
                                  name: "Total",
                                }),
                                e.jsx(at, {
                                  dataKey: "paid",
                                  fill: "#82ca9d",
                                  name: "Pago",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              e.jsxs(K, {
                children: [
                  e.jsxs(le, {
                    className: "p-3 md:p-6",
                    children: [
                      e.jsx(ce, {
                        className: "text-sm md:text-base",
                        children: "Promissórias Cadastradas",
                      }),
                      e.jsxs("div", {
                        className: "relative mt-2",
                        children: [
                          e.jsx(Ht, {
                            className:
                              "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-3 h-3 md:w-4 md:h-4",
                          }),
                          e.jsx(re, {
                            placeholder: "Buscar por número ou cliente...",
                            value: M,
                            onChange: (m) => U(m.target.value),
                            className: "pl-9 md:pl-10 text-xs md:text-sm",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(de, {
                    className: "p-3 md:p-6",
                    children: $
                      ? e.jsx("p", {
                          className:
                            "text-center text-muted-foreground py-8 text-xs md:text-sm",
                          children: "Carregando...",
                        })
                      : g.length === 0
                      ? e.jsx("p", {
                          className:
                            "text-center text-muted-foreground py-8 text-xs md:text-sm",
                          children: "Nenhuma promissória cadastrada",
                        })
                      : e.jsx("div", {
                          className: "space-y-2 md:space-y-3",
                          children: g.map((m) =>
                            e.jsx(
                              "div",
                              {
                                className:
                                  "p-3 md:p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer",
                                onClick: () => {
                                  L(m), Z(!0);
                                },
                                children: e.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-start justify-between gap-2",
                                      children: [
                                        e.jsxs("div", {
                                          className: "flex-1 min-w-0",
                                          children: [
                                            e.jsx("h3", {
                                              className:
                                                "font-semibold text-sm md:text-lg truncate",
                                              children:
                                                m.clients?.name ||
                                                "Cliente não encontrado",
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-xs md:text-sm text-muted-foreground",
                                              children: [
                                                "Promissória #",
                                                m.note_number,
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "flex-shrink-0 flex flex-col items-end gap-1",
                                          children: m.hasOverdueInstallments
                                            ? e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-1 text-red-600",
                                                children: [
                                                  e.jsx(Ye, {
                                                    className:
                                                      "w-4 h-4 md:w-5 md:h-5",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[10px] md:text-xs font-medium hidden sm:inline",
                                                    children:
                                                      "Parcelas Atrasadas",
                                                  }),
                                                ],
                                              })
                                            : m.hasUpcomingDue
                                            ? e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-1 text-amber-600",
                                                children: [
                                                  e.jsx(it, {
                                                    className:
                                                      "w-4 h-4 md:w-5 md:h-5",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[10px] md:text-xs font-medium hidden sm:inline",
                                                    children:
                                                      m.daysUntilDue === 0
                                                        ? "Vence HOJE"
                                                        : `Vence em ${m.daysUntilDue}d`,
                                                  }),
                                                ],
                                              })
                                            : m.status === "paid"
                                            ? e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-1 text-blue-600",
                                                children: [
                                                  e.jsx(ot, {
                                                    className:
                                                      "w-4 h-4 md:w-5 md:h-5",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[10px] md:text-xs font-medium hidden sm:inline",
                                                    children: "Quitada",
                                                  }),
                                                ],
                                              })
                                            : e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-1 text-green-600",
                                                children: [
                                                  e.jsx(kt, {
                                                    className:
                                                      "w-4 h-4 md:w-5 md:h-5",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[10px] md:text-xs font-medium hidden sm:inline",
                                                    children: "Em Dia",
                                                  }),
                                                ],
                                              }),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-wrap gap-2 md:gap-4 mt-2",
                                      children: [
                                        e.jsxs("p", {
                                          className: "text-xs md:text-sm",
                                          children: [
                                            e.jsx("span", {
                                              className: "font-medium",
                                              children: "Valor Total:",
                                            }),
                                            " ",
                                            d(Number(m.amount)),
                                          ],
                                        }),
                                        e.jsxs("p", {
                                          className:
                                            "text-xs md:text-sm flex-1 min-w-0",
                                          children: [
                                            e.jsx("span", {
                                              className: "font-medium",
                                              children: "Produto/Serviço:",
                                            }),
                                            " ",
                                            m.description,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              m.id
                            )
                          ),
                        }),
                  }),
                ],
              }),
            ],
          }),
          e.jsx(Rt, { value: "crm", children: e.jsx(Hs, {}) }),
        ],
      }),
      e.jsx(As, { open: N, onOpenChange: S, onSuccess: C }),
      e.jsx(Vs, { open: J, onOpenChange: Z, note: oe, onUpdate: C }),
      e.jsx(Ls, { open: ge, onOpenChange: be }),
      e.jsx(Us, { open: Ce, onOpenChange: ue }),
      e.jsx(Ws, { open: n, onOpenChange: v }),
    ],
  });
}
export { na as default };
