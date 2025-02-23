import { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ModalContext } from './components/Context';
import ExerciseForm from './components/ExerciseForm';
import ModalView from './components/ModalView';
import { MyTheme, Styles } from './styles/style';


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


