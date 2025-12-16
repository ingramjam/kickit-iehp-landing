# Kick It California + IEHP Landing Page - HubSpot Modules

This directory contains custom HubSpot modules for the Kick It California & IEHP landing page, designed for HubSpot's drag-and-drop page editor.

## 📦 What's Included

### Custom Modules
1. **Hero Video Section** (`hero-video-section.module/`)
   - Video background with adjustable opacity
   - Customizable headline with yellow highlight
   - Editable benefits list
   - CTA button with link
   - Fully responsive

2. **What Kick It Offers Section** (`offerings-section.module/`)
   - Grid of service cards
   - Horizontal scroll on mobile
   - Support for linked cards (like Quit Vids)
   - Icon + title + description format
   - Special styling option for featured cards

3. **FAQ Accordion Section** (`faq-section.module/`)
   - Collapsible question/answer format
   - Unlimited FAQ items
   - Optional CTA button at bottom
   - Clean, accessible design

### Additional Files
- **global-styles.css** - Shared CSS variables and utilities to add to your HubSpot theme

## 🚀 Installation Instructions

### Step 1: Upload Modules to HubSpot

1. **Access Design Manager**
   - Log into your HubSpot account
   - Navigate to: `Marketing` → `Files and Templates` → `Design Tools`

2. **Create Module Folders**
   - In the left sidebar, navigate to your custom modules folder
   - Usually under: `@hubspot/` or create a new folder like `kickit-iehp-modules/`

3. **Upload Each Module**
   - For each `.module` folder, create a new module in HubSpot:
     - Click the folder icon → `New file` → `Module`
     - Name it appropriately (e.g., "Hero Video Section")
     - Copy the contents from:
       - `module.html` → HubSpot's HTML + HubL section
       - `module.css` → HubSpot's CSS section
       - `fields.json` → Use the Field Editor in HubSpot to recreate these fields
       - `meta.json` → Set module settings accordingly

### Step 2: Add Global Styles

1. Go to `Settings` → `Website` → `Pages` → `Templates`
2. Edit your landing page template or create a new one
3. In the template's `<head>` section or attached stylesheet, add the CSS from `global-styles.css`

Alternatively:
- Add to your theme's global CSS file
- Or create a custom CSS file in Design Manager and link it

### Step 3: Create Your Landing Page

1. **Create New Page**
   - Go to `Marketing` → `Website` → `Landing Pages`
   - Click `Create` → `Landing page`
   - Choose a drag-and-drop template

2. **Add Modules to Page**
   - In the page editor sidebar, find your custom modules
   - Drag them onto the page in this order:
     1. Hero Video Section
     2. What Kick It Offers Section
     3. FAQ Accordion Section

3. **Configure Each Module**
   - Click on each module to open the sidebar editor
   - All fields are pre-populated with default content
   - Customize as needed:
     - Headlines and text
     - URLs and links
     - Benefits/offerings lists
     - FAQ questions and answers

### Step 4: Configure Header/Footer

Since the header isn't included as a module, you have two options:

**Option A: Use HubSpot's Global Header Module**
1. Add a header module above the Hero section
2. Upload logos to Files:
   - Kick It California: `https://www.kickitca-wp.ucsd.edu/wp-content/uploads/2021/06/Primary.png`
   - IEHP: `https://tbcdn.talentbrew.com/company/38317/v1_0/img/logo.png`
3. Link Kick It logo to: `https://kickitca.org`

**Option B: Create Custom Header Module**
- Similar process to the other modules
- Include logo upload fields and navigation if needed

### Step 5: Set Up Tracking

1. **Update Source Code Parameter**
   - All CTA buttons default to: `?srcCode=IEHP`
   - Edit module fields to ensure tracking is correct

2. **Add HubSpot Form (Optional)**
   - Replace external form link with HubSpot form
   - Create form in `Marketing` → `Lead Capture` → `Forms`
   - Use "Embed form" module instead of link buttons

## 📱 Mobile Optimization

All modules are fully responsive:
- Hero video scales appropriately
- Offerings cards scroll horizontally on mobile (touch-friendly)
- FAQ accordions collapse for easy navigation
- Buttons expand to full width on small screens

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `global-styles.css`:

