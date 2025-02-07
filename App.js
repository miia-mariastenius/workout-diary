import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MyTheme, Styles } from './styles/style';
import { Button, Divider, PaperProvider, SegmentedButtons, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExerciseForm from './components/ExerciseForm';


export default function App() {
  return (
    <PaperProvider theme={MyTheme}>
      <SafeAreaView style={Styles.container}>
        <ExerciseForm/>
      </SafeAreaView>
    </PaperProvider>
  );
}


