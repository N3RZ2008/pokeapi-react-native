import { StyleSheet } from "react-native";

const stylesPokeCard = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    maxHeight: 100,
    backgroundColor: "#FFA756"
  },
  info: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    marginStart: "10%"
  }
});

export default stylesPokeCard;
