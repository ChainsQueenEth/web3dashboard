import { describe, it, expect, beforeAll } from 'vitest';
import { asset } from './assets';

describe('asset()', () => {
  const OLD_ENV = process.env;

  beforeAll(() => {
    process.env = { ...OLD_ENV };
  });

  it('returns path unchanged when NEXT_PUBLIC_BASE_PATH is empty', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '';
    expect(asset('/img/cat.png')).toBe('/img/cat.png');
    expect(asset('img/cat.png')).toBe('/img/cat.png');
  });

  it('prefixes base path when NEXT_PUBLIC_BASE_PATH is set', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/web3dashboard';
    expect(asset('/img/cat.png')).toBe('/web3dashboard/img/cat.png');
    expect(asset('img/cat.png')).toBe('/web3dashboard/img/cat.png');
  });
});
