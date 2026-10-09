import {
  w as o,
  i as z,
  z as U,
  r as v,
  j as e,
  f as $,
  G as N,
  dW as I,
  b3 as D,
  dX as J,
  bB as Z,
  bC as V,
  bD as C,
  bE as A,
  a3 as L,
  s as S,
  cH as O,
  B as T,
  o as G,
  n as H,
  I as M,
  bl as W,
  c2 as X,
  bm as B,
  bR as K,
} from "./index-V8ZHCWL2.js";
import { J as F } from "./jszip.min-9zH1CXj_.js";
const Q = async (a) => {
    try {
      const r = await (await fetch(a)).blob();
      return new Promise((l) => {
        const u = new FileReader();
        (u.onloadend = () => l(u.result)),
          (u.onerror = () => l(null)),
          u.readAsDataURL(r);
      });
    } catch {
      return null;
    }
  },
  Y = (a) => {
    const t = [];
    return (
      a.forEach((r) => {
        r.photos &&
          Array.isArray(r.photos) &&
          t.push(...r.photos.filter((l) => l)),
          r.exit_photos &&
            Array.isArray(r.exit_photos) &&
            t.push(...r.exit_photos.filter((l) => l));
      }),
      [...new Set(t)]
    );
  },
  P = async (a, t) => {
    const r = new F();
    t?.("Iniciando exportação...", 0);
    const [l, u, j, i, _, y, d, s, h, f] = await Promise.all([
      o.from("service_orders").select("*").eq("user_id", a).range(0, 9999),
      o.from("clients").select("*").eq("user_id", a).range(0, 9999),
      o.from("technicians").select("*").eq("user_id", a).range(0, 9999),
      o.from("parts").select("*").eq("user_id", a).range(0, 9999),
      o.from("products").select("*").eq("user_id", a).range(0, 9999),
      o.from("transactions").select("*").eq("user_id", a).range(0, 9999),
      o.from("promissory_notes").select("*").eq("user_id", a).range(0, 9999),
      o.from("purchase_contracts").select("*").eq("user_id", a).range(0, 9999),
      o.from("suppliers").select("*").eq("user_id", a).range(0, 9999),
      o.from("user_settings").select("*").eq("user_id", a).single(),
    ]);
    t?.("Dados coletados do banco de dados", 30);
    const c = {
        version: "2.0",
        exportDate: new Date().toISOString(),
        userId: a,
        data: {
          service_orders: l.data || [],
          clients: u.data || [],
          technicians: j.data || [],
          parts: i.data || [],
          products: _.data || [],
          transactions: y.data || [],
          promissory_notes: d.data || [],
          purchase_contracts: s.data || [],
          suppliers: h.data || [],
          user_settings: f.data || null,
        },
        photos: {},
      },
      x = [];
    x.push(...Y(c.data.service_orders)),
      c.data.products.forEach((n) => {
        n.image_url && x.push(n.image_url),
          n.images &&
            Array.isArray(n.images) &&
            x.push(...n.images.filter((p) => p));
      }),
      c.data.purchase_contracts.forEach((n) => {
        n.photos &&
          Array.isArray(n.photos) &&
          x.push(...n.photos.filter((p) => p));
      }),
      c.data.user_settings?.company_logo &&
        x.push(c.data.user_settings.company_logo),
      t?.(`Baixando ${x.length} fotos...`, 40);
    const b = [...new Set(x)];
    let w = 0;
    for (const n of b) {
      const p = await Q(n);
      p && (c.photos[n] = p), w++;
      const m = 40 + (w / b.length) * 40;
      t?.(`Baixando fotos (${w}/${b.length})`, m);
    }
    t?.("Criando arquivo de backup...", 85),
      r.file("data.json", JSON.stringify(c, null, 2));
    const q = r.folder("photos");
    q &&
      Object.entries(c.photos).forEach(([n, p], m) => {
        const g = p.split(",")[1];
        if (g) {
          const k = n.includes(".png") ? "png" : "jpg";
          q.file(`photo_${m}.${k}`, g, { base64: !0 });
        }
      });
    const R = {
      exportDate: c.exportDate,
      totalServiceOrders: c.data.service_orders.length,
      totalClients: c.data.clients.length,
      totalTechnicians: c.data.technicians.length,
      totalParts: c.data.parts.length,
      totalProducts: c.data.products.length,
      totalTransactions: c.data.transactions.length,
      totalPromissoryNotes: c.data.promissory_notes.length,
      totalContracts: c.data.purchase_contracts.length,
      totalSuppliers: c.data.suppliers.length,
      totalPhotos: Object.keys(c.photos).length,
    };
    r.file("statistics.json", JSON.stringify(R, null, 2)),
      t?.("Finalizando...", 95);
    const E = await r.generateAsync({ type: "blob" });
    return t?.("Backup concluído!", 100), E;
  },
  ee = async (a, t, r) => {
    try {
      r?.("Lendo arquivo de backup...", 5);
      const u = (await F.loadAsync(a)).file("data.json");
      if (!u)
        return {
          success: !1,
          message: "Arquivo de backup inválido: data.json não encontrado",
        };
      r?.("Processando dados...", 15);
      const j = await u.async("string"),
        i = JSON.parse(j);
      if (!i.version || !i.data)
        return { success: !1, message: "Formato de backup não reconhecido" };
      if ((r?.("Importando configurações...", 25), i.data.user_settings)) {
        const d = { ...i.data.user_settings, user_id: t };
        delete d.id, delete d.created_at, delete d.updated_at;
        const { data: s } = await o
          .from("user_settings")
          .select("id")
          .eq("user_id", t)
          .single();
        s
          ? await o.from("user_settings").update(d).eq("user_id", t)
          : await o.from("user_settings").insert(d);
      }
      r?.("Importando clientes...", 35);
      const _ = new Map();
      if (i.data.clients.length > 0)
        for (const d of i.data.clients) {
          const s = d.id,
            h = { ...d, user_id: t };
          delete h.id, delete h.created_at, delete h.updated_at;
          const { data: f, error: c } = await o
            .from("clients")
            .insert(h)
            .select("id")
            .single();
          !c && f && s && _.set(s, f.id);
        }
      if ((r?.("Importando técnicos...", 45), i.data.technicians.length > 0)) {
        const d = i.data.technicians.map((s) => ({
          ...s,
          user_id: t,
          id: void 0,
          created_at: void 0,
          updated_at: void 0,
        }));
        for (const s of d)
          delete s.id,
            delete s.created_at,
            delete s.updated_at,
            await o.from("technicians").insert(s);
      }
      if (
        (r?.("Importando fornecedores...", 50), i.data.suppliers.length > 0)
      ) {
        const d = i.data.suppliers.map((s) => ({
          ...s,
          user_id: t,
          id: void 0,
          created_at: void 0,
          updated_at: void 0,
        }));
        for (const s of d)
          delete s.id,
            delete s.created_at,
            delete s.updated_at,
            await o.from("suppliers").insert(s);
      }
      if (
        (r?.("Importando estoque de peças...", 55), i.data.parts.length > 0)
      ) {
        const d = i.data.parts.map((s) => ({
          ...s,
          user_id: t,
          id: void 0,
          created_at: void 0,
          updated_at: void 0,
          supplier_id: null,
        }));
        for (const s of d)
          delete s.id,
            delete s.created_at,
            delete s.updated_at,
            await o.from("parts").insert(s);
      }
      if ((r?.("Importando produtos...", 60), i.data.products.length > 0)) {
        const d = i.data.products.map((s) => ({
          ...s,
          user_id: t,
          id: void 0,
          created_at: void 0,
          updated_at: void 0,
        }));
        for (const s of d)
          delete s.id,
            delete s.created_at,
            delete s.updated_at,
            await o.from("products").insert(s);
      }
      if (
        (r?.("Importando ordens de serviço...", 70),
        Array.isArray(i.data.service_orders) &&
          i.data.service_orders.length > 0)
      ) {
        const d = i.data.service_orders.map((s) => ({
          ...s,
          user_id: t,
          id: void 0,
          created_at: void 0,
          updated_at: void 0,
          original_os_id: null,
        }));
        for (const s of d)
          delete s.id,
            delete s.created_at,
            delete s.updated_at,
            await o.from("service_orders").insert(s);
      }
      if (
        (r?.("Importando transações financeiras...", 80),
        i.data.transactions.length > 0)
      ) {
        const d = i.data.transactions.map((s) => ({
          ...s,
          user_id: t,
          id: void 0,
          created_at: void 0,
          product_id: null,
        }));
        for (const s of d)
          delete s.id,
            delete s.created_at,
            await o.from("transactions").insert(s);
      }
      if (
        (r?.("Importando notas promissórias...", 88),
        i.data.promissory_notes.length > 0)
      )
        for (const d of i.data.promissory_notes) {
          const s = d.client_id,
            h = s ? _.get(s) : null;
          if (!h) continue;
          const f = { ...d, user_id: t, client_id: h };
          delete f.id,
            delete f.created_at,
            delete f.updated_at,
            delete f.parent_note_id,
            await o.from("promissory_notes").insert(f);
        }
      return (
        r?.("Importação concluída!", 100),
        {
          success: !0,
          message: "Dados importados com sucesso!",
          stats: {
            clients: i.data.clients.length,
            technicians: i.data.technicians.length,
            parts: i.data.parts.length,
            products: i.data.products.length,
            service_orders: i.data.service_orders.length,
            promissory_notes: i.data.promissory_notes.length,
            transactions: i.data.transactions.length,
            suppliers: i.data.suppliers.length,
          },
        }
      );
    } catch (l) {
      return {
        success: !1,
        message: `Erro ao importar: ${l.message || "Erro desconhecido"}`,
      };
    }
  },
  se = (a, t) => {
    const r = URL.createObjectURL(a),
      l = document.createElement("a");
    (l.href = r),
      (l.download = `backup-techospro-${
        new Date().toISOString().split("T")[0]
      }.zip`),
      document.body.appendChild(l),
      l.click(),
      document.body.removeChild(l),
      URL.revokeObjectURL(r);
  },
  te = async (a, t) => {
    try {
      t?.("Iniciando limpeza de dados...", 0),
        t?.("Removendo movimentações de estoque...", 10),
        await o.from("stock_movements").delete().eq("user_id", a),
        t?.("Removendo alertas de estoque...", 15),
        await o.from("stock_alerts").delete().eq("user_id", a),
        t?.("Removendo notas promissórias...", 20),
        await o.from("promissory_notes").delete().eq("user_id", a),
        t?.("Removendo ordens de serviço...", 30),
        await o.from("service_orders").delete().eq("user_id", a),
        t?.("Removendo transações financeiras...", 40),
        await o.from("transactions").delete().eq("user_id", a),
        t?.("Removendo avaliações de produtos...", 45);
      const { data: r } = await o
        .from("products")
        .select("id")
        .eq("user_id", a);
      if (r && r.length > 0) {
        const l = r.map((u) => u.id);
        await o.from("product_reviews").delete().in("product_id", l);
      }
      return (
        t?.("Removendo produtos...", 50),
        await o.from("products").delete().eq("user_id", a),
        t?.("Removendo peças do estoque...", 55),
        await o.from("parts").delete().eq("user_id", a),
        t?.("Removendo clientes...", 60),
        await o.from("clients").delete().eq("user_id", a),
        t?.("Removendo técnicos...", 65),
        await o.from("technicians").delete().eq("user_id", a),
        t?.("Removendo fornecedores...", 70),
        await o.from("suppliers").delete().eq("user_id", a),
        t?.("Removendo contratos de compra...", 75),
        await o.from("purchase_contracts").delete().eq("user_id", a),
        t?.("Removendo pedidos do catálogo...", 80),
        await o.from("catalog_orders").delete().eq("user_id", a),
        t?.("Resetando configurações...", 90),
        await o
          .from("user_settings")
          .update({
            company_name: null,
            company_cnpj: null,
            company_address: null,
            company_phone: null,
            company_email: null,
            company_logo: null,
            pix_qrcode: null,
            pix_key: null,
            receiver_name: null,
            bank: null,
          })
          .eq("user_id", a),
        localStorage.removeItem("serviceOrders"),
        localStorage.removeItem("clients"),
        localStorage.removeItem("technicians"),
        localStorage.removeItem("parts"),
        localStorage.removeItem("transactions"),
        localStorage.removeItem("products"),
        t?.("Limpeza concluída!", 100),
        { success: !0, message: "Todos os dados foram removidos com sucesso!" }
      );
    } catch (r) {
      return {
        success: !1,
        message: `Erro ao limpar dados: ${r.message || "Erro desconhecido"}`,
      };
    }
  },
  oe = () => {
    const { toast: a } = z(),
      { user: t } = U(),
      r = v.useRef(null),
      [l, u] = v.useState(!1),
      [j, i] = v.useState(!1),
      [_, y] = v.useState({ message: "", percent: 0 }),
      [d, s] = v.useState({ message: "", percent: 0 }),
      [h, f] = v.useState(!1),
      [c, x] = v.useState({ message: "", percent: 0 });
    v.useState({ databaseStatus: "online", systemStatus: "active" });
    const [b, w] = v.useState([]);
    v.useEffect(() => {
      const n = JSON.parse(localStorage.getItem("serviceOrders") || "[]"),
        p = [];
      n.forEach((m) => {
        m.history &&
          Array.isArray(m.history) &&
          m.history.forEach((g) => {
            p.push({
              date: g.date,
              action: `${m.orderNumber || m.id}: ${g.action}`,
              user: g.user,
            });
          });
      }),
        p.sort(
          (m, g) => new Date(g.date).getTime() - new Date(m.date).getTime()
        ),
        w(p);
    }, []);
    const q = async () => {
        if (!t?.id) {
          a({
            title: "Erro",
            description: "Você precisa estar logado para fazer backup.",
            variant: "destructive",
          });
          return;
        }
        u(!0), y({ message: "Iniciando...", percent: 0 });
        try {
          const n = await P(t.id, (p, m) => {
            y({ message: p, percent: m });
          });
          se(n),
            a({
              title: "Backup criado com sucesso!",
              description: "O arquivo ZIP foi baixado com todos os seus dados.",
            });
        } catch (n) {
          a({
            title: "Erro ao criar backup",
            description: n.message || "Ocorreu um erro inesperado.",
            variant: "destructive",
          });
        } finally {
          u(!1), y({ message: "", percent: 0 });
        }
      },
      R = async (n) => {
        const p = n.target.files?.[0];
        if (!(!p || !t?.id)) {
          i(!0), s({ message: "Iniciando...", percent: 0 });
          try {
            const m = await ee(p, t.id, (g, k) => {
              s({ message: g, percent: k });
            });
            m.success
              ? (a({
                  title: "Importação concluída!",
                  description: `Dados importados: ${
                    m.stats?.clients || 0
                  } clientes, ${m.stats?.service_orders || 0} OS, ${
                    m.stats?.parts || 0
                  } peças.`,
                }),
                setTimeout(() => window.location.reload(), 2e3))
              : a({
                  title: "Erro na importação",
                  description: m.message,
                  variant: "destructive",
                });
          } catch (m) {
            a({
              title: "Erro ao importar",
              description: m.message || "Arquivo inválido.",
              variant: "destructive",
            });
          } finally {
            i(!1),
              s({ message: "", percent: 0 }),
              r.current && (r.current.value = "");
          }
        }
      },
      E = async () => {
        if (!t?.id) {
          a({
            title: "Erro",
            description: "Você precisa estar logado para limpar os dados.",
            variant: "destructive",
          });
          return;
        }
        if (
          confirm(`⚠️ ATENÇÃO: Tem certeza que deseja limpar TODOS os dados?

Isto irá remover:
- Ordens de Serviço
- Clientes
- Técnicos
- Estoque de peças
- Produtos
- Transações financeiras
- Fornecedores
- Contratos

Esta ação NÃO PODE ser desfeita!`)
        ) {
          f(!0), x({ message: "Iniciando...", percent: 0 });
          try {
            const n = await te(t.id, (p, m) => {
              x({ message: p, percent: m });
            });
            n.success
              ? (a({ title: "✅ Dados limpos!", description: n.message }),
                setTimeout(() => window.location.reload(), 2e3))
              : a({
                  title: "Erro",
                  description: n.message,
                  variant: "destructive",
                });
          } catch (n) {
            a({
              title: "Erro ao limpar dados",
              description: n.message || "Ocorreu um erro inesperado.",
              variant: "destructive",
            });
          } finally {
            f(!1), x({ message: "", percent: 0 });
          }
        }
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("div", {
          className: "mb-6",
          children: e.jsx("div", {
            className: "flex items-center justify-between",
            children: e.jsxs("div", {
              children: [
                e.jsxs("h1", {
                  className: "text-3xl font-bold mb-2 flex items-center gap-2",
                  children: [
                    e.jsx($, { className: "w-8 h-8 text-primary" }),
                    "Administração",
                  ],
                }),
                e.jsx("p", {
                  className: "text-muted-foreground",
                  children: "Painel de controle e configurações avançadas",
                }),
              ],
            }),
          }),
        }),
        e.jsxs("div", {
          className: "grid gap-6 md:grid-cols-2 mb-6",
          children: [
            e.jsx(N, {
              className: "p-4 bg-card border-border",
              children: e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx(I, { className: "w-8 h-8 text-primary" }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Banco de Dados",
                      }),
                      e.jsx(D, {
                        variant: "outline",
                        className:
                          "bg-primary/10 text-primary border-primary/20",
                        children: "Online",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(N, {
              className: "p-4 bg-card border-border",
              children: e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx(J, { className: "w-8 h-8 text-primary" }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Sistema",
                      }),
                      e.jsx(D, {
                        variant: "outline",
                        className:
                          "bg-primary/10 text-primary border-primary/20",
                        children: "Ativo",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsxs(Z, {
          defaultValue: "backup",
          className: "space-y-6",
          children: [
            e.jsxs(V, {
              children: [
                e.jsx(C, { value: "backup", children: "Backup & Restauração" }),
                e.jsx(C, { value: "logs", children: "Logs do Sistema" }),
                e.jsx(C, { value: "system", children: "Sistema" }),
              ],
            }),
            e.jsxs(A, {
              value: "backup",
              className: "space-y-6",
              children: [
                e.jsxs(N, {
                  className: "p-6 bg-card border-border",
                  children: [
                    e.jsxs("h3", {
                      className:
                        "font-semibold text-lg mb-2 flex items-center gap-2",
                      children: [
                        e.jsx(L, { className: "w-5 h-5 text-primary" }),
                        "Exportar Dados (Backup Completo)",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground mb-4",
                      children:
                        "Exporta todos os seus dados do banco de dados em um arquivo ZIP, incluindo: Ordens de Serviço, Clientes, Técnicos, Estoque de Peças, Produtos, Transações Financeiras, Notas Promissórias, Contratos, Fornecedores, Configurações e Fotos.",
                    }),
                    l &&
                      e.jsxs("div", {
                        className: "mb-4 space-y-2",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-2 text-sm text-muted-foreground",
                            children: [
                              e.jsx(S, { className: "w-4 h-4 animate-spin" }),
                              _.message,
                            ],
                          }),
                          e.jsx(O, { value: _.percent, className: "h-2" }),
                        ],
                      }),
                    e.jsx(T, {
                      onClick: q,
                      disabled: l,
                      className: "gap-2",
                      children: l
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(S, { className: "w-4 h-4 animate-spin" }),
                              "Exportando...",
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(L, { className: "w-4 h-4" }),
                              "Gerar Backup Completo (ZIP)",
                            ],
                          }),
                    }),
                  ],
                }),
                e.jsxs(N, {
                  className: "p-6 bg-card border-border",
                  children: [
                    e.jsxs("h3", {
                      className:
                        "font-semibold text-lg mb-2 flex items-center gap-2",
                      children: [
                        e.jsx(G, { className: "w-5 h-5 text-primary" }),
                        "Importar Dados (Restaurar Backup)",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground mb-4",
                      children:
                        "Restaure um backup anterior. Os dados serão adicionados ao seu sistema. Aceita arquivos .zip gerados pelo sistema.",
                    }),
                    j &&
                      e.jsxs("div", {
                        className: "mb-4 space-y-2",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-2 text-sm text-muted-foreground",
                            children: [
                              e.jsx(S, { className: "w-4 h-4 animate-spin" }),
                              d.message,
                            ],
                          }),
                          e.jsx(O, { value: d.percent, className: "h-2" }),
                        ],
                      }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(H, {
                          htmlFor: "import-file",
                          children: "Selecionar arquivo de backup (.zip)",
                        }),
                        e.jsx(M, {
                          id: "import-file",
                          ref: r,
                          type: "file",
                          accept: ".zip",
                          onChange: R,
                          disabled: j,
                          className: "cursor-pointer",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(A, {
              value: "logs",
              className: "space-y-6",
              children: e.jsxs(N, {
                className: "p-6 bg-card border-border",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      e.jsxs("h3", {
                        className:
                          "font-semibold text-lg flex items-center gap-2",
                        children: [
                          e.jsx(W, { className: "w-5 h-5 text-primary" }),
                          "Logs de Atividades do Sistema",
                        ],
                      }),
                      e.jsxs(D, {
                        variant: "outline",
                        className: "bg-primary/10 text-primary",
                        children: [b.length, " registros"],
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground mb-4",
                    children:
                      "Histórico completo de todas as ações realizadas no sistema.",
                  }),
                  e.jsx(X, {
                    className: "h-[500px] rounded-lg border border-border",
                    children: e.jsx("div", {
                      className: "p-4 space-y-2",
                      children:
                        b.length === 0
                          ? e.jsx("p", {
                              className:
                                "text-center text-muted-foreground py-8",
                              children: "Nenhum log registrado ainda.",
                            })
                          : b.map((n, p) =>
                              e.jsx(
                                "div",
                                {
                                  className:
                                    "p-3 rounded-lg bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-smooth",
                                  children: e.jsxs("div", {
                                    className:
                                      "flex items-start justify-between gap-2",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex-1",
                                        children: [
                                          e.jsx("p", {
                                            className: "text-sm font-medium",
                                            children: n.action,
                                          }),
                                          e.jsxs("p", {
                                            className:
                                              "text-xs text-muted-foreground mt-1",
                                            children: ["Por: ", n.user],
                                          }),
                                        ],
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-xs text-muted-foreground whitespace-nowrap",
                                        children: new Date(
                                          n.date
                                        ).toLocaleString("pt-BR"),
                                      }),
                                    ],
                                  }),
                                },
                                p
                              )
                            ),
                    }),
                  }),
                ],
              }),
            }),
            e.jsx(A, {
              value: "system",
              className: "space-y-6",
              children: e.jsxs(N, {
                className: "p-6 bg-card border-border border-destructive/50",
                children: [
                  e.jsxs("h3", {
                    className:
                      "font-semibold text-lg mb-4 text-destructive flex items-center gap-2",
                    children: [
                      e.jsx(B, { className: "w-5 h-5" }),
                      "Zona de Perigo",
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground mb-4",
                    children:
                      "Estas ações são irreversíveis e devem ser usadas com extremo cuidado.",
                  }),
                  e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "p-4 border border-destructive/30 rounded-lg bg-destructive/5",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className: "font-medium",
                                    children: "Limpar Todos os Dados",
                                  }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children:
                                      "Remove todas as OS, clientes, técnicos, produtos, peças, transações e contratos do banco de dados",
                                  }),
                                ],
                              }),
                              e.jsx(T, {
                                variant: "destructive",
                                onClick: E,
                                disabled: h,
                                className: "gap-2",
                                children: h
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(S, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                        "Limpando...",
                                      ],
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(B, { className: "w-4 h-4" }),
                                        "Limpar Dados",
                                      ],
                                    }),
                              }),
                            ],
                          }),
                          h &&
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 text-sm text-muted-foreground",
                                  children: [
                                    e.jsx(S, {
                                      className: "w-4 h-4 animate-spin",
                                    }),
                                    c.message,
                                  ],
                                }),
                                e.jsx(O, {
                                  value: c.percent,
                                  className: "h-2",
                                }),
                              ],
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex items-center justify-between p-4 border border-border rounded-lg",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "font-medium",
                                children: "Reiniciar Sistema",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Recarrega a aplicação",
                              }),
                            ],
                          }),
                          e.jsxs(T, {
                            variant: "outline",
                            onClick: () => window.location.reload(),
                            className: "gap-2",
                            children: [
                              e.jsx(K, { className: "w-4 h-4" }),
                              "Reiniciar",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  };
export { oe as default };
