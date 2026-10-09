import { bi as nt, bj as Y, bk as ot } from "./index-V8ZHCWL2.js";
import { p as at } from "./pt-XKM20doT.js";
function it(o) {
  const i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);
  return i
    ? { r: parseInt(i[1], 16), g: parseInt(i[2], 16), b: parseInt(i[3], 16) }
    : { r: 30, g: 58, b: 95 };
}
function M(o, i) {
  return {
    r: Math.round(Math.min(255, o.r + (255 - o.r) * (i / 100))),
    g: Math.round(Math.min(255, o.g + (255 - o.g) * (i / 100))),
    b: Math.round(Math.min(255, o.b + (255 - o.b) * (i / 100))),
  };
}
function ct(o, i) {
  return {
    r: Math.round(o.r * (1 - i / 100)),
    g: Math.round(o.g * (1 - i / 100)),
    b: Math.round(o.b * (1 - i / 100)),
  };
}
async function dt(o, i) {
  const t = new nt({ orientation: "portrait", unit: "mm", format: "a4" }),
    d = t.internal.pageSize.getWidth(),
    h = t.internal.pageSize.getHeight(),
    a = 14,
    m = d - a * 2,
    S = i?.selected_currency === "EUR" || i?.company_document_type === "nif",
    K = S ? "€" : "R$",
    W = S ? "NIF" : "CPF/CNPJ",
    A = S ? "Morada" : "Endereço",
    H = S ? at : ot,
    l = it(i?.quotation_pdf_color || "#1e3a5f"),
    I = ct(l, 25),
    Z = M(l, 90),
    L = { r: 226, g: 232, b: 240 },
    y = { r: 108, g: 122, b: 137 },
    v = (n) =>
      `${K} ${n.toLocaleString(S ? "pt-PT" : "pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
    s = (n) => t.setFillColor(n.r, n.g, n.b),
    c = (n) => t.setTextColor(n.r, n.g, n.b),
    T = (n) => t.setDrawColor(n.r, n.g, n.b),
    f = { r: 255, g: 255, b: 255 },
    R = { r: 17, g: 24, b: 39 },
    w = 42;
  s(l), t.rect(0, 0, d, w, "F"), s(I), t.rect(0, w, d, 2.2, "F");
  let _ = a;
  if (i?.company_logo)
    try {
      s(f),
        t.roundedRect(a, 8, 26, 26, 3, 3, "F"),
        t.addImage(i.company_logo, "AUTO", a + 2, 10, 22, 22),
        (_ = a + 32);
    } catch {
      _ = a;
    }
  c(f), t.setFont("helvetica", "bold"), t.setFontSize(15);
  const N = i?.company_name || "Assistência Técnica";
  t.text(N.substring(0, 38), _, 16),
    t.setFont("helvetica", "normal"),
    t.setFontSize(8.5);
  let z = 22;
  i?.company_cnpj && (t.text(`${W}: ${i.company_cnpj}`, _, z), (z += 4.5)),
    i?.company_address &&
      (t.text(`${A}: ${i.company_address}`.substring(0, 70), _, z), (z += 4.5));
  const $ = [];
  i?.company_phone && $.push(`Tel: ${i.company_phone}`),
    i?.company_email && $.push(i.company_email),
    $.length && t.text($.join("  |  ").substring(0, 70), _, z);
  const D = 56,
    C = d - a - D;
  s(f),
    t.roundedRect(C, 8, D, 26, 3, 3, "F"),
    c(l),
    t.setFont("helvetica", "bold"),
    t.setFontSize(11),
    t.text("ORÇAMENTO", C + D / 2, 16, { align: "center" }),
    t.setFontSize(9.5),
    t.text(o.quotation_number, C + D / 2, 22, { align: "center" }),
    t.setFont("helvetica", "normal"),
    t.setFontSize(7.5),
    c(y);
  const q = new Date(o.created_at);
  t.text(`Emitido em ${Y(q, "dd/MM/yyyy", { locale: H })}`, C + D / 2, 28.5, {
    align: "center",
  });
  let e = w + 12;
  const O = (n) => {
      s(l),
        t.roundedRect(a, e, 3, 5.5, 1.5, 1.5, "F"),
        c(I),
        t.setFont("helvetica", "bold"),
        t.setFontSize(10),
        t.text(n.toUpperCase(), a + 6, e + 4.3),
        (e += 9);
    },
    U = (n, x = 2) => {
      const g = Math.ceil(n.length / x),
        E = g * 8 + 6;
      s(M(l, 96)),
        T(L),
        t.setLineWidth(0.3),
        t.roundedRect(a, e, m, E, 2.5, 2.5, "FD");
      const X = m / x;
      n.forEach((Q, V) => {
        const tt = Math.floor(V / g),
          et = V % g,
          G = a + tt * X + 5,
          J = e + 8 + et * 8;
        t.setFont("helvetica", "normal"),
          t.setFontSize(7.5),
          c(y),
          t.text(Q[0].toUpperCase(), G, J - 3),
          t.setFont("helvetica", "bold"),
          t.setFontSize(9),
          c(R),
          t.text(t.splitTextToSize(Q[1] || "—", X - 10)[0] || "—", G, J + 1.5);
      }),
        (e += E + 8);
    };
  O("Dados do Cliente"),
    U([
      ["Cliente", o.client_name],
      [W, o.client_cpf_nif || "—"],
      ["Telefone", o.client_phone || "—"],
      [A, o.client_address || "—"],
    ]),
    O("Dados do Aparelho"),
    U(
      [
        ["Marca", o.device_brand || "—"],
        ["Modelo", o.device_model || "—"],
        ["Cor", o.device_color || "—"],
        ["IMEI", o.device_imei || "—"],
        ["Nº de Série", o.device_serial || "—"],
        [
          "Validade",
          (() => {
            const n = o.validity_date.includes("T")
              ? new Date(o.validity_date)
              : new Date(o.validity_date + "T12:00:00");
            return Y(n, "dd/MM/yyyy", { locale: H });
          })(),
        ],
      ],
      3
    ),
    O("Serviços e Peças");
  const r = [m - 24 - 32 - 32, 24, 32, 32],
    p = 9,
    j = () => {
      s(l),
        t.roundedRect(a, e, m, p, 2, 2, "F"),
        s(l),
        t.rect(a, e + p - 3, m, 3, "F"),
        c(f),
        t.setFont("helvetica", "bold"),
        t.setFontSize(8.5);
      let n = a + 4;
      t.text("DESCRIÇÃO", n, e + 6),
        (n += r[0]),
        t.text("QTD", n + r[1] / 2, e + 6, { align: "center" }),
        (n += r[1]),
        t.text("UNITÁRIO", n + r[2] - 4, e + 6, { align: "right" }),
        (n += r[2]),
        t.text("TOTAL", n + r[3] - 4, e + 6, { align: "right" }),
        (e += p);
    };
  j(),
    t.setFont("helvetica", "normal"),
    t.setFontSize(9),
    o.services.forEach((n, x) => {
      e + p > h - 40 &&
        (t.addPage(),
        (e = a + 6),
        j(),
        t.setFont("helvetica", "normal"),
        t.setFontSize(9)),
        x % 2 === 0 && (s(Z), t.rect(a, e, m, p, "F")),
        T(L),
        t.setLineWidth(0.2),
        t.line(a, e + p, a + m, e + p),
        c(R);
      let g = a + 4;
      const E = t.splitTextToSize(n.description || "—", r[0] - 8)[0];
      t.text(E, g, e + 6),
        (g += r[0]),
        t.text(String(n.quantity), g + r[1] / 2, e + 6, { align: "center" }),
        (g += r[1]),
        t.text(v(n.unit_price), g + r[2] - 4, e + 6, { align: "right" }),
        (g += r[2]),
        t.setFont("helvetica", "bold"),
        t.text(v(n.total), g + r[3] - 4, e + 6, { align: "right" }),
        t.setFont("helvetica", "normal"),
        (e += p);
    }),
    (e += 8),
    e + 34 > h - 40 && (t.addPage(), (e = a + 6));
  const u = 78,
    F = d - a - u,
    k = o.discount > 0 ? 30 : 23;
  s(M(l, 94)),
    T(M(l, 60)),
    t.setLineWidth(0.4),
    t.roundedRect(F, e, u, k, 2.5, 2.5, "FD");
  let b = e + 8;
  if (
    (t.setFont("helvetica", "normal"),
    t.setFontSize(9),
    c(y),
    t.text("Subtotal", F + 5, b),
    c(R),
    t.text(v(o.subtotal), F + u - 5, b, { align: "right" }),
    (b += 7),
    o.discount > 0 &&
      (c(y),
      t.text("Desconto", F + 5, b),
      c({ r: 200, g: 60, b: 60 }),
      t.text(`- ${v(o.discount)}`, F + u - 5, b, { align: "right" }),
      (b += 7)),
    s(l),
    t.roundedRect(F, b - 4.5, u, 11, 2.5, 2.5, "F"),
    c(f),
    t.setFont("helvetica", "bold"),
    t.setFontSize(10),
    t.text("TOTAL", F + 5, b + 2.5),
    t.setFontSize(12),
    t.text(v(o.total), F + u - 5, b + 2.8, { align: "right" }),
    i?.warranty_days &&
      (s(M({ r: 16, g: 185, b: 129 }, 88)),
      t.roundedRect(a, e, F - a - 6, 14, 2.5, 2.5, "F"),
      c({ r: 8, g: 110, b: 78 }),
      t.setFont("helvetica", "bold"),
      t.setFontSize(9),
      t.text(`Garantia dos serviços: ${i.warranty_days} dias`, a + 5, e + 8.5)),
    (e += k + 10),
    o.observations)
  ) {
    const n = t.splitTextToSize(o.observations, m - 10),
      x = Math.min(n.length, 8) * 4.5 + 12;
    e + x > h - 42 && (t.addPage(), (e = a + 6)),
      s({ r: 250, g: 250, b: 252 }),
      T(L),
      t.setLineWidth(0.3),
      t.roundedRect(a, e, m, x, 2.5, 2.5, "FD"),
      c(I),
      t.setFont("helvetica", "bold"),
      t.setFontSize(9),
      t.text("OBSERVAÇÕES E CONDIÇÕES", a + 5, e + 6.5),
      t.setFont("helvetica", "normal"),
      t.setFontSize(8),
      c(R),
      t.text(n.slice(0, 8), a + 5, e + 12),
      (e += x + 10);
  }
  e + 26 > h - 24 && (t.addPage(), (e = h - 60));
  const P = (m - 14) / 2;
  T(y),
    t.setLineWidth(0.4),
    t.line(a, e + 12, a + P, e + 12),
    t.line(d - a - P, e + 12, d - a, e + 12),
    t.setFont("helvetica", "normal"),
    t.setFontSize(8.5),
    c(y),
    t.text("Assinatura do Cliente", a + P / 2, e + 17, { align: "center" }),
    t.text("Assinatura do Responsável Técnico", d - a - P / 2, e + 17, {
      align: "center",
    });
  const B = t.getNumberOfPages();
  for (let n = 1; n <= B; n++)
    t.setPage(n),
      s(l),
      t.rect(0, h - 12, d, 12, "F"),
      c(f),
      t.setFont("helvetica", "normal"),
      t.setFontSize(7.5),
      t.text(N.substring(0, 45), a, h - 4.5),
      t.text(`Orçamento ${o.quotation_number}`, d / 2, h - 4.5, {
        align: "center",
      }),
      t.text(`Página ${n}/${B}`, d - a, h - 4.5, { align: "right" });
  t.save(`orcamento-${o.quotation_number}.pdf`);
}
export { dt as g };
