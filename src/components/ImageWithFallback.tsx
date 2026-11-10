import React, { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'NEXTR Lumière Bistro culinary presentation',
  className = '',
  containerClassName = '',
  fallbackTitle,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#18191E] via-[#121316] to-[#0E0F12] border border-[#2B2720] p-4 text-center select-none ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-10 h-10 rounded-full bg-[#DFBA73]/10 border border-[#DFBA73]/30 flex items-center justify-center mb-2">
          <UtensilsCrossed className="w-5 h-5 text-[#DFBA73]" />
        </div>
        <span className="font-serif text-xs text-[#FAF7F2] font-medium line-clamp-1">
          {fallbackTitle || alt}
        </span>
        <span className="text-[10px] text-[#8C8375] font-serif italic mt-0.5">
          NEXTR Haute Gastronomie
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${containerClassName}`}>
      {/* Subtle skeleton shimmer before load */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#16171C] animate-pulse pointer-events-none" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        {...props}
      />
    </div>
  );
};
