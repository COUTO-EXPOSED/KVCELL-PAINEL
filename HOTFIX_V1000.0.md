# KV CELL V1000.0 — HOTFIX ADB / STATIC

Correções aplicadas após teste no Square Cloud:

1. `pages.adb` era atribuído como `window.pages.adb`, mas `pages` é um objeto local do `app.js`. Isso interrompia a execução do JavaScript com:
   `Cannot set properties of undefined (setting 'adb')`.
2. Como a execução do `app.js` parava nesse ponto, `kvAdbOpenConnectionGuide` não era registrado, causando:
   `ReferenceError: kvAdbOpenConnectionGuide is not defined`.
3. O servidor Python tratava somente o nome final do arquivo em `/static/...`, então `/static/fonts/*.woff2` procurava a fonte no diretório errado e retornava 404.
4. O MIME type de fontes também não era correto. O servidor agora preserva subdiretórios e responde `font/woff2`, `font/woff`, imagens e demais assets com MIME apropriado.
5. Smoke test completo passou após as correções.

Observação: `ERR_BLOCKED_BY_CLIENT` relacionado ao Sentry pode ser produzido por extensão/adblock do navegador e não é dependência funcional do painel.
