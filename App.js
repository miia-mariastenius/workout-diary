import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { MyTheme, Styles } from './styles/style';
import { Button, Divider, PaperProvider, Text } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider theme={MyTheme}>
      <SafeAreaView style={Styles.container}>
        <View style={Styles.header}>
        <Text variant='headlineLarge'>ADD EXERCISE</Text>
        <Button mode='contained' style={Styles.saveButton}>Save</Button>
        </View>
        <Divider/>
      </SafeAreaView>
    </PaperProvider>
  );
}


