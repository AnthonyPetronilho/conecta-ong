# Conecta ONG

Aplicação front-end acadêmica criada para demonstrar práticas profissionais de versionamento, acessibilidade, otimização e deploy. O projeto aproxima voluntários de iniciativas sociais por meio de uma interface simples, responsiva e acessível.

## Tecnologias utilizadas
- HTML5 semântico
- CSS3 responsivo
- JavaScript ES6+
- Vite
- Git e GitHub

## Acessibilidade
O projeto foi estruturado com referência à WCAG 2.1 nível AA. Foram utilizados landmarks (`header`, `nav`, `main`, `section` e `footer`), link para pular ao conteúdo, labels associados aos campos, atributos ARIA quando necessários, mensagens com `aria-live`, navegação por teclado, foco visível e modo de alto contraste.

## Pré-requisitos
- Node.js 20 ou superior
- npm
- Git

## Instalação local
```bash
git clone URL_DO_REPOSITORIO
cd conecta-ong-acessivel
npm install
npm run dev
```
Abra o endereço exibido pelo Vite no navegador.

## Build de produção
```bash
npm run build
```
A versão otimizada será criada na pasta `dist`.

Para testar a build localmente:
```bash
npm run preview
```

## Testes
A aplicação deve ser validada manualmente por teclado (Tab, Shift+Tab e Enter), pelo console do navegador e por ferramentas como Lighthouse e WebAIM Contrast Checker. Também é recomendada a validação com leitor de tela, como NVDA ou VoiceOver.

## Versionamento
O fluxo adotado é baseado em GitFlow:
- `main`: versão estável de produção;
- `develop`: integração do desenvolvimento;
- `feature/*`: novas funcionalidades;
- `hotfix/*`: correções urgentes.

As mensagens seguem Conventional Commits, por exemplo: `feat: adiciona modo de alto contraste` e `fix: corrige validação do formulário`.

As releases utilizam Versionamento Semântico (`MAJOR.MINOR.PATCH`). A primeira entrega estável é identificada como `v1.0.0`.

## Deploy
O projeto está preparado para Vercel. Ao importar o repositório, utilize:
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

A branch `main` deve ser utilizada para os deploys de produção.
