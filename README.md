# BiscaLab Backend

Backend API per Bangkok Assistant. Due endpoint:
- `/api/chat` — chiama Anthropic Claude per le risposte AI
- `/api/transcribe` — chiama OpenAI Whisper per la trascrizione audio

## Deploy su Vercel

### 1. Carica su GitHub
1. Vai su github.com → "New repository"
2. Nome: `biscalab-backend`
3. Carica tutti questi file

### 2. Collega a Vercel
1. Vai su vercel.com → "New Project"
2. Importa il repository GitHub `biscalab-backend`
3. Clicca "Deploy"

### 3. Aggiungi le variabili d'ambiente
In Vercel → Settings → Environment Variables, aggiungi:

| Nome | Valore |
|------|--------|
| `ANTHROPIC_API_KEY` | la tua chiave Anthropic |
| `OPENAI_API_KEY` | la tua chiave OpenAI |

### 4. Copia l'URL del backend
Dopo il deploy, Vercel ti dà un URL tipo:
`https://biscalab-backend.vercel.app`

Questo URL va inserito nel sito e nella web app al posto delle chiamate dirette alle API.

## Struttura
```
biscalab-backend/
├── api/
│   ├── chat.js          # Anthropic Claude
│   └── transcribe.js    # OpenAI Whisper
├── vercel.json          # Configurazione Vercel
└── package.json         # Dipendenze
```
