import {
  bG as h,
  r as a,
  w as i,
  j as e,
  G as c,
  C as j,
  g as N,
  T as v,
  B as w,
} from "./index-V8ZHCWL2.js";
function S() {
  const { token: r } = h(),
    [n, m] = a.useState(null),
    [d, u] = a.useState(!0),
    [t, x] = a.useState(null),
    [o, f] = a.useState(""),
    [p, l] = a.useState(!1);
  a.useEffect(() => {
    (async () => {
      const { data: s } = await i
        .from("nps_responses")
        .select("*")
        .eq("token", r)
        .maybeSingle();
      m(s), s?.responded_at && l(!0), u(!1);
    })();
  }, [r]);
  const g = async () => {
    t != null &&
      (await i
        .from("nps_responses")
        .update({
          score: t,
          comment: o,
          responded_at: new Date().toISOString(),
        })
        .eq("token", r),
      l(!0));
  };
  return d
    ? e.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-background",
        children: "Carregando…",
      })
    : n
    ? p
      ? e.jsx("div", {
          className:
            "min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4",
          children: e.jsxs(c, {
            className: "max-w-md w-full p-8 text-center rounded-3xl",
            children: [
              e.jsx(j, {
                className: "w-16 h-16 mx-auto text-emerald-500 mb-4",
              }),
              e.jsx("h1", {
                className: "text-2xl font-bold mb-2",
                children: "Obrigado pela sua avaliação! 💚",
              }),
              e.jsx("p", {
                className: "text-muted-foreground",
                children: "Seu retorno nos ajuda a melhorar sempre.",
              }),
            ],
          }),
        })
      : e.jsx("div", {
          className:
            "min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4",
          children: e.jsxs(c, {
            className: "max-w-lg w-full p-8 rounded-3xl",
            children: [
              e.jsxs("div", {
                className: "text-center mb-6",
                children: [
                  e.jsx(N, {
                    className: "w-12 h-12 mx-auto text-amber-400 mb-3",
                  }),
                  e.jsx("h1", {
                    className: "text-2xl font-bold mb-1",
                    children: "Como foi sua experiência?",
                  }),
                  e.jsxs("p", {
                    className: "text-sm text-muted-foreground",
                    children: [
                      "Olá ",
                      n.client_name || "cliente",
                      ", em uma escala de 0 a 10, o quanto você indicaria nosso serviço?",
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "grid grid-cols-11 gap-1.5 mb-5",
                children: Array.from({ length: 11 }, (s, b) => b).map((s) =>
                  e.jsx(
                    "button",
                    {
                      onClick: () => x(s),
                      className: `aspect-square rounded-lg font-semibold text-sm transition-all ${
                        t === s
                          ? "bg-primary text-primary-foreground scale-110 shadow-lg"
                          : "bg-muted hover:bg-muted/80"
                      }`,
                      children: s,
                    },
                    s
                  )
                ),
              }),
              e.jsxs("div", {
                className:
                  "flex justify-between text-[11px] text-muted-foreground mb-5 px-1",
                children: [
                  e.jsx("span", { children: "Não indicaria" }),
                  e.jsx("span", { children: "Indicaria com certeza" }),
                ],
              }),
              e.jsx(v, {
                placeholder: "Deixe um comentário (opcional)",
                value: o,
                onChange: (s) => f(s.target.value),
                rows: 3,
                className: "mb-4",
              }),
              e.jsx(w, {
                onClick: g,
                disabled: t == null,
                className: "w-full",
                size: "lg",
                children: "Enviar avaliação",
              }),
            ],
          }),
        })
    : e.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-background text-center px-4",
        children: e.jsx("p", {
          className: "text-muted-foreground",
          children: "Link inválido ou expirado.",
        }),
      });
}
export { S as default };
