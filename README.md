# Entrega I — Plataforma ONG Odontológica (Sorriso Solidário)

Estrutura de pastas sugerida:

```
/ (repo root)
  /assets/images/    # imagens otimizadas
  /css/styles.css
  /js/main.js
  /js/validation.js
  index.html
  projetos.html
  cadastro.html
  README.md
```

Instruções rápidas:
- Verifique que o repositório GitHub esteja público antes da submissão.
- Valide cada HTML no W3C Validator (https://validator.w3.org/). Corrija avisos de semântica e atributos faltantes.
- Execute testes de contraste e navegação por teclado para WCAG 2.1 AA.

Observações de acessibilidade e SEO implementadas:
- Uso de tags semânticas (<header>, <main>, <article>, <section>, <footer>, <nav>, <figure>, <figcaption>, <address>)
- Labels associados a inputs, uso de aria-labelledby e aria-label onde necessário.
- Metatags de descrição e viewport para SEO e mobile.

Máscaras e validação:
- Máscaras de CPF, telefone e CEP implementadas em /js/validation.js (client-side).
- Validação nativa HTML5 com atributos required, pattern e type.

Como submeter no GitHub:
1. Crie um novo repositório público.
2. Adicione os arquivos mantendo a estrutura de pastas.
3. Ative GitHub Pages (opcional) para hospedar: Settings > Pages > Source = main branch / root.
4. Envie o link público do repositório no formulário de entrega.
