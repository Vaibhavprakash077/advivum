
import { useState, useEffect } from 'react';

interface StaggeredFadeConfig {
  baseDelay?: number;
  delayIncrement?: number;
  totalItems: number;
}

export function useStaggeredFade({
  baseDelay = 0,
  delayIncrement = 0.1,
  totalItems,
}: StaggeredFadeConfig) {
  const [delays, setDelays] = useState<number[]>([]);

  useEffect(() => {
    // Generate delays with improved animation timing
    const maxDelay = 1.2; // Slightly increased max delay for more pronounced effect
    const newDelays = Array.from({ length: totalItems }, (_, index) => {
      // Using a non-linear easing for more natural animation timing
      const easedIndex = Math.pow(index / totalItems, 0.8) * totalItems;
      const calculatedDelay = baseDelay + (easedIndex * delayIncrement);
      return Math.min(calculatedDelay, maxDelay);
    });
    
    setDelays(newDelays);
  }, [baseDelay, delayIncrement, totalItems]);

  return delays;
}
