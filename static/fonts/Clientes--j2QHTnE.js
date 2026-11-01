import {
  r as m,
  cm as ye,
  j as e,
  D as ie,
  c as le,
  a_ as oe,
  d as ce,
  n as _,
  K as Ce,
  bJ as we,
  I as F,
  b5 as K,
  b6 as Q,
  b7 as Y,
  b8 as Z,
  b9 as L,
  T as ke,
  c7 as De,
  B as u,
  cn as Se,
  co as _e,
  cp as Ee,
  cq as ee,
  cr as Te,
  z as de,
  cf as me,
  w as E,
  cs as xe,
  a9 as he,
  aa as B,
  bz as Fe,
  N as Pe,
  bQ as se,
  ct as Ie,
  c0 as Le,
  G as $,
  bn as $e,
  bo as Oe,
  bp as ze,
  bq as Ae,
  br as qe,
  bs as Ue,
  bt as Be,
  bu as Xe,
  ce as Ve,
  i as Re,
  cu as We,
  cv as ae,
  bA as V,
  cw as Me,
  m as Ge,
  b2 as Je,
  cx as He,
  cy as Ke,
  a8 as Qe,
  cz as te,
  bm as re,
  cA as Ye,
  cB as Ze,
} from "./index-V8ZHCWL2.js";
const es = (c) =>
    c
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1"),
  ss = (c) => {
    let x = c.replace(/[^\d+]/g, "");
    return (
      x.startsWith("+") || (x = "+" + x.replace(/\+/g, "")), x.substring(0, 16)
    );
  };
