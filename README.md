# Devfolio Render-Ready

A production-style full-stack developer portfolio starter.

## Stack
- Frontend: React + Vite + Tailwind CSS + React Router + Lucide React
- Backend: Node.js + Express + MongoDB + Mongoose + Zod
- Deployment:
  - Frontend: Render Static Site
  - Backend: Render Web Service
  - Database: MongoDB Atlas

## Local development

### Backend
```bash
cd server
cp .env.example .env
npm install
npm run seed
npm run dev
```

### Frontend
```bash
cd client
cp .env.example .env
npm install
npm run dev
```

See `DEPLOY_RENDER.md` for deployment.
