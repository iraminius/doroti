import { useState, useEffect, useCallback } from "react";

export const useStorageState = (key, initialData, schema) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(initialData);

  const saveToStorage = useCallback(async () => {
    await schema.validate(data);
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  const loadFromStorage = useCallback(async () => {
    const savedData = JSON.parse(localStorage.getItem(key));
    const isValid = await schema.isValid(savedData);

    if (isValid) {
      console.info(`Loading ${key} from localStorage...`);
      setIsLoaded(true);
      setData(savedData);
    } else {
      console.error(`localStorage loading failed for: ${key} `);
    }
  }, [setData]);

  useEffect(() => {
    if (isLoaded) {
      saveToStorage();
    } else {
      loadFromStorage();
    }
  }, [isLoaded, saveToStorage, loadFromStorage]);

  return [data, setData];
};
