# MS Hub

Central de acessos operacionais de Max Santana.

## Sistemas cadastrados

- MedLogix — `http://10.254.200.80`
- Safety COBRA — `https://safetycobrais.com/login`
- Zeev — Minhas tarefas — `https://carmoenergy.zeev.it/my/tasks`

## Publicação pelo GitHub Pages

1. Crie um repositório novo no GitHub.
2. Faça upload de todos os arquivos e pastas deste pacote, mantendo a estrutura.
3. Abra **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a publicação.

## Estrutura

- `index.html`
- `css/style.css`
- `js/app.js`
- `manifest.json`
- `service-worker.js`
- `icons/`

Para incluir um novo sistema, edite apenas o array `systems` no início do arquivo `js/app.js`.
