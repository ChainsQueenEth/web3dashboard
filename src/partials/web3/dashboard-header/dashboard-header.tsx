import { motion } from "framer-motion";
import { SearchBar } from "@/partials/web3";


interface DashboardHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function DashboardHeader({
  searchQuery,
  onSearchChange,
}: DashboardHeaderProps) {
  return (
    <header className="mb-8 relative">
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2 },
        }}
      >
        <div className="relative group">
          <motion.div className="u-outline-gradient" aria-hidden="true" />
          <motion.h1
            className="text-3xl font-bold inline-block relative u-gradient-text-primary"
            initial={{ y: -50, opacity: 0, scale: 0.5 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
                mass: 0.5,
              },
            }}
            whileHover={{
              scale: 1.02,
              rotateZ: [0, -1, 1, -1, 0],
              transition: {
                scale: { duration: 0.2 },
                rotateZ: {
                  duration: 0.8,
                  repeat: 1,
                  repeatType: "mirror",
                },
              },
            }}
          >
            Web3 Dashboard
          </motion.h1>
          <motion.p
            className="text-gray-400 mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.1,
                duration: 0.5,
              },
            }}
            whileHover={{
              x: [0, 2, -2, 2, 0],
              transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            Track the latest trends in the Web3 space
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          },
        }}
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.2 },
        }}
        className="relative"
      >
        <div className="u-outline-gradient" />
        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Search tokens, NFTs, and more..."
          className="w-full max-w-2xl"
        />
      </motion.div>
    </header>
  );
}
