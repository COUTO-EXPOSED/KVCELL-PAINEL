import {
  W as Ae,
  bG as We,
  r as a,
  j as e,
  B as u,
  s as N,
  G as I,
  bx as ee,
  S as se,
  C as y,
  f as Xe,
  bL as Ye,
  A as $e,
  a$ as i,
  dn as Qe,
  cH as Ze,
  w,
  bU as F,
  bQ as Te,
  fM as Je,
} from "./index-V8ZHCWL2.js";
import { A as Ke } from "./arrow-left-CaH5Nh3G.js";
import { B as es } from "./battery-DmY1rSze.js";
import { M as Ce } from "./mic-D-2h8FNy.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Me = Ae("Compass", [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const te = Ae("Volume2", [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw",
      },
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
    ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
  ]),
  Re = [
    { id: "touch", label: "Touch Screen", status: "pending" },
    { id: "camera-back", label: "Câmera Traseira", status: "pending" },
    { id: "camera-front", label: "Câmera Frontal", status: "pending" },
    { id: "audio", label: "Alto-falante", status: "pending" },
    { id: "microphone", label: "Microfone", status: "pending" },
    { id: "wifi", label: "Wi-Fi", status: "pending" },
    { id: "screen-on", label: "Tela / Display", status: "pending" },
    { id: "battery", label: "Bateria", status: "pending" },
    { id: "location", label: "Localização (GPS)", status: "pending" },
    { id: "sensor", label: "Sensores", status: "pending" },
  ];
