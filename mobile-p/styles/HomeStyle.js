import { Dimensions, StyleSheet } from "react-native";

export const { width } = Dimensions.get("window");
const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A0CEE1",
  },

  pesquisaContainer: {
    width: widthTotal,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#A0CEE1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputPesquisa: {
    flex: 1,
    height: heightTotal * 0.05,
    backgroundColor: "#fff",
    borderRadius: 8,
    fontSize: 14,
    paddingHorizontal: 10,
    marginRight: 10,
  },

  bellimg: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  body: {
    height: heightTotal,
    width: widthTotal,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },

  view1: {
    width: width ,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
  },

  text: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "bold",
    color: "#36394A",
    marginBottom: 10,
    alignSelf: "flex-start",
    left: 20,
  },

  viewcontrolPOSTS: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: heightTotal * 0.1,
    borderStyle: "solid",
    borderColor: "#BFBFBF",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  direita: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  centro: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  esquerda: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  textotop: {
    color: "#666D80",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },

  texto: {
    textAlign: "center",
    color: "#666D80",
    fontSize: 12,
    marginTop: 5,
  },

  imgIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },

  CarouselServicos: {
    width: width,
    marginTop: 0,
    marginBottom: 0,
  },
});
