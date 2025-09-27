import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "dark") {
      return <Moon className="h-[1.2rem] w-[1.2rem]" />;
    }
    return <Sun className="h-[1.2rem] w-[1.2rem]" />;
  };

  const getTooltipText = () => {
    if (theme === "light") return "Passer en mode sombre";
    if (theme === "dark") return "Passer en mode système";
    return "Passer en mode clair";
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title={getTooltipText()}
      className="relative overflow-hidden transition-all duration-300 hover:scale-105"
    >
      <div className="relative">
        {getIcon()}
      </div>
    </Button>
  );
}