# react-smart-image

A lightweight React component for responsive, lazy-loaded images with WebP and fallback support.

## Installation 
```bash
npm install @deadpoolx7/react-smart-image
```

## Usage
```tsx
import { SmartImage } from 'react-smart-image';

<SmartImage
  src="image.jpg"
  srcWebp="image.webp" 
  alt="A smart image"
/>
```
By deafult it loads image Lazily.