
import { useState, useEffect } from 'react';

interface StaggeredFadeConfig {
  baseDelay?: number;
  delayIncrement?: number;
  totalItems: number;
}

export function useStaggeredFade({
  baseDelay = 0,
  delayIncrement = 0.1, // Reduced delay increment for faster animation completion
  totalItems,
}: StaggeredFadeConfig) {
  const [delays, setDelays] = useState<number[]>([]);

  useEffect(() => {
    // Generate delays but cap the maximum delay to avoid too long animations
    const maxDelay = 0.8; // Cap maximum delay to avoid content disappearing
    const newDelays = Array.from({ length: totalItems }, (_, index) => {
      const calculatedDelay = baseDelay + (index * delayIncrement);
      return Math.min(calculatedDelay, maxDelay);
    });
    
    setDelays(newDelays);
  }, [baseDelay, delayIncrement, totalItems]);

  return delays;
}
