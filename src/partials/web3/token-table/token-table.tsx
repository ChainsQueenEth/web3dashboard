import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface Token {
  id: number;
  name: string;
  symbol: string;
  price: string;
  change: string;
  marketCap: string;
  volume: string;
}

interface TokenTableProps {
  tokens: readonly Token[];
}

export function TokenTable({ tokens }: TokenTableProps) {
  return (
    <Card className="u-card-soft">
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <CardHeader className="p-0 overflow-x-auto">
            <motion.div
              className="py-3 bg-gradient-to-r from-gray-800/80 to-gray-800/40 border-b border-gray-700/50 min-w-[600px]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="grid grid-cols-12 items-center text-sm font-medium px-4"
                style={{
                  gridTemplateColumns:
                    "minmax(200px, 1.5fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(120px, 1fr) minmax(100px, 1fr)",
                  gap: "0.5rem",
                }}
              >
                {[
                  "Asset",
                  "Price",
                  "24h Change",
                  "Market Cap",
                  "Volume (24h)",
                ].map((title, index) => (
                  <div
                    key={title}
                    className={`flex items-center ${
                      index === 0
                        ? "justify-start pl-14 sm:pl-14"
                        : "justify-end pr-4 sm:pr-6"
                    } group relative`}
                  >
                    <motion.span
                      className="u-gradient-text-primary text-sm sm:text-base font-medium whitespace-nowrap cursor-pointer"
                      whileHover={{
                        x: 3,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                          duration: 0.2,
                        },
                      }}
                    >
                      {title}
                    </motion.span>
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 z-10"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-full">
              <div className="text-sm">
                {tokens.map((token, index) => (
                  <React.Fragment key={token.id}>
                    <motion.div
                      className="group relative"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.03,
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{
                        scale: 1.01,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div
                        className="relative
                        bg-gradient-to-r from-gray-800/50 to-gray-800/20
                        hover:from-gray-700/40 hover:to-gray-700/10
                        transition-all duration-300
                        border-l-4 border-transparent group-hover:border-blue-500/70
                        group-hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)]
                        group-hover:shadow-blue-500/20
                        rounded-r-lg overflow-hidden
                        my-1.5
                      "
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div
                          className="grid grid-cols-12 items-center px-4 py-3"
                          style={{
                            gridTemplateColumns:
                              "minmax(180px, 1.5fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(120px, 1fr) minmax(100px, 1fr)",
                          }}
                        >
                          <div className="flex items-center">
                            <div className="relative z-10 flex-shrink-0">
                              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 u-blur-sm flex items-center justify-center">
                                <span className="text-lg font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                                  {token.symbol[0]}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <h4 className="text-sm font-medium text-white truncate">
                                {token.name}
                              </h4>
                              <div className="text-xs text-gray-400">
                                {token.symbol}
                              </div>
                            </div>
                          </div>
                          <div className="text-end pr-6">
                            <div className="font-medium text-white tabular-nums">
                              {token.price}
                            </div>
                          </div>
                          <div className="text-end pr-6">
                            <div
                              className={`font-medium tabular-nums ${
                                token.change.startsWith("+")
                                  ? "text-green-400"
                                  : "text-red-400"
                              }`}
                            >
                              {token.change}
                            </div>
                          </div>
                          <div className="text-end pr-6">
                            <div className="text-sm text-gray-200 tabular-nums">
                              {token.marketCap}
                            </div>
                          </div>
                          <div className="text-end pr-6">
                            <div className="text-sm text-gray-200 tabular-nums">
                              {token.volume}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    {index < tokens.length - 1 && (
                      <div className="h-px relative">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
