import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * UltraImage - High-performance image component with blur-up effect
 * Optimized for "Very Fast" perceived performance.
 */
const UltraImage = ({ src, alt, className, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Small placeholder version (low quality) for immediate display
  const placeholderSrc = `${src}&w=50&blur=10&q=10`;
  
  // High-res version (optimized width for standard screens)
  const highResSrc = `${src}&w=1400&q=85&auto=format`;

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = highResSrc;
      img.onload = () => setIsLoaded(true);
    }
  }, [highResSrc, priority]);

  return (
    <div className={`relative overflow-hidden bg-surface-1/10 ${className}`}>
      {/* Blurred Low-Res Placeholder */}
      <img
        src={placeholderSrc}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ filter: "blur(20px)", transform: "scale(1.1)" }}
      />

      {/* Ultra High-Res Final Image */}
      <img
        src={highResSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`h-full w-full object-cover transition-all duration-1000 ease-out ${
          isLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
        }`}
      />

      {/* Decorative "Nano" Glass Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-0/20 to-transparent" />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-2 text-xs text-text-2">
          Image unavailable
        </div>
      )}
    </div>
  );
};

export default UltraImage;
