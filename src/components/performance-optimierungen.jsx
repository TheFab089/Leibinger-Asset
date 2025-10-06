import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p className="text-red-500">Etwas ist schiefgelaufen.</p>;
    }
    return this.props.children;
  }
}

// Optimized Video Component
const OptimizedVideo = ({ src, poster, className }) => {
  const videoRef = useRef(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('canplaythrough', () => setCanPlay(true));
      videoRef.current.load();
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className={className}
      preload="metadata" // Lade nur Metadaten, nicht das ganze Video
      style={{ visibility: canPlay ? 'visible' : 'hidden' }}
    >
      <source src={src} type="video/mp4" />
      Ihr Browser unterstützt das Video-Tag nicht.
    </video>
  );
};

// Lazy Loaded Components
const LazyValuationTool = lazy(() => import('./ProfessionalValuationTool.jsx'));
const LazyContactForm = lazy(() => import('./ContactForm.jsx'));

export { OptimizedVideo, LazyValuationTool, LazyContactForm, ErrorBoundary };
