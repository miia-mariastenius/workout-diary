import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MyTheme, Styles } from './styles/style';
import { Button, Divider, PaperProvider, SegmentedButtons, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExerciseForm from './components/ExerciseForm';
import { useState } from 'react';
import { ModalContext } from './components/Context';
import ModalView from './components/ModalView';


export default function App() {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <ModalContext.Provider value={{modalVisible, setModalVisible}}>
      <PaperProvider theme={MyTheme}>
        <SafeAreaView style={Styles.container}>
          <ExerciseForm/>
          <ModalView/>
        </SafeAreaView>
      </PaperProvider>
    </ModalContext.Provider>
  );
}


