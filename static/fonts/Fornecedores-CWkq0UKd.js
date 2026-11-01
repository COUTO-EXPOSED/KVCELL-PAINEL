import {
  bi as ye,
  bj as U,
  bk as X,
  bF as be,
  z as Ce,
  cf as Se,
  i as we,
  cD as Fe,
  cu as Pe,
  u as Te,
  r as d,
  d3 as K,
  d4 as _e,
  j as e,
  B as w,
  G as j,
  Y as u,
  $ as g,
  a1 as f,
  N as De,
  bz as Ee,
  bA as Me,
  bQ as ze,
  K as ke,
  bJ as ce,
  b3 as Ae,
  b5 as Re,
  b6 as Le,
  b7 as qe,
  b8 as $e,
  b9 as B,
  bl as He,
  a8 as Ie,
  ad as Be,
  bS as ie,
  ae as Ge,
  e as Oe,
  bb as oe,
  bg as Ue,
  bc as Ve,
  bd as We,
  be as Ke,
  bf as de,
  bh as Je,
  cb as Qe,
  cc as Ye,
  cd as Xe,
  b2 as Ze,
  I as F,
  aa as es,
  cz as ss,
  bm as ts,
  D as as,
  c as rs,
  a_ as ls,
  d as ns,
  n as P,
  T as cs,
  c7 as is,
  w as z,
  d5 as O,
} from "./index-V8ZHCWL2.js";
import {
  T as J,
  a as Q,
  b as k,
  c as x,
  d as Y,
  e as h,
} from "./table-Dmiq7g5Z.js";
import { A as xe } from "./arrow-left-CaH5Nh3G.js";
async function os(b) {
  const t = new ye(),
    T = t.internal.pageSize.width,
    V = t.internal.pageSize.height;
  let l = 15;
  const S = b.currency || "BRL",
    c = 15,
    A = (v) => be(v, S);
  t.setFillColor(75, 85, 99),
    t.rect(0, 0, T, 35, "F"),
    t.setFontSize(18),
    t.setFont("helvetica", "bold"),
    t.setTextColor(255),
    t.text("Relatorio de Fornecedores", T / 2, 15, { align: "center" }),
    t.setFontSize(10),
    t.setFont("helvetica", "normal"),
    t.text(`Periodo: ${b.periodLabel}`, T / 2, 24, { align: "center" }),
    t.setFontSize(8),
    t.text(
      `Gerado em: ${U(new Date(), "dd/MM/yyyy HH:mm", { locale: X })}`,
      T / 2,
      31,
      { align: "center" }
    ),
    (l = 45),
    t.setTextColor(0);
  const C = (T - c * 2 - 10) / 3,
    m = 20;
  t.setFillColor(243, 244, 246),
    t.roundedRect(c, l, C, m, 2, 2, "F"),
    t.setFontSize(8),
    t.setFont("helvetica", "normal"),
    t.setTextColor(107, 114, 128),
    t.text("Total Fornecedores", c + 5, l + 7),
    t.setFontSize(14),
    t.setFont("helvetica", "bold"),
    t.setTextColor(31, 41, 55),
    t.text(b.suppliers.length.toString(), c + 5, l + 16),
    t.setFillColor(243, 244, 246),
    t.roundedRect(c + C + 5, l, C, m, 2, 2, "F"),
    t.setFontSize(8),
    t.setFont("helvetica", "normal"),
    t.setTextColor(107, 114, 128),
    t.text("Total de Pecas", c + C + 10, l + 7),
    t.setFontSize(14),
    t.setFont("helvetica", "bold"),
    t.setTextColor(31, 41, 55),
    t.text(b.totalParts.toString(), c + C + 10, l + 16),
    t.setFillColor(243, 244, 246),
    t.roundedRect(c + (C + 5) * 2, l, C, m, 2, 2, "F"),
    t.setFontSize(8),
    t.setFont("helvetica", "normal"),
    t.setTextColor(107, 114, 128),
    t.text("Total Investido", c + (C + 5) * 2 + 5, l + 7),
    t.setFontSize(12),
    t.setFont("helvetica", "bold"),
    t.setTextColor(31, 41, 55),
    t.text(A(b.totalSpent), c + (C + 5) * 2 + 5, l + 16),
    (l += m + 10),
    t.setFillColor(107, 114, 128),
    t.rect(c, l, T - c * 2, 8, "F"),
    t.setFontSize(8),
    t.setFont("helvetica", "bold"),
    t.setTextColor(255),
    t.text("Fornecedor", c + 3, l + 5.5),
    t.text("Pecas", 75, l + 5.5),
    t.text("Compras", 95, l + 5.5),
    t.text("Total Gasto", 125, l + 5.5),
    t.text("Media/Compra", 160, l + 5.5),
    (l += 8);
  const _ = [...b.suppliers].sort(
      (v, H) => H.stats.totalSpent - v.stats.totalSpent
    ),
    R = V - l - 25,
    L = 7,
    q = Math.floor(R / L),
    $ = _.slice(0, q);
  t.setFont("helvetica", "normal"),
    $.forEach((v, H) => {
      H % 2 === 0 &&
        (t.setFillColor(249, 250, 251), t.rect(c, l, T - c * 2, L, "F")),
        t.setFontSize(8),
        t.setTextColor(55, 65, 81);
      const E = v.name.length > 22 ? v.name.substring(0, 22) + "..." : v.name;
      t.text(E, c + 3, l + 5),
        t.text(v.stats.totalParts.toString(), 75, l + 5),
        t.text(v.stats.totalMovements.toString(), 95, l + 5),
        t.setFont("helvetica", "bold"),
        t.setTextColor(31, 41, 55),
        t.text(A(v.stats.totalSpent), 125, l + 5),
        t.setFont("helvetica", "normal"),
        t.setTextColor(107, 114, 128),
        t.text(A(v.stats.averagePurchaseValue), 160, l + 5),
        (l += L);
    }),
    _.length > $.length &&
      ((l += 3),
      t.setFontSize(7),
      t.setTextColor(156, 163, 175),
      t.text(`* Mostrando ${$.length} de ${_.length} fornecedores`, c, l)),
    t.setFontSize(7),
    t.setTextColor(156, 163, 175),
    t.text("Tech OS Pro - Sistema de Gestao", T / 2, V - 10, {
      align: "center",
    });
  const D = `relatorio_fornecedores_${U(new Date(), "ddMMyyyy_HHmmss")}.pdf`;
  t.save(D);
}
const he = [
    "#10b981",
    "#3b82f6",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#84cc16",
  ],
  ms = () => {
    const { user: b } = Ce(),
      { effectiveUserId: t, isEmployee: T, employeeId: V } = Se(),
      l = t || b?.id || "",
      { toast: S } = we(),
      { format: c } = Fe(),
      { currency: A } = Pe(),
      C = Te(),
      [m, _] = d.useState([]),
      [R, L] = d.useState([]),
      [q, $] = d.useState([]),
      [D, v] = d.useState(""),
      [H, E] = d.useState(!1),
      [I, Z] = d.useState(null),
      [o, ee] = d.useState(null),
      [me, se] = d.useState(!0),
      [G, pe] = d.useState("30d"),
      [n, y] = d.useState({
        name: "",
        cnpj: "",
        email: "",
        phone: "",
        whatsapp: "",
        address: "",
        city: "",
        state: "",
        contactPerson: "",
        notes: "",
      });
    d.useEffect(() => {
      if (!b) return;
      (async () => {
        se(!0);
        const { data: a } = await z
          .from("suppliers")
          .select("*")
          .eq("user_id", l)
          .order("name");
        a &&
          _(
            a.map((N) => ({
              id: N.id,
              name: N.name,
              cnpj: N.cnpj,
              email: N.email,
              phone: N.phone,
              whatsapp: N.whatsapp,
              address: N.address,
              city: N.city,
              state: N.state,
              contactPerson: N.contact_person,
              notes: N.notes,
              isActive: N.is_active,
              createdAt: N.created_at,
            }))
          );
        const { data: i } = await z.from("parts").select("*").eq("user_id", l);
        i && L(i);
        const { data: r } = await z
          .from("stock_movements")
          .select("*, parts(name, supplier_id)")
          .eq("user_id", l)
          .order("created_at", { ascending: !1 });
        r && $(r), se(!1);
      })();
    }, [b]);
    const je = () => {
        const s = new Date();
        switch (G) {
          case "7d":
            return { start: O(s, 7), end: s };
          case "30d":
            return { start: O(s, 30), end: s };
          case "90d":
            return { start: O(s, 90), end: s };
          case "year":
            return { start: O(s, 365), end: s };
          default:
            return null;
        }
      },
      M = d.useMemo(() => {
        const s = je();
        return s
          ? q.filter((a) => {
              const i = K(a.created_at);
              return _e(i, s);
            })
          : q;
      }, [q, G]),
      p = d.useMemo(() => {
        const s = {};
        return (
          m.forEach((a) => {
            s[a.id] = { totalSpent: 0, totalParts: 0, partsCount: 0 };
          }),
          R.forEach((a) => {
            a.supplier_id &&
              s[a.supplier_id] &&
              (s[a.supplier_id].partsCount++,
              (s[a.supplier_id].totalParts += a.quantity));
          }),
          M.forEach((a) => {
            a.type === "entrada" &&
              a.parts?.supplier_id &&
              s[a.parts.supplier_id] &&
              ((s[a.parts.supplier_id].totalSpent +=
                (a.purchase_value || 0) * a.quantity),
              (!s[a.parts.supplier_id].lastPurchase ||
                a.created_at > s[a.parts.supplier_id].lastPurchase) &&
                (s[a.parts.supplier_id].lastPurchase = a.created_at));
          }),
          s
        );
      }, [m, R, M]),
      te = d.useMemo(
        () =>
          m
            .map((s) => ({
              name:
                s.name.length > 15 ? s.name.substring(0, 15) + "..." : s.name,
              valor: p[s.id]?.totalSpent || 0,
            }))
            .filter((s) => s.valor > 0)
            .sort((s, a) => a.valor - s.valor)
            .slice(0, 8),
        [m, p]
      ),
      W = d.useMemo(
        () =>
          m
            .map((s) => ({
              name:
                s.name.length > 15 ? s.name.substring(0, 15) + "..." : s.name,
              value: p[s.id]?.partsCount || 0,
            }))
            .filter((s) => s.value > 0)
            .sort((s, a) => a.value - s.value)
            .slice(0, 8),
        [m, p]
      ),
      ae = d.useMemo(
        () => Object.values(p).reduce((s, a) => s + a.totalSpent, 0),
        [p]
      ),
      re = d.useMemo(
        () => Object.values(p).reduce((s, a) => s + a.partsCount, 0),
        [p]
      ),
      le = m.filter(
        (s) =>
          s.name.toLowerCase().includes(D.toLowerCase()) ||
          s.cnpj?.toLowerCase().includes(D.toLowerCase()) ||
          s.city?.toLowerCase().includes(D.toLowerCase())
      ),
      ue = async () => {
        if (!b || !n.name.trim()) {
          S({
            title: "Erro",
            description: "Nome é obrigatório",
            variant: "destructive",
          });
          return;
        }
        const s = {
          user_id: l,
          name: n.name,
          cnpj: n.cnpj || null,
          email: n.email || null,
          phone: n.phone || null,
          whatsapp: n.whatsapp || null,
          address: n.address || null,
          city: n.city || null,
          state: n.state || null,
          contact_person: n.contactPerson || null,
          notes: n.notes || null,
        };
        try {
          if (I) {
            const { error: a } = await z
              .from("suppliers")
              .update(s)
              .eq("id", I.id);
            if (a) throw a;
            _((i) =>
              i.map((r) =>
                r.id === I.id
                  ? {
                      ...r,
                      ...n,
                      contactPerson: n.contactPerson,
                      isActive: r.isActive,
                    }
                  : r
              )
            ),
              S({ title: "Sucesso", description: "Fornecedor atualizado" });
          } else {
            const { data: a, error: i } = await z
              .from("suppliers")
              .insert(s)
              .select()
              .single();
            if (i) throw i;
            _((r) => [
              ...r,
              {
                id: a.id,
                name: a.name,
                cnpj: a.cnpj,
                email: a.email,
                phone: a.phone,
                whatsapp: a.whatsapp,
                address: a.address,
                city: a.city,
                state: a.state,
                contactPerson: a.contact_person,
                notes: a.notes,
                isActive: a.is_active,
                createdAt: a.created_at,
              },
            ]),
              S({ title: "Sucesso", description: "Fornecedor cadastrado" });
          }
          E(!1), ne();
        } catch {
          S({
            title: "Erro",
            description: "Erro ao salvar fornecedor",
            variant: "destructive",
          });
        }
      },
      ge = async (s) => {
        if (confirm("Deseja realmente excluir este fornecedor?"))
          try {
            const { error: a } = await z.from("suppliers").delete().eq("id", s);
            if (a) throw a;
            _((i) => i.filter((r) => r.id !== s)),
              S({ title: "Sucesso", description: "Fornecedor excluído" });
          } catch {
            S({
              title: "Erro",
              description: "Erro ao excluir fornecedor",
              variant: "destructive",
            });
          }
      },
      ne = () => {
        y({
          name: "",
          cnpj: "",
          email: "",
          phone: "",
          whatsapp: "",
          address: "",
          city: "",
          state: "",
          contactPerson: "",
          notes: "",
        }),
          Z(null);
      },
      fe = (s) => {
        Z(s),
          y({
            name: s.name,
            cnpj: s.cnpj || "",
            email: s.email || "",
            phone: s.phone || "",
            whatsapp: s.whatsapp || "",
            address: s.address || "",
            city: s.city || "",
            state: s.state || "",
            contactPerson: s.contactPerson || "",
            notes: s.notes || "",
          }),
          E(!0);
      },
      ve = (s) => {
        if (!s) return;
        const a = s.replace(/\D/g, "");
        window.open(`https://wa.me/${a}`, "_blank");
      },
      Ne = async () => {
        const s = {
            "7d": "Últimos 7 dias",
            "30d": "Últimos 30 dias",
            "90d": "Últimos 90 dias",
            year: "Este ano",
            all: "Todo período",
          },
          a = m.map((i) => ({
            ...i,
            is_active: i.isActive,
            stats: {
              totalParts: p[i.id]?.totalParts || 0,
              totalSpent: p[i.id]?.totalSpent || 0,
              totalMovements: M.filter((r) => r.parts?.supplier_id === i.id)
                .length,
              averagePurchaseValue: p[i.id]?.totalSpent
                ? p[i.id].totalSpent /
                  Math.max(
                    M.filter((r) => r.parts?.supplier_id === i.id).length,
                    1
                  )
                : 0,
            },
          }));
        try {
          await os({
            suppliers: a,
            periodLabel: s[G],
            totalSpent: ae,
            totalParts: re,
            currency: A,
          }),
            S({
              title: "Sucesso",
              description: "Relatório PDF gerado com sucesso!",
            });
        } catch {
          S({
            title: "Erro",
            description: "Erro ao gerar relatório",
            variant: "destructive",
          });
        }
      };
    if (o) {
      const s = p[o.id] || { totalSpent: 0, totalParts: 0, partsCount: 0 },
        a = R.filter((r) => r.supplier_id === o.id),
        i = M.filter((r) => r.parts?.supplier_id === o.id);
      return e.jsx(e.Fragment, {
        children: e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                e.jsx(w, {
                  variant: "ghost",
                  size: "icon",
                  onClick: () => ee(null),
                  children: e.jsx(xe, { className: "h-5 w-5" }),
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h1", {
                      className: "text-2xl font-bold",
                      children: o.name,
                    }),
                    e.jsxs("p", {
                      className: "text-muted-foreground",
                      children: [o.city, ", ", o.state],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid gap-4 grid-cols-2 md:grid-cols-4",
              children: [
                e.jsxs(j, {
                  children: [
                    e.jsx(u, {
                      className: "pb-2",
                      children: e.jsx(g, {
                        className: "text-sm font-medium",
                        children: "Total Gasto",
                      }),
                    }),
                    e.jsx(f, {
                      children: e.jsx("div", {
                        className: "text-2xl font-bold text-primary",
                        children: c(s.totalSpent),
                      }),
                    }),
                  ],
                }),
                e.jsxs(j, {
                  children: [
                    e.jsx(u, {
                      className: "pb-2",
                      children: e.jsx(g, {
                        className: "text-sm font-medium",
                        children: "Tipos de Peças",
                      }),
                    }),
                    e.jsx(f, {
                      children: e.jsx("div", {
                        className: "text-2xl font-bold",
                        children: s.partsCount,
                      }),
                    }),
                  ],
                }),
                e.jsxs(j, {
                  children: [
                    e.jsx(u, {
                      className: "pb-2",
                      children: e.jsx(g, {
                        className: "text-sm font-medium",
                        children: "Unidades em Estoque",
                      }),
                    }),
                    e.jsx(f, {
                      children: e.jsx("div", {
                        className: "text-2xl font-bold",
                        children: s.totalParts,
                      }),
                    }),
                  ],
                }),
                e.jsxs(j, {
                  children: [
                    e.jsx(u, {
                      className: "pb-2",
                      children: e.jsx(g, {
                        className: "text-sm font-medium",
                        children: "Última Compra",
                      }),
                    }),
                    e.jsx(f, {
                      children: e.jsx("div", {
                        className: "text-lg font-bold",
                        children: s.lastPurchase
                          ? U(K(s.lastPurchase), "dd/MM/yyyy", { locale: X })
                          : "N/A",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(j, {
              children: [
                e.jsx(u, {
                  children: e.jsx(g, {
                    className: "text-lg",
                    children: "Informações de Contato",
                  }),
                }),
                e.jsxs(f, {
                  children: [
                    e.jsxs("div", {
                      className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                      children: [
                        o.email &&
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(De, {
                                className: "h-4 w-4 text-muted-foreground",
                              }),
                              e.jsx("span", { children: o.email }),
                            ],
                          }),
                        o.phone &&
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(Ee, {
                                className: "h-4 w-4 text-muted-foreground",
                              }),
                              e.jsx("span", { children: o.phone }),
                            ],
                          }),
                        o.whatsapp &&
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(Me, {
                                className: "h-4 w-4 text-muted-foreground",
                              }),
                              e.jsx(w, {
                                variant: "link",
                                className: "p-0 h-auto",
                                onClick: () => ve(o.whatsapp),
                                children: o.whatsapp,
                              }),
                            ],
                          }),
                        o.address &&
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(ze, {
                                className: "h-4 w-4 text-muted-foreground",
                              }),
                              e.jsx("span", { children: o.address }),
                            ],
                          }),
                        o.contactPerson &&
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(ke, {
                                className: "h-4 w-4 text-muted-foreground",
                              }),
                              e.jsx("span", { children: o.contactPerson }),
                            ],
                          }),
                        o.cnpj &&
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(ce, {
                                className: "h-4 w-4 text-muted-foreground",
                              }),
                              e.jsxs("span", { children: ["CNPJ: ", o.cnpj] }),
                            ],
                          }),
                      ],
                    }),
                    o.notes &&
                      e.jsx("div", {
                        className: "mt-4 p-3 bg-muted rounded-lg",
                        children: e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: o.notes,
                        }),
                      }),
                  ],
                }),
              ],
            }),
            e.jsxs(j, {
              children: [
                e.jsx(u, {
                  children: e.jsx(g, {
                    className: "text-lg",
                    children: "Peças deste Fornecedor",
                  }),
                }),
                e.jsx(f, {
                  children:
                    a.length === 0
                      ? e.jsx("p", {
                          className: "text-muted-foreground text-center py-8",
                          children: "Nenhuma peça cadastrada",
                        })
                      : e.jsxs(J, {
                          children: [
                            e.jsx(Q, {
                              children: e.jsxs(k, {
                                children: [
                                  e.jsx(x, { children: "Nome" }),
                                  e.jsx(x, { children: "Código" }),
                                  e.jsx(x, {
                                    className: "text-right",
                                    children: "Qtd",
                                  }),
                                  e.jsx(x, {
                                    className: "text-right",
                                    children: "Preço Compra",
                                  }),
                                  e.jsx(x, {
                                    className: "text-right",
                                    children: "Total",
                                  }),
                                ],
                              }),
                            }),
                            e.jsx(Y, {
                              children: a.map((r) =>
                                e.jsxs(
                                  k,
                                  {
                                    children: [
                                      e.jsx(h, {
                                        className: "font-medium",
                                        children: r.name,
                                      }),
                                      e.jsx(h, { children: r.code || "-" }),
                                      e.jsx(h, {
                                        className: "text-right",
                                        children: r.quantity,
                                      }),
                                      e.jsx(h, {
                                        className: "text-right",
                                        children: c(r.unit_price),
                                      }),
                                      e.jsx(h, {
                                        className: "text-right",
                                        children: c(r.quantity * r.unit_price),
                                      }),
                                    ],
                                  },
                                  r.id
                                )
                              ),
                            }),
                          ],
                        }),
                }),
              ],
            }),
            e.jsxs(j, {
              children: [
                e.jsx(u, {
                  children: e.jsx(g, {
                    className: "text-lg",
                    children: "Movimentações Recentes",
                  }),
                }),
                e.jsx(f, {
                  children:
                    i.length === 0
                      ? e.jsx("p", {
                          className: "text-muted-foreground text-center py-8",
                          children: "Nenhuma movimentação",
                        })
                      : e.jsxs(J, {
                          children: [
                            e.jsx(Q, {
                              children: e.jsxs(k, {
                                children: [
                                  e.jsx(x, { children: "Data" }),
                                  e.jsx(x, { children: "Peça" }),
                                  e.jsx(x, { children: "Tipo" }),
                                  e.jsx(x, {
                                    className: "text-right",
                                    children: "Qtd",
                                  }),
                                  e.jsx(x, {
                                    className: "text-right",
                                    children: "Valor",
                                  }),
                                ],
                              }),
                            }),
                            e.jsx(Y, {
                              children: i
                                .slice(0, 10)
                                .map((r) =>
                                  e.jsxs(
                                    k,
                                    {
                                      children: [
                                        e.jsx(h, {
                                          children: U(
                                            K(r.created_at),
                                            "dd/MM/yyyy",
                                            { locale: X }
                                          ),
                                        }),
                                        e.jsx(h, {
                                          children: r.parts?.name || "N/A",
                                        }),
                                        e.jsx(h, {
                                          children: e.jsx(Ae, {
                                            variant:
                                              r.type === "entrada"
                                                ? "default"
                                                : "secondary",
                                            children:
                                              r.type === "entrada"
                                                ? "Entrada"
                                                : "Saída",
                                          }),
                                        }),
                                        e.jsx(h, {
                                          className: "text-right",
                                          children: r.quantity,
                                        }),
                                        e.jsx(h, {
                                          className: "text-right",
                                          children: c(
                                            (r.purchase_value || 0) * r.quantity
                                          ),
                                        }),
                                      ],
                                    },
                                    r.id
                                  )
                                ),
                            }),
                          ],
                        }),
                }),
              ],
            }),
          ],
        }),
      });
    }
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "space-y-4 p-3 md:p-6",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx(w, {
                      variant: "ghost",
                      size: "icon",
                      onClick: () => C("/estoque"),
                      children: e.jsx(xe, { className: "h-5 w-5" }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h1", {
                          className: "text-xl md:text-3xl font-bold",
                          children: "Fornecedores",
                        }),
                        e.jsx("p", {
                          className: "text-xs md:text-sm text-muted-foreground",
                          children: "Gestão completa de fornecedores",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsxs(Re, {
                      value: G,
                      onValueChange: (s) => pe(s),
                      children: [
                        e.jsx(Le, {
                          className: "w-[140px]",
                          children: e.jsx(qe, { placeholder: "Período" }),
                        }),
                        e.jsxs($e, {
                          children: [
                            e.jsx(B, { value: "7d", children: "7 dias" }),
                            e.jsx(B, { value: "30d", children: "30 dias" }),
                            e.jsx(B, { value: "90d", children: "90 dias" }),
                            e.jsx(B, { value: "year", children: "Este ano" }),
                            e.jsx(B, { value: "all", children: "Tudo" }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs(w, {
                      variant: "outline",
                      onClick: Ne,
                      children: [
                        e.jsx(He, { className: "h-4 w-4 mr-2" }),
                        "Exportar PDF",
                      ],
                    }),
                    e.jsxs(w, {
                      onClick: () => {
                        ne(), E(!0);
                      },
                      children: [
                        e.jsx(Ie, { className: "h-4 w-4 mr-2" }),
                        "Novo Fornecedor",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid gap-3 grid-cols-2 md:grid-cols-4",
              children: [
                e.jsxs(j, {
                  children: [
                    e.jsx(u, {
                      className: "pb-2 p-3",
                      children: e.jsxs(g, {
                        className:
                          "text-xs md:text-sm font-medium flex items-center gap-2",
                        children: [
                          e.jsx(ce, {
                            className: "h-4 w-4 text-muted-foreground",
                          }),
                          "Total Fornecedores",
                        ],
                      }),
                    }),
                    e.jsx(f, {
                      className: "p-3 pt-0",
                      children: e.jsx("div", {
                        className: "text-2xl font-bold",
                        children: m.length,
                      }),
                    }),
                  ],
                }),
                e.jsxs(j, {
                  children: [
                    e.jsx(u, {
                      className: "pb-2 p-3",
                      children: e.jsxs(g, {
                        className:
                          "text-xs md:text-sm font-medium flex items-center gap-2",
                        children: [
                          e.jsx(Be, {
                            className: "h-4 w-4 text-muted-foreground",
                          }),
                          "Total Gasto",
                        ],
                      }),
                    }),
                    e.jsx(f, {
                      className: "p-3 pt-0",
                      children: e.jsx("div", {
                        className: "text-2xl font-bold text-primary",
                        children: c(ae),
                      }),
                    }),
                  ],
                }),
                e.jsxs(j, {
                  children: [
                    e.jsx(u, {
                      className: "pb-2 p-3",
                      children: e.jsxs(g, {
                        className:
                          "text-xs md:text-sm font-medium flex items-center gap-2",
                        children: [
                          e.jsx(ie, {
                            className: "h-4 w-4 text-muted-foreground",
                          }),
                          "Tipos de Peças",
                        ],
                      }),
                    }),
                    e.jsx(f, {
                      className: "p-3 pt-0",
                      children: e.jsx("div", {
                        className: "text-2xl font-bold",
                        children: re,
                      }),
                    }),
                  ],
                }),
                e.jsxs(j, {
                  children: [
                    e.jsx(u, {
                      className: "pb-2 p-3",
                      children: e.jsxs(g, {
                        className:
                          "text-xs md:text-sm font-medium flex items-center gap-2",
                        children: [
                          e.jsx(Ge, {
                            className: "h-4 w-4 text-muted-foreground",
                          }),
                          "Movimentações",
                        ],
                      }),
                    }),
                    e.jsx(f, {
                      className: "p-3 pt-0",
                      children: e.jsx("div", {
                        className: "text-2xl font-bold",
                        children: M.length,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid gap-4 md:grid-cols-2",
              children: [
                e.jsxs(j, {
                  children: [
                    e.jsx(u, {
                      children: e.jsxs(g, {
                        className: "text-lg flex items-center gap-2",
                        children: [
                          e.jsx(Oe, { className: "h-5 w-5" }),
                          "Gastos por Fornecedor",
                        ],
                      }),
                    }),
                    e.jsx(f, {
                      children:
                        te.length === 0
                          ? e.jsx("div", {
                              className:
                                "h-[250px] flex items-center justify-center text-muted-foreground",
                              children: "Sem dados para exibir",
                            })
                          : e.jsx(oe, {
                              width: "100%",
                              height: 250,
                              children: e.jsxs(Ue, {
                                data: te,
                                children: [
                                  e.jsx(Ve, {
                                    strokeDasharray: "3 3",
                                    className: "opacity-30",
                                  }),
                                  e.jsx(We, {
                                    dataKey: "name",
                                    tick: { fontSize: 10 },
                                  }),
                                  e.jsx(Ke, { tick: { fontSize: 10 } }),
                                  e.jsx(de, {
                                    formatter: (s) => c(s),
                                    contentStyle: {
                                      background: "hsl(var(--card))",
                                      border: "1px solid hsl(var(--border))",
                                    },
                                  }),
                                  e.jsx(Je, {
                                    dataKey: "valor",
                                    fill: "hsl(var(--primary))",
                                    radius: [4, 4, 0, 0],
                                  }),
                                ],
                              }),
                            }),
                    }),
                  ],
                }),
                e.jsxs(j, {
                  children: [
                    e.jsx(u, {
                      children: e.jsxs(g, {
                        className: "text-lg flex items-center gap-2",
                        children: [
                          e.jsx(ie, { className: "h-5 w-5" }),
                          "Distribuição de Peças",
                        ],
                      }),
                    }),
                    e.jsx(f, {
                      children:
                        W.length === 0
                          ? e.jsx("div", {
                              className:
                                "h-[250px] flex items-center justify-center text-muted-foreground",
                              children: "Sem dados para exibir",
                            })
                          : e.jsx(oe, {
                              width: "100%",
                              height: 250,
                              children: e.jsxs(Qe, {
                                children: [
                                  e.jsx(Ye, {
                                    data: W,
                                    cx: "50%",
                                    cy: "50%",
                                    innerRadius: 40,
                                    outerRadius: 80,
                                    paddingAngle: 2,
                                    dataKey: "value",
                                    label: ({ name: s, percent: a }) =>
                                      `${s} ${(a * 100).toFixed(0)}%`,
                                    labelLine: !1,
                                    children: W.map((s, a) =>
                                      e.jsx(
                                        Xe,
                                        { fill: he[a % he.length] },
                                        `cell-${a}`
                                      )
                                    ),
                                  }),
                                  e.jsx(de, {}),
                                ],
                              }),
                            }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(j, {
              children: [
                e.jsx(u, {
                  children: e.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row md:items-center md:justify-between gap-3",
                    children: [
                      e.jsx(g, {
                        className: "text-lg",
                        children: "Lista de Fornecedores",
                      }),
                      e.jsxs("div", {
                        className: "relative w-full md:w-72",
                        children: [
                          e.jsx(Ze, {
                            className:
                              "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground",
                          }),
                          e.jsx(F, {
                            placeholder: "Buscar fornecedor...",
                            value: D,
                            onChange: (s) => v(s.target.value),
                            className: "pl-8",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(f, {
                  className: "p-0",
                  children: me
                    ? e.jsx("div", {
                        className: "flex items-center justify-center py-8",
                        children: e.jsx("div", {
                          className:
                            "animate-spin rounded-full h-8 w-8 border-b-2 border-primary",
                        }),
                      })
                    : le.length === 0
                    ? e.jsx("div", {
                        className: "text-center py-8 text-muted-foreground",
                        children: D
                          ? "Nenhum fornecedor encontrado"
                          : "Nenhum fornecedor cadastrado",
                      })
                    : e.jsx("div", {
                        className: "overflow-x-auto",
                        children: e.jsxs(J, {
                          children: [
                            e.jsx(Q, {
                              children: e.jsxs(k, {
                                children: [
                                  e.jsx(x, { children: "Nome" }),
                                  e.jsx(x, {
                                    className: "hidden md:table-cell",
                                    children: "Cidade",
                                  }),
                                  e.jsx(x, {
                                    className: "hidden md:table-cell",
                                    children: "Contato",
                                  }),
                                  e.jsx(x, {
                                    className: "text-right",
                                    children: "Peças",
                                  }),
                                  e.jsx(x, {
                                    className: "text-right",
                                    children: "Total Gasto",
                                  }),
                                  e.jsx(x, {
                                    className: "text-right",
                                    children: "Ações",
                                  }),
                                ],
                              }),
                            }),
                            e.jsx(Y, {
                              children: le.map((s) => {
                                const a = p[s.id] || {
                                  totalSpent: 0,
                                  partsCount: 0,
                                };
                                return e.jsxs(
                                  k,
                                  {
                                    children: [
                                      e.jsx(h, {
                                        children: e.jsxs("div", {
                                          children: [
                                            e.jsx("p", {
                                              className: "font-medium",
                                              children: s.name,
                                            }),
                                            s.cnpj &&
                                              e.jsx("p", {
                                                className:
                                                  "text-xs text-muted-foreground",
                                                children: s.cnpj,
                                              }),
                                          ],
                                        }),
                                      }),
                                      e.jsx(h, {
                                        className: "hidden md:table-cell",
                                        children: s.city
                                          ? `${s.city}/${s.state}`
                                          : "-",
                                      }),
                                      e.jsx(h, {
                                        className: "hidden md:table-cell",
                                        children:
                                          s.contactPerson || s.phone || "-",
                                      }),
                                      e.jsx(h, {
                                        className: "text-right",
                                        children: a.partsCount,
                                      }),
                                      e.jsx(h, {
                                        className: "text-right font-medium",
                                        children: c(a.totalSpent),
                                      }),
                                      e.jsx(h, {
                                        className: "text-right",
                                        children: e.jsxs("div", {
                                          className: "flex justify-end gap-1",
                                          children: [
                                            e.jsx(w, {
                                              variant: "ghost",
                                              size: "icon",
                                              onClick: () => ee(s),
                                              children: e.jsx(es, {
                                                className: "h-4 w-4",
                                              }),
                                            }),
                                            e.jsx(w, {
                                              variant: "ghost",
                                              size: "icon",
                                              onClick: () => fe(s),
                                              children: e.jsx(ss, {
                                                className: "h-4 w-4",
                                              }),
                                            }),
                                            e.jsx(w, {
                                              variant: "ghost",
                                              size: "icon",
                                              onClick: () => ge(s.id),
                                              children: e.jsx(ts, {
                                                className: "h-4 w-4",
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  s.id
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                }),
              ],
            }),
          ],
        }),
        e.jsx(as, {
          open: H,
          onOpenChange: E,
          children: e.jsxs(rs, {
            className: "max-w-2xl max-h-[90vh] overflow-y-auto",
            children: [
              e.jsx(ls, {
                children: e.jsx(ns, {
                  children: I ? "Editar Fornecedor" : "Novo Fornecedor",
                }),
              }),
              e.jsxs("div", {
                className: "grid gap-4 py-4",
                children: [
                  e.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(P, { htmlFor: "name", children: "Nome *" }),
                          e.jsx(F, {
                            id: "name",
                            value: n.name,
                            onChange: (s) => y({ ...n, name: s.target.value }),
                            placeholder: "Nome do fornecedor",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(P, { htmlFor: "cnpj", children: "CNPJ" }),
                          e.jsx(F, {
                            id: "cnpj",
                            value: n.cnpj,
                            onChange: (s) => y({ ...n, cnpj: s.target.value }),
                            placeholder: "00.000.000/0000-00",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(P, { htmlFor: "email", children: "E-mail" }),
                          e.jsx(F, {
                            id: "email",
                            type: "email",
                            value: n.email,
                            onChange: (s) => y({ ...n, email: s.target.value }),
                            placeholder: "email@empresa.com",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(P, { htmlFor: "phone", children: "Telefone" }),
                          e.jsx(F, {
                            id: "phone",
                            value: n.phone,
                            onChange: (s) => y({ ...n, phone: s.target.value }),
                            placeholder: "(00) 0000-0000",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(P, {
                            htmlFor: "whatsapp",
                            children: "WhatsApp",
                          }),
                          e.jsx(F, {
                            id: "whatsapp",
                            value: n.whatsapp,
                            onChange: (s) =>
                              y({ ...n, whatsapp: s.target.value }),
                            placeholder: "(00) 00000-0000",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(P, {
                            htmlFor: "contactPerson",
                            children: "Pessoa de Contato",
                          }),
                          e.jsx(F, {
                            id: "contactPerson",
                            value: n.contactPerson,
                            onChange: (s) =>
                              y({ ...n, contactPerson: s.target.value }),
                            placeholder: "Nome do contato",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(P, { htmlFor: "address", children: "Endereço" }),
                      e.jsx(F, {
                        id: "address",
                        value: n.address,
                        onChange: (s) => y({ ...n, address: s.target.value }),
                        placeholder: "Rua, número, bairro",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(P, { htmlFor: "city", children: "Cidade" }),
                          e.jsx(F, {
                            id: "city",
                            value: n.city,
                            onChange: (s) => y({ ...n, city: s.target.value }),
                            placeholder: "Cidade",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(P, { htmlFor: "state", children: "Estado" }),
                          e.jsx(F, {
                            id: "state",
                            value: n.state,
                            onChange: (s) => y({ ...n, state: s.target.value }),
                            placeholder: "UF",
                            maxLength: 2,
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(P, { htmlFor: "notes", children: "Observações" }),
                      e.jsx(cs, {
                        id: "notes",
                        value: n.notes,
                        onChange: (s) => y({ ...n, notes: s.target.value }),
                        placeholder: "Notas adicionais sobre o fornecedor",
                        rows: 3,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(is, {
                children: [
                  e.jsx(w, {
                    variant: "outline",
                    onClick: () => E(!1),
                    children: "Cancelar",
                  }),
                  e.jsx(w, {
                    onClick: ue,
                    children: I ? "Salvar" : "Cadastrar",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
export { ms as default };
