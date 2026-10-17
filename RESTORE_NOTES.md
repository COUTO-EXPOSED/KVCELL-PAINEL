# Notas da restauração

- Base utilizada: `KV_CELL_OS_V1100_MDM_ADB_QR_READY.zip`, a versão anterior fornecida.
- Objetivo: voltar à base anterior em vez de misturar bundles compilados de versões diferentes.
- Banco: nenhum arquivo de banco foi incluído ou modificado; a persistência usa `KVCELL_DATA_DIR` (padrão `/application/data`).
- Atenção: os ZIPs de referência contêm principalmente arquivos compilados/minificados. Não é seguro transplantar componentes isolados de versões diferentes porque podem depender de nomes de chunks e contratos internos.
- Faça backup do banco persistente e mantenha as variáveis de ambiente da instalação atual.
