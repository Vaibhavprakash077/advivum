
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function TechWorkflowGraphic() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set isLoaded to true after component mounts
    setIsLoaded(true);
    
    // Ensure it stays loaded - this prevents any accidental state reset
    return () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Main Lightning Bolt - Always visible now with conditional classes */}
      <div className={cn(
        "relative w-40 h-72 transform transition-all duration-700",
        isLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0"
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5F1F] via-[#FF8748] to-[#FFA978] rounded-md rotate-12 shadow-xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDIzVjFNMSAxMmgyMiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] opacity-40"></div>
        </div>
        <div className="lightning-glow absolute inset-0 blur-xl bg-[#FF8748]/40 rounded-full transform scale-110"></div>
      </div>

      {/* Workflow Nodes - Always visible now with conditional classes */}
      <div className="absolute inset-0">
        {/* Node 1 */}
        <div className={cn(
          "absolute top-1/4 left-1/4 transition-all duration-700 delay-100",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-lg bg-[#1E293B]/80 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg mb-2">
              <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path d="M20 11.5H4M20 11.5C20.8284 11.5 21.5 12.1716 21.5 13V18.5C21.5 19.3284 20.8284 20 20 20H4C3.17157 20 2.5 19.3284 2.5 18.5V13C2.5 12.1716 3.17157 11.5 4 11.5M20 11.5V5.5C20 4.67157 19.3284 4 18.5 4H5.5C4.67157 4 4 4.67157 4 5.5V11.5M12 15.5V17M12 7.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="text-xs text-white/70">Research</div>
          </div>
        </div>

        {/* Node 2 */}
        <div className={cn(
          "absolute top-1/2 left-1/5 transition-all duration-700 delay-200",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-lg bg-[#1E293B]/80 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg mb-2">
              <div className="w-8 h-8 rounded-md bg-secondary/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary">
                  <path d="M12 5.5V10.5M12 10.5L14.5 8M12 10.5L9.5 8M5.5 12H10.5M10.5 12L8 14.5M10.5 12L8 9.5M18.5 12H13.5M13.5 12L16 9.5M13.5 12L16 14.5M12 18.5V13.5M12 13.5L9.5 16M12 13.5L14.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="text-xs text-white/70">Analysis</div>
          </div>
        </div>

        {/* Node 3 */}
        <div className={cn(
          "absolute top-2/3 right-1/4 transition-all duration-700 delay-300",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-lg bg-[#1E293B]/80 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg mb-2">
              <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path d="M16 18L18 20M18 20L20 18M18 20L16 22M18 20L20 22M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.2958 20 14.5167 19.7088 15.6068 19.1919M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="text-xs text-white/70">Publication</div>
          </div>
        </div>

        {/* Connection Lines - Fixed the mask animation to ensure it's visible */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 196, 180, 0.5)" />
              <stop offset="100%" stopColor="rgba(242, 140, 56, 0.5)" />
            </linearGradient>
            <mask id="fadeLineMask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              {/* Modified to ensure it remains visible */}
              <rect 
                className={cn(
                  "transition-all duration-[1.5s] ease-in-out",
                  isLoaded ? "x-0 w-0" : "x-full w-full"
                )} 
                y="0" 
                height="100%" 
                fill="black" 
              />
            </mask>
          </defs>
          <path 
            d="M120,100 C140,130 160,150 250,180" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="opacity-80"
            mask="url(#fadeLineMask)"
            strokeDasharray="5,5"
          />
          <path 
            d="M250,180 C300,200 320,220 350,240" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="opacity-80"
            mask="url(#fadeLineMask)"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* Animated Particles - Made always visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary animate-float"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              opacity: 0.4 + Math.random() * 0.4,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
