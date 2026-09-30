# Conecta ONG

Aplicação front-end acadêmica criada para demonstrar práticas profissionais de versionamento, acessibilidade, otimização e deploy. O projeto aproxima voluntários de iniciativas sociais por meio de uma interface simples, responsiva e acessível.

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 responsivo
- JavaScript ES6+
- Vite
- Git e GitHub
- Vercel

## Acessibilidade

O projeto foi desenvolvido com práticas baseadas na WCAG 2.1 nível AA.

Foram implementados:

- Landmarks semânticos (`header`, `nav`, `main`, `section` e `footer`);
- Link para pular diretamente ao conteúdo principal;
- Labels associados aos campos de formulário;
- Atributos WAI-ARIA quando necessários;
- Mensagens utilizando `aria-live`;
- Navegação por teclado;
- Estados de foco visíveis;
- Textos alternativos para imagens;
- Modo de alto contraste.

## Pré-requisitos

- Node.js 20 ou superior
- npm
- Git

## Instalação local

```bash
git clone https://github.com/AnthonyPetronilho/conecta-ong.git
cd conecta-ong
npm install
npm run dev
```

Abra no navegador o endereço fornecido pelo Vite.

## Build de produção

Para gerar a versão otimizada:

```bash
npm run build
```

Os arquivos de produção são gerados na pasta `dist`.

Para testar a build localmente:

```bash
npm run preview
```

A build utiliza os recursos de otimização do Vite, incluindo minificação dos arquivos HTML, CSS e JavaScript.

## Testes

A aplicação foi validada manualmente considerando:

- Navegação por teclado (`Tab`, `Shift + Tab` e `Enter`);
- Funcionamento dos elementos interativos;
- Validações do formulário;
- Responsividade da interface;
- Modo de alto contraste;
- Execução da build de produção.

Como apoio à avaliação de acessibilidade podem ser utilizadas ferramentas como Lighthouse, WebAIM Contrast Checker e leitores de tela como NVDA ou VoiceOver.

## Versionamento

O fluxo de desenvolvimento é baseado em GitFlow:

- `main`: versão estável de produção;
- `develop`: integração do desenvolvimento;
- `feature/*`: desenvolvimento de novas funcionalidades;
- `hotfix/*`: correções urgentes.

As alterações são integradas por meio de Pull Requests, mantendo a separação entre desenvolvimento e produção.

As mensagens de commit seguem o padrão Conventional Commits, utilizando identificadores como `feat:`, `fix:`, `docs:` e `chore:`.

O projeto utiliza Versionamento Semântico (`MAJOR.MINOR.PATCH`). A primeira versão estável foi publicada como `v1.0.0`.

## Gestão do projeto

O GitHub foi utilizado para organização e rastreabilidade das atividades por meio de Issues, Pull Requests e Milestones.

A milestone `Versão 1.0.0` reuniu as tarefas relacionadas à acessibilidade, responsividade, validações e preparação para produção.

## Deploy

A aplicação foi publicada na Vercel com integração ao repositório GitHub.

Configuração utilizada:

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Branch de produção: `main`

A integração entre GitHub e Vercel permite que novas alterações enviadas à branch de produção sejam incorporadas ao fluxo de deploy da aplicação.

## Release

A primeira versão estável do projeto foi disponibilizada como `v1.0.0`, consolidando as funcionalidades, melhorias de acessibilidade, otimizações e configuração para produção.
