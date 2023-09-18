const LOCAL_STORAGE_KEY = "jwt";

export function setAccessToken(token) {
  localStorage.setItem(LOCAL_STORAGE_KEY, token);
}

// Function to retrieve a token from localStorage
export function getAccessToken() {
  return localStorage.getItem(LOCAL_STORAGE_KEY);
}

// Function to remove a token from localStorage
export function removeAccessToken() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
