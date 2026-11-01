import {
  r as m,
  cD as J,
  z as U,
  cf as G,
  i as H,
  j as e,
  b5 as Z,
  b6 as K,
  b7 as Q,
  b8 as W,
  b9 as O,
  s as X,
  G as w,
  b4 as ee,
  B as te,
  bl as se,
  ae as oe,
  dd as re,
  w as y,
  dx as P,
  dZ as ae,
} from "./index-V8ZHCWL2.js";
import { C as ne } from "./CurrencyExportDialog-HmiEHQbG.js";
import { b as ce } from "./financeReportPDFGenerator-qoM5ezYg.js";
const me = () => {
  const [f, R] = m.useState([]),
    [v, $] = m.useState("all"),
    [k, C] = m.useState(!0),
    [q, D] = m.useState(!1),
    [n, F] = m.useState(null),
    [u, L] = m.useState(null),
    { format: j } = J(),
    { user: N } = U(),
    { effectiveUserId: B } = G(),
    g = B || N?.id || "",
    { toast: b } = H();
  m.useEffect(() => {
    if (!N) return;
    (async () => {
      C(!0);
      try {
        const [i, p, x, S] = await Promise.all([
            y
              .from("transactions")
              .select("*")
              .eq("user_id", g)
              .order("date", { ascending: !1 }),
            y
              .from("service_orders")
              .select("*")
              .eq("user_id", g)
              .eq("status", "completed"),
            y
              .from("stock_movements")
              .select("quantity, purchase_value, reason, type, created_at")
              .eq("user_id", g),
            y.from("user_settings").select("*").eq("user_id", g).maybeSingle(),
          ]),
          { data: t, error: a } = i,
          { data: d, error: h } = p,
          { data: V, error: E } = x,
          { data: z } = S;
        if (a) throw a;
        if (h) throw h;
        if (E) throw E;
        L(z);
        const c = {};
        d?.forEach((r) => {
          const o = P(r.entry_date),
            l = `${o.getFullYear()}-${o.getMonth()}`;
          c[l] ||
            (c[l] = {
              month: o.toLocaleDateString("pt-BR", { month: "long" }),
              monthNum: o.getMonth(),
              year: o.getFullYear(),
              revenue: 0,
              expenses: 0,
              productCost: 0,
              profit: 0,
              completedOS: 0,
              transactions: [],
            }),
            c[l].completedOS++;
        }),
          t?.forEach((r) => {
            const o = P(r.date),
              l = `${o.getFullYear()}-${o.getMonth()}`;
            c[l] ||
              (c[l] = {
                month: o.toLocaleDateString("pt-BR", { month: "long" }),
                monthNum: o.getMonth(),
                year: o.getFullYear(),
                revenue: 0,
                expenses: 0,
                productCost: 0,
                profit: 0,
                completedOS: 0,
                transactions: [],
              });
            const _ = parseFloat(r.amount) || 0;
            c[l].transactions.push(r),
              r.type === "income" ? (c[l].revenue += _) : (c[l].expenses += _);
          }),
          (V || []).forEach((r) => {
            if (!ae(r)) return;
            const o = new Date(r.created_at),
              l = `${o.getFullYear()}-${o.getMonth()}`;
            c[l] ||
              (c[l] = {
                month: o.toLocaleDateString("pt-BR", { month: "long" }),
                monthNum: o.getMonth(),
                year: o.getFullYear(),
                revenue: 0,
                expenses: 0,
                productCost: 0,
                profit: 0,
                completedOS: 0,
                transactions: [],
              }),
              (c[l].productCost +=
                (Number(r.purchase_value) || 0) *
                Math.max(Number(r.quantity) || 0, 1));
          }),
          Object.values(c).forEach((r) => {
            r.profit = r.revenue - r.expenses - r.productCost;
          });
        const A = Object.values(c).sort((r, o) =>
          o.year !== r.year ? o.year - r.year : o.monthNum - r.monthNum
        );
        R(A);
      } catch {
        b({
          title: "Erro ao carregar dados",
          description: "Não foi possível carregar os relatórios.",
          variant: "destructive",
        });
      } finally {
        C(!1);
      }
    })();
  }, [N, g]);
  const M = v === "all" ? f : f.filter((s) => `${s.year}` === v),
    T = [...new Set(f.map((s) => s.year))],
    Y = (s) => {
      F(s), D(!0);
    },
    I = async (s) => {
      if (n)
        try {
          const i = [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ],
            p = [],
            x = [];
          n.transactions.forEach((t) => {
            const a = parseFloat(t.amount) || 0;
            if (t.type === "income") {
              const d = p.find((h) => h.category === t.category);
              d
                ? (d.total += a)
                : p.push({ category: t.category || "Outros", total: a });
            } else {
              const d = x.find((h) => h.category === t.category);
              d
                ? (d.total += a)
                : x.push({ category: t.category || "Outros", total: a });
            }
          }),
            p.sort((t, a) => a.total - t.total),
            x.sort((t, a) => a.total - t.total);
          const S = {
            period: `${i[n.monthNum]} ${n.year}`,
            totalIncome: n.revenue,
            totalExpense: n.expenses,
            netProfit: n.profit,
            totalSales: n.transactions
              .filter(
                (t) => t.type === "income" && t.category === "Venda de Produtos"
              )
              .reduce((t, a) => t + (parseFloat(a.amount) || 0), 0),
            salesCount: n.transactions.filter(
              (t) => t.type === "income" && t.category === "Venda de Produtos"
            ).length,
            quickRevenue: n.transactions
              .filter(
                (t) => t.type === "income" && t.category !== "Venda de Produtos"
              )
              .reduce((t, a) => t + (parseFloat(a.amount) || 0), 0),
            transactions: n.transactions.map((t) => ({
              date: t.date,
              description: t.description,
              amount: parseFloat(t.amount) || 0,
              type: t.type,
              category: t.category || "Outros",
            })),
            incomeByCategory: p,
            expenseByCategory: x,
            companyName: u?.company_name || "Tech OS Pro",
            companyLogo: u?.company_logo || "",
            companyPhone: u?.company_phone || "",
            companyAddress: u?.company_address || "",
            companyCNPJ: u?.company_cnpj || "",
            companyDocumentType: u?.company_document_type || "cnpj",
            currency: s,
          };
          await ce(S),
            b({
              title: "PDF gerado com sucesso!",
              description: `Relatório de ${n.month} ${n.year} exportado.`,
            });
        } catch {
          b({
            title: "Erro ao gerar PDF",
            description: "Ocorreu um erro ao exportar o relatório.",
            variant: "destructive",
          });
        } finally {
          F(null);
        }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "mb-6",
        children: [
          e.jsx("h1", {
            className: "text-3xl font-bold mb-2",
            children: "Faturamento Mensal",
          }),
          e.jsx("p", {
            className: "text-muted-foreground",
            children: "Histórico detalhado de faturamento por mês",
          }),
        ],
      }),
      e.jsx("div", {
        className: "mb-6",
        children: e.jsxs(Z, {
          value: v,
          onValueChange: $,
          children: [
            e.jsx(K, {
              className: "w-64",
              children: e.jsx(Q, { placeholder: "Selecione o período" }),
            }),
            e.jsxs(W, {
              children: [
                e.jsx(O, { value: "all", children: "Todos os Períodos" }),
                T.map((s) => e.jsx(O, { value: `${s}`, children: s }, s)),
              ],
            }),
          ],
        }),
      }),
      k
        ? e.jsx("div", {
            className: "flex items-center justify-center py-12",
            children: e.jsx(X, {
              className: "w-8 h-8 animate-spin text-primary",
            }),
          })
        : e.jsx("div", {
            className: "grid gap-6",
            children:
              M.length === 0
                ? e.jsxs(w, {
                    className: "p-12 text-center",
                    children: [
                      e.jsx(ee, {
                        className:
                          "w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50",
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground",
                        children:
                          "Nenhum dado disponível para o período selecionado",
                      }),
                    ],
                  })
                : M.map((s, i) =>
                    e.jsxs(
                      w,
                      {
                        className: "p-6 bg-card border-border",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsxs("h3", {
                                    className: "text-xl font-bold capitalize",
                                    children: [s.month, " ", s.year],
                                  }),
                                  e.jsxs("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [s.completedOS, " OS Concluídas"],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsxs(te, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => Y(s),
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx(se, { className: "w-4 h-4" }),
                                      "Exportar PDF",
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: `p-3 rounded-lg ${
                                      s.profit >= 0
                                        ? "bg-primary/20"
                                        : "bg-destructive/20"
                                    }`,
                                    children:
                                      s.profit >= 0
                                        ? e.jsx(oe, {
                                            className: "w-6 h-6 text-primary",
                                          })
                                        : e.jsx(re, {
                                            className:
                                              "w-6 h-6 text-destructive",
                                          }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "grid grid-cols-3 gap-4",
                            children: [
                              e.jsxs("div", {
                                className: "p-4 rounded-lg bg-secondary/30",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-muted-foreground mb-1",
                                    children: "Receitas",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xl font-bold text-green-600",
                                    children: j(s.revenue),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "p-4 rounded-lg bg-secondary/30",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-muted-foreground mb-1",
                                    children: "Despesas",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xl font-bold text-destructive",
                                    children: j(s.expenses),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "p-4 rounded-lg bg-secondary/30",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-muted-foreground mb-1",
                                    children: "Lucro Líquido",
                                  }),
                                  e.jsx("p", {
                                    className: `text-xl font-bold ${
                                      s.profit >= 0
                                        ? "text-primary"
                                        : "text-destructive"
                                    }`,
                                    children: j(s.profit),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      i
                    )
                  ),
          }),
      e.jsx(ne, {
        open: q,
        onOpenChange: D,
        onConfirm: I,
        title: "Exportar Relatório Mensal",
      }),
    ],
  });
};
export { me as default };
