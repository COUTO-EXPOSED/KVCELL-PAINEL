# KV CELL OS PREMIUM — V1000.0

## Objetivo
Evolução incremental do V700/V810 sem apagar módulos, botões ou fluxos existentes.

## Correções críticas
- A aba ADB não dispara mais chamadas repetidas ao `127.0.0.1:17321` quando a ponte local ainda não foi verificada.
- `GET /health` do bridge usa timeout curto e não envia `Content-Type` desnecessariamente.
- A ponte responde aos headers de Private Network Access do Chrome/Edge.
- Adicionado guia visual de conexão ADB para separar claramente **USB selecionado** de **sessão ADB real**.
- Bridge Windows ganhou scripts de instalação automática no login e diagnóstico.
- Adicionado endpoint `/public/mdm/apk` para servir o APK publicado localmente quando disponível.

## MDM / crediário
- Mantidas todas as funções anteriores.
- Adicionados atalhos de **Portal**, **WhatsApp**, QR, Receber, Bloquear e Liberar.
- Portal do cliente recebe ação de WhatsApp e continua mostrando parcelas, saldo, aparelho, política, PIX e pagamento.
- Link de acompanhamento pode ser copiado diretamente.
- Agente Android versionado como `1000.0`.
- Projeto Android preparado com Java 17 e `versionCode 1000`.

## Orçamentos / OS
- Mantidos os fluxos existentes de aprovação/recusa.
- Portal de orçamento recebe botão de WhatsApp e cópia do link.
- Portal de OS recebe botão de WhatsApp e cópia do acompanhamento.
- Estilo público reforçado com Poppins, cartões, timeline e hierarquia visual inspirada na referência fornecida.

## Visual
- Camada premium adicional baseada nos padrões visuais observados no Tech OS Pro fornecido: cards elevados, action hierarchy, pills, métricas, tabs, modais, tabelas densas e tipografia Poppins.
- Identidade permanece KV CELL: preto + amarelo.

## Limite técnico importante
O painel hospedado na Square Cloud não pode iniciar um processo ADB no Windows do técnico por segurança do navegador. O ADB real continua exigindo a ponte local `tools/kvcell_bridge.py`, iniciada pelo script Windows. Isso não é corrigível apenas no backend hospedado.

O MDM também respeita o provisionamento oficial do Android: não há bypass de FRP, senha, bootloader ou Device Owner.
