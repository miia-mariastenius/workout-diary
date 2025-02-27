import { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormContext, ModalContext } from './components/Context';
import ExerciseForm from './components/ExerciseForm';
import ModalView from './components/ModalView';
import { MyTheme, Styles } from './styles/style';
import { StatusBar } from 'react-native';



export default function App() {

  const [modalVisible, setModalVisible] = useState(false)

  const [formData, setFormData] = useState([])

  const addExercise = (exercise) => {
    setFormData([...formData, exercise])
  }


  return (
      <FormContext.Provider value={{ formData, addExercise }}>
        <ModalContext.Provider value={{ modalVisible, setModalVisible }}>
          <PaperProvider theme={MyTheme}>
            <SafeAreaView style={Styles.container}>
              <StatusBar backgroundColor={MyTheme.colors.secondaryContainer} barStyle="dark-content" />
              <ExerciseForm />
              <ModalView />
            </SafeAreaView>
          </PaperProvider>
        </ModalContext.Provider>
      </FormContext.Provider>
  );
}


