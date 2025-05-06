# react-smart-image

A lightweight React component for responsive, lazy-loaded images with WebP and fallback support.

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