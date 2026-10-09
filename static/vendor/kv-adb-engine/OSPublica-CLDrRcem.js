import {
  bi as oe,
  bj as O,
  bk as U,
  bF as X,
  y as ne,
  bG as ie,
  r as N,
  bH as ce,
  w as $,
  j as e,
  bx as z,
  bI as M,
  bJ as de,
  a7 as me,
  b4 as xe,
  B as q,
  bK as he,
  bL as pe,
  C as Q,
  bM as be,
  bN as ge,
  K as ue,
  S as fe,
  bO as se,
  ba as ae,
  f as ye,
  bw as Z,
  bA as we,
  bP as Ne,
  bz as ee,
  bQ as ve,
  N as je,
  bR as Ce,
  D as ke,
  c as _e,
  a_ as Fe,
  d as Se,
  X as De,
  h as Pe,
  bS as Te,
  bT as te,
  bU as J,
} from "./index-V8ZHCWL2.js";
async function Re(d) {
  return new Promise((b) => {
    const s = new Image();
    (s.crossOrigin = "anonymous"),
      (s.onload = () => {
        try {
          const t = document.createElement("canvas");
          (t.width = s.width), (t.height = s.height);
          const i = t.getContext("2d");
          i
            ? (i.drawImage(s, 0, 0),
              b({
                dataUrl: t.toDataURL("image/png"),
                width: s.width,
                height: s.height,
              }))
            : b(null);
        } catch {
          b(null);
        }
      }),
      (s.onerror = () => b(null)),
      (s.src = d);
  });
}
async function Ae(d, b, s = "BRL") {
  const t = new oe(),
    i = t.internal.pageSize.width,
    I = t.internal.pageSize.height,
    l = 12,
    h = i - l * 2;
  let r = l;
  const g = { r: 59, g: 130, b: 246 },
    c = { r: 30, g: 41, b: 59 },
    p = { r: 100, g: 116, b: 139 },
    C = { r: 241, g: 245, b: 249 },
    f = { r: 34, g: 197, b: 94 },
    F = 40;
  t.setFillColor(c.r, c.g, c.b),
    t.rect(0, 0, i, F, "F"),
    t.setFillColor(g.r, g.g, g.b),
    t.rect(0, F, i, 3, "F");
  let S = l;
  if (b.companyLogo) {
    const n = await Re(b.companyLogo);
    if (n) {
      const m = F - 10;
      let j = 50,
        P = j / (n.width / n.height);
      P > m && ((P = m), (j = P * (n.width / n.height)));
      const W = (F - P) / 2;
      try {
        t.addImage(n.dataUrl, "PNG", l, W, j, P), (S = l + j + 8);
      } catch {}
    }
  }
  t.setTextColor(255, 255, 255),
    t.setFontSize(14),
    t.setFont("helvetica", "bold"),
    t.text(b.companyName || "Assistência Técnica", S, 14),
    t.setFontSize(8),
    t.setFont("helvetica", "normal"),
    t.setTextColor(200, 200, 200);
  let y = 21;
  b.companyPhone && (t.text(`Tel: ${b.companyPhone}`, S, y), (y += 5)),
    b.companyCnpj && (t.text(`CNPJ/NIF: ${b.companyCnpj}`, S, y), (y += 5)),
    b.companyAddress &&
      t
        .splitTextToSize(b.companyAddress, 80)
        .slice(0, 2)
        .forEach((m) => {
          t.text(m, S, y), (y += 4);
        });
  const T = 45,
    B = 28,
    A = i - l - T,
    R = 6;
  t.setFillColor(g.r, g.g, g.b),
    t.roundedRect(A, R, T, B, 3, 3, "F"),
    t.setTextColor(255, 255, 255),
    t.setFontSize(7),
    t.setFont("helvetica", "bold"),
    t.text("2ª VIA - CLIENTE", A + T / 2, R + 8, { align: "center" }),
    t.setFontSize(12),
    t.text(`OS #${d.orderNumber || "---"}`, A + T / 2, R + 18, {
      align: "center",
    }),
    t.setFontSize(6),
    t.setFont("helvetica", "normal"),
    t.text(O(new Date(), "dd/MM/yyyy", { locale: U }), A + T / 2, R + 24, {
      align: "center",
    }),
    (r = F + 10);
  const _ = (n, m) => {
    t.setFillColor(C.r, C.g, C.b),
      t.roundedRect(l, r, h, 8, 1, 1, "F"),
      t.setFontSize(9),
      t.setFont("helvetica", "bold"),
      t.setTextColor(c.r, c.g, c.b),
      t.text(n, l + 4, r + 5.5),
      (r += 10);
  };
  _("DADOS DO CLIENTE"),
    t.setDrawColor(230, 230, 230),
    t.setFillColor(255, 255, 255),
    t.roundedRect(l, r, h, 22, 2, 2, "FD"),
    t.setFontSize(11),
    t.setFont("helvetica", "bold"),
    t.setTextColor(c.r, c.g, c.b),
    t.text(d.clientName, l + 5, r + 8),
    t.setFontSize(8),
    t.setFont("helvetica", "normal"),
    t.setTextColor(p.r, p.g, p.b);
  const w = [];
  d.clientPhone && w.push(`Tel: ${d.clientPhone}`),
    d.clientCPF && w.push(`CPF/NIF: ${d.clientCPF}`),
    w.length > 0 && t.text(w.join("  |  "), l + 5, r + 16),
    (r += 28),
    _("INFORMAÇÕES DO APARELHO"),
    t.setDrawColor(230, 230, 230),
    t.setFillColor(255, 255, 255),
    t.roundedRect(l, r, h, 28, 2, 2, "FD");
  const D = l + 5,
    E = l + h / 2;
  t.setFontSize(8),
    t.setFont("helvetica", "bold"),
    t.setTextColor(p.r, p.g, p.b),
    t.text("Modelo:", D, r + 7),
    t.text("IMEI:", D, r + 15),
    t.text("Nº Série:", E, r + 7),
    t.text("Data Entrada:", E, r + 15),
    t.setFont("helvetica", "normal"),
    t.setTextColor(c.r, c.g, c.b),
    t.text(d.deviceModel || "N/A", D + 20, r + 7),
    t.text(d.imei || "N/A", D + 15, r + 15),
    t.text(d.serial || "N/A", E + 22, r + 7),
    t.text(
      O(new Date(d.entryDate), "dd/MM/yyyy", { locale: U }),
      E + 32,
      r + 15
    ),
    d.technician &&
      (t.setFont("helvetica", "bold"),
      t.setTextColor(p.r, p.g, p.b),
      t.text("Técnico:", D, r + 23),
      t.setFont("helvetica", "normal"),
      t.setTextColor(c.r, c.g, c.b),
      t.text(d.technician, D + 20, r + 23)),
    (r += 34),
    _("SERVIÇO REALIZADO");
  const V = t.splitTextToSize(d.reportedProblem, h - 10),
    H = Math.max(V.length * 5 + 8, 18);
  if (
    (t.setFillColor(255, 255, 255),
    t.setDrawColor(230, 230, 230),
    t.roundedRect(l, r, h, H, 2, 2, "FD"),
    t.setFontSize(9),
    t.setFont("helvetica", "normal"),
    t.setTextColor(c.r, c.g, c.b),
    V.slice(0, 6).forEach((n, m) => {
      t.text(n, l + 5, r + 6 + m * 5);
    }),
    (r += H + 6),
    d.entryChecklist && d.entryChecklist.length > 0)
  ) {
    const n = d.entryChecklist.filter((m) => m.checked);
    if (n.length > 0) {
      _("CHECKLIST DE ENTRADA");
      const m = 4,
        u = h / m,
        P = Math.ceil(n.length / m) * 6 + 6;
      t.setFillColor(255, 255, 255),
        t.setDrawColor(230, 230, 230),
        t.roundedRect(l, r, h, P, 2, 2, "FD"),
        t.setFontSize(7),
        t.setFont("helvetica", "normal"),
        t.setTextColor(c.r, c.g, c.b),
        n.forEach((W, G) => {
          const re = G % m,
            le = Math.floor(G / m),
            Y = l + 4 + re * u,
            K = r + 5 + le * 6;
          t.setTextColor(f.r, f.g, f.b),
            t.text("✓", Y, K),
            t.setTextColor(c.r, c.g, c.b),
            t.text(W.label.substring(0, 18), Y + 4, K);
        }),
        (r += P + 6);
    }
  }
  if (d.usedParts && d.usedParts.length > 0) {
    _("PEÇAS UTILIZADAS");
    const n = d.usedParts.length * 6 + 10;
    t.setFillColor(255, 255, 255),
      t.setDrawColor(230, 230, 230),
      t.roundedRect(l, r, h, n, 2, 2, "FD"),
      t.setFontSize(7),
      t.setFont("helvetica", "bold"),
      t.setTextColor(p.r, p.g, p.b),
      t.text("PEÇA", l + 5, r + 5),
      t.text("QTD", l + h - 20, r + 5),
      t.setFont("helvetica", "normal"),
      t.setTextColor(c.r, c.g, c.b),
      d.usedParts.forEach((m, u) => {
        const j = r + 10 + u * 6;
        t.text(m.partName.substring(0, 50), l + 5, j),
          t.text(m.quantity.toString(), l + h - 18, j);
      }),
      (r += n + 6);
  }
  if (d.additionalNotes) {
    _("OBSERVAÇÕES");
    const n = t.splitTextToSize(d.additionalNotes, h - 10),
      m = Math.min(n.length * 5 + 8, 25);
    t.setFillColor(255, 253, 230),
      t.setDrawColor(230, 220, 180),
      t.roundedRect(l, r, h, m, 2, 2, "FD"),
      t.setFontSize(8),
      t.setFont("helvetica", "italic"),
      t.setTextColor(100, 90, 60),
      n.slice(0, 4).forEach((u, j) => {
        t.text(u, l + 5, r + 6 + j * 5);
      }),
      (r += m + 6);
  }
  const v = 32;
  t.setFillColor(f.r, f.g, f.b),
    t.roundedRect(l, r, h, v, 3, 3, "F"),
    t.setTextColor(255, 255, 255),
    t.setFontSize(9),
    t.setFont("helvetica", "bold"),
    t.text("VALOR DO SERVIÇO", l + 8, r + 10),
    t.setFontSize(18);
  const k = parseFloat(d.serviceValue) || 0,
    L = parseFloat(d.downPayment || "0") || 0,
    o = k - L;
  t.text(X(k, s), l + 8, r + 24),
    t.setFontSize(8),
    t.setFont("helvetica", "normal");
  const a = i - l - 55;
  if (
    (L > 0 &&
      (t.text(`Sinal: ${X(L, s)}`, a, r + 12),
      t.text(`Restante: ${X(o, s)}`, a, r + 20)),
    t.setFillColor(255, 255, 255),
    t.roundedRect(i - l - 45, r + 22, 40, 8, 2, 2, "F"),
    t.setFontSize(7),
    t.setFont("helvetica", "bold"),
    t.setTextColor(f.r, f.g, f.b),
    t.text("✓ CONCLUÍDO", i - l - 25, r + 27.5, { align: "center" }),
    (r += v + 8),
    d.warrantyDays && d.warrantyDays > 0)
  ) {
    t.setFillColor(g.r, g.g, g.b),
      t.roundedRect(l, r, h, 14, 2, 2, "F"),
      t.setTextColor(255, 255, 255),
      t.setFontSize(9),
      t.setFont("helvetica", "bold"),
      t.text(`🛡 GARANTIA: ${d.warrantyDays} DIAS`, l + 8, r + 9);
    const n = new Date();
    n.setDate(n.getDate() + d.warrantyDays),
      t.setFontSize(8),
      t.setFont("helvetica", "normal"),
      t.text(
        `Válida até: ${O(n, "dd/MM/yyyy", { locale: U })}`,
        i - l - 55,
        r + 9
      ),
      (r += 18);
  }
  t.setFillColor(C.r, C.g, C.b),
    t.roundedRect(l, r, h, 18, 2, 2, "F"),
    t.setFontSize(11),
    t.setFont("helvetica", "bold"),
    t.setTextColor(c.r, c.g, c.b),
    t.text("Obrigado pela preferência!", i / 2, r + 8, { align: "center" }),
    t.setFontSize(8),
    t.setFont("helvetica", "normal"),
    t.setTextColor(p.r, p.g, p.b),
    t.text("Guarde este comprovante para futuras consultas.", i / 2, r + 14, {
      align: "center",
    }),
    t.setFontSize(7),
    t.setTextColor(180, 180, 180),
    t.text(
      `Documento gerado em ${O(new Date(), "dd/MM/yyyy 'às' HH:mm", {
        locale: U,
      })} | TechOS Pro`,
      i / 2,
      I - 8,
      { align: "center" }
    ),
    t.setFillColor(g.r, g.g, g.b),
    t.rect(0, I - 3, i, 3, "F");
  const x = `comprovante_servico_${d.orderNumber || "OS"}_${O(
    new Date(),
    "ddMMyyyy"
  )}.pdf`;
  t.save(x);
}
const Ee = {
    open: {
      label: "Aberta",
      color: "bg-blue-500",
      bgLight: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      icon: Pe,
      message:
        "Sua ordem de serviço foi recebida e está aguardando atendimento.",
      step: 1,
    },
    "in-progress": {
      label: "Em Andamento",
      color: "bg-amber-500",
      bgLight: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
      icon: se,
      message: "Seu aparelho está sendo reparado pela nossa equipe técnica.",
      step: 2,
    },
    pending: {
      label: "Pendente",
      color: "bg-orange-500",
      bgLight: "bg-orange-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
      icon: ae,
      message:
        "Sua ordem está pendente de aprovação ou informações adicionais.",
      step: 1,
    },
    "waiting-parts": {
      label: "Aguardando Peça",
      color: "bg-purple-500",
      bgLight: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      icon: Te,
      message: "Aguardando chegada de peças necessárias para o reparo.",
      step: 2,
    },
    completed: {
      label: "Concluída",
      color: "bg-emerald-500",
      bgLight: "bg-emerald-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-100",
      icon: te,
      message: "Seu aparelho está pronto para retirada!",
      step: 3,
    },
    delivered: {
      label: "Retirado/Finalizado",
      color: "bg-green-600",
      bgLight: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
      icon: te,
      message: "Aparelho retirado com sucesso! Obrigado pela preferência.",
      step: 4,
    },
    cancelled: {
      label: "Cancelada",
      color: "bg-gray-500",
      bgLight: "bg-gray-50",
      textColor: "text-gray-700",
      borderColor: "border-gray-200",
      iconBg: "bg-gray-100",
      icon: z,
      message: "Esta ordem de serviço foi cancelada.",
      step: 0,
    },
    "no-repair": {
      label: "Sem Reparo",
      color: "bg-slate-500",
      bgLight: "bg-slate-50",
      textColor: "text-slate-700",
      borderColor: "border-slate-200",
      iconBg: "bg-slate-100",
      icon: z,
      message: "Não foi possível realizar o reparo neste aparelho.",
      step: 0,
    },
  },
  Le = () => {
    const [d] = ne(),
      { accessToken: b } = ie(),
      [s, t] = N.useState(null),
      [i, I] = N.useState({}),
      [l, h] = N.useState(!0),
      [r, g] = N.useState(new Date()),
      [c, p] = N.useState(""),
      [C, f] = N.useState(null),
      [F, S] = N.useState(!1),
      [y, T] = N.useState(null),
      [B, A] = N.useState(null),
      [R, _] = N.useState(null),
      w = b || d.get("token");
    N.useEffect(() => {
      if (!w) return;
      const o = y || w,
        a = `${window.location.origin}/garantia/${o}`;
      ce.toDataURL(a, {
        width: 256,
        margin: 1,
        color: { dark: "#020617", light: "#ffffff" },
      })
        .then(_)
        .catch(() => _(null));
    }, [w, y]);
    const D = async () => {
      const o = window.location.href;
      if (navigator.share)
        try {
          await navigator.share({
            title: `OS #${s?.orderNumber || ""}`,
            text: "Acompanhe sua ordem de serviço",
            url: o,
          });
        } catch {}
      else await navigator.clipboard.writeText(o), J.success("Link copiado!");
    };
    N.useEffect(() => {
      (async () => {
        if (!w) {
          h(!1);
          return;
        }
        try {
          let a = null,
            x = null;
          const n = await $.from("service_orders")
            .select(
              "id, order_number, client_name, client_cpf, client_phone, device_model, imei, serial, reported_problem, service_value, down_payment, entry_date, estimated_delivery_date, technician, status, type, user_id, whatsapp, entry_checklist, photos, additional_notes, pin_password, pattern_password, updated_at, unlock_type, access_token, repair_video_url"
            )
            .eq("access_token", w)
            .maybeSingle();
          if (n.data) a = n.data;
          else if (w.length <= 8) {
            const m = await $.from("service_orders")
              .select(
                "id, order_number, client_name, client_cpf, client_phone, device_model, imei, serial, reported_problem, service_value, down_payment, entry_date, estimated_delivery_date, technician, status, type, user_id, whatsapp, entry_checklist, photos, additional_notes, pin_password, pattern_password, updated_at, unlock_type, access_token, repair_video_url"
              )
              .ilike("access_token", `${w}%`)
              .limit(1)
              .maybeSingle();
            (a = m.data), (x = m.error);
          } else x = n.error;
          if (x || !a) t(null);
          else {
            T(a.access_token);
            let m = [];
            if (a.entry_checklist)
              try {
                typeof a.entry_checklist == "string"
                  ? (m = JSON.parse(a.entry_checklist))
                  : Array.isArray(a.entry_checklist) && (m = a.entry_checklist);
              } catch {}
            t({
              id: a.id,
              orderNumber: a.order_number,
              type: a.type,
              clientName: a.client_name,
              clientCPF: a.client_cpf,
              clientPhone: a.client_phone || a.whatsapp,
              deviceModel: a.device_model,
              imei: a.imei,
              serial: a.serial,
              reportedProblem: a.reported_problem,
              serviceValue: a.service_value,
              downPayment: a.down_payment,
              entryDate: a.entry_date,
              estimatedDeliveryDate: a.estimated_delivery_date,
              technician: a.technician,
              status: a.status,
              userId: a.user_id,
              entryChecklist: m,
              photos: a.photos || [],
              additionalNotes: a.additional_notes,
              pinPassword: a.pin_password,
              patternPassword: a.pattern_password,
              unlockType: a.unlock_type,
            }),
              A(a.repair_video_url || null);
            const { data: u } = await $.from("user_settings")
              .select(
                "company_name, company_phone, company_email, company_address, company_logo, company_cnpj"
              )
              .eq("user_id", a.user_id)
              .single();
            u &&
              I({
                companyName: u.company_name,
                companyPhone: u.company_phone,
                companyEmail: u.company_email,
                companyAddress: u.company_address,
                companyLogo: u.company_logo,
                companyCnpj: u.company_cnpj,
              });
          }
        } catch {
          t(null);
        } finally {
          h(!1), g(new Date());
        }
      })();
    }, [w]),
      N.useEffect(() => {
        if (!y) return;
        const o = $.channel(`os-public-${y}`)
          .on(
            "postgres_changes",
            {
              event: "UPDATE",
              schema: "public",
              table: "service_orders",
              filter: `access_token=eq.${y}`,
            },
            (a) => {
              const x = a.new;
              let n = [];
              if (x.entry_checklist)
                try {
                  typeof x.entry_checklist == "string"
                    ? (n = JSON.parse(x.entry_checklist))
                    : Array.isArray(x.entry_checklist) &&
                      (n = x.entry_checklist);
                } catch {}
              t((m) =>
                m
                  ? {
                      ...m,
                      status: x.status,
                      technician: x.technician,
                      estimatedDeliveryDate: x.estimated_delivery_date,
                      serviceValue: x.service_value,
                      entryChecklist: n,
                      photos: x.photos || m.photos,
                      unlockType: x.unlock_type || m.unlockType,
                    }
                  : null
              ),
                g(new Date());
            }
          )
          .subscribe();
        return () => {
          $.removeChannel(o);
        };
      }, [y]);
    const E = () => {
        const o = i.companyPhone?.replace(/\D/g, "");
        if (!o) return;
        const a = encodeURIComponent(`Olá! Sou ${
          s?.clientName
        }, cliente da OS ${s?.orderNumber || ""}.

${c || "Gostaria de saber sobre minha ordem de serviço."}`);
        window.open(`https://wa.me/${o}?text=${a}`, "_blank");
      },
      V = () => {
        const o = i.companyPhone?.replace(/\D/g, "");
        if (!o) return;
        const a = encodeURIComponent(
          `Olá! Sou ${s?.clientName}, gostaria de saber sobre minha OS ${
            s?.orderNumber || ""
          } - ${s?.deviceModel}`
        );
        window.open(`https://wa.me/${o}?text=${a}`, "_blank");
      },
      H = async () => {
        if (s) {
          S(!0);
          try {
            await Ae(
              {
                orderNumber: s.orderNumber,
                clientName: s.clientName,
                clientPhone: s.clientPhone,
                clientCPF: s.clientCPF,
                deviceModel: s.deviceModel,
                imei: s.imei,
                serial: s.serial,
                reportedProblem: s.reportedProblem,
                serviceValue: s.serviceValue,
                downPayment: s.downPayment?.toString(),
                entryDate: s.entryDate,
                technician: s.technician,
                entryChecklist: s.entryChecklist,
                additionalNotes: s.additionalNotes,
              },
              {
                companyName: i.companyName,
                companyPhone: i.companyPhone,
                companyEmail: i.companyEmail,
                companyAddress: i.companyAddress,
                companyLogo: i.companyLogo,
                companyCnpj: i.companyCnpj,
              }
            ),
              J.success("Comprovante gerado com sucesso!");
          } catch {
            J.error("Erro ao gerar comprovante");
          } finally {
            S(!1);
          }
        }
      };
    if (l)
      return e.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-[#020617]",
        children: e.jsxs("div", {
          className: "text-center",
          children: [
            e.jsxs("div", {
              className: "relative w-16 h-16 mx-auto mb-4",
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 rounded-full border-4 border-slate-800",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-500 animate-spin",
                }),
              ],
            }),
            e.jsx("p", {
              className: "text-slate-400 font-medium",
              children: "Carregando sua ordem de serviço...",
            }),
          ],
        }),
      });
    if (!s)
      return e.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-[#020617] p-4",
        children: e.jsxs("div", {
          className:
            "p-8 max-w-md w-full text-center bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl",
          children: [
            e.jsx("div", {
              className:
                "w-20 h-20 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6",
              children: e.jsx(z, { className: "w-10 h-10 text-rose-500" }),
            }),
            e.jsx("h1", {
              className: "text-2xl font-bold text-white mb-3",
              children: "OS não encontrada",
            }),
            e.jsx("p", {
              className: "text-slate-400",
              children:
                "Não foi possível localizar a ordem de serviço solicitada. Verifique se o link está correto.",
            }),
          ],
        }),
      });
    const v = Ee[s.status];
    v.icon;
    const k = s.status === "cancelled" || s.status === "no-repair",
      L = [
        {
          key: "received",
          label: "Entrada Registrada",
          date: M(s.entryDate),
          step: 1,
        },
        {
          key: "in-progress",
          label: "Em Reparo / Diagnóstico",
          date: s.status === "open" ? "Aguardando" : "Em execução",
          step: 2,
        },
        {
          key: "completed",
          label: "Pronto para Retirada",
          date: s.estimatedDeliveryDate
            ? `Previsão ${M(s.estimatedDeliveryDate)}`
            : "Aguardando",
          step: 3,
        },
        {
          key: "delivered",
          label: "Aparelho Retirado",
          date: s.status === "delivered" ? "Finalizado" : "Pendente",
          step: 4,
        },
      ];
    return e.jsxs("div", {
      className:
        "min-h-screen w-full bg-[#020617] text-slate-200 font-sans p-4 md:p-8",
      children: [
        e.jsxs("div", {
          className: "max-w-6xl mx-auto space-y-6",
          children: [
            e.jsxs("header", {
              className:
                "flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    i.companyLogo
                      ? e.jsx("div", {
                          className:
                            "w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-1.5 overflow-hidden",
                          children: e.jsx("img", {
                            src: i.companyLogo,
                            alt: "Logo",
                            className: "max-h-full max-w-full object-contain",
                          }),
                        })
                      : e.jsx("div", {
                          className:
                            "w-12 h-12 bg-gradient-to-br from-[#338532] to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/40",
                          children: e.jsx(de, {
                            className: "w-6 h-6 text-white",
                          }),
                        }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h1", {
                          className:
                            "text-xl font-bold tracking-tight text-white uppercase",
                          children: i.companyName || "Assistência Técnica",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] text-slate-400 uppercase tracking-[0.2em] font-medium",
                          children: "Portal do Cliente",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsxs("button", {
                      onClick: D,
                      className:
                        "hidden sm:flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-semibold text-slate-300 transition-all",
                      children: [
                        e.jsx(me, { className: "w-3.5 h-3.5" }),
                        "Compartilhar",
                      ],
                    }),
                    e.jsxs("div", {
                      className: `flex items-center gap-3 px-5 py-2.5 border rounded-full ${
                        k
                          ? "bg-rose-500/10 border-rose-500/20"
                          : "bg-emerald-500/10 border-emerald-500/20"
                      }`,
                      children: [
                        e.jsx("div", {
                          className: `w-2 h-2 rounded-full animate-pulse ${
                            k ? "bg-rose-500" : "bg-emerald-500"
                          }`,
                        }),
                        e.jsx("span", {
                          className: `text-sm font-semibold uppercase tracking-wider ${
                            k ? "text-rose-400" : "text-emerald-400"
                          }`,
                          children: v.label,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              className:
                "relative overflow-hidden p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[2rem] shadow-2xl",
              children: [
                e.jsx("div", {
                  className:
                    "absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full",
                }),
                e.jsx("div", {
                  className:
                    "absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-emerald-700/5 blur-[100px] rounded-full",
                }),
                e.jsxs("div", {
                  className: "relative grid md:grid-cols-2 gap-8 items-center",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-[0.2em]",
                          children: "Ordem de Serviço",
                        }),
                        e.jsxs("h2", {
                          className:
                            "text-3xl md:text-4xl font-extrabold text-white tracking-tight font-mono",
                          children: [
                            "#",
                            s.orderNumber || s.id.slice(0, 8).toUpperCase(),
                          ],
                        }),
                        e.jsxs("p", {
                          className:
                            "text-slate-400 text-sm flex items-center gap-2",
                          children: [
                            e.jsx(xe, { className: "w-3.5 h-3.5" }),
                            "Recebido em ",
                            M(s.entryDate),
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "text-slate-500 text-sm leading-relaxed pt-2 max-w-md",
                          children: v.message,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col md:items-end",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[10px] text-slate-400 uppercase font-semibold tracking-[0.2em] mb-1",
                          children: "Valor do Serviço",
                        }),
                        e.jsxs("div", {
                          className:
                            "text-4xl md:text-5xl font-black text-white flex items-baseline gap-1",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-xl md:text-2xl font-bold text-emerald-500",
                              children: "R$",
                            }),
                            e.jsx("span", { children: s.serviceValue }),
                          ],
                        }),
                        s.downPayment &&
                          s.downPayment > 0 &&
                          e.jsxs("p", {
                            className: "text-xs text-emerald-400 mt-1",
                            children: [
                              "Entrada paga: R$ ",
                              s.downPayment.toFixed(2),
                            ],
                          }),
                        s.status === "completed" &&
                          s.type !== "unlock" &&
                          e.jsxs(q, {
                            onClick: H,
                            disabled: F,
                            className:
                              "mt-4 bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30",
                            children: [
                              e.jsx(he, { className: "w-4 h-4 mr-2" }),
                              F ? "Gerando..." : "Baixar Comprovante",
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-6",
              children: [
                e.jsxs("div", {
                  className: "lg:col-span-4 space-y-6",
                  children: [
                    e.jsxs("div", {
                      className:
                        "p-6 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl",
                      children: [
                        e.jsxs("h3", {
                          className:
                            "text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2",
                          children: [
                            e.jsx(pe, {
                              className: "w-3.5 h-3.5 text-emerald-500",
                            }),
                            "Linha do Tempo",
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-8 relative",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-800",
                            }),
                            L.map((o) => {
                              const a = !k && v.step > o.step,
                                x = !k && v.step === o.step,
                                n = k || v.step < o.step;
                              return e.jsxs(
                                "div",
                                {
                                  className: `relative flex gap-4 ${
                                    n ? "opacity-40" : ""
                                  }`,
                                  children: [
                                    a &&
                                      e.jsx("div", {
                                        className:
                                          "relative z-10 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]",
                                        children: e.jsx(Q, {
                                          className:
                                            "w-3.5 h-3.5 text-slate-950",
                                          strokeWidth: 3,
                                        }),
                                      }),
                                    x &&
                                      e.jsxs("div", {
                                        className:
                                          "relative z-10 w-6 h-6 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-2 h-2 bg-emerald-500 rounded-full animate-ping",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute w-2 h-2 bg-emerald-500 rounded-full",
                                          }),
                                        ],
                                      }),
                                    n &&
                                      e.jsx("div", {
                                        className:
                                          "relative z-10 w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-700",
                                      }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("p", {
                                          className: `text-sm font-bold ${
                                            x
                                              ? "text-emerald-400"
                                              : "text-white"
                                          }`,
                                          children: o.label,
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-[11px] text-slate-500",
                                          children: o.date,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                o.key
                              );
                            }),
                            k &&
                              e.jsxs("div", {
                                className: "relative flex gap-4",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "relative z-10 w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.4)]",
                                    children: e.jsx(z, {
                                      className: "w-3.5 h-3.5 text-slate-950",
                                      strokeWidth: 3,
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-sm font-bold text-rose-400",
                                        children: v.label,
                                      }),
                                      e.jsx("p", {
                                        className: "text-[11px] text-slate-500",
                                        children: v.message,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "p-6 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl text-white shadow-xl flex flex-col items-center text-center",
                      children: [
                        R
                          ? e.jsx("div", {
                              className:
                                "bg-white p-3 rounded-2xl mb-4 shadow-lg",
                              children: e.jsx("img", {
                                src: R,
                                alt: "QR Garantia",
                                className: "w-28 h-28",
                              }),
                            })
                          : e.jsx("div", {
                              className:
                                "bg-white/20 p-3 rounded-2xl mb-4 w-[136px] h-[136px] flex items-center justify-center",
                              children: e.jsx(be, {
                                className: "w-12 h-12 text-white/60",
                              }),
                            }),
                        e.jsx("p", {
                          className:
                            "text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-1",
                          children: "Garantia Digital",
                        }),
                        e.jsx("h4", {
                          className: "text-lg font-bold leading-tight mb-1",
                          children: "Verificação Antifraude",
                        }),
                        e.jsx("p", {
                          className:
                            "text-xs text-emerald-100/80 leading-relaxed",
                          children:
                            "Escaneie para validar a autenticidade desta ordem de serviço",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        e.jsxs("div", {
                          className:
                            "p-4 bg-slate-900/40 border border-white/5 rounded-2xl",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[10px] text-slate-500 uppercase font-bold tracking-[0.15em] mb-1",
                              children: "Entrada",
                            }),
                            e.jsx("p", {
                              className: "text-white font-bold text-sm",
                              children: M(s.entryDate),
                            }),
                          ],
                        }),
                        s.estimatedDeliveryDate &&
                          e.jsxs("div", {
                            className:
                              "p-4 bg-slate-900/40 border border-white/5 rounded-2xl",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] text-slate-500 uppercase font-bold tracking-[0.15em] mb-1",
                                children: "Previsão",
                              }),
                              e.jsx("p", {
                                className: "text-emerald-400 font-bold text-sm",
                                children: M(s.estimatedDeliveryDate),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "lg:col-span-8 space-y-6",
                  children: [
                    B
                      ? e.jsxs("div", {
                          className:
                            "aspect-video w-full bg-slate-950 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl",
                          children: [
                            e.jsx("video", {
                              src: B,
                              controls: !0,
                              className: "w-full h-full object-cover",
                            }),
                            e.jsxs("div", {
                              className:
                                "absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-emerald-500 rounded-full animate-pulse",
                                }),
                                "Vídeo Oficial do Reparo",
                              ],
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          className:
                            "aspect-video w-full bg-slate-900/40 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 relative flex flex-col items-center justify-center text-center p-8",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-16 h-16 bg-slate-800/60 rounded-full flex items-center justify-center mb-4",
                              children: e.jsx(ge, {
                                className: "w-7 h-7 text-slate-500 ml-1",
                              }),
                            }),
                            e.jsx("p", {
                              className: "text-slate-400 font-semibold",
                              children: "Vídeo do reparo ainda não disponível",
                            }),
                            e.jsx("p", {
                              className: "text-xs text-slate-600 mt-1",
                              children:
                                "Quando o técnico publicar, aparecerá aqui",
                            }),
                          ],
                        }),
                    e.jsxs("div", {
                      className: "grid md:grid-cols-2 gap-6",
                      children: [
                        e.jsxs("div", {
                          className:
                            "p-6 bg-slate-900/40 border border-white/5 rounded-3xl space-y-6",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsxs("h3", {
                                  className:
                                    "text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2",
                                  children: [
                                    e.jsx(ue, { className: "w-3 h-3" }),
                                    "Cliente",
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "text-lg font-bold text-white",
                                  children: s.clientName,
                                }),
                                s.clientPhone &&
                                  e.jsx("p", {
                                    className: "text-sm text-slate-400",
                                    children: s.clientPhone,
                                  }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "pt-4 border-t border-white/5",
                              children: [
                                e.jsxs("h3", {
                                  className:
                                    "text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2",
                                  children: [
                                    e.jsx(fe, { className: "w-3 h-3" }),
                                    "Equipamento",
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "text-lg font-bold text-white",
                                  children: s.deviceModel,
                                }),
                                s.imei &&
                                  e.jsxs("p", {
                                    className:
                                      "text-xs text-slate-400 font-mono mt-1",
                                    children: ["IMEI: ", s.imei],
                                  }),
                                s.serial &&
                                  e.jsxs("p", {
                                    className:
                                      "text-xs text-slate-400 font-mono",
                                    children: ["SN: ", s.serial],
                                  }),
                              ],
                            }),
                            s.technician &&
                              e.jsxs("div", {
                                className: "pt-4 border-t border-white/5",
                                children: [
                                  e.jsxs("h3", {
                                    className:
                                      "text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2",
                                    children: [
                                      e.jsx(se, { className: "w-3 h-3" }),
                                      "Técnico Responsável",
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-base font-semibold text-white",
                                    children: s.technician,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "p-6 bg-slate-900/40 border border-white/5 rounded-3xl space-y-6",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsxs("h3", {
                                  className:
                                    "text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2",
                                  children: [
                                    e.jsx(ae, { className: "w-3 h-3" }),
                                    "Problema Relatado",
                                  ],
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-2xl border border-white/5",
                                  children: s.reportedProblem,
                                }),
                              ],
                            }),
                            s.type === "unlock" &&
                              s.unlockType &&
                              e.jsxs("div", {
                                className: "pt-4 border-t border-white/5",
                                children: [
                                  e.jsxs("h3", {
                                    className:
                                      "text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2",
                                    children: [
                                      e.jsx(ye, { className: "w-3 h-3" }),
                                      "Tipo de Desbloqueio",
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "text-base font-semibold text-emerald-400",
                                    children: [
                                      s.unlockType === "icloud" &&
                                        "Desbloqueio iCloud",
                                      s.unlockType === "mdm" &&
                                        "Remoção de MDM",
                                      s.unlockType === "payjoy" &&
                                        "Remoção de PayJoy",
                                      s.unlockType === "frp" &&
                                        "Remoção de Conta Google (FRP)",
                                      s.unlockType === "samsung" &&
                                        "Desbloqueio Samsung",
                                      s.unlockType === "mi-account" &&
                                        "Remoção de Mi Account",
                                      s.unlockType === "operadora" &&
                                        "Desbloqueio de Operadora",
                                      s.unlockType === "pin-puk" &&
                                        "Recuperação de PIN/PUK",
                                      s.unlockType === "senha-padrao" &&
                                        "Remoção de Senha/Padrão",
                                      s.unlockType === "outros" &&
                                        "Desbloqueio Personalizado",
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    s.type !== "unlock" &&
                      s.entryChecklist &&
                      s.entryChecklist.length > 0 &&
                      e.jsxs("div", {
                        className:
                          "p-6 bg-slate-900/40 border border-white/5 rounded-3xl",
                        children: [
                          e.jsxs("h3", {
                            className:
                              "text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2",
                            children: [
                              e.jsx(Q, { className: "w-3 h-3" }),
                              "Checklist de Entrada",
                            ],
                          }),
                          s.entryChecklist.some(
                            (o) => o.id === "__untestable__"
                          )
                            ? e.jsxs("div", {
                                className:
                                  "flex items-center gap-2 p-4 rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-300 text-sm",
                                children: [
                                  e.jsx(z, {
                                    className: "w-4 h-4 flex-shrink-0",
                                  }),
                                  e.jsxs("span", {
                                    children: [
                                      e.jsx("strong", {
                                        children:
                                          "Aparelho impossibilitado de teste.",
                                      }),
                                      " Checklist não realizado.",
                                    ],
                                  }),
                                ],
                              })
                            : e.jsx("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-2.5",
                                children: s.entryChecklist
                                  .filter(
                                    (o) =>
                                      o.id !== "__untestable__" &&
                                      o.id !== "__auto_checklist__"
                                  )
                                  .map((o) =>
                                    e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center justify-between text-xs p-3 bg-white/5 rounded-xl border border-white/5",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "text-slate-300 font-medium",
                                            children: o.label,
                                          }),
                                          o.checked
                                            ? e.jsx(Q, {
                                                className:
                                                  "w-4 h-4 text-emerald-500 flex-shrink-0",
                                              })
                                            : e.jsx(z, {
                                                className:
                                                  "w-4 h-4 text-rose-500 flex-shrink-0",
                                              }),
                                        ],
                                      },
                                      o.id
                                    )
                                  ),
                              }),
                        ],
                      }),
                    s.photos &&
                      s.photos.length > 0 &&
                      e.jsxs("div", {
                        className:
                          "p-6 bg-slate-900/40 border border-white/5 rounded-3xl",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                              e.jsxs("h3", {
                                className:
                                  "text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] flex items-center gap-2",
                                children: [
                                  e.jsx(Z, { className: "w-3 h-3" }),
                                  "Fotos do Aparelho",
                                ],
                              }),
                              e.jsxs("span", {
                                className:
                                  "text-[10px] text-slate-500 font-mono",
                                children: [s.photos.length, " item(ns)"],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                            children: s.photos.map((o, a) =>
                              e.jsxs(
                                "button",
                                {
                                  onClick: () => f(o),
                                  className:
                                    "relative rounded-2xl overflow-hidden border border-white/10 aspect-video group hover:border-emerald-500/50 transition-all",
                                  children: [
                                    e.jsx("img", {
                                      src: o,
                                      alt: `Foto ${a + 1}`,
                                      className:
                                        "w-full h-full object-cover transition-transform group-hover:scale-110",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100",
                                      children: e.jsx(Z, {
                                        className: "w-5 h-5 text-white",
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[9px] font-bold text-white uppercase tracking-widest",
                                      children: ["#", a + 1],
                                    }),
                                  ],
                                },
                                a
                              )
                            ),
                          }),
                        ],
                      }),
                    i.companyPhone &&
                      e.jsxs("div", {
                        className:
                          "p-8 bg-slate-900/60 border border-white/10 rounded-[2rem] shadow-xl",
                        children: [
                          e.jsxs("h3", {
                            className:
                              "text-lg font-bold text-white mb-6 flex items-center gap-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center",
                                children: e.jsx(we, {
                                  className: "w-5 h-5 text-emerald-500",
                                }),
                              }),
                              "Dúvidas? Fale com a equipe",
                            ],
                          }),
                          e.jsx("textarea", {
                            placeholder: "Escreva sua mensagem aqui...",
                            value: c,
                            onChange: (o) => p(o.target.value),
                            className:
                              "w-full h-32 bg-slate-950/50 border border-white/10 rounded-2xl p-4 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none",
                          }),
                          e.jsxs("div", {
                            className: "mt-4 flex flex-col sm:flex-row gap-3",
                            children: [
                              e.jsxs(q, {
                                onClick: E,
                                disabled: !c.trim(),
                                className:
                                  "flex-1 py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-900/30 active:scale-95 disabled:opacity-50",
                                children: [
                                  e.jsx(Ne, { className: "w-4 h-4 mr-2" }),
                                  "Enviar Mensagem",
                                ],
                              }),
                              e.jsxs(q, {
                                onClick: V,
                                variant: "outline",
                                className:
                                  "sm:w-auto px-6 py-6 bg-slate-800/50 hover:bg-slate-800 border-white/10 text-white rounded-2xl transition-all active:scale-95",
                                children: [
                                  e.jsx(ee, { className: "w-5 h-5 mr-2" }),
                                  "Contato Rápido",
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
            e.jsxs("footer", {
              className:
                "pt-8 pb-4 px-6 text-center space-y-6 border-t border-white/5",
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-slate-400",
                  children: [
                    i.companyAddress &&
                      e.jsxs("div", {
                        className: "flex items-center gap-2 font-medium",
                        children: [
                          e.jsx(ve, { className: "w-4 h-4 text-emerald-500" }),
                          i.companyAddress,
                        ],
                      }),
                    i.companyPhone &&
                      e.jsxs("div", {
                        className: "flex items-center gap-2 font-medium",
                        children: [
                          e.jsx(ee, { className: "w-4 h-4 text-emerald-500" }),
                          i.companyPhone,
                        ],
                      }),
                    i.companyEmail &&
                      e.jsxs("div", {
                        className: "flex items-center gap-2 font-medium",
                        children: [
                          e.jsx(je, { className: "w-4 h-4 text-emerald-500" }),
                          i.companyEmail,
                        ],
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    e.jsxs("p", {
                      className:
                        "text-[10px] text-slate-500 uppercase tracking-[0.2em] flex items-center justify-center gap-2",
                      children: [
                        e.jsx(Ce, { className: "w-3 h-3" }),
                        "Última atualização: ",
                        r.toLocaleTimeString("pt-BR"),
                        " · Tempo real",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-[10px] text-slate-600",
                      children:
                        "Link de acesso exclusivo para acompanhamento desta OS",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(ke, {
          open: !!C,
          onOpenChange: () => f(null),
          children: e.jsxs(_e, {
            className: "max-w-3xl p-2 bg-slate-950 border-white/10",
            children: [
              e.jsx(Fe, {
                className: "sr-only",
                children: e.jsx(Se, { children: "Visualizar Foto" }),
              }),
              e.jsx(q, {
                variant: "ghost",
                size: "icon",
                className:
                  "absolute right-2 top-2 z-10 text-white hover:bg-white/10",
                onClick: () => f(null),
                children: e.jsx(De, { className: "w-4 h-4" }),
              }),
              C &&
                e.jsx("img", {
                  src: C,
                  alt: "Foto do aparelho",
                  className:
                    "w-full h-auto max-h-[80vh] object-contain rounded-lg",
                }),
            ],
          }),
        }),
      ],
    });
  };
export { Le as default };
