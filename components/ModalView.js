import { useContext, useState } from "react";
import { Modal, View } from "react-native";
import { Button, Divider, List, Menu } from "react-native-paper";
import { ModalContext } from "./Context";
import { Styles } from "../styles/style";

export default function ModalView() {

  const { modalVisible, setModalVisible } = useContext(ModalContext)
  const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={Styles.modalBackground}>
        <View style={Styles.exerciseList}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu} icon={"menu-down"} contentStyle={{ flexDirection: 'row-reverse' }}>ALL EXERCISES</Button>}>
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
      </View>
    </Modal>
  )
}

