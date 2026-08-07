# 🚀 Dhruv Tyagi - 

https://dhrportfol.netlify.app/


A modern, animated, and responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 📸 Features

- ✨ Smooth animations with Framer Motion
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- ⚡ Fast and optimized
- 🎨 Modern UI/UX
- 📧 Contact form with EmailJS
- 🔝 Back-to-top button
- 🎯 SEO optimized

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **EmailJS** - Contact form

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Your Content

**📝 Edit `src/data/config.js`** - This is the ONLY file you need to edit!

#### Add Your Profile Photo:
```javascript
profileImage: "https://i.imgur.com/yourphoto.jpg"
```

Upload your photo to:
- [Imgur](https://imgur.com) (recommended)
- GitHub (create a public repo, upload, get raw URL)
- Any image hosting service

#### Add Your Resume:
```javascript
resumeLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
```

**Google Drive Steps:**
1. Upload PDF to Google Drive
2. Right-click → Share → Change to "Anyone with the link"
3. Copy the link and paste it

#### Add Your Projects:
```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Brief description",
  image: "https://i.imgur.com/project1.png", // Upload screenshot
  github: "https://github.com/Dhruv791/repo-name",
  demo: "https://your-demo-link.com", // Optional
  tags: ["Python", "React", "API"],
}
```

#### Add Your Certificates:
```javascript
{
  id: 1,
  title: "Certificate Name",
  issuer: "Organization",
  date: "2024",
  image: "https://i.imgur.com/cert1.png", // Upload certificate image
  link: "https://coursera.org/verify/ABC123", // Verification link
}
```

#### Add Your Social Links:
```javascript
linkedin: "https://linkedin.com/in/your-profile",
github: "https://github.com/Dhruv791",
email: "gunnutyagi049@gmail.com",
```

### 3. Set Up Contact Form (Optional)

The contact form uses **EmailJS** (free for 200 emails/month).

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template:
   - Use these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

5. Add to `src/data/config.js`:
```javascript
emailjs: {
  serviceId: "service_xxxxxxx",
  templateId: "template_xxxxxxx",
  publicKey: "your_public_key",
}
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## 📦 Deployment Options

### Option 1: Netlify (Recommended)

1. Create account on [Netlify](https://www.netlify.com/)
2. Drag & drop the `dist/` folder
3. Done! ✅

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 2: Vercel

1. Create account on [Vercel](https://vercel.com/)
2. Install Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 4: Hugging Face Spaces

1. Create a new Space on [Hugging Face](https://huggingface.co/spaces)
2. Select "Static" template
3. Upload your `dist/` folder contents
4. Done! ✅

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#3B82F6', // Blue
  accent: '#8B5CF6',  // Purple
}
```

### Change Fonts

Edit `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Poppins', 'Inter', 'sans-serif'],
}
```

And update `src/styles/index.css` Google Fonts import.

## 📁 Project Structure

```
portfolio-dhruv/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── data/
│   │   └── config.js          ← EDIT THIS FILE!
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🔧 Troubleshooting

### Images not loading?
- Make sure image URLs are direct links (ending in .jpg, .png)
- Test URLs in browser first
- Use public image hosting (Imgur, GitHub)

### Resume not showing?
- Google Drive: Change sharing to "Anyone with the link"
- Check if link ends with `/view` not `/edit`

### Contact form not working?
- Verify EmailJS credentials
- Check browser console for errors
- Test with: [EmailJS Dashboard](https://dashboard.emailjs.com/)

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📝 Quick Checklist

Before deployment:
- [ ] Added profile photo
- [ ] Added resume link
- [ ] Updated all projects with images & links
- [ ] Updated all certificates with images & links
- [ ] Added LinkedIn profile
- [ ] Configured EmailJS (optional)
- [ ] Changed colors (optional)
- [ ] Tested on mobile & desktop
- [ ] Built successfully (`npm run build`)

## 🎯 Tips for Images

### Profile Photo:
- Size: 400x400px or larger
- Format: JPG or PNG
- Square aspect ratio

### Project Screenshots:
- Size: 1200x800px or 16:9 ratio
- Show the main UI/feature
- High quality, clear text

### Certificate Images:
- Size: 600x400px or similar
- Can be the certificate or organization logo
- Clear and professional

## 💡 Need Help?

- **React Docs**: [reactjs.org](https://reactjs.org/)
- **Tailwind Docs**: [tailwindcss.com](https://tailwindcss.com/)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)
- **EmailJS Guide**: [emailjs.com/docs](https://www.emailjs.com/docs/)

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🙏 Credits

Built with ❤️ using:
- React
- Tailwind CSS
- Framer Motion
- Lucide Icons

---

**Made by Dhruv Tyagi** | [GitHub](https://github.com/Dhruv791) | [Email](mailto:gunnutyagi49@gmail.com)
