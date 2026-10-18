# Implantação — KV CELL OS PREMIUM V1111.1

1. Faça backup da aplicação/dados atuais antes de substituir os arquivos.
2. Envie o conteúdo do ZIP para o mesmo aplicativo/projeto Square Cloud, mantendo as variáveis de ambiente já configuradas.
3. Não substitua nem exclua a pasta de persistência (`KVCELL_DATA_DIR` / banco existente).
4. Reinicie a aplicação e confirme `/api/health`.
5. Teste uma OS de teste: abra o link público, altere o status no painel e atualize a página do cliente.
6. Teste também um link legado `/public/os/ID` se você tiver links antigos desse formato.

O pacote não inclui banco de produção nem credenciais reais. Não rode scripts de limpeza/reset de banco.
