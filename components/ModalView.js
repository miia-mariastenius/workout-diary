import { useContext, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Button, Divider, Icon, List, Menu, Modal, Text } from "react-native-paper";
import { FormContext, ModalContext } from "./Context";
import { MyTheme, Styles } from "../styles/style";

export default function ModalView() {

  const { modalVisible, setModalVisible } = useContext(ModalContext)
  const { formData } = useContext(FormContext)
  const [visible, setVisible] = useState(false)
  const [filter, setFilter] = useState("All exercises")


  const openMenu = () => {
    setVisible(true);
  }

  const closeMenu = () => {
    setVisible(false);
  }

  const handleMenuItemPress = (filter) => {
    setFilter(filter)
    closeMenu()
  }

  const filteredFormData = filter === "All exercises" ? formData : formData.filter(exercise => exercise.exercise === filter)

  let totalDistance = 0;
  filteredFormData.forEach(ex => totalDistance += parseFloat(ex.distance))

  return (
    <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)} contentContainerStyle={Styles.modalContent}>
      <View style={Styles.modalHeaderBackground}>
        <View style={Styles.exerciseList}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            style={Styles.menu}
            anchor={
              <Pressable onPress={openMenu} style={Styles.menuButton}>
                <Text style={Styles.menuButtonText}>{filter.toUpperCase()} ▾</Text>
              </Pressable>
            }
          >
            <Menu.Item onPress={() => handleMenuItemPress("All exercises")} title="All exercises" />
            <Menu.Item onPress={() => handleMenuItemPress("Walking")} title="Walking" />
            <Menu.Item onPress={() => handleMenuItemPress("Running")} title="Running" />
            <Menu.Item onPress={() => handleMenuItemPress("Biking")} title="Biking" />
          </Menu>
          <Text variant="headlineMedium">{totalDistance}</Text>
          <Text variant="titleSmall">total distance (km)</Text>
        </View>
      </View>
      <ScrollView>
        <View style={Styles.listView}>
          <List.Section style={Styles.modalList}>
            {filteredFormData.length === 0 ? (
              <List.Item
                title="No exercises added."
                description="There are no exercises for the selected type."
                style={Styles.noExercisesItem}
              />
            ) : (
              filteredFormData.map((exercise, index) => (
              <View key={index}>
                <List.Item
                  title={exercise.exercise}
                  description={`${exercise.distance} km  •  ${exercise.duration} \n${exercise.date.toLocaleDateString()}`}
                />
                {index < filteredFormData.length - 1 && <Divider />}
              </View>
            )))}
          </List.Section>
        </View>
      </ScrollView>
      <Button mode="contained" onPress={() => setModalVisible(false)} style={Styles.modalButton}>Close</Button>
    </Modal>
  )
}

