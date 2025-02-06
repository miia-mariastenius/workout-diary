import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { MyTheme, Styles } from './styles/style';
import { Button, Divider, PaperProvider, SegmentedButtons, Text, TextInput } from 'react-native-paper';
import { use, useState } from 'react';

export default function App() {

  const [exercise, setExercise] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [distance, setDistance] = useState('')

  return (
    <PaperProvider theme={MyTheme}>
      <SafeAreaView style={Styles.container}>
        <View style={Styles.header}>
          <Text variant='headlineLarge'>ADD EXERCISE</Text>
          <Button mode='contained' style={Styles.saveButton}>Save</Button>
        </View>
        <Divider bold/>
        <View style={Styles.form}>
          <SegmentedButtons
            value={exercise}
            onValueChange={setExercise}
            buttons={[
              {value: 'walk',
                label: 'Walking'
              },
              {value: 'run',
                label: 'Running'
              },{value: 'bike',
                label: 'Biking'
              },
            ]}
          />
          <TextInput mode='outlined' label="Date"/>
          <TextInput mode='outlined' label="Duration" keyboardType='number-pad' value={duration} onChangeText={duration => setDuration(duration)}/>
          <TextInput mode='outlined' label="Distance" keyboardType='number-pad' value={distance} onChangeText={distance => setDistance(distance)}/>
          <Text>in kilometers</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}


