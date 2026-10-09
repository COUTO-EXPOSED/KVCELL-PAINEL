import {
  ce as te,
  cf as se,
  r as l,
  w as _,
  bU as v,
  j as e,
  b4 as H,
  B as o,
  a8 as M,
  G as N,
  a1 as w,
  C as ae,
  h as U,
  ew as ne,
  dz as re,
  b3 as le,
  K as ie,
  bz as ce,
  D as oe,
  c as de,
  a_ as me,
  d as xe,
  n as i,
  I as p,
  b5 as C,
  b6 as S,
  b7 as D,
  b8 as k,
  b9 as d,
  T as he,
  c7 as ue,
  bm as ge,
} from "./index-V8ZHCWL2.js";
const T = {
    scheduled: {
      label: "Agendado",
      className: "bg-blue-500/15 text-blue-600 border-blue-500/30",
    },
    confirmed: {
      label: "Confirmado",
      className: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    },
    in_progress: {
      label: "Em andamento",
      className: "bg-orange-500/15 text-orange-600 border-orange-500/30",
    },
    completed: {
      label: "Concluído",
      className: "bg-muted text-muted-foreground",
    },
    cancelled: {
      label: "Cancelado",
      className: "bg-red-500/15 text-red-600 border-red-500/30",
    },
  },
  E = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"],
  pe = (m) => {
    const x = new Date(m),
      h = x.getDay();
    return x.setDate(x.getDate() - h), x.setHours(0, 0, 0, 0), x;
  },
  fe = () => {
    te();
    const { effectiveUserId: m, loading: x } = se(),
      [h, q] = l.useState([]),
      [O, F] = l.useState([]),
      [g, I] = l.useState(new Date()),
      [y, L] = l.useState("week"),
      [W, A] = l.useState(!0),
      [K, j] = l.useState(!1),
      [u, $] = l.useState(null),
      [s, r] = l.useState({
        title: "",
        description: "",
        client_id: "",
        client_name: "",
        client_phone: "",
        date: "",
        start_time: "09:00",
        end_time: "10:00",
        service_type: "",
        color: E[0],
        status: "scheduled",
        notes: "",
        reminder_minutes: 60,
      }),
      b = l.useCallback(async () => {
        if (m) {
          A(!0);
          try {
            const t = new Date(g);
            t.setDate(t.getDate() - 60);
            const a = new Date(g);
            a.setDate(a.getDate() + 60);
            const [{ data: n }, { data: c }] = await Promise.all([
              _.from("scheduled_appointments")
                .select("*")
                .eq("user_id", m)
                .gte("start_at", t.toISOString())
                .lte("start_at", a.toISOString())
                .order("start_at"),
              _.from("clients")
                .select("id, name, phone")
                .eq("user_id", m)
                .order("name"),
            ]);
            q(n ?? []), F(c ?? []);
          } catch {
            v.error("Erro ao carregar agenda");
          } finally {
            A(!1);
          }
        }
      }, [m, g]);
    l.useEffect(() => {
      x || b();
    }, [x, b]);
    const z = (t) => {
        $(null),
          r({
            title: "",
            description: "",
            client_id: "",
            client_name: "",
            client_phone: "",
            date: (t ?? new Date()).toISOString().slice(0, 10),
            start_time: "09:00",
            end_time: "10:00",
            service_type: "",
            color: E[0],
            status: "scheduled",
            notes: "",
            reminder_minutes: 60,
          }),
          j(!0);
      },
      B = (t) => {
        $(t);
        const a = new Date(t.start_at),
          n = new Date(t.end_at);
        r({
          title: t.title,
          description: t.description ?? "",
          client_id: t.client_id ?? "",
          client_name: t.client_name ?? "",
          client_phone: t.client_phone ?? "",
          date: a.toISOString().slice(0, 10),
          start_time: a.toTimeString().slice(0, 5),
          end_time: n.toTimeString().slice(0, 5),
          service_type: t.service_type ?? "",
          color: t.color,
          status: t.status,
          notes: t.notes ?? "",
          reminder_minutes: t.reminder_minutes ?? 60,
        }),
          j(!0);
      },
      Q = async () => {
        if (!m || !s.title || !s.date) {
          v.error("Preencha título e data");
          return;
        }
        const t = new Date(`${s.date}T${s.start_time}:00`).toISOString(),
          a = new Date(`${s.date}T${s.end_time}:00`).toISOString(),
          n = {
            user_id: m,
            title: s.title,
            description: s.description || null,
            client_id: s.client_id || null,
            client_name: s.client_name || null,
            client_phone: s.client_phone || null,
            start_at: t,
            end_at: a,
            service_type: s.service_type || null,
            color: s.color,
            status: s.status,
            notes: s.notes || null,
            reminder_minutes: s.reminder_minutes,
          },
          { error: c } = u
            ? await _.from("scheduled_appointments").update(n).eq("id", u.id)
            : await _.from("scheduled_appointments").insert(n);
        if (c) {
          v.error("Erro: " + c.message);
          return;
        }
        v.success(u ? "Agendamento atualizado" : "Agendamento criado"),
          j(!1),
          b();
      },
      G = async () => {
        if (!u) return;
        const { error: t } = await _.from("scheduled_appointments")
          .delete()
          .eq("id", u.id);
        if (t) {
          v.error("Erro: " + t.message);
          return;
        }
        v.success("Agendamento removido"), j(!1), b();
      },
      J = (t) => {
        const a = O.find((n) => n.id === t);
        r((n) => ({
          ...n,
          client_id: t,
          client_name: a?.name ?? "",
          client_phone: a?.phone ?? "",
        }));
      },
      X = l.useMemo(() => {
        const t = pe(g);
        return Array.from({ length: 7 }, (a, n) => {
          const c = new Date(t);
          return c.setDate(t.getDate() + n), c;
        });
      }, [g]),
      P = l.useMemo(() => {
        const t = new Map();
        return (
          h.forEach((a) => {
            const n = new Date(a.start_at).toISOString().slice(0, 10);
            t.has(n) || t.set(n, []), t.get(n).push(a);
          }),
          t
        );
      }, [h]),
      R = new Date().toISOString().slice(0, 10),
      Y = P.get(R) ?? [],
      Z = h
        .filter(
          (t) => new Date(t.start_at) > new Date() && t.status !== "cancelled"
        )
        .slice(0, 5),
      V = (t) => {
        const a = new Date(g);
        a.setDate(a.getDate() + t * 7), I(a);
      },
      ee = (t) =>
        `${
          ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][t.getDay()]
        } ${t.getDate()}/${t.getMonth() + 1}`;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "mb-6 flex items-center justify-between flex-wrap gap-3",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("h1", {
                  className: "text-3xl font-bold mb-2 flex items-center gap-2",
                  children: [
                    e.jsx(H, { className: "w-7 h-7 text-primary" }),
                    "Agenda de Serviços",
                  ],
                }),
                e.jsx("p", {
                  className: "text-muted-foreground",
                  children:
                    "Organize compromissos, visitas técnicas e entregas em um só lugar",
                }),
              ],
            }),
            e.jsxs(o, {
              onClick: () => z(),
              className: "gap-2",
              children: [
                e.jsx(M, { className: "w-4 h-4" }),
                "Novo Agendamento",
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6",
          children: [
            e.jsx(N, {
              children: e.jsxs(w, {
                className: "p-4 flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                    children: e.jsx(H, { className: "w-5 h-5 text-primary" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Hoje",
                      }),
                      e.jsxs("p", {
                        className: "text-xl font-bold",
                        children: [Y.length, " compromissos"],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(N, {
              children: e.jsxs(w, {
                className: "p-4 flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center",
                    children: e.jsx(ae, {
                      className: "w-5 h-5 text-emerald-600",
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Total no período",
                      }),
                      e.jsx("p", {
                        className: "text-xl font-bold",
                        children: h.length,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(N, {
              children: e.jsxs(w, {
                className: "p-4 flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center",
                    children: e.jsx(U, {
                      className: "w-5 h-5 text-orange-600",
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Próximos",
                      }),
                      e.jsx("p", {
                        className: "text-xl font-bold",
                        children: Z.length,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx(N, {
          children: e.jsxs(w, {
            className: "p-4",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-between mb-4 flex-wrap gap-2",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(o, {
                        variant: "outline",
                        size: "icon",
                        onClick: () => V(-1),
                        children: e.jsx(ne, { className: "w-4 h-4" }),
                      }),
                      e.jsx(o, {
                        variant: "outline",
                        onClick: () => I(new Date()),
                        children: "Hoje",
                      }),
                      e.jsx(o, {
                        variant: "outline",
                        size: "icon",
                        onClick: () => V(1),
                        children: e.jsx(re, { className: "w-4 h-4" }),
                      }),
                      e.jsx("h2", {
                        className: "ml-3 font-semibold",
                        children: g.toLocaleDateString("pt-BR", {
                          month: "long",
                          year: "numeric",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex gap-1 bg-muted rounded-md p-1",
                    children: [
                      e.jsx(o, {
                        size: "sm",
                        variant: y === "week" ? "default" : "ghost",
                        onClick: () => L("week"),
                        children: "Semana",
                      }),
                      e.jsx(o, {
                        size: "sm",
                        variant: y === "month" ? "default" : "ghost",
                        onClick: () => L("month"),
                        children: "Lista",
                      }),
                    ],
                  }),
                ],
              }),
              W
                ? e.jsx("p", {
                    className: "text-sm text-muted-foreground text-center py-8",
                    children: "Carregando...",
                  })
                : y === "week"
                ? e.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-7 gap-2",
                    children: X.map((t) => {
                      const a = t.toISOString().slice(0, 10),
                        n = P.get(a) ?? [],
                        c = a === R;
                      return e.jsxs(
                        "div",
                        {
                          className: `rounded-lg border p-2 min-h-[160px] ${
                            c ? "border-primary bg-primary/5" : "border-border"
                          }`,
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-between mb-2",
                              children: [
                                e.jsx("span", {
                                  className: `text-xs font-semibold ${
                                    c ? "text-primary" : "text-muted-foreground"
                                  }`,
                                  children: ee(t),
                                }),
                                e.jsx(o, {
                                  size: "icon",
                                  variant: "ghost",
                                  className: "h-6 w-6",
                                  onClick: () => z(t),
                                  children: e.jsx(M, { className: "w-3 h-3" }),
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "space-y-1",
                              children:
                                n.length === 0
                                  ? e.jsx("p", {
                                      className:
                                        "text-[10px] text-muted-foreground/60 italic",
                                      children: "Sem compromissos",
                                    })
                                  : n.map((f) =>
                                      e.jsxs(
                                        "button",
                                        {
                                          onClick: () => B(f),
                                          className:
                                            "w-full text-left rounded px-2 py-1 text-xs hover:opacity-80 transition-opacity",
                                          style: {
                                            backgroundColor: `${f.color}20`,
                                            borderLeft: `3px solid ${f.color}`,
                                          },
                                          children: [
                                            e.jsx("p", {
                                              className: "font-medium truncate",
                                              children: f.title,
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-[10px] opacity-70",
                                              children: new Date(
                                                f.start_at
                                              ).toLocaleTimeString("pt-BR", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                              }),
                                            }),
                                          ],
                                        },
                                        f.id
                                      )
                                    ),
                            }),
                          ],
                        },
                        a
                      );
                    }),
                  })
                : e.jsx("div", {
                    className: "space-y-2",
                    children:
                      h.length === 0
                        ? e.jsx("p", {
                            className:
                              "text-sm text-muted-foreground text-center py-8",
                            children: "Nenhum agendamento",
                          })
                        : h
                            .sort(
                              (t, a) =>
                                new Date(t.start_at).getTime() -
                                new Date(a.start_at).getTime()
                            )
                            .map((t) => {
                              const a = T[t.status] ?? T.scheduled;
                              return e.jsx(
                                "button",
                                {
                                  onClick: () => B(t),
                                  className:
                                    "w-full text-left rounded-lg border p-3 hover:bg-accent transition-colors",
                                  style: {
                                    borderLeftWidth: 4,
                                    borderLeftColor: t.color,
                                  },
                                  children: e.jsx("div", {
                                    className:
                                      "flex items-start justify-between gap-2 flex-wrap",
                                    children: e.jsxs("div", {
                                      className: "flex-1 min-w-0",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-2 flex-wrap",
                                          children: [
                                            e.jsx("p", {
                                              className: "font-semibold",
                                              children: t.title,
                                            }),
                                            e.jsx(le, {
                                              variant: "outline",
                                              className: a.className,
                                              children: a.label,
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-3 text-xs text-muted-foreground mt-1 flex-wrap",
                                          children: [
                                            e.jsxs("span", {
                                              className:
                                                "flex items-center gap-1",
                                              children: [
                                                e.jsx(U, {
                                                  className: "w-3 h-3",
                                                }),
                                                new Date(
                                                  t.start_at
                                                ).toLocaleString("pt-BR", {
                                                  day: "2-digit",
                                                  month: "2-digit",
                                                  hour: "2-digit",
                                                  minute: "2-digit",
                                                }),
                                              ],
                                            }),
                                            t.client_name &&
                                              e.jsxs("span", {
                                                className:
                                                  "flex items-center gap-1",
                                                children: [
                                                  e.jsx(ie, {
                                                    className: "w-3 h-3",
                                                  }),
                                                  t.client_name,
                                                ],
                                              }),
                                            t.client_phone &&
                                              e.jsxs("span", {
                                                className:
                                                  "flex items-center gap-1",
                                                children: [
                                                  e.jsx(ce, {
                                                    className: "w-3 h-3",
                                                  }),
                                                  t.client_phone,
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                },
                                t.id
                              );
                            }),
                  }),
            ],
          }),
        }),
        e.jsx(oe, {
          open: K,
          onOpenChange: j,
          children: e.jsxs(de, {
            className: "max-w-lg max-h-[90vh] overflow-y-auto",
            children: [
              e.jsx(me, {
                children: e.jsx(xe, {
                  children: u ? "Editar agendamento" : "Novo agendamento",
                }),
              }),
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx(i, { children: "Título *" }),
                      e.jsx(p, {
                        value: s.title,
                        onChange: (t) => r({ ...s, title: t.target.value }),
                        placeholder: "Ex: Troca de tela iPhone 13",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-3 gap-2",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx(i, { children: "Data *" }),
                          e.jsx(p, {
                            type: "date",
                            value: s.date,
                            onChange: (t) => r({ ...s, date: t.target.value }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(i, { children: "Início" }),
                          e.jsx(p, {
                            type: "time",
                            value: s.start_time,
                            onChange: (t) =>
                              r({ ...s, start_time: t.target.value }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(i, { children: "Fim" }),
                          e.jsx(p, {
                            type: "time",
                            value: s.end_time,
                            onChange: (t) =>
                              r({ ...s, end_time: t.target.value }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(i, { children: "Cliente (opcional)" }),
                      e.jsxs(C, {
                        value: s.client_id,
                        onValueChange: J,
                        children: [
                          e.jsx(S, {
                            children: e.jsx(D, {
                              placeholder: "Selecione um cliente cadastrado",
                            }),
                          }),
                          e.jsx(k, {
                            children: O.map((t) =>
                              e.jsx(d, { value: t.id, children: t.name }, t.id)
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx(i, { children: "Nome do cliente" }),
                          e.jsx(p, {
                            value: s.client_name,
                            onChange: (t) =>
                              r({ ...s, client_name: t.target.value }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(i, { children: "Telefone" }),
                          e.jsx(p, {
                            value: s.client_phone,
                            onChange: (t) =>
                              r({ ...s, client_phone: t.target.value }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(i, { children: "Tipo de serviço" }),
                      e.jsx(p, {
                        value: s.service_type,
                        onChange: (t) =>
                          r({ ...s, service_type: t.target.value }),
                        placeholder: "Ex: Manutenção, Visita técnica...",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx(i, { children: "Status" }),
                          e.jsxs(C, {
                            value: s.status,
                            onValueChange: (t) => r({ ...s, status: t }),
                            children: [
                              e.jsx(S, { children: e.jsx(D, {}) }),
                              e.jsx(k, {
                                children: Object.entries(T).map(([t, a]) =>
                                  e.jsx(d, { value: t, children: a.label }, t)
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx(i, { children: "Cor" }),
                          e.jsx("div", {
                            className: "flex gap-1 mt-2",
                            children: E.map((t) =>
                              e.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => r({ ...s, color: t }),
                                  className: `w-7 h-7 rounded-full transition-transform ${
                                    s.color === t
                                      ? "ring-2 ring-offset-2 ring-primary scale-110"
                                      : ""
                                  }`,
                                  style: { backgroundColor: t },
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(i, { children: "Lembrete" }),
                      e.jsxs(C, {
                        value: String(s.reminder_minutes),
                        onValueChange: (t) =>
                          r({ ...s, reminder_minutes: parseInt(t, 10) }),
                        children: [
                          e.jsx(S, { children: e.jsx(D, {}) }),
                          e.jsxs(k, {
                            children: [
                              e.jsx(d, {
                                value: "0",
                                children: "Sem lembrete",
                              }),
                              e.jsx(d, {
                                value: "5",
                                children: "5 minutos antes",
                              }),
                              e.jsx(d, {
                                value: "15",
                                children: "15 minutos antes",
                              }),
                              e.jsx(d, {
                                value: "30",
                                children: "30 minutos antes",
                              }),
                              e.jsx(d, {
                                value: "60",
                                children: "1 hora antes",
                              }),
                              e.jsx(d, {
                                value: "120",
                                children: "2 horas antes",
                              }),
                              e.jsx(d, {
                                value: "1440",
                                children: "1 dia antes",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-[11px] text-muted-foreground mt-1",
                        children:
                          "Notificação aparece na tela e no navegador no horário definido.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(i, { children: "Anotações" }),
                      e.jsx(he, {
                        value: s.notes,
                        onChange: (t) => r({ ...s, notes: t.target.value }),
                        rows: 2,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(ue, {
                className: "flex-col sm:flex-row gap-2",
                children: [
                  u &&
                    e.jsxs(o, {
                      variant: "destructive",
                      onClick: G,
                      className: "gap-1 sm:mr-auto",
                      children: [
                        e.jsx(ge, { className: "w-4 h-4" }),
                        "Excluir",
                      ],
                    }),
                  e.jsx(o, {
                    variant: "outline",
                    onClick: () => j(!1),
                    children: "Cancelar",
                  }),
                  e.jsx(o, { onClick: Q, children: u ? "Salvar" : "Criar" }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
export { fe as default };
