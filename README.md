# KV CELL OS PREMIUM — Ultimate

Sistema web próprio para gestão de assistência técnica, desbloqueios, vendas e duas unidades (LAGOS/MAGÉ).

## Stack
- Python 3 + biblioteca padrão
- SQLite
- HTML/CSS/JavaScript responsivo
- Sem FastAPI, Pydantic, Rust, Maturin ou dependências externas
- Compatível com deploy web na Square Cloud usando `PORT`

## Acesso inicial
- E-mail: `admin@kvcell.local`
- Senha: `kvcell123`

Altere a senha em produção antes de uso real. A versão inicial cria o administrador automaticamente no primeiro boot.

## Módulos
Painel com gráficos, clientes, aparelhos, compras/vitrine, consertos/OS, desbloqueios, PDV, precificação, orçamentos com link público, financeiro, estoque, compatibilidade de películas, aparelhos esquecidos, contratos com assinatura, usuários/permissões (estrutura), chat, administração/backup, auditoria e configurações.

## Checklist técnico em OS e desbloqueios
Inclui caixas seletoras para tela, conector, bateria, Wi-Fi, Bluetooth, áudio, microfone, câmeras, biometria, botões, rede, IMEI, conta, toque, carcaça e alimentação.

## Fotos
OS, desbloqueios, aparelhos comprados e aparelhos esquecidos aceitam múltiplas fotos e armazenam as imagens no registro.

## Links públicos
- Orçamento: `/public/quote/<token>`
- OS: `/public/os/<token>`

Esses links não exigem login e foram pensados para o cliente acompanhar pelo celular.

## Square Cloud
No upload/deploy, habilite **Publicação Web**. O servidor escuta `0.0.0.0:$PORT` e por padrão usa porta 80 se `PORT` não for informado.
