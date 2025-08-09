"use client";

import React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, BarChart, Clock, Zap } from "lucide-react";
import { NFTGrid, StatsCard, TokenTable, AnimatedButterfly, DashboardHeader } from "@/partials/web3";
import { getTrendingNfts } from "@/core/services";


function Web3Dashboard() {
  const [activeTab, setActiveTab] = useState("nfts");
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefreshing] = useState(false);
  const trendingNFTs = getTrendingNfts();

  const trendingTokens = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$118,691",
      change: "+0.4%",
      marketCap: "$2,361,063,466,256",
      volume: "$47,603,603,052",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,405.55",
      change: "+3.5%",
      marketCap: "$411,045,094,390",
      volume: "$60,811,158,099",
    },
    {
      id: 3,
      name: "XRP",
      symbol: "XRP",
      price: "$3.28",
      change: "+8.5%",
      marketCap: "$193,667,685,622",
      volume: "$12,888,268,031",
    },
    {
      id: 4,
      name: "Tether",
      symbol: "USDT",
      price: "$1.00",
      change: "+0.0%",
      marketCap: "$160,316,432,778",
      volume: "$152,474,047,897",
    },
    {
      id: 5,
      name: "BNB",
      symbol: "BNB",
      price: "$715.76",
      change: "+1.9%",
      marketCap: "$104,401,554,836",
      volume: "$2,777,395,034",
    },
    {
      id: 6,
      name: "Solana",
      symbol: "SOL",
      price: "$172.84",
      change: "+0.1%",
      marketCap: "$92,925,244,196",
      volume: "$17,356,169,417",
    },
    {
      id: 7,
      name: "USDC",
      symbol: "USDC",
      price: "$0.9999",
      change: "+0.0%",
      marketCap: "$63,487,810,948",
      volume: "$20,475,329,486",
    },
    {
      id: 8,
      name: "Dogecoin",
      symbol: "DOGE",
      price: "$0.2112",
      change: "+2.1%",
      marketCap: "$31,704,019,126",
      volume: "$11,243,899,230",
    },
    {
      id: 9,
      name: "Lido Staked Ether",
      symbol: "STETH",
      price: "$3,398.41",
      change: "+2.7%",
      marketCap: "$30,919,243,800",
      volume: "$152,078,575",
    },
    {
      id: 10,
      name: "TRON",
      symbol: "TRX",
      price: "$0.3171",
      change: "+3.8%",
      marketCap: "$30,033,374,206",
      volume: "$3,880,418,918",
    },
    {
      id: 11,
      name: "Cardano",
      symbol: "ADA",
      price: "$0.7906",
      change: "+4.5%",
      marketCap: "$28,574,490,585",
      volume: "$2,110,550,083",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Animated Butterfly Decoration */}
      <div className="fixed left-1/2 -translate-x-1/2 top-24 z-20 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-16 md:left-3/4 md:-translate-x-1/2">
        <AnimatedButterfly size="md" hoverScale={1.1} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 pt-20 sm:pt-8">
        <div className="w-full">
          <motion.div
            key="dashboard-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DashboardHeader
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <StatsCard
                title="Total Volume"
                value="$2.1B"
                change="+12.8%"
                icon={<BarChart className="h-6 w-6" />}
                progress={88}
                color="from-blue-500/20 to-blue-500/5"
                shadow="4px 0 8px -2px rgba(37, 99, 235, 0.15), -4px 0 8px -2px rgba(37, 99, 235, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1)"
                description="24h trading volume across major DEXs"
                index={0}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <StatsCard
                title="Active Users"
                value="3.8M"
                change="+18.5%"
                icon={<Flame className="h-6 w-6" />}
                progress={76}
                color="from-green-500/20 to-green-500/5"
                shadow="4px 0 8px -2px rgba(16, 185, 129, 0.15), -4px 0 8px -2px rgba(16, 185, 129, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1)"
                description="Active users in the last 24 hours"
                index={1}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <StatsCard
                title="Total Trades"
                value="1.2M"
                change="+5.3%"
                icon={<Zap className="h-6 w-6" />}
                progress={65}
                color="from-purple-500/20 to-purple-500/5"
                shadow="4px 0 8px -2px rgba(168, 85, 247, 0.15), -4px 0 8px -2px rgba(168, 85, 247, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1)"
                description="Trades executed in the last 24 hours"
                index={2}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <StatsCard
                title="Avg. Block Time"
                value="12.1s"
                change="-0.8%"
                icon={<Clock className="h-6 w-6" />}
                progress={81}
                color="from-amber-500/20 to-amber-500/5"
                shadow="4px 0 8px -2px rgba(245, 158, 11, 0.15), -4px 0 8px -2px rgba(245, 158, 11, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1)"
                description="Average block confirmation time"
                index={3}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          <Tabs
            defaultValue="nfts"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
              <TabsTrigger
                value="nfts"
                className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/10 data-[state=active]:to-purple-500/10 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-t-lg px-6 py-3 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Trending NFTs</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <motion.div
                  className="absolute inset-0 shadow-lg shadow-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                />
              </TabsTrigger>
              <TabsTrigger
                value="tokens"
                className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/10 data-[state=active]:to-purple-500/10 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-t-lg px-6 py-3 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Top Tokens</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <motion.div
                  className="absolute inset-0 shadow-lg shadow-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                />
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <TabsContent value="nfts" className="mt-0">
                  <NFTGrid nfts={trendingNFTs} loading={isRefreshing} />
                </TabsContent>

                <TabsContent value="tokens" className="mt-0">
                  <TokenTable tokens={trendingTokens} />
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

export default Web3Dashboard;
