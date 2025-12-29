# Astracã Soluções Ambientais

Website institucional da Astracã Soluções Ambientais, desenvolvido para apresentar os serviços de consultoria em sustentabilidade e compliance ambiental da empresa em Angola.

## Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web modernas para garantir performance e facilidade de manutenção:

- **[React](https://reactjs.org/)**: Biblioteca para construção da interface de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build e servidor de desenvolvimento rápido.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utilitário para estilização ágil.
- **[React Router](https://reactrouter.com/)**: Gerenciamento de rotas e navegação.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones.

## Estrutura do Projeto

A estrutura de ficheiros segue uma organização simplificada:

```
/
├── App.tsx          # Componente principal e configuração de rotas
├── index.html       # Ponto de entrada HTML
├── index.tsx        # Ponto de entrada da aplicação React
├── components/      # Componentes reutilizáveis e páginas (Navbar, Hero, etc.)
├── public/          # Arquivos estáticos (imagens, ícones)
└── ...arquivos de configuração
```

## Começando

Siga estas instruções para configurar e rodar o projeto na sua máquina local.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada).

### Instalação

1. Clone o repositório (se ainda não o fez):
   ```bash
   git clone <URL-do-seu-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Scripts Disponíveis

No diretório do projeto, você pode rodar:

- **`npm run dev`**: Inicia o servidor de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.
- **`npm run build`**: Compila a aplicação para produção na pasta `dist`.
- **`npm run preview`**: Visualiza a versão de produção localmente após o build.

## Deploy

O projeto é configurado para ser facilmente implantado em plataformas como Vercel, Netlify ou qualquer servidor estático.

## Configuração de Email (Resend)

Este projeto utiliza a **[Resend](https://resend.com)** para envio de emails do formulário de cotação. A integração é feita através de uma **Serverless Function** (`api/send-email.ts`) para garantir a segurança das credenciais.

### Variáveis de Ambiente

Para que o envio de emails funcione, você precisa configurar as seguintes variáveis de ambiente (no arquivo `.env` localmente ou no painel da Vercel):

- **`VITE_API_URL`**: URL base da aplicação (ex: `http://localhost:3000` ou sua URL de produção).
- **`RESEND_API_KEY`**: Sua chave de API da Resend (começa com `re_...`). Obtenha em [resend.com/api-keys](https://resend.com/api-keys).
- **`QUOTE_TO_EMAIL`**: O endereço de email que receberá os pedidos de cotação (ex: `geral@suaempresa.com`).

> **Nota de Segurança**: Nunca faça commit do arquivo `.env` com suas chaves reais. Use o `.env.example` como modelo para o repositório.

## Deploy na Vercel

A Vercel é a plataforma recomendada pois detecta automaticamente as Serverless Functions na pasta `api/`.

1. Faça o push do código para o **GitHub**.
2. Acesse [Vercel](https://vercel.com) e importe o projeto do GitHub.
3. Na configuração do projeto, vá em **Environment Variables** e adicione as chaves listadas acima.
4. Clique em **Deploy**.
