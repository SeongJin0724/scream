const TOKEN_KEY = "accessToken";
const GUEST_KEY = "isGuestSession";

export const getToken = () =>
  sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);

export const setToken = (token, { persist = false } = {}) => {
  if (persist) {
    localStorage.setItem(TOKEN_KEY, token);
    sessionStorage.removeItem(TOKEN_KEY);
  } else {
    sessionStorage.setItem(TOKEN_KEY, token);
    localStorage.removeItem(TOKEN_KEY);
  }
};

export const setGuestSession = (isGuest) => {
  if (isGuest) {
    sessionStorage.setItem(GUEST_KEY, "1");
  } else {
    sessionStorage.removeItem(GUEST_KEY);
  }
};

export const isGuestSession = () => sessionStorage.getItem(GUEST_KEY) === "1";

export const clearToken = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(GUEST_KEY);
};