function ne({ open: c, onOpenChange: x, onSave: r, client: l }) {
  const [g, d] = m.useState("pessoa"),
    [i, f] = m.useState("cpf"),
    [w, j] = m.useState("nacional"),
    v = {
      cpf: {
        label: "CPF",
        placeholder: "000.000.000-00",
        maxLength: 14,
        mask: Ee,
      },
      nif: {
        label: "NIF",
        placeholder: "000 000 000",
        maxLength: 11,
        mask: ee,
      },
      cnpj: {
        label: "CNPJ",
        placeholder: "00.000.000/0000-00",
        maxLength: 18,
        mask: Te,
      },
      nipc: {
        label: "NIPC",
        placeholder: "000 000 000",
        maxLength: 11,
        mask: ee,
      },
    },
    P = v[i] ?? v.cpf,
    {
      register: N,
      handleSubmit: b,
      reset: k,
      setValue: D,
      formState: { errors: S },
    } = ye({ resolver: Se(_e) });
  m.useEffect(() => {
    if (l) {
      const a = l.cpf?.replace(/\D/g, "") || "",
        p = l.documentType;
      p === "cnpj" || a.length === 14
        ? (d("empresa"), f("cnpj"))
        : p === "nipc"
        ? (d("empresa"), f("nipc"))
        : p === "nif" || a.length === 9
        ? (d("pessoa"), f("nif"))
        : (d("pessoa"), f("cpf")),
        l.phone?.startsWith("+") && !l.phone?.startsWith("+55")
          ? j("internacional")
          : j("nacional"),
        k({
          name: l.name || "",
          cpf: l.cpf || "",
          phone: l.phone || "",
          email: l.email || "",
          address: l.address || "",
          city: l.city || "",
          balance: l.balance || "",
          notes: l.notes || "",
          birth_date: l.birth_date || "",
        });
    } else
      d("pessoa"),
        f("cpf"),
        j("nacional"),
        k({
          name: "",
          cpf: "",
          phone: "",
          email: "",
          address: "",
          city: "",
          balance: "",
          notes: "",
          birth_date: "",
        });
  }, [l, k]);
  const I = (a) => {
      let p = a.phone?.trim() || void 0;
      p &&
        w === "nacional" &&
        !p.startsWith("+") &&
        (p.replace(/\D/g, ""), (p = `+55 ${p}`));
      const X = {
        name: a.name.trim(),
        cpf: a.cpf?.trim() || void 0,
        phone: p,
        email: a.email?.trim() || void 0,
        address: a.address?.trim() || void 0,
        city: a.city?.trim() || void 0,
        balance: a.balance?.trim() || void 0,
        notes: a.notes?.trim() || void 0,
        birth_date: g === "empresa" ? null : a.birth_date?.trim() || null,
        documentType: i,
      };
      r(X), k();
    },
    O = (a) => {
      a.target.value = P.mask(a.target.value);
    },
    T = (a) => {
      d(a),
        f(
          a === "empresa"
            ? i === "nif"
              ? "nipc"
              : "cnpj"
            : i === "nipc"
            ? "nif"
            : "cpf"
        ),
        D("cpf", "");
    },
    h = (a) => {
      w === "nacional"
        ? (a.target.value = es(a.target.value))
        : (a.target.value = ss(a.target.value));
    };
  return e.jsx(ie, {
    open: c,
    onOpenChange: x,
    children: e.jsxs(le, {
      className: "max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto",
      children: [
        e.jsx(oe, {
          children: e.jsx(ce, {
            children: l ? "Editar Cliente" : "Novo Cliente",
          }),
        }),
        e.jsxs("form", {
          onSubmit: b(I),
          children: [
            e.jsxs("div", {
              className: "grid gap-4 py-4",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(_, { children: "Tipo de Cadastro" }),
                    e.jsxs("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => T("pessoa"),
                          className: `flex items-center justify-center gap-2 rounded-md border p-3 text-sm transition ${
                            g === "pessoa"
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-input hover:bg-accent"
                          }`,
                          children: [
                            e.jsx(Ce, { className: "w-4 h-4" }),
                            " Pessoa Física",
                          ],
                        }),
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => T("empresa"),
                          className: `flex items-center justify-center gap-2 rounded-md border p-3 text-sm transition ${
                            g === "empresa"
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-input hover:bg-accent"
                          }`,
                          children: [
                            e.jsx(we, { className: "w-4 h-4" }),
                            " Empresa",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(_, {
                      htmlFor: "name",
                      children:
                        g === "empresa"
                          ? "Razão Social / Nome Fantasia *"
                          : "Nome Completo *",
                    }),
                    e.jsx(F, {
                      id: "name",
                      ...N("name"),
                      placeholder:
                        g === "empresa" ? "Nome da empresa" : "Nome do cliente",
                    }),
                    S.name &&
                      e.jsx("p", {
                        className: "text-sm text-destructive",
                        children: S.name.message,
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(_, { children: "Tipo de Documento" }),
                        e.jsxs(
                          K,
                          {
                            value: i,
                            onValueChange: (a) => {
                              f(a), D("cpf", "");
                            },
                            children: [
                              e.jsx(Q, {
                                children: e.jsxs(Y, {
                                  children: [
                                    i === "cpf" && "CPF (Brasil - 11 dígitos)",
                                    i === "nif" && "NIF (Portugal - 9 dígitos)",
                                    i === "cnpj" &&
                                      "CNPJ (Brasil - 14 dígitos)",
                                    i === "nipc" &&
                                      "NIPC (Portugal - 9 dígitos)",
                                  ],
                                }),
                              }),
                              e.jsx(Z, {
                                children:
                                  g === "pessoa"
                                    ? e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx(L, {
                                            value: "cpf",
                                            children:
                                              "CPF (Brasil - 11 dígitos)",
                                          }),
                                          e.jsx(L, {
                                            value: "nif",
                                            children:
                                              "NIF (Portugal - 9 dígitos)",
                                          }),
                                        ],
                                      })
                                    : e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx(L, {
                                            value: "cnpj",
                                            children:
                                              "CNPJ (Brasil - 14 dígitos)",
                                          }),
                                          e.jsx(L, {
                                            value: "nipc",
                                            children:
                                              "NIPC (Portugal - 9 dígitos)",
                                          }),
                                        ],
                                      }),
                              }),
                            ],
                          },
                          g
                        ),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(_, { htmlFor: "cpf", children: P.label }),
                        e.jsx(F, {
                          id: "cpf",
                          ...N("cpf"),
                          placeholder: P.placeholder,
                          onChange: O,
                          maxLength: P.maxLength,
                        }),
                        S.cpf &&
                          e.jsx("p", {
                            className: "text-sm text-destructive",
                            children: S.cpf.message,
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(_, { children: "Tipo de Telefone" }),
                        e.jsxs(K, {
                          value: w,
                          onValueChange: (a) => {
                            j(a), D("phone", "");
                          },
                          children: [
                            e.jsx(Q, { children: e.jsx(Y, {}) }),
                            e.jsxs(Z, {
                              children: [
                                e.jsx(L, {
                                  value: "nacional",
                                  children: "Nacional (Brasil +55)",
                                }),
                                e.jsx(L, {
                                  value: "internacional",
                                  children: "Internacional (+XXX)",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(_, { htmlFor: "phone", children: "Telefone" }),
                        e.jsx(F, {
                          id: "phone",
                          ...N("phone"),
                          placeholder:
                            w === "nacional"
                              ? "(00) 00000-0000"
                              : "+351 XXX XXX XXX",
                          onChange: h,
                          maxLength: w === "nacional" ? 15 : 16,
                        }),
                        S.phone &&
                          e.jsx("p", {
                            className: "text-sm text-destructive",
                            children: S.phone.message,
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(_, { htmlFor: "email", children: "Email" }),
                    e.jsx(F, {
                      id: "email",
                      type: "email",
                      ...N("email"),
                      placeholder: "email@exemplo.com",
                    }),
                    S.email &&
                      e.jsx("p", {
                        className: "text-sm text-destructive",
                        children: S.email.message,
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(_, { htmlFor: "address", children: "Endereço" }),
                    e.jsx(F, {
                      id: "address",
                      ...N("address"),
                      placeholder: "Rua, número, bairro",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(_, { htmlFor: "city", children: "Cidade" }),
                    e.jsx(F, {
                      id: "city",
                      ...N("city"),
                      placeholder: "Cidade - Estado/País",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: [
                    g === "pessoa" &&
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(_, {
                            htmlFor: "birth_date",
                            children: "Data de Nascimento",
                          }),
                          e.jsx(F, {
                            id: "birth_date",
                            type: "date",
                            ...N("birth_date"),
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children:
                              "Usado para parabenizar aniversariantes 🎉",
                          }),
                        ],
                      }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(_, {
                          htmlFor: "balance",
                          children: "Saldo (Débito/Crédito)",
                        }),
                        e.jsx(F, {
                          id: "balance",
                          ...N("balance"),
                          placeholder: "Ex: -100,00 ou +50,00",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(_, { htmlFor: "notes", children: "Observações" }),
                    e.jsx(ke, {
                      id: "notes",
                      ...N("notes"),
                      placeholder: "Observações sobre o cliente",
                      rows: 3,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(De, {
              children: [
                e.jsx(u, {
                  type: "button",
                  variant: "outline",
                  onClick: () => x(!1),
                  children: "Cancelar",
                }),
                e.jsx(u, {
                  type: "submit",
                  children: l ? "Salvar Alterações" : "Adicionar Cliente",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function as({ open: c, onOpenChange: x, client: r }) {
  const { user: l } = de(),
    { effectiveUserId: g } = me(),
    [d, i] = m.useState(!1),
    [f, w] = m.useState({
      totalOS: 0,
      warranties: 0,
      completed: 0,
      avgValue: 0,
    });
  m.useEffect(() => {
    i(!1), c && r && l && g && j();
  }, [c, r, l, g]);
  const j = async () => {
    if (!r || !l || !g) return;
    let b = E.from("service_orders").select("*").eq("user_id", g);
    r.cpf ? (b = b.eq("client_cpf", r.cpf)) : (b = b.eq("client_name", r.name));
    const { data: k } = await b;
    if (k) {
      const D = k.length,
        S = k.filter((h) => h.is_warranty).length,
        I = k.filter((h) => h.status === "completed").length,
        O = k.reduce((h, a) => {
          const p = parseFloat(
            a.service_value?.replace(/[^\d,]/g, "").replace(",", ".") || "0"
          );
          return h + p;
        }, 0),
        T = D > 0 ? O / D : 0;
      w({ totalOS: D, warranties: S, completed: I, avgValue: T });
    }
  };
  if (!r) return null;
  const v = r.email || "Não informado",
    P = r.phone || "Não informado",
    N = (d ? r.cpf : xe(r.cpf)) || "Não informado";
  return e.jsx(ie, {
    open: c,
    onOpenChange: x,
    children: e.jsxs(le, {
      className: "max-w-[95vw] md:max-w-3xl max-h-[95vh] overflow-y-auto",
      children: [
        e.jsx(oe, { children: e.jsx(ce, { children: "Detalhes do Cliente" }) }),
        e.jsxs("div", {
          className: "space-y-6 py-4",
          children: [
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground mb-1",
                      children: "ID do Cliente",
                    }),
                    e.jsx("p", {
                      className: "font-mono text-primary font-semibold text-xs",
                      children: r.id,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground mb-1",
                      children: "CPF / Documento",
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx("p", { className: "font-mono", children: N }),
                        r.cpf &&
                          e.jsx(u, {
                            variant: "ghost",
                            size: "icon",
                            title: d
                              ? "Ocultar documento"
                              : "Mostrar documento completo",
                            "aria-label": d
                              ? "Ocultar documento"
                              : "Mostrar documento completo",
                            onClick: () => i((b) => !b),
                            children: d
                              ? e.jsx(he, { className: "h-4 w-4" })
                              : e.jsx(B, { className: "h-4 w-4" }),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className: "text-sm text-muted-foreground mb-1",
                  children: "Nome Completo",
                }),
                e.jsx("p", {
                  className: "text-lg font-semibold",
                  children: r.name,
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className: "text-sm text-muted-foreground mb-1",
                  children: "Data de nascimento",
                }),
                e.jsx("p", {
                  children: r.birth_date
                    ? r.birth_date.split("-").reverse().join("/")
                    : "Não informada",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center gap-3 p-4 bg-secondary/30 rounded-lg",
                  children: [
                    e.jsx(Fe, { className: "w-5 h-5 text-primary" }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Telefone",
                        }),
                        e.jsx("p", { className: "font-medium", children: P }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-3 p-4 bg-secondary/30 rounded-lg",
                  children: [
                    e.jsx(Pe, { className: "w-5 h-5 text-primary" }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Email",
                        }),
                        e.jsx("p", {
                          className: "font-medium text-sm",
                          children: v,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.address &&
              e.jsxs("div", {
                className:
                  "flex items-start gap-3 p-4 bg-secondary/30 rounded-lg",
                children: [
                  e.jsx(se, { className: "w-5 h-5 text-primary mt-1" }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground mb-1",
                        children: "Endereço",
                      }),
                      e.jsx("p", { className: "text-sm", children: r.address }),
                    ],
                  }),
                ],
              }),
            r.city &&
              e.jsxs("div", {
                className:
                  "flex items-start gap-3 p-4 bg-secondary/30 rounded-lg",
                children: [
                  e.jsx(se, { className: "w-5 h-5 text-primary mt-1" }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground mb-1",
                        children: "Cidade",
                      }),
                      e.jsx("p", { className: "text-sm", children: r.city }),
                    ],
                  }),
                ],
              }),
            r.balance &&
              e.jsx("div", {
                className:
                  "flex items-center gap-3 p-4 bg-secondary/30 rounded-lg",
                children: e.jsxs("div", {
                  className: "flex-1",
                  children: [
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground mb-1",
                      children: "Saldo",
                    }),
                    e.jsx("p", {
                      className: "text-lg font-bold text-primary",
                      children: r.balance,
                    }),
                  ],
                }),
              }),
            r.notes &&
              e.jsxs("div", {
                className: "p-4 bg-secondary/30 rounded-lg",
                children: [
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground mb-1",
                    children: "Observações",
                  }),
                  e.jsx("p", { className: "text-sm", children: r.notes }),
                ],
              }),
            e.jsx(Ie, {}),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("h3", {
                  className: "text-lg font-semibold flex items-center gap-2",
                  children: [
                    e.jsx(Le, { className: "w-5 h-5 text-primary" }),
                    "Estatísticas",
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                  children: [
                    e.jsxs($, {
                      className: "p-4 bg-primary/5 border-primary/20",
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Total de OS",
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-bold text-primary",
                          children: f.totalOS,
                        }),
                      ],
                    }),
                    e.jsxs($, {
                      className: "p-4 bg-green-500/5 border-green-500/20",
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Concluídas",
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-bold text-green-600",
                          children: f.completed,
                        }),
                      ],
                    }),
                    e.jsxs($, {
                      className: "p-4 bg-orange-500/5 border-orange-500/20",
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Garantias",
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-bold text-orange-600",
                          children: f.warranties,
                        }),
                      ],
                    }),
                    e.jsxs($, {
                      className: "p-4 bg-blue-500/5 border-blue-500/20",
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Ticket Médio",
                        }),
                        e.jsxs("p", {
                          className: "text-lg font-bold text-blue-600",
                          children: ["R$ ", f.avgValue.toFixed(2)],
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
  });
}
function ts({ open: c, onOpenChange: x, onConfirm: r, clientName: l }) {
  return e.jsx($e, {
    open: c,
    onOpenChange: x,
    children: e.jsxs(Oe, {
      children: [
        e.jsxs(ze, {
          children: [
            e.jsx(Ae, { children: "Confirmar Exclusão" }),
            e.jsxs(qe, {
              children: [
                "Tem certeza que deseja excluir o cliente ",
                e.jsx("span", {
                  className: "font-semibold text-foreground",
                  children: l,
                }),
                "? Esta ação não pode ser desfeita e todo o histórico será perdido.",
              ],
            }),
          ],
        }),
        e.jsxs(Ue, {
          children: [
            e.jsx(Be, { children: "Cancelar" }),
            e.jsx(Xe, {
              onClick: r,
              className: "bg-destructive hover:bg-destructive/90",
              children: "Excluir",
            }),
          ],
        }),
      ],
    }),
  });
}
const ns = () => {
  const { user: c } = de(),
    {
      effectiveUserId: x,
      isEmployee: r,
      employeeId: l,
      employeeName: g,
    } = me(),
    d = x || c?.id || "";
  Ve();
  const { toast: i } = Re(),
    { currency: f } = We(),
    [w, j] = m.useState([]),
    [v, P] = m.useState(""),
    [N, b] = m.useState(!1),
    [k, D] = m.useState(!1),
    [S, I] = m.useState(!1),
    [O, T] = m.useState(!1),
    [h, a] = m.useState(null),
    [p, X] = m.useState(null),
    [R, A] = m.useState(!1),
    [q, pe] = m.useState(!1),
    [W, M] = m.useState(!1);
  m.useEffect(() => {
    if (c && d) return G(), ue();
  }, [c, d]);
  const G = async () => {
      if (c)
        try {
          const { data: s, error: t } = await E.from("clients")
            .select("*")
            .eq("user_id", d)
            .order("created_at", { ascending: !1 });
          if (t) throw t;
          j(s || []);
        } catch {
          i({ title: "Erro ao carregar clientes", variant: "destructive" });
        }
    },
    ue = () => {
      if (!c) return;
      let s;
      const t = () => {
          s && clearTimeout(s),
            (s = setTimeout(() => {
              G();
            }, 600));
        },
        n = E.channel(`clients-${d}`)
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "clients",
              filter: `user_id=eq.${d}`,
            },
            t
          )
          .subscribe((y) => {}),
        o = setInterval(t, 15e3);
      return (
        window.addEventListener("focus", t),
        () => {
          s && clearTimeout(s),
            clearInterval(o),
            window.removeEventListener("focus", t),
            E.removeChannel(n);
        }
      );
    },
    z = w.filter(
      (s) =>
        s.name.toLowerCase().includes(v.toLowerCase()) ||
        s.email?.toLowerCase().includes(v.toLowerCase()) ||
        s.cpf?.includes(v) ||
        s.phone?.includes(v) ||
        (v.replace(/\D/g, "").length >= 3 &&
          (s.cpf || "").replace(/\D/g, "").includes(v.replace(/\D/g, ""))) ||
        (v.replace(/\D/g, "").length >= 3 &&
          (s.phone || "").replace(/\D/g, "").includes(v.replace(/\D/g, "")))
    ),
    ge = async (s) => {
      if (!c) return;
      const t = `temp-${Date.now()}`,
        n = {
          id: t,
          name: s.name,
          cpf: s.cpf || null,
          email: s.email || null,
          phone: s.phone || null,
          address: s.address || null,
          city: s.city || null,
        };
      j((o) => [n, ...o]);
      try {
        const o = {
            user_id: d,
            name: s.name,
            cpf: s.cpf || null,
            email: s.email || null,
            phone: s.phone || null,
            address: s.address || null,
            city: s.city || null,
            birth_date: s.birth_date || null,
          },
          { data: y, error: C } = await E.from("clients").insert(o).select();
        if (C) throw C;
        const U = y?.[0];
        U && j((be) => be.map((H) => (H.id === t ? U : H))),
          r &&
            (await Ye({
              ownerId: d,
              employeeId: l,
              employeeName: g,
              actionType: "cliente_criado",
              description: `Cliente cadastrado: ${s.name}`,
            })),
          i({
            title: "Cliente adicionado",
            description: `${s.name} foi cadastrado com sucesso.`,
          }),
          b(!1),
          fe();
      } catch (o) {
        j((y) => y.filter((C) => C.id !== t)),
          i({
            title: "Erro ao criar cliente",
            description: o.message || "Erro desconhecido",
            variant: "destructive",
          });
      }
    },
    fe = () => {
      a(null);
    },
    je = async (s) => {
      if (!h) return;
      const t = [...w];
      j((n) => n.map((o) => (o.id === h.id ? { ...o, ...s } : o)));
      try {
        const { error: n } = await E.from("clients").update(s).eq("id", h.id);
        if (n) throw n;
        i({
          title: "Cliente atualizado",
          description: "As alterações foram salvas com sucesso.",
        }),
          D(!1),
          a(null);
      } catch {
        j(t), i({ title: "Erro ao atualizar cliente", variant: "destructive" });
      }
    },
    ve = async (s) => {
      const t = [...w];
      j((n) => n.filter((o) => o.id !== s));
      try {
        const { error: n } = await E.from("clients").delete().eq("id", s);
        if (n) throw n;
        i({
          title: "Cliente removido",
          description: "O cliente foi excluído do sistema.",
        }),
          T(!1),
          a(null);
      } catch {
        j(t), i({ title: "Erro ao deletar cliente", variant: "destructive" });
      }
    },
    J = (s) => {
      if (!s.phone) {
        i({
          title: "Telefone não cadastrado",
          description: "Este cliente não possui um número de telefone.",
          variant: "destructive",
        });
        return;
      }
      const t = s.phone.trim(),
        n = t.startsWith("+");
      let o;
      if (n) o = t.substring(1).replace(/\D/g, "");
      else {
        const C = t.replace(/\D/g, "");
        o = C.startsWith("55") ? C : `55${C}`;
      }
      const y = encodeURIComponent(
        `Olá ${s.name}! Tudo bem? Estamos entrando em contato para acompanhar seu atendimento.`
      );
      window.open(`https://wa.me/${o}?text=${y}`, "_blank");
    },
    Ne = async () => {
      if (!(!c || !x)) {
        M(!0);
        try {
          const { data: s, error: t } = await E.from("user_settings")
            .select("client_registration_token")
            .eq("user_id", d)
            .maybeSingle();
          let n = s?.client_registration_token;
          if (t) throw t;
          if (!n)
            if (((n = crypto.randomUUID().replace(/-/g, "")), s)) {
              const { data: y, error: C } = await E.from("user_settings")
                .update({ client_registration_token: n })
                .eq("user_id", x)
                .select("client_registration_token")
                .single();
              if (C) throw C;
              n = y.client_registration_token;
            } else {
              const { error: y } = await E.from("user_settings").insert({
                user_id: x,
                client_registration_token: n,
              });
              if (y) throw y;
            }
          if (!n) throw new Error("Link não salvo");
          const o = `${Ze()}/cadastro-cliente/${n}`;
          X(o);
          try {
            await navigator.clipboard.writeText(o),
              A(!0),
              setTimeout(() => A(!1), 3e3),
              i({
                title: "Link copiado!",
                description: "Envie para seu cliente se cadastrar.",
              });
          } catch {
            i({
              title: "Link criado",
              description: "Use o botão WhatsApp para enviar ao cliente.",
            });
          }
        } catch {
          i({ title: "Erro ao gerar link", variant: "destructive" });
        } finally {
          M(!1);
        }
      }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "mb-4 md:mb-6",
        children: [
          e.jsx("h1", {
            className: "text-2xl md:text-3xl font-bold mb-1",
            children: "Clientes",
          }),
          e.jsx("p", {
            className: "text-sm md:text-base text-muted-foreground",
            children: r
              ? `${w.length} clientes cadastrados`
              : "Gerencie seus clientes",
          }),
        ],
      }),
      p &&
        e.jsx("div", {
          className:
            "mb-4 bg-primary/5 rounded-xl p-4 border border-primary/20",
          children: e.jsxs("div", {
            className: "flex items-center gap-3 flex-wrap",
            children: [
              e.jsx(ae, { className: "w-5 h-5 text-primary shrink-0" }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsx("p", {
                    className: "text-sm font-medium text-foreground",
                    children: "Link de cadastro público",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground truncate",
                    children: p,
                  }),
                ],
              }),
              e.jsxs(u, {
                variant: "outline",
                size: "sm",
                className: "gap-2",
                onClick: () =>
                  window.open(
                    `https://wa.me/?text=${encodeURIComponent(
                      `Olá! Cadastre-se na nossa assistência e ganhe descontos em serviços e produtos, conforme as condições da loja. Seus dados serão usados para o atendimento, com aviso de privacidade LGPD: ${p}`
                    )}`,
                    "_blank",
                    "noopener,noreferrer"
                  ),
                children: [
                  e.jsx(V, { className: "w-4 h-4" }),
                  "Enviar no WhatsApp",
                ],
              }),
              e.jsxs(u, {
                variant: "outline",
                size: "sm",
                className: "gap-1.5 shrink-0",
                onClick: async () => {
                  try {
                    await navigator.clipboard.writeText(p);
                  } catch {
                    i({
                      title: "Não foi possível copiar",
                      description: "Selecione o link ou envie pelo WhatsApp.",
                    });
                    return;
                  }
                  A(!0),
                    setTimeout(() => A(!1), 3e3),
                    i({ title: "Link copiado!" });
                },
                children: [
                  R
                    ? e.jsx(Me, { className: "w-4 h-4 text-emerald-500" })
                    : e.jsx(Ge, { className: "w-4 h-4" }),
                  R ? "Copiado!" : "Copiar",
                ],
              }),
            ],
          }),
        }),
      e.jsxs($, {
        className: "p-3 md:p-6 bg-card border-border/50 rounded-2xl",
        children: [
          e.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6",
            children: [
              e.jsxs("div", {
                className: "relative flex-1",
                children: [
                  e.jsx(Je, {
                    className:
                      "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
                  }),
                  e.jsx(F, {
                    placeholder: "Buscar por nome, email, CPF...",
                    value: v,
                    onChange: (s) => P(s.target.value),
                    className: "pl-10 text-sm rounded-xl h-11",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-2 flex-wrap",
                children: [
                  e.jsxs(u, {
                    variant: "outline",
                    onClick: () => Ne(),
                    disabled: W || !x,
                    className: "gap-2",
                    children: [
                      e.jsx(ae, { className: "w-4 h-4" }),
                      e.jsx("span", {
                        children: W ? "Gerando..." : "Link de Cadastro",
                      }),
                    ],
                  }),
                  e.jsxs(u, {
                    variant: "outline",
                    onClick: async () => {
                      const s = await Promise.all(
                        z.map(async (t) => {
                          const { data: n } = await E.from("service_orders")
                              .select("service_value")
                              .eq("user_id", c?.id)
                              .or(
                                `client_cpf.eq.${t.cpf || ""},client_name.eq.${
                                  t.name
                                }`
                              ),
                            o = n?.length || 0,
                            y =
                              o > 0
                                ? n.reduce(
                                    (C, U) => C + parseFloat(U.service_value),
                                    0
                                  ) / o
                                : 0;
                          return {
                            name: t.name,
                            cpf: t.cpf || "",
                            email: t.email || "",
                            phone: t.phone || "",
                            address: t.address || "",
                            city: t.city || "",
                            total_os: o,
                            average_ticket: y,
                          };
                        })
                      );
                      He(s, f),
                        i({
                          title: "Exportação concluída!",
                          description:
                            "Relatório de clientes exportado com sucesso",
                        });
                    },
                    className: "gap-2",
                    children: [
                      e.jsx(Ke, { className: "w-4 h-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Exportar Excel",
                      }),
                      e.jsx("span", {
                        className: "sm:hidden",
                        children: "Excel",
                      }),
                    ],
                  }),
                  e.jsxs(u, {
                    onClick: () => b(!0),
                    className: "gap-2 flex-1 sm:flex-initial rounded-xl h-11",
                    children: [
                      e.jsx(Qe, { className: "w-4 h-4" }),
                      "Novo Cliente",
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "sm:hidden space-y-3",
            children:
              z.length === 0
                ? e.jsx("div", {
                    className: "text-center py-8 text-muted-foreground",
                    children:
                      'Nenhum cliente encontrado. Clique em "Novo Cliente" para adicionar.',
                  })
                : z.map((s, t) =>
                    e.jsx(
                      $,
                      {
                        className:
                          "p-4 bg-card border-border/40 rounded-2xl transition-all hover:shadow-md hover:border-primary/20 animate-fade-in",
                        style: { animationDelay: `${t * 30}ms` },
                        children: e.jsxs("div", {
                          className: "flex items-start justify-between gap-3",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-3 min-w-0 flex-1",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0",
                                  children: e.jsx("span", {
                                    className: "text-sm font-bold text-primary",
                                    children: s.name[0]?.toUpperCase(),
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "space-y-0.5 min-w-0",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "font-semibold text-sm truncate",
                                      children: s.name,
                                    }),
                                    s.phone &&
                                      e.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: s.phone,
                                      }),
                                    s.email &&
                                      e.jsx("p", {
                                        className:
                                          "text-[11px] text-muted-foreground/60 truncate",
                                        children: s.email,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-0.5",
                              children: [
                                e.jsx(u, {
                                  variant: "ghost",
                                  size: "icon",
                                  className:
                                    "h-8 w-8 rounded-full hover:bg-accent",
                                  onClick: () => J(s),
                                  disabled: !s.phone,
                                  children: e.jsx(V, { className: "w-4 h-4" }),
                                }),
                                e.jsx(u, {
                                  variant: "ghost",
                                  size: "icon",
                                  className:
                                    "h-8 w-8 rounded-full hover:bg-accent",
                                  onClick: () => {
                                    a(s), I(!0);
                                  },
                                  children: e.jsx(B, { className: "w-4 h-4" }),
                                }),
                                e.jsx(u, {
                                  variant: "ghost",
                                  size: "icon",
                                  className:
                                    "h-8 w-8 rounded-full hover:bg-accent",
                                  onClick: () => {
                                    a(s), D(!0);
                                  },
                                  children: e.jsx(te, { className: "w-4 h-4" }),
                                }),
                                e.jsx(u, {
                                  variant: "ghost",
                                  size: "icon",
                                  className:
                                    "h-8 w-8 rounded-full hover:bg-destructive/10 hover:text-destructive",
                                  onClick: () => {
                                    a(s), T(!0);
                                  },
                                  children: e.jsx(re, { className: "w-4 h-4" }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      s.id
                    )
                  ),
          }),
          e.jsx("div", {
            className: "hidden sm:block -mx-3 md:mx-0",
            children: e.jsxs("table", {
              className: "w-full",
              children: [
                e.jsx("thead", {
                  children: e.jsxs("tr", {
                    className: "border-b border-border",
                    children: [
                      e.jsx("th", {
                        className:
                          "text-left py-3 px-3 text-xs md:text-sm font-semibold text-muted-foreground",
                        children: "Nome",
                      }),
                      e.jsx("th", {
                        className:
                          "text-left py-3 px-3 text-xs md:text-sm font-semibold text-muted-foreground",
                        children: e.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            "CPF",
                            e.jsx(u, {
                              variant: "ghost",
                              size: "icon",
                              className: "h-6 w-6",
                              onClick: () => pe(!q),
                              title: q ? "Ocultar CPF" : "Mostrar CPF",
                              children: q
                                ? e.jsx(he, { className: "w-3.5 h-3.5" })
                                : e.jsx(B, { className: "w-3.5 h-3.5" }),
                            }),
                          ],
                        }),
                      }),
                      e.jsx("th", {
                        className:
                          "text-left py-3 px-3 text-xs md:text-sm font-semibold text-muted-foreground",
                        children: "Email",
                      }),
                      e.jsx("th", {
                        className:
                          "text-left py-3 px-3 text-xs md:text-sm font-semibold text-muted-foreground",
                        children: "Telefone",
                      }),
                      e.jsx("th", {
                        className:
                          "text-right py-3 px-3 text-xs md:text-sm font-semibold text-muted-foreground",
                        children: "Ações",
                      }),
                    ],
                  }),
                }),
                e.jsx("tbody", {
                  children:
                    z.length === 0
                      ? e.jsx("tr", {
                          children: e.jsx("td", {
                            colSpan: 5,
                            className: "text-center py-8 text-muted-foreground",
                            children:
                              'Nenhum cliente encontrado. Clique em "Novo Cliente" para adicionar.',
                          }),
                        })
                      : z.map((s) =>
                          e.jsxs(
                            "tr",
                            {
                              className:
                                "border-b border-border/50 hover:bg-secondary/30 transition-smooth",
                              children: [
                                e.jsx("td", {
                                  className:
                                    "py-3 px-3 font-medium text-xs md:text-sm",
                                  children: s.name,
                                }),
                                e.jsx("td", {
                                  className:
                                    "py-3 px-3 text-muted-foreground text-xs md:text-sm font-mono",
                                  children: q ? s.cpf || "-" : xe(s.cpf) || "-",
                                }),
                                e.jsx("td", {
                                  className:
                                    "py-3 px-3 text-muted-foreground text-xs md:text-sm",
                                  children: s.email || "-",
                                }),
                                e.jsx("td", {
                                  className:
                                    "py-3 px-3 text-muted-foreground text-xs md:text-sm",
                                  children: s.phone || "-",
                                }),
                                e.jsx("td", {
                                  className: "py-3 px-3",
                                  children: e.jsxs("div", {
                                    className:
                                      "flex items-center justify-end gap-1",
                                    children: [
                                      e.jsx(u, {
                                        variant: "ghost",
                                        size: "icon",
                                        className:
                                          "h-8 w-8 hover:bg-green-600/10 hover:text-green-600 transition-smooth",
                                        onClick: () => J(s),
                                        disabled: !s.phone,
                                        children: e.jsx(V, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                      e.jsx(u, {
                                        variant: "ghost",
                                        size: "icon",
                                        className:
                                          "h-8 w-8 hover:bg-primary/10 hover:text-primary transition-smooth",
                                        onClick: () => {
                                          a(s), I(!0);
                                        },
                                        children: e.jsx(B, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                      e.jsx(u, {
                                        variant: "ghost",
                                        size: "icon",
                                        className:
                                          "h-8 w-8 hover:bg-primary/10 hover:text-primary transition-smooth",
                                        onClick: () => {
                                          a(s), D(!0);
                                        },
                                        children: e.jsx(te, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                      e.jsx(u, {
                                        variant: "ghost",
                                        size: "icon",
                                        className:
                                          "h-8 w-8 hover:bg-destructive/10 hover:text-destructive transition-smooth",
                                        onClick: () => {
                                          a(s), T(!0);
                                        },
                                        children: e.jsx(re, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            s.id
                          )
                        ),
                }),
              ],
            }),
          }),
        ],
      }),
      e.jsx(ne, { open: N, onOpenChange: b, onSave: ge }),
      e.jsx(ne, { open: k, onOpenChange: D, onSave: je, client: h }),
      h && e.jsx(as, { open: S, onOpenChange: I, client: h }),
      e.jsx(ts, {
        open: O,
        onOpenChange: T,
        clientName: h?.name,
        onConfirm: () => h && ve(h.id),
      }),
    ],
  });
};
export { ns as default };
