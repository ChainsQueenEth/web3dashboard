import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NFTGrid } from '@/partials/web3';

vi.mock('next/image', () => ({
  default: (props: any) => {
    // Strip Next.js-specific props that aren't valid on img
    // Reason: avoid React warnings in jsdom test environment
    const { priority: _priority, loader: _loader, ...rest } = props ?? {};
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />;
  },
}));

describe('NFTGrid', () => {
  it('renders NFT cards with image and basic info', () => {
    const nfts = [
      {
        id: 1,
        name: 'Mystic Whiskers #0420',
        collection: 'Crypto Cats Collective',
        price: '1.89 ETH',
        change: '+18.3%',
        volume: '245 ETH',
        image: '/img/cat.png',
      },
    ] as const;

    render(<NFTGrid nfts={nfts} />);

    // Image alt text and name should render
    expect(screen.getByAltText(nfts[0].name)).toBeInTheDocument();
    expect(screen.getByText(nfts[0].name)).toBeInTheDocument();
    expect(screen.getByText(nfts[0].collection)).toBeInTheDocument();
    expect(screen.getAllByText(nfts[0].price)[0]).toBeInTheDocument();
  });

  it('renders skeletons when loading', () => {
    const { container } = render(<NFTGrid nfts={[]} loading />);
    // Three skeleton divs
    const skeletons = container.querySelectorAll('.animate-pulse');
    expect(skeletons.length).toBeGreaterThanOrEqual(1);
  });
});
