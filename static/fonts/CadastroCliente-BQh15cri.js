import {
  dA as q,
  dB as l,
  fF as J,
  fG as w,
  fH as S,
  bG as H,
  r,
  j as e,
  s as _,
  f as E,
  B as D,
  bT as I,
  bJ as U,
  dH as W,
  n as m,
  I as F,
  b5 as $,
  b6 as Q,
  b7 as K,
  b8 as M,
  b9 as h,
  fI as j,
  cJ as T,
  w as P,
  bU as B,
} from "./index-V8ZHCWL2.js";
import { T as X } from "./ThemeToggleButton-DN8EhluE.js";
import "./sun-P4wkve1z.js";
const Y = q({
  name: l().trim().min(3, "Informe seu nome completo").max(100),
  cpf: l()
    .max(20)
    .refine(
      (s) => !s || [9, 11, 14].includes(s.replace(/\D/g, "").length),
      "Informe o documento completo ou deixe em branco"
    ),
  phone: l()
    .trim()
    .max(25)
    .refine(
      (s) =>
        /^[+\d\s().-]+$/.test(s) &&
        s.replace(/\D/g, "").length >= 8 &&
        s.replace(/\D/g, "").length <= 15,
      "Informe um telefone válido com DDD ou código do país"
    ),
  email: J([w(""), l().trim().email("Email inválido").max(255)]),
  address: l().trim().max(200),
  city: l().trim().max(100),
  birth_date: l().refine(
    (s) =>
      !s ||
      (/^\d{4}-\d{2}-\d{2}$/.test(s) &&
        !Number.isNaN(Date.parse(s)) &&
        new Date(s).toISOString().slice(0, 10) === s &&
        s >= "1900-01-01" &&
        s <= new Date().toISOString().slice(0, 10)),
    "Data de nascimento inválida"
  ),
  privacy_consent: S().refine(
    (s) => s,
    "Confirme a leitura do aviso de privacidade"
  ),
  marketing_consent: S(),
  website: w(""),
});
function se() {
  const { token: s } = H(),
    [n, L] = r.useState(null),
    [z, b] = r.useState(!0),
    [A, N] = r.useState(""),
    [p, v] = r.useState(!1),
    [O, R] = r.useState(!1),
    [c, k] = r.useState("cpf"),
    [d, f] = r.useState({
      name: "",
      cpf: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      birth_date: "",
      privacy_consent: !1,
      marketing_consent: !1,
      website: "",
    }),
    [i, g] = r.useState({}),
    C = async () => {
      b(!0), N("");
      try {
        const { data: a, error: t } = await P.functions.invoke(
          "client-self-registration",
          { body: { token: s } }
        );
        if (t || !a?.company)
          throw new Error(
            "Não foi possível abrir o cadastro. Confirme o link com a loja ou tente novamente."
          );
        L(a.company), k(a.company.catalog_language === "pt-PT" ? "nif" : "cpf");
      } catch (a) {
        N(a instanceof Error ? a.message : "Cadastro indisponível.");
      } finally {
        b(!1);
      }
    };
  r.useEffect(() => {
    C();
  }, [s]);
  const x = (a, t) => {
      f((o) => ({ ...o, [a]: t })), g((o) => ({ ...o, [a]: "" }));
    },
    G = async (a) => {
      if ((a.preventDefault(), p)) return;
      const t = Y.safeParse(d);
      if (!t.success) {
        const o = {};
        for (const u of t.error.issues) o[String(u.path[0])] = u.message;
        g(o);
        return;
      }
      v(!0);
      try {
        const { data: o, error: u } = await P.functions.invoke(
          "client-self-registration",
          { body: { token: s, client: t.data } }
        );
        if (u || !o?.success)
          throw new Error(
            "Não foi possível salvar. Confira os dados e tente novamente."
          );
        R(!0), B.success("Cadastro realizado com sucesso!");
      } catch (o) {
        B.error(o instanceof Error ? o.message : "Erro ao cadastrar.");
      } finally {
        v(!1);
      }
    };
  if (z)
    return e.jsx("div", {
      className: "min-h-screen bg-background flex items-center justify-center",
      children: e.jsx(_, { className: "h-10 w-10 animate-spin text-primary" }),
    });
  if (!n)
    return e.jsxs("main", {
      className:
        "min-h-screen bg-background flex flex-col items-center justify-center gap-4 px-4 text-center",
      children: [
        e.jsx(E, { className: "h-10 w-10 text-primary" }),
        e.jsx("h1", {
          className: "text-xl font-bold",
          children: "Cadastro indisponível",
        }),
        e.jsx("p", { className: "text-muted-foreground", children: A }),
        e.jsx(D, {
          variant: "outline",
          onClick: C,
          children: "Tentar novamente",
        }),
      ],
    });
  const y = n.company_name || "Assistência técnica";
  if (O)
    return e.jsxs("main", {
      className:
        "min-h-screen bg-background flex flex-col items-center justify-center gap-4 px-4 text-center",
      children: [
        e.jsx(I, { className: "h-14 w-14 text-primary" }),
        e.jsx("h1", {
          className: "text-2xl font-bold",
          children: "Cadastro realizado!",
        }),
        e.jsxs("p", {
          className: "text-muted-foreground max-w-md",
          children: [
            "Seus dados foram salvos em ",
            y,
            ". Você já pode consultar os descontos para clientes cadastrados diretamente com a loja.",
          ],
        }),
      ],
    });
  const V = [
    {
      key: "name",
      label:
        c === "cnpj" || c === "nipc" ? "Razão social *" : "Nome completo *",
      type: "text",
      limit: 100,
      placeholder: "Nome completo",
    },
    {
      key: "birth_date",
      label: "Data de nascimento (opcional)",
      type: "date",
      limit: 10,
      placeholder: "",
    },
    {
      key: "phone",
      label: "Telefone / WhatsApp *",
      type: "tel",
      limit: 25,
      placeholder: "+55 (00) 00000-0000",
    },
    {
      key: "email",
      label: "Email (opcional)",
      type: "email",
      limit: 255,
      placeholder: "seu@email.com",
    },
    {
      key: "address",
      label: "Endereço (opcional)",
      type: "text",
      limit: 200,
      placeholder: "Rua, número, bairro",
    },
    {
      key: "city",
      label: "Cidade / Estado (opcional)",
      type: "text",
      limit: 100,
      placeholder: "Cidade / Estado",
    },
  ];
  return e.jsxs("div", {
    className: "min-h-screen bg-background text-foreground",
    children: [
      e.jsx("header", {
        className: "border-b border-border",
        children: e.jsxs("div", {
          className:
            "max-w-2xl mx-auto px-4 py-5 flex items-center justify-between gap-4",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3 min-w-0",
              children: [
                n.company_logo
                  ? e.jsx("img", {
                      src: n.company_logo,
                      alt: "",
                      className: "h-12 w-12 object-contain",
                    })
                  : e.jsx(U, { className: "h-9 w-9 shrink-0 text-primary" }),
                e.jsx("h1", {
                  className: "text-xl font-bold break-words",
                  children: y,
                }),
              ],
            }),
            e.jsx(X, {}),
          ],
        }),
      }),
      e.jsxs("main", {
        className: "max-w-2xl mx-auto px-4 py-8 space-y-7",
        children: [
          e.jsxs("section", {
            className: "border-b border-border pb-6",
            children: [
              e.jsx(W, { className: "h-8 w-8 text-primary mb-3" }),
              e.jsx("h2", {
                className: "text-2xl font-bold mb-2",
                children: "Cadastre-se e ganhe descontos",
              }),
              e.jsx("p", {
                className: "text-muted-foreground",
                children:
                  "Descontos em serviços e produtos para clientes cadastrados. Consulte os valores e condições com a loja.",
              }),
            ],
          }),
          e.jsxs("form", {
            onSubmit: G,
            className: "space-y-5",
            children: [
              e.jsx("h2", {
                className: "text-lg font-semibold",
                children: "Seus dados",
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                  V.map((a) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          a.key === "name"
                            ? "space-y-2 sm:col-span-2"
                            : "space-y-2",
                        children: [
                          e.jsx(m, { htmlFor: a.key, children: a.label }),
                          e.jsx(F, {
                            id: a.key,
                            type: a.type,
                            maxLength: a.limit,
                            placeholder: a.placeholder,
                            value: d[a.key],
                            onChange: (t) => x(a.key, t.target.value),
                            max:
                              a.type === "date"
                                ? new Date().toISOString().slice(0, 10)
                                : void 0,
                            "aria-invalid": !!i[a.key],
                          }),
                          i[a.key] &&
                            e.jsx("p", {
                              className: "text-xs text-destructive",
                              children: i[a.key],
                            }),
                        ],
                      },
                      a.key
                    )
                  ),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(m, {
                        htmlFor: "document-type",
                        children: "Tipo de documento",
                      }),
                      e.jsxs($, {
                        value: c,
                        onValueChange: (a) => {
                          k(a), x("cpf", "");
                        },
                        children: [
                          e.jsx(Q, {
                            id: "document-type",
                            children: e.jsx(K, {}),
                          }),
                          e.jsxs(M, {
                            children: [
                              e.jsx(h, {
                                value: "cpf",
                                children: "CPF (Brasil)",
                              }),
                              e.jsx(h, {
                                value: "cnpj",
                                children: "CNPJ (Empresa)",
                              }),
                              e.jsx(h, {
                                value: "nif",
                                children: "NIF (Portugal)",
                              }),
                              e.jsx(h, {
                                value: "nipc",
                                children: "NIPC (Empresa)",
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
                      e.jsxs(m, {
                        htmlFor: "cpf",
                        children: [c.toUpperCase(), " (opcional)"],
                      }),
                      e.jsx(F, {
                        id: "cpf",
                        value: d.cpf,
                        maxLength: c === "cnpj" ? 18 : c === "cpf" ? 14 : 11,
                        onChange: (a) =>
                          x(
                            "cpf",
                            c === "cnpj"
                              ? j.cnpj(a.target.value)
                              : c === "cpf"
                              ? j.cpf(a.target.value)
                              : j.nif(a.target.value)
                          ),
                      }),
                      i.cpf &&
                        e.jsx("p", {
                          className: "text-xs text-destructive",
                          children: i.cpf,
                        }),
                    ],
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "border-y border-border py-5 space-y-3 text-sm",
                children: [
                  e.jsxs("h3", {
                    className: "font-semibold flex gap-2 items-center",
                    children: [
                      e.jsx(E, { className: "h-5 w-5 text-primary" }),
                      "Aviso de privacidade — LGPD",
                    ],
                  }),
                  e.jsxs("p", {
                    className: "text-muted-foreground",
                    children: [
                      y,
                      " é responsável pelo tratamento dos seus dados. O técnico e a equipe autorizada poderão consultar as informações fornecidas, incluindo documento e data de nascimento, para cadastro, atendimento, identificação e obrigações legais. Documento e nascimento são opcionais.",
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "Os dados são armazenados no sistema de gestão da loja. Você pode solicitar acesso, correção, informação sobre o uso, revogação do consentimento e exclusão entrando em contato com a loja, respeitadas as obrigações legais de conservação.",
                  }),
                  (n.company_email || n.company_phone) &&
                    e.jsxs("p", {
                      className: "text-muted-foreground",
                      children: [
                        "Contato: ",
                        n.company_email || n.company_phone,
                      ],
                    }),
                  e.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      e.jsx(T, {
                        id: "privacy",
                        checked: d.privacy_consent,
                        onCheckedChange: (a) => {
                          f((t) => ({ ...t, privacy_consent: a === !0 })),
                            g((t) => ({ ...t, privacy_consent: "" }));
                        },
                      }),
                      e.jsx(m, {
                        htmlFor: "privacy",
                        className: "leading-relaxed",
                        children:
                          "Li o aviso de privacidade e concordo com o cadastro e o tratamento dos dados informados. *",
                      }),
                    ],
                  }),
                  i.privacy_consent &&
                    e.jsx("p", {
                      className: "text-xs text-destructive",
                      children: i.privacy_consent,
                    }),
                  e.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      e.jsx(T, {
                        id: "marketing",
                        checked: d.marketing_consent,
                        onCheckedChange: (a) =>
                          f((t) => ({ ...t, marketing_consent: a === !0 })),
                      }),
                      e.jsx(m, {
                        htmlFor: "marketing",
                        className: "leading-relaxed",
                        children:
                          "Quero receber promoções e ofertas por WhatsApp ou email (opcional). Posso cancelar a qualquer momento.",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children:
                      "Receber promoções não é obrigatório para concluir o cadastro.",
                  }),
                ],
              }),
              e.jsx("input", {
                name: "website",
                tabIndex: -1,
                autoComplete: "off",
                className: "hidden",
                "aria-hidden": "true",
                onChange: (a) => x("website", a.target.value),
              }),
              e.jsxs(D, {
                type: "submit",
                disabled: p,
                className: "w-full h-12 gap-2",
                children: [
                  p
                    ? e.jsx(_, { className: "h-5 w-5 animate-spin" })
                    : e.jsx(I, { className: "h-5 w-5" }),
                  p ? "Salvando..." : "Finalizar cadastro",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { se as default };