function os() {
  const { token: O } = We(),
    [l, Ee] = a.useState(null),
    [Le, Pe] = a.useState(!0),
    [ae, B] = a.useState(""),
    [k, re] = a.useState("intro"),
    [x, De] = a.useState(0),
    [d, ne] = a.useState(Re),
    [oe, b] = a.useState(!1),
    [_e, ze] = a.useState(!1),
    S = a.useRef(null),
    [ce, ie] = a.useState(0),
    le = a.useRef(null),
    j = a.useRef(null),
    [T, de] = a.useState(null),
    [C, U] = a.useState(!1),
    [M, me] = a.useState(!1),
    [g, V] = a.useState(0),
    [R, H] = a.useState(null),
    A = a.useRef(0),
    [E, L] = a.useState(!1),
    [W, X] = a.useState(!1),
    [v, Y] = a.useState(null),
    [ue, P] = a.useState(!1),
    $ = a.useRef(null),
    D = a.useRef([]),
    qe = a.useRef(null),
    [xe, fe] = a.useState(null),
    [p, Ge] = a.useState(null),
    [_, Q] = a.useState(!1),
    [he, z] = a.useState(!1),
    [f, Ie] = a.useState(null),
    [ge, Z] = a.useState(!0);
  a.useEffect(() => {
    if (!O) return;
    (async () => {
      const { data: t, error: n } = await w
        .from("auto_checklist_sessions")
        .select("*")
        .eq("token", O)
        .maybeSingle();
      n || !t
        ? B("Sessão não encontrada ou expirada.")
        : new Date(t.expires_at) < new Date()
        ? B("Esta sessão expirou. Solicite um novo código ao técnico.")
        : t.status === "completed"
        ? B("Este teste já foi concluído.")
        : (Ee(t),
          await w
            .from("auto_checklist_sessions")
            .update({ status: "in_progress" })
            .eq("id", t.id)),
        Pe(!1);
    })();
  }, [O]),
    a.useEffect(
      () => () => {
        T?.getTracks().forEach((s) => s.stop()),
          R?.getTracks().forEach((s) => s.stop()),
          cancelAnimationFrame(A.current);
      },
      [T, R]
    );
  const q = d[x],
    pe =
      (d.filter((s) => s.status === "passed" || s.status === "failed").length /
        d.length) *
      100,
    Fe = () => {
      const s = q?.id;
      (s === "camera-back" || s === "camera-front") &&
        (T?.getTracks().forEach((t) => t.stop()), de(null), U(!1)),
        s === "microphone" &&
          ($.current?.state === "recording" && $.current.stop(),
          R?.getTracks().forEach((t) => t.stop()),
          H(null),
          cancelAnimationFrame(A.current),
          V(0),
          L(!1),
          X(!1));
    },
    be = (s) => {
      Fe(),
        ne((t) => t.map((n, o) => (o === x ? { ...n, status: s } : n))),
        x < d.length - 1 ? De((t) => t + 1) : re("complete");
    },
    Oe = async () => {
      if (l) {
        b(!0);
        try {
          const s = {};
          d.forEach((r) => {
            s[r.id] = r.status === "passed";
          });
          const t = d.find((r) => r.id === "camera-back"),
            n = d.find((r) => r.id === "camera-front");
          t && n && (s.camera = t.status === "passed" || n.status === "passed");
          const { error: o, count: m } = await w
            .from("auto_checklist_sessions")
            .update({
              status: "completed",
              results: s,
              updated_at: new Date().toISOString(),
            })
            .eq("token", l.token);
          if (o) {
            F.error("Erro ao salvar: " + o.message), b(!1);
            return;
          }
          const { data: c, error: h } = await w
            .from("auto_checklist_sessions")
            .select("status, results")
            .eq("token", l.token)
            .maybeSingle();
          if (h || c?.status !== "completed") {
            const { error: r } = await w
              .from("auto_checklist_sessions")
              .update({
                status: "completed",
                results: s,
                updated_at: new Date().toISOString(),
              })
              .eq("id", l.id);
            if (r) {
              F.error("Erro ao salvar. Tente novamente."), b(!1);
              return;
            }
          }
          ze(!0), b(!1), F.success("Checklist salvo com sucesso!");
        } catch {
          F.error("Erro inesperado ao salvar o checklist."), b(!1);
        }
      }
    },
    Be = a.useCallback(() => {
      const s = S.current;
      if (!s) return;
      const t = s.getContext("2d");
      if (!t) return;
      const n = s.getBoundingClientRect();
      (s.width = n.width * 2),
        (s.height = n.height * 2),
        t.scale(2, 2),
        (t.fillStyle = "#f1f5f9"),
        t.fillRect(0, 0, n.width, n.height),
        (t.strokeStyle = "#e2e8f0"),
        (t.lineWidth = 0.5);
      const o = 8,
        m = 12,
        c = n.width / o,
        h = n.height / m;
      for (let r = 0; r <= o; r++)
        t.beginPath(),
          t.moveTo(r * c, 0),
          t.lineTo(r * c, n.height),
          t.stroke();
      for (let r = 0; r <= m; r++)
        t.beginPath(), t.moveTo(0, r * h), t.lineTo(n.width, r * h), t.stroke();
      (le.current = t), ie(0);
    }, []),
    je = (s) => {
      const t = le.current;
      if (!t || !S.current) return;
      s.preventDefault();
      const o = S.current.getBoundingClientRect();
      if ("touches" in s)
        for (let m = 0; m < s.touches.length; m++) {
          const c = s.touches[m],
            h = c.clientX - o.left,
            r = c.clientY - o.top;
          (t.fillStyle = "#3b82f6"),
            t.beginPath(),
            t.arc(h, r, 12, 0, Math.PI * 2),
            t.fill();
        }
      else {
        const m = s.clientX - o.left,
          c = s.clientY - o.top;
        (t.fillStyle = "#3b82f6"),
          t.beginPath(),
          t.arc(m, c, 12, 0, Math.PI * 2),
          t.fill();
      }
      ie((m) => m + 1);
    },
    ve = async (s) => {
      try {
        T?.getTracks().forEach((n) => n.stop());
        const t = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: s },
        });
        de(t),
          j.current && ((j.current.srcObject = t), j.current.play(), U(!0));
      } catch {
        U(!1);
      }
    },
    Ne = () => {
      me(!0);
      const s = new (window.AudioContext || window.webkitAudioContext)(),
        t = s.createOscillator(),
        n = s.createGain();
      t.connect(n),
        n.connect(s.destination),
        (t.frequency.value = 440),
        (n.gain.value = 0.3),
        t.start(),
        setTimeout(() => {
          t.stop(), s.close(), me(!1);
        }, 2e3);
    },
    J = async () => {
      try {
        const s = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        H(s), X(!0), L(!1), Y(null), (D.current = []);
        const t = new (window.AudioContext || window.webkitAudioContext)(),
          n = t.createMediaStreamSource(s),
          o = t.createAnalyser();
        (o.fftSize = 256), (o.smoothingTimeConstant = 0.5), n.connect(o);
        const m = new Uint8Array(o.frequencyBinCount),
          c = new MediaRecorder(s, {
            mimeType: MediaRecorder.isTypeSupported("audio/webm")
              ? "audio/webm"
              : "audio/mp4",
          });
        ($.current = c),
          (c.ondataavailable = (r) => {
            r.data.size > 0 && D.current.push(r.data);
          }),
          (c.onstop = () => {
            if (D.current.length > 0) {
              const r = new Blob(D.current, { type: c.mimeType }),
                G = URL.createObjectURL(r);
              Y(G);
            }
            X(!1);
          }),
          c.start(100);
        const h = () => {
          if (c.state !== "recording") return;
          const r = new Uint8Array(o.fftSize);
          o.getByteTimeDomainData(r);
          let G = 0;
          for (let K = 0; K < r.length; K++) {
            const Se = (r[K] - 128) / 128;
            G += Se * Se;
          }
          const He = Math.sqrt(G / r.length),
            ke = Math.min(100, He * 400);
          V(ke), ke > 5 && L(!0), (A.current = requestAnimationFrame(h));
        };
        h(),
          setTimeout(() => {
            c.state === "recording" &&
              (c.stop(),
              s.getTracks().forEach((r) => r.stop()),
              H(null),
              cancelAnimationFrame(A.current),
              t.close());
          }, 5e3);
      } catch {
        V(-1);
      }
    },
    Ue = () => {
      if (!v) return;
      const s = new Audio(v);
      (qe.current = s),
        P(!0),
        (s.onended = () => P(!1)),
        (s.onerror = () => P(!1)),
        s.play().catch(() => P(!1));
    },
    ye = () => {
      z(!0),
        Q(!1),
        "geolocation" in navigator
          ? navigator.geolocation.getCurrentPosition(
              (s) => {
                Ge({ lat: s.coords.latitude, lng: s.coords.longitude }), z(!1);
              },
              () => {
                Q(!0), z(!1);
              },
              { timeout: 1e4, enableHighAccuracy: !0 }
            )
          : (Q(!0), z(!1));
    },
    we = () => {
      const s = (t) => {
        t.accelerationIncludingGravity &&
          Ie({
            x: Math.round((t.accelerationIncludingGravity.x || 0) * 100) / 100,
            y: Math.round((t.accelerationIncludingGravity.y || 0) * 100) / 100,
            z: Math.round((t.accelerationIncludingGravity.z || 0) * 100) / 100,
          });
      };
      if ("DeviceMotionEvent" in window) {
        const t = DeviceMotionEvent;
        typeof t.requestPermission == "function"
          ? t
              .requestPermission()
              .then((n) => {
                n === "granted"
                  ? (window.addEventListener("devicemotion", s),
                    setTimeout(
                      () => window.removeEventListener("devicemotion", s),
                      5e3
                    ))
                  : Z(!1);
              })
              .catch(() => Z(!1))
          : (window.addEventListener("devicemotion", s),
            setTimeout(
              () => window.removeEventListener("devicemotion", s),
              5e3
            ));
      } else Z(!1);
    };
  if (
    (a.useEffect(() => {
      if (k !== "testing") return;
      const s = d[x];
      !s ||
        s.status !== "pending" ||
        (ne((t) =>
          t.map((n, o) => (o === x ? { ...n, status: "testing" } : n))
        ),
        s.id === "touch" && Be(),
        s.id === "camera-back" && ve("environment"),
        s.id === "camera-front" && ve("user"),
        s.id === "audio" && Ne(),
        s.id === "microphone" && J(),
        s.id === "location" && ye(),
        s.id === "sensor" && we());
    }, [x, k]),
    xe)
  )
    return e.jsx("div", {
      className: "fixed inset-0 z-[9999] flex items-end justify-center pb-8",
      style: { backgroundColor: xe },
      children: e.jsxs(u, {
        onClick: () => fe(null),
        variant: "secondary",
        className: "h-12 px-8 font-bold gap-2 shadow-2xl",
        children: [e.jsx(Ke, { className: "w-5 h-5" }), "Voltar"],
      }),
    });
  const Ve = () => {
    if (!q) return null;
    switch (q.id) {
      case "touch":
        return e.jsxs("div", {
          className: "space-y-2 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6",
          children: [
            e.jsx("p", {
              className: "text-sm text-center text-muted-foreground px-5",
              children: "Arraste o dedo por toda a tela para testar o touch",
            }),
            e.jsx("canvas", {
              ref: S,
              className:
                "w-full rounded-b-xl border-t-2 border-primary/20 bg-secondary/30 touch-none",
              style: { height: "calc(100vh - 320px)", minHeight: "300px" },
              onTouchMove: je,
              onMouseMove: je,
              onTouchStart: (s) => s.preventDefault(),
            }),
            ce > 30 &&
              e.jsxs("p", {
                className:
                  "text-xs text-center text-green-600 font-medium pb-3 px-5",
                children: ["✓ Touch detectado com sucesso! (", ce, " pontos)"],
              }),
          ],
        });
      case "camera-back":
        return e.jsxs("div", {
          className: "space-y-3",
          children: [
            e.jsx("p", {
              className: "text-sm text-center text-muted-foreground",
              children: "Permita o acesso à câmera traseira",
            }),
            e.jsxs("div", {
              className:
                "relative rounded-xl overflow-hidden bg-black aspect-[3/4]",
              children: [
                e.jsx("video", {
                  ref: j,
                  autoPlay: !0,
                  playsInline: !0,
                  muted: !0,
                  className: "w-full h-full object-cover",
                }),
                !C &&
                  e.jsx("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center bg-secondary/80",
                    children: e.jsx(N, {
                      className: "w-8 h-8 animate-spin text-primary",
                    }),
                  }),
              ],
            }),
            C &&
              e.jsx("p", {
                className: "text-xs text-center text-green-600 font-medium",
                children: "✓ Câmera traseira funcionando!",
              }),
          ],
        });
      case "camera-front":
        return e.jsxs("div", {
          className: "space-y-3",
          children: [
            e.jsx("p", {
              className: "text-sm text-center text-muted-foreground",
              children: "Testando câmera frontal",
            }),
            e.jsxs("div", {
              className:
                "relative rounded-xl overflow-hidden bg-black aspect-[3/4]",
              children: [
                e.jsx("video", {
                  ref: j,
                  autoPlay: !0,
                  playsInline: !0,
                  muted: !0,
                  className: "w-full h-full object-cover",
                  style: { transform: "scaleX(-1)" },
                }),
                !C &&
                  e.jsx("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center bg-secondary/80",
                    children: e.jsx(N, {
                      className: "w-8 h-8 animate-spin text-primary",
                    }),
                  }),
              ],
            }),
            C &&
              e.jsx("p", {
                className: "text-xs text-center text-green-600 font-medium",
                children: "✓ Câmera frontal funcionando!",
              }),
          ],
        });
      case "audio":
        return e.jsxs("div", {
          className: "space-y-4 text-center",
          children: [
            e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Um som será emitido pelos alto-falantes",
            }),
            e.jsx("div", {
              className: "flex justify-center",
              children: e.jsx("div", {
                className: i(
                  "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300",
                  M
                    ? "bg-primary/20 scale-110 animate-pulse"
                    : "bg-secondary/50"
                ),
                children: e.jsx(te, {
                  className: i(
                    "w-12 h-12 transition-colors",
                    M ? "text-primary" : "text-muted-foreground"
                  ),
                }),
              }),
            }),
            !M &&
              e.jsxs(u, {
                variant: "outline",
                onClick: Ne,
                className: "gap-2",
                children: [
                  e.jsx(te, { className: "w-4 h-4" }),
                  " Tocar novamente",
                ],
              }),
            e.jsx("p", {
              className: "text-xs text-muted-foreground",
              children: M ? "🔊 Reproduzindo som..." : "Você ouviu o som?",
            }),
          ],
        });
      case "microphone":
        return e.jsxs("div", {
          className: "space-y-4 text-center",
          children: [
            e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: v
                ? "Ouça sua gravação para confirmar o microfone"
                : "Fale algo para gravar e testar o microfone",
            }),
            e.jsxs("div", {
              className: "flex flex-col items-center gap-3",
              children: [
                e.jsxs("div", {
                  className: i(
                    "w-28 h-28 rounded-full flex items-center justify-center transition-all duration-200 relative",
                    E
                      ? "bg-green-500/20"
                      : g > 5
                      ? "bg-amber-500/20"
                      : "bg-secondary/50"
                  ),
                  children: [
                    e.jsx(Ce, {
                      className: i(
                        "w-14 h-14 transition-colors",
                        E
                          ? "text-green-600"
                          : g > 5
                          ? "text-amber-500"
                          : "text-muted-foreground"
                      ),
                    }),
                    W &&
                      g > 3 &&
                      e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-30",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-2 rounded-full border border-green-400 animate-ping opacity-20",
                            style: { animationDelay: "0.3s" },
                          }),
                        ],
                      }),
                  ],
                }),
                W &&
                  g >= 0 &&
                  e.jsxs("div", {
                    className: "w-full max-w-[250px] space-y-1",
                    children: [
                      e.jsx("div", {
                        className:
                          "h-6 bg-secondary rounded-full overflow-hidden flex items-center px-1",
                        children: e.jsx("div", {
                          className: i(
                            "h-4 rounded-full transition-all duration-75",
                            E
                              ? "bg-gradient-to-r from-green-400 to-green-600"
                              : "bg-gradient-to-r from-amber-400 to-amber-600"
                          ),
                          style: { width: `${Math.max(2, g)}%` },
                        }),
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: E
                          ? "✓ Som detectado! Gravando..."
                          : g > 3
                          ? "Detectando... continue falando"
                          : "🎙️ Gravando... fale algo no microfone",
                      }),
                    ],
                  }),
                v &&
                  !W &&
                  e.jsxs("div", {
                    className: "w-full max-w-[280px] space-y-3",
                    children: [
                      e.jsxs("div", {
                        className:
                          "p-3 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 space-y-2",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs text-green-700 dark:text-green-400 font-semibold",
                            children: "✓ Gravação concluída!",
                          }),
                          e.jsxs(u, {
                            variant: "outline",
                            onClick: Ue,
                            disabled: ue,
                            className:
                              "w-full gap-2 border-green-300 text-green-700 hover:bg-green-100 dark:border-green-700 dark:text-green-400",
                            children: [
                              e.jsx(te, { className: "w-4 h-4" }),
                              ue ? "🔊 Reproduzindo..." : "▶ Ouvir Gravação",
                            ],
                          }),
                        ],
                      }),
                      e.jsx(u, {
                        variant: "ghost",
                        onClick: () => {
                          Y(null), L(!1), J();
                        },
                        className: "w-full text-xs gap-1",
                        children: "🔄 Gravar novamente",
                      }),
                    ],
                  }),
                g < 0 &&
                  e.jsx("p", {
                    className: "text-xs text-destructive",
                    children: "Não foi possível acessar o microfone",
                  }),
                !R &&
                  !v &&
                  g >= 0 &&
                  e.jsxs(u, {
                    variant: "outline",
                    onClick: J,
                    className: "gap-2",
                    children: [
                      e.jsx(Ce, { className: "w-4 h-4" }),
                      " Ativar Microfone",
                    ],
                  }),
              ],
            }),
          ],
        });
      case "wifi":
        return e.jsxs("div", {
          className: "space-y-4 text-center",
          children: [
            e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Verificando conexão de rede",
            }),
            e.jsx("div", {
              className: "flex justify-center",
              children: e.jsx("div", {
                className: i(
                  "w-24 h-24 rounded-full flex items-center justify-center",
                  navigator.onLine ? "bg-green-500/20" : "bg-destructive/20"
                ),
                children: e.jsx(Je, {
                  className: i(
                    "w-12 h-12",
                    navigator.onLine ? "text-green-600" : "text-destructive"
                  ),
                }),
              }),
            }),
            e.jsx("p", {
              className: i(
                "text-sm font-medium",
                navigator.onLine ? "text-green-600" : "text-destructive"
              ),
              children: navigator.onLine
                ? "✓ Conectado à rede"
                : "✕ Sem conexão",
            }),
          ],
        });
      case "screen-on":
        return e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsx("p", {
              className: "text-sm text-center text-muted-foreground",
              children: "Toque em uma cor para visualizar em tela cheia",
            }),
            e.jsx("div", {
              className: "grid grid-cols-3 gap-3",
              children: [
                { color: "#ef4444", label: "Vermelho" },
                { color: "#22c55e", label: "Verde" },
                { color: "#3b82f6", label: "Azul" },
                { color: "#eab308", label: "Amarelo" },
                { color: "#000000", label: "Preto" },
                { color: "#ffffff", label: "Branco" },
              ].map(({ color: s, label: t }) =>
                e.jsx(
                  "button",
                  {
                    onClick: () => fe(s),
                    className:
                      "h-20 rounded-xl border-2 border-border/50 shadow-sm active:scale-95 transition-transform flex items-end justify-center pb-1",
                    style: { backgroundColor: s },
                    children: e.jsx("span", {
                      className: i(
                        "text-[10px] font-bold px-2 py-0.5 rounded-full",
                        s === "#ffffff" || s === "#eab308"
                          ? "bg-black/10 text-black"
                          : "bg-white/20 text-white"
                      ),
                      children: t,
                    }),
                  },
                  s
                )
              ),
            }),
            e.jsx("p", {
              className: "text-xs text-center text-muted-foreground",
              children: "Todas as cores estão visíveis e sem manchas?",
            }),
          ],
        });
      case "battery":
        return e.jsxs("div", {
          className: "space-y-4 text-center",
          children: [
            e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Verificando estado da bateria",
            }),
            e.jsx("div", {
              className: "flex justify-center",
              children: e.jsx("div", {
                className:
                  "w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center",
                children: e.jsx(es, { className: "w-12 h-12 text-green-600" }),
              }),
            }),
            e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "O dispositivo está carregando normalmente?",
            }),
          ],
        });
      case "location":
        return e.jsxs("div", {
          className: "space-y-4 text-center",
          children: [
            e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Verificando serviço de localização (GPS)",
            }),
            e.jsx("div", {
              className: "flex justify-center",
              children: e.jsx("div", {
                className: i(
                  "w-24 h-24 rounded-full flex items-center justify-center",
                  p
                    ? "bg-green-500/20"
                    : _
                    ? "bg-destructive/20"
                    : "bg-secondary/50"
                ),
                children: he
                  ? e.jsx(N, {
                      className: "w-12 h-12 animate-spin text-primary",
                    })
                  : e.jsx(Te, {
                      className: i(
                        "w-12 h-12",
                        p
                          ? "text-green-600"
                          : _
                          ? "text-destructive"
                          : "text-muted-foreground"
                      ),
                    }),
              }),
            }),
            p &&
              e.jsxs("div", {
                className: "text-xs text-green-600 font-medium space-y-1",
                children: [
                  e.jsx("p", { children: "✓ GPS funcionando!" }),
                  e.jsxs("p", {
                    className: "text-muted-foreground font-normal",
                    children: [
                      "Lat: ",
                      p.lat.toFixed(4),
                      " | Lng: ",
                      p.lng.toFixed(4),
                    ],
                  }),
                ],
              }),
            _ &&
              e.jsx("p", {
                className: "text-xs text-destructive",
                children: "Não foi possível acessar a localização",
              }),
            !p &&
              !_ &&
              !he &&
              e.jsxs(u, {
                variant: "outline",
                onClick: ye,
                className: "gap-2",
                children: [e.jsx(Te, { className: "w-4 h-4" }), " Testar GPS"],
              }),
          ],
        });
      case "sensor":
        return e.jsxs("div", {
          className: "space-y-4 text-center",
          children: [
            e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children:
                "Mova o dispositivo para testar acelerômetro / giroscópio",
            }),
            e.jsx("div", {
              className: "flex justify-center",
              children: e.jsx("div", {
                className: i(
                  "w-24 h-24 rounded-full flex items-center justify-center",
                  f ? "bg-green-500/20" : "bg-secondary/50"
                ),
                children: e.jsx(Me, {
                  className: i(
                    "w-12 h-12 transition-transform",
                    f ? "text-green-600" : "text-muted-foreground"
                  ),
                  style: f ? { transform: `rotate(${f.x * 5}deg)` } : void 0,
                }),
              }),
            }),
            f &&
              e.jsxs("div", {
                className: "text-xs space-y-1",
                children: [
                  e.jsx("p", {
                    className: "text-green-600 font-medium",
                    children: "✓ Sensores detectados!",
                  }),
                  e.jsxs("div", {
                    className:
                      "flex justify-center gap-4 text-muted-foreground",
                    children: [
                      e.jsxs("span", { children: ["X: ", f.x] }),
                      e.jsxs("span", { children: ["Y: ", f.y] }),
                      e.jsxs("span", { children: ["Z: ", f.z] }),
                    ],
                  }),
                ],
              }),
            !ge &&
              e.jsx("p", {
                className: "text-xs text-destructive",
                children: "Sensores não suportados neste navegador",
              }),
            !f &&
              ge &&
              e.jsxs(u, {
                variant: "outline",
                onClick: we,
                className: "gap-2",
                children: [
                  e.jsx(Me, { className: "w-4 h-4" }),
                  " Ativar Sensores",
                ],
              }),
          ],
        });
      default:
        return null;
    }
  };
  if (Le)
    return e.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center bg-background p-4",
      children: e.jsx(N, { className: "w-8 h-8 animate-spin text-primary" }),
    });
  if (ae)
    return e.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center bg-background p-4",
      children: e.jsxs(I, {
        className: "max-w-md w-full p-8 text-center space-y-4",
        children: [
          e.jsx(ee, { className: "w-16 h-16 text-destructive mx-auto" }),
          e.jsx("h1", {
            className: "text-xl font-bold",
            children: "Sessão Inválida",
          }),
          e.jsx("p", { className: "text-muted-foreground", children: ae }),
        ],
      }),
    });
  if (k === "intro")
    return e.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-background to-secondary/30 flex items-center justify-center p-4",
      children: e.jsxs(I, {
        className: "max-w-md w-full p-6 sm:p-8 space-y-6",
        children: [
          e.jsxs("div", {
            className: "text-center space-y-3",
            children: [
              l?.company_logo
                ? e.jsx("img", {
                    src: l.company_logo,
                    alt: "Logo",
                    className: "h-16 sm:h-20 mx-auto object-contain",
                  })
                : e.jsx("div", {
                    className:
                      "w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center",
                    children: e.jsx(se, {
                      className: "w-8 h-8 sm:w-10 sm:h-10 text-primary",
                    }),
                  }),
              l?.company_name &&
                e.jsx("p", {
                  className: "text-sm font-semibold text-primary",
                  children: l.company_name,
                }),
            ],
          }),
          e.jsxs("div", {
            className: "text-center space-y-2",
            children: [
              e.jsx("h1", {
                className: "text-xl sm:text-2xl font-bold",
                children: "Teste de Diagnóstico",
              }),
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children:
                  "Este teste irá verificar os principais componentes do seu dispositivo de forma automática.",
              }),
            ],
          }),
          l?.device_model &&
            e.jsxs("div", {
              className:
                "flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border",
              children: [
                e.jsx(se, { className: "w-5 h-5 text-primary flex-shrink-0" }),
                e.jsxs("div", {
                  className: "min-w-0",
                  children: [
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "Dispositivo",
                    }),
                    e.jsx("p", {
                      className: "font-medium text-sm truncate",
                      children: l.device_model,
                    }),
                  ],
                }),
              ],
            }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsx("p", {
                className:
                  "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                children: "Testes Incluídos",
              }),
              e.jsx("div", {
                className: "grid grid-cols-2 gap-1.5",
                children: Re.map((s) =>
                  e.jsxs(
                    "div",
                    {
                      className:
                        "flex items-center gap-2 text-xs p-2 rounded-lg bg-secondary/30",
                      children: [
                        e.jsx(y, {
                          className: "w-3.5 h-3.5 text-primary flex-shrink-0",
                        }),
                        e.jsx("span", { children: s.label }),
                      ],
                    },
                    s.id
                  )
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex items-start gap-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800",
            children: [
              e.jsx(Xe, {
                className: "w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0",
              }),
              e.jsx("p", {
                className: "text-xs text-amber-700 dark:text-amber-400",
                children:
                  "O teste requer acesso à câmera, microfone e localização. Permita o acesso quando solicitado.",
              }),
            ],
          }),
          e.jsxs(u, {
            onClick: () => re("testing"),
            className: "w-full h-12 text-base font-bold gap-2",
            children: [
              e.jsx(Ye, { className: "w-5 h-5" }),
              "Começar Teste",
              e.jsx($e, { className: "w-5 h-5" }),
            ],
          }),
        ],
      }),
    });
  if (k === "complete") {
    const s = d.filter((t) => t.status === "passed");
    return e.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-background to-secondary/30 flex items-center justify-center p-4",
      children: e.jsxs(I, {
        className: "max-w-md w-full p-6 sm:p-8 space-y-6",
        children: [
          l?.company_logo &&
            e.jsx("img", {
              src: l.company_logo,
              alt: "Logo",
              className: "h-12 mx-auto object-contain",
            }),
          e.jsxs("div", {
            className: "text-center space-y-2",
            children: [
              e.jsx("div", {
                className:
                  "w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center",
                children: e.jsx(y, { className: "w-8 h-8 text-primary" }),
              }),
              e.jsx("h1", {
                className: "text-xl font-bold",
                children: "Teste Concluído!",
              }),
              e.jsxs("p", {
                className: "text-sm text-muted-foreground",
                children: [s.length, " de ", d.length, " testes aprovados"],
              }),
            ],
          }),
          e.jsx("div", {
            className: "space-y-2",
            children: d.map((t) =>
              e.jsxs(
                "div",
                {
                  className: i(
                    "flex items-center justify-between p-3 rounded-xl border",
                    t.status === "passed"
                      ? "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800"
                      : "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800"
                  ),
                  children: [
                    e.jsx("span", {
                      className: "text-sm font-medium",
                      children: t.label,
                    }),
                    t.status === "passed"
                      ? e.jsxs("span", {
                          className:
                            "flex items-center gap-1 text-xs text-green-700 dark:text-green-400 font-semibold",
                          children: [
                            e.jsx(y, { className: "w-4 h-4" }),
                            " Funciona",
                          ],
                        })
                      : e.jsxs("span", {
                          className:
                            "flex items-center gap-1 text-xs text-red-700 dark:text-red-400 font-semibold",
                          children: [
                            e.jsx(ee, { className: "w-4 h-4" }),
                            " Não funciona",
                          ],
                        }),
                  ],
                },
                t.id
              )
            ),
          }),
          _e
            ? e.jsxs("div", {
                className:
                  "text-center p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800",
                children: [
                  e.jsx(y, {
                    className: "w-8 h-8 text-green-600 mx-auto mb-2",
                  }),
                  e.jsx("p", {
                    className:
                      "text-sm font-bold text-green-700 dark:text-green-400",
                    children: "Checklist salvo com sucesso!",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: "Os resultados foram enviados ao técnico.",
                  }),
                ],
              })
            : e.jsxs(u, {
                onClick: Oe,
                disabled: oe,
                className: "w-full h-12 text-base font-bold gap-2",
                children: [
                  oe
                    ? e.jsx(N, { className: "w-5 h-5 animate-spin" })
                    : e.jsx(Qe, { className: "w-5 h-5" }),
                  "Enviar Resultados ao Técnico",
                ],
              }),
        ],
      }),
    });
  }
  return e.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-br from-background to-secondary/30 flex flex-col",
    children: [
      e.jsx("div", {
        className:
          "sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b p-3 sm:p-4",
        children: e.jsxs("div", {
          className: "max-w-md mx-auto space-y-2",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    l?.company_logo
                      ? e.jsx("img", {
                          src: l.company_logo,
                          alt: "",
                          className: "h-6 object-contain",
                        })
                      : e.jsx(se, { className: "w-5 h-5 text-primary" }),
                    e.jsxs("span", {
                      className: "text-sm font-bold",
                      children: ["Teste ", x + 1, "/", d.length],
                    }),
                  ],
                }),
                e.jsxs("span", {
                  className: "text-xs text-muted-foreground font-medium",
                  children: [Math.round(pe), "% concluído"],
                }),
              ],
            }),
            e.jsx(Ze, { value: pe, className: "h-2" }),
          ],
        }),
      }),
      e.jsx("div", {
        className: "px-3 py-2 bg-secondary/20 border-b overflow-x-auto",
        children: e.jsx("div", {
          className: "max-w-md mx-auto flex gap-1",
          children: d.map((s, t) =>
            e.jsx(
              "div",
              {
                className: i(
                  "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all",
                  t === x
                    ? "bg-primary text-primary-foreground scale-110"
                    : s.status === "passed"
                    ? "bg-green-500 text-white"
                    : s.status === "failed"
                    ? "bg-red-500 text-white"
                    : "bg-secondary text-muted-foreground"
                ),
                children:
                  s.status === "passed"
                    ? "✓"
                    : s.status === "failed"
                    ? "✕"
                    : t + 1,
              },
              s.id
            )
          ),
        }),
      }),
      e.jsx("div", {
        className: "flex-1 flex items-center justify-center p-4",
        children: e.jsxs(I, {
          className: "max-w-md w-full p-5 sm:p-6 space-y-5",
          children: [
            e.jsxs("div", {
              className: "text-center",
              children: [
                e.jsx("h2", {
                  className: "text-lg font-bold",
                  children: q?.label,
                }),
                e.jsxs("p", {
                  className: "text-xs text-muted-foreground",
                  children: ["Etapa ", x + 1, " de ", d.length],
                }),
              ],
            }),
            Ve(),
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-3 pt-2",
              children: [
                e.jsxs(u, {
                  variant: "outline",
                  onClick: () => be("failed"),
                  className:
                    "h-12 gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-800 dark:hover:bg-red-950/30 font-bold",
                  children: [
                    e.jsx(ee, { className: "w-5 h-5" }),
                    "Não Funciona",
                  ],
                }),
                e.jsxs(u, {
                  onClick: () => be("passed"),
                  className:
                    "h-12 gap-2 bg-green-600 hover:bg-green-700 text-white font-bold",
                  children: [e.jsx(y, { className: "w-5 h-5" }), "Funciona"],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { os as default };
