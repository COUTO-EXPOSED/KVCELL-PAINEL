import {
  u as B,
  i as G,
  r as a,
  j as e,
  s as C,
  G as f,
  Y as p,
  J as k,
  $ as w,
  a0 as j,
  a1 as g,
  B as y,
  C as H,
  n as P,
  O as L,
  I as O,
  a9 as E,
  aa as I,
  w as o,
} from "./index-V8ZHCWL2.js";
const K = () => {
  const l = B(),
    { toast: r } = G(),
    [n, R] = a.useState(""),
    [N, T] = a.useState(""),
    [i, v] = a.useState(!1),
    [z, D] = a.useState(!1),
    [d, _] = a.useState(!1),
    [h, A] = a.useState(!1),
    [F, u] = a.useState(!1),
    [q, c] = a.useState(!0);
  a.useEffect(() => {
    (async () => {
      try {
        const s = new URL(window.location.href),
          S = s.searchParams.get("code");
        if (
          s.searchParams.get("error_description") ||
          s.searchParams.get("error")
        ) {
          c(!1);
          return;
        }
        if (S) {
          const { error: x } = await o.auth.exchangeCodeForSession(S);
          if (!x) {
            u(!0),
              window.history.replaceState(
                {},
                document.title,
                "/reset-password"
              ),
              c(!1);
            return;
          }
        }
        const m = new URLSearchParams(window.location.hash.substring(1)),
          b = m.get("access_token");
        if (m.get("type") === "recovery" && b) {
          const { error: x } = await o.auth.setSession({
            access_token: b,
            refresh_token: m.get("refresh_token") || "",
          });
          if (!x) {
            u(!0),
              window.history.replaceState(
                {},
                document.title,
                "/reset-password"
              ),
              c(!1);
            return;
          }
        }
        const {
          data: { session: V },
        } = await o.auth.getSession();
        V && u(!0);
      } catch {
      } finally {
        c(!1);
      }
    })();
  }, []);
  const U = async (t) => {
    if ((t.preventDefault(), n.length < 6)) {
      r({
        title: "Senha muito curta",
        description: "A senha deve ter pelo menos 6 caracteres.",
        variant: "destructive",
      });
      return;
    }
    if (n !== N) {
      r({
        title: "Senhas não coincidem",
        description: "Por favor, verifique se as senhas são iguais.",
        variant: "destructive",
      });
      return;
    }
    v(!0);
    try {
      const { error: s } = await o.auth.updateUser({ password: n });
      if (s) throw s;
      D(!0),
        r({
          title: "Senha atualizada!",
          description: "Sua senha foi alterada com sucesso.",
        }),
        setTimeout(() => {
          l("/login");
        }, 3e3);
    } catch (s) {
      r({
        title: "Erro ao atualizar senha",
        description: s.message || "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      v(!1);
    }
  };
  return q
    ? e.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-50",
        children: e.jsx(C, { className: "w-8 h-8 animate-spin text-primary" }),
      })
    : F
    ? z
      ? e.jsx("div", {
          className:
            "min-h-screen flex items-center justify-center bg-gray-50 p-4",
          children: e.jsxs(f, {
            className: "w-full max-w-md",
            children: [
              e.jsxs(p, {
                className: "text-center space-y-4",
                children: [
                  e.jsx("div", {
                    className:
                      "mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center",
                    children: e.jsx(H, { className: "w-8 h-8 text-green-600" }),
                  }),
                  e.jsx(w, {
                    className: "text-2xl",
                    children: "Senha Atualizada!",
                  }),
                  e.jsx(j, {
                    className: "text-base",
                    children:
                      "Sua senha foi alterada com sucesso. Você será redirecionado para o login em instantes...",
                  }),
                ],
              }),
              e.jsx(g, {
                children: e.jsx(y, {
                  className: "w-full",
                  onClick: () => l("/login"),
                  children: "Ir para o Login",
                }),
              }),
            ],
          }),
        })
      : e.jsx("div", {
          className:
            "min-h-screen flex items-center justify-center bg-gray-50 p-4",
          children: e.jsxs(f, {
            className: "w-full max-w-md",
            children: [
              e.jsxs(p, {
                className: "text-center space-y-4",
                children: [
                  e.jsx("img", {
                    src: k,
                    alt: "Tech OS PRO",
                    className: "h-12 mx-auto",
                  }),
                  e.jsx(w, {
                    className: "text-2xl",
                    children: "Redefinir Senha",
                  }),
                  e.jsx(j, { children: "Digite sua nova senha abaixo." }),
                ],
              }),
              e.jsx(g, {
                children: e.jsxs("form", {
                  onSubmit: U,
                  className: "space-y-6",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(P, {
                          htmlFor: "password",
                          children: "Nova Senha",
                        }),
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx(L, {
                              className:
                                "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                            }),
                            e.jsx(O, {
                              id: "password",
                              type: d ? "text" : "password",
                              placeholder: "••••••••",
                              value: n,
                              onChange: (t) => R(t.target.value),
                              className: "pl-10 pr-10",
                              disabled: i,
                              required: !0,
                              minLength: 6,
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: () => _(!d),
                              className:
                                "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                              children: d
                                ? e.jsx(E, { className: "w-5 h-5" })
                                : e.jsx(I, { className: "w-5 h-5" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(P, {
                          htmlFor: "confirmPassword",
                          children: "Confirmar Nova Senha",
                        }),
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx(L, {
                              className:
                                "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                            }),
                            e.jsx(O, {
                              id: "confirmPassword",
                              type: h ? "text" : "password",
                              placeholder: "••••••••",
                              value: N,
                              onChange: (t) => T(t.target.value),
                              className: "pl-10 pr-10",
                              disabled: i,
                              required: !0,
                              minLength: 6,
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: () => A(!h),
                              className:
                                "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                              children: h
                                ? e.jsx(E, { className: "w-5 h-5" })
                                : e.jsx(I, { className: "w-5 h-5" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx(y, {
                      type: "submit",
                      className: "w-full",
                      disabled: i,
                      children: i
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(C, {
                                className: "w-4 h-4 mr-2 animate-spin",
                              }),
                              "Atualizando...",
                            ],
                          })
                        : "Atualizar Senha",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
    : e.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-gray-50 p-4",
        children: e.jsxs(f, {
          className: "w-full max-w-md",
          children: [
            e.jsxs(p, {
              className: "text-center space-y-4",
              children: [
                e.jsx("img", {
                  src: k,
                  alt: "Tech OS PRO",
                  className: "h-12 mx-auto",
                }),
                e.jsx(w, {
                  className: "text-2xl text-destructive",
                  children: "Link Inválido ou Expirado",
                }),
                e.jsx(j, {
                  children:
                    "O link de redefinição de senha é inválido ou já expirou. Por favor, solicite um novo link.",
                }),
              ],
            }),
            e.jsx(g, {
              children: e.jsx(y, {
                className: "w-full",
                onClick: () => l("/forgot-password"),
                children: "Solicitar Novo Link",
              }),
            }),
          ],
        }),
      });
};
export { K as default };
