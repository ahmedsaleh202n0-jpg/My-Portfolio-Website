# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## Vercel (Recommended)

Vercel is the easiest way to deploy your Vite + React portfolio.

### Steps:

1. **Push to GitHub** (if not already)
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Go to Vercel.com**
- Sign up with your GitHub account
- Click "Add New Project"
- Import your GitHub repository
- Vercel will auto-detect Vite and configure it correctly
- Click "Deploy"

3. **Your portfolio is live!**
- Vercel will provide you with a URL
- You can add a custom domain in project settings

## Netlify

Another great option for deployment.

### Steps:

1. **Build your project**
```bash
npm run build
```

2. **Connect to Netlify**
- Go to netlify.com
- Click "New site from Git"
- Connect your GitHub account
- Select your portfolio repository
- Build command: `npm run build`
- Publish directory: `dist`
- Click "Deploy"

## GitHub Pages

Free hosting directly from your GitHub repository.

### Steps:

1. **Update vite.config.js**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'portfolio' with your repo name
})
```

2. **Build and push**
```bash
npm run build
git add .
git commit -m "Build for production"
git push
```

3. **Enable GitHub Pages**
- Go to your repository settings
- Scroll to "GitHub Pages" section
- Select "Deploy from a branch"
- Choose "main" branch and `/dist` folder
- Your portfolio will be available at: `https://yourusername.github.io/portfolio/`

## Self-Hosted (VPS/Cloud Server)

If you want to host on your own server:

### Requirements:
- Node.js installed on your server
- A domain name
- SSH access to your server

### Steps:

1. **Build your project**
```bash
npm run build
```

2. **Upload to server**
```bash
scp -r dist/* user@yourserver.com:/var/www/portfolio/
```

3. **Use a web server (Nginx example)**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        root /var/www/portfolio;
        try_files $uri /index.html;
    }
}
```

4. **Set up SSL certificate** (using Let's Encrypt)
```bash
sudo certbot certonly --standalone -d yourdomain.com
```

## Environment Variables (if needed)

Create a `.env` file in your project root:
```
VITE_API_URL=https://api.example.com
```

Access in your components:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Performance Tips

1. **Optimize Images**: Compress all images before deploying
2. **Enable Caching**: Configure cache headers for better performance
3. **Monitor**: Use tools like Lighthouse to monitor performance
4. **CDN**: Use a CDN for faster content delivery

## Domain Setup

1. **Purchase a domain** from GoDaddy, Namecheap, etc.
2. **Update DNS settings** to point to your hosting provider
3. **Set up SSL certificate** (usually automatic with modern hosts)

## Troubleshooting

### Build fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node version: `node --version`

### Deployment shows wrong files
- Clear deployment cache
- Rebuild your project locally
- Re-deploy

### Custom domain not working
- Wait 24-48 hours for DNS propagation
- Check DNS settings in your domain provider
- Ensure SSL certificate is properly installed

## Monitoring and Updates

After deployment:
1. Monitor your site's performance
2. Set up automated backups (if self-hosted)
3. Keep dependencies updated: `npm update`
4. Monitor for security vulnerabilities: `npm audit`

## Support

If you encounter issues:
- Check the platform's documentation
- Search GitHub Issues for solutions
- Ask in development communities

Good luck with your portfolio deployment! 🚀
