export const SetToLocalStorage = (key: string, value: string) => {
    if (!key || !value) {
      return null;
    }
    localStorage.setItem(key, value);
}

export const GetFromLocalStorage = (key: string) => {
  const hasInLocalStorage = localStorage.getItem(key);

  if (!hasInLocalStorage) {
    console.log(`Chave ${key} não existe no localStorage`)
    return null;
  }

  return hasInLocalStorage;
}

export const DeleteLocalStorage = (key: string) => {
  const hasKey = GetFromLocalStorage(key);
  if (!hasKey) {
    console.log(`Chave ${key} não existe no localStorage.`);
    return false;
  }
  localStorage.removeItem(key);
  return true;
}
