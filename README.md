# Initech AI Course

A modern, responsive landing page for a 6-hour AI fundamentals course. Built with React, Vite, and Tailwind CSS, deployed to GitHub Pages.

## 🔒 Authentication

The website is password-protected. Contact the site administrator for login credentials.

See [AUTHENTICATION.md](AUTHENTICATION.md) for details on how to configure credentials or remove authentication.

## 📧 Email Configuration

The signup form uses [EmailJS](https://www.emailjs.com/) to send emails:
- **Notification email** sent to you when someone signs up
- **Confirmation email** sent to the user

### Setup EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create two email templates:
   - **Notification template** (for you to receive signups)
   - **Confirmation template** (for users to receive confirmation)
4. Copy your credentials to `.env`:
   ```bash
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_NOTIFICATION=your_notification_template_id
   VITE_EMAILJS_TEMPLATE_CONFIRMATION=your_confirmation_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Security Best Practices

1. **Domain Restrictions**: In EmailJS dashboard → Account → Security, add your domain(s) to prevent unauthorized use
2. **Environment Variables**: Never commit `.env` to Git (it's already in `.gitignore`)
3. **Template Variables**: The templates use these variables:
   - Notification: `{{name}}`, `{{email}}`, `{{phone}}`, `{{company}}`, `{{signup_type}}`, `{{participants}}`, `{{message}}`
   - Confirmation: `{{to_name}}`, `{{to_email}}`, `{{signup_type}}`

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

3. Set up environment variables:
```bash
cp .env.example .env
```
Then edit `.env` and add your EmailJS credentials. See the **Email Configuration** section below for details.

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

### Setup GitHub Secrets (Required for Email Functionality)

For the email form to work on the deployed site, add your EmailJS credentials as GitHub secrets:

1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** and add these 4 secrets:
   - `VITE_EMAILJS_SERVICE_ID` = your service ID
   - `VITE_EMAILJS_TEMPLATE_NOTIFICATION` = your notification template ID
   - `VITE_EMAILJS_TEMPLATE_CONFIRMATION` = your confirmation template ID
   - `VITE_EMAILJS_PUBLIC_KEY` = your public key

These values should match what's in your local `.env` file.

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

- 🔒 **Password Protected** - Simple authentication system with SHA-256 hashed passwords
- 📧 **Email Integration** - Form submissions with EmailJS (notification + confirmation emails)
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
- **EmailJS** - Email service for form submissions
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