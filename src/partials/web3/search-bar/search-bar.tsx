import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Define the props interface
export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

// Client-side only SearchBar component
function SearchBarComponent({
  value,
  onChange,
  placeholder = "Search NFTs, tokens, collections...",
  className = "",
}: SearchBarProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Only run animations after component is mounted to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation config for the search icon
  const searchIconAnimation = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  };

  if (!isMounted) {
    // Render a simple input while hydrating to prevent layout shift
    return (
      <div className={cn("relative max-w-2xl mt-6 rounded-2xl overflow-hidden group", className)}>
        <div className="u-absolute-gradient-overlay u-hover-shadow-blue" />
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Search className="h-5 w-5 text-gray-300" />
          </div>
          <Input
            type="text"
            placeholder={placeholder}
            className="w-full pl-12 pr-12 py-6 text-white transition-all duration-300 rounded-2xl u-glass-2xl u-focus-ring-blue"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={cn("relative max-w-2xl group mt-6 rounded-2xl overflow-hidden", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      }}
      whileHover={{
        y: -2,
        rotateX: 2,
        rotateY: 2,
        scale: 1.01,
        boxShadow: "0 12px 30px rgba(59, 130, 246, 0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.3,
      }}
    >
      {/* Glassmorphism background with gradient border */}
      <div className="u-absolute-gradient-overlay u-hover-shadow-blue" />

      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <motion.div
            animate={searchIconAnimation.animate}
            transition={searchIconAnimation.transition}
            key="search-icon"
          >
            <Search className="h-5 w-5 text-gray-300 group-hover:text-blue-300 group-focus-within:text-blue-400 transition-all duration-300" />
          </motion.div>
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <Input
            type="text"
            placeholder={placeholder}
            className="w-full pl-12 pr-12 py-6 text-white transition-all duration-300 rounded-2xl peer u-glass-2xl u-focus-ring-blue"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />

          {value && (
            <motion.button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              onClick={() => onChange("")}
              whileHover={isMounted ? { scale: 1.1 } : {}}
              whileTap={isMounted ? { scale: 0.95 } : {}}
            >
              <X className="h-5 w-5" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Export a dynamically imported version with SSR disabled
export const SearchBar = dynamic(() => Promise.resolve(SearchBarComponent), {
  ssr: false,
});

export default SearchBar;
