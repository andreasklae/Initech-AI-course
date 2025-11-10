# Initech AI Course

A modern, responsive landing page for a 6-hour AI fundamentals course. Built with React, Vite, and Tailwind CSS, deployed to GitHub Pages.

## 🔒 Authentication

The website is password-protected. Default credentials:
- **Username:** `admin`
- **Password:** `initech123`

See [AUTHENTICATION.md](AUTHENTICATION.md) for details on how to change credentials or remove authentication.

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/Initech-AI-course.git
cd Initech-AI-course
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📦 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**, select:
   - **Source**: GitHub Actions

### Automatic Deployment

The project is configured to automatically deploy to GitHub Pages whenever code is pushed to the `main` branch:

1. Make your changes
2. Commit and push to `main`:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. The GitHub Actions workflow will automatically build and deploy your site

Your site will be available at: `https://YOUR_USERNAME.github.io/Initech-AI-course/`

## ✨ Features

- 🔒 **Password Protected** - Simple authentication system (username: `admin`, password: `initech123`)
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Ultra-Dark Design** - Almost black background with blue-tinted gradients
- 💎 **Glassmorphism** - Modern frosted glass effect on all cards
- ⚡ **Smooth Animations** - Scroll-triggered fade-in animations for engaging UX
- 🔄 **Interactive FAQ** - Accordion-style questions and answers
- 🎯 **Clear CTAs** - Strategic placement of "Meld deg på kurset" buttons
- 🌐 **Norwegian Content** - All text in Norwegian as specified
- 🔖 **Easy to Update** - Highlighted placeholders for quick content changes
- 🎨 **Professional Icons** - Lucide React icons throughout

## 🛠️ Technologies

- **React 18** - UI library
- **Vite 5** - Lightning-fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **GitHub Actions** - Automated CI/CD pipeline
- **GitHub Pages** - Free hosting

## 📝 Project Structure

```
Initech-AI-course/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow
├── public/                      # Static assets
│   ├── vite.svg
│   └── .nojekyll               # For GitHub Pages
├── src/
│   ├── assets/                 # Images, logos
│   │   ├── main_logo.png       # Main course logo
│   │   ├── Small_logo.png      # Small logo variant
│   │   └── react.svg
│   ├── components/             # React components
│   │   ├── LandingPage.jsx     # Main landing page (8 sections)
│   │   └── ScrollReveal.jsx    # Scroll animation component
│   ├── App.jsx                 # Main App component
│   ├── index.css               # Tailwind imports & global styles
│   └── main.jsx                # Entry point
├── DEPLOYMENT.md               # Deployment instructions
├── PLACEHOLDERS.md             # Guide for replacing placeholders
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── vite.config.js              # Vite configuration
```

## 🔧 Configuration

The `vite.config.js` file is configured with the base path for GitHub Pages:

```javascript
base: '/Initech-AI-course/'
```

Make sure this matches your repository name.

## 📋 Editing Content

### Placeholders

The landing page includes highlighted placeholders for easy identification:
- `[X]` - Number of spots remaining
- `[Dato]` - Course date and time
- `[TBD]` - Venue location
- `[Fyll inn]` - Price
- `[navn]` - Contact person name
- `[epost]` - Contact email
- `[telefon]` - Contact phone

**See [PLACEHOLDERS.md](PLACEHOLDERS.md) for detailed instructions on replacing these values.**

### Landing Page Sections

The landing page (`src/components/LandingPage.jsx`) includes 8 sections:

1. **Hero** - Main headline with CTA
2. **Problemet** - Pain points (3 key problems)
3. **Løsningen** - 6 course modules with animated cards
4. **Hvordan kurset fungerer** - 3-column benefits
5. **Praktiske detaljer** - Course info and what's included
6. **For hvem?** - Target audience (yes/no lists)
7. **FAQ** - 5 accordion questions
8. **Final CTA** - Last call to action

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    500: '#f97316', // Orange accent color
    // ... other shades
  },
}
```

### Animations

Scroll animations are powered by `ScrollReveal.jsx` using Intersection Observer API. Adjust animation duration in the component:

```javascript
duration-1000  // 1 second transition
```

## 📄 License

This project is open source and available under the MIT License.