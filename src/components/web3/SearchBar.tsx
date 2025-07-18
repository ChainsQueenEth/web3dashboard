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
      <div className={cn("relative max-w-2xl mt-6", className)}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-white/10 shadow-2xl shadow-blue-500/10 -z-10" />
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Search className="h-5 w-5 text-gray-300" />
          </div>
          <Input
            type="text"
            placeholder={placeholder}
            className="w-full pl-12 pr-12 py-6 bg-white/5 backdrop-blur-lg border border-white/10 text-white focus:ring-2 focus:ring-blue-400/30 focus:border-transparent transition-all duration-300 rounded-2xl"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={cn("relative max-w-2xl group mt-6", className)}
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
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-white/10 shadow-2xl shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-all duration-500 -z-10" />

      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <motion.div
            animate={searchIconAnimation.animate}
            transition={searchIconAnimation.transition}
            key="search-icon"
          >
            <Search className="h-5 w-5 text-gray-300 group-hover:text-blue-300 group-focus-within:text-blue-400 transition-all duration-300" />
          </motion.div>
        </div>
        <div className="relative">
          <Input
            type="text"
            placeholder={placeholder}
            className="w-full pl-12 pr-12 py-6 bg-white/5 backdrop-blur-lg border border-white/10 text-white focus:ring-2 focus:ring-blue-400/30 focus:border-transparent transition-all duration-300 rounded-2xl peer"
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
