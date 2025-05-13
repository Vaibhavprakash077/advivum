
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  alphaDirection: number;
}

interface ParticlesBackgroundProps {
  className?: string;
  particleColor?: string;
  particleCount?: number;
  particleSpeed?: number;
}

export function ParticlesBackground({
  className,
  particleColor = "rgba(0, 196, 180, 0.5)",
  particleCount = 40,
  particleSpeed = 0.5,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const isMouseMovingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Handle mouse movement with enhanced interactivity
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      isMouseMovingRef.current = true;
      
      // Reset the flag after some time
      setTimeout(() => {
        isMouseMovingRef.current = false;
      }, 150); // Extended duration for smoother effect
    };

    // Initialize particles with more variation
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1, // Larger size variation
          speedX: (Math.random() - 0.5) * particleSpeed * (Math.random() + 0.5), // More speed variation
          speedY: (Math.random() - 0.5) * particleSpeed * (Math.random() + 0.5),
          color: particleColor,
          alpha: Math.random() * 0.6 + 0.2, // Enhanced transparency variation
          alphaDirection: Math.random() > 0.5 ? 1 : -1
        });
      }
    };

    // Draw particles with enhanced effects
    const drawParticles = (timestamp: number) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        // Pulse alpha with improved animation
        particle.alpha += 0.003 * particle.alphaDirection * (Math.sin(timestamp / 2000) * 0.5 + 0.5);
        if (particle.alpha > 0.9) {
          particle.alphaDirection = -1;
        } else if (particle.alpha < 0.2) {
          particle.alphaDirection = 1;
        }
        
        const particleColor = particle.color.replace(/[\d\.]+\)$/g, `${particle.alpha})`);
        
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position with smoother movement
        particle.x += particle.speedX * deltaTime * 0.1;
        particle.y += particle.speedY * deltaTime * 0.1;
        
        // Enhanced mouse interaction with more reactive movement
        if (isMouseMovingRef.current) {
          const dx = mousePositionRef.current.x - particle.x;
          const dy = mousePositionRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) { // Increased interaction range
            const angle = Math.atan2(dy, dx);
            const force = (150 - distance) / 150;
            
            particle.speedX -= Math.cos(angle) * force * 0.05; // Increased repulsion force
            particle.speedY -= Math.sin(angle) * force * 0.05;
          }
        }
        
        // Bounce off edges with enhanced randomization
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
          particle.speedX *= 0.9 + Math.random() * 0.3; // More variation on bounce
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
          particle.speedY *= 0.9 + Math.random() * 0.3;
        }
        
        // Connect nearby particles with improved line effect
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) { // Extended connection range
            ctx.beginPath();
            // Gradient line effect based on distance
            const alpha = 0.15 * (1 - distance / 200); // Higher base opacity
            ctx.strokeStyle = particle.color.replace(/[\d\.]+\)$/g, `${alpha})`);
            ctx.lineWidth = 0.8; // Thicker lines
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    resizeCanvas();
    initParticles();
    animationFrameId = requestAnimationFrame(drawParticles);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleColor, particleCount, particleSpeed]);
  
  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 w-full h-full z-0",
        className
      )}
    />
  );
}
