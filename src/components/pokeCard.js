import { View, Text, Image } from "react-native";
import styles from "../styles/pokeCardStyle";

export default function pokeCard() {
    return (
        <View style={styles.background}>
            <View style={styles.info}>
                <Text>#004</Text>
                <Text>Charmander</Text>
                <Text>Fire</Text>
            </View>
            <View>
                <Image
                    source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",}}
                    style={{width: 100, height: 100}}
                />
            </View>
        </View>
    )
}