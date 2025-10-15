import { Rss } from "lucide-react";
import ThemeToggle from "../ThemeToggleClient";

export default function Header() {
  return (
    <header className="container mx-auto px-4 flex items-center justify-between">
      <span className="logo">
        <Rss />
        <div>Hacker News</div>
      </span>

      <div className="ml-auto text-sm">
        <ThemeToggle />
      </div>
    </header>
  );
}
