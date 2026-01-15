# Deployment Instructions

## Initial Setup (One-Time)

### 1. Push to GitHub

First, push your code to GitHub if you haven't already:

```bash 
git add .
git commit -m "Initial commit: React app with GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/Initech-AI-course`
2. Click on **Settings** (top navigation)
3. In the left sidebar, click on **Pages**
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### 3. Verify Deployment

After pushing to `main`, the GitHub Actions workflow will automatically run:

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once complete, your site will be live at: `https://YOUR_USERNAME.github.io/Initech-AI-course/`

## Ongoing Deployment

Every time you push to the `main` branch, the site will automatically rebuild and redeploy:

```bash
# Make your changes
git add .
git commit -m "Update: describe your changes"
git push origin main
```

## Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) does the following:

1. **Checkout**: Gets the latest code
2. **Setup Node**: Installs Node.js 20
3. **Install dependencies**: Runs `npm ci`
4. **Build**: Runs `npm run build` to create the production build
5. **Upload artifact**: Uploads the `dist` folder
6. **Deploy**: Deploys to GitHub Pages

## Troubleshooting

### Workflow Fails

If the GitHub Actions workflow fails:

1. Check the Actions tab for error messages
2. Common issues:
   - **Build errors**: Check that `npm run build` works locally
   - **Permission errors**: Ensure GitHub Pages is set to "GitHub Actions" source
   - **Node version**: The workflow uses Node 20

### 404 Errors on Deployed Site

If you get 404 errors on the deployed site:

1. Verify the `base` setting in `vite.config.js` matches your repository name:
   ```javascript
   base: '/Initech-AI-course/'
   ```
2. Make sure the `.nojekyll` file exists in the `public` folder
3. Check that GitHub Pages is enabled in repository settings

### Site Not Updating

If your changes aren't showing up:

1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Check the Actions tab to ensure the workflow completed successfully
3. Wait a few minutes for GitHub's CDN to update

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your DNS provider to point to GitHub Pages
3. In GitHub Settings → Pages, enter your custom domain

## Local Preview of Production Build

To preview what will be deployed:

```bash
npm run build
npm run preview
```

This builds the app and serves it locally with the same base path configuration.

## Environment Variables

If you need to add environment variables:

1. Create a `.env` file (already in `.gitignore`)
2. Prefix variables with `VITE_` (e.g., `VITE_API_KEY=your-key`)
3. Access them in code: `import.meta.env.VITE_API_KEY`
4. For GitHub Actions, add secrets in Settings → Secrets and variables → Actions

## Monitoring Deployments

- **GitHub Actions**: Check build logs and deployment status
- **GitHub Pages**: See deployment history in Settings → Pages
- **Live Site**: Visit your GitHub Pages URL to verify changes

