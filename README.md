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
