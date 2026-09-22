# S. Venkata Sai Teja - Professional Finance Portfolio

A production-ready personal portfolio website for **S. Venkata Sai Teja** (MBA Finance | Junior Accountant at Mahasai Aluminium Profiles Pvt Ltd), built with Next.js (App Router), Tailwind CSS, Lucide React, and Motion.

Single Source of Truth: `SAITEJA_RESUME.pdf`.

---

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Static Export & GitHub Pages Configuration

This project is configured for automated static deployment to **GitHub Pages**:

- **Next.js Config (`next.config.mjs`)**:
  - `output: 'export'` generates the static output in `./out`.
  - `basePath: '/saiteja_portfolio'` ensures routes and assets work when hosted at `https://<username>.github.io/saiteja_portfolio/`.
  - `images: { unoptimized: true }` enables static hosting without a Node.js image optimization server.
  - In development (`npm run dev`), `basePath` defaults to empty (`""`) so `http://localhost:3000` functions normally.
- **Jekyll Disabled (`public/.nojekyll`)**:
  - Tells GitHub Pages not to ignore `_next/` directories.
- **GitHub Actions Workflow (`.github/workflows/deploy.yml`)**:
  - Automatically builds and deploys to GitHub Pages whenever you push to the `main` branch.

---

## How to Deploy to GitHub Pages

1. **Commit and push your changes to GitHub**:
   ```bash
   git add .
   git commit -m "Configure project for GitHub Pages static deployment"
   git push origin main
   ```

2. **Enable GitHub Actions in GitHub Pages Settings**:
   - Go to your repository on GitHub: `https://github.com/puni7777777/saiteja_portfolio`
   - Click **Settings** (top navigation)
   - Click **Pages** (in the left sidebar under *Code and automation*)
   - Under **Build and deployment** > **Source**, select **GitHub Actions** (instead of *Deploy from a branch*)

3. **View the live site**:
   - The deployment workflow in the **Actions** tab will run automatically.
   - Once completed, your site will be live at:
     **https://puni7777777.github.io/saiteja_portfolio/**
