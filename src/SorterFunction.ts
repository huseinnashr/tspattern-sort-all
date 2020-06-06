import { Sortable } from "./Sortable";

export default (collection: Sortable) => {
  const { length } = collection;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (collection.compare(j, j + 1)) {
        collection.swap(j, j + 1);
      }
    }
  }
};
