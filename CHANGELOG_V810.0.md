# KV CELL OS PREMIUM — V810.0

## Objetivo
Evolução incremental da base V700 sem remoção de módulos.

## Alterações
1. Portal público do Crediário/MDM por token.
2. Portal com aparelho, IMEI, serial, Android, bateria/último heartbeat, política, saldo, parcelas, vencimentos e pagamento/PIX.
3. Heartbeat do agente MDM enriquecido com metadados técnicos.
4. Correção de fluxo ADB: bridge real é priorizado; WebUSB não é tratado como se fosse uma sessão ADB.
5. Preservação do bridge e dos comandos permitidos existentes.
6. Camada visual adicional baseada no estilo de referência fornecido pelo Tech OS Pro.
7. Fonte Poppins incorporada em `static/fonts/`.
8. Compatibilidade V810 adicionada ao final do `app.js`, evitando apagar as camadas V500/V520/V600/V700.
9. Validações de sintaxe Python/JavaScript executadas e fluxo de portal/heartbeat testado em servidor local isolado.

## Não alterado
- Unidades LAGOS + MAGÉ.
- Financeiro, PDV, estoque, CRM, OS, catálogo, fiado, IA e demais módulos existentes.
- Estrutura Square Cloud.
- Políticas de segurança que exigem Device Owner legítimo.

## Observação
O agente Android precisa ser compilado/publicado separadamente para uso real; este pacote mantém o projeto-fonte existente e suas rotinas de integração.

## V810.0 — atualização de UX/ADB/MDM — 2026-10-07

### Interface / estilo
- Reforçada a identidade KV CELL preto + amarelo com linguagem visual inspirada nos fluxos do Tech OS PRO.
- Tipografia Poppins incorporada localmente a partir dos assets fornecidos.
- Cards, métricas, tabelas, tabs, modais e botões receberam hierarquia visual, estados hover e acabamento de dashboard.
- Portais públicos de orçamento, OS e crediário receberam layout premium responsivo, linha do tempo, cards de resumo e ações destacadas.

### Orçamentos / OS / WhatsApp
- Orçamentos ganharam ações de abrir, copiar link e enviar pelo WhatsApp.
- O WhatsApp de orçamento gera a mensagem já com o link público.
- Ações de OS/desbloqueio preservadas e o WhatsApp passa a incluir o link de acompanhamento quando disponível.
- Fluxo público de acompanhamento continua usando tokens individuais.

### ADB
- Bridge local passou a responder também ao Private Network Access do Chrome/Edge (`Access-Control-Allow-Private-Network`), importante quando o painel está hospedado em HTTPS e o bridge está em `127.0.0.1`.
- OPTIONS/CORS do bridge reforçado.
- Fluxo continua exigindo ADB autorizado; WebUSB não é confundido com sessão ADB real.

### MDM Android
- Corrigido trecho Java inválido no agente.
- Adicionado `BUILD_KV_CELL_MDM.bat` para gerar o APK em máquina com Android SDK/Gradle.
- Instalação via bridge continua disponível por upload de APK.
- Device Owner continua respeitando as regras oficiais do Android; nenhuma proteção é contornada.

### Runtime
- Restaurado o entrypoint `if __name__ == '__main__'` com `ThreadingHTTPServer`, necessário para `MAIN=app.py` no Square Cloud.
- Smoke test V810 passou novamente após as correções.
