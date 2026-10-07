# KV CELL Crediário MDM — companion app

Aplicativo Android de matrícula para aparelhos financiados pela KV CELL. O projeto foi incluído no V101 para permitir que o painel gere um QR de vínculo e o aparelho consulte contrato, parcela, vencimento e política.

## Fluxo
1. Instale o APK assinado pela KV CELL no aparelho.
2. Crie o contrato em **Crediário MDM** no painel.
3. Abra o contrato e mostre o QR.
4. No aparelho, abra o QR pelo navegador/leitor compatível; o deep link `kvcellmdm://enroll?...` abre o app.
5. O app envia a matrícula ao painel e passa a consultar o estado do contrato.
6. Para gestão forte, o aparelho deve ser provisionado como **Device Owner** durante o fluxo autorizado de gerenciamento Android. Nesse modo o app pode usar `DevicePolicyManager` e Lock Task.

## Importante
- O projeto não tenta esconder o app, roubar credenciais ou remover proteções de terceiros.
- `Device Owner` é uma política oficial do Android; em aparelhos já configurados, o provisionamento pode exigir redefinição de fábrica ou procedimento de gerenciamento corporativo.
- O painel controla o estado contratual e registra as ações. A liberação ocorre quando o contrato é colocado novamente em política normal/ativa.
- Para pagamentos online, preencha `payment_url` no contrato ou conecte um gateway no backend. O app abre o link oficial configurado.
- Antes de produção, assine o APK, configure HTTPS e publique o APK em um endereço estável. O projeto propositalmente não contém uma chave de assinatura.
