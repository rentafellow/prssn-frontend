import { describe, it, expect, vi, beforeEach } from 'vitest';
import { cachedFetch, clearCache } from '../../../app/utils/cache.js'; 

// Mock global fetch
global.fetch = vi.fn();

describe('cachedFetch Utility', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    clearCache(); // Reset cache before each test
  });

  it('should fetch data from the API on the first call', async () => {
    const mockData = { id: 1, name: 'Test' };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockData),
    });

    const result = await cachedFetch('https://api.example.com/data');
    
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/data', {});
    expect(result).toEqual(mockData);
  });

  it('should return cached data on subsequent calls to the same URL', async () => {
    const mockData = { id: 1, name: 'Test' };
    
    // Setup fetch to only work once
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockData),
    });

    // First call
    await cachedFetch('https://api.example.com/data');
    
    // Second call should not hit fetch
    const cachedResult = await cachedFetch('https://api.example.com/data');
    
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(cachedResult).toEqual(mockData);
  });

  it('should clear the cache when clearCache is called', async () => {
    const mockData1 = { id: 1, name: 'Test 1' };
    const mockData2 = { id: 2, name: 'Test 2' };
    
    global.fetch
      .mockResolvedValueOnce({
        ok: true,
        json: vi.fn().mockResolvedValueOnce(mockData1),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: vi.fn().mockResolvedValueOnce(mockData2),
      });

    // First call caches the result
    await cachedFetch('https://api.example.com/data');
    
    // Clear cache
    clearCache();
    
    // Second call fetches again
    const resultAfterClear = await cachedFetch('https://api.example.com/data');
    
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(resultAfterClear).toEqual(mockData2);
  });
});
