# Tarefa: Gerar carrossel Instagram para TechBody

## Contexto
Estás a trabalhar no projecto Content Machine em ~/content-machine/.
Gera um carrossel de 6 slides para a marca TechBody.

## Especificações
- Marca: TechBody (@techbody_pt)
- Tipo: carrossel
- Tema: ciencia_ems (Ciência do EMS)
- Audiência: b2c
- Número de slides: 6
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
9. CTA do último slide: "Marca a tua sessão experimental"

## Estrutura dos slides
- Slide 1: Hook (máx 12 palavras) + referência ao estúdio/sessão
- Slides 2-5: Desenvolvimento com progressão lógica
  - Pelo menos 1 slide com número/percentagem/estatística em destaque
  - Ensino concreto, não decoração de citações
- Slide 6: CTA ("Marca a tua sessão experimental")

## Formato de output
Gera um ficheiro JSON array válido (sem markdown, sem ```json) com esta estrutura:

[
  {
    "slide": 1,
    "headline": "texto principal curto",
    "body": "texto de apoio 1-3 linhas",
    "visual_prompt": "descrição visual em inglês para geração de imagem",
    "text_overlay": "texto sobreposto em pt_PT",
    "pagination": "1/6"
  },
  ...
]

## Formato visual
- Fundo: dark charcoal (#1a1a1a)
- Accent: laranja suave (#d4773b)
- Texto: branco (#ffffff)
- Iluminação editorial, contraste alto, sombras definidas
- Logo TechBody no canto superior
- Paginação X/N no canto inferior
- Seta de continuação (→) em todos exceto último slide

## Entrega
Escreve o resultado num ficheiro chamado carousel_techbody_ciencia_ems.json no diretório actual.