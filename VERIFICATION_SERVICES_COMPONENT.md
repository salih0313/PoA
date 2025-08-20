# Verification Services Inner Dashboard Component

## Overview
This is a reusable inner dashboard section component that displays verification services in a card-based layout. The component is designed based on the Figma specifications and is ready to be integrated into a larger dashboard layout.

## Files
- `verification-services-component.html` - Standalone component demo
- `assets/css/verification-services.css` - Component styles
- `index.html` - Main implementation

## Component Structure

### Main Section
```html
<section class="verification-services-section" id="verification-services-component">
    <!-- Component content -->
</section>
```

### Features
- **RTL Support**: Fully supports Arabic text direction
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Includes proper ARIA attributes and keyboard navigation
- **Interactive Elements**: Clickable service cards with hover effects
- **Modular Design**: Easy to integrate into existing dashboard layouts

## Design Specifications

### Colors
- Primary Blue: `#0033A0`
- Text Dark: `#000000`
- Card Gradient: `rgba(232, 240, 249, 1)` to `rgba(255, 255, 255, 1)`
- Decoration Blue: `#4A65B2`
- Icon Gradient: `rgba(255, 255, 255, 1)` to `rgba(15, 55, 153, 1)`

### Typography
- Font Family: 'Noto Sans Arabic', 'DIN Next LT Arabic', Arial, sans-serif
- Section Title: 28px, Bold
- Section Description: 20px, Regular
- Card Title: 24px, Bold
- Card Description: 18px, Regular
- View Details Link: 20px, Bold

### Layout
- Max Width: 1308px
- Card Border Radius: 20px
- Icon Container Border Radius: 12.6px
- Grid Gap: 53px (desktop), responsive on smaller screens

## Integration Guide

### 1. Include Required Files
```html
<link rel="stylesheet" href="assets/css/main.min.css">
<link rel="stylesheet" href="assets/css/verification-services.css">
```

### 2. Add Component HTML
Copy the section with `id="verification-services-component"` from `verification-services-component.html`

### 3. Customize Service Data
Each service card has a `data-service` attribute for identification:
- `data-service="corporate"`
- `data-service="declarations"`
- `data-service="power-of-attorney"`

### 4. Add Event Handlers
```javascript
document.querySelectorAll('.view-details-link').forEach(link => {
    link.addEventListener('click', function() {
        const serviceType = this.closest('.service-card').getAttribute('data-service');
        // Handle navigation or modal opening
        console.log(`Navigating to ${serviceType} service details`);
    });
});
```

## Responsive Breakpoints

### Desktop (1200px+)
- 3-column grid layout
- Full spacing and padding
- All decorative elements visible

### Tablet (992px - 1199px)
- 3-column grid with reduced spacing
- Maintained card proportions

### Mobile (768px - 991px)
- Single column layout
- Reduced section spacing
- Smaller typography

### Small Mobile (< 768px)
- Compact single column
- Minimal padding
- Optimized for touch interaction

## Customization Options

### Service Cards
To modify service cards, update:
1. **Icons**: Replace SVG content in `.icon` containers
2. **Titles**: Update `.card-title` text content
3. **Descriptions**: Modify `.card-description` text
4. **Links**: Change `.view-details-link` behavior

### Styling
Key CSS variables in `:root`:
```css
--primary-color: #0033A0;
--text-dark: #000000;
--card-gradient-start: rgba(232, 240, 249, 1);
--card-gradient-end: rgba(255, 255, 255, 1);
--font-family: 'Noto Sans Arabic', 'DIN Next LT Arabic', Arial, sans-serif;
```

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- IE11+ (with polyfills for CSS custom properties)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## Accessibility Features
- Semantic HTML structure
- ARIA attributes for interactive elements
- Keyboard navigation support
- High contrast color ratios
- Screen reader friendly text

## Performance Considerations
- Optimized SVG icons
- CSS-only animations and transitions
- Minimal JavaScript footprint
- Responsive images and scalable graphics

## Future Enhancements
- Add loading states for service cards
- Implement skeleton screens
- Add animation on scroll
- Support for dynamic service data
- Integration with state management systems
