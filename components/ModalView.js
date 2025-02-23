import { useContext, useState } from "react";
import { View } from "react-native";
import { Button, Divider, List, Menu, Modal } from "react-native-paper";
import { ModalContext } from "./Context";
import { Styles } from "../styles/style";

export default function ModalView() {

  const { modalVisible, setModalVisible } = useContext(ModalContext)
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
            <Divider />
            <Menu.Item onPress={() => { }} title="Item 3" />
          </Menu>
          <List.Section>
            <List.Item
              title="Walking"
              description="3 km  •  32 min
10.1.2025"
            />
            <Divider />
            <List.Item
              title="Walking"
              description="3 km  •  32 min
10.1.2025"
            />
          </List.Section>
          <Button mode="contained" onPress={() => setModalVisible(false)}>Close</Button>
      </View>
    </Modal>
  )
}

