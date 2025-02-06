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

  },
  form: {
    gap: 10,
    margin: 10,
  },
  datePicker: {
    marginTop: 50,
  },
  viewExercisesButton: {
    position: "absolute",
    bottom: 20,
    margin: 10,
    alignSelf:"center",
    width: "90%"
  }
})