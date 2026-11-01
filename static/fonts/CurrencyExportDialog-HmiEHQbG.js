import {
  r as m,
  j as e,
  D as j,
  c as h,
  a_ as p,
  d as f,
  cY as D,
  dk as v,
  dl as a,
  n as r,
  B as i,
} from "./index-V8ZHCWL2.js";
function C({
  open: c,
  onOpenChange: s,
  onConfirm: o,
  title: n = "Selecione a Moeda para Exportação",
  description: t = "Escolha a moeda que será usada no relatório exportado",
}) {
  const [l, d] = m.useState("BRL"),
    x = () => {
      o(l), s(!1);
    };
  return e.jsx(j, {
    open: c,
    onOpenChange: s,
    children: e.jsxs(h, {
      className: "sm:max-w-md",
      children: [
        e.jsxs(p, {
          children: [e.jsx(f, { children: n }), e.jsx(D, { children: t })],
        }),
        e.jsx("div", {
          className: "space-y-4 py-4",
          children: e.jsxs(v, {
            value: l,
            onValueChange: (u) => d(u),
            children: [
              e.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  e.jsx(a, { value: "BRL", id: "brl" }),
                  e.jsx(r, {
                    htmlFor: "brl",
                    className: "cursor-pointer",
                    children: "BRL - Real Brasileiro (R$)",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  e.jsx(a, { value: "USD", id: "usd" }),
                  e.jsx(r, {
                    htmlFor: "usd",
                    className: "cursor-pointer",
                    children: "USD - Dólar Americano ($)",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  e.jsx(a, { value: "EUR", id: "eur" }),
                  e.jsx(r, {
                    htmlFor: "eur",
                    className: "cursor-pointer",
                    children: "EUR - Euro (€)",
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsxs("div", {
          className: "flex justify-end gap-2",
          children: [
            e.jsx(i, {
              variant: "outline",
              onClick: () => s(!1),
              children: "Cancelar",
            }),
            e.jsx(i, { onClick: x, children: "Confirmar e Exportar" }),
          ],
        }),
      ],
    }),
  });
}
export { C };
