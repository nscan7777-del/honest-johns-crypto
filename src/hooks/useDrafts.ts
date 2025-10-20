const isBrowser = typeof window !== "undefined" && !!window.localStorage;
const KEY = (k: string) => `hjc:${k}`;

export const useDrafts = () => {
  const saveDraft = (key: string, data: unknown): boolean => {
    if (!isBrowser) return false;
    try {
      localStorage.setItem(KEY(key), JSON.stringify(data));
      return true;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("Error saving draft:", msg);
      return false;
    }
  };

  const loadDraft = <T = unknown>(key: string): T | null => {
    if (!isBrowser) return null;
    try {
      const stored = localStorage.getItem(KEY(key));
      return stored ? (JSON.parse(stored) as T) : null;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("Error loading draft:", msg);
      return null;
    }
  };

  const clearDraft = (key: string): boolean => {
    if (!isBrowser) return false;
    try {
      localStorage.removeItem(KEY(key));
      return true;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("Error clearing draft:", msg);
      return false;
    }
  };

  return { saveDraft, loadDraft, clearDraft };
};
