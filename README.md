# JAS Labs

**Premium Software Engineering Firm**

> We are a team of elite software engineers building scalable architectures, innovative mobile experiences, and data-driven ML solutions for forward-thinking enterprises.

Created with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Projects

This repository contains the source code for the JAS Labs portfolio website.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏃‍♂️ Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/jaslabs.git
   cd jaslabs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your keys if necessary:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

Previews the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

This project is configured for automated deployment to **GitHub Pages** using GitHub Actions.

1. Push changes to the `main` branch.
2. The GitHub Action in `.github/workflows/deploy.yml` will automatically build and deploy the site.
3. Ensure your `vite.config.ts` has the correct `base` URL set (e.g., `/jaslabs/`).
4. Enable GitHub Actions as the source in your repository settings under **Settings > Pages**.

## 📄 License

All rights reserved.
