import {
  z as ae,
  r,
  w as F,
  j as e,
  D as X,
  c as Q,
  a_ as Y,
  d as Z,
  b2 as je,
  I as G,
  c2 as le,
  bl as ie,
  b3 as H,
  B as u,
  i as ce,
  n as E,
  c3 as Ie,
  T as Le,
  c4 as ge,
  c5 as ve,
  a as be,
  X as se,
  c6 as Ne,
  c7 as ye,
  c8 as _e,
  c9 as Ce,
  ca as oe,
  G as M,
  h as we,
  ba as ke,
  bT as ne,
  ae as de,
  bb as me,
  cb as Me,
  cc as Ve,
  cd as Ge,
  bf as he,
  bg as ze,
  bc as Be,
  bd as $e,
  be as qe,
  bh as Ue,
  bS as Oe,
  ce as Ke,
  cf as He,
  u as Xe,
  a8 as Qe,
  bB as Ye,
  bC as Ze,
  bD as xe,
  e as Je,
  bE as ue,
  bI as es,
  aa as ss,
  bK as pe,
  bA as as,
  bm as ts,
  cg as rs,
  ch as is,
  ci as ns,
  cj as ls,
  ck as cs,
  cl as os,
} from "./index-V8ZHCWL2.js";
import { L as ds } from "./Legend-D2w1zv2n.js";
import { A as ms } from "./arrow-left-CaH5Nh3G.js";
const hs = {
    open: "Aberta",
    "in-progress": "Em Andamento",
    completed: "Concluída",
    pending: "Pendente",
    "waiting-parts": "Aguardando Peça",
    cancelled: "Cancelada",
  },
  xs = ({ open: p, onOpenChange: n, onSelectOS: d }) => {
    const { user: T } = ae(),
      [y, f] = r.useState([]),
      [S, m] = r.useState([]),
      [i, _] = r.useState(""),
      [v, N] = r.useState(!1);
    r.useEffect(() => {
      p && T && A();
    }, [p, T]),
      r.useEffect(() => {
        if (i.trim() === "") m(y);
        else {
          const t = i.toLowerCase(),
            R = y.filter(
              (C) =>
                C.order_number.toLowerCase().includes(t) ||
                C.client_name.toLowerCase().includes(t) ||
                C.client_cpf?.toLowerCase().includes(t) ||
                C.device_model.toLowerCase().includes(t)
            );
          m(R);
        }
      }, [i, y]);
    const A = async () => {
        if (T) {
          N(!0);
          try {
            const t = await F.from("service_orders")
              .select("*")
              .eq("user_id", T.id)
              .eq("is_warranty", !1)
              .order("entry_date", { ascending: !1 });
            if (t.error) throw t.error;
            f(t.data || []), m(t.data || []);
          } catch {
          } finally {
            N(!1);
          }
        }
      },
      W = (t) => {
        d(t), n(!1), _("");
      };
    return e.jsx(X, {
      open: p,
      onOpenChange: n,
      children: e.jsxs(Q, {
        className: "max-w-4xl max-h-[80vh]",
        children: [
          e.jsx(Y, {
            children: e.jsx(Z, { children: "Selecionar Ordem de Serviço" }),
          }),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                className: "relative",
                children: [
                  e.jsx(je, {
                    className:
                      "absolute left-3 top-3 h-4 w-4 text-muted-foreground",
                  }),
                  e.jsx(G, {
                    placeholder: "Buscar por número, cliente, CPF ou modelo...",
                    value: i,
                    onChange: (t) => _(t.target.value),
                    className: "pl-10",
                  }),
                ],
              }),
              e.jsx(le, {
                className: "h-[400px] pr-4",
                children: v
                  ? e.jsx("div", {
                      className: "text-center py-8 text-muted-foreground",
                      children: "Carregando ordens de serviço...",
                    })
                  : S.length === 0
                  ? e.jsxs("div", {
                      className: "text-center py-8 text-muted-foreground",
                      children: [
                        e.jsx(ie, {
                          className: "h-12 w-12 mx-auto mb-2 opacity-50",
                        }),
                        e.jsx("p", {
                          children: "Nenhuma ordem de serviço encontrada",
                        }),
                      ],
                    })
                  : e.jsx("div", {
                      className: "space-y-2",
                      children: S.map((t) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors",
                            onClick: () => W(t),
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-start mb-2",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsxs("h3", {
                                        className: "font-semibold",
                                        children: ["OS #", t.order_number],
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: new Date(
                                          t.entry_date
                                        ).toLocaleDateString("pt-BR"),
                                      }),
                                    ],
                                  }),
                                  e.jsx(H, {
                                    variant: "outline",
                                    children: hs[t.status] || t.status,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-1 text-sm",
                                children: [
                                  e.jsxs("p", {
                                    children: [
                                      e.jsx("span", {
                                        className: "font-medium",
                                        children: "Cliente:",
                                      }),
                                      " ",
                                      t.client_name,
                                    ],
                                  }),
                                  t.client_cpf &&
                                    e.jsxs("p", {
                                      children: [
                                        e.jsx("span", {
                                          className: "font-medium",
                                          children: "CPF:",
                                        }),
                                        " ",
                                        t.client_cpf,
                                      ],
                                    }),
                                  e.jsxs("p", {
                                    children: [
                                      e.jsx("span", {
                                        className: "font-medium",
                                        children: "Aparelho:",
                                      }),
                                      " ",
                                      t.device_model,
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    children: [
                                      e.jsx("span", {
                                        className: "font-medium",
                                        children: "Defeito:",
                                      }),
                                      " ",
                                      t.reported_problem,
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    children: [
                                      e.jsx("span", {
                                        className: "font-medium",
                                        children: "Valor:",
                                      }),
                                      " R$ ",
                                      t.service_value,
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx(u, {
                                size: "sm",
                                className: "mt-3 w-full",
                                children: "Abrir Garantia",
                              }),
                            ],
                          },
                          t.id
                        )
                      ),
                    }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  fe = [
    { id: "screen", label: "Tela", checked: !1 },
    { id: "touch", label: "Touch", checked: !1 },
    { id: "camera-front", label: "Câmera Frontal", checked: !1 },
    { id: "camera-back", label: "Câmera Traseira", checked: !1 },
    { id: "flash", label: "Flash", checked: !1 },
    { id: "speaker", label: "Alto-falante", checked: !1 },
    { id: "earpiece", label: "Auricular", checked: !1 },
    { id: "microphone", label: "Microfone", checked: !1 },
    { id: "charging", label: "Carregamento", checked: !1 },
    { id: "buttons", label: "Botões", checked: !1 },
    { id: "fingerprint", label: "Biometria", checked: !1 },
    { id: "face-id", label: "Face ID", checked: !1 },
    { id: "network", label: "Rede", checked: !1 },
    { id: "wifi", label: "Wi-Fi", checked: !1 },
    { id: "bluetooth", label: "Bluetooth", checked: !1 },
    { id: "battery", label: "Bateria", checked: !1 },
  ],
  us = ({ open: p, onOpenChange: n, originalOS: d, onSuccess: T }) => {
    const { user: y } = ae(),
      { toast: f } = ce(),
      [S, m] = r.useState(!1),
      [i, _] = r.useState(""),
      [v, N] = r.useState(""),
      [A, W] = r.useState(""),
      [t, R] = r.useState(""),
      [C, V] = r.useState(fe),
      [w, h] = r.useState([]),
      [j, $] = r.useState([]),
      [x, c] = r.useState(null);
    r.useEffect(() => {
      p && d && (I(), _(""), W(""), R(""), V(fe), h([]), $([]));
    }, [p, d]);
    const I = async () => {
        if (y)
          try {
            const l = Date.now(),
              o = Math.floor(Math.random() * 1e3)
                .toString()
                .padStart(3, "0"),
              P = `GAR-${l}-${o}`;
            N(P);
          } catch {
            N(`GAR-${Date.now()}-${Math.floor(Math.random() * 1e3)}`);
          }
      },
      g = (l) => {
        const o = l.target.files;
        if (o) {
          if (w.length + o.length > 5) {
            f({
              title: "Limite excedido",
              description: "Você pode adicionar no máximo 5 fotos.",
              variant: "destructive",
            });
            return;
          }
          Array.from(o).forEach((P) => {
            const D = new FileReader();
            (D.onloadend = () => {
              h((z) => [...z, D.result]);
            }),
              D.readAsDataURL(P);
          });
        }
      },
      L = (l) => {
        const o = l.target.files;
        if (o) {
          if (j.length + o.length > 5) {
            f({
              title: "Limite excedido",
              description: "Você pode adicionar no máximo 5 vídeos.",
              variant: "destructive",
            });
            return;
          }
          Array.from(o).forEach((P) => {
            const D = new FileReader();
            (D.onloadend = () => {
              $((z) => [...z, D.result]);
            }),
              D.readAsDataURL(P);
          });
        }
      },
      te = (l) => {
        h((o) => o.filter((P, D) => D !== l));
      },
      U = (l) => {
        $((o) => o.filter((P, D) => D !== l));
      },
      O = async () => {
        if (!y || !d || !i.trim()) {
          f({
            title: "Erro",
            description: "Por favor, preencha o motivo da garantia.",
            variant: "destructive",
          });
          return;
        }
        m(!0);
        try {
          const l = A ? parseFloat(A.replace(",", ".")) : 0,
            o = `GAR-${Date.now()}-${crypto.randomUUID().substring(0, 8)}`;
          let P = w;
          if (w.some((ee) => _e(ee)) && w.length > 0)
            try {
              P = await Ce(w, y.id);
            } catch {}
          const z = {
              user_id: y.id,
              order_number: o,
              type: "repair",
              is_warranty: !0,
              warranty_reason: i,
              original_os_id: d.id,
              client_name: d.clientName,
              client_cpf: d.clientCPF,
              client_phone: d.clientPhone,
              device_model: d.deviceModel,
              imei: d.imei,
              reported_problem: `GARANTIA: ${i}`,
              service_value: "0.00",
              status: "open",
              entry_date: oe(),
              estimated_delivery_date: t || null,
              access_token: crypto.randomUUID(),
              entry_checklist: C,
              photos: P,
              entry_videos: j,
            },
            { data: K, error: J } = await F.from("service_orders")
              .insert([z])
              .select()
              .single();
          if (J) throw J;
          l > 0 &&
            (await F.from("transactions").insert({
              user_id: y.id,
              type: "expense",
              amount: l,
              description: `Custo de garantia ${v} - ${d.clientName}`,
              category: "Garantias",
              date: oe(),
            })),
            f({
              title: "Sucesso",
              description: "Garantia registrada instantaneamente!",
            }),
            T(),
            n(!1),
            _("");
        } catch (l) {
          f({
            title: "Erro",
            description: l.message || "Erro ao criar garantia.",
            variant: "destructive",
          });
        } finally {
          m(!1);
        }
      };
    return d
      ? e.jsxs(e.Fragment, {
          children: [
            e.jsx(X, {
              open: p,
              onOpenChange: n,
              children: e.jsxs(Q, {
                className: "max-w-4xl max-h-[90vh]",
                children: [
                  e.jsx(Y, {
                    children: e.jsxs(Z, {
                      children: ["Nova Garantia - OS #", d.orderNumber],
                    }),
                  }),
                  e.jsx(le, {
                    className: "max-h-[70vh] pr-4",
                    children: e.jsxs("div", {
                      className: "space-y-6 py-4",
                      children: [
                        e.jsxs("div", {
                          className: "grid grid-cols-2 gap-4",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsx(E, { children: "Número da Garantia" }),
                                e.jsx(G, { value: v, disabled: !0 }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx(E, { children: "Data" }),
                                e.jsx(G, { value: Ie(), disabled: !0 }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("h3", {
                              className: "font-semibold text-sm",
                              children: "Dados do Cliente",
                            }),
                            e.jsxs("div", {
                              className: "grid grid-cols-2 gap-4",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx(E, { children: "Nome" }),
                                    e.jsx(G, {
                                      value: d.clientName,
                                      disabled: !0,
                                    }),
                                  ],
                                }),
                                d.clientCPF &&
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx(E, { children: "CPF" }),
                                      e.jsx(G, {
                                        value: d.clientCPF,
                                        disabled: !0,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("h3", {
                              className: "font-semibold text-sm",
                              children: "Dados do Aparelho",
                            }),
                            e.jsxs("div", {
                              className: "grid grid-cols-2 gap-4",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx(E, { children: "Modelo" }),
                                    e.jsx(G, {
                                      value: d.deviceModel,
                                      disabled: !0,
                                    }),
                                  ],
                                }),
                                d.imei &&
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx(E, { children: "IMEI" }),
                                      e.jsx(G, { value: d.imei, disabled: !0 }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx(E, {
                              htmlFor: "warranty_reason",
                              className: "text-red-500",
                              children: "Motivo da Garantia *",
                            }),
                            e.jsx(Le, {
                              id: "warranty_reason",
                              placeholder:
                                "Descreva o motivo do retorno em garantia...",
                              value: i,
                              onChange: (l) => _(l.target.value),
                              rows: 3,
                              className: "resize-none",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx(E, {
                              htmlFor: "warranty_cost",
                              children: "Custo da Garantia (Opcional)",
                            }),
                            e.jsx(G, {
                              id: "warranty_cost",
                              type: "text",
                              placeholder: "0,00",
                              value: A,
                              onChange: (l) => {
                                const o = l.target.value.replace(/[^\d,]/g, "");
                                W(o);
                              },
                            }),
                            A &&
                              e.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children:
                                  "O custo será registrado automaticamente em despesas.",
                              }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx(E, {
                              htmlFor: "estimated_delivery_date",
                              children: "Previsão de Entrega (Opcional)",
                            }),
                            e.jsx(G, {
                              id: "estimated_delivery_date",
                              type: "date",
                              value: t,
                              onChange: (l) => R(l.target.value),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx(E, { children: "Checklist de Entrada" }),
                            e.jsx(ge, { items: C, onChange: V }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx(E, {
                              children: "Fotos do Aparelho (Máximo 5)",
                            }),
                            e.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                e.jsx("div", {
                                  className: "flex items-center gap-2",
                                  children: e.jsxs(u, {
                                    type: "button",
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () =>
                                      document
                                        .getElementById("warranty-photo-input")
                                        ?.click(),
                                    disabled: w.length >= 5,
                                    children: [
                                      e.jsx(ve, { className: "h-4 w-4 mr-2" }),
                                      "Adicionar Fotos (",
                                      w.length,
                                      "/5)",
                                    ],
                                  }),
                                }),
                                e.jsx("input", {
                                  id: "warranty-photo-input",
                                  type: "file",
                                  accept: "image/*",
                                  multiple: !0,
                                  className: "hidden",
                                  onChange: g,
                                }),
                                w.length > 0 &&
                                  e.jsx("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: w.map((l, o) =>
                                      e.jsxs(
                                        "div",
                                        {
                                          className: "relative group",
                                          children: [
                                            e.jsx("img", {
                                              src: l,
                                              alt: `Foto ${o + 1}`,
                                              className:
                                                "w-full h-24 object-cover rounded border",
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center gap-2",
                                              children: [
                                                e.jsx(u, {
                                                  type: "button",
                                                  variant: "secondary",
                                                  size: "icon",
                                                  className: "h-7 w-7",
                                                  onClick: () => c(l),
                                                  children: e.jsx(be, {
                                                    className: "h-3 w-3",
                                                  }),
                                                }),
                                                e.jsx(u, {
                                                  type: "button",
                                                  variant: "destructive",
                                                  size: "icon",
                                                  className: "h-7 w-7",
                                                  onClick: () => te(o),
                                                  children: e.jsx(se, {
                                                    className: "h-3 w-3",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        o
                                      )
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx(E, {
                              children: "Vídeos do Aparelho (Máximo 5)",
                            }),
                            e.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                e.jsx("div", {
                                  className: "flex items-center gap-2",
                                  children: e.jsxs(u, {
                                    type: "button",
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () =>
                                      document
                                        .getElementById("warranty-video-input")
                                        ?.click(),
                                    disabled: j.length >= 5,
                                    children: [
                                      e.jsx(Ne, { className: "h-4 w-4 mr-2" }),
                                      "Adicionar Vídeos (",
                                      j.length,
                                      "/5)",
                                    ],
                                  }),
                                }),
                                e.jsx("input", {
                                  id: "warranty-video-input",
                                  type: "file",
                                  accept: "video/*",
                                  multiple: !0,
                                  className: "hidden",
                                  onChange: L,
                                }),
                                j.length > 0 &&
                                  e.jsx("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: j.map((l, o) =>
                                      e.jsxs(
                                        "div",
                                        {
                                          className: "relative group",
                                          children: [
                                            e.jsx("video", {
                                              src: l,
                                              className:
                                                "w-full h-32 object-cover rounded border",
                                              controls: !0,
                                            }),
                                            e.jsx(u, {
                                              type: "button",
                                              variant: "destructive",
                                              size: "icon",
                                              className:
                                                "absolute top-2 right-2 h-7 w-7",
                                              onClick: () => U(o),
                                              children: e.jsx(se, {
                                                className: "h-3 w-3",
                                              }),
                                            }),
                                          ],
                                        },
                                        o
                                      )
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsxs(ye, {
                    children: [
                      e.jsx(u, {
                        variant: "outline",
                        onClick: () => n(!1),
                        disabled: S,
                        children: "Cancelar",
                      }),
                      e.jsx(u, {
                        onClick: O,
                        disabled: S || !i.trim(),
                        children: S ? "Registrando..." : "Registrar Garantia",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            x &&
              e.jsx(X, {
                open: !!x,
                onOpenChange: () => c(null),
                children: e.jsxs(Q, {
                  className: "max-w-4xl",
                  children: [
                    e.jsx(Y, {
                      children: e.jsx(Z, { children: "Visualizar Foto" }),
                    }),
                    e.jsx("div", {
                      className: "flex items-center justify-center",
                      children: e.jsx("img", {
                        src: x,
                        alt: "Foto ampliada",
                        className: "max-w-full max-h-[70vh] object-contain",
                      }),
                    }),
                  ],
                }),
              }),
          ],
        })
      : null;
  },
  ps = [
    { id: "screen", label: "Tela", checked: !0 },
    { id: "touch", label: "Touch", checked: !0 },
    { id: "camera-front", label: "Câmera Frontal", checked: !0 },
    { id: "camera-back", label: "Câmera Traseira", checked: !0 },
    { id: "flash", label: "Flash", checked: !0 },
    { id: "speaker", label: "Alto-falante", checked: !0 },
    { id: "earpiece", label: "Auricular", checked: !0 },
    { id: "microphone", label: "Microfone", checked: !0 },
    { id: "charging", label: "Carregamento", checked: !0 },
    { id: "buttons", label: "Botões", checked: !0 },
    { id: "fingerprint", label: "Biometria", checked: !0 },
    { id: "face-id", label: "Face ID", checked: !0 },
    { id: "network", label: "Rede", checked: !0 },
    { id: "wifi", label: "Wi-Fi", checked: !0 },
    { id: "bluetooth", label: "Bluetooth", checked: !0 },
    { id: "battery", label: "Bateria", checked: !0 },
    { id: "vibration", label: "Vibração", checked: !0 },
  ];
function fs({
  open: p,
  onOpenChange: n,
  warrantyId: d,
  orderNumber: T,
  usedParts: y = [],
  onComplete: f,
}) {
  const [S, m] = r.useState(ps),
    [i, _] = r.useState([]),
    [v, N] = r.useState([]),
    [A, W] = r.useState(null),
    [t, R] = r.useState(!1),
    { toast: C } = ce(),
    V = (x) => {
      const c = x.target.files;
      if (c) {
        if (i.length + c.length > 5) {
          C({
            title: "Limite excedido",
            description: "Você pode adicionar no máximo 5 fotos.",
            variant: "destructive",
          });
          return;
        }
        Array.from(c).forEach((I) => {
          const g = new FileReader();
          (g.onloadend = () => {
            _((L) => [...L, g.result]);
          }),
            g.readAsDataURL(I);
        });
      }
    },
    w = (x) => {
      const c = x.target.files;
      if (c) {
        if (v.length + c.length > 5) {
          C({
            title: "Limite excedido",
            description: "Você pode adicionar no máximo 5 vídeos.",
            variant: "destructive",
          });
          return;
        }
        Array.from(c).forEach((I) => {
          const g = new FileReader();
          (g.onloadend = () => {
            N((L) => [...L, g.result]);
          }),
            g.readAsDataURL(I);
        });
      }
    },
    h = (x) => {
      _((c) => c.filter((I, g) => g !== x));
    },
    j = (x) => {
      N((c) => c.filter((I, g) => g !== x));
    },
    $ = async () => {
      R(!0);
      try {
        const {
          data: { user: x },
        } = await F.auth.getUser();
        if (!x) throw new Error("User not found");
        let c = i;
        if (i.some((L) => _e(L)) && i.length > 0)
          try {
            c = await Ce(i, x.id);
          } catch {}
        const { error: g } = await F.from("service_orders")
          .update({
            exit_checklist: S,
            exit_photos: c,
            exit_videos: v,
            status: "completed",
          })
          .eq("id", d);
        if (g) throw g;
        C({
          title: "Garantia Finalizada",
          description: "A garantia foi concluída com sucesso!",
        }),
          f(),
          n(!1);
      } catch {
        C({
          title: "Erro",
          description: "Erro ao finalizar garantia.",
          variant: "destructive",
        });
      } finally {
        R(!1);
      }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(X, {
        open: p,
        onOpenChange: n,
        children: e.jsxs(Q, {
          className: "max-w-4xl max-h-[90vh]",
          children: [
            e.jsx(Y, {
              children: e.jsxs(Z, { children: ["Confirmar Garantia - ", T] }),
            }),
            e.jsx(le, {
              className: "max-h-[70vh] pr-4",
              children: e.jsxs("div", {
                className: "space-y-6 py-4",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "font-semibold mb-4 text-lg",
                        children: "Checklist de Saída",
                      }),
                      e.jsx(ge, { items: S, onChange: m }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(E, { children: "Fotos do Aparelho (Máximo 5)" }),
                      e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsx("div", {
                            className: "flex items-center gap-2",
                            children: e.jsxs(u, {
                              type: "button",
                              variant: "outline",
                              size: "sm",
                              onClick: () =>
                                document
                                  .getElementById("exit-photo-input")
                                  ?.click(),
                              disabled: i.length >= 5,
                              children: [
                                e.jsx(ve, { className: "h-4 w-4 mr-2" }),
                                "Adicionar Fotos (",
                                i.length,
                                "/5)",
                              ],
                            }),
                          }),
                          e.jsx("input", {
                            id: "exit-photo-input",
                            type: "file",
                            accept: "image/*",
                            multiple: !0,
                            className: "hidden",
                            onChange: V,
                          }),
                          i.length > 0 &&
                            e.jsx("div", {
                              className: "grid grid-cols-3 gap-2",
                              children: i.map((x, c) =>
                                e.jsxs(
                                  "div",
                                  {
                                    className: "relative group",
                                    children: [
                                      e.jsx("img", {
                                        src: x,
                                        alt: `Foto ${c + 1}`,
                                        className:
                                          "w-full h-24 object-cover rounded border",
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center gap-2",
                                        children: [
                                          e.jsx(u, {
                                            type: "button",
                                            variant: "secondary",
                                            size: "icon",
                                            className: "h-7 w-7",
                                            onClick: () => W(x),
                                            children: e.jsx(be, {
                                              className: "h-3 w-3",
                                            }),
                                          }),
                                          e.jsx(u, {
                                            type: "button",
                                            variant: "destructive",
                                            size: "icon",
                                            className: "h-7 w-7",
                                            onClick: () => h(c),
                                            children: e.jsx(se, {
                                              className: "h-3 w-3",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  c
                                )
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(E, { children: "Vídeos do Aparelho (Máximo 5)" }),
                      e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsx("div", {
                            className: "flex items-center gap-2",
                            children: e.jsxs(u, {
                              type: "button",
                              variant: "outline",
                              size: "sm",
                              onClick: () =>
                                document
                                  .getElementById("exit-video-input")
                                  ?.click(),
                              disabled: v.length >= 5,
                              children: [
                                e.jsx(Ne, { className: "h-4 w-4 mr-2" }),
                                "Adicionar Vídeos (",
                                v.length,
                                "/5)",
                              ],
                            }),
                          }),
                          e.jsx("input", {
                            id: "exit-video-input",
                            type: "file",
                            accept: "video/*",
                            multiple: !0,
                            className: "hidden",
                            onChange: w,
                          }),
                          v.length > 0 &&
                            e.jsx("div", {
                              className: "grid grid-cols-2 gap-2",
                              children: v.map((x, c) =>
                                e.jsxs(
                                  "div",
                                  {
                                    className: "relative group",
                                    children: [
                                      e.jsx("video", {
                                        src: x,
                                        className:
                                          "w-full h-32 object-cover rounded border",
                                        controls: !0,
                                      }),
                                      e.jsx(u, {
                                        type: "button",
                                        variant: "destructive",
                                        size: "icon",
                                        className:
                                          "absolute top-2 right-2 h-7 w-7",
                                        onClick: () => j(c),
                                        children: e.jsx(se, {
                                          className: "h-3 w-3",
                                        }),
                                      }),
                                    ],
                                  },
                                  c
                                )
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs(ye, {
              children: [
                e.jsx(u, {
                  variant: "outline",
                  onClick: () => n(!1),
                  disabled: t,
                  children: "Cancelar",
                }),
                e.jsx(u, {
                  onClick: $,
                  disabled: t,
                  children: t ? "Finalizando..." : "Finalizar Garantia",
                }),
              ],
            }),
          ],
        }),
      }),
      A &&
        e.jsx(X, {
          open: !!A,
          onOpenChange: () => W(null),
          children: e.jsxs(Q, {
            className: "max-w-4xl",
            children: [
              e.jsx(Y, { children: e.jsx(Z, { children: "Visualizar Foto" }) }),
              e.jsx("div", {
                className: "flex items-center justify-center",
                children: e.jsx("img", {
                  src: A,
                  alt: "Foto ampliada",
                  className: "max-w-full max-h-[70vh] object-contain",
                }),
              }),
            ],
          }),
        }),
    ],
  });
}
function js() {
  const { user: p } = ae(),
    [n, d] = r.useState({
      total: 0,
      open: 0,
      inProgress: 0,
      completed: 0,
      averageCost: 0,
      returnRate: 0,
      mostCommonReasons: [],
    }),
    [T, y] = r.useState(!0);
  r.useEffect(() => {
    p && f();
  }, [p]);
  const f = async () => {
      if (p) {
        y(!0);
        try {
          const { data: m, error: i } = await F.from("service_orders")
            .select("*, used_parts")
            .eq("user_id", p.id)
            .eq("is_warranty", !0);
          if (i) throw i;
          const { count: _ } = await F.from("service_orders")
              .select("*", { count: "exact", head: !0 })
              .eq("user_id", p.id)
              .eq("is_warranty", !1),
            v = m?.length || 0,
            N = m?.filter((h) => h.status === "open").length || 0,
            A = m?.filter((h) => h.status === "in-progress").length || 0,
            W = m?.filter((h) => h.status === "completed").length || 0;
          let t = 0;
          m?.forEach((h) => {
            h.used_parts &&
              Array.isArray(h.used_parts) &&
              h.used_parts.forEach((j) => {
                t += (j.unit_price || 0) * (j.quantity || 1);
              });
          });
          const R = v > 0 ? t / v : 0,
            C = _ && _ > 0 ? (v / _) * 100 : 0,
            V = {};
          m?.forEach((h) => {
            if (h.warranty_reason) {
              const j = h.warranty_reason.substring(0, 30) + "...";
              V[j] = (V[j] || 0) + 1;
            }
          });
          const w = Object.entries(V)
            .map(([h, j]) => ({ reason: h, count: j }))
            .sort((h, j) => j.count - h.count)
            .slice(0, 5);
          d({
            total: v,
            open: N,
            inProgress: A,
            completed: W,
            averageCost: R,
            returnRate: C,
            mostCommonReasons: w,
          });
        } catch {
        } finally {
          y(!1);
        }
      }
    },
    S = [
      { name: "Abertas", value: n.open, color: "#3b82f6" },
      { name: "Em Andamento", value: n.inProgress, color: "#f59e0b" },
      { name: "Concluídas", value: n.completed, color: "#22c55e" },
    ];
  return T
    ? e.jsxs("div", {
        className: "text-center py-8",
        children: [
          e.jsx("div", {
            className:
              "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent",
          }),
          e.jsx("p", {
            className: "mt-4 text-muted-foreground",
            children: "Carregando estatísticas...",
          }),
        ],
      })
    : e.jsxs("div", {
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
            children: [
              e.jsx(M, {
                className: "p-6",
                children: e.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    e.jsx("div", {
                      className: "p-3 bg-blue-500/10 rounded-full",
                      children: e.jsx(we, {
                        className: "h-6 w-6 text-blue-500",
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Abertas",
                        }),
                        e.jsx("h3", {
                          className: "text-2xl font-bold",
                          children: n.open,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx(M, {
                className: "p-6",
                children: e.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    e.jsx("div", {
                      className: "p-3 bg-orange-500/10 rounded-full",
                      children: e.jsx(ke, {
                        className: "h-6 w-6 text-orange-500",
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Em Andamento",
                        }),
                        e.jsx("h3", {
                          className: "text-2xl font-bold",
                          children: n.inProgress,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx(M, {
                className: "p-6",
                children: e.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    e.jsx("div", {
                      className: "p-3 bg-green-500/10 rounded-full",
                      children: e.jsx(ne, {
                        className: "h-6 w-6 text-green-500",
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Concluídas",
                        }),
                        e.jsx("h3", {
                          className: "text-2xl font-bold",
                          children: n.completed,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx(M, {
                className: "p-6",
                children: e.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    e.jsx("div", {
                      className: "p-3 bg-purple-500/10 rounded-full",
                      children: e.jsx(de, {
                        className: "h-6 w-6 text-purple-500",
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Taxa de Retorno",
                        }),
                        e.jsxs("h3", {
                          className: "text-2xl font-bold",
                          children: [n.returnRate.toFixed(1), "%"],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid gap-6 md:grid-cols-2",
            children: [
              e.jsxs(M, {
                className: "p-6",
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg mb-4",
                    children: "Distribuição por Status",
                  }),
                  e.jsx(me, {
                    width: "100%",
                    height: 300,
                    children: e.jsxs(Me, {
                      children: [
                        e.jsx(Ve, {
                          data: S,
                          cx: "50%",
                          cy: "50%",
                          labelLine: !1,
                          label: ({ name: m, value: i }) => `${m}: ${i}`,
                          outerRadius: 80,
                          fill: "#8884d8",
                          dataKey: "value",
                          children: S.map((m, i) =>
                            e.jsx(Ge, { fill: m.color }, `cell-${i}`)
                          ),
                        }),
                        e.jsx(he, {}),
                        e.jsx(ds, {}),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs(M, {
                className: "p-6",
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg mb-4",
                    children: "Motivos Mais Comuns",
                  }),
                  e.jsx(me, {
                    width: "100%",
                    height: 300,
                    children: e.jsxs(ze, {
                      data: n.mostCommonReasons,
                      layout: "vertical",
                      children: [
                        e.jsx(Be, { strokeDasharray: "3 3" }),
                        e.jsx($e, { type: "number" }),
                        e.jsx(qe, {
                          dataKey: "reason",
                          type: "category",
                          width: 120,
                        }),
                        e.jsx(he, {}),
                        e.jsx(Ue, { dataKey: "count", fill: "#3b82f6" }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid gap-4 md:grid-cols-2",
            children: [
              e.jsx(M, {
                className: "p-6",
                children: e.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    e.jsx("div", {
                      className: "p-3 bg-blue-500/10 rounded-full",
                      children: e.jsx(Oe, {
                        className: "h-6 w-6 text-blue-500",
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Total de Garantias",
                        }),
                        e.jsx("h3", {
                          className: "text-2xl font-bold",
                          children: n.total,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx(M, {
                className: "p-6",
                children: e.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    e.jsx("div", {
                      className: "p-3 bg-purple-500/10 rounded-full",
                      children: e.jsx(de, {
                        className: "h-6 w-6 text-purple-500",
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Taxa de Retorno",
                        }),
                        e.jsxs("h3", {
                          className: "text-2xl font-bold",
                          children: [n.returnRate.toFixed(1), "%"],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs(M, {
            className: "p-6",
            children: [
              e.jsx("h3", {
                className: "font-semibold text-lg mb-4",
                children: "Resumo Geral",
              }),
              e.jsxs("div", {
                className: "grid gap-4 md:grid-cols-3",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground mb-2",
                        children: "Total de Garantias",
                      }),
                      e.jsx("div", {
                        className: "flex items-center gap-2",
                        children: e.jsx(H, {
                          variant: "outline",
                          className: "text-lg px-3 py-1",
                          children: n.total,
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground mb-2",
                        children: "Taxa de Conclusão",
                      }),
                      e.jsx("div", {
                        className: "flex items-center gap-2",
                        children: e.jsxs(H, {
                          variant: "outline",
                          className: "text-lg px-3 py-1",
                          children: [
                            n.total > 0
                              ? ((n.completed / n.total) * 100).toFixed(1)
                              : 0,
                            "%",
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground mb-2",
                        children: "Em Aberto",
                      }),
                      e.jsx("div", {
                        className: "flex items-center gap-2",
                        children: e.jsx(H, {
                          variant: "outline",
                          className: "text-lg px-3 py-1",
                          children: n.open + n.inProgress,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
const gs = {
    open: "Aberta",
    "in-progress": "Em Andamento",
    completed: "Concluída",
    pending: "Pendente",
    "waiting-parts": "Aguardando Peça",
    cancelled: "Cancelada",
  },
  vs = {
    open: "bg-blue-500",
    "in-progress": "bg-yellow-500",
    completed: "bg-green-500",
    pending: "bg-orange-500",
    "waiting-parts": "bg-purple-500",
    cancelled: "bg-red-500",
  };
function _s() {
  Ke();
  const { user: p } = ae(),
    { effectiveUserId: n, isEmployee: d, employeeId: T } = He(),
    y = n || p?.id || "",
    { toast: f } = ce(),
    S = Xe(),
    [m, i] = r.useState([]),
    [_, v] = r.useState([]),
    [N, A] = r.useState(""),
    [W, t] = r.useState(!1),
    [R, C] = r.useState(null),
    [V, w] = r.useState(!1),
    [h, j] = r.useState(!1),
    [$, x] = r.useState(!1),
    [c, I] = r.useState(null),
    [g, L] = r.useState(null),
    [te, U] = r.useState(!1),
    [O, l] = r.useState(null),
    [o, P] = r.useState(!1),
    [D, z] = r.useState("list");
  r.useEffect(() => {
    p && (K(), J());
  }, [p]),
    r.useEffect(() => {
      if (N.trim() === "") v(m);
      else {
        const s = N.toLowerCase(),
          a = N.replace(/\D/g, ""),
          k = m.filter(
            (b) =>
              b.order_number.toLowerCase().includes(s) ||
              b.client_name.toLowerCase().includes(s) ||
              b.client_cpf?.toLowerCase().includes(s) ||
              b.device_model.toLowerCase().includes(s) ||
              (a.length >= 3 &&
                (b.client_cpf || "").replace(/\D/g, "").includes(a))
          );
        v(k);
      }
    }, [N, m]);
  const K = async () => {
      if (p) {
        t(!0);
        try {
          const s = await F.from("service_orders")
            .select("*")
            .eq("user_id", y)
            .eq("is_warranty", !0)
            .order("entry_date", { ascending: !1 });
          if (s.error) throw s.error;
          i(s.data || []), v(s.data || []);
        } catch {
          f({
            title: "Erro",
            description: "Erro ao carregar garantias.",
            variant: "destructive",
          });
        } finally {
          t(!1);
        }
      }
    },
    J = () => {
      if (!p) return;
      const s = F.channel("warranties_changes")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "service_orders",
            filter: `user_id=eq.${y},is_warranty=eq.true`,
          },
          (a) => {
            const { eventType: k, new: b, old: re } = a;
            i((B) =>
              k === "INSERT" && b.is_warranty
                ? B.some((q) => q.id === b.id)
                  ? B
                  : [b, ...B]
                : k === "UPDATE" && b.is_warranty
                ? B.map((q) => (q.id === b.id ? b : q))
                : k === "DELETE"
                ? B.filter((q) => q.id !== re.id)
                : B
            );
          }
        )
        .subscribe();
      return () => {
        F.removeChannel(s);
      };
    },
    ee = async (s) => {
      try {
        const { data: a, error: k } = await F.from("service_orders")
          .select("*")
          .eq("id", s.id)
          .single();
        if (k) throw k;
        const b = {
          id: a.id || "",
          orderNumber: a.order_number,
          type: "repair",
          clientName: a.client_name,
          clientCPF: a.client_cpf,
          clientPhone: a.client_phone,
          deviceModel: a.device_model,
          imei: a.imei,
          reportedProblem: a.reported_problem,
          serviceValue: a.service_value,
          status: a.status,
          entryDate: a.entry_date,
          estimatedDeliveryDate: a.estimated_delivery_date,
          technician: a.technician,
          additionalNotes: a.additional_notes,
          photos: a.photos || [],
          entryVideos: a.entry_videos || [],
          entryChecklist: a.entry_checklist || [],
          exitChecklist: a.exit_checklist || [],
          exitPhotos: a.exit_photos || [],
          exitVideos: a.exit_videos || [],
        };
        C(b), w(!0);
      } catch {
        f({
          title: "Erro",
          description: "Erro ao carregar detalhes da garantia.",
          variant: "destructive",
        });
      }
    },
    De = async (s) => {
      try {
        const a = {
          id: s.id,
          orderNumber: s.order_number,
          clientName: s.client_name,
          clientCPF: s.client_cpf || "",
          clientPhone: s.client_phone || "",
          deviceModel: s.device_model,
          imei: s.imei || "",
          reportedProblem: s.reported_problem,
          serviceValue: s.service_value,
          entryDate: s.entry_date,
          status: s.status,
          warrantyReason: s.warranty_reason || "",
        };
        await ns(a, p?.id),
          f({
            title: "Sucesso",
            description: "PDF de garantia gerado com sucesso!",
          });
      } catch {
        f({
          title: "Erro",
          description: "Erro ao gerar PDF de garantia.",
          variant: "destructive",
        });
      }
    },
    Se = (s) => {
      const a = {
        id: s.id || "",
        orderNumber: s.order_number,
        type: s.type || "repair",
        clientName: s.client_name,
        clientCPF: s.client_cpf,
        clientPhone: s.client_phone,
        deviceModel: s.device_model,
        imei: s.imei,
        reportedProblem: s.reported_problem,
        serviceValue: s.service_value,
        status: s.status,
        entryDate: s.entry_date,
        estimatedDeliveryDate: s.estimated_delivery_date,
        technician: s.technician,
        additionalNotes: s.additional_notes,
        photos: s.photos || [],
      };
      I(a), j(!1), x(!0);
    },
    Ae = () => {
      x(!1),
        I(null),
        K(),
        f({
          title: "Garantia Registrada",
          description: "A garantia foi adicionada instantaneamente!",
        });
    },
    Pe = (s) => {
      L(s), U(!0);
    },
    Ee = (s) => {
      l(s), P(!0);
    },
    Fe = () => {
      P(!1), l(null), K();
    },
    Re = async () => {
      if (!g) return;
      const s = g.id;
      i((a) => a.filter((k) => k.id !== s)), U(!1), L(null);
      try {
        const { error: a } = await F.from("service_orders")
          .delete()
          .eq("id", s);
        if (a) throw a;
        f({ title: "Sucesso", description: "Garantia excluída com sucesso!" });
      } catch {
        K(),
          f({
            title: "Erro",
            description: "Erro ao excluir garantia.",
            variant: "destructive",
          });
      }
    },
    Te = (s) => {
      const a = s.client_phone?.replace(/\D/g, "");
      if (!a) {
        f({
          title: "Erro",
          description: "Cliente não possui telefone cadastrado.",
          variant: "destructive",
        });
        return;
      }
      const k =
          s.status === "completed"
            ? "concluída"
            : s.status === "in-progress"
            ? "em andamento"
            : "aberta",
        b = `Olá ${s.client_name}! Informamos que sua garantia (${s.order_number}) está ${k}. Qualquer dúvida, entre em contato conosco!`;
      window.open(
        `https://wa.me/55${a}?text=${encodeURIComponent(b)}`,
        "_blank"
      );
    },
    We = async (s) => {
      try {
        const { data: a } = await F.from("user_settings")
            .select(
              "company_name, company_cnpj, company_address, company_phone"
            )
            .eq("user_id", y)
            .maybeSingle(),
          k = {
            company_name: a?.company_name || "MINHA EMPRESA",
            company_cnpj: a?.company_cnpj || "",
            company_address: a?.company_address || "",
            company_phone: a?.company_phone || "",
          },
          b = {
            orderNumber: s.order_number,
            clientName: s.client_name,
            clientPhone: s.client_phone,
            deviceModel: s.device_model,
            imei: s.imei,
            warrantyReason: s.warranty_reason || "",
            entryDate: s.entry_date,
            status: s.status,
          },
          re = await ls(b, k),
          B = cs(b, k);
        await os(re, B, k.company_name || "MINHA EMPRESA"),
          f({
            title: "Sucesso",
            description: "Cupom de garantia enviado para impressão!",
          });
      } catch {
        f({
          title: "Erro",
          description: "Erro ao gerar cupom de garantia.",
          variant: "destructive",
        });
      }
    };
  return e.jsxs("div", {
    className: "container mx-auto p-3 md:p-6 space-y-3 md:space-y-6",
    "data-dashboard": !0,
    children: [
      e.jsxs("div", {
        className:
          "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",
        children: [
          e.jsxs("div", {
            className: "w-full sm:w-auto",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2 md:gap-3 mb-2",
                children: [
                  e.jsx(u, {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => {
                      D === "dashboard" ? z("list") : S("/dashboard");
                    },
                    className: "h-7 w-7 md:h-8 md:w-8 flex-shrink-0",
                    children: e.jsx(ms, { className: "h-3 w-3 md:h-4 md:w-4" }),
                  }),
                  e.jsx("h1", {
                    className: "text-xl md:text-3xl font-bold",
                    children: "Gestão de Garantias",
                  }),
                ],
              }),
              e.jsx("p", {
                className:
                  "text-xs md:text-sm text-muted-foreground ml-9 md:ml-11",
                children: "CRM completo para controle de garantias",
              }),
            ],
          }),
          e.jsxs(u, {
            onClick: () => j(!0),
            size: "sm",
            className: "bg-primary hover:bg-primary/90 w-full sm:w-auto",
            children: [
              e.jsx(Qe, { className: "h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" }),
              e.jsx("span", {
                className: "text-xs md:text-sm",
                children: "Nova Garantia",
              }),
            ],
          }),
        ],
      }),
      e.jsxs(Ye, {
        value: D,
        onValueChange: z,
        className: "w-full",
        children: [
          e.jsxs(Ze, {
            className: "grid w-full max-w-full sm:max-w-md grid-cols-2",
            children: [
              e.jsxs(xe, {
                value: "list",
                className: "gap-1 md:gap-2 text-xs md:text-sm",
                children: [
                  e.jsx(ie, { className: "h-3 w-3 md:h-4 md:w-4" }),
                  e.jsx("span", {
                    className: "hidden sm:inline",
                    children: "Lista de Garantias",
                  }),
                  e.jsx("span", { className: "sm:hidden", children: "Lista" }),
                ],
              }),
              e.jsxs(xe, {
                value: "dashboard",
                className: "gap-1 md:gap-2 text-xs md:text-sm",
                children: [
                  e.jsx(Je, { className: "h-3 w-3 md:h-4 md:w-4" }),
                  "Dashboard",
                ],
              }),
            ],
          }),
          e.jsxs(ue, {
            value: "list",
            className: "space-y-3 md:space-y-4",
            children: [
              e.jsxs("div", {
                className: "relative",
                children: [
                  e.jsx(je, {
                    className:
                      "absolute left-2 md:left-3 top-2.5 md:top-3 h-3 w-3 md:h-4 md:w-4 text-muted-foreground",
                  }),
                  e.jsx(G, {
                    placeholder: "Buscar por número, cliente, CPF ou modelo...",
                    value: N,
                    onChange: (s) => A(s.target.value),
                    className: "pl-8 md:pl-10 text-xs md:text-sm h-9",
                  }),
                ],
              }),
              W
                ? e.jsxs("div", {
                    className: "text-center py-12",
                    children: [
                      e.jsx("div", {
                        className:
                          "inline-block h-6 w-6 md:h-8 md:w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]",
                      }),
                      e.jsx("p", {
                        className:
                          "mt-4 text-muted-foreground text-xs md:text-sm",
                        children: "Carregando garantias...",
                      }),
                    ],
                  })
                : _.length === 0
                ? e.jsxs(M, {
                    className: "p-8 md:p-12 text-center",
                    children: [
                      e.jsx(ie, {
                        className:
                          "h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-muted-foreground opacity-50",
                      }),
                      e.jsx("h3", {
                        className: "text-base md:text-lg font-semibold mb-2",
                        children: N
                          ? "Nenhuma garantia encontrada"
                          : "Nenhuma garantia registrada",
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground text-xs md:text-sm",
                        children: N
                          ? "Tente ajustar os termos de busca"
                          : "As garantias criadas aparecerão aqui",
                      }),
                    ],
                  })
                : e.jsx("div", {
                    className: "space-y-3 md:space-y-4",
                    children: _.map((s) =>
                      e.jsxs(
                        M,
                        {
                          className:
                            "p-3 md:p-6 hover:shadow-lg transition-all border-l-4",
                          style: {
                            borderLeftColor:
                              s.status === "completed"
                                ? "#22c55e"
                                : s.status === "open"
                                ? "#3b82f6"
                                : "#f59e0b",
                          },
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex flex-col sm:flex-row justify-between items-start gap-3 mb-3 md:mb-4",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 md:gap-3 min-w-0 flex-1",
                                  children: [
                                    s.status === "completed"
                                      ? e.jsx(ne, {
                                          className:
                                            "h-6 w-6 md:h-8 md:w-8 text-green-500 flex-shrink-0",
                                        })
                                      : s.status === "open"
                                      ? e.jsx(we, {
                                          className:
                                            "h-6 w-6 md:h-8 md:w-8 text-blue-500 flex-shrink-0",
                                        })
                                      : e.jsx(ke, {
                                          className:
                                            "h-6 w-6 md:h-8 md:w-8 text-orange-500 flex-shrink-0",
                                        }),
                                    e.jsxs("div", {
                                      className: "min-w-0 flex-1",
                                      children: [
                                        e.jsxs("h3", {
                                          className:
                                            "font-bold text-base md:text-xl truncate",
                                          children: ["GAR #", s.order_number],
                                        }),
                                        e.jsxs("p", {
                                          className:
                                            "text-xs md:text-sm text-muted-foreground",
                                          children: [
                                            "Registrada em ",
                                            es(s.entry_date),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx(H, {
                                  className: `${
                                    vs[s.status]
                                  } text-[10px] md:text-xs h-5 md:h-6 px-1.5 md:px-2 flex-shrink-0`,
                                  children: gs[s.status] || s.status,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-3 md:mb-4",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] md:text-xs text-muted-foreground uppercase font-semibold",
                                      children: "Cliente",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "font-medium text-xs md:text-sm truncate",
                                      children: s.client_name,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] md:text-xs text-muted-foreground uppercase font-semibold",
                                      children: "Aparelho",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "font-medium text-xs md:text-sm truncate",
                                      children: s.device_model,
                                    }),
                                  ],
                                }),
                                s.client_phone &&
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] md:text-xs text-muted-foreground uppercase font-semibold",
                                        children: "Telefone",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "font-medium text-xs md:text-sm",
                                        children: s.client_phone,
                                      }),
                                    ],
                                  }),
                                s.imei &&
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] md:text-xs text-muted-foreground uppercase font-semibold",
                                        children: "IMEI",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "font-medium text-xs md:text-sm",
                                        children: s.imei,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            s.warranty_reason &&
                              e.jsxs("div", {
                                className:
                                  "mb-3 md:mb-4 p-2 md:p-3 bg-muted rounded-lg",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] md:text-xs text-muted-foreground uppercase font-semibold mb-1",
                                    children: "Motivo da Garantia",
                                  }),
                                  e.jsx("p", {
                                    className: "text-xs md:text-sm",
                                    children: s.warranty_reason,
                                  }),
                                ],
                              }),
                            e.jsxs("div", {
                              className: "flex flex-wrap gap-1 md:gap-2",
                              children: [
                                e.jsxs(u, {
                                  size: "sm",
                                  variant: "outline",
                                  className:
                                    "text-[10px] md:text-xs h-7 md:h-8 px-2 md:px-3",
                                  onClick: () => ee(s),
                                  children: [
                                    e.jsx(ss, {
                                      className: "h-3 w-3 mr-0.5 md:mr-1",
                                    }),
                                    "Detalhes",
                                  ],
                                }),
                                e.jsxs(u, {
                                  size: "sm",
                                  variant: "outline",
                                  className:
                                    "text-[10px] md:text-xs h-7 md:h-8 px-2 md:px-3",
                                  onClick: () => De(s),
                                  children: [
                                    e.jsx(pe, {
                                      className: "h-3 w-3 mr-0.5 md:mr-1",
                                    }),
                                    "PDF",
                                  ],
                                }),
                                e.jsxs(u, {
                                  size: "sm",
                                  variant: "outline",
                                  className:
                                    "text-[10px] md:text-xs h-7 md:h-8 px-2 md:px-3",
                                  onClick: () => Te(s),
                                  children: [
                                    e.jsx(as, {
                                      className: "h-3 w-3 mr-0.5 md:mr-1",
                                    }),
                                    e.jsx("span", {
                                      className: "hidden sm:inline",
                                      children: "WhatsApp",
                                    }),
                                    e.jsx("span", {
                                      className: "sm:hidden",
                                      children: "Msg",
                                    }),
                                  ],
                                }),
                                e.jsxs(u, {
                                  size: "sm",
                                  variant: "outline",
                                  className:
                                    "text-[10px] md:text-xs h-7 md:h-8 px-2 md:px-3",
                                  onClick: () => We(s),
                                  children: [
                                    e.jsx(pe, {
                                      className: "h-3 w-3 mr-0.5 md:mr-1",
                                    }),
                                    "Cupom",
                                  ],
                                }),
                                s.status !== "completed" &&
                                  e.jsxs(u, {
                                    size: "sm",
                                    className:
                                      "bg-primary hover:bg-primary/90 text-[10px] md:text-xs h-7 md:h-8 px-2 md:px-3",
                                    onClick: () => Ee(s),
                                    children: [
                                      e.jsx(ne, {
                                        className: "h-3 w-3 mr-0.5 md:mr-1",
                                      }),
                                      e.jsx("span", {
                                        className: "hidden sm:inline",
                                        children: "Confirmar OS",
                                      }),
                                      e.jsx("span", {
                                        className: "sm:hidden",
                                        children: "Confirmar",
                                      }),
                                    ],
                                  }),
                                e.jsx(u, {
                                  size: "sm",
                                  variant: "outline",
                                  className:
                                    "text-destructive hover:text-destructive text-[10px] md:text-xs h-7 md:h-8 px-2 md:px-3",
                                  onClick: () => Pe(s),
                                  children: e.jsx(ts, { className: "h-3 w-3" }),
                                }),
                              ],
                            }),
                          ],
                        },
                        s.id
                      )
                    ),
                  }),
            ],
          }),
          e.jsx(ue, { value: "dashboard", children: e.jsx(js, {}) }),
        ],
      }),
      R && e.jsx(rs, { order: R, open: V, onOpenChange: w }),
      e.jsx(xs, { open: h, onOpenChange: j, onSelectOS: Se }),
      c &&
        e.jsx(us, { open: $, onOpenChange: x, originalOS: c, onSuccess: Ae }),
      g &&
        e.jsx(is, {
          open: te,
          onOpenChange: U,
          onConfirm: Re,
          orderNumber: g.order_number,
        }),
      O &&
        e.jsx(fs, {
          open: o,
          onOpenChange: P,
          warrantyId: O.id,
          orderNumber: O.order_number,
          onComplete: Fe,
        }),
    ],
  });
}
export { _s as default };
