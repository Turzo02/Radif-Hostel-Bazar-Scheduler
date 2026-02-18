import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeProvider.jsx'
import Lenis from '@studio-freight/lenis'

// Initialize Lenis smooth scrolling
const lenis = new Lenis({
  duration: 2.25,           // Longer duration for smoother feel
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing curve
  direction: 'vertical',    // Vertical scrolling
  gestureDirection: 'vertical',
  smooth: true,            // Enable smooth scrolling
  mouseMultiplier: 0.8,    // Reduced mouse sensitivity for smoother feel
  smoothTouch: true,       // Enable touch smooth for mobile
  touchMultiplier: 1.5,    // Optimized touch sensitivity
  infinite: false,         // No infinite scrolling
  wheelMultiplier: 1.2,    // Reduced wheel sensitivity for smoother scrolling
  normalizeWheel: true,    // Normalize wheel events across browsers
  smoothWheel: true,       // Enable smooth wheel scrolling
})

// Connect Lenis to requestAnimationFrame with enhanced performance
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

// Start the animation loop with performance optimization
requestAnimationFrame(raf)

// Add resize listener for responsive smooth scrolling
window.addEventListener('resize', () => {
  lenis.resize()
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
