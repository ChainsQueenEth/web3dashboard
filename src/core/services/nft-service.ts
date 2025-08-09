import type { NFT } from "@/core/types/nft";

// Reason: centralize data access; currently returns static demo data.
export function getTrendingNfts(): ReadonlyArray<NFT> {
  return [
    {
      id: 1,
      name: "Mystic Whiskers #0420",
      collection: "Crypto Cats Collective",
      price: "1.89 ETH",
      change: "+18.3%",
      volume: "245 ETH",
      image: "/img/cat.png",
    },
    {
      id: 2,
      name: "Arctic Fox #1337",
      collection: "Wildlife Digital",
      price: "2.45 ETH",
      change: "+5.7%",
      volume: "312 ETH",
      image: "/img/fox.png",
    },
    {
      id: 3,
      name: "Nut Collector #8008",
      collection: "Forest Friends",
      price: "0.78 ETH",
      change: "+32.6%",
      volume: "198 ETH",
      image: "/img/squirrel.png",
    },
  ] as const;
}
