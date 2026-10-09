import { j as a, D as l, c, B as o, X as r } from "./index-V8ZHCWL2.js";
function x({ open: t, onOpenChange: s, mediaUrl: e, mediaType: i }) {
  return a.jsx(l, {
    open: t,
    onOpenChange: s,
    children: a.jsxs(c, {
      className: "max-w-4xl p-0 bg-black/95 border-0",
      children: [
        a.jsx(o, {
          variant: "ghost",
          size: "icon",
          className: "absolute top-4 right-4 z-50 text-white hover:bg-white/20",
          onClick: () => s(!1),
          children: a.jsx(r, { className: "h-6 w-6" }),
        }),
        a.jsx("div", {
          className:
            "flex items-center justify-center min-h-[60vh] max-h-[90vh]",
          children:
            i === "image"
              ? a.jsx("img", {
                  src: e,
                  alt: "Mídia em tela cheia",
                  className: "max-w-full max-h-[90vh] object-contain",
                })
              : a.jsx("video", {
                  src: e,
                  controls: !0,
                  autoPlay: !0,
                  className: "max-w-full max-h-[90vh]",
                }),
        }),
      ],
    }),
  });
}
export { x as M };
