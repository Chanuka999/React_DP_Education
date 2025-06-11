import { useState } from "react";

function LocalStorage(key, value) {
  const [currentValue, setCurrentValue] = useState(() => {
    try {
      const localVal = localStorage.getItem(key);
      return localVal ? JSON.parse(localVal) : value;
    } catch (error) {
      console.log(error);
    }
  });

  const setValue = (newValue) => {
    try {
      setCurrentValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.log(error);
    }
  };
  return [currentValue, setValue];
}
export default LocalStorage;
