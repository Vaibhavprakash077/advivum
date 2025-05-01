
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <img
        src="/lovable-uploads/e1dc064f-54dd-47d7-a5b3-e7b48fabccb6.png"
        alt="AD Vivum Logo"
        className="h-7 w-7 object-contain group-hover:animate-pulse"
        style={{ 
          filter: "drop-shadow(0 0 2px rgba(0,0,0,0.1))",
          background: "transparent"
        }}
      />
      <span className="inline-block font-bold text-xl tracking-tight">
        <span className="text-foreground">AD</span>
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vivum</span>
      </span>
    </Link>
  );
}
