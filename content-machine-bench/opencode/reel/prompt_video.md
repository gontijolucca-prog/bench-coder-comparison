# Tarefa: Gerar roteiro para vídeo Instagram Reel TechBody

## Contexto
Estás a trabalhar no projecto Content Machine em ~/content-machine/.
Gera um roteiro para um Reel de 30 segundos para a marca TechBody.

## Especificações
- Marca: TechBody (@techbody_pt)
- Tipo: vídeo/reel
- Tema: experiencia_sessao (A experiência de sessão)
- Audiência: b2c
- Duração: 30 segundos
- Idioma: pt_PT (Portugal)

## Regras obrigatórias
1. Voz impessoal: sem "eu", "me", "mim", "comigo", "aprendi", "fiz"
2. Sem títulos honoríficos (Dr., doutor)
3. Sem emojis
4. Sem estrangeirismos (exceto: EMS, WB-EMS, TechBody, TechBody U)
5. Claims científicos permitidos:
   - Recrutamento fibras: ~30-40% treino convencional vs até ~85-90% EMS
   - Sessão WB-EMS típica: ~20-25 minutos
   - Frequência: 1 a 3 sessões por semana
   - Ativação simultânea de múltiplos grupos musculares
   - Baixo impacto articular
   - Equipamento certificado médico, fabricado na Alemanha
6. Claims proibidas: citar autores/datas/DOIs específicos, inventar percentagens, prometer resultados garantidos
7. Sem "Symbiont" (brand legado banido)
8. Sem menção a preços
9. CTA final: "Marca a tua sessão experimental"

## Formato visual
- Fundo: dark charcoal (#1a1a1a)
- Accent: larananja suave (#d4773b)
- Texto: branco (#ffffff)
- Iluminação editorial, contraste alto, sombras definidas
- Estilo: dynamic_cinematic_studio

## Estrutura do roteiro
O roteiro deve ter 6 cenas de ~5 segundos cada:
- Cena 1: Hook visual — entrada no estúdio, ambiente premium
- Cena 2: Vestir o fato EMS — close-up do equipamento
- Cena 3: Início da sessão — treinador explica, cliente posiciona-se
- Cena 4: Pico da sessão — impulsos ativos, músculos a contrair
- Cena 5: Resultado imediato — cliente termina, sensação de treino completo
- Cena 6: CTA — "Marca a tua sessão experimental"

## Formato de output
Gera um ficheiro JSON array válido (sem markdown, sem ```json) com esta estrutura:

[
  {
    "scene": 1,
    "timestamp": "0-5s",
    "visual_description": "descrição visual em inglês para geração de vídeo",
    "voiceover": "texto do narrador em pt_PT",
    "text_overlay": "texto sobreposto no ecrã em pt_PT",
    "camera_movement": "descrição do movimento de câmara em inglês"
  },
  ...
]

## Entrega
Escreve o resultado num ficheiro chamado reel_techbody_experiencia_sessao.json no diretório actual.