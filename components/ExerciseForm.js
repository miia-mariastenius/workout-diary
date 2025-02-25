import { Alert, View } from "react-native";
import { Button, Divider, SegmentedButtons, Text, TextInput } from "react-native-paper";
import { MyTheme, Styles } from '../styles/style';
import { DatePickerInput, registerLocale } from 'react-native-paper-dates'
import { en } from 'react-native-paper-dates'
import { useContext, useState } from "react";
import { FormContext, ModalContext } from "./Context";

export default function ExerciseForm() {

  const [exercise, setExercise] = useState('')
  const [date, setDate] = useState(new Date())
  const [duration, setDuration] = useState('')
  const [distance, setDistance] = useState('')

  const { setModalVisible } = useContext(ModalContext)
  const { addExercise } = useContext(FormContext)

  const handleSave = () => {
    if (!exercise || !duration || !distance || !date) {
      Alert.alert("Error", "Please fill in all fields.")
      return
    }

    addExercise({ exercise, date, duration, distance })
    setExercise('')
    setDate(new Date())
    setDuration('')
    setDistance('')
  }

  return (

    <View>
      <View style={Styles.header}>
        <Text variant='headlineLarge'>ADD EXERCISE</Text>
        <Button mode='contained' onPress={handleSave} style={Styles.saveButton}>Save</Button>
      </View>
      <Divider bold />
      <View style={Styles.form}>
        <SegmentedButtons
          value={exercise}
          onValueChange={setExercise}
          buttons={[
            {
              value: 'Walking',
              label: 'Walking',
              icon: exercise === 'Walking' ? 'check' : undefined
            },
            {
              value: 'Running',
              label: 'Running',
              icon: exercise === 'Running' ? 'check' : undefined
            }, {
              value: 'Biking',
              label: 'Biking',
              icon: exercise === 'Biking' ? 'check' : undefined
            },
          ]}
        />
        <TextInput mode='outlined' label="Duration" placeholder="Minutes" keyboardType='number-pad' value={duration} onChangeText={duration => setDuration(duration)} />
        <TextInput mode='outlined' label="Distance" placeholder="Kilometers" keyboardType='number-pad' value={distance} onChangeText={distance => setDistance(distance)} />
        <View style={Styles.supportingText}>
          <Text>in kilometers</Text>
        </View>
        <DatePickerInput
          locale="en"
          label="Date"
          value={date}
          onChange={(d) => setDate(d)}
          inputMode="start"
          mode="outlined"
          withDateFormatInLabel={false}
          style={Styles.datePicker}
        />
      </View>
      <View style={Styles.buttonContainer}>
        <Button style={Styles.viewExercisesButton} mode='contained' onPress={() => setModalVisible(true)}>View All Exercises</Button>
      </View>
    </View>
  )
}