# Tarefa: Gerar conteúdo visual para TechBody usando Hyperframes e Remotion

## Contexto
Estás num directório vazio. Gera 2 peças visuais usando as frameworks reais.

## Peça 1: hyperframes.html usando a skill Hyperframes

Cria uma composição de vídeo Hyperframes (1080×1080px, 10 segundos) sobre TechBody EMS.

### Passos:
1. Usa `npx hyperframes init` para inicializar o projecto
2. Cria uma composição HTML com:
   - Fundo #1a1a1a, accent #d4773b, texto #ffffff
   - Número "85-90%" a crescer no centro
   - Barras de recrutamento muscular: 30-40% vs 85-90%
   - Texto "EMS recruta até 85-90% das fibras" com fade-in
   - Barra de progresso, animação orquestrada com GSAP
   - pt_PT, voz impessoal, sem emojis
3. Faz `npx hyperframes lint` e `npx hyperframes validate` para verificar
4. Se o render funcionar, faz `npx hyperframes render` para gerar o vídeo MP4

### Skill Hyperframes
Lê a skill em ~/.claude/skills/hyperframes-core/ ou ~/hyperframes/hyperframes/skills/hyperframes/SKILL.md
- Composições são HTML com data-* attributes para timing
- GSAP timeline para animação (pausada, registada em window.__timelines)
- CSS para appearance
- Clips têm class="clip"
- Sem Date.now(), sem Math.random() sem seed

### Regras TechBody
- Voz impessoal (sem "eu", "me", "mim")
- Claims: 30-40% vs 85-90%, 20-25 min, 1-3x/semana, baixo impacto, certificado médico alemão
- Sem "Symbiont", sem preços

### Entrega
Escreve o ficheiro de composição e faz render. Coloca o output em hyperframes.html (ou composition.html + vídeo MP4).

## Peça 2: remotion.html usando Remotion (React video framework)

Cria um vídeo Remotion real (1080×1920px, 30 segundos, 6 cenas de 5s) sobre TechBody EMS.

### Passos:
1. `npx create-video@latest` ou inicializa projecto Remotion manualmente
2. Cria uma composição React com:
   - 6 cenas de 5s com transições
   - Cena 1: Hook "25 minutos mudam o treino"
   - Cena 2: 30-40% vs 85-90% números gigantes animados
   - Cena 3: 20-25 min, 1-3x por semana
   - Cena 4: Baixo impacto articular, equipamento certificado alemão
   - Cena 5: Sessão completa, corpo inteiro
   - Cena 6: CTA "Marca a tua sessão experimental"
   - Barra de progresso, timecode, cubic-bezier
   - Fundo #1a1a1a, accent #d4773b, texto #ffffff
   - pt_PT, voz impessoal, sem emojis
3. Faz `npx remotion render` para gerar o vídeo MP4

### Regras TechBody (mesmas acima)

### Entrega
Escreve o código React/Remotion e faz render. Coloca o output em remotion/ (projecto completo).

## Importante
- Usa as frameworks REAIS (Hyperframes CLI + Remotion CLI), não simulações HTML/CSS
- Instala dependências com npm/bun conforme necessário
- Se algo falhar, relata o erro mas continua
- Não peças aprovação — executa directamente