```css
:root {
    --kic-blue: #005696;       /* Primary blue */
    --kic-teal: #00a7e1;       /* Accent teal */
    --iehp-yellow: #FFD700;    /* Highlight yellow */
    --iehp-navy: #1a2a3a;      /* Text dark */
}
```

### Adding/Removing Cards

In the "What Kick It Offers" module:
1. Click the module in the page editor
2. Find "Offerings/Services" field
3. Click `+ Add` to add new cards
4. Click trash icon to remove cards
5. Drag to reorder

### Changing Video

In the Hero module settings:
1. Upload your video to HubSpot File Manager
2. Copy the URL
3. Paste into "Video URL" field

## 📋 Module Field Reference

### Hero Video Section Fields
- **Video URL**: Background video source
- **Main Headline**: Large heading text
- **Highlighted Text**: Yellow background text
- **Tagline**: Bold subheading
- **Subheadline**: Additional context
- **Benefits List**: Repeater field (up to 10 items)
- **CTA Text**: Button label
- **CTA URL**: Button destination
- **Disclaimer Text**: Small text below button

### Offerings Section Fields
- **Heading Text**: Section title
- **Highlighted Text**: Yellow highlight
- **Subtitle**: Description below heading
- **Offerings/Services**: Repeater field with:
  - Icon (emoji)
  - Title
  - Description
  - Link option (for cards like Quit Vids)
  - Special styling toggle

### FAQ Section Fields
- **Heading Text**: Section title
- **Highlighted Text**: Yellow highlight
- **FAQ Items**: Repeater field with:
  - Question
  - Answer (rich text)
- **Show CTA**: Toggle button visibility
- **CTA Text**: Button label
- **CTA URL**: Button destination

## 🔗 Important Links

### External Resources Used
- Video: `https://131650.fs1.hubspotusercontent-na2.net/hubfs/131650/phone3.mp4`
- Kick It logo: `https://www.kickitca-wp.ucsd.edu/wp-content/uploads/2021/06/Primary.png`
- IEHP logo: `https://tbcdn.talentbrew.com/company/38317/v1_0/img/logo.png`
- Intake form: `https://kickitca.org/form/intake/self/1?srcCode=IEHP`
- Quit Vids: `https://kickitca.org/quit-vids`
- Main website: `https://kickitca.org`
- Privacy Policy: `https://kickitca.org/privacy-policy`

## ⚠️ Important Notes

1. **Video Hosting**: The background video is currently hosted on HubSpot CDN. Make sure it remains accessible or re-upload if needed.

2. **Form Integration**: The current CTAs link to an external form. Consider creating a HubSpot form for better lead tracking and integration.

3. **Mobile Testing**: Always preview on mobile devices - the horizontal scroll feature requires testing on actual phones.

4. **Accessibility**: The FAQ accordions use native `<details>` elements for better accessibility.

5. **Source Code Tracking**: All links include `?srcCode=IEHP` for tracking. Maintain this parameter.

## 🛠️ Troubleshooting

### Module Not Showing in Editor
- Make sure all required files are uploaded (module.html, module.css, fields.json)
- Check that module is marked as available for new content
- Refresh the page editor

### Styles Not Loading
- Ensure global-styles.css is properly linked
- Check for CSS conflicts with theme styles
- Use browser inspector to debug

### Video Not Playing
- Verify video URL is accessible
- Check browser console for errors
- Ensure video is in MP4 format
- Test on multiple devices

### Horizontal Scroll Not Working
- Verify you're testing on actual mobile device or emulator
- Check that overflow-x: auto is not being overridden
- Test touch/swipe gestures

## 📞 Support

For questions about:
- **Content updates**: Use HubSpot's module editor
- **Technical issues**: Check HubSpot's documentation or support
- **Design changes**: Modify CSS in module files

## 📄 License

This landing page is designed specifically for Kick It California and IEHP partnership.

---

**Last Updated**: December 2025  
**HubSpot Version**: Compatible with drag-and-drop editor  
**Mobile Optimized**: Yes  
**Browser Support**: All modern browsers
