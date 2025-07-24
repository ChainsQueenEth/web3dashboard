import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence } from "framer-motion";

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  nftContent: React.ReactNode;
  tokenContent: React.ReactNode;
}

export function DashboardTabs({
  activeTab,
  onTabChange,
  nftContent,
  tokenContent,
}: DashboardTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <TabsContent value="nfts" className="mt-0">
            {nftContent}
          </TabsContent>

          <TabsContent value="tokens" className="mt-0">
            {tokenContent}
          </TabsContent>
        </motion.div>
      </AnimatePresence>
    </Tabs>
  );
}
