import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 350,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: "#C90073",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    width: 350,
    backgroundColor: "#C90073",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;
