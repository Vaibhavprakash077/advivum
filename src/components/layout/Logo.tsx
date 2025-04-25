import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <div className="relative rounded-full p-1.5 bg-gradient-to-br from-secondary via-secondary to-primary/70 shadow-md shadow-secondary/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/30">
        <img
          src="public/vivum-logo.png"
          alt="AD Vivum Logo"
          className="h-7 w-7 object-contain group-hover:animate-pulse"
        />
      </div>
      <span className="inline-block font-bold text-xl tracking-tight">
        <span className="text-foreground">AD</span>
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vivum</span>
      </span>
    </Link>
  );
}
