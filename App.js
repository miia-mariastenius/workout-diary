import { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExercisesContext, FormContext, ModalContext } from './components/Context';
import ExerciseForm from './components/ExerciseForm';
import ModalView from './components/ModalView';
import { MyTheme, Styles } from './styles/style';



export default function App() {

  const [exercises, setExercise] = useState([{ name: 'Walking' }, { name: 'Running' }, { name: 'Biking' }])
  const [modalVisible, setModalVisible] = useState(false)

  const [formData, setFormData] = useState([]);

  const addExercise = (exercise) => {
    setFormData([...formData, exercise]);
  };


  return (
    <ExercisesContext.Provider value={{ exercises, setExercise }}>
      <FormContext.Provider value={{ formData, addExercise }}>
        <ModalContext.Provider value={{ modalVisible, setModalVisible }}>
          <PaperProvider theme={MyTheme}>
            <SafeAreaView style={Styles.container}>
              <ExerciseForm />
              <ModalView />
            </SafeAreaView>
          </PaperProvider>
        </ModalContext.Provider>
      </FormContext.Provider>
    </ExercisesContext.Provider>
  );
}


