# Image Optimization Guide

## Recommended Tools

### Online (Free, No Install)
1. **TinyPNG** - https://tinypng.com
   - Best for PNG/JPG compression
   - Drag & drop up to 20 images
   - Maintains quality while reducing size

2. **Squoosh** - https://squoosh.app
   - Google's image optimizer
   - Advanced settings available
   - Compare before/after

3. **Canva** - https://canva.com
   - For creating OG image (1200x630px)
   - Free templates available
   - Export as JPG for smaller size

### Desktop Tools (Optional)
- **ImageOptim** (Mac) - https://imageoptim.com
- **Caesium** (Windows) - https://saerasoft.com/caesium

## Optimization Settings

### Profile Photo
- **Size**: 600x600px
- **Format**: JPG
- **Quality**: 85%
- **Target**: < 100KB

### Project Screenshots
- **Size**: 1920x1080px (or 1280x720px for smaller)
- **Format**: JPG
- **Quality**: 80-85%
- **Target**: < 200KB each

### OG Image (Social Share)
- **Size**: EXACTLY 1200x630px
- **Format**: JPG
- **Quality**: 85%
- **Target**: < 150KB

## Quick Optimization Process

1. **Resize** images to target dimensions
2. **Export as JPG** (better compression than PNG for photos)
3. **Upload to TinyPNG** for additional compression
4. **Download optimized** versions
5. **Rename** according to `CONTENT-CHECKLIST.md`
6. **Upload** to `public/images/` folder

## Canva Template for OG Image

Create 1200x630px design with:
- Your profile photo (circular crop)
- Name: "Aditya Satria Pratama"
- Title: "Digital Content Specialist"
- Tagline: "Where Creativity Meets Critical Thinking"
- Stats: "21.7M+ Views | 80+ Brands"
- Background: Dark theme matching website (#0A0E27)
- Accent colors: #4A90E2 and #7B68EE

## Verification

After optimization, check:
```bash
# Check file sizes
ls -lh public/images/
```

All images should be:
- ✅ Under 200KB each
- ✅ Correct dimensions
- ✅ Named correctly
- ✅ Still look good quality