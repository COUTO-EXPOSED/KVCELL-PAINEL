# KV CELL OS PREMIUM V2000.1

Pacote de atualização do projeto KV CELL OS enviado pelo usuário.

## Instalação segura

1. Baixe o ZIP e guarde uma cópia do deploy atual.
2. Faça backup pelo painel (`Administração → Backup completo`) antes de atualizar.
3. Extraia o ZIP e publique o conteúdo do diretório `KV_CELL_OS_PREMIUM_V2000.1` conforme o método de deploy já usado no seu projeto SquareCloud.
4. Preserve as variáveis de ambiente existentes e não substitua o `.env` de produção por `.env.example`.
5. Reinicie a aplicação e confira login, clientes, OS, orçamento público e estatísticas de técnicos.

## Novidade principal: múltiplos aparelhos por OS

Ao criar uma OS, preencha o aparelho principal e use **Adicionar outro aparelho** para anexar mais dispositivos. Eles compartilham o mesmo cliente e número de OS. Os dados extras são armazenados em `details_json`, campo já existente, e aparecem no link público da OS. O sistema não cria automaticamente novas OS nem altera os valores financeiros por aparelho: o valor total continua sendo o valor da OS como um todo.

## Técnico e produtividade

A tela **Técnicos** fica disponível no menu Gestão. Cadastre os profissionais antes de atribuí-los a uma OS. A OS usa o registro de técnico existente e mantém o nome legível no campo legado para compatibilidade com dados antigos.

## Compatibilidade e segurança

- Não há reset, truncamento ou exclusão de tabelas.
- Não altere chaves/tokens de produção durante a atualização.
- Links públicos existentes são mantidos.
- Custos internos não são adicionados à página pública; os aparelhos adicionais exibem somente marca/modelo/IMEI/série.

## Testes feitos nesta entrega

- Sintaxe Python: passou.
- Sintaxe JavaScript: passou.
- Smoke test do projeto: passou.

Testes em produção, login real, APIs externas, instalação de APK/MDM e conexão física USB/ADB dependem do ambiente do operador e não podem ser confirmados apenas pelo ZIP.
