
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <div className="relative rounded-full p-1.5 bg-gradient-to-br from-secondary via-secondary to-primary/70 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-secondary/20">
        <Flame className="h-7 w-7 text-white group-hover:animate-pulse" />
      </div>
      <span className="inline-block font-bold text-xl tracking-tight">
        <span className="text-foreground">AD</span>
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vivum</span>
      </span>
    </Link>
  );
}
