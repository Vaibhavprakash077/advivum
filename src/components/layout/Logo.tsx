
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Flame className="h-6 w-6 text-secondary" />
      <span className="inline-block font-bold text-xl">
        <span className="text-foreground">AD</span>
        <span className="text-primary">Vivum</span>
      </span>
    </Link>
  );
}
