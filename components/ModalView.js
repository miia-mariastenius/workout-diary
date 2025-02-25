import { useContext, useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, Divider, List, Menu, Modal } from "react-native-paper";
import { ExercisesContext, FormContext, ModalContext } from "./Context";
import { Styles } from "../styles/style";

export default function ModalView() {

  const exercises = useContext(ExercisesContext)
  const { modalVisible, setModalVisible } = useContext(ModalContext)
  const { formData } = useContext(FormContext)
  const [visible, setVisible] = useState(false)

  const openMenu = () => {
    console.log("Opening menu");
    setVisible(true);
  };

  const closeMenu = () => {
    console.log("Closing menu");
    setVisible(false);
  };

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
                ALL EXERCISES
              </Button>
            }
          >
            <Menu.Item onPress={() => { }} title="Item 1" />
            <Menu.Item onPress={() => { }} title="Item 2" />
            <Menu.Item onPress={() => { }} title="Item 3" />
          </Menu>
          <List.Section>
            {formData.map((exercise, index) => (
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

