import {
  z as _e,
  r as p,
  ca as re,
  j as e,
  D as xe,
  c as ue,
  a_ as fe,
  d as Ne,
  c2 as Ce,
  G as T,
  Y as I,
  $ as R,
  a1 as A,
  n as N,
  I as q,
  cJ as Me,
  T as je,
  B as b,
  w as D,
  bU as F,
  cD as ke,
  b3 as he,
  X as Ue,
  o as We,
  bI as qe,
  bi as Ie,
  bF as Re,
  U as Be,
  ac as $e,
  b5 as Ge,
  b6 as He,
  b7 as Ye,
  b8 as Je,
  b9 as Xe,
  cf as Ke,
  cK as we,
  bW as ye,
  bB as Qe,
  bC as Ze,
  bD as Se,
  bE as De,
  b2 as Ee,
  bT as Te,
  aa as Ae,
  cL as ce,
  bK as oe,
  bm as de,
} from "./index-V8ZHCWL2.js";
import {
  T as Pe,
  a as ze,
  b as me,
  c as J,
  d as Le,
  e as X,
} from "./table-Dmiq7g5Z.js";
import { S as pe } from "./index-BS1V7zI7.js";
function es({ open: c, onOpenChange: V, onSuccess: s, editId: m }) {
  const { user: y } = _e(),
    a = p.useRef(null),
    n = p.useRef(null),
    [h, S] = p.useState({
      client_name: "",
      client_cpf_cnpj: "",
      client_address: "",
      client_phone: "",
      device_imei: "",
      device_brand_model: "",
      purchase_date: re(),
      purchase_value: "",
      additional_notes: "",
    }),
    [M, P] = p.useState({
      screen: !1,
      connector: !1,
      battery: !1,
      wifi: !1,
      speaker: !1,
      camera: !1,
      faceId: !1,
      unlocked: !1,
    }),
    [L, i] = p.useState(!1),
    [k, W] = p.useState(!1),
    [l, w] = p.useState({ client: "", store: "" }),
    r = !!m;
  p.useEffect(() => {
    if (!c) return;
    if (!m) {
      E(), w({ client: "", store: "" });
      return;
    }
    let d = !1;
    return (
      (async () => {
        W(!0);
        try {
          const { data: v, error: O } = await D.from("purchase_contracts")
            .select("*")
            .eq("id", m)
            .single();
          if (O) throw O;
          if (d || !v) return;
          S({
            client_name: v.client_name || "",
            client_cpf_cnpj: v.client_cpf_cnpj || "",
            client_address: v.client_address || "",
            client_phone: v.client_phone || "",
            device_imei: v.device_imei || "",
            device_brand_model: v.device_brand_model || "",
            purchase_date: v.purchase_date || re(),
            purchase_value: String(v.purchase_value ?? "").replace(".", ","),
            additional_notes: v.additional_notes || "",
          }),
            P({
              screen: !1,
              connector: !1,
              battery: !1,
              wifi: !1,
              speaker: !1,
              camera: !1,
              faceId: !1,
              unlocked: !1,
              ...(v.checklist || {}),
            }),
            w({
              client: v.client_signature || "",
              store: v.store_signature || "",
            }),
            setTimeout(() => {
              if (!d)
                try {
                  v.client_signature &&
                    a.current?.fromDataURL(v.client_signature),
                    v.store_signature &&
                      n.current?.fromDataURL(v.store_signature);
                } catch {}
            }, 350);
        } catch (v) {
          F.error("Erro ao carregar contrato: " + v.message);
        } finally {
          d || W(!1);
        }
      })(),
      () => {
        d = !0;
      }
    );
  }, [c, m]);
  const g = (d) => {
      P((C) => ({ ...C, [d]: !C[d] }));
    },
    x = (d) => {
      const C = d.replace(/\./g, "").replace(",", ".");
      return parseFloat(C) || 0;
    },
    _ = async () => {
      if (!y) return;
      if (!h.client_name || !h.client_cpf_cnpj || !h.device_imei) {
        F.error("Preencha todos os campos obrigatórios!");
        return;
      }
      const d = a.current?.isEmpty() ?? !0,
        C = n.current?.isEmpty() ?? !0,
        v = d ? l.client : a.current?.toDataURL() || "",
        O = C ? l.store : n.current?.toDataURL() || "";
      if (!v || !O) {
        F.error("As assinaturas são obrigatórias!");
        return;
      }
      i(!0);
      try {
        const j = x(h.purchase_value),
          $ = {
            client_name: h.client_name,
            client_cpf_cnpj: h.client_cpf_cnpj,
            client_address: h.client_address,
            client_phone: h.client_phone,
            device_imei: h.device_imei,
            device_brand_model: h.device_brand_model,
            purchase_date: h.purchase_date,
            purchase_value: j,
            client_signature: v,
            store_signature: O,
            checklist: M,
            additional_notes: h.additional_notes,
          };
        if (r) {
          const { error: U } = await D.from("purchase_contracts")
            .update($)
            .eq("id", m);
          if (U) throw U;
          F.success("Termo de compra atualizado com sucesso!");
        } else {
          const { error: U } = await D.from("purchase_contracts").insert({
            user_id: y.id,
            ...$,
            status: "created",
          });
          if (U) throw U;
          F.success(
            "Contrato criado! Confirme o contrato para gerar a despesa no financeiro."
          );
        }
        s(), V(!1), E();
      } catch (j) {
        F.error("Erro ao salvar contrato: " + j.message);
      } finally {
        i(!1);
      }
    },
    E = () => {
      S({
        client_name: "",
        client_cpf_cnpj: "",
        client_address: "",
        client_phone: "",
        device_imei: "",
        device_brand_model: "",
        purchase_date: re(),
        purchase_value: "",
        additional_notes: "",
      }),
        P({
          screen: !1,
          connector: !1,
          battery: !1,
          wifi: !1,
          speaker: !1,
          camera: !1,
          faceId: !1,
          unlocked: !1,
        }),
        a.current?.clear(),
        n.current?.clear();
    };
  return e.jsx(xe, {
    open: c,
    onOpenChange: V,
    children: e.jsxs(ue, {
      className: "max-w-4xl max-h-[90vh]",
      children: [
        e.jsx(fe, {
          children: e.jsx(Ne, {
            children: r
              ? "Editar Termo de Compra de Usado"
              : "Criar Termo de Compra de Usado",
          }),
        }),
        e.jsx(Ce, {
          className: "h-[calc(90vh-120px)] pr-4",
          children: e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    children: e.jsx(R, {
                      className: "text-lg",
                      children: "Dados do Vendedor",
                    }),
                  }),
                  e.jsx(A, {
                    className: "space-y-4",
                    children: e.jsxs("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, {
                              htmlFor: "client_name",
                              children: "Nome Completo *",
                            }),
                            e.jsx(q, {
                              id: "client_name",
                              value: h.client_name,
                              onChange: (d) =>
                                S({ ...h, client_name: d.target.value }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, {
                              htmlFor: "client_cpf_cnpj",
                              children: "CPF/CNPJ *",
                            }),
                            e.jsx(q, {
                              id: "client_cpf_cnpj",
                              value: h.client_cpf_cnpj,
                              onChange: (d) =>
                                S({ ...h, client_cpf_cnpj: d.target.value }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, {
                              htmlFor: "client_phone",
                              children: "Telefone",
                            }),
                            e.jsx(q, {
                              id: "client_phone",
                              value: h.client_phone,
                              onChange: (d) =>
                                S({ ...h, client_phone: d.target.value }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, {
                              htmlFor: "client_address",
                              children: "Endereço Completo",
                            }),
                            e.jsx(q, {
                              id: "client_address",
                              value: h.client_address,
                              onChange: (d) =>
                                S({ ...h, client_address: d.target.value }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    children: e.jsx(R, {
                      className: "text-lg",
                      children: "Dados do Aparelho",
                    }),
                  }),
                  e.jsx(A, {
                    className: "space-y-4",
                    children: e.jsxs("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, {
                              htmlFor: "device_brand_model",
                              children: "Marca e Modelo *",
                            }),
                            e.jsx(q, {
                              id: "device_brand_model",
                              value: h.device_brand_model,
                              onChange: (d) =>
                                S({ ...h, device_brand_model: d.target.value }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, {
                              htmlFor: "device_imei",
                              children: "IMEI *",
                            }),
                            e.jsx(q, {
                              id: "device_imei",
                              value: h.device_imei,
                              onChange: (d) =>
                                S({ ...h, device_imei: d.target.value }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, {
                              htmlFor: "purchase_date",
                              children: "Data da Compra",
                            }),
                            e.jsx(q, {
                              id: "purchase_date",
                              type: "date",
                              value: h.purchase_date,
                              onChange: (d) =>
                                S({ ...h, purchase_date: d.target.value }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, {
                              htmlFor: "purchase_value",
                              children: "Valor Pago (R$)",
                            }),
                            e.jsx(q, {
                              id: "purchase_value",
                              placeholder: "0,00",
                              value: h.purchase_value,
                              onChange: (d) => {
                                const C = d.target.value.replace(/[^\d,]/g, "");
                                S({ ...h, purchase_value: C });
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    children: e.jsx(R, {
                      className: "text-lg",
                      children: "Checklist do Aparelho",
                    }),
                  }),
                  e.jsx(A, {
                    children: e.jsx("div", {
                      className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                      children: Object.entries({
                        screen: "Tela",
                        connector: "Conector",
                        battery: "Bateria",
                        wifi: "Wi-Fi",
                        speaker: "Alto Falante",
                        camera: "Câmeras",
                        faceId: "Face ID",
                        unlocked: "Desbloqueado",
                      }).map(([d, C]) =>
                        e.jsxs(
                          "div",
                          {
                            className: "flex items-center space-x-2",
                            children: [
                              e.jsx(Me, {
                                id: d,
                                checked: M[d],
                                onCheckedChange: () => g(d),
                              }),
                              e.jsx(N, {
                                htmlFor: d,
                                className: "cursor-pointer text-sm",
                                children: C,
                              }),
                            ],
                          },
                          d
                        )
                      ),
                    }),
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    children: e.jsx(R, {
                      className: "text-lg",
                      children: "Observações Adicionais",
                    }),
                  }),
                  e.jsx(A, {
                    children: e.jsx(je, {
                      placeholder: "Digite observações adicionais...",
                      value: h.additional_notes,
                      onChange: (d) =>
                        S({ ...h, additional_notes: d.target.value }),
                      rows: 3,
                    }),
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    children: e.jsx(R, {
                      className: "text-lg",
                      children: "Assinaturas",
                    }),
                  }),
                  e.jsxs(A, {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx(N, { children: "Assinatura do Cliente *" }),
                          e.jsx("div", {
                            className: "border rounded-md mt-2",
                            children: e.jsx(pe, {
                              ref: a,
                              canvasProps: { className: "w-full h-32" },
                            }),
                          }),
                          e.jsx(b, {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            onClick: () => a.current?.clear(),
                            className: "mt-1",
                            children: "Limpar",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(N, { children: "Assinatura da Loja *" }),
                          e.jsx("div", {
                            className: "border rounded-md mt-2",
                            children: e.jsx(pe, {
                              ref: n,
                              canvasProps: { className: "w-full h-32" },
                            }),
                          }),
                          e.jsx(b, {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            onClick: () => n.current?.clear(),
                            className: "mt-1",
                            children: "Limpar",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(T, {
                className: "bg-muted",
                children: [
                  e.jsx(I, {
                    children: e.jsx(R, {
                      className: "text-lg",
                      children: "Cláusulas do Contrato",
                    }),
                  }),
                  e.jsxs(A, {
                    className: "space-y-3 text-sm",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "font-semibold",
                            children: "1. Declaração de Propriedade",
                          }),
                          e.jsx("p", {
                            children:
                              "O vendedor declara, sob responsabilidade civil e criminal, que o aparelho é de sua propriedade legítima, não havendo qualquer impedimento legal para sua venda, e que o produto não é fruto de furto, roubo ou qualquer outra atividade ilícita.",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "font-semibold",
                            children: "2. Transferência de Responsabilidade",
                          }),
                          e.jsx("p", {
                            children:
                              "Após o pagamento e assinatura do contrato: a propriedade do aparelho é transferida à empresa; o vendedor perde qualquer direito sobre o aparelho; a empresa não fica obrigada a devolver o celular ou valores pagos.",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "font-semibold",
                            children: "3. Conformidade com a LGPD",
                          }),
                          e.jsx("p", {
                            children:
                              "Ambas as partes concordam que os dados pessoais fornecidos serão usados exclusivamente para: registro da compra, comprovação de propriedade, cumprimento de obrigações legais. E serão armazenados de maneira segura conforme a LGPD.",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "font-semibold",
                            children: "4. Assinatura e Concordância",
                          }),
                          e.jsx("p", {
                            children:
                              "Ao assinar o contrato, o vendedor declara que: leu e compreendeu todas as cláusulas, concorda integralmente, entende que qualquer irregularidade é de sua responsabilidade exclusiva. A assinatura confirma o aceite total dos termos.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsxs("div", {
          className: "flex justify-end gap-2 pt-4 border-t",
          children: [
            e.jsx(b, {
              variant: "outline",
              onClick: () => V(!1),
              children: "Cancelar",
            }),
            e.jsx(b, {
              onClick: _,
              disabled: L || k,
              children: L
                ? "Salvando..."
                : k
                ? "Carregando..."
                : r
                ? "Salvar Alterações"
                : "Criar Contrato",
            }),
          ],
        }),
      ],
    }),
  });
}
function ss({ open: c, onOpenChange: V, contractId: s, onUpdate: m }) {
  const { user: y } = _e(),
    { format: a } = ke(),
    [n, h] = p.useState(null),
    [S, M] = p.useState(!0),
    [P, L] = p.useState(!1);
  p.useEffect(() => {
    c && s && i();
  }, [c, s]);
  const i = async () => {
      try {
        const { data: r, error: g } = await D.from("purchase_contracts")
          .select("*")
          .eq("id", s)
          .single();
        if (g) throw g;
        h(r);
      } catch (r) {
        F.error("Erro ao carregar contrato: " + r.message);
      } finally {
        M(!1);
      }
    },
    k = async (r) => {
      if (!r.target.files || !n || !y) return;
      const g = Array.from(r.target.files);
      if (g.length + (n.photos?.length || 0) > 2) {
        F.error("Máximo de 2 arquivos permitidos!");
        return;
      }
      L(!0);
      try {
        const x = [];
        for (const d of g) {
          const C = d.name.split(".").pop(),
            v = `${y.id}/${s}/${Date.now()}.${C}`,
            { error: O } = await D.storage
              .from("purchase-contracts")
              .upload(v, d);
          if (O) throw O;
          x.push(v);
        }
        const _ = [...(n.photos || []), ...x],
          { error: E } = await D.from("purchase_contracts")
            .update({ photos: _ })
            .eq("id", s);
        if (E) throw E;
        F.success("Arquivos enviados com sucesso!"), i(), m();
      } catch (x) {
        F.error("Erro ao enviar arquivos: " + x.message);
      } finally {
        L(!1);
      }
    },
    W = async (r) => {
      if (n)
        try {
          const { error: g } = await D.storage
            .from("purchase-contracts")
            .remove([r]);
          if (g) throw g;
          const x = n.photos.filter((E) => E !== r),
            { error: _ } = await D.from("purchase_contracts")
              .update({ photos: x })
              .eq("id", s);
          if (_) throw _;
          F.success("Arquivo removido com sucesso!"), i(), m();
        } catch (g) {
          F.error("Erro ao remover arquivo: " + g.message);
        }
    },
    l = (r) => {
      const { data: g } = D.storage.from("purchase-contracts").getPublicUrl(r);
      return g.publicUrl;
    },
    w = (r) => qe(r);
  return S
    ? e.jsx(xe, {
        open: c,
        onOpenChange: V,
        children: e.jsx(ue, {
          children: e.jsx("div", {
            className: "text-center py-8",
            children: "Carregando...",
          }),
        }),
      })
    : n
    ? e.jsx(xe, {
        open: c,
        onOpenChange: V,
        children: e.jsxs(ue, {
          className: "max-w-4xl max-h-[90vh]",
          children: [
            e.jsx(fe, {
              children: e.jsx(Ne, { children: "Visualizar Contrato" }),
            }),
            e.jsx(Ce, {
              className: "h-[calc(90vh-120px)] pr-4",
              children: e.jsxs("div", {
                className: "space-y-6",
                children: [
                  e.jsxs(T, {
                    children: [
                      e.jsx(I, {
                        children: e.jsx(R, {
                          className: "text-lg",
                          children: "Dados do Cliente",
                        }),
                      }),
                      e.jsxs(A, {
                        className: "space-y-2 text-sm",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx(N, {
                                className: "text-muted-foreground",
                                children: "Nome:",
                              }),
                              e.jsx("p", {
                                className: "font-medium",
                                children: n.client_name,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx(N, {
                                    className: "text-muted-foreground",
                                    children: "CPF/CNPJ:",
                                  }),
                                  e.jsx("p", {
                                    className: "font-medium",
                                    children: n.client_cpf_cnpj,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx(N, {
                                    className: "text-muted-foreground",
                                    children: "Telefone:",
                                  }),
                                  e.jsx("p", {
                                    className: "font-medium",
                                    children: n.client_phone || "N/A",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx(N, {
                                className: "text-muted-foreground",
                                children: "Endereço:",
                              }),
                              e.jsx("p", {
                                className: "font-medium",
                                children: n.client_address || "N/A",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(T, {
                    children: [
                      e.jsx(I, {
                        children: e.jsx(R, {
                          className: "text-lg",
                          children: "Dados do Aparelho",
                        }),
                      }),
                      e.jsx(A, {
                        className: "space-y-2 text-sm",
                        children: e.jsxs("div", {
                          className: "grid grid-cols-2 gap-4",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsx(N, {
                                  className: "text-muted-foreground",
                                  children: "Marca/Modelo:",
                                }),
                                e.jsx("p", {
                                  className: "font-medium",
                                  children: n.device_brand_model,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx(N, {
                                  className: "text-muted-foreground",
                                  children: "IMEI:",
                                }),
                                e.jsx("p", {
                                  className: "font-medium",
                                  children: n.device_imei,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx(N, {
                                  className: "text-muted-foreground",
                                  children: "Data da Compra:",
                                }),
                                e.jsx("p", {
                                  className: "font-medium",
                                  children: w(n.purchase_date),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx(N, {
                                  className: "text-muted-foreground",
                                  children: "Valor Pago:",
                                }),
                                e.jsx("p", {
                                  className: "font-medium",
                                  children: a(n.purchase_value),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs(T, {
                    children: [
                      e.jsx(I, {
                        children: e.jsx(R, {
                          className: "text-lg",
                          children: "Checklist do Aparelho",
                        }),
                      }),
                      e.jsx(A, {
                        children: e.jsx("div", {
                          className: "grid grid-cols-2 md:grid-cols-4 gap-2",
                          children: Object.entries(n.checklist || {}).map(
                            ([r, g]) => {
                              const x = {
                                screen: "Tela",
                                connector: "Conector",
                                battery: "Bateria",
                                wifi: "Wi-Fi",
                                speaker: "Alto Falante",
                                camera: "Câmeras",
                                faceId: "Face ID",
                                unlocked: "Desbloqueado",
                              };
                              return e.jsxs(
                                "div",
                                {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(he, {
                                      variant: g ? "default" : "secondary",
                                      children: g ? "✓" : "✗",
                                    }),
                                    e.jsx("span", {
                                      className: "text-sm",
                                      children: x[r] || r,
                                    }),
                                  ],
                                },
                                r
                              );
                            }
                          ),
                        }),
                      }),
                    ],
                  }),
                  n.additional_notes &&
                    e.jsxs(T, {
                      children: [
                        e.jsx(I, {
                          children: e.jsx(R, {
                            className: "text-lg",
                            children: "Observações",
                          }),
                        }),
                        e.jsx(A, {
                          children: e.jsx("p", {
                            className: "text-sm",
                            children: n.additional_notes,
                          }),
                        }),
                      ],
                    }),
                  e.jsxs(T, {
                    children: [
                      e.jsx(I, {
                        children: e.jsx(R, {
                          className: "text-lg",
                          children: "Assinaturas",
                        }),
                      }),
                      e.jsxs(A, {
                        className: "space-y-4",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx(N, { children: "Assinatura do Cliente" }),
                              n.client_signature &&
                                e.jsx("img", {
                                  src: n.client_signature,
                                  alt: "Assinatura Cliente",
                                  className:
                                    "border rounded mt-2 w-full max-w-md",
                                }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx(N, { children: "Assinatura da Loja" }),
                              n.store_signature &&
                                e.jsx("img", {
                                  src: n.store_signature,
                                  alt: "Assinatura Loja",
                                  className:
                                    "border rounded mt-2 w-full max-w-md",
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(T, {
                    children: [
                      e.jsx(I, {
                        children: e.jsx(R, {
                          className: "text-lg",
                          children: "Fotos/Vídeos Anexados",
                        }),
                      }),
                      e.jsxs(A, {
                        className: "space-y-4",
                        children: [
                          n.photos && n.photos.length > 0
                            ? e.jsx("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: n.photos.map((r, g) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className: "relative",
                                      children: [
                                        e.jsx("img", {
                                          src: l(r),
                                          alt: `Foto ${g + 1}`,
                                          className: "w-full rounded border",
                                        }),
                                        e.jsx(b, {
                                          variant: "destructive",
                                          size: "icon",
                                          className: "absolute top-2 right-2",
                                          onClick: () => W(r),
                                          children: e.jsx(Ue, {
                                            className: "h-4 w-4",
                                          }),
                                        }),
                                      ],
                                    },
                                    g
                                  )
                                ),
                              })
                            : e.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Nenhuma foto anexada ainda.",
                              }),
                          (!n.photos || n.photos.length < 2) &&
                            e.jsxs("div", {
                              children: [
                                e.jsx(N, {
                                  htmlFor: "file-upload",
                                  className: "cursor-pointer",
                                  children: e.jsxs("div", {
                                    className:
                                      "border-2 border-dashed rounded-lg p-6 text-center hover:bg-muted/50 transition-colors",
                                    children: [
                                      e.jsx(We, {
                                        className:
                                          "h-8 w-8 mx-auto mb-2 text-muted-foreground",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children:
                                          "Clique para adicionar fotos/vídeos",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground mt-1",
                                        children: "Máximo de 2 arquivos",
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsx("input", {
                                  id: "file-upload",
                                  type: "file",
                                  className: "hidden",
                                  accept: "image/*,video/*",
                                  multiple: !0,
                                  onChange: k,
                                  disabled: P,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "flex justify-end pt-4 border-t",
              children: e.jsx(b, { onClick: () => V(!1), children: "Fechar" }),
            }),
          ],
        }),
      })
    : null;
}
const Oe = async (c, V) => {
    const s = new Ie(),
      m = s.internal.pageSize.width,
      y = s.internal.pageSize.height,
      a = 12,
      n = m - 2 * a;
    let h = "TECH OS PRO",
      S = "",
      M = "",
      P = "",
      L = null,
      i = "BRL";
    if (V) {
      const { data: z } = await D.from("user_settings")
        .select("*")
        .eq("user_id", V)
        .single();
      z &&
        ((h = z.company_name || h),
        (S = z.company_cnpj || ""),
        (M = z.company_address || ""),
        (P = z.company_phone || ""),
        (L = z.company_logo || null),
        (i = z.selected_currency || "BRL"),
        z.company_document_type);
    }
    const k = i === "EUR",
      W = k ? "NIF" : "CPF",
      l = k ? "NIF" : "CNPJ",
      w = k ? "pt-PT" : "pt-BR";
    let r = a;
    if ((s.setDrawColor(0), s.setLineWidth(0.5), s.rect(a, r, n, 22), L))
      try {
        s.addImage(L, "PNG", a + 3, r + 2, 18, 18);
      } catch {}
    if (
      (s.setFontSize(14),
      s.setFont("helvetica", "bold"),
      s.text(h.toUpperCase(), m / 2, r + 8, { align: "center" }),
      s.setFontSize(11),
      s.setFont("helvetica", "bold"),
      s.text("TERMO DE VENDA E GARANTIA", m / 2, r + 15, { align: "center" }),
      S || P)
    ) {
      s.setFontSize(7), s.setFont("helvetica", "normal");
      const z = m - a - 3;
      S && s.text(`${l}: ${S}`, z, r + 7, { align: "right" }),
        P && s.text(`Tel: ${P}`, z, r + 11, { align: "right" });
    }
    r += 26;
    const g = 6,
      x = 7;
    s.setFillColor(50, 50, 50),
      s.rect(a, r, n, g, "F"),
      s.setTextColor(255, 255, 255),
      s.setFontSize(9),
      s.setFont("helvetica", "bold"),
      s.text("DADOS DO CLIENTE", a + 3, r + 4.5),
      s.setTextColor(0, 0, 0),
      (r += g),
      s.setFontSize(8),
      s.setLineWidth(0.3);
    const _ = n * 0.6,
      E = n * 0.4;
    s.rect(a, r, _, x),
      s.rect(a + _, r, E, x),
      s.setFont("helvetica", "bold"),
      s.text("Nome:", a + 2, r + 5),
      s.setFont("helvetica", "normal"),
      s.text(c.client_name || "", a + 18, r + 5),
      s.setFont("helvetica", "bold"),
      s.text(`${W}:`, a + _ + 2, r + 5),
      s.setFont("helvetica", "normal"),
      s.text(c.client_cpf || "", a + _ + 14, r + 5),
      (r += x),
      s.rect(a, r, _, x),
      s.rect(a + _, r, E, x),
      s.setFont("helvetica", "bold"),
      s.text("Telefone:", a + 2, r + 5),
      s.setFont("helvetica", "normal"),
      s.text(c.client_phone || "", a + 22, r + 5),
      s.setFont("helvetica", "bold"),
      s.text("Data:", a + _ + 2, r + 5),
      s.setFont("helvetica", "normal");
    const d = c.sale_date.includes("T")
      ? new Date(c.sale_date)
      : new Date(c.sale_date + "T12:00:00");
    s.text(d.toLocaleDateString(w), a + _ + 16, r + 5),
      (r += x),
      s.rect(a, r, n, x),
      s.setFont("helvetica", "bold"),
      s.text(k ? "Morada:" : "Endereco:", a + 2, r + 5),
      s.setFont("helvetica", "normal");
    const C = s.splitTextToSize(c.client_address || "", n - 28);
    if (
      (s.text(C[0] || "", a + 24, r + 5),
      (r += x + 4),
      s.setFillColor(50, 50, 50),
      s.rect(a, r, n, g, "F"),
      s.setTextColor(255, 255, 255),
      s.setFontSize(9),
      s.setFont("helvetica", "bold"),
      s.text("DADOS DO APARELHO", a + 3, r + 4.5),
      s.setTextColor(0, 0, 0),
      (r += g),
      s.setFontSize(8),
      s.rect(a, r, _, x),
      s.rect(a + _, r, E, x),
      s.setFont("helvetica", "bold"),
      s.text("Modelo:", a + 2, r + 5),
      s.setFont("helvetica", "normal"),
      s.text(c.device_brand_model || "", a + 20, r + 5),
      s.setFont("helvetica", "bold"),
      s.text("Cor:", a + _ + 2, r + 5),
      s.setFont("helvetica", "normal"),
      s.text(c.device_color || "", a + _ + 12, r + 5),
      (r += x),
      s.rect(a, r, _, x),
      s.rect(a + _, r, E, x),
      s.setFont("helvetica", "bold"),
      s.text("Armazenamento:", a + 2, r + 5),
      s.setFont("helvetica", "normal"),
      s.text(c.device_storage || "", a + 34, r + 5),
      s.setFont("helvetica", "bold"),
      s.text("Valor:", a + _ + 2, r + 5),
      s.setFont("helvetica", "normal"),
      s.text(Re(c.sale_value, i), a + _ + 16, r + 5),
      (r += x),
      s.rect(a, r, n, x),
      s.setFont("helvetica", "bold"),
      s.text("IMEI:", a + 2, r + 5),
      s.setFont("helvetica", "normal"),
      s.text(c.device_imei || "", a + 16, r + 5),
      (r += x),
      c.observations)
    ) {
      s.rect(a, r, n, x),
        s.setFont("helvetica", "bold"),
        s.text("Obs:", a + 2, r + 5),
        s.setFont("helvetica", "normal");
      const z = s.splitTextToSize(c.observations, n - 18);
      s.text(z[0] || "", a + 14, r + 5), (r += x);
    }
    (r += 4),
      s.setFillColor(50, 50, 50),
      s.rect(a, r, n, g, "F"),
      s.setTextColor(255, 255, 255),
      s.setFontSize(9),
      s.setFont("helvetica", "bold"),
      s.text("TERMOS DE GARANTIA", a + 3, r + 4.5),
      s.setTextColor(0, 0, 0),
      (r += g + 2),
      s.setFontSize(7),
      s.setFont("helvetica", "normal");
    const j = s.splitTextToSize(c.warranty_text, n - 4).slice(0, 4);
    s.text(j, a + 2, r + 3),
      (r += j.length * 3 + 4),
      s.setFillColor(50, 50, 50),
      s.rect(a, r, n, g, "F"),
      s.setTextColor(255, 255, 255),
      s.setFontSize(9),
      s.setFont("helvetica", "bold"),
      s.text("CONDICOES DE VENDA", a + 3, r + 4.5),
      s.setTextColor(0, 0, 0),
      (r += g + 2),
      s.setFontSize(7),
      s.setFont("helvetica", "normal");
    const ee = s.splitTextToSize(c.conditions_text, n - 4).slice(0, 3);
    s.text(ee, a + 2, r + 3), (r += ee.length * 3 + 6);
    const H = (n - 20) / 2,
      K = 20,
      ae = r,
      o = y - 35,
      B = Math.min(ae, o);
    s.setFillColor(50, 50, 50),
      s.rect(a, B, n, g, "F"),
      s.setTextColor(255, 255, 255),
      s.setFontSize(9),
      s.setFont("helvetica", "bold"),
      s.text("ASSINATURAS", a + 3, B + 4.5),
      s.setTextColor(0, 0, 0);
    const u = B + g + 3,
      Y = a + 10;
    if (
      (s.setDrawColor(0, 0, 0),
      s.setLineWidth(0.4),
      s.line(Y, u + K, Y + H, u + K),
      c.client_signature && c.client_signature.length > 100)
    )
      try {
        s.addImage(c.client_signature, "PNG", Y + 5, u, H - 10, K - 2);
      } catch {}
    s.setFontSize(8),
      s.setFont("helvetica", "bold"),
      s.text("Assinatura do Cliente", Y + H / 2, u + K + 5, {
        align: "center",
      });
    const Q = a + n - H - 10;
    if (
      (s.line(Q, u + K, Q + H, u + K),
      c.store_signature && c.store_signature.length > 100)
    )
      try {
        s.addImage(c.store_signature, "PNG", Q + 5, u, H - 10, K - 2);
      } catch {}
    s.text("Assinatura do Vendedor", Q + H / 2, u + K + 5, { align: "center" });
    const se = y - 12;
    s.setDrawColor(50, 50, 50),
      s.setLineWidth(0.5),
      s.line(a, se - 3, m - a, se - 3),
      s.setFontSize(8),
      s.setFont("helvetica", "bold"),
      s.setTextColor(50, 50, 50),
      s.text(h.toUpperCase(), m / 2, se, { align: "center" }),
      M &&
        (s.setFontSize(6),
        s.setFont("helvetica", "normal"),
        s.text(M, m / 2, se + 4, { align: "center" })),
      s.setFontSize(6),
      s.setTextColor(120, 120, 120),
      s.text("Documento gerado eletronicamente", m / 2, se + 8, {
        align: "center",
      }),
      s.save(
        `Termo_Venda_${c.client_name.replace(
          /\s+/g,
          "_"
        )}_${new Date().getTime()}.pdf`
      );
  },
  ge =
    "A garantia cobre exclusivamente defeitos de fabricacao. Nao cobre danos causados por mau uso, quedas, oxidacao, contato com liquidos, intervencoes tecnicas de terceiros ou violacao de lacres.",
  ve =
    "O cliente declara estar ciente das condicoes do aparelho adquirido, incluindo estado fisico, funcionalidade, procedencia e caracteristicas tecnicas.";
function as({ open: c, onOpenChange: V, onSuccess: s, editId: m }) {
  const { user: y } = _e(),
    a = p.useRef(null),
    n = p.useRef(null),
    [h, S] = p.useState([]),
    [M, P] = p.useState(""),
    [L, i] = p.useState("select"),
    [k, W] = p.useState("BRL"),
    [l, w] = p.useState({
      client_name: "",
      client_cpf: "",
      client_phone: "",
      client_address: "",
      device_brand_model: "",
      device_color: "",
      device_storage: "",
      device_imei: "",
      sale_date: re(),
      sale_value: "",
      observations: "",
      warranty_text: ge,
      conditions_text: ve,
    }),
    [r, g] = p.useState(!1),
    [x, _] = p.useState(!1),
    [E, d] = p.useState({ client: "", store: "" }),
    C = !!m,
    v = k === "EUR",
    O = v ? "NIF" : "CPF",
    j = v ? "Morada" : "Endereço";
  p.useEffect(() => {
    c && y && (U(), $());
  }, [c, y]),
    p.useEffect(() => {
      if (!c) return;
      if (!m) {
        ae(), d({ client: "", store: "" });
        return;
      }
      let o = !1;
      return (
        (async () => {
          _(!0);
          try {
            const { data: u, error: Y } = await D.from("sale_contracts")
              .select("*")
              .eq("id", m)
              .single();
            if (Y) throw Y;
            if (o || !u) return;
            w({
              client_name: u.client_name || "",
              client_cpf: u.client_cpf || "",
              client_phone: u.client_phone || "",
              client_address: u.client_address || "",
              device_brand_model: u.device_brand_model || "",
              device_color: u.device_color || "",
              device_storage: u.device_storage || "",
              device_imei: u.device_imei || "",
              sale_date: u.sale_date || re(),
              sale_value: String(u.sale_value ?? "").replace(".", ","),
              observations: u.observations || "",
              warranty_text: u.warranty_text || ge,
              conditions_text: u.conditions_text || ve,
            }),
              P(u.client_id || ""),
              i(u.client_id ? "select" : "new"),
              d({
                client: u.client_signature || "",
                store: u.store_signature || "",
              }),
              setTimeout(() => {
                if (!o)
                  try {
                    u.client_signature &&
                      a.current?.fromDataURL(u.client_signature),
                      u.store_signature &&
                        n.current?.fromDataURL(u.store_signature);
                  } catch {}
              }, 350);
          } catch (u) {
            F.error("Erro ao carregar termo: " + u.message);
          } finally {
            o || _(!1);
          }
        })(),
        () => {
          o = !0;
        }
      );
    }, [c, m]);
  const $ = async () => {
      if (!y) return;
      const { data: o } = await D.from("user_settings")
        .select("selected_currency")
        .eq("user_id", y.id)
        .single();
      o?.selected_currency && W(o.selected_currency);
    },
    U = async () => {
      if (!y) return;
      const { data: o } = await D.from("clients")
        .select("id, name, cpf, phone, address")
        .eq("user_id", y.id)
        .order("name");
      o && S(o);
    },
    ee = (o) => {
      P(o);
      const B = h.find((u) => u.id === o);
      B &&
        w((u) => ({
          ...u,
          client_name: B.name,
          client_cpf: B.cpf || "",
          client_phone: B.phone || "",
          client_address: B.address || "",
        }));
    },
    H = (o) => {
      const B = o.replace(/\./g, "").replace(",", ".");
      return parseFloat(B) || 0;
    },
    K = async () => {
      if (!y) return;
      if (L === "select" && !M) {
        F.error("Selecione um cliente!");
        return;
      }
      if (L === "new" && !l.client_name) {
        F.error("Preencha o nome do cliente!");
        return;
      }
      if (!l.device_brand_model || !l.device_imei) {
        F.error("Preencha os campos obrigatórios do aparelho!");
        return;
      }
      const o = a.current?.isEmpty() ?? !0,
        B = n.current?.isEmpty() ?? !0,
        u = o ? E.client : a.current?.toDataURL() || "",
        Y = B ? E.store : n.current?.toDataURL() || "";
      g(!0);
      try {
        const Q = H(l.sale_value),
          se = {
            client_id: M || null,
            client_name: l.client_name,
            client_cpf: l.client_cpf,
            client_phone: l.client_phone,
            client_address: l.client_address,
            device_brand_model: l.device_brand_model,
            device_color: l.device_color,
            device_storage: l.device_storage,
            device_imei: l.device_imei,
            sale_date: l.sale_date,
            sale_value: Q,
            observations: l.observations,
            warranty_text: l.warranty_text,
            conditions_text: l.conditions_text,
            client_signature: u,
            store_signature: Y,
          };
        let z = m || "";
        if (C) {
          const { error: te } = await D.from("sale_contracts")
            .update(se)
            .eq("id", m);
          if (te) throw te;
        } else {
          const { data: te, error: ie } = await D.from("sale_contracts")
            .insert({ user_id: y.id, ...se })
            .select()
            .single();
          if (ie) throw ie;
          z = te.id;
        }
        const le = {
          id: z,
          client_name: l.client_name,
          client_cpf: l.client_cpf,
          client_phone: l.client_phone,
          client_address: l.client_address,
          device_brand_model: l.device_brand_model,
          device_color: l.device_color,
          device_storage: l.device_storage,
          device_imei: l.device_imei,
          sale_date: l.sale_date,
          sale_value: Q,
          observations: l.observations,
          warranty_text: l.warranty_text,
          conditions_text: l.conditions_text,
          client_signature: u,
          store_signature: Y,
        };
        await Oe(le, y.id),
          F.success(
            C
              ? "Termo de Venda atualizado com sucesso!"
              : "Termo de Venda gerado com sucesso!"
          ),
          s(),
          V(!1),
          ae();
      } catch (Q) {
        F.error("Erro ao salvar termo: " + Q.message);
      } finally {
        g(!1);
      }
    },
    ae = () => {
      w({
        client_name: "",
        client_cpf: "",
        client_phone: "",
        client_address: "",
        device_brand_model: "",
        device_color: "",
        device_storage: "",
        device_imei: "",
        sale_date: re(),
        sale_value: "",
        observations: "",
        warranty_text: ge,
        conditions_text: ve,
      }),
        P(""),
        i("select"),
        a.current?.clear(),
        n.current?.clear();
    };
  return e.jsx(xe, {
    open: c,
    onOpenChange: V,
    children: e.jsxs(ue, {
      className: "max-w-4xl max-h-[90vh]",
      children: [
        e.jsx(fe, {
          children: e.jsx(Ne, {
            children: C
              ? "Editar Termo de Venda e Garantia"
              : "Criar Termo de Venda e Garantia",
          }),
        }),
        e.jsx(Ce, {
          className: "h-[calc(90vh-120px)] pr-4",
          children: e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    className: "pb-3",
                    children: e.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        e.jsx(R, {
                          className: "text-lg",
                          children: "Dados do Cliente",
                        }),
                        e.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            e.jsxs(b, {
                              type: "button",
                              variant: L === "select" ? "default" : "outline",
                              size: "sm",
                              onClick: () => i("select"),
                              children: [
                                e.jsx(Be, { className: "h-4 w-4 mr-1" }),
                                "Selecionar",
                              ],
                            }),
                            e.jsxs(b, {
                              type: "button",
                              variant: L === "new" ? "default" : "outline",
                              size: "sm",
                              onClick: () => {
                                i("new"),
                                  P(""),
                                  w((o) => ({
                                    ...o,
                                    client_name: "",
                                    client_cpf: "",
                                    client_phone: "",
                                    client_address: "",
                                  }));
                              },
                              children: [
                                e.jsx($e, { className: "h-4 w-4 mr-1" }),
                                "Novo",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsx(A, {
                    className: "space-y-4",
                    children:
                      L === "select"
                        ? e.jsxs("div", {
                            children: [
                              e.jsx(N, {
                                children: "Selecionar Cliente Cadastrado *",
                              }),
                              e.jsxs(Ge, {
                                value: M,
                                onValueChange: ee,
                                children: [
                                  e.jsx(He, {
                                    children: e.jsx(Ye, {
                                      placeholder: "Escolha um cliente...",
                                    }),
                                  }),
                                  e.jsx(Je, {
                                    children: h.map((o) =>
                                      e.jsxs(
                                        Xe,
                                        {
                                          value: o.id,
                                          children: [
                                            o.name,
                                            " ",
                                            o.cpf ? `- ${o.cpf}` : "",
                                          ],
                                        },
                                        o.id
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              M &&
                                e.jsxs("div", {
                                  className:
                                    "mt-3 p-3 bg-muted rounded-md text-sm space-y-1",
                                  children: [
                                    e.jsxs("p", {
                                      children: [
                                        e.jsx("strong", { children: "Nome:" }),
                                        " ",
                                        l.client_name,
                                      ],
                                    }),
                                    l.client_cpf &&
                                      e.jsxs("p", {
                                        children: [
                                          e.jsxs("strong", {
                                            children: [O, ":"],
                                          }),
                                          " ",
                                          l.client_cpf,
                                        ],
                                      }),
                                    l.client_phone &&
                                      e.jsxs("p", {
                                        children: [
                                          e.jsx("strong", {
                                            children: "Telefone:",
                                          }),
                                          " ",
                                          l.client_phone,
                                        ],
                                      }),
                                    l.client_address &&
                                      e.jsxs("p", {
                                        children: [
                                          e.jsxs("strong", {
                                            children: [j, ":"],
                                          }),
                                          " ",
                                          l.client_address,
                                        ],
                                      }),
                                  ],
                                }),
                            ],
                          })
                        : e.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx(N, {
                                    htmlFor: "client_name",
                                    children: "Nome Completo *",
                                  }),
                                  e.jsx(q, {
                                    id: "client_name",
                                    value: l.client_name,
                                    onChange: (o) =>
                                      w({ ...l, client_name: o.target.value }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx(N, {
                                    htmlFor: "client_cpf",
                                    children: O,
                                  }),
                                  e.jsx(q, {
                                    id: "client_cpf",
                                    placeholder: v
                                      ? "123456789"
                                      : "000.000.000-00",
                                    value: l.client_cpf,
                                    onChange: (o) =>
                                      w({ ...l, client_cpf: o.target.value }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx(N, {
                                    htmlFor: "client_phone",
                                    children: "Telefone",
                                  }),
                                  e.jsx(q, {
                                    id: "client_phone",
                                    value: l.client_phone,
                                    onChange: (o) =>
                                      w({ ...l, client_phone: o.target.value }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx(N, {
                                    htmlFor: "client_address",
                                    children: j,
                                  }),
                                  e.jsx(q, {
                                    id: "client_address",
                                    value: l.client_address,
                                    onChange: (o) =>
                                      w({
                                        ...l,
                                        client_address: o.target.value,
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    className: "pb-3",
                    children: e.jsx(R, {
                      className: "text-lg",
                      children: "Dados do Aparelho",
                    }),
                  }),
                  e.jsxs(A, {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx(N, {
                                htmlFor: "device_brand_model",
                                children: "Modelo do Aparelho *",
                              }),
                              e.jsx(q, {
                                id: "device_brand_model",
                                placeholder: "Ex: iPhone 14 Pro Max",
                                value: l.device_brand_model,
                                onChange: (o) =>
                                  w({
                                    ...l,
                                    device_brand_model: o.target.value,
                                  }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx(N, {
                                htmlFor: "device_color",
                                children: "Cor",
                              }),
                              e.jsx(q, {
                                id: "device_color",
                                placeholder: "Ex: Preto",
                                value: l.device_color,
                                onChange: (o) =>
                                  w({ ...l, device_color: o.target.value }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx(N, {
                                htmlFor: "device_storage",
                                children: "Armazenamento",
                              }),
                              e.jsx(q, {
                                id: "device_storage",
                                placeholder: "Ex: 256GB",
                                value: l.device_storage,
                                onChange: (o) =>
                                  w({ ...l, device_storage: o.target.value }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx(N, {
                                htmlFor: "sale_value",
                                children: "Preço de Venda",
                              }),
                              e.jsx(q, {
                                id: "sale_value",
                                placeholder: "0,00",
                                value: l.sale_value,
                                onChange: (o) => {
                                  const B = o.target.value.replace(
                                    /[^\d,]/g,
                                    ""
                                  );
                                  w({ ...l, sale_value: B });
                                },
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx(N, {
                                htmlFor: "device_imei",
                                children: "IMEI *",
                              }),
                              e.jsx(q, {
                                id: "device_imei",
                                value: l.device_imei,
                                onChange: (o) =>
                                  w({ ...l, device_imei: o.target.value }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx(N, {
                                htmlFor: "sale_date",
                                children: "Data da Venda",
                              }),
                              e.jsx(q, {
                                id: "sale_date",
                                type: "date",
                                value: l.sale_date,
                                onChange: (o) =>
                                  w({ ...l, sale_date: o.target.value }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(N, {
                            htmlFor: "observations",
                            children: "Observações",
                          }),
                          e.jsx(q, {
                            id: "observations",
                            placeholder:
                              "Observações adicionais sobre o aparelho...",
                            value: l.observations,
                            onChange: (o) =>
                              w({ ...l, observations: o.target.value }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    className: "pb-3",
                    children: e.jsxs(R, {
                      className: "text-lg flex items-center gap-2",
                      children: [
                        "Termos de Garantia",
                        e.jsx("span", {
                          className:
                            "text-xs font-normal text-muted-foreground",
                          children: "(editável)",
                        }),
                      ],
                    }),
                  }),
                  e.jsx(A, {
                    children: e.jsx(je, {
                      placeholder: "Digite os termos de garantia...",
                      value: l.warranty_text,
                      onChange: (o) =>
                        w({ ...l, warranty_text: o.target.value }),
                      rows: 3,
                      className: "resize-none",
                    }),
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    className: "pb-3",
                    children: e.jsxs(R, {
                      className: "text-lg flex items-center gap-2",
                      children: [
                        "Condições de Venda",
                        e.jsx("span", {
                          className:
                            "text-xs font-normal text-muted-foreground",
                          children: "(editável)",
                        }),
                      ],
                    }),
                  }),
                  e.jsx(A, {
                    children: e.jsx(je, {
                      placeholder: "Digite as condições de venda...",
                      value: l.conditions_text,
                      onChange: (o) =>
                        w({ ...l, conditions_text: o.target.value }),
                      rows: 2,
                      className: "resize-none",
                    }),
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    className: "pb-3",
                    children: e.jsx(R, {
                      className: "text-lg",
                      children: "Assinaturas",
                    }),
                  }),
                  e.jsx(A, {
                    className: "space-y-4",
                    children: e.jsxs("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, { children: "Assinatura do Cliente" }),
                            e.jsx("div", {
                              className: "border rounded-md mt-2 bg-white",
                              children: e.jsx(pe, {
                                ref: a,
                                canvasProps: { className: "w-full h-28" },
                              }),
                            }),
                            e.jsx(b, {
                              type: "button",
                              variant: "ghost",
                              size: "sm",
                              onClick: () => a.current?.clear(),
                              className: "mt-1",
                              children: "Limpar",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, { children: "Assinatura do Vendedor" }),
                            e.jsx("div", {
                              className: "border rounded-md mt-2 bg-white",
                              children: e.jsx(pe, {
                                ref: n,
                                canvasProps: { className: "w-full h-28" },
                              }),
                            }),
                            e.jsx(b, {
                              type: "button",
                              variant: "ghost",
                              size: "sm",
                              onClick: () => n.current?.clear(),
                              className: "mt-1",
                              children: "Limpar",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsxs("div", {
          className: "flex justify-end gap-2 pt-4 border-t",
          children: [
            e.jsx(b, {
              variant: "outline",
              onClick: () => V(!1),
              children: "Cancelar",
            }),
            e.jsx(b, {
              onClick: K,
              disabled: r || x,
              children: r
                ? "Gerando..."
                : x
                ? "Carregando..."
                : C
                ? "Salvar Alterações"
                : "Gerar Termo de Venda",
            }),
          ],
        }),
      ],
    }),
  });
}
const ts = async (c, V) => {
  const s = new Ie(),
    m = s.internal.pageSize.width,
    y = s.internal.pageSize.height,
    a = 15;
  let n = "TECH OS PRO",
    h = "",
    S = "",
    M = "",
    P = "",
    L = "BRL";
  if (V) {
    const { data: j } = await D.from("user_settings")
      .select("*")
      .eq("user_id", V)
      .single();
    j &&
      ((n = j.company_name || n),
      (h = j.company_cnpj || ""),
      (S = j.company_address || ""),
      (M = j.company_phone || ""),
      (P = j.company_email || ""),
      (L = j.selected_currency || "BRL"));
  }
  let i = a + 10;
  s.setFillColor(0, 0, 0),
    s.rect(a, i - 2, 3, 35, "F"),
    s.setFontSize(32),
    s.setFont("helvetica", "bold"),
    s.text("CONTRATO", a + 8, i + 10),
    s.setFontSize(14),
    s.setFont("helvetica", "normal"),
    s.text("DE COMPRA DE USADO", a + 8, i + 20);
  const k = m - 85,
    W = i,
    l = 70,
    w = 38;
  s.setDrawColor(0, 0, 0),
    s.setLineWidth(0.8),
    s.roundedRect(k, W, l, w, 3, 3),
    s.setFontSize(11),
    s.setFont("helvetica", "bold"),
    s.text("CHECKLIST", k + l / 2, W + 6, { align: "center" }),
    s.setFontSize(8.5),
    s.setFont("helvetica", "normal");
  const r = [
      { key: "screen", label: "Tela" },
      { key: "speaker", label: "Alto Falante" },
      { key: "connector", label: "Conector" },
      { key: "camera", label: "Cameras" },
      { key: "battery", label: "Bateria" },
      { key: "faceId", label: "Face ID" },
      { key: "wifi", label: "Wifi" },
      { key: "unlocked", label: "Desbloqueado" },
    ],
    g = (j, $, U) => {
      s.setDrawColor(0, 0, 0),
        s.setLineWidth(0.3),
        s.rect(j, $ - 3, 3, 3),
        U &&
          (s.setLineWidth(0.5),
          s.line(j + 0.3, $ - 2.7, j + 2.7, $ - 0.3),
          s.line(j + 0.3, $ - 0.3, j + 2.7, $ - 2.7));
    };
  let x = W + 12;
  for (let j = 0; j < r.length; j += 2) {
    const $ = c.checklist?.[r[j].key] || !1;
    if ((g(k + 3, x, $), s.text(r[j].label, k + 7, x), j + 1 < r.length)) {
      const U = c.checklist?.[r[j + 1].key] || !1;
      g(k + 37, x, U), s.text(r[j + 1].label, k + 41, x);
    }
    x += 6;
  }
  (i += 45),
    s.setFillColor(0, 0, 0),
    s.roundedRect(a, i, 70, 8, 2, 2, "F"),
    s.setTextColor(255, 255, 255),
    s.setFontSize(11),
    s.setFont("helvetica", "bold"),
    s.text("VENDEDOR", a + 4, i + 5.5),
    (i += 12),
    s.setTextColor(0, 0, 0),
    s.setFontSize(9),
    s.setFont("helvetica", "normal");
  const _ = (j, $, U, ee, H) => {
    s.setFont("helvetica", "normal"),
      s.text(j, U, ee),
      s.setDrawColor(0, 0, 0),
      s.setLineWidth(0.3),
      s.line(U + s.getTextWidth(j) + 2, ee + 1, U + H, ee + 1),
      s.text($, U + s.getTextWidth(j) + 3, ee);
  };
  _("Nome:", c.client_name, a, i, m - 2 * a),
    (i += 7),
    _("CNPJ/CPF:", c.client_cpf_cnpj, a, i, 90),
    _("Telefone:", c.client_phone || "", m / 2 + 10, i, 80),
    (i += 7),
    _("Marca/Modelo:", c.device_brand_model, a, i, 90),
    _("IMEI:", c.device_imei, m / 2 + 10, i, 80),
    (i += 7),
    _("Endereço:", c.client_address || "", a, i, m - 2 * a),
    (i += 10),
    s.setFillColor(0, 0, 0),
    s.roundedRect(a, i, 70, 8, 2, 2, "F"),
    s.setTextColor(255, 255, 255),
    s.setFontSize(11),
    s.setFont("helvetica", "bold"),
    s.text("COMPRADOR", a + 4, i + 5.5),
    (i += 12),
    s.setTextColor(0, 0, 0),
    s.setFontSize(9),
    _("Nome:", n, a, i, m - 2 * a),
    (i += 7),
    _("CNPJ/CPF:", h || "", a, i, 90),
    _("Telefone:", M || "", m / 2 + 10, i, 80),
    (i += 7),
    _("E-mail:", P || "", a, i, m - 2 * a),
    (i += 7),
    _("Endereço:", S || "", a, i, m - 2 * a),
    (i += 10),
    s.setFontSize(10),
    s.setFont("helvetica", "bold"),
    s.text("1. Declaração de Propriedade", a, i),
    (i += 5),
    s.setFontSize(8),
    s.setFont("helvetica", "normal");
  let E = s.splitTextToSize(
    "O vendedor declara, sob responsabilidade civil e criminal, que o aparelho é de sua propriedade legítima, não havendo qualquer impedimento legal para sua venda, e que o produto não é fruto de furto, roubo ou qualquer outra atividade ilícita.",
    m - 2 * a
  );
  s.text(E, a, i),
    (i += E.length * 4 + 3),
    s.setFontSize(10),
    s.setFont("helvetica", "bold"),
    s.text("2. Transferência de Responsabilidade", a, i),
    (i += 5),
    s.setFontSize(8),
    s.setFont("helvetica", "normal"),
    s.text("Após o pagamento e assinatura do contrato:", a, i),
    (i += 4),
    s.text("• A propriedade do aparelho é transferida à empresa;", a + 2, i),
    (i += 4),
    s.text("• O vendedor perde qualquer direito sobre o aparelho;", a + 2, i),
    (i += 4),
    s.text(
      "• A empresa não fica obrigada a devolver o celular ou valores pagos.",
      a + 2,
      i
    ),
    (i += 6),
    s.setFontSize(10),
    s.setFont("helvetica", "bold"),
    s.text("3. Conformidade com a LGPD", a, i),
    (i += 5),
    s.setFontSize(8),
    s.setFont("helvetica", "normal"),
    (E = s.splitTextToSize(
      "Ambas as partes concordam que os dados pessoais fornecidos serão usados exclusivamente para:",
      m - 2 * a
    )),
    s.text(E, a, i),
    (i += E.length * 4 + 1),
    s.text("• Registro da compra", a + 2, i),
    (i += 4),
    s.text("• Comprovação de propriedade", a + 2, i),
    (i += 4),
    s.text("• Cumprimento de obrigações legais", a + 2, i),
    (i += 4),
    s.text("E serão armazenados de maneira segura conforme a LGPD.", a, i),
    (i += 6),
    s.setFontSize(10),
    s.setFont("helvetica", "bold"),
    s.text("4. Assinatura e Concordância", a, i),
    (i += 5),
    s.setFontSize(8),
    s.setFont("helvetica", "normal"),
    s.text("Ao assinar o contrato, o vendedor declara que:", a, i),
    (i += 4),
    s.text("• Leu e compreendeu todas as cláusulas", a + 2, i),
    (i += 4),
    s.text("• Concorda integralmente", a + 2, i),
    (i += 4),
    s.text(
      "• Entende que qualquer irregularidade é de sua responsabilidade exclusiva",
      a + 2,
      i
    ),
    (i += 4),
    s.text("A assinatura confirma o aceite total dos termos.", a, i),
    (i += 8),
    s.setFontSize(10),
    s.setFont("helvetica", "bold"),
    s.text("VALOR PAGO:", a, i),
    s.setFont("helvetica", "normal"),
    s.line(a + 32, i + 1, a + 80, i + 1),
    s.text(Re(c.purchase_value, L), a + 33, i),
    s.setFont("helvetica", "bold"),
    s.text("DATA DA COMPRA:", m / 2 + 10, i),
    s.setFont("helvetica", "normal"),
    s.line(m / 2 + 50, i + 1, m - a, i + 1),
    s.text(
      new Date(c.purchase_date).toLocaleDateString("pt-BR"),
      m / 2 + 51,
      i
    ),
    (i += 15);
  const d = (m - 3 * a) / 2,
    C = 18,
    v = y - 22 - C;
  s.setDrawColor(0, 0, 0),
    s.setLineWidth(0.4),
    s.rect(a, v, d, C),
    c.store_signature &&
      s.addImage(c.store_signature, "PNG", a + 2, v + 2, d - 4, C - 4),
    s.setFontSize(8.5),
    s.setFont("helvetica", "bold"),
    s.text("Assinatura da Loja", a + d / 2, v + C + 4, { align: "center" });
  const O = m / 2 + 5;
  s.setDrawColor(0, 0, 0),
    s.setLineWidth(0.4),
    s.rect(O, v, d, C),
    c.client_signature &&
      s.addImage(c.client_signature, "PNG", O + 2, v + 2, d - 4, C - 4),
    s.text("Assinatura do Vendedor", O + d / 2, v + C + 4, { align: "center" }),
    s.setFillColor(0, 0, 0),
    s.rect(0, y - 15, m, 15, "F"),
    s.setTextColor(255, 255, 255),
    s.setFontSize(10),
    s.setFont("helvetica", "bold"),
    s.text("DESENVOLVIDO POR TECH OS PRO", m / 2, y - 7, { align: "center" }),
    s.save(
      `Contrato_Compra_${c.client_name.replace(
        /\s+/g,
        "_"
      )}_${new Date().getTime()}.pdf`
    );
};
function ns() {
  const { user: c } = _e(),
    { effectiveUserId: V } = Ke(),
    s = V || c?.id || "",
    { format: m } = ke(),
    [y, a] = p.useState([]),
    [n, h] = p.useState([]),
    [S, M] = p.useState([]),
    [P, L] = p.useState([]),
    [i, k] = p.useState(""),
    [W, l] = p.useState(""),
    [w, r] = p.useState(!1),
    [g, x] = p.useState(!1),
    [_, E] = p.useState(!1),
    [d, C] = p.useState(null),
    [v, O] = p.useState(null),
    [j, $] = p.useState(null),
    [U, ee] = p.useState(!0),
    [H, K] = p.useState("compras");
  p.useEffect(() => {
    c && (ae(), o());
  }, [c]),
    p.useEffect(() => {
      B();
    }, [i, y]),
    p.useEffect(() => {
      u();
    }, [W, n]);
  const ae = async () => {
      try {
        const { data: t, error: f } = await D.from("purchase_contracts")
          .select("*")
          .eq("user_id", s)
          .order("created_at", { ascending: !1 });
        if (f) throw f;
        a(t || []);
      } catch (t) {
        F.error("Erro ao carregar contratos: " + t.message);
      } finally {
        ee(!1);
      }
    },
    o = async () => {
      try {
        const { data: t, error: f } = await D.from("sale_contracts")
          .select("*")
          .eq("user_id", s)
          .order("created_at", { ascending: !1 });
        if (f) throw f;
        h(t || []);
      } catch (t) {
        F.error("Erro ao carregar termos de venda: " + t.message);
      }
    },
    B = () => {
      if (!i) {
        M(y);
        return;
      }
      const t = i.toLowerCase(),
        f = i.replace(/\D/g, ""),
        Z = y.filter(
          (G) =>
            G.client_name.toLowerCase().includes(t) ||
            G.client_cpf_cnpj.includes(t) ||
            G.device_imei.includes(t) ||
            G.device_brand_model.toLowerCase().includes(t) ||
            (f.length >= 3 &&
              (G.client_cpf_cnpj || "").replace(/\D/g, "").includes(f))
        );
      M(Z);
    },
    u = () => {
      if (!W) {
        L(n);
        return;
      }
      const t = W.toLowerCase(),
        f = W.replace(/\D/g, ""),
        Z = n.filter(
          (G) =>
            G.client_name.toLowerCase().includes(t) ||
            (G.client_cpf && G.client_cpf.includes(t)) ||
            G.device_imei.includes(t) ||
            G.device_brand_model.toLowerCase().includes(t) ||
            (f.length >= 3 &&
              (G.client_cpf || "").replace(/\D/g, "").includes(f))
        );
      L(Z);
    },
    Y = async (t) => {
      if (
        confirm(
          "Confirmar o contrato como assinado? Isso gerará uma despesa no financeiro."
        )
      )
        try {
          const { data: f, error: Z } = await D.from("purchase_contracts")
            .select("*")
            .eq("id", t)
            .single();
          if (Z) throw Z;
          const { error: G } = await D.from("purchase_contracts")
            .update({ status: "confirmed" })
            .eq("id", t);
          if (G) throw G;
          const { data: Ve } = await D.from("transactions")
            .select("id")
            .eq("user_id", f.user_id)
            .eq("type", "expense")
            .ilike("description", `%${f.device_imei}%`)
            .single();
          if (!Ve) {
            const { error: Fe } = await D.from("transactions").insert({
              user_id: f.user_id,
              type: "expense",
              description: `Compra de usado - ${f.device_brand_model} - IMEI: ${f.device_imei}`,
              amount: f.purchase_value,
              category: "Compra de Aparelhos",
              date: f.purchase_date,
              payment_method: "Dinheiro",
            });
            if (Fe) throw Fe;
          }
          F.success("Contrato confirmado e despesa registrada!"), ae();
        } catch (f) {
          F.error("Erro ao confirmar contrato: " + f.message);
        }
    },
    Q = async (t) => {
      if (confirm("Deseja realmente excluir este contrato?"))
        try {
          const { data: f } = await D.from("purchase_contracts")
            .select("device_imei, device_brand_model, user_id")
            .eq("id", t)
            .single();
          f &&
            (await D.from("transactions")
              .delete()
              .eq("user_id", f.user_id)
              .eq("type", "expense")
              .ilike("description", `%${f.device_imei}%`));
          const { error: Z } = await D.from("purchase_contracts")
            .delete()
            .eq("id", t);
          if (Z) throw Z;
          F.success("Contrato e transação excluídos com sucesso!"), ae();
        } catch (f) {
          F.error("Erro ao excluir contrato: " + f.message);
        }
    },
    se = async (t) => {
      if (confirm("Deseja realmente excluir este termo de venda?"))
        try {
          const { error: f } = await D.from("sale_contracts")
            .delete()
            .eq("id", t);
          if (f) throw f;
          F.success("Termo de venda excluído com sucesso!"), o();
        } catch (f) {
          F.error("Erro ao excluir termo: " + f.message);
        }
    },
    z = async (t) => {
      try {
        const { data: f, error: Z } = await D.from("purchase_contracts")
          .select("*")
          .eq("id", t)
          .single();
        if (Z) throw Z;
        await ts(f, c?.id), F.success("PDF gerado com sucesso!");
      } catch (f) {
        F.error("Erro ao gerar PDF: " + f.message);
      }
    },
    le = async (t) => {
      try {
        await Oe(
          {
            id: t.id,
            client_name: t.client_name,
            client_cpf: t.client_cpf || "",
            client_phone: t.client_phone || "",
            client_address: t.client_address || "",
            device_brand_model: t.device_brand_model,
            device_color: t.device_color || "",
            device_storage: t.device_storage || "",
            device_imei: t.device_imei,
            sale_date: t.sale_date,
            sale_value: t.sale_value,
            observations: "",
            warranty_text: t.warranty_text || "",
            conditions_text: t.conditions_text || "",
            client_signature: t.client_signature || "",
            store_signature: t.store_signature || "",
          },
          c?.id
        ),
          F.success("PDF gerado com sucesso!");
      } catch (f) {
        F.error("Erro ao gerar PDF: " + f.message);
      }
    },
    te = (t) => {
      C(t), r(!0);
    },
    ie = (t) => {
      O(t), x(!0);
    },
    be = (t) => {
      $(t), E(!0);
    },
    ne = (t) => qe(t);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className:
          "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",
        children: [
          e.jsx("h1", {
            className: "text-xl md:text-3xl font-bold",
            children: "Compra e Venda",
          }),
          e.jsxs("div", {
            className: "flex flex-wrap gap-2 w-full sm:w-auto",
            children: [
              e.jsxs(b, {
                onClick: () => {
                  C(null), r(!0);
                },
                size: "sm",
                variant: "outline",
                className: "flex-1 sm:flex-none",
                children: [
                  e.jsx(we, {
                    className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                  }),
                  e.jsx("span", {
                    className: "text-xs md:text-sm",
                    children: "Termo de Compra",
                  }),
                ],
              }),
              e.jsxs(b, {
                onClick: () => {
                  O(null), x(!0);
                },
                size: "sm",
                className: "flex-1 sm:flex-none",
                children: [
                  e.jsx(ye, {
                    className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                  }),
                  e.jsx("span", {
                    className: "text-xs md:text-sm",
                    children: "Termo de Venda",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(Qe, {
        value: H,
        onValueChange: K,
        children: [
          e.jsxs(Ze, {
            className: "grid w-full grid-cols-2",
            children: [
              e.jsxs(Se, {
                value: "compras",
                className: "text-xs md:text-sm",
                children: [
                  e.jsx(we, {
                    className: "h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2",
                  }),
                  "Compras (",
                  y.length,
                  ")",
                ],
              }),
              e.jsxs(Se, {
                value: "vendas",
                className: "text-xs md:text-sm",
                children: [
                  e.jsx(ye, {
                    className: "h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2",
                  }),
                  "Vendas (",
                  n.length,
                  ")",
                ],
              }),
            ],
          }),
          e.jsxs(De, {
            value: "compras",
            className: "space-y-4",
            children: [
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    className: "p-3 md:p-6",
                    children: e.jsx(R, {
                      className: "text-sm md:text-base",
                      children: "Pesquisar Contratos de Compra",
                    }),
                  }),
                  e.jsx(A, {
                    className: "p-3 md:p-6 pt-0",
                    children: e.jsxs("div", {
                      className: "relative",
                      children: [
                        e.jsx(Ee, {
                          className:
                            "absolute left-2 md:left-3 top-2.5 md:top-3 h-3 w-3 md:h-4 md:w-4 text-muted-foreground",
                        }),
                        e.jsx(q, {
                          placeholder:
                            "Buscar por nome, CPF/CNPJ, IMEI ou modelo...",
                          value: i,
                          onChange: (t) => k(t.target.value),
                          className: "pl-8 md:pl-10 text-xs md:text-sm h-9",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    className: "p-3 md:p-6",
                    children: e.jsx(R, {
                      className: "text-sm md:text-base",
                      children: "Histórico de Compras",
                    }),
                  }),
                  e.jsx(A, {
                    className: "p-0 md:p-6",
                    children: U
                      ? e.jsx("div", {
                          className: "text-center py-8 text-xs md:text-sm",
                          children: "Carregando...",
                        })
                      : S.length === 0
                      ? e.jsx("div", {
                          className:
                            "text-center py-8 text-muted-foreground text-xs md:text-sm",
                          children: "Nenhum contrato encontrado",
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("div", {
                              className: "hidden md:block",
                              children: e.jsxs(Pe, {
                                children: [
                                  e.jsx(ze, {
                                    children: e.jsxs(me, {
                                      children: [
                                        e.jsx(J, {
                                          className: "text-xs",
                                          children: "Cliente",
                                        }),
                                        e.jsx(J, {
                                          className: "text-xs",
                                          children: "IMEI",
                                        }),
                                        e.jsx(J, {
                                          className:
                                            "text-xs hidden lg:table-cell",
                                          children: "Aparelho",
                                        }),
                                        e.jsx(J, {
                                          className: "text-xs",
                                          children: "Data",
                                        }),
                                        e.jsx(J, {
                                          className: "text-xs",
                                          children: "Valor",
                                        }),
                                        e.jsx(J, {
                                          className: "text-xs",
                                          children: "Status",
                                        }),
                                        e.jsx(J, {
                                          className: "text-right text-xs",
                                          children: "Ações",
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx(Le, {
                                    children: S.map((t) =>
                                      e.jsxs(
                                        me,
                                        {
                                          children: [
                                            e.jsx(X, {
                                              className: "font-medium text-xs",
                                              children: t.client_name,
                                            }),
                                            e.jsx(X, {
                                              className: "text-xs",
                                              children: t.device_imei,
                                            }),
                                            e.jsx(X, {
                                              className:
                                                "text-xs hidden lg:table-cell",
                                              children: t.device_brand_model,
                                            }),
                                            e.jsx(X, {
                                              className: "text-xs",
                                              children: ne(t.purchase_date),
                                            }),
                                            e.jsx(X, {
                                              className: "text-xs",
                                              children: m(t.purchase_value),
                                            }),
                                            e.jsx(X, {
                                              children: e.jsx(he, {
                                                variant: "secondary",
                                                className: "text-[10px]",
                                                children: t.status,
                                              }),
                                            }),
                                            e.jsx(X, {
                                              className: "text-right",
                                              children: e.jsxs("div", {
                                                className:
                                                  "flex items-center justify-end gap-0.5",
                                                children: [
                                                  t.status !== "confirmed" &&
                                                    e.jsx(b, {
                                                      variant: "ghost",
                                                      size: "icon",
                                                      className: "h-7 w-7",
                                                      onClick: () => Y(t.id),
                                                      title: "Confirmar",
                                                      children: e.jsx(Te, {
                                                        className:
                                                          "h-3 w-3 text-green-600",
                                                      }),
                                                    }),
                                                  e.jsx(b, {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-7 w-7",
                                                    onClick: () => be(t.id),
                                                    title: "Visualizar",
                                                    children: e.jsx(Ae, {
                                                      className: "h-3 w-3",
                                                    }),
                                                  }),
                                                  e.jsx(b, {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-7 w-7",
                                                    onClick: () => te(t.id),
                                                    title: "Editar termo",
                                                    children: e.jsx(ce, {
                                                      className: "h-3 w-3",
                                                    }),
                                                  }),
                                                  e.jsx(b, {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-7 w-7",
                                                    onClick: () => z(t.id),
                                                    children: e.jsx(oe, {
                                                      className: "h-3 w-3",
                                                    }),
                                                  }),
                                                  e.jsx(b, {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-7 w-7",
                                                    onClick: () => Q(t.id),
                                                    children: e.jsx(de, {
                                                      className: "h-3 w-3",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        },
                                        t.id
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            e.jsx("div", {
                              className: "md:hidden space-y-3 p-3",
                              children: S.map((t) =>
                                e.jsx(
                                  T,
                                  {
                                    children: e.jsx(A, {
                                      className: "p-3",
                                      children: e.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex justify-between items-start gap-2",
                                            children: [
                                              e.jsxs("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                  e.jsx("p", {
                                                    className:
                                                      "font-semibold text-xs truncate",
                                                    children: t.client_name,
                                                  }),
                                                  e.jsx("p", {
                                                    className:
                                                      "text-[10px] text-muted-foreground truncate",
                                                    children:
                                                      t.device_brand_model,
                                                  }),
                                                ],
                                              }),
                                              e.jsx(he, {
                                                variant: "secondary",
                                                className:
                                                  "text-[9px] h-4 px-1 flex-shrink-0",
                                                children: t.status,
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "text-[10px] space-y-0.5",
                                            children: [
                                              e.jsxs("p", {
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "text-muted-foreground",
                                                    children: "IMEI:",
                                                  }),
                                                  " ",
                                                  t.device_imei,
                                                ],
                                              }),
                                              e.jsxs("p", {
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "text-muted-foreground",
                                                    children: "Data:",
                                                  }),
                                                  " ",
                                                  ne(t.purchase_date),
                                                ],
                                              }),
                                              e.jsxs("p", {
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "text-muted-foreground",
                                                    children: "Valor:",
                                                  }),
                                                  " ",
                                                  m(t.purchase_value),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex gap-1 pt-1 flex-wrap",
                                            children: [
                                              t.status !== "confirmed" &&
                                                e.jsxs(b, {
                                                  variant: "outline",
                                                  size: "sm",
                                                  className:
                                                    "h-7 text-[10px] px-2 flex-1",
                                                  onClick: () => Y(t.id),
                                                  children: [
                                                    e.jsx(Te, {
                                                      className:
                                                        "h-3 w-3 mr-0.5 text-green-600",
                                                    }),
                                                    "Confirmar",
                                                  ],
                                                }),
                                              e.jsxs(b, {
                                                variant: "outline",
                                                size: "sm",
                                                className:
                                                  "h-7 text-[10px] px-2 flex-1",
                                                onClick: () => be(t.id),
                                                children: [
                                                  e.jsx(Ae, {
                                                    className: "h-3 w-3 mr-0.5",
                                                  }),
                                                  "Ver",
                                                ],
                                              }),
                                              e.jsxs(b, {
                                                variant: "outline",
                                                size: "sm",
                                                className:
                                                  "h-7 text-[10px] px-2 flex-1",
                                                onClick: () => te(t.id),
                                                children: [
                                                  e.jsx(ce, {
                                                    className: "h-3 w-3 mr-0.5",
                                                  }),
                                                  "Editar",
                                                ],
                                              }),
                                              e.jsxs(b, {
                                                variant: "outline",
                                                size: "sm",
                                                className:
                                                  "h-7 text-[10px] px-2 flex-1",
                                                onClick: () => z(t.id),
                                                children: [
                                                  e.jsx(oe, {
                                                    className: "h-3 w-3 mr-0.5",
                                                  }),
                                                  "PDF",
                                                ],
                                              }),
                                              e.jsxs(b, {
                                                variant: "outline",
                                                size: "sm",
                                                className:
                                                  "h-7 text-[10px] px-2 flex-1",
                                                onClick: () => Q(t.id),
                                                children: [
                                                  e.jsx(de, {
                                                    className: "h-3 w-3 mr-0.5",
                                                  }),
                                                  "Excluir",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  },
                                  t.id
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
          e.jsxs(De, {
            value: "vendas",
            className: "space-y-4",
            children: [
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    className: "p-3 md:p-6",
                    children: e.jsx(R, {
                      className: "text-sm md:text-base",
                      children: "Pesquisar Termos de Venda",
                    }),
                  }),
                  e.jsx(A, {
                    className: "p-3 md:p-6 pt-0",
                    children: e.jsxs("div", {
                      className: "relative",
                      children: [
                        e.jsx(Ee, {
                          className:
                            "absolute left-2 md:left-3 top-2.5 md:top-3 h-3 w-3 md:h-4 md:w-4 text-muted-foreground",
                        }),
                        e.jsx(q, {
                          placeholder:
                            "Buscar por nome, CPF, IMEI ou modelo...",
                          value: W,
                          onChange: (t) => l(t.target.value),
                          className: "pl-8 md:pl-10 text-xs md:text-sm h-9",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs(T, {
                children: [
                  e.jsx(I, {
                    className: "p-3 md:p-6",
                    children: e.jsx(R, {
                      className: "text-sm md:text-base",
                      children: "Histórico de Vendas",
                    }),
                  }),
                  e.jsx(A, {
                    className: "p-0 md:p-6",
                    children:
                      P.length === 0
                        ? e.jsx("div", {
                            className:
                              "text-center py-8 text-muted-foreground text-xs md:text-sm",
                            children: "Nenhum termo de venda encontrado",
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("div", {
                                className: "hidden md:block",
                                children: e.jsxs(Pe, {
                                  children: [
                                    e.jsx(ze, {
                                      children: e.jsxs(me, {
                                        children: [
                                          e.jsx(J, {
                                            className: "text-xs",
                                            children: "Cliente",
                                          }),
                                          e.jsx(J, {
                                            className: "text-xs",
                                            children: "IMEI",
                                          }),
                                          e.jsx(J, {
                                            className:
                                              "text-xs hidden lg:table-cell",
                                            children: "Aparelho",
                                          }),
                                          e.jsx(J, {
                                            className: "text-xs",
                                            children: "Data",
                                          }),
                                          e.jsx(J, {
                                            className: "text-xs",
                                            children: "Valor",
                                          }),
                                          e.jsx(J, {
                                            className: "text-right text-xs",
                                            children: "Ações",
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsx(Le, {
                                      children: P.map((t) =>
                                        e.jsxs(
                                          me,
                                          {
                                            children: [
                                              e.jsx(X, {
                                                className:
                                                  "font-medium text-xs",
                                                children: t.client_name,
                                              }),
                                              e.jsx(X, {
                                                className: "text-xs",
                                                children: t.device_imei,
                                              }),
                                              e.jsx(X, {
                                                className:
                                                  "text-xs hidden lg:table-cell",
                                                children: t.device_brand_model,
                                              }),
                                              e.jsx(X, {
                                                className: "text-xs",
                                                children: ne(t.sale_date),
                                              }),
                                              e.jsx(X, {
                                                className: "text-xs",
                                                children: m(t.sale_value),
                                              }),
                                              e.jsx(X, {
                                                className: "text-right",
                                                children: e.jsxs("div", {
                                                  className:
                                                    "flex items-center justify-end gap-0.5",
                                                  children: [
                                                    e.jsx(b, {
                                                      variant: "ghost",
                                                      size: "icon",
                                                      className: "h-7 w-7",
                                                      onClick: () => ie(t.id),
                                                      title: "Editar termo",
                                                      children: e.jsx(ce, {
                                                        className: "h-3 w-3",
                                                      }),
                                                    }),
                                                    e.jsx(b, {
                                                      variant: "ghost",
                                                      size: "icon",
                                                      className: "h-7 w-7",
                                                      onClick: () => le(t),
                                                      title: "PDF",
                                                      children: e.jsx(oe, {
                                                        className: "h-3 w-3",
                                                      }),
                                                    }),
                                                    e.jsx(b, {
                                                      variant: "ghost",
                                                      size: "icon",
                                                      className: "h-7 w-7",
                                                      onClick: () => se(t.id),
                                                      children: e.jsx(de, {
                                                        className: "h-3 w-3",
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          },
                                          t.id
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className: "md:hidden space-y-3 p-3",
                                children: P.map((t) =>
                                  e.jsx(
                                    T,
                                    {
                                      children: e.jsx(A, {
                                        className: "p-3",
                                        children: e.jsxs("div", {
                                          className: "space-y-2",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex justify-between items-start gap-2",
                                              children: [
                                                e.jsxs("div", {
                                                  className: "min-w-0 flex-1",
                                                  children: [
                                                    e.jsx("p", {
                                                      className:
                                                        "font-semibold text-xs truncate",
                                                      children: t.client_name,
                                                    }),
                                                    e.jsx("p", {
                                                      className:
                                                        "text-[10px] text-muted-foreground truncate",
                                                      children:
                                                        t.device_brand_model,
                                                    }),
                                                  ],
                                                }),
                                                e.jsx(he, {
                                                  variant: "outline",
                                                  className:
                                                    "text-[9px] h-4 px-1 flex-shrink-0",
                                                  children: "Venda",
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "text-[10px] space-y-0.5",
                                              children: [
                                                e.jsxs("p", {
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "text-muted-foreground",
                                                      children: "IMEI:",
                                                    }),
                                                    " ",
                                                    t.device_imei,
                                                  ],
                                                }),
                                                e.jsxs("p", {
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "text-muted-foreground",
                                                      children: "Data:",
                                                    }),
                                                    " ",
                                                    ne(t.sale_date),
                                                  ],
                                                }),
                                                e.jsxs("p", {
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "text-muted-foreground",
                                                      children: "Valor:",
                                                    }),
                                                    " ",
                                                    m(t.sale_value),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className: "flex gap-1 pt-1",
                                              children: [
                                                e.jsxs(b, {
                                                  variant: "outline",
                                                  size: "sm",
                                                  className:
                                                    "h-7 text-[10px] px-2 flex-1",
                                                  onClick: () => ie(t.id),
                                                  children: [
                                                    e.jsx(ce, {
                                                      className:
                                                        "h-3 w-3 mr-0.5",
                                                    }),
                                                    "Editar",
                                                  ],
                                                }),
                                                e.jsxs(b, {
                                                  variant: "outline",
                                                  size: "sm",
                                                  className:
                                                    "h-7 text-[10px] px-2 flex-1",
                                                  onClick: () => le(t),
                                                  children: [
                                                    e.jsx(oe, {
                                                      className:
                                                        "h-3 w-3 mr-0.5",
                                                    }),
                                                    "PDF",
                                                  ],
                                                }),
                                                e.jsxs(b, {
                                                  variant: "outline",
                                                  size: "sm",
                                                  className:
                                                    "h-7 text-[10px] px-2 flex-1",
                                                  onClick: () => se(t.id),
                                                  children: [
                                                    e.jsx(de, {
                                                      className:
                                                        "h-3 w-3 mr-0.5",
                                                    }),
                                                    "Excluir",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    },
                                    t.id
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
        ],
      }),
      e.jsx(es, {
        open: w,
        onOpenChange: (t) => {
          r(t), t || C(null);
        },
        onSuccess: ae,
        editId: d,
      }),
      e.jsx(as, {
        open: g,
        onOpenChange: (t) => {
          x(t), t || O(null);
        },
        onSuccess: o,
        editId: v,
      }),
      j && e.jsx(ss, { open: _, onOpenChange: E, contractId: j, onUpdate: ae }),
    ],
  });
}
export { ns as default };
