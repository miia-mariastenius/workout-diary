import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import style from './styles/style';

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


