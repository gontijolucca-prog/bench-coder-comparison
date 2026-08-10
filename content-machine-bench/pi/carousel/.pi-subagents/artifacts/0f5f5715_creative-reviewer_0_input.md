# Task for creative-reviewer

Revê o ficheiro /Users/lucca/bench-content-machine/pi/carousel/carousel_techbody_ciencia_ems.json contra o brief do utilizador: JSON válido, 6 slides, pt_PT, voz impessoal, sem claims proibidas/estrangeirismos/emoji/Symbiont, estrutura progressiva, claim 85–90% vs 30–40%, 20–25 minutos, 1–3 sessões, CTA final exacto e prompts visuais em inglês. Responde apenas com problemas concretos e correcções necessárias; se estiver tudo conforme, responde OK.

## Acceptance Contract
Acceptance level: reviewed
Completion is not accepted from prose alone. End with a structured acceptance report.

Criteria:
- criterion-1: Return concrete findings with file paths and severity when applicable

Required evidence: changed-files, tests-added, commands-run, validation-output, residual-risks, no-staged-files

Finish with a fenced JSON block tagged `acceptance-report` in this shape:
Use empty arrays when no items apply; array fields contain strings unless object entries are shown.
```acceptance-report
{
  "criteriaSatisfied": [
    {
      "id": "criterion-1",
      "status": "satisfied",
      "evidence": "specific proof"
    }
  ],
  "changedFiles": [
    "src/file.ts"
  ],
  "testsAddedOrUpdated": [
    "test/file.test.ts"
  ],
  "commandsRun": [
    {
      "command": "command",
      "result": "passed",
      "summary": "short result"
    }
  ],
  "validationOutput": [
    "validation output or concise summary"
  ],
  "residualRisks": [
    "none"
  ],
  "noStagedFiles": true,
  "diffSummary": "short description of the diff",
  "reviewFindings": [
    "blocker: file.ts:12 - issue found, or no blockers"
  ],
  "manualNotes": "anything else the parent should know"
}
```