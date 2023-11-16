# Employee Portal Web App Setup Guide

This guide outlines the steps to set up the Employee Portal Web App efficiently using Vite with ESLint rules.

## 🟩 Node Version

Current Long Term Support (LTS) Version: `v20.9.0`

## 📦 Tech Tools Used

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn](https://ui.shadcn.com)
- [Zod](https://zod.dev)
- [React Query](https://tanstack.com/query/v3/docs/react/overview)
- [React Router](https://reactrouter.com/en/main/start/overview)
- [React Hook Form](https://react-hook-form.com)
- [React Hot Toast](https://react-hot-toast.com)
- [Axios](https://axios-http.com/docs/intro)

## ⚙️ Environment Variables (.env)

- 🔑 **API_SECRET_ID** - Private API secret key for secure authentication.
- 🌐 **API_CLIENT_ID** - Client API identifier for authenticating requests.

## 🚀 Getting Started

Copy .env.example and create a .env file:

```bash
cp -R env.development .env.local
```

Install dependencies (using pnpm is preferred):

```bash
pnpm install
# or
npm install
# or
yarn install
```

Run the development server (using pnpm is preferred):

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

**Preview**: Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.
