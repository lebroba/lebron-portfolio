# Ben LeBron Portfolio

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment to GitHub Pages

This project is configured to be deployed to GitHub Pages. Follow these steps to deploy:

### 1. Build the project

```bash
npm run build
```

### 2. Deploy to GitHub Pages

You can use the gh-pages package to deploy the built files to the gh-pages branch:

```bash
# If you don't have gh-pages installed
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

### 3. Configuration Notes

- The project uses HashRouter instead of BrowserRouter for GitHub Pages compatibility
- The base URL is set to '/lebron-portfolio/' in vite.config.ts
- Asset paths should use relative paths or import statements to ensure they work correctly in production

### Troubleshooting

If you encounter issues with the deployed site:

1. **404 Errors**: Make sure you're using HashRouter for routing
2. **Missing Assets**: Check that asset paths are relative or use import statements
3. **Base URL**: Ensure the base URL in vite.config.ts matches your GitHub Pages URL structure

For the root URL (https://lebroba.github.io/), make sure your repository is named 'lebroba.github.io' and you're deploying to the main branch.
