# Bench Coder Comparison — Comparação de CLIs de coding (AI)

Benchmarks lado a lado de agentes de coding em terminal (harnesses):
**Claude Code, Codex, OpenCode, Pi, Kilo Code, Aider, Gemini CLI, Hermes** —
todos com o **mesmo modelo** (MiniMax-M3) e os **mesmos prompts**, para comparar
em condições justas.

🌐 **Site de comparação (GitHub Pages):** https://gontijolucca-prog.github.io/bench-coder-comparison/

---

## 📁 Conteúdo

| Pasta | Benchmark | Data | CLIs |
|-------|-----------|------|------|
| `nebulatask-bench/` | Landing page "NebulaTask" (React + Vite + TS + Tailwind) + animações Hyperframes/Remotion | 14/jul/2026 | Pi, Claude Code, Codex, OpenCode, Aider, Gemini CLI, Kilo Code, Hermes |
| `content-machine-bench/` | Conteúdo marca TechBody: carousel IG + reel + animações (4 testes por CLI) | 16/jul/2026 | Pi, Claude Code, Codex, OpenCode |
| `content-machine-bench/<cli>/skills/` | Frameworks reais: Hyperframes CLI + Remotion CLI (render MP4) | 17/jul/2026 | Pi, Claude Code, Codex, OpenCode |

A raiz do repositório contém o site de comparação (HTML + screenshots).

## 🏆 Resultados principais

- **NebulaTask (14/jul):** os 8 CLIs completaram a landing page; Pi foi o mais rápido.
  Aider falhou (formato de edição incompatível com MiniMax-M3), Gemini CLI incompatível
  (só modelos Google), Kilo Code travado em headless (zero tools carregadas).
- **Content Machine (16/jul):** 4 CLIs × 4 testes (carousel, reel, hyperframes, remotion).
  Pi e OpenCode com outputs completos; Codex com falhas de sandbox; Claude Code completo.
- **Frameworks Reais (17/jul):** Pi ✅ (2 MP4s), Claude Code ✅ (2 MP4s),
  Codex ⚠️ (código ✅, MP4 ❌ sandbox), OpenCode ✅ (2 MP4s h264).

## ⚙️ Como correr um benchmark novo

Ver a skill `coder-benchmark` (Hermes Agent) — cobre flags por CLI, corridas paralelas,
screenshots e deploy para GitHub Pages.

## 📜 Histórico

- **14–15/jul:** 11 sessões de fair-test (landing page + animações), debugging profundo do Kilo Code.
- **16/jul:** benchmark de conteúdo (4 CLIs, 4 testes visuais).
- **17/jul:** correção para frameworks reais (Hyperframes + Remotion) + página final `benchmark-final.html`.
