const KEY = "wishlistItems";

const read = () => {
  const raw = sessionStorage.getItem(KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const write = (items) => {
  sessionStorage.setItem(KEY, JSON.stringify(items));
};

export const getWishlist = () => read();

export const hasWishlistItem = (itemKey) =>
  read().some((key) => Number(key) === Number(itemKey));

export const addWishlistItem = (itemKey) => {
  const items = read();
  const key = Number(itemKey);
  if (!items.some((k) => Number(k) === key)) {
    items.push(key);
    write(items);
  }
  return items;
};

export const removeWishlistItem = (itemKey) => {
  const key = Number(itemKey);
  const items = read().filter((k) => Number(k) !== key);
  write(items);
  return items;
};
