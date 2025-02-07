import { useContext, useState } from "react";
import { Modal, View } from "react-native";
import { Button } from "react-native-paper";
import { ModalContext } from "./Context";
import { Styles } from "../styles/style";

export default function ModalView() {

  const { modalVisible, setModalVisible } = useContext(ModalContext)

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >

      <View style={Styles.modalBackground}>
        <View style={Styles.exerciseList}>
          <Button mode="contained" onPress={() => setModalVisible(false)}>Close</Button>
        </View>
      </View>
    </Modal>
  )
}