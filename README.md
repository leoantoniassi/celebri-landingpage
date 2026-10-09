# Celebri — Landing page

Página de divulgação e portfólio do **Celebri**, a plataforma SaaS White Label de
gestão de buffets e eventos. Apresenta os dois produtos do ecossistema:

- **Painel Web** (repo [`celebri`](https://github.com/leoantoniassi/celebri)) — gestão administrativa.
- **Celebri Staff** (repo [`celebri-staff`](https://github.com/leoantoniassi/celebri-staff)) — aplicativo
  móvel para a operação no dia da festa.

## Estrutura

```
celebri-landing/
├── index.html      # toda a marcação e o conteúdo
├── styles.css      # design system (azul-marinho #16254F + ciano #1CEAFF)
├── script.js       # animações e interações em JavaScript puro
├── assets/
│   ├── logo.svg       # marca Celebri (variante "confete": C em gradiente + confetes)
│   ├── painel-web.png # tela do painel web (seção Painel Web)
│   ├── escalas.png    # screenshots reais do app
│   ├── portaria.png
│   └── entrada.png
└── README.md
```

Sem build, sem dependências. É só abrir o `index.html` no navegador.

## Como visualizar

Abra o arquivo diretamente:

```
index.html
```

Ou sirva por HTTP (recomendado para que os assets carreguem corretamente em
todos os navegadores):

```
# Python
python -m http.server 5500

# Node (se tiver)
npx serve .
```

Depois acesse `http://localhost:5500`.

## Publicar

Por ser um site estático, pode ser hospedado em qualquer serviço de arquivos
estáticos: GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.

## Personalização rápida

- **Cores:** todas as cores ficam nas variáveis CSS no topo de `styles.css`
  (`--navy`, `--cyan`, `--magenta`, …).
- **Contato:** o botão "Falar no WhatsApp" usa um número placeholder
  (`5500000000000`) no `index.html` — troque pelo número real.
- **Textos:** todo o conteúdo está em `index.html`, organizado por seções
  comentadas.

## Recursos

- Layout totalmente responsivo (mobile-first).
- Animações de scroll, contadores e abas em JavaScript puro.
- Acessibilidade: navegação por teclado, `alt` nas imagens e respeito a
  `prefers-reduced-motion`.
- SEO e Open Graph básicos.
