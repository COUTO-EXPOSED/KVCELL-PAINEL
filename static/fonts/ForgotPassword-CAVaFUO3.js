import {
  u as N,
  i as w,
  r as n,
  j as e,
  G as u,
  Y as x,
  C as y,
  $ as h,
  a0 as p,
  a1 as f,
  B as r,
  J as C,
  n as b,
  N as E,
  I as L,
  s as S,
  w as k,
} from "./index-V8ZHCWL2.js";
import { A as j } from "./arrow-left-CaH5Nh3G.js";
const F = () => {
  const c = N(),
    { toast: i } = w(),
    [a, o] = n.useState(""),
    [t, m] = n.useState(!1),
    [g, d] = n.useState(!1),
    v = async (l) => {
      if ((l.preventDefault(), !a.trim())) {
        i({
          title: "Campo obrigatório",
          description: "Por favor, insira seu email.",
          variant: "destructive",
        });
        return;
      }
      m(!0);
      try {
        const { error: s } = await k.auth.resetPasswordForEmail(a, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (s) throw s;
        d(!0),
          i({
            title: "Email enviado!",
            description:
              "Verifique sua caixa de entrada para redefinir sua senha.",
          });
      } catch (s) {
        i({
          title: "Erro ao enviar email",
          description: s.message || "Ocorreu um erro. Tente novamente.",
          variant: "destructive",
        });
      } finally {
        m(!1);
      }
    };
  return g
    ? e.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-gray-50 p-4",
        children: e.jsxs(u, {
          className: "w-full max-w-md",
          children: [
            e.jsxs(x, {
              className: "text-center space-y-4",
              children: [
                e.jsx("div", {
                  className:
                    "mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center",
                  children: e.jsx(y, { className: "w-8 h-8 text-green-600" }),
                }),
                e.jsx(h, { className: "text-2xl", children: "Email Enviado!" }),
                e.jsxs(p, {
                  className: "text-base",
                  children: [
                    "Enviamos um link de redefinição de senha para ",
                    e.jsx("strong", { children: a }),
                    ". Verifique sua caixa de entrada e spam.",
                  ],
                }),
              ],
            }),
            e.jsxs(f, {
              className: "space-y-4",
              children: [
                e.jsxs(r, {
                  variant: "outline",
                  className: "w-full gap-2",
                  onClick: () => c("/login"),
                  children: [
                    e.jsx(j, { className: "w-4 h-4" }),
                    "Voltar para o Login",
                  ],
                }),
                e.jsx(r, {
                  variant: "ghost",
                  className: "w-full",
                  onClick: () => {
                    d(!1), o("");
                  },
                  children: "Tentar outro email",
                }),
              ],
            }),
          ],
        }),
      })
    : e.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-gray-50 p-4",
        children: e.jsxs(u, {
          className: "w-full max-w-md",
          children: [
            e.jsxs(x, {
              className: "text-center space-y-4",
              children: [
                e.jsx("img", {
                  src: C,
                  alt: "Tech OS PRO",
                  className: "h-12 mx-auto",
                }),
                e.jsx(h, {
                  className: "text-2xl",
                  children: "Esqueceu sua senha?",
                }),
                e.jsx(p, {
                  children:
                    "Insira seu email e enviaremos um link para redefinir sua senha.",
                }),
              ],
            }),
            e.jsx(f, {
              children: e.jsxs("form", {
                onSubmit: v,
                className: "space-y-6",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(b, { htmlFor: "email", children: "Email" }),
                      e.jsxs("div", {
                        className: "relative",
                        children: [
                          e.jsx(E, {
                            className:
                              "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                          }),
                          e.jsx(L, {
                            id: "email",
                            type: "email",
                            placeholder: "seu@email.com",
                            value: a,
                            onChange: (l) => o(l.target.value),
                            className: "pl-10",
                            disabled: t,
                            required: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(r, {
                    type: "submit",
                    className: "w-full",
                    disabled: t,
                    children: t
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(S, {
                              className: "w-4 h-4 mr-2 animate-spin",
                            }),
                            "Enviando...",
                          ],
                        })
                      : "Enviar Link de Redefinição",
                  }),
                  e.jsxs(r, {
                    type: "button",
                    variant: "ghost",
                    className: "w-full gap-2",
                    onClick: () => c("/login"),
                    children: [
                      e.jsx(j, { className: "w-4 h-4" }),
                      "Voltar para o Login",
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      });
};
export { F as default };
