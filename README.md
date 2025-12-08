# 🌿 Ciclus Weather Station - Frontend

![Version](https://img.shields.io/badge/version-1.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Interface moderna e responsiva para monitoramento de estações meteorológicas voltadas para a agricultura de precisão. Desenvolvido para visualizar dados em tempo real, gerar análises agronômicas (como Delta T) e exportar históricos.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com uma stack moderna focada em performance e experiência do desenvolvedor:

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Gráficos:** [Chart.js](https://www.chartjs.org/) & [React Chartjs 2](https://react-chartjs-2.js.org/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Manipulação de Datas:** [date-fns](https://date-fns.org/)

## ✨ Funcionalidades

- **📡 Dashboard em Tempo Real:** Visualização imediata de temperatura, umidade, pressão, radiação solar e status da bateria/sinal.
- **🌪️ Rosa dos Ventos:** Componente visual personalizado para indicar direção e velocidade do vento.
- **💧 Análise de Pulverização (Delta T):** Gráfico psicrométrico interativo que calcula automaticamente se as condições são ideais para aplicação de defensivos.
- **📊 Histórico e Gráficos:** Gráficos de linha e barra para temperatura, umidade, precipitação e rajadas de vento.
- **📑 Tabela de Registros:** Visualização tabular detalhada (estilo Excel) com suporte a paginação.
- **💾 Exportação de Dados:** Exportação nativa dos dados brutos para **CSV** e **JSON**.

## 🛠️ Instalação e Execução

**Pré-requisitos:** Node.js 18+ instalado.

### Passos:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/murillous/agronomia-API.git
   ```

2. **Acesse a pasta do frontend:**
   ```bash
   cd frontend
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Acesse `http://localhost:3000` no seu navegador.

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── analises/      # Página de Gráficos e Delta T
│   ├── dashboard/     # Painel Principal
│   ├── registros/     # Tabela de Dados e Exportação
│   ├── hooks/         # Lógica de consumo da API (useWeather)
│   ├── utils/         # Cálculos agronômicos e exportação
│   └── components/    # Componentes reutilizáveis (Charts, Cards, Footer)
└── public/            # Assets estáticos (Favicon)
```

## 🔗 Integração API

Este frontend consome dados da **Ciclus Weather API**.

- **Base URL:** `https://agronomia-api.vercel.app/api`
- **Endpoint Principal:** `/weather/latest`

A configuração da URL está centralizada em `src/hooks/useWeather.ts`.

## 🤝 Créditos e Autoria

Este projeto foi desenvolvido com excelência técnica pela **Thera Software House**.


### Redes Sociais Thera

- [Website Oficial](https://www.theralabs.com.br/)
- [Instagram](https://www.instagram.com/theralabs/)
- [LinkedIn](https://www.linkedin.com/company/theralabs/)
- [GitHub Organization](https://github.com/thera-org)

---

© 2025 Thera Software House. Todos os direitos reservados.