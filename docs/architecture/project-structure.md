# Project Structure & Setup

## Folder Layout

```
kivo/
├── mobile/              # Expo / React Native app
│   ├── app/             # Expo Router pages (to be created)
│   ├── components/      # Shared components (to be created)
│   ├── app.json
│   ├── package.json
│   └── tsconfig.json
├── backend/             # FastAPI Python backend
│   ├── venv/            # Python virtual environment
│   ├── app/             # FastAPI app package (to be created)
│   └── requirements.txt (to be created)
├── database/            # Database migrations
│   ├── alembic/         # Alembic migration files
│   └── alembic.ini      # Alembic config
├── assets/              # Shared assets (fonts, images)
├── scripts/             # Dev utilities
├── .github/             # CI/CD workflows
├── docs/                # Project documentation
│   ├── apis/            # External API docs
│   ├── architecture/    # Architecture decisions
│   ├── bugs/            # Bug tracking
│   └── todo/            # Feature task tracking
├── .gitignore
├── README.md
├── rules.md
└── LICENSE
```

## Tech Stack

### Mobile
- Expo SDK 57
- React Native 0.86
- TypeScript 6
- Expo Router (file-based navigation)
- Zustand 5 (state management)
- TanStack Query 5 (server state)
- FlashList 2 (performant lists)
- MMKV 4 (local storage)
- Expo Image (optimized images)
- Expo AV (audio/video)
- Firebase Auth (authentication)

### Backend
- Python 3.12
- FastAPI 0.139
- Uvicorn 0.51
- SQLAlchemy 2.0 (async)
- Asyncpg (PostgreSQL driver)
- Pydantic 2.13
- Celery 5.6 (task queue)
- Redis 6.4 (cache + broker)
- Alembic 1.18 (migrations)
- Groq (AI features)
- Firebase Admin SDK (auth verification)

### Database
- PostgreSQL