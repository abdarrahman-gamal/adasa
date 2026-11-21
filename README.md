# Adasa (عدسة) — Editorial Photography Blog

An RTL-first, responsive editorial platform built with **React 19**, **Vite 8**, and **Tailwind CSS v4**. The application features dynamic client-side routing, decoupled content management, runtime Markdown parsing, and an automated CI/CD pipeline targeting GitHub Pages.

---

## 🚀 Live Demo & Repository
- **Live Demo**: [https://abdarrahman-gamal.github.io/adasa/](https://abdarrahman-gamal.github.io/adasa/)
- **Repository**: [https://github.com/abdarrahman-gamal/adasa](https://github.com/abdarrahman-gamal/adasa)

---

## 🛠️ Tech Stack & Tooling

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Runtime / Library** | React 19 (`^19.3.1`) | Leveraging modern functional component patterns & hooks |
| **Build Tool** | Vite 8 (`^8.3.6`) | Fast HMR, optimized ESM bundling via `@vitejs/plugin-react` |
| **Styling** | Tailwind CSS v4 (`^4.3.5`) | `@tailwindcss/vite` integration with custom utilities |
| **Routing** | React Router v7 (`^7.18.6`) | Data-router (`createBrowserRouter`) with base-path configuration |
| **Content Pipeline** | `react-markdown` (`^10.1.0`) | Client-side dynamic markdown rendering with custom JSX node mapping |
| **HTTP Client** | Axios (`^1.21.1`) | Decoupled asynchronous data fetching |
| **CI/CD** | GitHub Actions | Automated build & deployment workflow targeting GitHub Pages |

---

## 🏗️ Architecture & Engineering Highlights

### 1. Subpath-Resilient Client Routing
Hosting single-page applications (SPAs) on GitHub Pages subpaths (`/adasa/`) commonly introduces broken routing and asset path mismatches. This architecture handles subpath isolation natively:
- Dynamic base path injection via Vite config: `base: "/adasa/"`.
- Integration into the Router tree using `import.meta.env.BASE_URL`:
  ```javascript
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home posts={items} /> },
        { path: 'blog', element: <Blog posts={items} /> },
        { path: 'about', element: <About /> },
        { path: 'blog/:id', element: <Article posts={items} /> }
      ]
    }
  ], {
    basename: import.meta.env.BASE_URL
  });
  ```

### 2. Decoupled Content & Runtime Markdown Parsing
Article contents are decoupled from application layout code:
- Data is structured as normalized JSON fixtures (`public/data/posts.json`), containing metadata (author, tags, read time) and Markdown content strings.
- Articles are parsed at runtime through `react-markdown`, overriding semantic tags (`h2`, `p`) with customized Tailwind styling to preserve typography consistency in a dark-mode theme.

### 3. Component Hierarchy & Layout Pattern
The UI adheres to a centralized layout paradigm:
- `MainLayout` hosts global state-independent chrome (`Nav`) and delegates page rendering via React Router's `<Outlet />`.
- Reusable UI atoms (`CapsulLink`, `CapsulTab`, `ArticleCard`, `ArticleCardBox`) promote composability across views (`Home`, `Blog`, `Article`).
- Native RTL layout direction (`dir="rtl"`) established at document root with custom Arabic typography alignment.

### 4. Automated Deployment Pipeline
A declarative GitHub Actions workflow (`.github/workflows/deploy.yml`) handles continuous integration:
- Triggers on push to `main`.
- Sets up Node 20 environment with cached npm dependencies.
- Executes production build verification (`vite build`).
- Deploys static build artifacts directly to GitHub Pages.

---

## 📂 Project Directory Structure

```text
adasa/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD pipeline
├── public/
│   └── data/
│       └── posts.json          # Decoupled article data store
├── src/
│   ├── assets/                 # Static graphical assets
│   ├── comonents/              # Reusable UI component library
│   │   ├── ArticleCard/        # List & grid article card components
│   │   ├── Nav/                # Top navigation header
│   │   └── Tab/                # Navigation tabs and action pills
│   ├── layouts/
│   │   └── MainLayout.jsx      # Base application layout wrapper (Nav + Outlet)
│   ├── pages/
│   │   ├── About/              # About view
│   │   ├── Article/            # Dynamic article detail view with Markdown parser
│   │   ├── Blog/               # Paginated/grid blog feed
│   │   └── Home/               # Landing hero and featured content
│   ├── App.jsx                 # Router initialization & data fetching orchestrator
│   ├── index.css               # Tailwind v4 directives & theme utilities
│   └── main.jsx                # Application root entry point
├── index.html                  # HTML entry point (configured for RTL)
├── package.json
└── vite.config.js              # Vite & Tailwind build configuration
```

---

## ⚙️ Getting Started Locally

### Prerequisites
- Node.js `20.x` or higher
- npm `10.x` or higher

### Installation & Local Run
```bash
# 1. Clone the repository
git clone https://github.com/abdarrahman-gamal/adasa.git
cd adasa

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

### Production Build & Verification
```bash
# Build the optimized production bundle
npm run build

# Preview production build locally
npm run preview
```
---

## 👤 Author
**Abdarrahman Gamal**
- GitHub: [@abdarrahman-gamal](https://github.com/abdarrahman-gamal)