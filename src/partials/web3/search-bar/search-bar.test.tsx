import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from '@/partials/web3';
import { useState } from 'react';

// Mock next/image for jsdom environment if any image usage leaks in
vi.mock('next/image', () => ({
  default: (props: any) => {
    // Strip Next.js-specific props that aren't valid on img
    const { priority: _priority, loader: _loader, ...rest } = props ?? {};
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />;
  },
}));

// Mock next/dynamic to return the wrapped component immediately
vi.mock('next/dynamic', () => ({
  default: (loader: any) => {
    // If loader is a function returning a promise, resolve to component
    if (typeof loader === 'function') {
      const mod = loader();
      if (mod && typeof (mod as any).then === 'function') {
        // Return a sync shim that renders after promise resolves
        // In tests, we can just return a function that renders nothing until resolved
        let Comp: any = null;
        (mod as Promise<any>).then((res) => {
          Comp = res.default ?? res;
        });
        return (props: any) => (Comp ? <Comp {...props} /> : null);
      }
      const Comp = (mod as any).default ?? mod;
      return Comp;
    }
    return loader;
  },
}));

describe('SearchBar', () => {
  it('renders placeholder and allows typing and clearing (controlled)', async () => {
    const placeholder = 'Find items...';

    function Wrapper() {
      const [value, setValue] = useState('');
      return (
        <SearchBar value={value} onChange={setValue} placeholder={placeholder} />
      );
    }

    render(<Wrapper />);

    const input = await screen.findByPlaceholderText(placeholder);
    const user = userEvent.setup();
    await user.type(input, 'cat');

    // Expect the input to reflect the controlled value 'cat'
    expect((input as HTMLInputElement).value).toBe('cat');

    // Click clear button
    const clearBtn = await screen.findByRole('button');
    await user.click(clearBtn);

    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe('');
    });
  });
});
