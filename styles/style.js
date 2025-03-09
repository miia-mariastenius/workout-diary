import { StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export const MyTheme = {
  ...MD3LightTheme,
  colors:{
    ...MD3LightTheme.colors,
    primary: '#CC8470',
    secondaryContainer: '#faefef',
  },
}

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground:{
    backgroundColor: '#faefef',
    borderBottomWidth: 1,
    borderBottomColor: '#D7C2B8',
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
  durationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  durationInput: {
    flex: 1,
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
  modalContent: {
    backgroundColor: "white",
    margin: 20,
    height: '80%',
    borderRadius: 10,
    alignItems: "center",
  },
  modalHeaderBackground:{
    backgroundColor: '#faefef',
    borderBottomWidth: 1,
    borderBottomColor: '#D7C2B8',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
  },
  exerciseList: {
    padding: 15,
    width: '100%',
  },
  noExercisesItem: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 10,
  },
  menuButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menu: {
    width: '80%',
  },
  modalList: {
    flex: 1,
    width: '100%',
    marginBottom: -6,
    marginTop: -3,
  },
  listView: {
    width: '1000',
  },
  modalButton: {
    margin: 10,
    width: '95%',
  }
})