const KEY_WISH = 'wish';

let wishsCache: string[] | null = null;
const getWishsCache = () => {
  if (!wishsCache) {
    !getWishs() && setWishs([])
  }
  return wishsCache as string[]
}

const setWishs = (productIds: string[]) => {
  wishsCache = [...new Set(productIds)];
  localStorage.setItem(KEY_WISH, JSON.stringify(wishsCache));
};

const getWishs = () => {
  const wishFromLocal = localStorage.getItem(KEY_WISH);
  try {
    if (wishFromLocal === null) {
      throw new Error('wishFromLocal === null')
    }

    wishsCache = JSON.parse(wishFromLocal) as string[];
    return wishsCache;
  } catch (e) {
    console.log('ProductDetail/getWish', wishFromLocal, e);
    return null;
  }
};

const addWish = (productId: string) => {
  const wishs = getWishsCache()
  wishs.push(productId);
  setWishs(wishs);
}

const hasWish = (productId: string) => {
  const wishs = getWishsCache()
  return !!wishs && wishs.includes(productId);
};

const removeWish = (productId: string) => {
  const wishs = getWishsCache()
  setWishs(wishs.filter((el) => el !== productId))
}

export { hasWish, addWish, removeWish }