import { useState, useEffect } from "react";

var localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [state, setState] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreeds();
    }
    async function requestBreeds() {
      setBreedList([]);
      setState("loading");
      const response = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await response.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setState("loaded");
    }
  }, [animal]);
  return [breedList, state];
}
