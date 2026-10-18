# KV CELL OS PREMIUM V1111.1

## Correções implementadas nesta entrega
- Acompanhamento público de OS: busca por token, comparação sem distinção de maiúsculas/minúsculas e compatibilidade com links antigos que usam o ID numérico da OS.
- Links públicos: quando uma OS antiga é encontrada pelo ID e não tem token público, o sistema cria um token e persiste a correção sem apagar o registro.
- Status: mantém os valores de status existentes no banco; as ações de status da OS técnica salvam via API e a página pública reflete o valor persistido. Incluídas ações de status para desbloqueios na lista unificada.
- Edição da OS técnica: formulário ampliado para cliente, aparelho, marca/modelo/IMEI, tipo/descrição, diagnóstico, técnico, status, preço, garantia, custos e observações. Os dados adicionais existentes são preservados e validados antes de salvar.
- Navegação: removidas da barra lateral as opções MDM e “Serviços e Indicações”. Os atalhos visíveis de instalação/provisionamento MDM foram removidos da tela ADB. As tabelas legadas não são apagadas para proteger dados já existentes.
- Visual: estados de hover/active, brilho amarelo discreto, transições e respeito a `prefers-reduced-motion`.

## Preservação / implantação
- Não há migração destrutiva e não há banco vazio incluído no pacote.
- Mantidos `app.py`, `squarecloud.app`, `start.sh`, configuração de persistência e APIs existentes.
- Antes de atualizar uma instalação real, faça backup pelo recurso de exportação do painel ou pelo procedimento de backup já utilizado na Square Cloud.

## Limitações conhecidas desta versão
- A referência Tech OS Pro foi usada como direção visual; esta entrega não é uma cópia literal de 100% dos seus componentes internos.
- Não foi implementada nesta versão uma nova relação normalizada de vários aparelhos por OS nem um fluxo novo completo de orçamento. O campo `details_json` existente é preservado e editável, mas isso não equivale a um CRUD de múltiplos aparelhos validado.
- Os recursos ADB/antivírus permanecem baseados na implementação já presente no projeto KV CELL. Não foi possível provar compatibilidade de hardware em todos os aparelhos a partir do ambiente de build.
- A interface MDM foi retirada da navegação/atalhos, mas código de backend e tabelas históricas foram mantidos por segurança de dados; não foram eliminados do banco.
