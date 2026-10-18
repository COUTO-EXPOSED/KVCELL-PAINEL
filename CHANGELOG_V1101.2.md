# KV CELL OS PREMIUM — V1101.2

## Ajustes pedidos
- Removidas da navegação visível as abas Comunidade e Catálogo Digital.
- Uma única aba **Aparelhos** reúne registros de bancada e aparelhos esquecidos/abandonados; registros esquecidos não ganham ação de vitrine automaticamente.
- Botão **Pôr na vitrine** na ficha de aparelho, com confirmação de titularidade/autorização e registro de custo, preço de venda, compra e estoque.
- Ordem de Serviço restaurada com seleção do técnico cadastrado, peças e produtos usados, qualidade da peça, custo interno separado do valor cobrado, checklist de entrada, mapa de avarias, fotos e dados de acesso do aparelho.
- A senha por desenho começa em modo clique: cada ponto é numerado e o primeiro mostra o indicador de início; há opção de arraste e modo PIN.
- O link público da OS mantém o mesmo token, rota e fluxo de aprovação. A página existente apenas ganha uma tabela de peças/produtos e valores quando os itens forem registrados; custos internos não são exibidos ao cliente.
- A OS mostra para a equipe uma comparação de preço com faixas públicas indicativas do RJ; a informação fica fora da página pública do cliente. As faixas são referência geral, não cotação exata de cada SKU.
- Películas: consulta local mantida, com consulta online e importação manual a partir da API pública documentada da Tabela Películas. VivaCell e Ordita permanecem como fontes complementares de conferência, sem sincronização automática alegada.
- Bot de IA corrigido para adicionar o prefixo `/bot` exigido pelo endpoint do servidor.
- Sessões encerram após 30 minutos sem atividade no navegador e o servidor também rejeita sessões ociosas após 30 minutos.

## Fontes externas consultadas
- Tabela Películas — catálogo/API pública: https://tabelapeliculas.com.br/ e https://tabelapeliculas.com.br/api-docs
- VivaCell — catálogo de compatibilidades: https://vivacell.app/pt/
- Ordita — compatibilidade de películas: https://ordita.app/peliculas
- Referências de serviços no RJ: https://loqal.com.br/servicos/celular/apple/rj
- Referências locais de reparo no Rio: https://infomixbotafogo.com.br/servicos/reparo-de-celular/
- Referência local RJ para preços específicos de iPhone 14: https://infomixbotafogo.com.br/servicos/conserto-de-celular/largo-do-machado/
- Tabela pública de baterias por modelo de iPhone (Rio de Janeiro): https://www.aquitemimportados.com.br/assistencia/troca-de-bateria

## Limitações / validação
- A consulta de películas online precisa de acesso de saída à internet no servidor; a importação é acionada pelo operador e registra a fonte. Não foi configurada sincronização em massa dos catálogos privados/sem API de outros fornecedores.
- As faixas de preço são orientativas e variam com modelo exato, qualidade da peça, garantia e bairro. Confirmar custo do componente e concorrentes antes de fechar orçamento.
- Verificações de sintaxe e testes locais não substituem teste operacional no Square Cloud, navegador e aparelho físico.
