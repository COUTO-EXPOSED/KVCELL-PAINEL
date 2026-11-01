import {
  i as oe,
  z as le,
  ce as ie,
  cu as ne,
  r as _,
  j as e,
  G as de,
  bB as ce,
  bC as me,
  bD as E,
  bE as R,
  n as l,
  I as n,
  b5 as k,
  b6 as L,
  b7 as D,
  b8 as M,
  b9 as j,
  T as z,
  B as C,
  dn as A,
  w as h,
  de as xe,
  b1 as B,
  dm as pe,
  dY as ue,
  dF as he,
} from "./index-V8ZHCWL2.js";
import { S as ge } from "./sun-P4wkve1z.js";
const je = () => {
  const { toast: p } = oe(),
    { user: m } = le();
  ie();
  const { currency: J, setCurrency: V } = ne(),
    [i, v] = _.useState({
      name: "",
      cnpj: "",
      documentType: "cnpj",
      phone: "",
      email: "",
      address: "",
      logo: "",
      pixQrcode: "",
      dashboardLanguage: "pt-BR",
    }),
    [N, F] = _.useState({ email: !1, push: !1, whatsapp: !1, lowStock: !0 }),
    [y, w] = _.useState({
      primaryColor: "#9b87f5",
      sidebarLogo: void 0,
      theme: "light",
    });
  _.useEffect(() => {
    const a = localStorage.getItem("dashboardTheme");
    if (a) w((t) => ({ ...t, theme: a })), $(a);
    else {
      const o = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      w((s) => ({ ...s, theme: o })), $(o);
    }
  }, []);
  const $ = (a) => {
      a === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    },
    Q = (a) => {
      w((t) => ({ ...t, theme: a })),
        $(a),
        localStorage.setItem("dashboardTheme", a),
        p({
          title: a === "dark" ? "Tema Escuro Ativado" : "Tema Claro Ativado",
          description: "Sua preferência foi salva com sucesso!",
        });
    },
    d = {
      primaryColor: "#64748b",
      secondaryColor: "#f8fafc",
      textColor: "#0f172a",
      footerColor: "#64748b",
      termTitle: "TERMO DE RESPONSABILIDADE",
      termText:
        "Assumo total responsabilidade de propriedade do aparelho acima citado isentando a empresa prestadora do serviço de qualquer eventual problema quanto à procedência do mesmo. Estou ciente de que serviços de reset e atualização implicam na perda de dados pessoais contidos no aparelho e que em caso de reparos em placa lógica, conectores, botões e componentes fixos na placa pode implicar na morte súbita do aparelho, assim invalidando a garantia. A garantia dos serviços prestados será prontamente cancelada nos seguintes casos: mau uso, queda, arranhões, poeira, amassados metálicos, instalação de aplicativos maliciosos, alterações no sistema operacional, abertura ou tentativa de conserto feitos por terceiros não autorizados, bem como a violação do celular. Comprometo-me a realizar a retirada do aparelho em até 30 dias, sabendo que passado esse prazo será cobrado um acréscimo de 10%. Ao fim do prazo de 90 dias o aparelho será vendido para cobrir os custos.",
      quotationPdfColor: "#1e3a5f",
      warrantyTitle: "TERMO DE GARANTIA",
      warrantyText: `Este termo de garantia cobre exclusivamente o serviço descrito nesta Ordem de Serviço, pelo prazo definido pela empresa, contado a partir da data de retirada do equipamento.

NÃO ESTÃO COBERTOS POR ESTA GARANTIA: lentes, antenas, carcaças, capas, teclas, botões laterais, tampas, películas protetoras, cabos, fones, cartão de memória, suportes e quaisquer partes que se desgastam com o uso.

A GARANTIA SERÁ AUTOMATICAMENTE CANCELADA NOS SEGUINTES CASOS: quedas, contato com líquidos, exposição a altas temperaturas, umidade, poeira ou limalha de metais; mau uso do aparelho; instalação ou alteração de software/hardware não autorizada; reparos realizados por terceiros; violação do lacre de garantia; lentes/touchscreen trincados, riscados, manchados, descolados ou com cabo flex rompido após a entrega.

OBSERVAÇÕES IMPORTANTES:
1) A garantia é regida pelo Art. 26, inciso II, do Código de Defesa do Consumidor.
2) Funcionamento, instalação e atualização de aplicativos e sistema operacional NÃO fazem parte desta garantia.
3) Limpeza e conservação do aparelho NÃO fazem parte desta garantia.
4) A não apresentação deste termo ou da nota fiscal INVALIDA a garantia.
5) Mau funcionamento APÓS atualizações do sistema NÃO faz parte desta garantia.
6) A garantia cobre somente o item/serviço descrito nesta OS, respeitando todas as condições aqui descritas.`,
      warrantySubtitle: "Documento de garantia do serviço prestado",
      warrantyColor: "#1e3a5f",
      warrantyAcknowledgement:
        "Declaro que li, compreendi e aceito todas as condições deste termo de garantia, e que testei o equipamento no ato da retirada, encontrando-se em perfeito estado estético e de funcionamento.",
      warrantyFooter:
        "Este documento é parte integrante da Ordem de Serviço e deve ser apresentado em qualquer acionamento da garantia.",
    },
    [r, u] = _.useState(d),
    [f, U] = _.useState({ fineRate: 2, dailyInterestRate: 0.033 }),
    [g, P] = _.useState({
      pixKey: "",
      receiverName: "",
      bank: "",
      paymentType: "pix",
    });
  _.useEffect(() => {
    if (!m) return;
    (async () => {
      const { data: s, error: c } = await h
        .from("user_settings")
        .select("*")
        .eq("user_id", m.id)
        .maybeSingle();
      if (!c && s) {
        v({
          name: s.company_name || "",
          cnpj: s.company_cnpj || "",
          documentType: s.company_document_type || "cnpj",
          phone: s.company_phone || "",
          email: s.company_email || "",
          address: s.company_address || "",
          logo: s.company_logo || "",
          pixQrcode: s.pix_qrcode || "",
          dashboardLanguage:
            localStorage.getItem("dashboardLanguage") || "pt-BR",
        }),
          s.company_logo &&
            (localStorage.setItem("companyLogo", s.company_logo),
            window.dispatchEvent(
              new CustomEvent("companyLogoUpdated", {
                detail: { logo: s.company_logo },
              })
            ));
        const x = s.os_print_settings || {};
        u({
          primaryColor: x.primaryColor || d.primaryColor,
          secondaryColor: x.secondaryColor || d.secondaryColor,
          textColor: x.textColor || d.textColor,
          footerColor: x.footerColor || d.footerColor,
          termTitle: s.os_term_title || d.termTitle,
          termText: s.os_term_text || d.termText,
          quotationPdfColor: s.quotation_pdf_color || d.quotationPdfColor,
          warrantyTitle: s.warranty_term_title || d.warrantyTitle,
          warrantyText: s.warranty_term_text || d.warrantyText,
          warrantySubtitle: s.warranty_term_subtitle || d.warrantySubtitle,
          warrantyColor: s.warranty_term_color || d.warrantyColor,
          warrantyAcknowledgement:
            s.warranty_term_acknowledgement || d.warrantyAcknowledgement,
          warrantyFooter: s.warranty_term_footer || d.warrantyFooter,
        }),
          U({
            fineRate: s.fine_rate || 2,
            dailyInterestRate: s.daily_interest_rate || 0.033,
          }),
          P({
            pixKey: s.pix_key || "",
            receiverName: s.receiver_name || "",
            bank: s.bank || "",
            paymentType: s.payment_type || "pix",
          });
      }
    })();
    const t = localStorage.getItem("notificationSettings");
    t && F(JSON.parse(t));
    const o = localStorage.getItem("appearanceSettings");
    if (o) {
      const s = JSON.parse(o);
      w(s);
      const c = O(s.primaryColor);
      document.documentElement.style.setProperty("--primary", c);
      const x = O(G(s.primaryColor, -10));
      document.documentElement.style.setProperty("--accent", x),
        document.documentElement.style.setProperty("--ring", c),
        K(s.primaryColor),
        localStorage.setItem("dashboardPrimaryColor", s.primaryColor);
    }
  }, [m]);
  const W = async (a) => {
      const t = a.target.files?.[0];
      if (!(!t || !m)) {
        if (t.size > 2 * 1024 * 1024) {
          p({
            title: "Arquivo muito grande",
            description: "A imagem deve ter no máximo 2MB",
            variant: "destructive",
          });
          return;
        }
        try {
          const { blob: o, format: s } = await ue(t),
            c = he(m.id, "logo", s),
            x = s === "png" ? "image/png" : "image/jpeg",
            { error: S } = await h.storage
              .from("company-logos")
              .upload(c, o, { upsert: !0, contentType: x });
          if (S) throw S;
          const {
            data: { publicUrl: b },
          } = h.storage.from("company-logos").getPublicUrl(c);
          v((T) => ({ ...T, logo: b }));
          const { data: I } = await h
              .from("user_settings")
              .select("id")
              .eq("user_id", m.id)
              .maybeSingle(),
            q = { company_logo: b };
          I
            ? await h.from("user_settings").update(q).eq("id", I.id)
            : await h.from("user_settings").insert([{ user_id: m.id, ...q }]),
            window.dispatchEvent(
              new CustomEvent("companyLogoUpdated", { detail: { logo: b } })
            ),
            localStorage.setItem("companyLogo", b),
            p({
              title: "Logo salva!",
              description: "A logo foi salva automaticamente no sistema.",
            });
        } catch (o) {
          p({
            title: "Erro ao enviar logo",
            description: o.message || "Tente novamente",
            variant: "destructive",
          });
        }
      }
    },
    X = (a) => {
      const t = a.target.files?.[0];
      if (t) {
        const o = new FileReader();
        (o.onloadend = () => {
          v({ ...i, pixQrcode: o.result });
        }),
          o.readAsDataURL(t);
      }
    },
    H = (a) => {
      const t = a.target.files?.[0];
      if (t) {
        const o = new FileReader();
        (o.onloadend = () => {
          w({ ...y, sidebarLogo: o.result });
        }),
          o.readAsDataURL(t);
      }
    },
    Y = async () => {
      if (!m) return;
      const { data: a } = await h
          .from("user_settings")
          .select("id")
          .eq("user_id", m.id)
          .maybeSingle(),
        t = {
          user_id: m.id,
          company_name: i.name,
          company_cnpj: i.cnpj || null,
          company_document_type: i.documentType,
          company_phone: i.phone,
          company_email: i.email || null,
          company_address: i.address,
          company_logo: i.logo || null,
          pix_qrcode: i.pixQrcode || null,
        };
      localStorage.setItem("dashboardLanguage", i.dashboardLanguage);
      const { error: o } = a
        ? await h.from("user_settings").update(t).eq("id", a.id)
        : await h.from("user_settings").insert([t]);
      if (o) {
        p({ title: "Erro ao salvar configurações", variant: "destructive" });
        return;
      }
      i.logo &&
        (localStorage.setItem("companyLogo", i.logo),
        window.dispatchEvent(
          new CustomEvent("companyLogoUpdated", { detail: { logo: i.logo } })
        )),
        p({
          title: "Configurações salvas",
          description:
            "As informações da empresa foram atualizadas com sucesso.",
        });
    },
    Z = async () => {
      if (!m) return;
      const { data: a } = await h
          .from("user_settings")
          .select("id")
          .eq("user_id", m.id)
          .maybeSingle(),
        t = {
          user_id: m.id,
          os_print_settings: {
            primaryColor: r.primaryColor,
            secondaryColor: r.secondaryColor,
            textColor: r.textColor,
            footerColor: r.footerColor,
          },
          os_term_title: r.termTitle,
          os_term_text: r.termText,
          quotation_pdf_color: r.quotationPdfColor,
          warranty_term_title: r.warrantyTitle,
          warranty_term_text: r.warrantyText,
          warranty_term_subtitle: r.warrantySubtitle,
          warranty_term_color: r.warrantyColor,
          warranty_term_acknowledgement: r.warrantyAcknowledgement,
          warranty_term_footer: r.warrantyFooter,
        },
        { error: o } = a
          ? await h.from("user_settings").update(t).eq("id", a.id)
          : await h.from("user_settings").insert([t]);
      if (o) {
        p({ title: "Erro ao salvar configurações", variant: "destructive" });
        return;
      }
      p({
        title: "Configurações de impressão salvas",
        description: "As configurações da OS foram atualizadas com sucesso.",
      });
    },
    ee = async () => {
      if (!m) return;
      const { data: a } = await h
          .from("user_settings")
          .select("id")
          .eq("user_id", m.id)
          .maybeSingle(),
        t = {
          user_id: m.id,
          fine_rate: f.fineRate,
          daily_interest_rate: f.dailyInterestRate,
        },
        { error: o } = a
          ? await h.from("user_settings").update(t).eq("id", a.id)
          : await h.from("user_settings").insert([t]);
      if (o) {
        p({ title: "Erro ao salvar configurações", variant: "destructive" });
        return;
      }
      p({
        title: "Configurações de multas e juros salvas",
        description: "As taxas foram atualizadas com sucesso.",
      });
    },
    ae = async () => {
      if (!m) return;
      const { data: a } = await h
          .from("user_settings")
          .select("id")
          .eq("user_id", m.id)
          .maybeSingle(),
        t = {
          user_id: m.id,
          pix_key: g.pixKey,
          receiver_name: g.receiverName,
          bank: g.bank,
          payment_type: g.paymentType,
        },
        { error: o } = a
          ? await h.from("user_settings").update(t).eq("id", a.id)
          : await h.from("user_settings").insert([t]);
      if (o) {
        p({ title: "Erro ao salvar configurações", variant: "destructive" });
        return;
      }
      p({
        title: "Configurações de pagamento salvas",
        description: "As informações de pagamento foram atualizadas.",
      });
    },
    se = () => {
      localStorage.setItem("notificationSettings", JSON.stringify(N)),
        p({
          title: "Notificações configuradas",
          description: "Suas preferências de notificação foram salvas.",
        });
    },
    te = async () => {
      localStorage.setItem("appearanceSettings", JSON.stringify(y)),
        localStorage.setItem("dashboardPrimaryColor", y.primaryColor);
      const a = O(y.primaryColor);
      document.documentElement.style.setProperty("--primary", a);
      const t = O(G(y.primaryColor, -10));
      document.documentElement.style.setProperty("--accent", t),
        document.documentElement.style.setProperty("--ring", a),
        K(y.primaryColor),
        p({
          title: "Paleta de cores atualizada",
          description: "As cores foram aplicadas em todo o dashboard.",
        });
    },
    G = (a, t) => {
      const o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
      if (!o) return a;
      let s = parseInt(o[1], 16),
        c = parseInt(o[2], 16),
        x = parseInt(o[3], 16);
      return (
        (s = Math.max(0, Math.min(255, s + (s * t) / 100))),
        (c = Math.max(0, Math.min(255, c + (c * t) / 100))),
        (x = Math.max(0, Math.min(255, x + (x * t) / 100))),
        `#${Math.round(s).toString(16).padStart(2, "0")}${Math.round(c)
          .toString(16)
          .padStart(2, "0")}${Math.round(x).toString(16).padStart(2, "0")}`
      );
    },
    K = (a) => {
      const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
      if (!t) return;
      const o = parseInt(t[1], 16),
        s = parseInt(t[2], 16),
        c = parseInt(t[3], 16),
        x = `brightness(0) saturate(100%) invert(${
          (o + s + c) / 765
        }) sepia(1) saturate(5) hue-rotate(${
          (Math.atan2(Math.sqrt(3) * (s - c), 2 * o - s - c) * 180) / Math.PI
        }deg) brightness(${(o + s + c) / 382.5})`;
      document.documentElement.style.setProperty("--logo-filter", x);
    },
    O = (a) => {
      const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
      if (!t) return "264 73% 75%";
      let o = parseInt(t[1], 16) / 255,
        s = parseInt(t[2], 16) / 255,
        c = parseInt(t[3], 16) / 255;
      const x = Math.max(o, s, c),
        S = Math.min(o, s, c);
      let b = 0,
        I = 0,
        q = (x + S) / 2;
      if (x !== S) {
        const T = x - S;
        switch (((I = q > 0.5 ? T / (2 - x - S) : T / (x + S)), x)) {
          case o:
            b = ((s - c) / T + (s < c ? 6 : 0)) / 6;
            break;
          case s:
            b = ((c - o) / T + 2) / 6;
            break;
          case c:
            b = ((o - s) / T + 4) / 6;
            break;
        }
      }
      return `${Math.round(b * 360)} ${Math.round(I * 100)}% ${Math.round(
        q * 100
      )}%`;
    },
    re = [
      { name: "Roxo", value: "#9b87f5" },
      { name: "Azul", value: "#3b82f6" },
      { name: "Verde", value: "#10b981" },
      { name: "Laranja", value: "#f97316" },
      { name: "Rosa", value: "#ec4899" },
    ];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "mb-4 sm:mb-6",
        children: [
          e.jsx("h1", {
            className: "text-2xl sm:text-3xl font-bold mb-1 sm:mb-2",
            children: "Configurações",
          }),
          e.jsx("p", {
            className: "text-sm sm:text-base text-muted-foreground",
            children: "Personalize o sistema de acordo com suas necessidades",
          }),
        ],
      }),
      e.jsx(de, {
        className: "p-3 sm:p-6 bg-card border-border",
        children: e.jsxs(ce, {
          defaultValue: "empresa",
          children: [
            e.jsxs(me, {
              className: "mb-4 sm:mb-6 w-full flex-wrap h-auto",
              children: [
                e.jsx(E, {
                  value: "empresa",
                  className: "flex-1 min-w-[100px] text-xs sm:text-sm",
                  children: "Empresa",
                }),
                e.jsx(E, {
                  value: "pagamento",
                  className: "flex-1 min-w-[100px] text-xs sm:text-sm",
                  children: "Pagamento",
                }),
                e.jsx(E, {
                  value: "os-print",
                  className: "flex-1 min-w-[100px] text-xs sm:text-sm",
                  children: "Impressão OS",
                }),
                e.jsx(E, {
                  value: "fines",
                  className: "flex-1 min-w-[100px] text-xs sm:text-sm",
                  children: "Multas e Juros",
                }),
                e.jsx(E, {
                  value: "notificacoes",
                  className: "flex-1 min-w-[100px] text-xs sm:text-sm",
                  children: "Notificações",
                }),
                e.jsx(E, {
                  value: "aparencia",
                  className: "flex-1 min-w-[100px] text-xs sm:text-sm",
                  children: "Aparência",
                }),
              ],
            }),
            e.jsx(R, {
              value: "empresa",
              className: "space-y-4 sm:space-y-6",
              children: e.jsxs("div", {
                className: "space-y-3 sm:space-y-4",
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-base sm:text-lg",
                    children: "Informações da Empresa",
                  }),
                  e.jsx("p", {
                    className: "text-xs sm:text-sm text-muted-foreground",
                    children:
                      "Estas informações aparecerão nas ordens de serviço e relatórios",
                  }),
                  e.jsxs("div", {
                    className: "grid gap-3 sm:gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "logo",
                            className: "text-sm",
                            children: "Logo da Empresa",
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              i.logo &&
                                e.jsx("div", {
                                  className:
                                    "relative w-32 h-32 border border-border rounded-lg overflow-hidden",
                                  children: e.jsx("img", {
                                    src: i.logo,
                                    alt: "Logo",
                                    className: "w-full h-full object-contain",
                                  }),
                                }),
                              e.jsx(n, {
                                id: "logo",
                                type: "file",
                                accept: "image/*",
                                onChange: W,
                                className: "text-sm",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "company",
                            className: "text-sm",
                            children: "Nome da Empresa *",
                          }),
                          e.jsx(n, {
                            id: "company",
                            placeholder: "Nome da sua empresa",
                            value: i.name,
                            onChange: (a) => v({ ...i, name: a.target.value }),
                            className: "text-sm",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4",
                        children: [
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx(l, {
                                className: "text-sm",
                                children: "Tipo de Documento",
                              }),
                              e.jsxs(k, {
                                value: i.documentType,
                                onValueChange: (a) =>
                                  v({ ...i, documentType: a, cnpj: "" }),
                                children: [
                                  e.jsx(L, {
                                    className: "text-sm",
                                    children: e.jsx(D, {}),
                                  }),
                                  e.jsxs(M, {
                                    children: [
                                      e.jsx(j, {
                                        value: "cnpj",
                                        children: "CNPJ (Brasil)",
                                      }),
                                      e.jsx(j, {
                                        value: "nif",
                                        children: "NIF (Portugal)",
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
                              e.jsx(l, {
                                htmlFor: "cnpj",
                                className: "text-sm",
                                children:
                                  i.documentType === "cnpj" ? "CNPJ" : "NIF",
                              }),
                              e.jsx(n, {
                                id: "cnpj",
                                placeholder:
                                  i.documentType === "cnpj"
                                    ? "00.000.000/0000-00"
                                    : "000 000 000",
                                value: i.cnpj,
                                onChange: (a) =>
                                  v({ ...i, cnpj: a.target.value }),
                                className: "text-sm",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "phone",
                            className: "text-sm",
                            children: "Telefone *",
                          }),
                          e.jsx(n, {
                            id: "phone",
                            placeholder: "(00) 00000-0000",
                            value: i.phone,
                            onChange: (a) => v({ ...i, phone: a.target.value }),
                            className: "text-sm",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "email",
                            className: "text-sm",
                            children: "E-mail",
                          }),
                          e.jsx(n, {
                            id: "email",
                            type: "email",
                            placeholder: "contato@empresa.com",
                            value: i.email,
                            onChange: (a) => v({ ...i, email: a.target.value }),
                            className: "text-sm",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "address",
                            className: "text-sm",
                            children: "Endereço Completo *",
                          }),
                          e.jsx(z, {
                            id: "address",
                            placeholder:
                              "Rua, número, bairro, cidade - UF, CEP",
                            value: i.address,
                            onChange: (a) =>
                              v({ ...i, address: a.target.value }),
                            rows: 3,
                            className: "text-sm",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "currency",
                            className: "text-sm",
                            children: "Moeda do Sistema",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground mb-2",
                            children:
                              "Selecione a moeda que será exibida em todo o sistema (salva automaticamente)",
                          }),
                          e.jsxs(k, {
                            value: J,
                            onValueChange: async (a) => {
                              try {
                                await V(a),
                                  p({
                                    title: "Moeda atualizada",
                                    description: `Todos os valores agora serão exibidos em ${
                                      a === "BRL"
                                        ? "R$"
                                        : a === "USD"
                                        ? "$"
                                        : "€"
                                    }`,
                                  });
                              } catch {
                                p({
                                  title: "Erro ao atualizar moeda",
                                  description: "Tente novamente",
                                  variant: "destructive",
                                });
                              }
                            },
                            children: [
                              e.jsx(L, {
                                id: "currency",
                                className: "text-sm",
                                children: e.jsx(D, {
                                  placeholder: "Selecione a moeda",
                                }),
                              }),
                              e.jsxs(M, {
                                children: [
                                  e.jsx(j, {
                                    value: "BRL",
                                    children: "🇧🇷 Real Brasileiro (R$)",
                                  }),
                                  e.jsx(j, {
                                    value: "USD",
                                    children: "🇺🇸 Dólar Americano ($)",
                                  }),
                                  e.jsx(j, {
                                    value: "EUR",
                                    children: "🇪🇺 Euro (€)",
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
                          e.jsx(l, {
                            htmlFor: "dashboardLanguage",
                            className: "text-sm",
                            children: "Região do Sistema",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground mb-2",
                            children:
                              "Define a região para terminologias (CNPJ/NIF, PIX/MB Way)",
                          }),
                          e.jsxs(k, {
                            value: i.documentType === "nif" ? "pt-PT" : "pt-BR",
                            onValueChange: (a) => {
                              const t = a === "pt-PT";
                              v((o) => ({
                                ...o,
                                dashboardLanguage: a,
                                documentType: t ? "nif" : "cnpj",
                              })),
                                P((o) => ({
                                  ...o,
                                  paymentType: t ? "mbway" : "pix",
                                })),
                                localStorage.setItem("dashboardLanguage", a),
                                p({
                                  title: "Região atualizada",
                                  description: t
                                    ? "Sistema configurado para Portugal (NIF, MB Way)"
                                    : "Sistema configurado para Brasil (CNPJ, PIX)",
                                });
                            },
                            children: [
                              e.jsx(L, {
                                id: "dashboardLanguage",
                                className: "text-sm",
                                children: e.jsx(D, {
                                  placeholder: "Selecione a região",
                                }),
                              }),
                              e.jsxs(M, {
                                position: "popper",
                                sideOffset: 4,
                                children: [
                                  e.jsx(j, {
                                    value: "pt-BR",
                                    children: "🇧🇷 Brasil (CNPJ, PIX)",
                                  }),
                                  e.jsx(j, {
                                    value: "pt-PT",
                                    children: "🇵🇹 Portugal (NIF, MB Way)",
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
                          e.jsx(l, {
                            htmlFor: "pixqr",
                            className: "text-sm",
                            children: "QR Code PIX (para Promissórias)",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground mb-2",
                            children:
                              "Faça upload da imagem do QR Code PIX que aparecerá nas promissórias",
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              i.pixQrcode &&
                                e.jsx("div", {
                                  className:
                                    "relative w-32 h-32 border border-border rounded-lg overflow-hidden bg-white p-2",
                                  children: e.jsx("img", {
                                    src: i.pixQrcode,
                                    alt: "QR Code PIX",
                                    className: "w-full h-full object-contain",
                                  }),
                                }),
                              e.jsx(n, {
                                id: "pixqr",
                                type: "file",
                                accept: "image/*",
                                onChange: X,
                                className: "text-sm",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(C, {
                    onClick: Y,
                    className: "gap-2 w-full sm:w-auto text-sm",
                    children: [
                      e.jsx(A, { className: "w-4 h-4" }),
                      "Salvar Alterações",
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(R, {
              value: "pagamento",
              className: "space-y-4 sm:space-y-6",
              children: e.jsxs("div", {
                className: "space-y-3 sm:space-y-4",
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-base sm:text-lg",
                    children: "Configurações de Pagamento",
                  }),
                  e.jsx("p", {
                    className: "text-xs sm:text-sm text-muted-foreground",
                    children:
                      "Configure suas informações de pagamento que serão usadas automaticamente nas promissórias",
                  }),
                  e.jsxs("div", {
                    className: "grid gap-3 sm:gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            className: "text-sm",
                            children: "Tipo de Pagamento",
                          }),
                          e.jsxs(k, {
                            value: g.paymentType,
                            onValueChange: (a) =>
                              P({ ...g, paymentType: a, pixKey: "" }),
                            children: [
                              e.jsx(L, {
                                className: "text-sm",
                                children: e.jsx(D, {}),
                              }),
                              e.jsxs(M, {
                                children: [
                                  e.jsx(j, {
                                    value: "pix",
                                    children: "PIX (Brasil)",
                                  }),
                                  e.jsx(j, {
                                    value: "mbway",
                                    children: "MB Way (Portugal)",
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
                          e.jsx(l, {
                            htmlFor: "pixKey",
                            className: "text-sm",
                            children:
                              g.paymentType === "pix"
                                ? "Chave PIX *"
                                : "Telefone MB Way *",
                          }),
                          e.jsx(n, {
                            id: "pixKey",
                            placeholder:
                              g.paymentType === "pix"
                                ? "chave@pix.com"
                                : "(+351) 912 345 678",
                            value: g.pixKey,
                            onChange: (a) =>
                              P({ ...g, pixKey: a.target.value }),
                            className: "text-sm",
                          }),
                          g.paymentType === "mbway" &&
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Formato: (+351) 912 345 678",
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "receiverName",
                            className: "text-sm",
                            children: "Nome do Recebedor *",
                          }),
                          e.jsx(n, {
                            id: "receiverName",
                            placeholder: "Nome completo do recebedor",
                            value: g.receiverName,
                            onChange: (a) =>
                              P({ ...g, receiverName: a.target.value }),
                            className: "text-sm",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "bank",
                            className: "text-sm",
                            children:
                              g.paymentType === "pix"
                                ? "Banco *"
                                : "Banco/Instituição",
                          }),
                          e.jsx(n, {
                            id: "bank",
                            placeholder:
                              g.paymentType === "pix"
                                ? "Nome do banco"
                                : "MB Way",
                            value: g.bank,
                            onChange: (a) => P({ ...g, bank: a.target.value }),
                            className: "text-sm",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(C, {
                    onClick: ae,
                    className: "gap-2 w-full sm:w-auto text-sm",
                    children: [
                      e.jsx(A, { className: "w-4 h-4" }),
                      "Salvar Configurações",
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(R, {
              value: "os-print",
              className: "space-y-4 sm:space-y-6",
              children: e.jsxs("div", {
                className: "space-y-3 sm:space-y-4",
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-base sm:text-lg",
                    children: "Cores da Ordem de Serviço",
                  }),
                  e.jsx("p", {
                    className: "text-xs sm:text-sm text-muted-foreground",
                    children:
                      "Personalize as cores que aparecerão na OS impressa",
                  }),
                  e.jsxs("div", {
                    className: "grid gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "osPrimaryColor",
                            className: "text-sm",
                            children: "Cor Principal",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(n, {
                                id: "osPrimaryColor",
                                type: "color",
                                value: r.primaryColor,
                                onChange: (a) =>
                                  u({ ...r, primaryColor: a.target.value }),
                                className: "w-16 h-10",
                              }),
                              e.jsx(n, {
                                value: r.primaryColor,
                                onChange: (a) =>
                                  u({ ...r, primaryColor: a.target.value }),
                                placeholder: "#3b82f6",
                                className: "flex-1 text-sm",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "osSecondaryColor",
                            className: "text-sm",
                            children: "Cor Secundária (Fundo)",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(n, {
                                id: "osSecondaryColor",
                                type: "color",
                                value: r.secondaryColor,
                                onChange: (a) =>
                                  u({ ...r, secondaryColor: a.target.value }),
                                className: "w-16 h-10",
                              }),
                              e.jsx(n, {
                                value: r.secondaryColor,
                                onChange: (a) =>
                                  u({ ...r, secondaryColor: a.target.value }),
                                placeholder: "#f0f0ff",
                                className: "flex-1 text-sm",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "osTextColor",
                            className: "text-sm",
                            children: "Cor do Texto",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(n, {
                                id: "osTextColor",
                                type: "color",
                                value: r.textColor,
                                onChange: (a) =>
                                  u({ ...r, textColor: a.target.value }),
                                className: "w-16 h-10",
                              }),
                              e.jsx(n, {
                                value: r.textColor,
                                onChange: (a) =>
                                  u({ ...r, textColor: a.target.value }),
                                placeholder: "#000000",
                                className: "flex-1 text-sm",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "osFooterColor",
                            className: "text-sm",
                            children: "Cor do Texto do Rodapé",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(n, {
                                id: "osFooterColor",
                                type: "color",
                                value: r.footerColor,
                                onChange: (a) =>
                                  u({ ...r, footerColor: a.target.value }),
                                className: "w-16 h-10",
                              }),
                              e.jsx(n, {
                                value: r.footerColor,
                                onChange: (a) =>
                                  u({ ...r, footerColor: a.target.value }),
                                placeholder: "#64748b",
                                className: "flex-1 text-sm",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-[11px] text-muted-foreground",
                            children:
                              'Cor aplicada ao texto "Documento gerado em..." no rodapé da OS impressa.',
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "border-t border-border pt-4 mt-4",
                    children: [
                      e.jsx("h4", {
                        className: "font-semibold text-base mb-3",
                        children: "Cor do PDF de Orçamento",
                      }),
                      e.jsx("p", {
                        className:
                          "text-xs sm:text-sm text-muted-foreground mb-4",
                        children:
                          "Personalize a cor principal do PDF de orçamentos",
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "quotationPdfColor",
                            className: "text-sm",
                            children: "Cor do Orçamento",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(n, {
                                id: "quotationPdfColor",
                                type: "color",
                                value: r.quotationPdfColor,
                                onChange: (a) =>
                                  u({
                                    ...r,
                                    quotationPdfColor: a.target.value,
                                  }),
                                className: "w-16 h-10",
                              }),
                              e.jsx(n, {
                                value: r.quotationPdfColor,
                                onChange: (a) =>
                                  u({
                                    ...r,
                                    quotationPdfColor: a.target.value,
                                  }),
                                placeholder: "#1e3a5f",
                                className: "flex-1 text-sm",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children:
                              "Esta cor será usada no cabeçalho, tabelas e detalhes do PDF de orçamentos",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "border-t border-border pt-4 mt-4",
                    children: [
                      e.jsx("h4", {
                        className: "font-semibold text-base mb-3",
                        children: "Termo de Responsabilidade",
                      }),
                      e.jsx("p", {
                        className:
                          "text-xs sm:text-sm text-muted-foreground mb-4",
                        children:
                          "Personalize o título e texto do termo que aparece no PDF da OS",
                      }),
                      e.jsxs("div", {
                        className: "grid gap-4",
                        children: [
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx(l, {
                                htmlFor: "termTitle",
                                className: "text-sm",
                                children: "Título do Termo",
                              }),
                              e.jsx(n, {
                                id: "termTitle",
                                value: r.termTitle,
                                onChange: (a) =>
                                  u({ ...r, termTitle: a.target.value }),
                                placeholder: "TERMO DE RESPONSABILIDADE",
                                className: "text-sm",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx(l, {
                                htmlFor: "termText",
                                className: "text-sm",
                                children: "Texto do Termo",
                              }),
                              e.jsx(z, {
                                id: "termText",
                                value: r.termText,
                                onChange: (a) =>
                                  u({ ...r, termText: a.target.value }),
                                placeholder:
                                  "Texto completo do termo de responsabilidade...",
                                className: "text-sm min-h-[150px]",
                                rows: 6,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "border-t border-border pt-4 mt-4",
                    children: [
                      e.jsx("h4", {
                        className: "font-semibold text-base mb-3",
                        children: "Termo de Garantia",
                      }),
                      e.jsx("p", {
                        className:
                          "text-xs sm:text-sm text-muted-foreground mb-4",
                        children:
                          "Personalize o título e texto do termo de garantia gerado a partir da OS",
                      }),
                      e.jsxs("div", {
                        className: "grid gap-4",
                        children: [
                          e.jsxs("div", {
                            className: "grid sm:grid-cols-2 gap-4",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsx(l, {
                                    htmlFor: "warrantyTitle",
                                    className: "text-sm",
                                    children: "Título",
                                  }),
                                  e.jsx(n, {
                                    id: "warrantyTitle",
                                    value: r.warrantyTitle,
                                    onChange: (a) =>
                                      u({
                                        ...r,
                                        warrantyTitle: a.target.value,
                                      }),
                                    placeholder: "TERMO DE GARANTIA",
                                    className: "text-sm",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsx(l, {
                                    htmlFor: "warrantySubtitle",
                                    className: "text-sm",
                                    children: "Subtítulo",
                                  }),
                                  e.jsx(n, {
                                    id: "warrantySubtitle",
                                    value: r.warrantySubtitle,
                                    onChange: (a) =>
                                      u({
                                        ...r,
                                        warrantySubtitle: a.target.value,
                                      }),
                                    placeholder:
                                      "Documento de garantia do serviço prestado",
                                    className: "text-sm",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx(l, {
                                htmlFor: "warrantyColor",
                                className: "text-sm",
                                children: "Cor de destaque do PDF",
                              }),
                              e.jsxs("div", {
                                className: "flex gap-2 items-center",
                                children: [
                                  e.jsx(n, {
                                    id: "warrantyColor",
                                    type: "color",
                                    value: r.warrantyColor,
                                    onChange: (a) =>
                                      u({
                                        ...r,
                                        warrantyColor: a.target.value,
                                      }),
                                    className: "w-16 h-10 p-1 cursor-pointer",
                                  }),
                                  e.jsx(n, {
                                    value: r.warrantyColor,
                                    onChange: (a) =>
                                      u({
                                        ...r,
                                        warrantyColor: a.target.value,
                                      }),
                                    placeholder: "#1e3a5f",
                                    className: "text-sm flex-1",
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children:
                                  "Aplicada no cabeçalho, faixa de garantia e títulos de seção.",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx(l, {
                                htmlFor: "warrantyText",
                                className: "text-sm",
                                children: "Condições da garantia (corpo)",
                              }),
                              e.jsx(z, {
                                id: "warrantyText",
                                value: r.warrantyText,
                                onChange: (a) =>
                                  u({ ...r, warrantyText: a.target.value }),
                                placeholder:
                                  "Texto completo do termo de garantia...",
                                className: "text-sm min-h-[220px]",
                                rows: 12,
                              }),
                              e.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children:
                                  "Use uma linha em branco entre parágrafos para separá-los no PDF.",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx(l, {
                                htmlFor: "warrantyAck",
                                className: "text-sm",
                                children: "Declaração de aceite (assinatura)",
                              }),
                              e.jsx(z, {
                                id: "warrantyAck",
                                value: r.warrantyAcknowledgement,
                                onChange: (a) =>
                                  u({
                                    ...r,
                                    warrantyAcknowledgement: a.target.value,
                                  }),
                                placeholder:
                                  "Declaração que aparece acima das assinaturas...",
                                className: "text-sm min-h-[80px]",
                                rows: 3,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx(l, {
                                htmlFor: "warrantyFooter",
                                className: "text-sm",
                                children: "Rodapé do documento",
                              }),
                              e.jsx(n, {
                                id: "warrantyFooter",
                                value: r.warrantyFooter,
                                onChange: (a) =>
                                  u({ ...r, warrantyFooter: a.target.value }),
                                placeholder:
                                  "Texto exibido no rodapé de todas as páginas",
                                className: "text-sm",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-2",
                    children: [
                      e.jsxs(C, {
                        onClick: Z,
                        className: "gap-2 w-full sm:w-auto text-sm",
                        children: [
                          e.jsx(A, { className: "w-4 h-4" }),
                          "Salvar Configurações",
                        ],
                      }),
                      e.jsxs(C, {
                        variant: "outline",
                        onClick: async () => {
                          if (!m) return;
                          u(d);
                          const { data: a } = await h
                              .from("user_settings")
                              .select("id")
                              .eq("user_id", m.id)
                              .maybeSingle(),
                            t = {
                              user_id: m.id,
                              os_print_settings: {
                                primaryColor: d.primaryColor,
                                secondaryColor: d.secondaryColor,
                                textColor: d.textColor,
                                footerColor: d.footerColor,
                              },
                              os_term_title: d.termTitle,
                              os_term_text: d.termText,
                              quotation_pdf_color: d.quotationPdfColor,
                              warranty_term_title: d.warrantyTitle,
                              warranty_term_text: d.warrantyText,
                              warranty_term_subtitle: d.warrantySubtitle,
                              warranty_term_color: d.warrantyColor,
                              warranty_term_acknowledgement:
                                d.warrantyAcknowledgement,
                              warranty_term_footer: d.warrantyFooter,
                            },
                            { error: o } = a
                              ? await h
                                  .from("user_settings")
                                  .update(t)
                                  .eq("id", a.id)
                              : await h.from("user_settings").insert([t]);
                          if (o) {
                            p({
                              title: "Erro ao reverter configurações",
                              variant: "destructive",
                            });
                            return;
                          }
                          p({
                            title: "Configurações restauradas",
                            description:
                              "As cores e termos foram revertidos para o padrão e salvos.",
                          });
                        },
                        className: "gap-2 w-full sm:w-auto text-sm",
                        children: [
                          e.jsx(xe, { className: "w-4 h-4" }),
                          "Reverter ao Padrão",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(R, {
              value: "fines",
              className: "space-y-4 sm:space-y-6",
              children: e.jsxs("div", {
                className: "space-y-3 sm:space-y-4",
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-base sm:text-lg",
                    children: "Multas e Juros para Parcelas Vencidas",
                  }),
                  e.jsx("p", {
                    className: "text-xs sm:text-sm text-muted-foreground",
                    children:
                      "Configure as taxas que serão aplicadas automaticamente para parcelas de promissórias vencidas",
                  }),
                  e.jsxs("div", {
                    className: "grid gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "fineRate",
                            className: "text-sm",
                            children: "Taxa de Multa (%)",
                          }),
                          e.jsx(n, {
                            id: "fineRate",
                            type: "number",
                            step: "0.1",
                            min: "0",
                            value: f.fineRate,
                            onChange: (a) =>
                              U({
                                ...f,
                                fineRate: parseFloat(a.target.value) || 0,
                              }),
                            placeholder: "2.0",
                            className: "text-sm",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children:
                              "Multa aplicada uma única vez quando a parcela vence (ex: 2% = R$ 2,00 em uma parcela de R$ 100,00)",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "dailyInterestRate",
                            className: "text-sm",
                            children: "Taxa de Juros Diária (%)",
                          }),
                          e.jsx(n, {
                            id: "dailyInterestRate",
                            type: "number",
                            step: "0.001",
                            min: "0",
                            value: f.dailyInterestRate,
                            onChange: (a) =>
                              U({
                                ...f,
                                dailyInterestRate:
                                  parseFloat(a.target.value) || 0,
                              }),
                            placeholder: "0.033",
                            className: "text-sm",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children:
                              "Juros aplicados por dia de atraso (ex: 0,033% ao dia = 1% ao mês)",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "p-4 rounded-lg bg-muted border border-border",
                        children: [
                          e.jsx("h4", {
                            className: "font-medium text-sm mb-2",
                            children: "Exemplo de Cálculo",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground mb-3",
                            children:
                              "Parcela de R$ 100,00 vencida há 10 dias:",
                          }),
                          e.jsxs("div", {
                            className: "space-y-1 text-xs",
                            children: [
                              e.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  e.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Valor Original:",
                                  }),
                                  e.jsx("span", {
                                    className: "font-medium",
                                    children: "R$ 100,00",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  e.jsxs("span", {
                                    className: "text-muted-foreground",
                                    children: ["Multa (", f.fineRate, "%):"],
                                  }),
                                  e.jsxs("span", {
                                    className: "font-medium",
                                    children: [
                                      "R$ ",
                                      ((100 * f.fineRate) / 100).toFixed(2),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  e.jsxs("span", {
                                    className: "text-muted-foreground",
                                    children: [
                                      "Juros (10 dias × ",
                                      f.dailyInterestRate,
                                      "%):",
                                    ],
                                  }),
                                  e.jsxs("span", {
                                    className: "font-medium",
                                    children: [
                                      "R$ ",
                                      (
                                        ((100 * f.dailyInterestRate) / 100) *
                                        10
                                      ).toFixed(2),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "h-px bg-border my-2",
                              }),
                              e.jsxs("div", {
                                className: "flex justify-between text-base",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: "Total:",
                                  }),
                                  e.jsxs("span", {
                                    className: "font-bold text-primary",
                                    children: [
                                      "R$ ",
                                      (
                                        100 +
                                        (100 * f.fineRate) / 100 +
                                        ((100 * f.dailyInterestRate) / 100) * 10
                                      ).toFixed(2),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(C, {
                    onClick: ee,
                    className: "gap-2 w-full sm:w-auto text-sm",
                    children: [
                      e.jsx(A, { className: "w-4 h-4" }),
                      "Salvar Configurações",
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(R, {
              value: "notificacoes",
              className: "space-y-4 sm:space-y-6",
              children: e.jsxs("div", {
                className: "space-y-3 sm:space-y-4",
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-base sm:text-lg",
                    children: "Preferências de Notificação",
                  }),
                  e.jsxs("div", {
                    className: "space-y-3 sm:space-y-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center justify-between p-3 sm:p-4 border border-border rounded-lg",
                        children: [
                          e.jsxs("div", {
                            className: "flex-1 min-w-0 mr-3",
                            children: [
                              e.jsx("p", {
                                className: "font-medium text-sm sm:text-base",
                                children: "Notificações de Email",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs sm:text-sm text-muted-foreground",
                                children: "Receba atualizações de OS por email",
                              }),
                            ],
                          }),
                          e.jsx(B, {
                            checked: N.email,
                            onCheckedChange: (a) => F({ ...N, email: a }),
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
                                children: "Notificações Push",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Alertas em tempo real no navegador",
                              }),
                            ],
                          }),
                          e.jsx(B, {
                            checked: N.push,
                            onCheckedChange: (a) => F({ ...N, push: a }),
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
                                children: "Notificações de WhatsApp",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Receba alertas via WhatsApp",
                              }),
                            ],
                          }),
                          e.jsx(B, {
                            checked: N.whatsapp,
                            onCheckedChange: (a) => F({ ...N, whatsapp: a }),
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
                                children: "Alertas de Estoque Baixo",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children:
                                  "Avisos quando peças estiverem acabando",
                              }),
                            ],
                          }),
                          e.jsx(B, {
                            checked: N.lowStock,
                            onCheckedChange: (a) => F({ ...N, lowStock: a }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(C, {
                    onClick: se,
                    className: "gap-2 w-full sm:w-auto text-sm",
                    children: [
                      e.jsx(A, { className: "w-4 h-4" }),
                      "Salvar Preferências",
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(R, {
              value: "aparencia",
              className: "space-y-4 sm:space-y-6",
              children: e.jsxs("div", {
                className: "space-y-3 sm:space-y-4",
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-base sm:text-lg",
                    children: "Personalização Visual",
                  }),
                  e.jsxs("div", {
                    className: "space-y-3 sm:space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          e.jsx(l, { children: "Tema do Sistema" }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Escolha entre o tema claro ou escuro",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-3",
                            children: [
                              e.jsxs(C, {
                                variant:
                                  y.theme === "light" ? "default" : "outline",
                                onClick: () => Q("light"),
                                className: "flex-1 gap-2",
                                children: [
                                  e.jsx(ge, { className: "w-4 h-4" }),
                                  "Tema Claro",
                                ],
                              }),
                              e.jsxs(C, {
                                variant:
                                  y.theme === "dark" ? "default" : "outline",
                                onClick: () => Q("dark"),
                                className: "flex-1 gap-2",
                                children: [
                                  e.jsx(pe, { className: "w-4 h-4" }),
                                  "Tema Escuro",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(l, {
                            htmlFor: "sidebarLogo",
                            children: "Logo da Empresa (Sidebar)",
                          }),
                          e.jsx(n, {
                            id: "sidebarLogo",
                            type: "file",
                            accept: "image/*",
                            onChange: H,
                          }),
                          e.jsxs("p", {
                            className: "text-xs text-muted-foreground",
                            children: [
                              "⚠️ ",
                              e.jsx("strong", { children: "Importante:" }),
                              " Envie uma logo SEM FUNDO (PNG transparente) para melhor resultado",
                            ],
                          }),
                          y.sidebarLogo &&
                            e.jsxs("div", {
                              className:
                                "mt-2 p-4 border border-border rounded-lg bg-card",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-sm text-muted-foreground mb-2",
                                  children: "Preview:",
                                }),
                                e.jsx("img", {
                                  src: y.sidebarLogo,
                                  alt: "Logo Preview",
                                  className: "w-16 h-16 object-contain",
                                  style: { filter: "none" },
                                }),
                              ],
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          e.jsx(l, {
                            children: "Paleta de Cores do Dashboard",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children:
                              "Escolha a cor principal que será aplicada em todo o dashboard",
                          }),
                          e.jsx("div", {
                            className: "flex flex-wrap gap-3",
                            children: re.map((a) =>
                              e.jsxs(
                                "button",
                                {
                                  onClick: () =>
                                    w({ ...y, primaryColor: a.value }),
                                  className: `flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-smooth ${
                                    y.primaryColor === a.value
                                      ? "border-primary bg-primary/10"
                                      : "border-border hover:border-primary/50"
                                  }`,
                                  children: [
                                    e.jsx("div", {
                                      className: "w-12 h-12 rounded-lg",
                                      style: { backgroundColor: a.value },
                                    }),
                                    e.jsx("span", {
                                      className: "text-xs font-medium",
                                      children: a.name,
                                    }),
                                  ],
                                },
                                a.value
                              )
                            ),
                          }),
                          e.jsxs("div", {
                            className: "space-y-2 mt-4",
                            children: [
                              e.jsx(l, {
                                htmlFor: "customColor",
                                children: "Cor Personalizada",
                              }),
                              e.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  e.jsx(n, {
                                    id: "customColor",
                                    type: "color",
                                    value: y.primaryColor,
                                    onChange: (a) =>
                                      w({ ...y, primaryColor: a.target.value }),
                                    className: "w-20 h-10",
                                  }),
                                  e.jsx(n, {
                                    value: y.primaryColor,
                                    onChange: (a) =>
                                      w({ ...y, primaryColor: a.target.value }),
                                    placeholder: "#9b87f5",
                                    className: "flex-1",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-3 mt-6",
                        children: [
                          e.jsx(l, { children: "Moeda do Sistema" }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children:
                              "Escolha a moeda que será usada para exibir valores em todo o sistema",
                          }),
                          e.jsxs(k, {
                            value: J,
                            onValueChange: async (a) => {
                              try {
                                await V(a),
                                  p({
                                    title: "Moeda alterada!",
                                    description:
                                      "A moeda do sistema foi atualizada com sucesso.",
                                  });
                              } catch {
                                p({
                                  title: "Erro ao alterar moeda",
                                  description:
                                    "Não foi possível atualizar a moeda.",
                                  variant: "destructive",
                                });
                              }
                            },
                            children: [
                              e.jsx(L, {
                                className: "w-full sm:w-64",
                                children: e.jsx(D, {
                                  placeholder: "Selecione a moeda",
                                }),
                              }),
                              e.jsxs(M, {
                                children: [
                                  e.jsx(j, {
                                    value: "BRL",
                                    children: "🇧🇷 BRL (R$) - Real Brasileiro",
                                  }),
                                  e.jsx(j, {
                                    value: "USD",
                                    children: "🇺🇸 USD ($) - Dólar Americano",
                                  }),
                                  e.jsx(j, {
                                    value: "EUR",
                                    children: "🇪🇺 EUR (€) - Euro",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(C, {
                    onClick: te,
                    className: "gap-2 w-full sm:w-auto text-sm",
                    children: [
                      e.jsx(A, { className: "w-4 h-4" }),
                      "Aplicar Cores",
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
};
export { je as default };
