# Web3 Dashboard - Design Showcase

[![CI](https://github.com/ChainsQueenEth/web3dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/ChainsQueenEth/web3dashboard/actions/workflows/ci.yml)

A modern, responsive Web3 dashboard interface designed with a focus on user experience and visual appeal. This project demonstrates my skills in creating beautiful, functional interfaces for blockchain and cryptocurrency applications.

![Web3 Dashboard Screenshot](public/img/web3dashboard1.png)
![Web3 Dashboard Screenshot](public/img/web3dashboard2.png)


## 🎨 Design Highlights

### Visual Design
- **Dark Theme UI** with carefully selected color gradients for depth and contrast
- **Responsive Layout** that adapts seamlessly across all device sizes
- **Micro-interactions** and smooth animations for enhanced user engagement
- **Custom UI Components** with attention to detail and consistency

### Technical Implementation
- Built with **Next.js 13+** and **TypeScript** for type safety
- Styled with **Tailwind CSS** for rapid, maintainable styling
- Animated with **Framer Motion** for buttery-smooth transitions
- Component-based architecture for maximum reusability

## ✨ Key Features

- **Interactive Data Visualization**
- **Mock Market Data** display (demonstration only)
- **Responsive Grid Layout**
- **Playful Animations** featuring an interactive butterfly decoration
- **Dark/Light Mode** ready (coming soon)
- **Accessible** interface following WCAG guidelines

## 🛠️ Technical Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context
- **Type Safety**: TypeScript
- **Icons**: Lucide Icons
- **Font**: Geist (optimized with next/font)

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/web3-dashboard.git
   ```

2. Install dependencies (pnpm)
   ```bash
   pnpm install
   ```

3. Run the development server
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Design Decisions

- **Color Scheme**: Chose a dark theme with blue accents to reduce eye strain during extended use
- **Typography**: Used Geist font for its modern, clean aesthetic and excellent readability
- **Spacing**: Implemented a consistent 8px grid system for visual harmony
- **Motion**: Added subtle animations to guide user attention and improve perceived performance

## 🖥️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

💡 **Note**: This is a design showcase. For a production application, additional security measures and error handling would be implemented.


## 📦 Deployment (GitHub Pages)

This project is configured to deploy to GitHub Pages at:

- URL: `https://ChainsQueenEth.github.io/web3dashboard`

Key configuration files:

- `next.config.js` sets `output: 'export'` and conditionally applies `basePath`/`assetPrefix` for production (`/web3dashboard`).
- `.github/workflows/deploy.yml` builds with pnpm and publishes `./out` to the `gh-pages` branch.
- `package.json` declares `"packageManager": "pnpm@10"`.

Deploy from local (optional):

```bash
pnpm build
# Static site will be generated in ./out
```

CI/CD via GitHub Actions:

1) Push to `main` — workflow builds and publishes to `gh-pages`.
2) In GitHub repo Settings → Pages, set Source to `gh-pages` branch, `/ (root)`.

Troubleshooting:

- If assets/links 404 on Pages, ensure the repo name matches `web3dashboard` and that the Pages URL uses the `/web3dashboard` subpath.
- Confirm that `gh-pages` branch contains the exported files and a `.nojekyll` file (created by the workflow with `enable_jekyll: false`).


