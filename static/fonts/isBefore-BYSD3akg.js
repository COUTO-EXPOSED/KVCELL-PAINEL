import { fc as s, fh as a } from "./index-V8ZHCWL2.js";
function i(e, n) {
  const t = s(e);
  if (isNaN(n)) return a(e, NaN);
  if (!n) return t;
  const r = t.getDate(),
    o = a(e, t.getTime());
  o.setMonth(t.getMonth() + n + 1, 0);
  const c = o.getDate();
  return r >= c ? o : (t.setFullYear(o.getFullYear(), o.getMonth(), r), t);
}
function h(e, n) {
  const t = s(e),
    r = s(n);
  return +t < +r;
}
export { i as a, h as i };
