# Next Portfolio

Portfólio pessoal desenvolvido com Next.js, React, TypeScript e Tailwind CSS.

## Requisitos

- Node.js 24 ou superior
- Yarn 4

## Configuração

Crie um arquivo `.env` na raiz do projeto.

Exemplo:

```env
GITHUB_TOKEN=seu_token_do_github
FORBIDDEN_TOPICS=["private","hidden"]
RESEND_API_KEY=sua_chave_da_resend
CONTACT_TO=seu_email_de_destino
CONTACT_FROM=Portfolio <contato@seudominio.com>
NEXT_PUBLIC_TURNSTILE_SITE_KEY=sua_site_key_do_turnstile
TURNSTILE_SECRET_KEY=sua_secret_key_do_turnstile
```

`GITHUB_TOKEN` é usado para consultar a API do GitHub com limite maior de requisições.

`FORBIDDEN_TOPICS` define quais tópicos devem esconder repositórios da seção Github. Pode ser um JSON array ou uma lista separada por vírgula.

As variáveis `RESEND_API_KEY`, `CONTACT_TO` e `CONTACT_FROM` são usadas pelo formulário de propostas no footer.

As variáveis `NEXT_PUBLIC_TURNSTILE_SITE_KEY` e `TURNSTILE_SECRET_KEY` são usadas pela proteção anti-spam do formulário.

## Instalação

```bash
yarn install
```

## Desenvolvimento

```bash
yarn dev
```

Depois acesse:

```text
http://localhost:3000
```

## Build de produção

```bash
yarn build
```

## Rodar build local

```bash
yarn start
```

## Lint

```bash
yarn lint
```

## Estrutura principal

- `pages/`: rotas da aplicação
- `sections/`: seções principais do portfólio
- `components/`: componentes reutilizáveis
- `constants/`: textos e comandos exibidos na interface
- `data/`: dados estruturados usados por páginas internas, como o currículo
- `service/`: integrações e helpers de dados
- `styles/`: CSS global e tema
- `public/`: assets estáticos

## Currículo público

A página HTML do currículo fica em:

```text
http://localhost:3000/curriculo
```

Mantenha apenas informações públicas nessa página. Se quiser adicionar download de PDF, gere uma versão pública sanitizada antes de colocar o arquivo em `public/`.
