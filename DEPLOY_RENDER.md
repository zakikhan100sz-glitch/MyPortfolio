# Deploy to Render

Deploy this project as:
1. Backend -> **Web Service**
2. Frontend -> **Static Site**

Render documents deploying Node/Express as a Web Service, React apps 
as Static Sites, and React Router on static hosting needs a catch-all
 rewrite like `/* -> /index.html`. citeturn969039search0turn969039
 search1turn969039search9

## 1) Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio project"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

## 2) Backend on Render
Create a **Web Service** with:
- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `npm start`

Environment variables:
- `NODE_ENV=production`
- `MONGODB_URI=YOUR_ATLAS_URI`
- `CLIENT_URL=https://YOUR-FRONTEND.onrender.com`

Test:
- `https://YOUR-BACKEND.onrender.com/api/health`

## 3) Seed data
Point your local `server/.env` to the same Atlas database and run:
```bash
cd server
npm install
npm run seed
```

## 4) Frontend on Render
Create a **Static Site** with:
- Root Directory: `client`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`

Environment variable:
- `VITE_API_URL=https://YOUR-BACKEND.onrender.com/api`

Add React Router rewrite:
- Source: `/*`
- Destination: `/index.html`
- Action: `Rewrite`

Without that rewrite, refreshing routes like `/projects` can return 404. citeturn969039search9turn969039search19



## 5) Atlas
Create:
- a DB user
- `MONGODB_URI`
- network access configured for your deployment environment


## 6) Final checklist
- backend `/api/health` works
- frontend loads
- projects render
- contact form saves to MongoDB
- `CLIENT_URL` matches your frontend
- `VITE_API_URL` matches your backend
