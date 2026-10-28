# Celebri — Landing Page Institucional

Landing page oficial de apresentação e captação comercial da plataforma **Celebri** (SaaS B2B White Label para gestão e operação de buffets e eventos).

## 🎯 Sobre a Página

A landing page foi desenvolvida para apresentar aos proprietários de buffets e casas de festas a proposta de valor do ecossistema Celebri:
- **Painel Web Administrativo:** Gestão de orçamentos, contratos, clientes, fornecedores, cardápios e escalas da equipe.
- **Celebri Staff (App Mobile):** Operação em tempo real no salão durante o evento (portaria com leitura de QR code, comanda para garçom e tela de pedidos/cardápio para cozinha).
- **Diferencial White Label:** Aplicação dinâmica do logotipo e paleta de cores de cada buffet parceiro.

---

## 🎨 Identidade Visual e Tecnologias

- **Design System:**
  - Tipografia: **Plus Jakarta Sans** (headlines/títulos) e **Inter** (corpo de texto), via Google Fonts.
  - Paleta Oficial: Ciano `#1CEAFF`, Magenta `#FF45FF`, Navy `#0E1A3A` e Azul-Marinho `#16254F`.
  - Ícones: **Google Material Symbols Outlined**.
  - Marca: Vetorial SVG oficial (`assets/logo.svg` com badge confete).
- **Stack:**
  - HTML5 semântico com otimização SEO e Open Graph completo.
  - CSS3 puro com suporte a responsividade (mobile, tablet e desktop), gradientes modernos e micro-animações.
  - JavaScript Vanilla para navegação suave, FAQ interativo e alternância de abas/menu mobile.

---

## 🚀 Como Executar Localmente

Como se trata de uma aplicação web estática, não há dependência de compilação ou gerenciadores de pacotes pesados:

1. **Via VS Code / Live Server:**
   Abra a pasta `celebri-landingpage` e inicie o Live Server em `index.html`.
2. **Via Navegador Direto:**
   Dê um duplo clique no arquivo `index.html` ou abra pelo seu navegador padrão.
3. **Via Python / Node HTTP Server (opcional):**
   ```bash
   npx serve .
   # ou
   python -m http.server 3000
   ```

---

## 📁 Estrutura de Arquivos

```
celebri-landingpage/
├── assets/
│   └── logo.svg          # Logotipo vetorial oficial com confetes
├── index.html            # Estrutura HTML com seções institucionais
├── styles.css            # Estilização completa e responsiva
├── script.js             # Lógica de interatividade e menus
└── README.md             # Documentação do projeto
```
