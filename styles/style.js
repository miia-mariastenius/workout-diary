import { StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export const MyTheme = {
  ...MD3LightTheme,

}

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  saveButton: {
    width: 100,
    
  }
})