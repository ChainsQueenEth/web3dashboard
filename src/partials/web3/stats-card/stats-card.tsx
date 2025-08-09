import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

export interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
  progress: number;
  color: string;
  shadow: string;
  description: string;
  index?: number;
  className?: string;
}

export function StatsCard({
  title,
  value,
  change,
  icon,
  progress,
  color,
  shadow,
  description,
  index = 0,
  className = "",
}: StatsCardProps) {
 

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angleX = (y - centerY) / 30;
    const angleY = (centerX - x) / 30;

    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    card.style.boxShadow = shadow;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    card.style.boxShadow =
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = "all 0.3s ease-out";
    card.style.boxShadow = shadow;
  };

  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 20, rotateX: 5 }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
          delay: 0.2 + index * 0.1,
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      whileHover={{
        y: -8,
        rotateX: 3,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 15,
        },
      }}
    >
      <motion.div
        className="h-full"
        initial={false}
        whileHover={{
          y: -5,
          rotateX: 5,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 15,
          },
        }}
      >
        <Card
          className={`bg-gradient-to-br ${color} u-blur-border overflow-hidden h-full transition-all duration-300 hover:shadow-lg ${className}`}
          style={{
            transformStyle: "preserve-3d",
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <CardHeader className="pb-2 relative z-10 group-hover:translate-z-10 transition-transform duration-300">
            <motion.div
              className="flex items-center justify-between"
              initial={{ y: 0 }}
              whileHover={{
                y: -3,
                transition: { duration: 0.3 },
              }}
            >
              <div>
                <p className="text-sm font-medium text-gray-400">{title}</p>
                <motion.p
                  className="text-2xl font-bold mt-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {value}
                </motion.p>
                <motion.p
                  className={`text-sm mt-1 ${
                    change.startsWith("+") ? "text-green-400" : "text-red-400"
                  }`}
                  whileHover={{ x: 3 }}
                >
                  {change}
                </motion.p>
              </div>
              <motion.div
                className="p-2 rounded-lg u-surface-muted"
                whileHover={{
                  rotate: 5,
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 500 },
                }}
              >
                {icon}
              </motion.div>
            </motion.div>
          </CardHeader>
          <CardContent className="pb-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <motion.div
                    className="h-2 u-surface-muted rounded-full overflow-hidden"
                    initial={{ scaleX: 0.9, opacity: 0.8 }}
                    whileInView={{
                      scaleX: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.3 + index * 0.1,
                        duration: 0.5,
                      },
                    }}
                  >
                    <motion.div
                      className={`h-full ${
                        change.startsWith("+")
                          ? "bg-gradient-to-r from-green-400 to-green-600"
                          : "bg-gradient-to-r from-red-400 to-red-600"
                      }`}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${progress}%`,
                        transition: {
                          delay: 0.5 + index * 0.1,
                          duration: 1,
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        },
                      }}
                    />
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 u-blur-border text-gray-200 text-sm p-2 rounded-lg shadow-lg">
                  <div className="flex flex-col space-y-1">
                    <span className="font-medium text-white">{title}</span>
                    <span className="text-gray-400 text-xs">{description}</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-400">Progress</span>
                      <span
                        className={`text-xs font-medium ${
                          change.startsWith("+")
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {progress}% of target
                      </span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default StatsCard;
