# Personal Blog - Mehdi Hatami Goloujeh

A modern, responsive personal blog showcasing your work as a hydrologist and statistician. Built with HTML, CSS, and JavaScript featuring beautiful animations and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Typing Animation**: Dynamic typing effect for your tagline "Hydrologist by Training, Statistician by Passion"
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Interactive Elements**: Hover effects, ripple buttons, and scroll animations
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Contact Form**: Functional contact form with validation
- **Progress Bar**: Visual scroll progress indicator
- **Performance Optimized**: Debounced scroll events and efficient animations

## 📁 File Structure

```
personalBlog/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Setup Instructions

1. **Clone or Download**: Get the files into your local directory
2. **Open in Browser**: Simply open `index.html` in your web browser
3. **Customize**: Edit the content in `index.html` to personalize your blog
4. **Deploy**: Upload to any web hosting service (GitHub Pages, Netlify, etc.)

## 🎨 Customization Guide

### 1. Personal Information
Edit the following sections in `index.html`:

- **Name**: Update `<h1 class="hero-title">Mehdi Hatami Goloujeh</h1>`
- **Tagline**: Modify the typing animation text in `script.js`:
  ```javascript
  typingText.setAttribute('data-words', JSON.stringify([
      'Hydrology by Training,',
      'Statistician by Passion,'
      'Data Science by Practice,'
  ]));
  ```
- **About Section**: Update the description in the about section
- **Contact Information**: Update email, LinkedIn, GitHub, and location

### 2. Add Your Photo
Replace the placeholder in the hero section:
```html
<div class="image-placeholder">
    <i class="fas fa-user"></i>
    <p>Your Photo Here</p>
</div>
```
With:
```html
<img src="path/to/your/photo.jpg" alt="Mehdi Hatami Goloujeh" class="hero-photo">
```

### 3. Update Work Projects
Modify the work cards in the work section to showcase your actual projects:
- Update project titles and descriptions
- Change icons (using Font Awesome classes)
- Modify tags to reflect your technologies

### 4. Research & Publications
Update the research section with your actual publications:
- Add real publication titles
- Update years and descriptions
- Modify tags as needed

### 5. Professional Experience
Edit the timeline in the experience section:
- Update job titles and companies
- Modify dates and descriptions
- Add or remove timeline items

### 6. Skills
Update the skills section with your actual expertise:
- Add/remove skill tags
- Modify the gradient colors if desired

## 🎯 Key Sections

### Hero Section
- Your photo (placeholder included)
- Name with gradient text effect
- Typing animation with your tagline
- Call-to-action buttons

### About Section
- Personal description
- Core skills with gradient tags

### Work Section
- Featured projects with icons
- Technology tags
- Hover animations

### Research Section
- Publications timeline
- Year indicators
- Research tags

### Experience Section
- Professional timeline
- Company information
- Role descriptions

### Contact Section
- Contact information with icons
- Functional contact form
- Social media links

## 🎨 Styling Customization

### Colors
The main color scheme uses:
- Primary Blue: `#2563eb`
- Secondary Purple: `#7c3aed`
- Background: `#f8fafc`
- Text: `#1f2937`

To change colors, update the CSS variables or direct color values in `styles.css`.

### Fonts
The blog uses Inter font from Google Fonts. To change:
1. Update the Google Fonts link in `index.html`
2. Modify the `font-family` property in `styles.css`

### Animations
- Typing speed: Adjust the `typeSpeed` variable in `script.js`
- Fade-in timing: Modify the `transition` property in `.fade-in`
- Hover effects: Customize transform values in CSS

## 📱 Responsive Design

The blog is fully responsive with breakpoints at:
- **768px**: Tablet layout
- **480px**: Mobile layout

Key responsive features:
- Mobile hamburger menu
- Stacked layouts on smaller screens
- Adjusted font sizes
- Touch-friendly interactions

## 🚀 Performance Features

- **Debounced Scroll Events**: Optimized scroll performance
- **Intersection Observer**: Efficient animation triggering
- **CSS Transforms**: Hardware-accelerated animations
- **Minimal Dependencies**: Only Font Awesome for icons

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📝 Adding New Sections

To add a new section:

1. **HTML**: Add a new `<section>` in `index.html`
2. **CSS**: Add corresponding styles in `styles.css`
3. **Navigation**: Add a new nav link
4. **JavaScript**: Add any interactive features in `script.js`

## 🎯 SEO Optimization

The blog includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## 📞 Support

For customization help or questions:
1. Check the code comments for guidance
2. Modify the content in `index.html`
3. Adjust styles in `styles.css`
4. Add functionality in `script.js`

## 🚀 Deployment

### GitHub Pages
1. Create a new repository
2. Upload all files
3. Go to Settings > Pages
4. Select source branch
5. Your blog will be live at `username.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Your site will be deployed instantly
3. Get a custom domain if desired

### Other Hosting
Upload the files to any web hosting service that supports static sites.

---

**Enjoy your new personal blog!** 🎉

Feel free to customize it to perfectly represent your professional identity as a hydrologist and statistician. 