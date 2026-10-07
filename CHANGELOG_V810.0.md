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
