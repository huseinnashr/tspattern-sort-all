import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
// import sorterFunction from "./SorterFunction";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// sorterFunction(numbersCollection);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaaa");
// sorterFunction(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);
