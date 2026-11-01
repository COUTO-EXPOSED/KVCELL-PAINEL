import { fc as o } from "./index-V8ZHCWL2.js";
function d(c, u) {
  const r = o(c.start),
    a = o(c.end);
  let t = +r > +a;
  const D = t ? +r : +a,
    e = t ? a : r;
  e.setHours(0, 0, 0, 0);
  let s = u?.step ?? 1;
  if (!s) return [];
  s < 0 && ((s = -s), (t = !t));
  const n = [];
  for (; +e <= D; )
    n.push(o(e)), e.setDate(e.getDate() + s), e.setHours(0, 0, 0, 0);
  return t ? n.reverse() : n;
}
export { d as e };
