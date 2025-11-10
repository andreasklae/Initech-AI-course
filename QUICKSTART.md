# 🚀 Quick Start Guide

## See It In Action Right Now!

```bash
npm start
```

Then open http://localhost:5173 in your browser!

### 🔒 Login Required
The site is password-protected. Use your configured credentials to log in.

## 🎯 What You'll See

A complete, production-ready landing page with:

✅ **8 sections** - Hero, Problem, Solution, How it works, Details, Target audience, FAQ, Final CTA  
✅ **Dark blue theme** - Almost black background with blue-tinted gradients  
✅ **Glassmorphism design** - Modern frosted glass effect on all cards  
✅ **Smooth animations** - Module cards fade in as you scroll  
✅ **Interactive FAQ** - Click questions to expand/collapse answers  
✅ **Lucide icons** - Professional icon library throughout  
✅ **3 CTA buttons** - Strategically placed "Meld deg på kurset" buttons  
✅ **Large logo** - Prominent logo in hero section  
✅ **Fully responsive** - Looks perfect on mobile, tablet, and desktop  

## ⚠️ Placeholders - OBVIOUS Yellow Highlights

All placeholders have a **bright yellow background with dashed borders** so you can't miss them:

- `[X]` - Spots remaining (2 places)
- `[Dato]` - Course date (3 places)
- `[TBD]` - Venue location (1 place)
- `[Fyll inn]` - Price (1 place)
- `[navn]` - Contact name (2 places)
- `[epost]` - Email (2 places)
- `[telefon]` - Phone (2 places)

See **[PLACEHOLDERS.md](PLACEHOLDERS.md)** for detailed replacement instructions.

## 📝 Next Steps

### 1. Replace Placeholders (5-10 minutes)

Open `src/components/LandingPage.jsx` and search for `<Placeholder>` tags. Replace with real content.

### 2. Test Locally

```bash
npm start
```

### 3. Build for Production

```bash
npm run build
```

### 4. Deploy to GitHub Pages

```bash
git add .
git commit -m "Add landing page with placeholders filled"
git push origin main
```

Then:
1. Go to GitHub repository → **Settings** → **Pages**
2. Set **Source** to **GitHub Actions**
3. Wait 1-2 minutes for deployment
4. Visit: `https://YOUR_USERNAME.github.io/Initech-AI-course/`

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#f97316',  // Your brand color
  },
}
```

### Update Content

All Norwegian text is in `src/components/LandingPage.jsx`. Each section is clearly commented.

### Modify Registration Button

Find `handleCTAClick` function and replace the alert with your registration logic:

```javascript
const handleCTAClick = () => {
  window.open('https://your-registration-form.com', '_blank');
};
```

## 📚 Documentation

- **README.md** - Full project documentation
- **PLACEHOLDERS.md** - Detailed placeholder guide
- **DEPLOYMENT.md** - Step-by-step deployment instructions

## 🆘 Common Issues

**Issue:** Yellow placeholders still showing after replacement  
**Solution:** Make sure you replaced the entire `<Placeholder>...</Placeholder>` with plain text

**Issue:** Build fails  
**Solution:** Run `npm install` again, then `npm run build`

**Issue:** Changes not showing  
**Solution:** Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

## ✨ Features Included

- ✅ Scroll animations (Intersection Observer)
- ✅ FAQ accordion (click to expand)
- ✅ Responsive grid layouts
- ✅ Hover effects on cards and buttons
- ✅ Semantic HTML structure
- ✅ Accessibility-friendly
- ✅ Fast performance (Vite + optimized build)
- ✅ SEO-ready structure

## 🎉 You're Ready!

Your landing page is production-ready. Just replace the placeholders and deploy!

**Questions?** Check the other documentation files or contact support.

---

**Pro Tip:** Test on mobile devices before deploying! Run `npm start`, then access your local IP from your phone (e.g., http://192.168.1.X:5173)

