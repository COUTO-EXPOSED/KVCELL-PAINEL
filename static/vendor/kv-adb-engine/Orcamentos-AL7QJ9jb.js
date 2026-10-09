import {
  r as x,
  i as ye,
  cD as we,
  cu as Re,
  cf as Ce,
  w as I,
  j as e,
  D as Se,
  c as De,
  a_ as Oe,
  d as ke,
  bl as Te,
  G as _,
  Y as X,
  $ as Z,
  K as Pe,
  a1 as y,
  n as N,
  b5 as He,
  b6 as Je,
  b7 as Ye,
  b8 as Ke,
  b9 as We,
  I as v,
  S as $e,
  bW as Xe,
  b3 as C,
  b2 as Ae,
  c2 as Ze,
  bL as Qe,
  ad as qe,
  B as m,
  a8 as Me,
  bm as ve,
  T as es,
  ct as ss,
  b4 as as,
  bj as ge,
  bK as fe,
  bx as Ne,
  bT as be,
  bk as _e,
  u as rs,
  dp as ts,
  z as ns,
  a2 as is,
  by as ls,
  dV as cs,
  a4 as ds,
  h as Fe,
  bB as os,
  bC as ms,
  bD as ue,
  bE as je,
  bO as ce,
  cY as xs,
  c7 as hs,
  aa as Ie,
} from "./index-V8ZHCWL2.js";
import {
  T as Ue,
  a as ze,
  b as re,
  c as E,
  d as Ge,
  e as D,
} from "./table-Dmiq7g5Z.js";
import { g as Ve } from "./quotationPDFGenerator-D-0ir42U.js";
import { L as de } from "./link-DySSB7S9.js";
import "./pt-XKM20doT.js";
function ps({
  open: $,
  onOpenChange: L,
  onSuccess: i,
  editingQuotation: d,
  prefill: g,
}) {
  const [O, V] = x.useState(!1),
    [M, k] = x.useState([]),
    [P, T] = x.useState(""),
    [U, B] = x.useState([]),
    [b, Q] = x.useState(""),
    { toast: h } = ye(),
    { format: f } = we(),
    { currency: R } = Re(),
    {
      effectiveUserId: te,
      authUserId: oe,
      isEmployee: me,
      employeeId: xe,
      loading: q,
    } = Ce(),
    F = te || oe || "",
    A = R === "EUR",
    u = A ? "NIF" : "CPF/CNPJ",
    [r, p] = x.useState({
      client_name: "",
      client_cpf_nif: "",
      client_phone: "",
      client_address: "",
      device_brand: "",
      device_model: "",
      device_imei: "",
      device_serial: "",
      device_color: "",
      validity_date: "",
      discount: 0,
      observations: `1. Este orçamento é válido até a data de validade informada.
2. O prazo de entrega será combinado após aprovação do orçamento.
3. Em caso de desistência após início do serviço, será cobrado o valor proporcional.`,
    }),
    [S, j] = x.useState([
      { description: "", quantity: 1, unit_price: 0, total: 0 },
    ]);
  x.useEffect(() => {
    $ &&
      !q &&
      F &&
      (H(),
      J(),
      d
        ? (T(d.client_id || ""),
          p({
            client_name: d.client_name,
            client_cpf_nif: d.client_cpf_nif || "",
            client_phone: d.client_phone || "",
            client_address: d.client_address || "",
            device_brand: d.device_brand,
            device_model: d.device_model,
            device_imei: d.device_imei || "",
            device_serial: d.device_serial || "",
            device_color: d.device_color || "",
            validity_date: d.validity_date,
            discount: d.discount,
            observations: d.observations || "",
          }),
          j(d.services))
        : (ne(),
          g &&
            (p((s) => ({
              ...s,
              device_brand: g.device_brand || "",
              device_model: g.device_model || "",
            })),
            g.services?.length && j(g.services))));
  }, [$, d, q, F, g]);
  const H = async () => {
      try {
        if (!F) return;
        const { data: s, error: t } = await I.from("clients")
          .select("id, name, cpf, phone, address")
          .eq("user_id", F)
          .order("name");
        if (t) throw t;
        k(s || []);
      } catch {}
    },
    J = async () => {
      try {
        if (!F) return;
        const { data: s, error: t } = await I.from("pricing_services")
          .select(
            "id, service_name, price, warranty_days, is_active, pricing_models(name, brand, category)"
          )
          .eq("user_id", F)
          .order("service_name");
        if (t) throw t;
        const o = (s || [])
          .filter((n) => n.is_active !== !1)
          .map((n) => ({
            id: n.id,
            service_name: n.service_name,
            price: Number(n.price) || 0,
            warranty_days: n.warranty_days ?? null,
            model_name: n.pricing_models?.name || "",
            model_brand: n.pricing_models?.brand || null,
            category: n.pricing_models?.category || null,
          }));
        B(o);
      } catch {}
    },
    ne = () => {
      p({
        client_name: "",
        client_cpf_nif: "",
        client_phone: "",
        client_address: "",
        device_brand: "",
        device_model: "",
        device_imei: "",
        device_serial: "",
        device_color: "",
        validity_date: "",
        discount: 0,
        observations: `1. Este orçamento é válido até a data de validade informada.
2. O prazo de entrega será combinado após aprovação do orçamento.
3. Em caso de desistência após início do serviço, será cobrado o valor proporcional.`,
      }),
        j([{ description: "", quantity: 1, unit_price: 0, total: 0 }]),
        T("");
    },
    ee = (s) => {
      T(s);
      const t = M.find((o) => o.id === s);
      t &&
        p((o) => ({
          ...o,
          client_name: t.name,
          client_cpf_nif: t.cpf || "",
          client_phone: t.phone || "",
          client_address: t.address || "",
        }));
    },
    ie = () => {
      j([...S, { description: "", quantity: 1, unit_price: 0, total: 0 }]);
    },
    se = x.useMemo(() => {
      const s = b.trim().toLowerCase(),
        t = U.filter((n) =>
          s
            ? n.service_name.toLowerCase().includes(s) ||
              n.model_name.toLowerCase().includes(s) ||
              (n.model_brand || "").toLowerCase().includes(s) ||
              (n.category || "").toLowerCase().includes(s)
            : !0
        ),
        o = r.device_model.trim().toLowerCase();
      return o
        ? [...t].sort((n, K) => {
            const a = n.model_name.toLowerCase().includes(o) ? 0 : 1,
              c = K.model_name.toLowerCase().includes(o) ? 0 : 1;
            return a - c;
          })
        : t;
    }, [U, b, r.device_model]),
    le = (s) => {
      const t = s.model_name
          ? `${s.service_name} - ${s.model_name}`
          : s.service_name,
        o = {
          description: t,
          quantity: 1,
          unit_price: s.price,
          total: s.price,
        };
      j((n) =>
        n.length === 1 && !n[0].description && !n[0].unit_price
          ? [o]
          : [...n, o]
      ),
        !r.device_model &&
          s.model_name &&
          p((n) => ({
            ...n,
            device_model: n.device_model || s.model_name,
            device_brand: n.device_brand || s.model_brand || "",
          })),
        h({ title: "Serviço adicionado", description: t });
    },
    he = (s) => {
      S.length > 1 && j(S.filter((t, o) => o !== s));
    },
    z = (s, t, o) => {
      const n = [...S];
      t === "quantity"
        ? ((n[s].quantity = Number(o)),
          (n[s].total = n[s].quantity * n[s].unit_price))
        : t === "unit_price"
        ? ((n[s].unit_price = Number(o)),
          (n[s].total = n[s].quantity * n[s].unit_price))
        : t === "description" && (n[s].description = String(o)),
        j(n);
    },
    G = S.reduce((s, t) => s + t.total, 0),
    Y = G - r.discount,
    ae = () => {
      const s = new Date(),
        t = s.getFullYear(),
        o = String(s.getMonth() + 1).padStart(2, "0"),
        n = Math.floor(Math.random() * 9e3) + 1e3;
      return `ORC-${t}${o}-${n}`;
    },
    pe = async () => {
      if (
        !r.client_name ||
        !r.device_brand ||
        !r.device_model ||
        !r.validity_date
      ) {
        h({
          title: "Campos obrigatórios",
          description: "Preencha todos os campos obrigatórios",
          variant: "destructive",
        });
        return;
      }
      if (
        S.some((s) => !s.description || s.quantity <= 0 || s.unit_price <= 0)
      ) {
        h({
          title: "Serviços inválidos",
          description: "Preencha todos os serviços corretamente",
          variant: "destructive",
        });
        return;
      }
      V(!0);
      try {
        if (!F) throw new Error("Usuário não autenticado");
        const s = {
          user_id: F,
          quotation_number: d?.quotation_number || ae(),
          client_id: P || d?.client_id || null,
          client_name: r.client_name,
          client_cpf_nif: r.client_cpf_nif || null,
          client_phone: r.client_phone || null,
          client_address: r.client_address || null,
          device_brand: r.device_brand,
          device_model: r.device_model,
          device_imei: r.device_imei || null,
          device_serial: r.device_serial || null,
          device_color: r.device_color || null,
          services: JSON.parse(JSON.stringify(S)),
          subtotal: G,
          discount: r.discount,
          total: Y,
          validity_date: r.validity_date,
          observations: r.observations || null,
          created_by_employee_id: d?.created_by_employee_id ?? (me ? xe : null),
        };
        if (d) {
          const { error: t } = await I.from("quotations")
            .update(s)
            .eq("id", d.id);
          if (t) throw t;
        } else {
          const { error: t } = await I.from("quotations").insert([s]);
          if (t) throw t;
        }
        h({
          title: "Sucesso",
          description: d
            ? "Orçamento atualizado"
            : "Orçamento criado com sucesso",
        }),
          i(),
          L(!1);
      } catch {
        h({
          title: "Erro",
          description: "Falha ao salvar orçamento",
          variant: "destructive",
        });
      } finally {
        V(!1);
      }
    };
  return e.jsx(Se, {
    open: $,
    onOpenChange: L,
    children: e.jsxs(De, {
      className:
        "w-[96vw] max-w-4xl max-h-[92vh] overflow-y-auto p-4 sm:p-6 rounded-2xl",
      children: [
        e.jsxs(Oe, {
          className: "space-y-1",
          children: [
            e.jsxs(ke, {
              className: "flex items-center gap-2 text-base sm:text-xl",
              children: [
                e.jsx("span", {
                  className:
                    "flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0",
                  children: e.jsx(Te, { className: "h-5 w-5" }),
                }),
                e.jsx("span", {
                  className: "truncate",
                  children: d ? "Editar Orçamento" : "Novo Orçamento",
                }),
              ],
            }),
            e.jsx("p", {
              className: "text-xs sm:text-sm text-muted-foreground",
              children:
                "Preencha os dados e use o catálogo de precificação para montar o orçamento em segundos.",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "space-y-4 sm:space-y-6",
          children: [
            e.jsxs(_, {
              children: [
                e.jsx(X, {
                  className: "pb-3",
                  children: e.jsxs(Z, {
                    className: "text-base flex items-center gap-2",
                    children: [
                      e.jsx(Pe, { className: "h-4 w-4" }),
                      "Dados do Cliente",
                    ],
                  }),
                }),
                e.jsxs(y, {
                  className: "space-y-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx(N, { children: "Selecionar Cliente Existente" }),
                        e.jsxs(He, {
                          value: P,
                          onValueChange: ee,
                          children: [
                            e.jsx(Je, {
                              children: e.jsx(Ye, {
                                placeholder:
                                  "Selecione ou preencha manualmente",
                              }),
                            }),
                            e.jsx(Ke, {
                              children: M.map((s) =>
                                e.jsxs(
                                  We,
                                  {
                                    value: s.id,
                                    children: [
                                      s.name,
                                      " ",
                                      s.cpf && `- ${s.cpf}`,
                                    ],
                                  },
                                  s.id
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
                            e.jsx(N, { children: "Nome do Cliente *" }),
                            e.jsx(v, {
                              value: r.client_name,
                              onChange: (s) =>
                                p({ ...r, client_name: s.target.value }),
                              placeholder: "Nome completo",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, { children: u }),
                            e.jsx(v, {
                              value: r.client_cpf_nif,
                              onChange: (s) =>
                                p({ ...r, client_cpf_nif: s.target.value }),
                              placeholder: u,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, { children: "Telefone" }),
                            e.jsx(v, {
                              value: r.client_phone,
                              onChange: (s) =>
                                p({ ...r, client_phone: s.target.value }),
                              placeholder: "Telefone",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, { children: A ? "Morada" : "Endereço" }),
                            e.jsx(v, {
                              value: r.client_address,
                              onChange: (s) =>
                                p({ ...r, client_address: s.target.value }),
                              placeholder: A ? "Morada" : "Endereço",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(_, {
              children: [
                e.jsx(X, {
                  className: "pb-3",
                  children: e.jsxs(Z, {
                    className: "text-base flex items-center gap-2",
                    children: [
                      e.jsx($e, { className: "h-4 w-4" }),
                      "Dados do Aparelho",
                    ],
                  }),
                }),
                e.jsx(y, {
                  className: "space-y-4",
                  children: e.jsxs("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx(N, { children: "Marca *" }),
                          e.jsx(v, {
                            value: r.device_brand,
                            onChange: (s) =>
                              p({ ...r, device_brand: s.target.value }),
                            placeholder: "Ex: Samsung, Apple",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(N, { children: "Modelo *" }),
                          e.jsx(v, {
                            value: r.device_model,
                            onChange: (s) =>
                              p({ ...r, device_model: s.target.value }),
                            placeholder: "Ex: Galaxy S23, iPhone 15",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(N, { children: "Cor" }),
                          e.jsx(v, {
                            value: r.device_color,
                            onChange: (s) =>
                              p({ ...r, device_color: s.target.value }),
                            placeholder: "Ex: Preto, Branco",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(N, { children: "IMEI" }),
                          e.jsx(v, {
                            value: r.device_imei,
                            onChange: (s) =>
                              p({ ...r, device_imei: s.target.value }),
                            placeholder: "IMEI do aparelho",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(N, { children: "Nº de Série" }),
                          e.jsx(v, {
                            value: r.device_serial,
                            onChange: (s) =>
                              p({ ...r, device_serial: s.target.value }),
                            placeholder: "Número de série",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            e.jsxs(_, {
              className: "rounded-2xl border-primary/20 bg-primary/5",
              children: [
                e.jsx(X, {
                  className: "pb-3",
                  children: e.jsxs(Z, {
                    className: "text-sm sm:text-base flex items-center gap-2",
                    children: [
                      e.jsx(Xe, { className: "h-4 w-4 text-primary" }),
                      "Catálogo de Precificação",
                      e.jsx(C, {
                        variant: "secondary",
                        className: "ml-auto",
                        children: U.length,
                      }),
                    ],
                  }),
                }),
                e.jsx(y, {
                  className: "space-y-3",
                  children:
                    U.length === 0
                      ? e.jsx("p", {
                          className: "text-xs sm:text-sm text-muted-foreground",
                          children:
                            "Nenhum serviço cadastrado na aba Precificação. Ao cadastrar, os serviços aparecem aqui automaticamente para adicionar ao orçamento.",
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsxs("div", {
                              className: "relative",
                              children: [
                                e.jsx(Ae, {
                                  className:
                                    "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                                }),
                                e.jsx(v, {
                                  value: b,
                                  onChange: (s) => Q(s.target.value),
                                  placeholder: "Buscar serviço ou modelo...",
                                  className: "pl-9",
                                }),
                              ],
                            }),
                            e.jsx(Ze, {
                              className:
                                "h-44 sm:h-52 rounded-xl border bg-background",
                              children: e.jsxs("div", {
                                className: "divide-y",
                                children: [
                                  se.map((s) =>
                                    e.jsxs(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => le(s),
                                        className:
                                          "w-full text-left px-3 py-2.5 hover:bg-muted/60 transition-colors flex items-center gap-3",
                                        children: [
                                          e.jsx(Qe, {
                                            className:
                                              "h-4 w-4 text-primary shrink-0",
                                          }),
                                          e.jsxs("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                              e.jsx("p", {
                                                className:
                                                  "text-sm font-medium truncate",
                                                children: s.service_name,
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-xs text-muted-foreground truncate",
                                                children: [
                                                  s.model_brand,
                                                  s.model_name,
                                                  s.category,
                                                ]
                                                  .filter(Boolean)
                                                  .join(" • "),
                                              }),
                                            ],
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-sm font-semibold text-primary shrink-0",
                                            children: f(s.price),
                                          }),
                                        ],
                                      },
                                      s.id
                                    )
                                  ),
                                  se.length === 0 &&
                                    e.jsx("p", {
                                      className:
                                        "px-3 py-6 text-center text-xs text-muted-foreground",
                                      children: "Nenhum serviço encontrado.",
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                }),
              ],
            }),
            e.jsxs(_, {
              className: "rounded-2xl",
              children: [
                e.jsx(X, {
                  className: "pb-3",
                  children: e.jsxs("div", {
                    className:
                      "flex flex-wrap items-center justify-between gap-2",
                    children: [
                      e.jsxs(Z, {
                        className:
                          "text-sm sm:text-base flex items-center gap-2",
                        children: [
                          e.jsx(qe, { className: "h-4 w-4" }),
                          "Serviços do Orçamento",
                        ],
                      }),
                      e.jsxs(m, {
                        variant: "outline",
                        size: "sm",
                        onClick: ie,
                        className: "rounded-xl",
                        children: [
                          e.jsx(Me, { className: "h-4 w-4 mr-1" }),
                          "Linha manual",
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsxs(y, {
                  className: "space-y-3",
                  children: [
                    e.jsxs("div", {
                      className:
                        "hidden md:grid grid-cols-12 gap-2 px-1 text-xs font-medium text-muted-foreground",
                      children: [
                        e.jsx("div", {
                          className: "col-span-6",
                          children: "Descrição",
                        }),
                        e.jsx("div", {
                          className: "col-span-2",
                          children: "Qtd",
                        }),
                        e.jsx("div", {
                          className: "col-span-2",
                          children: "Unitário",
                        }),
                        e.jsx("div", {
                          className: "col-span-2 text-right",
                          children: "Total",
                        }),
                      ],
                    }),
                    S.map((s, t) =>
                      e.jsx(
                        "div",
                        {
                          className:
                            "rounded-xl border bg-card p-3 md:p-2 md:border-0 md:bg-transparent md:rounded-none",
                          children: e.jsxs("div", {
                            className:
                              "grid grid-cols-1 md:grid-cols-12 gap-2 md:items-center",
                            children: [
                              e.jsxs("div", {
                                className: "md:col-span-6",
                                children: [
                                  e.jsx(N, {
                                    className:
                                      "md:hidden text-xs text-muted-foreground",
                                    children: "Descrição",
                                  }),
                                  e.jsx(v, {
                                    value: s.description,
                                    onChange: (o) =>
                                      z(t, "description", o.target.value),
                                    placeholder: "Ex: Troca de tela",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "grid grid-cols-2 gap-2 md:contents",
                                children: [
                                  e.jsxs("div", {
                                    className: "md:col-span-2",
                                    children: [
                                      e.jsx(N, {
                                        className:
                                          "md:hidden text-xs text-muted-foreground",
                                        children: "Qtd",
                                      }),
                                      e.jsx(v, {
                                        type: "number",
                                        min: "1",
                                        value: s.quantity,
                                        onChange: (o) =>
                                          z(t, "quantity", o.target.value),
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "md:col-span-2",
                                    children: [
                                      e.jsx(N, {
                                        className:
                                          "md:hidden text-xs text-muted-foreground",
                                        children: "Unitário",
                                      }),
                                      e.jsx(v, {
                                        type: "number",
                                        min: "0",
                                        step: "0.01",
                                        value: s.unit_price,
                                        onChange: (o) =>
                                          z(t, "unit_price", o.target.value),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "md:col-span-2 flex items-center justify-between md:justify-end gap-2",
                                children: [
                                  e.jsx("span", {
                                    className: "text-sm font-semibold",
                                    children: f(s.total),
                                  }),
                                  e.jsx(m, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: () => he(t),
                                    disabled: S.length === 1,
                                    className: "shrink-0",
                                    children: e.jsx(ve, {
                                      className: "h-4 w-4 text-destructive",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    ),
                    e.jsxs("div", {
                      className:
                        "mt-2 rounded-xl border bg-muted/40 p-3 space-y-2",
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex items-center justify-between text-sm",
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "Subtotal",
                            }),
                            e.jsx("span", {
                              className: "font-medium",
                              children: f(G),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center justify-between gap-3 text-sm",
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "Desconto",
                            }),
                            e.jsx(v, {
                              type: "number",
                              min: "0",
                              step: "0.01",
                              className: "w-28 sm:w-32 h-9",
                              value: r.discount,
                              onChange: (s) =>
                                p({ ...r, discount: Number(s.target.value) }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center justify-between border-t pt-2",
                          children: [
                            e.jsx("span", {
                              className: "font-semibold",
                              children: "Total",
                            }),
                            e.jsx("span", {
                              className:
                                "text-lg sm:text-xl font-bold text-primary",
                              children: f(Y),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(_, {
              children: [
                e.jsx(X, {
                  className: "pb-3",
                  children: e.jsx(Z, {
                    className: "text-base",
                    children: "Validade e Observações",
                  }),
                }),
                e.jsxs(y, {
                  className: "space-y-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx(N, { children: "Data de Validade *" }),
                        e.jsx(v, {
                          type: "date",
                          value: r.validity_date,
                          onChange: (s) =>
                            p({ ...r, validity_date: s.target.value }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(N, { children: "Observações/Cláusulas" }),
                        e.jsx(es, {
                          value: r.observations,
                          onChange: (s) =>
                            p({ ...r, observations: s.target.value }),
                          rows: 4,
                          placeholder: "Termos e condições do orçamento",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "sticky bottom-0 -mx-4 sm:mx-0 bg-background/95 backdrop-blur border-t sm:border-0 px-4 py-3 sm:p-0 flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3",
              children: [
                e.jsx(m, {
                  variant: "outline",
                  className: "w-full sm:w-auto rounded-xl",
                  onClick: () => L(!1),
                  children: "Cancelar",
                }),
                e.jsx(m, {
                  onClick: pe,
                  disabled: O,
                  className: "w-full sm:w-auto rounded-xl",
                  children: O
                    ? "Salvando..."
                    : d
                    ? "Atualizar"
                    : "Criar Orçamento",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function us({ open: $, onOpenChange: L, quotation: i, onUpdate: d }) {
  const { format: g } = we(),
    { toast: O } = ye(),
    { effectiveUserId: V, authUserId: M, loading: k } = Ce(),
    P = V || M || "";
  if (!i) return null;
  const T = new Date(i.validity_date + "T23:59:59") < new Date(),
    U = async () => {
      const h = `${window.location.origin}/orcamento-publico/${i.access_token}`;
      try {
        await navigator.clipboard.writeText(h),
          O({
            title: "Link copiado!",
            description:
              "O link do orçamento foi copiado para a área de transferência",
          });
      } catch {
        O({
          title: "Erro",
          description: "Falha ao copiar o link",
          variant: "destructive",
        });
      }
    },
    B = async () => {
      try {
        if (k || !P) return;
        const { data: h } = await I.from("user_settings")
          .select("*")
          .eq("user_id", P)
          .maybeSingle();
        await Ve(i, h);
      } catch {
        O({
          title: "Erro",
          description: "Falha ao gerar PDF",
          variant: "destructive",
        });
      }
    },
    b = async (h) => {
      try {
        const f = { status: h };
        h === "approved"
          ? (f.approved_at = new Date().toISOString())
          : (f.rejected_at = new Date().toISOString());
        const { error: R } = await I.from("quotations")
          .update(f)
          .eq("id", i.id);
        if (R) throw R;
        O({
          title: "Sucesso",
          description: `Orçamento ${
            h === "approved" ? "aprovado" : "recusado"
          } com sucesso`,
        }),
          d(),
          L(!1);
      } catch {
        O({
          title: "Erro",
          description: "Falha ao atualizar status",
          variant: "destructive",
        });
      }
    },
    Q = () =>
      i.status === "approved"
        ? e.jsx(C, {
            className: "bg-green-500/20 text-green-700 border-green-500/30",
            children: "Aprovado",
          })
        : i.status === "rejected"
        ? e.jsx(C, {
            className: "bg-red-500/20 text-red-700 border-red-500/30",
            children: "Recusado",
          })
        : T
        ? e.jsx(C, {
            className: "bg-orange-500/20 text-orange-700 border-orange-500/30",
            children: "Expirado",
          })
        : e.jsx(C, {
            className: "bg-blue-500/20 text-blue-700 border-blue-500/30",
            children: "Pendente",
          });
  return e.jsx(Se, {
    open: $,
    onOpenChange: L,
    children: e.jsxs(De, {
      className: "max-w-3xl max-h-[90vh] overflow-y-auto",
      children: [
        e.jsx(Oe, {
          children: e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsxs(ke, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(Te, { className: "h-5 w-5 text-primary" }),
                  "Orçamento ",
                  i.quotation_number,
                ],
              }),
              Q(),
            ],
          }),
        }),
        e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsx(_, {
              children: e.jsxs(y, {
                className: "pt-4",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2 mb-3",
                    children: [
                      e.jsx(Pe, { className: "h-4 w-4 text-primary" }),
                      e.jsx("span", {
                        className: "font-semibold",
                        children: "Dados do Cliente",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-4 text-sm",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("span", {
                            className: "text-muted-foreground",
                            children: "Nome:",
                          }),
                          e.jsx("p", {
                            className: "font-medium",
                            children: i.client_name,
                          }),
                        ],
                      }),
                      i.client_cpf_nif &&
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "CPF/NIF:",
                            }),
                            e.jsx("p", {
                              className: "font-medium",
                              children: i.client_cpf_nif,
                            }),
                          ],
                        }),
                      i.client_phone &&
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "Telefone:",
                            }),
                            e.jsx("p", {
                              className: "font-medium",
                              children: i.client_phone,
                            }),
                          ],
                        }),
                      i.client_address &&
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "Endereço:",
                            }),
                            e.jsx("p", {
                              className: "font-medium",
                              children: i.client_address,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(_, {
              children: e.jsxs(y, {
                className: "pt-4",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2 mb-3",
                    children: [
                      e.jsx($e, { className: "h-4 w-4 text-primary" }),
                      e.jsx("span", {
                        className: "font-semibold",
                        children: "Dados do Aparelho",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-4 text-sm",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("span", {
                            className: "text-muted-foreground",
                            children: "Marca:",
                          }),
                          e.jsx("p", {
                            className: "font-medium",
                            children: i.device_brand,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("span", {
                            className: "text-muted-foreground",
                            children: "Modelo:",
                          }),
                          e.jsx("p", {
                            className: "font-medium",
                            children: i.device_model,
                          }),
                        ],
                      }),
                      i.device_color &&
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "Cor:",
                            }),
                            e.jsx("p", {
                              className: "font-medium",
                              children: i.device_color,
                            }),
                          ],
                        }),
                      i.device_imei &&
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "IMEI:",
                            }),
                            e.jsx("p", {
                              className: "font-medium",
                              children: i.device_imei,
                            }),
                          ],
                        }),
                      i.device_serial &&
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "Série:",
                            }),
                            e.jsx("p", {
                              className: "font-medium",
                              children: i.device_serial,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(_, {
              children: e.jsxs(y, {
                className: "pt-4",
                children: [
                  e.jsx("div", {
                    className: "overflow-x-auto",
                    children: e.jsxs(Ue, {
                      children: [
                        e.jsx(ze, {
                          children: e.jsxs(re, {
                            children: [
                              e.jsx(E, { children: "Serviço" }),
                              e.jsx(E, {
                                className: "text-center",
                                children: "Qtd",
                              }),
                              e.jsx(E, {
                                className: "text-right",
                                children: "Unitário",
                              }),
                              e.jsx(E, {
                                className: "text-right",
                                children: "Total",
                              }),
                            ],
                          }),
                        }),
                        e.jsx(Ge, {
                          children: i.services.map((h, f) =>
                            e.jsxs(
                              re,
                              {
                                children: [
                                  e.jsx(D, { children: h.description }),
                                  e.jsx(D, {
                                    className: "text-center",
                                    children: h.quantity,
                                  }),
                                  e.jsx(D, {
                                    className: "text-right",
                                    children: g(h.unit_price),
                                  }),
                                  e.jsx(D, {
                                    className: "text-right font-medium",
                                    children: g(h.total),
                                  }),
                                ],
                              },
                              f
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                  e.jsx(ss, { className: "my-4" }),
                  e.jsxs("div", {
                    className: "flex flex-col items-end gap-2",
                    children: [
                      e.jsxs("div", {
                        className: "flex justify-between w-48",
                        children: [
                          e.jsx("span", {
                            className: "text-muted-foreground",
                            children: "Subtotal:",
                          }),
                          e.jsx("span", { children: g(i.subtotal) }),
                        ],
                      }),
                      i.discount > 0 &&
                        e.jsxs("div", {
                          className: "flex justify-between w-48",
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "Desconto:",
                            }),
                            e.jsxs("span", {
                              className: "text-red-500",
                              children: ["-", g(i.discount)],
                            }),
                          ],
                        }),
                      e.jsxs("div", {
                        className:
                          "flex justify-between w-48 text-lg font-bold",
                        children: [
                          e.jsx("span", { children: "Total:" }),
                          e.jsx("span", {
                            className: "text-primary",
                            children: g(i.total),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs("div", {
              className: "flex items-center gap-2 text-sm",
              children: [
                e.jsx(as, { className: "h-4 w-4 text-muted-foreground" }),
                e.jsx("span", {
                  className: "text-muted-foreground",
                  children: "Válido até:",
                }),
                e.jsx("span", {
                  className: `font-medium ${T ? "text-red-500" : ""}`,
                  children: ge(
                    new Date(i.validity_date + "T12:00:00"),
                    "dd/MM/yyyy",
                    { locale: _e }
                  ),
                }),
                T &&
                  e.jsx("span", {
                    className: "text-red-500 text-xs",
                    children: "(Expirado)",
                  }),
              ],
            }),
            i.observations &&
              e.jsx(_, {
                children: e.jsxs(y, {
                  className: "pt-4",
                  children: [
                    e.jsx("p", {
                      className: "font-semibold mb-2",
                      children: "Observações",
                    }),
                    e.jsx("p", {
                      className:
                        "text-sm text-muted-foreground whitespace-pre-line",
                      children: i.observations,
                    }),
                  ],
                }),
              }),
            e.jsxs("div", {
              className: "flex flex-wrap gap-3 justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsxs(m, {
                      variant: "outline",
                      onClick: U,
                      children: [
                        e.jsx(de, { className: "h-4 w-4 mr-2" }),
                        "Copiar Link",
                      ],
                    }),
                    e.jsxs(m, {
                      variant: "outline",
                      onClick: B,
                      children: [
                        e.jsx(fe, { className: "h-4 w-4 mr-2" }),
                        "Imprimir PDF",
                      ],
                    }),
                  ],
                }),
                i.status === "pending" &&
                  !T &&
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsxs(m, {
                        variant: "outline",
                        className:
                          "text-red-600 border-red-200 hover:bg-red-50",
                        onClick: () => b("rejected"),
                        children: [
                          e.jsx(Ne, { className: "h-4 w-4 mr-2" }),
                          "Recusar",
                        ],
                      }),
                      e.jsxs(m, {
                        className: "bg-green-600 hover:bg-green-700",
                        onClick: () => b("approved"),
                        children: [
                          e.jsx(be, { className: "h-4 w-4 mr-2" }),
                          "Aprovar",
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
  });
}
function _s() {
  const $ = rs(),
    L = ts(),
    [i, d] = x.useState(null),
    { user: g, loading: O } = ns(),
    { effectiveUserId: V, loading: M } = Ce(),
    k = V || g?.id || "",
    [P, T] = x.useState([]),
    [U, B] = x.useState(!0),
    [b, Q] = x.useState(""),
    [h, f] = x.useState(!1),
    [R, te] = x.useState(!1),
    [oe, me] = x.useState(null),
    [xe, q] = x.useState(null),
    [F, A] = x.useState(!1),
    [u, r] = x.useState(null),
    [p, S] = x.useState(!1),
    { toast: j } = ye(),
    { format: H } = we();
  x.useEffect(() => {
    const a = L.state?.prefillQuotation;
    a && (d(a), q(null), f(!0), $(L.pathname, { replace: !0, state: null }));
  }, [L.state]),
    x.useEffect(() => {
      O || M || !k || J();
    }, [O, M, k]);
  const J = async () => {
      try {
        if (!k) {
          T([]), B(!1);
          return;
        }
        const { data: a, error: c } = await I.from("quotations")
          .select("*")
          .eq("user_id", k)
          .order("created_at", { ascending: !1 });
        if (c) throw c;
        const l = (a || []).map((w) => {
          let W = [];
          try {
            Array.isArray(w.services)
              ? (W = w.services)
              : typeof w.services == "string"
              ? (W = JSON.parse(w.services || "[]"))
              : w.services &&
                typeof w.services == "object" &&
                (W = Object.values(w.services));
          } catch {
            W = [];
          }
          return { ...w, services: W };
        });
        T(l);
      } catch {
        j({
          title: "Erro",
          description: "Falha ao carregar orçamentos",
          variant: "destructive",
        });
      } finally {
        B(!1);
      }
    },
    ne = async (a) => {
      try {
        const { error: c } = await I.from("quotations").delete().eq("id", a);
        if (c) throw c;
        j({ title: "Sucesso", description: "Orçamento excluído com sucesso" }),
          J();
      } catch {
        j({
          title: "Erro",
          description: "Falha ao excluir orçamento",
          variant: "destructive",
        });
      }
    },
    ee = async (a) => {
      const c = `${window.location.origin}/orcamento-publico/${a.access_token}`;
      try {
        await navigator.clipboard.writeText(c),
          j({
            title: "Link copiado!",
            description:
              "O link do orçamento foi copiado para a área de transferência",
          });
      } catch {
        j({
          title: "Erro",
          description: "Falha ao copiar o link",
          variant: "destructive",
        });
      }
    },
    ie = async (a) => {
      try {
        const { data: c } = await I.from("user_settings")
          .select("*")
          .eq("user_id", k)
          .maybeSingle();
        await Ve(a, c);
      } catch {
        j({
          title: "Erro",
          description: "Falha ao gerar PDF",
          variant: "destructive",
        });
      }
    },
    se = (a) => {
      me(a), te(!0);
    },
    le = (a) => {
      r(a), A(!0);
    },
    he = async () => {
      if (u) {
        S(!0);
        try {
          if (!g || !k) throw new Error("Usuário não autenticado");
          const a = u,
            c = a.total.toString(),
            l = a.services
              .map((Le) => `${Le.description} (${Le.quantity}x)`)
              .join("; "),
            w = `OS-${Date.now()}`,
            Be = new Date().toISOString().split("T")[0],
            { data: js, error: Ee } = await I.from("service_orders")
              .insert([
                {
                  user_id: k,
                  order_number: w,
                  type: "repair",
                  client_name: a.client_name,
                  client_cpf: a.client_cpf_nif || "",
                  client_phone: a.client_phone || "",
                  device_model: `${a.device_brand} ${a.device_model}`.trim(),
                  imei: a.device_imei || "",
                  serial: a.device_serial || "",
                  reported_problem: l || "Serviço conforme orçamento aprovado",
                  additional_notes:
                    a.observations ||
                    `Gerado a partir do orçamento ${a.quotation_number}`,
                  service_value: c,
                  entry_date: Be,
                  status: "open",
                  photos: [],
                  history: JSON.stringify([
                    {
                      date: new Date().toISOString(),
                      action: `OS criada a partir do orçamento ${a.quotation_number}`,
                      user: "Sistema",
                    },
                  ]),
                },
              ])
              .select()
              .single();
          if (Ee) throw Ee;
          j({
            title: "OS gerada com sucesso!",
            description: `Ordem de Serviço ${w} criada a partir do orçamento ${a.quotation_number}`,
          }),
            A(!1),
            r(null),
            $("/os");
        } catch (a) {
          j({
            title: "Erro ao gerar OS",
            description: a.message || "Falha ao criar ordem de serviço",
            variant: "destructive",
          });
        } finally {
          S(!1);
        }
      }
    },
    z = P.filter(
      (a) =>
        a.client_name.toLowerCase().includes(b.toLowerCase()) ||
        a.quotation_number.toLowerCase().includes(b.toLowerCase()) ||
        a.device_model.toLowerCase().includes(b.toLowerCase()) ||
        (a.client_cpf_nif && a.client_cpf_nif.includes(b)) ||
        (b.replace(/\D/g, "").length >= 3 &&
          (a.client_cpf_nif || "")
            .replace(/\D/g, "")
            .includes(b.replace(/\D/g, "")))
    ),
    G = z.filter((a) => a.status === "pending"),
    Y = z.filter((a) => a.status === "approved"),
    ae = z.filter((a) => a.status === "rejected"),
    pe = (a) => new Date(a + "T23:59:59") < new Date(),
    s = (a) => {
      const c = new Date();
      c.setHours(0, 0, 0, 0);
      const w = new Date(a + "T23:59:59").getTime() - c.getTime();
      return Math.ceil(w / (1e3 * 60 * 60 * 24));
    },
    t = P.filter((a) => {
      if (a.status !== "pending") return !1;
      const c = s(a.validity_date);
      return c >= 0 && c <= 3;
    }),
    o = (a) =>
      a.status === "approved"
        ? e.jsx(C, {
            className: "bg-green-500/20 text-green-700 border-green-500/30",
            children: "Aprovado",
          })
        : a.status === "rejected"
        ? e.jsx(C, {
            className: "bg-red-500/20 text-red-700 border-red-500/30",
            children: "Recusado",
          })
        : pe(a.validity_date)
        ? e.jsx(C, {
            className: "bg-orange-500/20 text-orange-700 border-orange-500/30",
            children: "Expirado",
          })
        : e.jsx(C, {
            className: "bg-blue-500/20 text-blue-700 border-blue-500/30",
            children: "Pendente",
          }),
    n = (a, c) =>
      e.jsx("div", {
        className: "md:hidden space-y-3",
        children:
          a.length === 0
            ? e.jsx("p", {
                className: "text-center text-sm text-muted-foreground py-8",
                children: "Nenhum orçamento encontrado",
              })
            : a.map((l) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "rounded-2xl border bg-card p-4 space-y-3 shadow-sm",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-start justify-between gap-2",
                        children: [
                          e.jsxs("div", {
                            className: "min-w-0",
                            children: [
                              e.jsx("p", {
                                className: "font-semibold truncate",
                                children: l.client_name,
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-xs text-muted-foreground truncate",
                                children: [
                                  l.quotation_number,
                                  " • ",
                                  l.device_brand,
                                  " ",
                                  l.device_model,
                                ],
                              }),
                            ],
                          }),
                          o(l),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center justify-between text-sm",
                        children: [
                          e.jsx("span", {
                            className: "text-muted-foreground",
                            children: (() => {
                              try {
                                return `Válido até ${ge(
                                  new Date(l.validity_date + "T12:00:00"),
                                  "dd/MM/yyyy",
                                  { locale: _e }
                                )}`;
                              } catch {
                                return l.validity_date || "-";
                              }
                            })(),
                          }),
                          e.jsx("span", {
                            className: "font-bold text-primary",
                            children: H(l.total),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-wrap items-center gap-2 pt-1 border-t",
                        children: [
                          c &&
                            e.jsxs(m, {
                              size: "sm",
                              className: "gap-1 rounded-xl",
                              onClick: () => le(l),
                              children: [
                                e.jsx(ce, { className: "h-4 w-4" }),
                                " Gerar OS",
                              ],
                            }),
                          e.jsx(m, {
                            variant: "outline",
                            size: "icon",
                            className: "rounded-xl",
                            onClick: () => se(l),
                            children: e.jsx(Ie, { className: "h-4 w-4" }),
                          }),
                          e.jsx(m, {
                            variant: "outline",
                            size: "icon",
                            className: "rounded-xl",
                            onClick: () => ee(l),
                            children: e.jsx(de, { className: "h-4 w-4" }),
                          }),
                          e.jsx(m, {
                            variant: "outline",
                            size: "icon",
                            className: "rounded-xl",
                            onClick: () => ie(l),
                            children: e.jsx(fe, { className: "h-4 w-4" }),
                          }),
                          e.jsx(m, {
                            variant: "outline",
                            size: "icon",
                            className: "rounded-xl text-destructive ml-auto",
                            onClick: () => ne(l.id),
                            children: e.jsx(ve, { className: "h-4 w-4" }),
                          }),
                        ],
                      }),
                    ],
                  },
                  l.id
                )
              ),
      }),
    K = (a, c = !1) =>
      e.jsxs(e.Fragment, {
        children: [
          n(a, c),
          e.jsx("div", {
            className: "hidden md:block overflow-x-auto rounded-xl border",
            children: e.jsxs(Ue, {
              children: [
                e.jsx(ze, {
                  children: e.jsxs(re, {
                    children: [
                      e.jsx(E, { children: "Nº" }),
                      e.jsx(E, { children: "Cliente" }),
                      e.jsx(E, {
                        className: "hidden md:table-cell",
                        children: "Aparelho",
                      }),
                      e.jsx(E, {
                        className: "hidden lg:table-cell",
                        children: "Validade",
                      }),
                      e.jsx(E, { children: "Total" }),
                      e.jsx(E, { children: "Status" }),
                      e.jsx(E, { className: "text-right", children: "Ações" }),
                    ],
                  }),
                }),
                e.jsx(Ge, {
                  children:
                    a.length === 0
                      ? e.jsx(re, {
                          children: e.jsx(D, {
                            colSpan: 7,
                            className: "text-center text-muted-foreground py-8",
                            children: "Nenhum orçamento encontrado",
                          }),
                        })
                      : a.map((l) =>
                          e.jsxs(
                            re,
                            {
                              children: [
                                e.jsx(D, {
                                  className: "font-medium",
                                  children: l.quotation_number,
                                }),
                                e.jsx(D, { children: l.client_name }),
                                e.jsxs(D, {
                                  className: "hidden md:table-cell",
                                  children: [
                                    l.device_brand,
                                    " ",
                                    l.device_model,
                                  ],
                                }),
                                e.jsx(D, {
                                  className: "hidden lg:table-cell",
                                  children: (() => {
                                    try {
                                      return ge(
                                        new Date(l.validity_date + "T12:00:00"),
                                        "dd/MM/yyyy",
                                        { locale: _e }
                                      );
                                    } catch {
                                      return l.validity_date || "-";
                                    }
                                  })(),
                                }),
                                e.jsx(D, { children: H(l.total) }),
                                e.jsx(D, { children: o(l) }),
                                e.jsx(D, {
                                  children: e.jsxs("div", {
                                    className:
                                      "flex items-center justify-end gap-1",
                                    children: [
                                      c &&
                                        e.jsxs(m, {
                                          variant: "default",
                                          size: "sm",
                                          onClick: () => le(l),
                                          title: "Gerar Ordem de Serviço",
                                          className: "gap-1 mr-1",
                                          children: [
                                            e.jsx(ce, { className: "h-4 w-4" }),
                                            e.jsx("span", {
                                              className: "hidden sm:inline",
                                              children: "Gerar OS",
                                            }),
                                          ],
                                        }),
                                      e.jsx(m, {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: () => se(l),
                                        title: "Visualizar",
                                        children: e.jsx(Ie, {
                                          className: "h-4 w-4",
                                        }),
                                      }),
                                      e.jsx(m, {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: () => ee(l),
                                        title: "Copiar link",
                                        children: e.jsx(de, {
                                          className: "h-4 w-4",
                                        }),
                                      }),
                                      e.jsx(m, {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: () => ie(l),
                                        title: "Imprimir PDF",
                                        children: e.jsx(fe, {
                                          className: "h-4 w-4",
                                        }),
                                      }),
                                      e.jsx(m, {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: () => ne(l.id),
                                        title: "Excluir",
                                        className:
                                          "text-destructive hover:text-destructive",
                                        children: e.jsx(ve, {
                                          className: "h-4 w-4",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            l.id
                          )
                        ),
                }),
              ],
            }),
          }),
        ],
      });
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("div", {
        className: "flex-1 p-4 md:p-6 overflow-auto",
        children: e.jsxs("div", {
          className: "max-w-7xl mx-auto space-y-6",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col md:flex-row md:items-center justify-between gap-4",
              children: [
                e.jsx("div", {
                  className: "flex items-center gap-3",
                  children: e.jsxs("div", {
                    children: [
                      e.jsx("h1", {
                        className:
                          "text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent",
                        children: "Orçamentos",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children:
                          "Gerencie orçamentos de serviços para clientes",
                      }),
                    ],
                  }),
                }),
                e.jsxs(m, {
                  onClick: () => {
                    q(null), f(!0);
                  },
                  className: "gap-2",
                  children: [
                    e.jsx(Me, { className: "h-4 w-4" }),
                    "Novo Orçamento",
                  ],
                }),
              ],
            }),
            t.length > 0 &&
              e.jsxs(is, {
                className: "border-amber-500/50 bg-amber-500/10",
                children: [
                  e.jsx(ls, { className: "h-4 w-4 text-amber-600" }),
                  e.jsx(cs, {
                    className: "text-amber-700 dark:text-amber-400",
                    children: "Orçamentos prestes a expirar",
                  }),
                  e.jsx(ds, {
                    className: "text-amber-600 dark:text-amber-300",
                    children: e.jsx("div", {
                      className: "mt-2 space-y-2",
                      children: t.map((a) => {
                        const c = s(a.validity_date);
                        return e.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center justify-between gap-4 p-2 rounded-md bg-amber-500/10",
                            children: [
                              e.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  e.jsx("span", {
                                    className: "font-medium",
                                    children: a.quotation_number,
                                  }),
                                  e.jsxs("span", {
                                    className: "text-sm ml-2",
                                    children: ["- ", a.client_name],
                                  }),
                                  e.jsxs("span", {
                                    className: "text-sm ml-2",
                                    children: [
                                      "(",
                                      a.device_brand,
                                      " ",
                                      a.device_model,
                                      ")",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(C, {
                                    variant: "outline",
                                    className:
                                      c === 0
                                        ? "border-red-500 text-red-600"
                                        : "border-amber-500 text-amber-600",
                                    children:
                                      c === 0
                                        ? "Expira hoje!"
                                        : c === 1
                                        ? "Expira amanhã"
                                        : `${c} dias restantes`,
                                  }),
                                  e.jsxs(m, {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: () => ee(a),
                                    className: "h-7 px-2",
                                    children: [
                                      e.jsx(de, { className: "h-3 w-3 mr-1" }),
                                      "Enviar",
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
              }),
            e.jsxs("div", {
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
              children: [
                e.jsx(_, {
                  className:
                    "bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20",
                  children: e.jsx(y, {
                    className: "p-4",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className: "p-2 rounded-lg bg-blue-500/20",
                          children: e.jsx(Fe, {
                            className: "h-5 w-5 text-blue-600",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "text-2xl font-bold",
                              children: G.length,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Pendentes",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx(_, {
                  className:
                    "bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20",
                  children: e.jsx(y, {
                    className: "p-4",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className: "p-2 rounded-lg bg-green-500/20",
                          children: e.jsx(be, {
                            className: "h-5 w-5 text-green-600",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "text-2xl font-bold",
                              children: Y.length,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Aprovados",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx(_, {
                  className:
                    "bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20",
                  children: e.jsx(y, {
                    className: "p-4",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className: "p-2 rounded-lg bg-red-500/20",
                          children: e.jsx(Ne, {
                            className: "h-5 w-5 text-red-600",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "text-2xl font-bold",
                              children: ae.length,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Recusados",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx(_, {
                  className:
                    "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20",
                  children: e.jsx(y, {
                    className: "p-4",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className: "p-2 rounded-lg bg-primary/20",
                          children: e.jsx(Te, {
                            className: "h-5 w-5 text-primary",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "text-2xl font-bold",
                              children: P.length,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Total",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            e.jsxs(_, {
              children: [
                e.jsx(X, {
                  className: "pb-3",
                  children: e.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row md:items-center justify-between gap-4",
                    children: [
                      e.jsx(Z, { children: "Lista de Orçamentos" }),
                      e.jsxs("div", {
                        className: "relative w-full md:w-80",
                        children: [
                          e.jsx(Ae, {
                            className:
                              "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                          }),
                          e.jsx(v, {
                            placeholder:
                              "Buscar por cliente, número, aparelho...",
                            value: b,
                            onChange: (a) => Q(a.target.value),
                            className: "pl-10",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(y, {
                  children: e.jsxs(os, {
                    defaultValue: "pending",
                    className: "w-full",
                    children: [
                      e.jsxs(ms, {
                        className: "grid w-full grid-cols-3 mb-4",
                        children: [
                          e.jsxs(ue, {
                            value: "pending",
                            className: "gap-2",
                            children: [
                              e.jsx(Fe, { className: "h-4 w-4" }),
                              e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Pendentes",
                              }),
                              e.jsx("span", {
                                className: "sm:hidden",
                                children: "Pend.",
                              }),
                              e.jsx(C, {
                                variant: "secondary",
                                className: "ml-1",
                                children: G.length,
                              }),
                            ],
                          }),
                          e.jsxs(ue, {
                            value: "approved",
                            className: "gap-2",
                            children: [
                              e.jsx(be, { className: "h-4 w-4" }),
                              e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Aprovados",
                              }),
                              e.jsx("span", {
                                className: "sm:hidden",
                                children: "Aprov.",
                              }),
                              e.jsx(C, {
                                variant: "secondary",
                                className: "ml-1",
                                children: Y.length,
                              }),
                            ],
                          }),
                          e.jsxs(ue, {
                            value: "rejected",
                            className: "gap-2",
                            children: [
                              e.jsx(Ne, { className: "h-4 w-4" }),
                              e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Recusados",
                              }),
                              e.jsx("span", {
                                className: "sm:hidden",
                                children: "Recus.",
                              }),
                              e.jsx(C, {
                                variant: "secondary",
                                className: "ml-1",
                                children: ae.length,
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx(je, { value: "pending", children: K(G, !1) }),
                      e.jsx(je, { value: "approved", children: K(Y, !0) }),
                      e.jsx(je, { value: "rejected", children: K(ae, !1) }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(ps, {
        open: h,
        onOpenChange: (a) => {
          f(a), a || d(null);
        },
        onSuccess: J,
        editingQuotation: xe,
        prefill: i,
      }),
      e.jsx(us, { open: R, onOpenChange: te, quotation: oe, onUpdate: J }),
      e.jsx(Se, {
        open: F,
        onOpenChange: A,
        children: e.jsxs(De, {
          className: "max-w-lg",
          children: [
            e.jsxs(Oe, {
              children: [
                e.jsxs(ke, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(ce, { className: "h-5 w-5 text-primary" }),
                    "Gerar Ordem de Serviço",
                  ],
                }),
                e.jsx(xs, {
                  children:
                    "Criar uma nova OS com os dados do orçamento aprovado",
                }),
              ],
            }),
            u &&
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsxs("div", {
                    className: "bg-muted/50 rounded-lg p-4 space-y-3",
                    children: [
                      e.jsxs("div", {
                        className: "grid grid-cols-2 gap-4 text-sm",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Orçamento",
                              }),
                              e.jsx("p", {
                                className: "font-medium",
                                children: u.quotation_number,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Valor Total",
                              }),
                              e.jsx("p", {
                                className: "font-medium text-primary",
                                children: H(u.total),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "border-t pt-3",
                        children: [
                          e.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "Cliente",
                          }),
                          e.jsx("p", {
                            className: "font-medium",
                            children: u.client_name,
                          }),
                          u.client_phone &&
                            e.jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children: u.client_phone,
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "border-t pt-3",
                        children: [
                          e.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "Aparelho",
                          }),
                          e.jsxs("p", {
                            className: "font-medium",
                            children: [u.device_brand, " ", u.device_model],
                          }),
                          u.device_imei &&
                            e.jsxs("p", {
                              className: "text-xs text-muted-foreground",
                              children: ["IMEI: ", u.device_imei],
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "border-t pt-3",
                        children: [
                          e.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "Serviços",
                          }),
                          e.jsx("ul", {
                            className: "text-sm space-y-1 mt-1",
                            children: u.services.map((a, c) =>
                              e.jsxs(
                                "li",
                                {
                                  className: "flex justify-between",
                                  children: [
                                    e.jsxs("span", {
                                      children: [
                                        a.description,
                                        " (",
                                        a.quantity,
                                        "x)",
                                      ],
                                    }),
                                    e.jsx("span", {
                                      className: "text-muted-foreground",
                                      children: H(a.total),
                                    }),
                                  ],
                                },
                                c
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children:
                      'Uma nova Ordem de Serviço será criada com status "Aberta" e você será redirecionado para a página de OS.',
                  }),
                ],
              }),
            e.jsxs(hs, {
              children: [
                e.jsx(m, {
                  variant: "outline",
                  onClick: () => A(!1),
                  disabled: p,
                  children: "Cancelar",
                }),
                e.jsx(m, {
                  onClick: he,
                  disabled: p,
                  className: "gap-2",
                  children: p
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("span", {
                            className: "animate-spin",
                            children: "⏳",
                          }),
                          "Gerando...",
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(ce, { className: "h-4 w-4" }),
                          "Gerar OS",
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
export { _s as default };
