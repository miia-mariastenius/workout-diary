import { useContext, useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, Divider, List, Menu, Modal, Text } from "react-native-paper";
import { FormContext, ModalContext } from "./Context";
import { Styles } from "../styles/style";

export default function ModalView() {

  const { modalVisible, setModalVisible } = useContext(ModalContext)
  const { formData } = useContext(FormContext)
  const [visible, setVisible] = useState(false)
  const [filter, setFilter] = useState("All exercises")


  const openMenu = () => {
    // console.log("Opening menu");
    setVisible(true);
  }

  const closeMenu = () => {
    // console.log("Closing menu");
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
      <View style={Styles.exerciseList}>
        <ScrollView>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Button onPress={openMenu}
                icon={"menu-down"}
                contentStyle={{ flexDirection: 'row-reverse' }}
              >
                {filter.toUpperCase()}
              </Button>
            }
          >
            <Menu.Item onPress={() => handleMenuItemPress("All exercises")} title="All exercises" />
            <Menu.Item onPress={() => handleMenuItemPress("Walking")} title="Walking" />
            <Menu.Item onPress={() => handleMenuItemPress("Running")} title="Running" />
            <Menu.Item onPress={() => handleMenuItemPress("Biking")} title="Biking" />
          </Menu>
          <Text variant="headlineMedium">{totalDistance}</Text>
          <Text variant="titleSmall">total distance (km)</Text>
          <List.Section>
            {filteredFormData.map((exercise, index) => (
              <View key={index}>
                <List.Item
                  title={exercise.exercise}
                  description={`${exercise.distance} km  •  ${exercise.duration} min\n${exercise.date.toLocaleDateString()}`}
                />
                <Divider />
              </View>
            ))}
          </List.Section>
          <Button mode="contained" onPress={() => setModalVisible(false)}>Close</Button>
        </ScrollView>
      </View>

    </Modal>
  )
}

