import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface NFT {
  id: number;
  name: string;
  collection: string;
  price: string;
  change: string;
  volume: string;
  image: string;
}

interface NFTGridProps {
  nfts: readonly NFT[];
  loading?: boolean;
}

export function NFTGrid({ nfts, loading = false }: NFTGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-[400px] bg-gray-800/50 rounded-xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {nfts.map((nft) => (
        <motion.div
          key={nft.id}
          className="relative group perspective-1000"
          style={{ perspective: "1000px" }}
          initial={{ opacity: 0, y: 20, rotateX: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          whileHover={{
            y: -10,
            rotateX: 5,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 15,
            },
          }}
        >
          <Card
            className="overflow-hidden border-gray-700/50 bg-gray-800/80 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/50 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/20 h-full flex flex-col"
            style={{
              transformStyle: "preserve-3d",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="relative pt-[100%] overflow-hidden group">
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                whileHover={{
                  transform: "translateZ(20px)",
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={nft.image}
                  alt={nft.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  style={{ transform: "translateZ(0)" }}
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <Button
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  View Details <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardHeader className="px-6 py-4 relative z-10">
              <motion.div
                className="flex justify-between items-start"
                initial={{ y: 0 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <div>
                  <h3 className="font-semibold text-white">{nft.name}</h3>
                  <p className="text-sm text-gray-400">{nft.collection}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-white">{nft.price}</p>
                  <p
                    className={`text-sm ${
                      nft.change.startsWith("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {nft.change}
                  </p>
                </div>
              </motion.div>
            </CardHeader>
            <CardContent className="px-6 pb-4 mt-auto">
              <div className="flex justify-between text-sm">
                <div className="text-gray-400">Price</div>
                <div className="font-medium">{nft.price}</div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <div className="text-gray-400">Volume</div>
                <div>{nft.volume}</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default NFTGrid;
