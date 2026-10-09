import { r as l, j as o, B as n, dm as i } from "./index-V8ZHCWL2.js";
import { S as h } from "./sun-P4wkve1z.js";
function u() {
  const [t, a] = l.useState("light");
  l.useEffect(() => {
    const e = localStorage.getItem("public-page-theme");
    if (e) a(e), s(e);
    else {
      const c = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      a(c), s(c);
    }
  }, []);
  const s = (e) => {
      const r = document.documentElement;
      e === "dark" ? r.classList.add("dark") : r.classList.remove("dark");
    },
    m = () => {
      const e = t === "light" ? "dark" : "light";
      a(e), s(e), localStorage.setItem("public-page-theme", e);
    };
  return o.jsx(n, {
    variant: "ghost",
    size: "icon",
    onClick: m,
    className:
      "h-9 w-9 rounded-lg border bg-card hover:bg-accent transition-colors",
    title: t === "light" ? "Mudar para tema escuro" : "Mudar para tema claro",
    children:
      t === "light"
        ? o.jsx(i, { className: "h-4 w-4 text-foreground" })
        : o.jsx(h, { className: "h-4 w-4 text-amber-400" }),
  });
}
export { u as T };
