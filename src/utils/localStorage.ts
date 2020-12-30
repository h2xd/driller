import { isDevelopment } from "@/utils/env";

export const LOCAL_STORAGE_SIGNATURE = "driller";

export function loadFromLocalStorage<TData>(
  key: string,
  fallback: TData
): TData {
  const localStorageData = localStorage.getItem(
    `${LOCAL_STORAGE_SIGNATURE}:${key}`
  );

  if (localStorageData) {
    try {
      return JSON.parse(localStorageData);
    } catch (error) {
      if (isDevelopment) {
        console.error(error);
      }
    }
  }

  return fallback;
}

export function writeToLocalStorage<TData extends Record<string, unknown>>(
  key: string,
  data: TData
): boolean {
  try {
    localStorage.setItem(
      `${LOCAL_STORAGE_SIGNATURE}:${key}`,
      JSON.stringify(data)
    );
    return true;
  } catch (error) {
    if (isDevelopment) {
      console.error(error);
    }

    return false;
  }
}
