import { ScrollView } from "react-native";
import PokeCard from "./src/components/pokeCard.js";

import styles from "./src/styles/appStyle.js";

export default function App() {
  return (
    <ScrollView style={styles.container}>
	  <PokeCard />
	  <PokeCard />
	  <PokeCard />
    </ScrollView>
  );
}
