import { useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface OptimizedImageProps {
    src: string;
    webpSrc?: string;
    alt: string;
    className?: string;
    placeholderLabel?: string;
    placeholderColor?: string;
    aspectRatio?: string;
    lazy?: boolean;
    width?: number;
    height?: number;
}

export function OptimizedImage({
    src,
    webpSrc,
    alt,
    className = 'w-full h-auto rounded-xl',
    placeholderLabel,
    placeholderColor,
    aspectRatio = '16/10',
    lazy = true,
    width,
    height,
}: OptimizedImageProps) {
    const [hasError, setHasError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    if (hasError || !src) {
        return (
            <ImagePlaceholder
                label={placeholderLabel || alt}
                color={placeholderColor}
                aspectRatio={aspectRatio}
            />
        );
    }

    const resolvedWebp = webpSrc ?? undefined;

    return (
        <picture>
            {resolvedWebp && <source srcSet={resolvedWebp} type="image/webp" />}
            <img
                src={src}
                alt={alt}
                loading={lazy ? 'lazy' : 'eager'}
                decoding="auto"
                width={width}
                height={height}
                className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
            />
        </picture>
    );
}
