# Publicação do KV CELL Crediário MDM

1. Abra `android-kvcell-finance-mdm/` no Android Studio.
2. Gere um APK de release e assine com a chave privada da KV CELL.
3. Publique o APK em HTTPS.
4. Calcule o SHA-256 do APK e converta o digest para Base64 quando usar o QR oficial de provisionamento Android.
5. Preencha `provisioning-template.json` com URL e checksum reais.
6. O QR do painel (`/api/mdm/qr`) é o QR de vínculo do contrato. O `provisioning-template.json` é o modelo separado para provisionamento oficial de Device Owner em aparelhos compatíveis.

Não coloque keystore, senha de assinatura ou segredo de produção dentro do repositório.
