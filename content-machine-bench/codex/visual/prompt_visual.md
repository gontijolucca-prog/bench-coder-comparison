# Tarefa: Gerar conteúdo visual para TechBody — Carrossel + Vídeo animado

## Contexto
Gera 2 peças visuais para a marca TechBody. Usa o que achares melhor — HTML/CSS, React, Canvas, SVG, o que for. O objectivo é output visual real que se possa ver num browser.

## Peça 1: Carrossel Instagram — "Ciência do EMS"
Gera um carrossel de 6 slides para Instagram (1080×1350px cada, formato 4:5).

### Design system TechBody
- Fundo: #1a1a1a (dark charcoal)
- Accent: #d4773b (laranja suave)
- Texto: #ffffff
- Estilo: editorial, contraste alto, premium
- Cada slide: headline + body curto + paginação X/N + seta → (excepto último)
- Logo "TechBody" no canto superior esquerdo

### Conteúdo dos slides
- Slide 1: Hook (máx 12 palavras) — referência ao estúdio/sessão
- Slide 2: Ativação simultânea de grupos musculares com EMS
- Slide 3: Estatística em destaque: 30-40% (treino convencional) vs 85-90% (EMS) — visual impactante com números grandes
- Slide 4: 20-25 minutos por sessão, 1-3x por semana
- Slide 5: Baixo impacto articular + equipamento certificado médico alemão
- Slide 6: CTA "Marca a tua sessão experimental"

### Regras
- Voz impessoal (sem "eu", "me", "mim")
- Sem emojis, sem estrangeirismos (exceto EMS, WB-EMS, TechBody)
- Claims: 30-40% vs 85-90%, 20-25 min, 1-3x/semana, baixo impacto, certificado médico alemão
- Sem "Symbiont", sem preços
- pt_PT (Portugal)

### Entrega
Cria um ficheiro `carousel.html` que mostra os 6 slides empilhados verticalmente, prontos para screenshot. Auto-contido, sem dependências externas (CDN ok para fontes).

## Peça 2: Vídeo/Storyboard animado — "Experiência de Sessão"
Gera um vídeo animado de 30 segundos (6 cenas de 5s cada) sobre a experiência de uma sessão TechBody.

### Formato
- 1080×1920px (9:16, vertical como Instagram Reel)
- Animação automática com autoplay (CSS animations, JS, ou o que achares melhor)
- Cada cena: número, timestamp, voiceover em texto, descrição visual
- Barra de progresso a indicar tempo
- Transições suaves entre cenas

### Cenas
- Cena 1 (0-5s): Hook — entrada no estúdio, ambiente premium
- Cena 2 (5-10s): Vestir o fato EMS — close-up do equipamento
- Cena 3 (10-15s): Treinador explica, cliente posiciona-se
- Cena 4 (15-20s): Pico da sessão — impulsos ativos, músculos a contrair
- Cena 5 (20-25s): Resultado — cliente termina, sensação de treino completo
- Cena 6 (25-30s): CTA "Marca a tua sessão experimental"

### Mesmas regras de marca, idioma e claims

### Entrega
Cria um ficheiro `reel.html` que reproduz o vídeo animado automaticamente ao abrir no browser. Auto-contido.

## Importante
- Usa a tecnologia que achares melhor para cada peça
- O resultado tem de ser visual e funcional num browser
- Não precisas de pedir aprovação — escreve os ficheiros directamente
- Escreve ambos os ficheiros no directório actual: `carousel.html` e `reel.html`