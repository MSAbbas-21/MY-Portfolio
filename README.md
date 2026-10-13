# M. S. Mohammad Abbas - Personal Portfolio Website

A modern, professional, and responsive personal portfolio website built with **React 19**, **Vite**, and **Tailwind CSS**. Designed specifically for software engineering and full-stack developer roles, featuring a dark charcoal aesthetic with subtle violet/blue accents, accessible typography, and authentic project showcases.

---

## 🚀 Key Highlights & Features

- **Dark Charcoal Theme**: Premium `#0B0F17` aesthetic with subtle indigo & violet lighting, glassmorphism headers, and high-contrast accessible typography.
- **Single-Source Data Architecture**: Personal info, skills, experience, projects, education, and contact details are centrally organized in `src/data/portfolioData.js`.
- **In-Depth Project Modals**: 3 detailed project showcases (ShopSphere, College Voting System, Smart Student Management System) with interactive "View Details" modals that display technical architecture, DB schemas, and implementation highlights.
- **Smart Link Safeguards**: GitHub and Live Demo buttons only appear when valid URLs are configured—no broken links or fabricated demos.
- **Working Resume Download**: One-click download button pointing to `public/resume.pdf`.
- **Form Validation & Mailto Fallback**: Fully validated contact form with real-time feedback, direct `mailto:` generator, and one-click clipboard copying.
- **Responsive & Accessible**: Optimized for mobile, tablet, and desktop viewports with keyboard navigation and ARIA landmarks.
- **SEO & Social Sharing Ready**: Configured OpenGraph metadata, theme colors, and custom monogram SVG favicon.

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg             # Custom "MA" monogram favicon
│   └── resume.pdf              # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── About.jsx           # Background, BCA degree (8.5 CGPA), SDLC mindset
│   │   ├── Certifications.jsx  # Simplilearn GenAI & Python certifications
│   │   ├── Contact.jsx         # Contact cards, validated form & mailto fallback
│   │   ├── Education.jsx       # BCA, J Spiders, and PUC education timeline
│   │   ├── Experience.jsx      # Junior Developer Trainee at Unique Force
│   │   ├── Footer.jsx          # Dynamic copyright year, quick links, profiles
│   │   ├── Hero.jsx            # Headline, quick actions, code syntax terminal
│   │   ├── Navbar.jsx          # Sticky header, section tracker, mobile menu
│   │   ├── ProjectModal.jsx    # Dedicated in-depth architecture modal
│   │   ├── Projects.jsx        # Project grid with technology tags
│   │   ├── Skills.jsx          # Categorized skill cards with filter buttons
│   │   └── SocialIcons.jsx     # Clean SVG icons for GitHub and LinkedIn
│   ├── data/
│   │   └── portfolioData.js    # Single configuration file for all content
│   ├── App.jsx                 # Application layout shell
│   ├── index.css               # Tailwind CSS v4 directives & custom scrollbars
│   └── main.jsx                # React DOM entry point
├── index.html                  # SEO metadata, web fonts & document root
├── package.json                # Project dependencies and build scripts
└── vite.config.js              # Vite & Tailwind CSS v4 configuration
```

---

## 🛠️ Local Development & Running

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to view the website with instant Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
This produces optimized production assets inside the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

### 5. Lint the Codebase
```bash
npm run lint
```

---

## 📄 How to Update Your Resume PDF

1. Export your latest resume as a PDF file.
2. Rename the file to `resume.pdf`.
3. Place it directly inside the `public/` directory, replacing the starter file:
   ```text
   portfolio/public/resume.pdf
   ```
4. All "Download Resume" buttons on the website will automatically serve your new PDF!

---

## 🔗 How to Update Project URLs & Contact Backend

Open `src/data/portfolioData.js`:

### 1. Update Project GitHub & Live Demo Links
In the `projectsData` array, simply add your repository and deployed demo URLs:
```javascript
{
  id: "shopsphere",
  title: "ShopSphere – Full-Stack E-Commerce Web Application",
  // ...
  githubUrl: "https://github.com/MSAbbas-21/shopsphere", // Paste your repo URL here
  demoUrl: "https://your-shopsphere-demo.vercel.app",    // Paste your deployed URL here
}
```
*Note: If you leave `githubUrl` or `demoUrl` as an empty string `""`, the corresponding button is automatically hidden.*

### 2. Connect a Live Contact Form Backend (Optional)
If you would like form submissions sent straight to your email without opening an email client:
1. Create a free form at [Formspree](https://formspree.io/) or [Formkeep](https://formkeep.com/).
2. In `src/data/portfolioData.js`, add your endpoint URL:
   ```javascript
   export const contactData = {
     // ...
     formspreeEndpoint: "https://formspree.io/f/your_form_id",
   };
   ```

---

## 🌐 Step-by-Step Deployment Guide

### Option A: Deploy to Vercel (Recommended - Fastest)
1. Push your portfolio code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/MSAbbas-21/portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/) with your GitHub account.
3. Click **Add New Project** and select your `portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your site will be live with free global CDN and HTTPS in under 1 minute!

### Option B: Deploy to Netlify
1. Log into [Netlify](https://www.netlify.com/).
2. Click **Add new site** > **Import an existing project** > **GitHub**.
3. Select your `portfolio` repository.
4. Set Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**.

---

## 📋 Checklist for Personal Assets to Provide

- [ ] Replace `public/resume.pdf` with your official resume PDF.
- [ ] Add real GitHub repository links to `projectsData` in `src/data/portfolioData.js` once uploaded to GitHub.
- [ ] Add live deployment demo links in `projectsData` if you host them.
- [ ] (Optional) Add your Simplilearn credential certificate URLs in `certificationsData`.
- [ ] (Optional) Provide a Formspree endpoint in `contactData.formspreeEndpoint` if you prefer direct email delivery.
