import { StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export const MyTheme = {
  ...MD3LightTheme,
  colors:{
    ...MD3LightTheme.colors,
    primary: '#CC8470',
    secondaryContainer: '#faefef',
  }
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
  supportingText: {
    marginTop: -6,
    marginLeft: 15,
  },
  buttonContainer: {
    margin: 10,
    justifyContent: "flex-end",
    height: "60%",
  },
  viewExercisesButton: {
    bottom: 0,
    alignSelf: "stretch"
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  exerciseList: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 350,
  },

})