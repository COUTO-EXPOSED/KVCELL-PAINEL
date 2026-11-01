function l(n) {
  return String(n).padStart(2, "0");
}
function i(n, t) {
  return `${n}${l(t.length)}${t}`;
}
function d(n) {
  let t = 65535;
  for (let c = 0; c < n.length; c++) {
    t ^= n.charCodeAt(c) << 8;
    for (let e = 0; e < 8; e++)
      t & 32768 ? (t = ((t << 1) ^ 4129) & 65535) : (t = (t << 1) & 65535);
  }
  return t.toString(16).toUpperCase().padStart(4, "0");
}
function g(n) {
  return (n || "").trim().slice(0, 25);
}
function m(n) {
  return (n || "").trim().slice(0, 15);
}
function S(n) {
  const t = (n || "***").trim();
  return (t.length ? t : "***").slice(0, 25);
}
function b({
  pixKey: n,
  merchantName: t,
  merchantCity: c = "BRASIL",
  amount: e,
  txid: o = "***",
}) {
  const u = i("00", "BR.GOV.BCB.PIX"),
    a = i("01", n),
    h = i("26", `${u}${a}`),
    r = [];
  if (
    (r.push(i("00", "01")),
    r.push(i("01", "11")),
    r.push(h),
    r.push(i("52", "0000")),
    r.push(i("53", "986")),
    typeof e == "number" && Number.isFinite(e) && e > 0)
  ) {
    const f = e.toFixed(2);
    r.push(i("54", f));
  }
  r.push(i("58", "BR")),
    r.push(i("59", g(t))),
    r.push(i("60", m(c))),
    r.push(i("62", i("05", S(o))));
  const s = r.join("") + "6304",
    p = d(s);
  return s + p;
}
export { b };
