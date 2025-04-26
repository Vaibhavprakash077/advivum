
import { useState, useEffect } from 'react';

interface StaggeredFadeConfig {
  baseDelay?: number;
  delayIncrement?: number;
  totalItems: number;
}

export function useStaggeredFade({
  baseDelay = 0,
  delayIncrement = 0.2,
  totalItems,
}: StaggeredFadeConfig) {
  const [delays, setDelays] = useState<number[]>([]);

  useEffect(() => {
    const newDelays = Array.from({ length: totalItems }, (_, index) => 
      baseDelay + (index * delayIncrement)
    );
    setDelays(newDelays);
  }, [baseDelay, delayIncrement, totalItems]);

  return delays;
}
