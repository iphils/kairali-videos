# Kairali Video Marketing Project

This is a Remotion-based video marketing project for Kairali coconut oil products, featuring programmatic video generation with mathematical shader effects and premium branding.

## 🛠️ **Manual Development Workflow**

### **1. Navigate to Project Directory**
```bash
cd /home/philips/Documents/kairali/kairali-videos
```

### **2. Start Development Server**
```bash
npm start
# OR
npx remotion studio src/index.ts
```
This opens **http://localhost:3000** in your browser for live preview.

### **3. Edit Video Code**
Open your preferred code editor:
```bash
# VS Code
code src/KairaliAd.tsx

# Or any editor
nano src/KairaliAd.tsx
gedit src/KairaliAd.tsx
```

**Key files to modify:**
- `src/KairaliAd.tsx` - Main video component
- `src/components/SVGElements.tsx` - Custom SVG graphics  
- `src/components/WaveShader.tsx` - Mathematical wave effects
- `src/components/FluidShader.tsx` - Oil fluid simulation

### **4. Live Preview Changes**
- Save file (`Ctrl+S`)
- Browser auto-refreshes with changes
- Use timeline scrubber to test different frames
- Adjust `frame` value to see specific moments

### **5. Common Modifications**

**🎨 Change Colors:**
```tsx
// In KairaliAd.tsx, find color values like:
color: '#2c3e1d'  // Change to your preferred color
backgroundColor: '#faf8f5'  // Modify background
```

**⏱️ Adjust Timing:**
```tsx
// Modify spring animations:
const logoAppear = spring({
    fps,
    frame: frame - 20,  // Change this number (higher = later appearance)
    config: {
        damping: 100,   // Higher = less bounce
        stiffness: 30,  // Higher = faster animation
    },
});
```

**📝 Edit Text:**
```tsx
// Find text content and modify:
<h1>Kairali</h1>  // Change brand name
<div>Luxury Coconut Collection</div>  // Change tagline
```

### **6. Test Render Individual Frames**
```bash
# Render just frame 150 to test
npx remotion render src/index.ts KairaliAd --frames=150-150
```

### **7. Create Version Backup Before Major Changes**
```bash
# Create backup with descriptive name
cp -r src versions/v1.3-my-custom-changes
```

### **8. Full Video Render**
```bash
# Render complete video
npx remotion render src/index.ts KairaliAd my-custom-video.mp4

# Specific quality/format
npx remotion render src/index.ts KairaliAd output.mp4 --quality=90
```

### **9. Quick Development Tips**

**🔧 Useful Shortcuts:**
- **Spacebar** - Play/pause preview
- **Left/Right arrows** - Frame-by-frame navigation
- **Home/End** - Jump to start/end
- **Ctrl+R** - Refresh preview

**🐛 Debug Issues:**
- Check browser console (F12) for errors
- Verify all imports are correct
- Ensure SVG viewBox dimensions match usage

### **10. File Organization**
```
src/
├── KairaliAd.tsx           # Main video component
├── Root.tsx                # Video composition setup  
├── index.ts               # Entry point
└── components/
    ├── SVGElements.tsx     # Custom graphics
    ├── WaveShader.tsx      # Wave effects
    └── FluidShader.tsx     # Fluid simulation
```

## 📦 **Project Structure**

### **Generated Videos**
- `kairali-ad-full.mp4` (v1.0) - Original basic version
- `kairali-v1.1-sustainable.mp4` (v1.1) - Eco-friendly messaging  
- `kairali-v1.2-luxury-shader.mp4` (v1.2) - Premium with mathematical shaders

### **Version History**
- `versions/v1.0-initial/` - Base Kairali marketing video
- `versions/v1.1-sustainable-focus/` - Enhanced eco-messaging
- `versions/v1.2-mathematical-shader/` - Luxury shader effects

## 🎯 **Current Features**

### **Mathematical Shader Effects**
- **FluidShader**: Oil-like flowing gradients with wave simulation
- **WaveShader**: Dynamic sine/cosine wave patterns
- **LuxuryBorder**: Elegant dual-border frame system

### **Premium SVG Elements**
- **ElegantLeaf**: Sophisticated leaf design with gradients
- **FloralPattern**: 5-petal flower with radial symmetry  
- **FeminineFlower**: 6-petal delicate flower in soft purples
- **OilDrop**: Premium oil droplet with highlight effects

### **Brand Positioning**
- Luxury coconut oil collection targeting women customers
- Premium typography (Playfair Display + Lato)
- Sophisticated color palette (creams, golds, earth tones)
- Mathematical animations for natural, organic feel

## 🚀 **Quick Start**

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start development**:
   ```bash
   npm start
   ```

3. **Make changes** to `src/KairaliAd.tsx`

4. **Render final video**:
   ```bash
   npx remotion render src/index.ts KairaliAd final-output.mp4
   ```

## 🎨 **Development Cycle**

1. **Edit** → Save code changes
2. **Preview** → Check in browser  
3. **Test** → Render test frames
4. **Backup** → Save working versions
5. **Render** → Create final video

The development server provides instant feedback, making it easy to iterate and refine your video content in real-time!

## 🔧 **Technical Specifications**

- **Format**: 1080x1080 (Square for social media)
- **Duration**: 10 seconds (300 frames at 30fps)
- **Framework**: Remotion + React + TypeScript
- **Effects**: Mathematical shaders, SVG animations, spring physics