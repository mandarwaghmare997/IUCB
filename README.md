# IUCB - International Union for Certification & Benchmarking

Official website for IUCB (International Union for Certification & Benchmarking), a global accreditation body headquartered in Tallinn, Estonia.

## Project Overview

This is a static React application built with:
- **React 18**
- **TypeScript**
- **Tailwind CSS 4**
- **Shadcn UI**
- **Wouter** (for routing)

## Project Structure

- `/client` - Frontend React application
- `/client/public` - Static assets (images, icons)
- `/client/src/pages` - Page components (Home, About, Accreditation, etc.)
- `/client/src/components` - Reusable UI components

## Development

To run the project locally:

1. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment to Hostinger

This project is designed to be deployed as a **static website** on Hostinger.

### Step 1: Build the Project

Run the build command to generate the static files:

```bash
npm run build
```

This will create a `dist` folder containing:
- `index.html`
- `assets/` (JavaScript and CSS files)
- `images/` (Static images)

### Step 2: Upload to Hostinger

1. Log in to your **Hostinger Control Panel**.
2. Go to **File Manager** (or use an FTP client like FileZilla).
3. Navigate to the `public_html` directory of your domain (`iucb.org`).
4. **Delete** any default files (like `default.php`).
5. **Upload** all files and folders from the `dist` directory created in Step 1.
   - Ensure `index.html` is at the root of `public_html`.

### Step 3: Configure for Single Page Application (SPA)

Since this is a React SPA, you need to ensure all routes redirect to `index.html` so that refreshing a page like `/about` works correctly.

**For Apache (Hostinger default):**
Create or edit the `.htaccess` file in `public_html` and add the following:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Step 4: Verify

Visit `https://iucb.org` to verify the deployment. Test navigation to ensure routing works correctly.

## Contact

For technical support, please contact the development team.
