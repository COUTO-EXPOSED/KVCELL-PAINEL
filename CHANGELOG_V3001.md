# KV CELL OS PREMIUM V3001

- Corrigida resolução de links públicos antigos por token e ID, incluindo fallback para links de desbloqueio compartilhados sob `/public/os/`.
- Formulário de edição da OS técnica ampliado para os campos operacionais existentes e mantém o mesmo ID do registro.
- Links de desbloqueio copiados passam a usar `/public/unlock/`; links técnicos usam `/public/os/`.
- Removidas da navegação Precificação, Funcionários, IA, Crediário/MDM e módulos digitais não solicitados, preservando APIs e tabelas para segurança dos dados.
- Adicionados efeitos OLED discretos, hover, feedback e respeito à preferência `prefers-reduced-motion`.

## Limitações verificadas
- O formulário de múltiplos aparelhos por OS não foi migrado para uma relação de banco nesta versão.
- Não foi possível validar dispositivos físicos ADB/antivírus nem o ambiente real da Square Cloud nesta sessão.
- As APIs de IA/MDM e tabelas históricas foram preservadas no backend para evitar migração destrutiva; os itens foram retirados da navegação/fluxos visíveis solicitados.
