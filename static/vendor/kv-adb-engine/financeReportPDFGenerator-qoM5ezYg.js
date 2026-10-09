import { bi as P, bF as D } from "./index-V8ZHCWL2.js";
const n = {
    black: [20, 20, 20],
    darkGray: [50, 50, 50],
    gray: [100, 100, 100],
    lightGray: [220, 220, 220],
    white: [255, 255, 255],
    primary: [16, 185, 129],
    primaryDark: [5, 150, 105],
    success: [34, 197, 94],
    danger: [239, 68, 68],
    tableHeader: [24, 24, 27],
    tableRowAlt: [250, 250, 250],
    accent: [59, 130, 246],
  },
  a = (r, t, i, m = n.black) => {
    r.setFont("helvetica", t), r.setFontSize(i), r.setTextColor(...m);
  },
  O = (r, t, i, m, o = 0.5) => {
    r.setDrawColor(...n.lightGray), r.setLineWidth(o), r.line(t, i, m, i);
  },
  f = (r, t, i, m) => {
    const o = r.internal.pageSize.getWidth(),
      b = 15;
    let g = 8;
    r.setFillColor(...n.primary),
      r.rect(0, 0, o, 4, "F"),
      r.setFillColor(...n.primaryDark),
      r.rect(0, 4, o, 1, "F"),
      (g = 18),
      a(r, "bold", 18, n.black),
      r.text(m.companyName || "RELATÓRIO EMPRESARIAL", b, g),
      (g += 10),
      a(r, "bold", 14, n.primary),
      r.text(t, b, g),
      i && ((g += 6), a(r, "normal", 10, n.gray), r.text(i, b, g)),
      a(r, "normal", 8, n.gray);
    let e = 18;
    if (
      (r.text(`Gerado em: ${new Date().toLocaleString("pt-BR")}`, o - b, e, {
        align: "right",
      }),
      m.companyPhone &&
        ((e += 5), r.text(m.companyPhone, o - b, e, { align: "right" })),
      m.companyCNPJ)
    ) {
      e += 5;
      const s = m.companyDocumentType === "nif" ? "NIF" : "CNPJ";
      r.text(`${s}: ${m.companyCNPJ}`, o - b, e, { align: "right" });
    }
    return (
      (g += 10),
      r.setDrawColor(...n.lightGray),
      r.setLineWidth(0.5),
      r.line(b, g, o - b, g),
      g + 8
    );
  },
  A = (r, t, i, m, o, b, g, e = n.primary) => {
    r.setFillColor(250, 250, 250),
      r.roundedRect(t, i, m, o, 3, 3, "F"),
      r.setFillColor(...e),
      r.rect(t, i + 3, 3, o - 6, "F"),
      a(r, "normal", 8, n.gray),
      r.text(b.toUpperCase(), t + 10, i + 12),
      a(r, "bold", 14, n.black),
      r.text(g, t + 10, i + 24);
  },
  L = async (r) => {
    const t = new P(),
      i = t.internal.pageSize.getWidth(),
      m = t.internal.pageSize.getHeight(),
      o = 15,
      b = r.currency || "BRL",
      g = (y) => D(y, b);
    let e = f(t, "RELATÓRIO DE VENDAS", `Período: ${r.period}`, r);
    const s = (i - 2 * o - 20) / 3,
      C = 32;
    A(t, o, e, s, C, "Receita Total", g(r.totalRevenue), n.success),
      A(t, o + s + 10, e, s, C, "Custo Total", g(r.totalCost), n.danger),
      A(
        t,
        o + 2 * (s + 10),
        e,
        s,
        C,
        "Lucro Líquido",
        g(r.totalProfit),
        n.primary
      ),
      (e += C + 15),
      a(t, "bold", 10, n.black),
      t.text("DETALHAMENTO DAS VENDAS", o, e),
      (e += 8),
      t.setFillColor(...n.tableHeader),
      t.rect(o, e, i - 2 * o, 10, "F"),
      a(t, "bold", 8, n.white),
      t.text("DATA", o + 3, e + 7),
      t.text("PRODUTO", o + 30, e + 7),
      t.text("RECEITA", o + 110, e + 7),
      t.text("CUSTO", o + 140, e + 7),
      t.text("LUCRO", o + 170, e + 7),
      (e += 12),
      r.sales.forEach((y, l) => {
        e > m - 40 && (t.addPage(), (e = o)),
          l % 2 === 0 &&
            (t.setFillColor(...n.tableRowAlt),
            t.rect(o, e - 5, i - 2 * o, 8, "F")),
          a(t, "normal", 8, n.black),
          t.text(new Date(y.date).toLocaleDateString("pt-BR"), o + 3, e);
        const x =
          y.product_name.length > 40
            ? y.product_name.substring(0, 40) + "..."
            : y.product_name;
        t.text(x, o + 30, e),
          t.text(g(y.amount), o + 110, e),
          t.text(g(y.cost), o + 140, e),
          a(t, "bold", 8, y.profit >= 0 ? n.black : n.darkGray),
          t.text(g(y.profit), o + 170, e),
          (e += 8);
      }),
      (e += 5),
      O(t, o, e, i - o, 1),
      (e += 8),
      a(t, "bold", 10, n.black),
      t.text("TOTAL:", o + 3, e),
      t.text(g(r.totalRevenue), o + 110, e),
      t.text(g(r.totalCost), o + 140, e),
      t.text(g(r.totalProfit), o + 170, e);
    const u = m - 10;
    O(t, o, u - 5, i - o, 0.3),
      a(t, "normal", 7, n.gray),
      t.text("Documento gerado automaticamente pelo sistema", i / 2, u, {
        align: "center",
      }),
      t.save(`Relatorio-Vendas-${new Date().toISOString().split("T")[0]}.pdf`);
  },
  k = async (r) => {
    const t = new P({ orientation: "landscape" }),
      i = t.internal.pageSize.getWidth(),
      m = t.internal.pageSize.getHeight(),
      o = 12,
      b = r.currency || "BRL",
      g = (c) => D(c, b);
    t.setFillColor(...n.black), t.rect(0, 0, i, 2, "F");
    let e = 12;
    a(t, "bold", 14, n.black),
      t.text(r.companyName || "RELATÓRIO DE ESTOQUE", o, e),
      a(t, "normal", 8, n.gray),
      t.text(`Gerado em: ${new Date().toLocaleString("pt-BR")}`, i - o, e, {
        align: "right",
      }),
      (e += 8),
      O(t, o, e, i - o, 0.8),
      (e += 10);
    const s = (i - 2 * o - 30) / 4,
      C = 22;
    t.setDrawColor(...n.black),
      t.setLineWidth(0.8),
      t.rect(o, e, s, C, "S"),
      a(t, "normal", 7, n.gray),
      t.text("TOTAL DE ITENS", o + 4, e + 8),
      a(t, "bold", 12, n.black),
      t.text(r.totalParts.toString(), o + 4, e + 18),
      t.rect(o + s + 10, e, s, C, "S"),
      a(t, "normal", 7, n.gray),
      t.text("VALOR EM ESTOQUE", o + s + 14, e + 8),
      a(t, "bold", 12, n.black),
      t.text(g(r.totalValue), o + s + 14, e + 18),
      t.rect(o + 2 * (s + 10), e, s, C, "S"),
      a(t, "normal", 7, n.gray),
      t.text("ESTOQUE BAIXO", o + 2 * (s + 10) + 4, e + 8),
      a(t, "bold", 12, n.black),
      t.text(r.lowStockCount.toString(), o + 2 * (s + 10) + 4, e + 18);
    const u = r.totalParts > 0 ? r.totalValue / r.totalParts : 0;
    t.rect(o + 3 * (s + 10), e, s, C, "S"),
      a(t, "normal", 7, n.gray),
      t.text("PREÇO MÉDIO", o + 3 * (s + 10) + 4, e + 8),
      a(t, "bold", 12, n.black),
      t.text(g(u), o + 3 * (s + 10) + 4, e + 18),
      (e += C + 12),
      a(t, "bold", 9, n.black),
      t.text("INVENTÁRIO COMPLETO", o, e),
      (e += 6);
    const y = i - 2 * o,
      l = {
        code: y * 0.1,
        name: y * 0.3,
        category: y * 0.18,
        supplier: y * 0.15,
        qty: y * 0.07,
        min: y * 0.07,
        price: y * 0.13,
      };
    t.setFillColor(...n.tableHeader),
      t.rect(o, e, y, 9, "F"),
      a(t, "bold", 7, n.white);
    let x = o + 3;
    t.text("CÓDIGO", x, e + 6),
      (x += l.code),
      t.text("NOME DO PRODUTO", x, e + 6),
      (x += l.name),
      t.text("CATEGORIA", x, e + 6),
      (x += l.category),
      t.text("FORNECEDOR", x, e + 6),
      (x += l.supplier),
      t.text("QTD", x, e + 6),
      (x += l.qty),
      t.text("MÍN", x, e + 6),
      (x += l.min),
      t.text("PREÇO UNIT.", x, e + 6),
      (e += 11);
    const T = 7;
    r.parts.forEach((c, d) => {
      if (e > m - 25) {
        t.addPage(),
          (e = 15),
          t.setFillColor(...n.tableHeader),
          t.rect(o, e, y, 9, "F"),
          a(t, "bold", 7, n.white);
        let R = o + 3;
        t.text("CÓDIGO", R, e + 6),
          (R += l.code),
          t.text("NOME DO PRODUTO", R, e + 6),
          (R += l.name),
          t.text("CATEGORIA", R, e + 6),
          (R += l.category),
          t.text("FORNECEDOR", R, e + 6),
          (R += l.supplier),
          t.text("QTD", R, e + 6),
          (R += l.qty),
          t.text("MÍN", R, e + 6),
          (R += l.min),
          t.text("PREÇO UNIT.", R, e + 6),
          (e += 11);
      }
      const F = c.quantity <= c.minQuantity;
      F
        ? t.setFillColor(230, 230, 230)
        : d % 2 === 0
        ? t.setFillColor(...n.tableRowAlt)
        : t.setFillColor(...n.white),
        t.rect(o, e - 4, y, T, "F"),
        t.setDrawColor(...n.lightGray),
        t.setLineWidth(0.2),
        t.line(o, e + 3, o + y, e + 3),
        a(t, F ? "bold" : "normal", 7, n.black),
        (x = o + 3),
        t.text((c.code || "-").substring(0, 12), x, e),
        (x += l.code);
      const h = c.name.length > 38 ? c.name.substring(0, 38) + "..." : c.name;
      t.text(h, x, e), (x += l.name);
      const S =
        (c.category || "-").length > 20
          ? (c.category || "-").substring(0, 20) + "..."
          : c.category || "-";
      t.text(S, x, e), (x += l.category);
      const E =
        (c.supplier || "-").length > 18
          ? (c.supplier || "-").substring(0, 18) + "..."
          : c.supplier || "-";
      t.text(E, x, e),
        (x += l.supplier),
        t.text(c.quantity.toString(), x, e),
        (x += l.qty),
        t.text(c.minQuantity.toString(), x, e),
        (x += l.min),
        a(t, "bold", 7, n.black),
        t.text(g(c.purchasePrice), x, e),
        F && (a(t, "bold", 8, n.darkGray), t.text("!", o + y - 5, e)),
        (e += T);
    }),
      t.setDrawColor(...n.black),
      t.setLineWidth(0.5),
      t.line(o, e, o + y, e),
      (e += 8),
      a(t, "normal", 7, n.gray),
      t.text("! Itens em destaque possuem estoque abaixo do mínimo", o, e);
    const p = m - 8;
    O(t, o, p - 4, i - o, 0.3),
      a(t, "normal", 7, n.gray),
      t.text("Documento gerado automaticamente pelo sistema", i / 2, p, {
        align: "center",
      }),
      t.save(`Relatorio-Estoque-${new Date().toISOString().split("T")[0]}.pdf`);
  },
  w = async (r) => {
    const t = new P(),
      i = t.internal.pageSize.getWidth(),
      m = t.internal.pageSize.getHeight(),
      o = 15,
      b = r.currency || "BRL",
      g = (F) => D(F, b);
    t.setFillColor(16, 185, 129),
      t.rect(0, 0, i, 6, "F"),
      t.setFillColor(5, 150, 105),
      t.rect(0, 6, i, 2, "F");
    let e = 20;
    if (
      (a(t, "bold", 20, n.black),
      t.text(r.companyName || "RELATÓRIO FINANCEIRO", o, e),
      (e += 10),
      a(t, "bold", 14, n.primary),
      t.text("RELATÓRIO FINANCEIRO MENSAL", o, e),
      (e += 6),
      a(t, "normal", 10, n.gray),
      t.text(`Período: ${r.period}`, o, e),
      a(t, "normal", 8, n.gray),
      t.text(`Gerado em: ${new Date().toLocaleString("pt-BR")}`, i - o, 20, {
        align: "right",
      }),
      r.companyPhone && t.text(r.companyPhone, i - o, 25, { align: "right" }),
      r.companyCNPJ)
    ) {
      const F = r.companyDocumentType === "nif" ? "NIF" : "CNPJ";
      t.text(`${F}: ${r.companyCNPJ}`, i - o, 30, { align: "right" });
    }
    (e += 12),
      t.setDrawColor(...n.lightGray),
      t.setLineWidth(0.5),
      t.line(o, e, i - o, e),
      (e += 15);
    const s = (i - 2 * o - 20) / 3,
      C = 40;
    t.setFillColor(236, 253, 245),
      t.roundedRect(o, e, s, C, 4, 4, "F"),
      t.setFillColor(34, 197, 94),
      t.rect(o, e + 4, 4, C - 8, "F"),
      a(t, "normal", 9, n.gray),
      t.text("RECEITA TOTAL", o + 12, e + 14),
      a(t, "bold", 16, [34, 197, 94]),
      t.text(g(r.totalIncome), o + 12, e + 30),
      t.setFillColor(254, 242, 242),
      t.roundedRect(o + s + 10, e, s, C, 4, 4, "F"),
      t.setFillColor(239, 68, 68),
      t.rect(o + s + 10, e + 4, 4, C - 8, "F"),
      a(t, "normal", 9, n.gray),
      t.text("DESPESAS TOTAIS", o + s + 22, e + 14),
      a(t, "bold", 16, [239, 68, 68]),
      t.text(g(r.totalExpense), o + s + 22, e + 30);
    const u = r.netProfit >= 0 ? [16, 185, 129] : [239, 68, 68];
    t.setFillColor(240, 253, 250),
      t.roundedRect(o + 2 * (s + 10), e, s, C, 4, 4, "F"),
      t.setFillColor(...u),
      t.rect(o + 2 * (s + 10), e + 4, 4, C - 8, "F"),
      a(t, "normal", 9, n.gray),
      t.text("LUCRO LÍQUIDO", o + 2 * (s + 10) + 12, e + 14),
      a(t, "bold", 16, u),
      t.text(g(r.netProfit), o + 2 * (s + 10) + 12, e + 30),
      (e += C + 15);
    const y =
      r.totalIncome > 0
        ? ((r.netProfit / r.totalIncome) * 100).toFixed(1)
        : "0";
    a(t, "normal", 10, n.gray), t.text(`Margem de Lucro: ${y}%`, o, e);
    const l = 100,
      x = 6,
      T = Math.min(Math.max(parseFloat(y), 0), 100);
    t.setFillColor(230, 230, 230),
      t.roundedRect(o + 95, e - 5, l, x, 2, 2, "F"),
      t.setFillColor(...(r.netProfit >= 0 ? n.primary : n.danger)),
      t.roundedRect(o + 95, e - 5, (l * T) / 100, x, 2, 2, "F"),
      (e += 20);
    const p = (i - 2 * o - 20) / 3,
      c = 28;
    if (
      (t.setDrawColor(...n.lightGray),
      t.setLineWidth(0.8),
      t.rect(o, e, p, c, "S"),
      a(t, "normal", 8, n.gray),
      t.text("Vendas de Produtos", o + 5, e + 10),
      a(t, "bold", 12, n.black),
      t.text(g(r.totalSales), o + 5, e + 22),
      t.rect(o + p + 10, e, p, c, "S"),
      a(t, "normal", 8, n.gray),
      t.text("Receitas Rápidas", o + p + 15, e + 10),
      a(t, "bold", 12, n.black),
      t.text(g(r.quickRevenue), o + p + 15, e + 22),
      t.rect(o + 2 * (p + 10), e, p, c, "S"),
      a(t, "normal", 8, n.gray),
      t.text("Número de Vendas", o + 2 * (p + 10) + 5, e + 10),
      a(t, "bold", 12, n.black),
      t.text(r.salesCount.toString(), o + 2 * (p + 10) + 5, e + 22),
      (e += c + 20),
      r.incomeByCategory.length > 0)
    ) {
      a(t, "bold", 11, n.black),
        t.text("RECEITAS POR CATEGORIA", o, e),
        (e += 8),
        t.setFillColor(16, 185, 129),
        t.rect(o, e, i - 2 * o, 9, "F"),
        a(t, "bold", 8, n.white),
        t.text("CATEGORIA", o + 5, e + 6),
        t.text("VALOR", i - o - 35, e + 6),
        t.text("%", i - o - 5, e + 6),
        (e += 11);
      const F = r.incomeByCategory.reduce((h, S) => h + S.total, 0);
      r.incomeByCategory.slice(0, 6).forEach((h, S) => {
        S % 2 === 0 &&
          (t.setFillColor(250, 250, 250), t.rect(o, e - 4, i - 2 * o, 8, "F"));
        const E = F > 0 ? ((h.total / F) * 100).toFixed(1) : "0";
        a(t, "normal", 8, n.black),
          t.text(h.category || "Sem categoria", o + 5, e),
          a(t, "bold", 8, n.black),
          t.text(g(h.total), i - o - 35, e),
          a(t, "normal", 8, n.gray),
          t.text(`${E}%`, i - o - 5, e),
          (e += 8);
      }),
        (e += 8);
    }
    if (r.expenseByCategory.length > 0) {
      e > m - 100 && (t.addPage(), (e = o + 10)),
        a(t, "bold", 11, n.black),
        t.text("DESPESAS POR CATEGORIA", o, e),
        (e += 8),
        t.setFillColor(239, 68, 68),
        t.rect(o, e, i - 2 * o, 9, "F"),
        a(t, "bold", 8, n.white),
        t.text("CATEGORIA", o + 5, e + 6),
        t.text("VALOR", i - o - 35, e + 6),
        t.text("%", i - o - 5, e + 6),
        (e += 11);
      const F = r.expenseByCategory.reduce((h, S) => h + S.total, 0);
      r.expenseByCategory.slice(0, 6).forEach((h, S) => {
        S % 2 === 0 &&
          (t.setFillColor(255, 250, 250), t.rect(o, e - 4, i - 2 * o, 8, "F"));
        const E = F > 0 ? ((h.total / F) * 100).toFixed(1) : "0";
        a(t, "normal", 8, n.black),
          t.text(h.category || "Sem categoria", o + 5, e),
          a(t, "bold", 8, n.black),
          t.text(g(h.total), i - o - 35, e),
          a(t, "normal", 8, n.gray),
          t.text(`${E}%`, i - o - 5, e),
          (e += 8);
      }),
        (e += 10);
    }
    r.transactions.length > 0 &&
      e < m - 80 &&
      (a(t, "bold", 11, n.black),
      t.text("ÚLTIMAS TRANSAÇÕES", o, e),
      (e += 8),
      t.setFillColor(...n.tableHeader),
      t.rect(o, e, i - 2 * o, 9, "F"),
      a(t, "bold", 7, n.white),
      t.text("DATA", o + 3, e + 6),
      t.text("DESCRIÇÃO", o + 25, e + 6),
      t.text("CATEGORIA", o + 95, e + 6),
      t.text("TIPO", o + 140, e + 6),
      t.text("VALOR", o + 162, e + 6),
      (e += 11),
      r.transactions.slice(0, 12).forEach((F, h) => {
        if (e > m - 25) return;
        h % 2 === 0 &&
          (t.setFillColor(...n.tableRowAlt),
          t.rect(o, e - 4, i - 2 * o, 7, "F")),
          a(t, "normal", 7, n.black),
          t.text(new Date(F.date).toLocaleDateString("pt-BR"), o + 3, e);
        const S =
          F.description.length > 35
            ? F.description.substring(0, 32) + "..."
            : F.description;
        t.text(S, o + 25, e);
        const E =
          (F.category || "-").length > 16
            ? (F.category || "-").substring(0, 13) + "..."
            : F.category || "-";
        t.text(E, o + 95, e),
          a(
            t,
            "normal",
            7,
            F.type === "income" ? [34, 197, 94] : [239, 68, 68]
          ),
          t.text(F.type === "income" ? "Receita" : "Despesa", o + 140, e),
          a(t, "bold", 7, F.type === "income" ? [34, 197, 94] : [239, 68, 68]),
          t.text((F.type === "income" ? "+" : "-") + g(F.amount), o + 162, e),
          (e += 7);
      }));
    const d = m - 12;
    t.setDrawColor(...n.primary),
      t.setLineWidth(0.8),
      t.line(o, d - 6, i - o, d - 6),
      a(t, "normal", 7, n.gray),
      t.text(
        "Documento gerado automaticamente pelo sistema Tech OS Pro",
        i / 2,
        d,
        { align: "center" }
      ),
      t.save(
        `Relatorio-Financeiro-${r.period.replace(/\s/g, "-")}-${
          new Date().toISOString().split("T")[0]
        }.pdf`
      );
  },
  N = async (r) => {
    const t = new P({ orientation: "portrait", unit: "mm", format: "a4" }),
      i = t.internal.pageSize.getWidth(),
      m = t.internal.pageSize.getHeight(),
      o = r.currency || "BRL",
      b = (c) => D(c, o),
      g = [16, 185, 129],
      e = [239, 68, 68],
      s = [51, 133, 50],
      C = [30, 30, 30],
      u = [110, 110, 110],
      y = [245, 245, 245];
    t.setFillColor(...s),
      t.rect(0, 0, i, 32, "F"),
      t.setTextColor(255, 255, 255),
      t.setFont("helvetica", "bold"),
      t.setFontSize(18),
      t.text("RELATÓRIO FINANCEIRO", i / 2, 14, { align: "center" }),
      t.setFont("helvetica", "normal"),
      t.setFontSize(10),
      t.text(r.companyName || "Tech OS Pro", i / 2, 22, { align: "center" }),
      t.setFontSize(8),
      t.text(`Gerado em ${new Date().toLocaleString("pt-BR")}`, i / 2, 28, {
        align: "center",
      });
    let l = 40;
    t.setFillColor(...y),
      t.roundedRect(10, l, i - 20, 20, 2, 2, "F"),
      t.setTextColor(...C),
      t.setFont("helvetica", "bold"),
      t.setFontSize(9),
      t.text("Filtros aplicados:", 14, l + 6),
      t.setFont("helvetica", "normal"),
      t.setFontSize(8),
      t.text(`Período: ${r.filters.period}`, 14, l + 12),
      t.text(`Tipo: ${r.filters.type}`, 70, l + 12),
      t.text(`Categoria: ${r.filters.category}`, 110, l + 12),
      t.text(`Pagamento: ${r.filters.method}`, 14, l + 17),
      (l += 26);
    const x = (i - 30) / 3,
      T = (c, d, F, h) => {
        t.setFillColor(...h),
          t.roundedRect(c, l, x, 20, 2, 2, "F"),
          t.setTextColor(255, 255, 255),
          t.setFontSize(8),
          t.setFont("helvetica", "normal"),
          t.text(d, c + 3, l + 7),
          t.setFontSize(13),
          t.setFont("helvetica", "bold"),
          t.text(F, c + 3, l + 15);
      };
    T(10, "RECEITAS", b(r.totals.income), g),
      T(10 + x + 5, "DESPESAS", b(r.totals.expense), e),
      T(
        10 + (x + 5) * 2,
        "LUCRO LÍQUIDO",
        b(r.totals.profit),
        r.totals.profit >= 0 ? s : e
      ),
      (l += 26),
      r.byCategory.length > 0 &&
        (t.setTextColor(...C),
        t.setFont("helvetica", "bold"),
        t.setFontSize(11),
        t.text("Por Categoria", 10, l),
        (l += 5),
        t.setFillColor(...s),
        t.rect(10, l, i - 20, 6, "F"),
        t.setTextColor(255, 255, 255),
        t.setFontSize(8),
        t.text("Categoria", 12, l + 4),
        t.text("Valor", i - 12, l + 4, { align: "right" }),
        (l += 6),
        t.setTextColor(...C),
        t.setFont("helvetica", "normal"),
        r.byCategory.forEach((c, d) => {
          d % 2 === 0 &&
            (t.setFillColor(250, 250, 250), t.rect(10, l, i - 20, 5, "F")),
            t.text(c.name.substring(0, 60), 12, l + 3.5),
            t.text(b(c.value), i - 12, l + 3.5, { align: "right" }),
            (l += 5),
            l > m - 20 && (t.addPage(), (l = 20));
        }),
        (l += 4)),
      r.byMethod.length > 0 &&
        (l > m - 40 && (t.addPage(), (l = 20)),
        t.setTextColor(...C),
        t.setFont("helvetica", "bold"),
        t.setFontSize(11),
        t.text("Receitas por Forma de Pagamento", 10, l),
        (l += 5),
        t.setFillColor(...s),
        t.rect(10, l, i - 20, 6, "F"),
        t.setTextColor(255, 255, 255),
        t.setFontSize(8),
        t.text("Forma de Pagamento", 12, l + 4),
        t.text("Valor", i - 12, l + 4, { align: "right" }),
        (l += 6),
        t.setTextColor(...C),
        t.setFont("helvetica", "normal"),
        r.byMethod.forEach((c, d) => {
          d % 2 === 0 &&
            (t.setFillColor(250, 250, 250), t.rect(10, l, i - 20, 5, "F")),
            t.text(c.name, 12, l + 3.5),
            t.text(b(c.value), i - 12, l + 3.5, { align: "right" }),
            (l += 5),
            l > m - 20 && (t.addPage(), (l = 20));
        }),
        (l += 4)),
      r.transactions.length > 0 &&
        (l > m - 40 && (t.addPage(), (l = 20)),
        t.setTextColor(...C),
        t.setFont("helvetica", "bold"),
        t.setFontSize(11),
        t.text(`Detalhamento (${r.transactions.length})`, 10, l),
        (l += 5),
        t.setFillColor(...s),
        t.rect(10, l, i - 20, 6, "F"),
        t.setTextColor(255, 255, 255),
        t.setFontSize(7),
        t.text("Data", 12, l + 4),
        t.text("Descrição", 32, l + 4),
        t.text("Categoria", 100, l + 4),
        t.text("Pagamento", 135, l + 4),
        t.text("Valor", i - 12, l + 4, { align: "right" }),
        (l += 6),
        t.setFont("helvetica", "normal"),
        t.setFontSize(7),
        r.transactions.forEach((c, d) => {
          l > m - 15 &&
            (t.addPage(),
            (l = 20),
            t.setFillColor(...s),
            t.rect(10, l, i - 20, 6, "F"),
            t.setTextColor(255, 255, 255),
            t.text("Data", 12, l + 4),
            t.text("Descrição", 32, l + 4),
            t.text("Categoria", 100, l + 4),
            t.text("Pagamento", 135, l + 4),
            t.text("Valor", i - 12, l + 4, { align: "right" }),
            (l += 6),
            t.setFont("helvetica", "normal")),
            d % 2 === 0 &&
              (t.setFillColor(250, 250, 250), t.rect(10, l, i - 20, 5, "F")),
            t.setTextColor(...C);
          try {
            t.text(
              new Date(c.date + "T12:00:00").toLocaleDateString("pt-BR"),
              12,
              l + 3.5
            );
          } catch {
            t.text(c.date, 12, l + 3.5);
          }
          t.text((c.description || "").substring(0, 38), 32, l + 3.5),
            t.text((c.category || "-").substring(0, 18), 100, l + 3.5),
            t.text((c.paymentMethod || "-").substring(0, 18), 135, l + 3.5),
            t.setTextColor(...(c.type === "income" ? g : e)),
            t.text(
              `${c.type === "income" ? "+" : "-"}${b(c.amount)}`,
              i - 12,
              l + 3.5,
              { align: "right" }
            ),
            (l += 5);
        }));
    const p = t.getNumberOfPages();
    for (let c = 1; c <= p; c++)
      t.setPage(c),
        t.setFontSize(7),
        t.setTextColor(...u),
        t.text(`Página ${c} de ${p}`, i - 10, m - 5, { align: "right" }),
        t.text("Tech OS Pro · Relatório Financeiro", 10, m - 5);
    t.save(
      `relatorio-financeiro-${new Date().toISOString().split("T")[0]}.pdf`
    );
  };
export { N as a, w as b, L as c, k as g };
