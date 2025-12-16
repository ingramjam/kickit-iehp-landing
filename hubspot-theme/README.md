# Kick It California + IEHP Landing Page - HubSpot Theme

A complete HubSpot theme template for the Kick It California & IEHP landing page with drag-and-drop capability.

## 📦 What's Included

### Theme Structure
```
hubspot-theme/
├── theme.json                  # Theme configuration
├── templates/
│   ├── kickit-iehp-landing.html   # Main landing page template
│   └── fields.json                # Template customization fields
└── css/
    ├── theme.css                  # Main theme styles
    └── landing-page.css           # Landing page specific styles
```

## 🚀 Installation

### Option 1: Using HubSpot CLI (Recommended)

1. **Install HubSpot CLI**
   ```bash
   npm install -g @hubspot/cli
   ```

2. **Authenticate**
   ```bash
   hs auth
   ```
   Follow the prompts to connect to your HubSpot account

3. **Upload Theme**
   ```bash
   cd /path/to/kickit-iehp-landing
   hs upload hubspot-theme your-hubspot-folder-name
   ```

4. **Watch for Changes (Optional)**
   ```bash
   hs watch hubspot-theme your-hubspot-folder-name
   ```

### Option 2: Manual Upload via Design Manager

1. **Access Design Manager**
   - Log into HubSpot
   - Navigate to: `Marketing` → `Files and Templates` → `Design Tools`

2. **Create Theme Folder**
   - In the left sidebar, create a new folder (e.g., `kickit-iehp-theme`)

3. **Upload Files**
   - Create folder structure matching the theme layout
   - Upload each file to its corresponding location:
     - `theme.json` → root of theme folder
     - `templates/kickit-iehp-landing.html` → templates folder
     - `templates/fields.json` → templates folder
     - `css/theme.css` → css folder
     - `css/landing-page.css` → css folder

4. **Publish Theme**
   - Right-click on the theme folder
   - Select "Publish"

## 🎨 Using the Theme

### Creating a Landing Page

1. **Navigate to Landing Pages**
   - Go to: `Marketing` → `Website` → `Landing Pages`
   - Click `Create` → `Landing page`

2. **Select Template**
   - Choose "Kick It California + IEHP Landing Page" from your templates
   - Or select from your theme folder

3. **Add Modules**
   - The template includes a drag-and-drop area
   - Add your custom modules:
     1. Hero Video Section
     2. What Kick It Offers Section
     3. FAQ Accordion Section

4. **Customize Settings**
   - Click on settings/gear icon
   - Edit page title and meta information
   - Configure SEO settings

5. **Publish**
   - Preview your page
   - Click "Publish" when ready

## 🔧 Template Features

### Built-in Header
- Kick It California logo (left)
- IEHP logo (right)
- Sticky positioning
- Fully responsive

### Drag-and-Drop Content Area
- Main content area accepts any HubSpot module
- Pre-configured for custom modules
- Full-width sections supported

### Built-in Footer
- About Kick It California section
- Links to main website and privacy policy
- Phone number: 1-800-300-8086
- Copyright notice with dynamic year
- IEHP branded colors

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1023px
  - Desktop: ≥ 1024px

## 🎨 Customization

### Changing Colors

Edit `css/theme.css` and modify the CSS variables:

```css
:root {
    --kic-blue: #005696;       /* Primary blue */
    --kic-teal: #00a7e1;       /* Accent teal */
    --iehp-yellow: #FFD700;    /* Highlight yellow */
    --iehp-navy: #1a2a3a;      /* Dark navy */
}
```

### Changing Logos

Edit `templates/kickit-iehp-landing.html`:

```html
<!-- Kick It Logo -->
<img src="YOUR_LOGO_URL" alt="Kick It California">

<!-- IEHP Logo -->
<img src="YOUR_LOGO_URL" alt="IEHP">
```

### Modifying Footer Content

Edit the footer section in `templates/kickit-iehp-landing.html`:

```html
<footer class="site-footer">
    <!-- Customize footer content here -->
</footer>
```

### Adding Custom CSS

Add your custom styles to `css/landing-page.css` or create a new CSS file:

1. Create new file: `css/custom.css`
2. Add require statement in template:
   ```hubl
   {{ require_css(get_asset_url("../../css/custom.css")) }}
   ```

## 📱 Mobile Optimization

The theme includes comprehensive mobile styles:

- **Header**: Logos scale down, layout adjusts
- **Buttons**: Full-width on mobile
- **Typography**: Responsive font sizes
- **Footer**: Optimized padding and layout

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA landmarks
- Keyboard navigation support
- Focus indicators
- Skip-to-main-content link
- Reduced motion support for users with motion sensitivity

## 🔗 External Resources

The theme uses these external resources:

- **Kick It Logo**: `https://www.kickitca-wp.ucsd.edu/wp-content/uploads/2021/06/Primary.png`
- **IEHP Logo**: `https://tbcdn.talentbrew.com/company/38317/v1_0/img/logo.png`

## 📋 Template Variables

### Available HubL Variables

```hubl
{{ html_lang }}              # Language code (e.g., "en")
{{ html_lang_dir }}          # Text direction
{{ page_meta.html_title }}   # Page title
{{ site_settings.favicon_src }} # Favicon URL
{{ current_year }}           # Current year for copyright
```

### Standard HubSpot Includes

```hubl
{{ standard_header_includes }}  # Required HubSpot header code
{{ standard_footer_includes }}  # Required HubSpot footer code
```

## 🎯 Best Practices

1. **Use Modules**: Add content via drag-and-drop modules rather than hardcoding
2. **Test Responsive**: Always test on mobile, tablet, and desktop
3. **Check Performance**: Optimize images and minimize custom code
4. **SEO**: Configure meta tags and page titles appropriately
5. **Analytics**: Add HubSpot tracking code via settings

## 🐛 Troubleshooting

### Template Not Showing
- Ensure `theme.json` is in the root of the theme folder
- Check that template has `isAvailableForNewContent: true`
- Publish the theme

### CSS Not Loading
- Verify CSS file paths in template
- Check that CSS files are published
- Clear browser cache

### Modules Not Draggable
- Ensure DND area is properly defined
- Check HubL syntax is correct
- Make sure modules are published and available

### Mobile Layout Issues
- Check viewport meta tag is present
- Verify responsive breakpoints in CSS
- Test on actual devices, not just browser resize

## 📚 Additional Resources

- [HubSpot CMS Documentation](https://developers.hubspot.com/docs/cms)
- [HubL Documentation](https://developers.hubspot.com/docs/cms/hubl)
- [HubSpot CLI Documentation](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)
- [HubSpot Design Manager Guide](https://knowledge.hubspot.com/design-manager)

## 🆘 Support

For issues related to:
- **Theme**: Edit template and CSS files
- **Modules**: See `hubspot-modules/README.md`
- **HubSpot Platform**: Contact HubSpot support
- **Content**: Use HubSpot's page editor

## 📄 Version History

### Version 1.0.0 (December 2025)
- Initial release
- Drag-and-drop template
- Responsive header and footer
- IEHP branding integration
- Mobile-optimized layout

---

**Theme**: Kick It California + IEHP Landing Page  
**Compatible with**: HubSpot CMS  
**Last Updated**: December 2025
