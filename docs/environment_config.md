# 🔑 Environment & Account Manifest

## 🐙 Version Control: GitHub
- **Org/User:** `rbellAdapt`
- **Repo:** `https://github.com/rbellAdapt/AdaptiveSensing.io`
- **Branch Strategy:** `main` (prod), `dev` (staging)

## 🚀 Hosting & Deployment: Vercel
- **Account:** `adaptive-sensing`
- **Domain:** `adaptivesensing.io`
- **Environment Variables:**
  - `NEXT_PUBLIC_API_URL`: `https://api.adaptivesensing.io` (Proxy)
  - `UAS_API_KEY`: `[ENCRYPTION_KEY]` (Required for UAS Plume Simulator Edge Proxy)

## 📡 API Backend: Google Cloud Run & Azure
- **Python Physics Engine (Google Cloud Run):**
  - **Endpoint Proxy:** `https://adaptivesensing.io/api/simulate/`
  - **Key:** `UAS_API_KEY` (Injected via Next.js `proxy.ts`)
  - **Routes:** 
    - `POST /api/simulate/grid`: Atmospheric parameter matrix generation.
    - `POST /api/simulate/mission`: UAS Plume simulation.
- **Corporate API (Azure Functions):**
  - **Function App:** `adaptivesensing-api`
  - **Endpoint:** `https://api.adaptivesensing.io/api/`
  - **Routes:**
    - `POST /auth/login`: Generate JWT token.
    - `POST /auth/refresh`: Refresh token.

## 🔐 Authentication: Azure AD
- **Tenant ID:** `27335087-7578-4847-800f-405005950050`
- **Client ID:** `1577449b-5060-4112-8104-700500500500`
- **Secret:** `[ENCRYPTION_KEY]` (Stored in Azure Key Vault)
- **Scopes:** `api://1577449b-5060-4112-8104-700500500500/access_as_user`