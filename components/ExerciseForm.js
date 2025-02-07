import { View } from "react-native";
import { Button, Divider, SegmentedButtons, Text, TextInput } from "react-native-paper";
import { MyTheme, Styles } from '../styles/style';
import { DatePickerInput, registerLocale } from 'react-native-paper-dates'
import { en } from 'react-native-paper-dates'
import { useState } from "react";

export default function ExerciseForm() {

  const [exercise, setExercise] = useState('')
  const [date, setDate] = useState(new Date())
  const [duration, setDuration] = useState('')
  const [distance, setDistance] = useState('')

  return (
    <View>
      <View style={Styles.header}>
        <Text variant='headlineLarge'>ADD EXERCISE</Text>
        <Button mode='contained' style={Styles.saveButton}>Save</Button>
      </View>
      <Divider bold />
      <View style={Styles.form}>
        <SegmentedButtons
          value={exercise}
          onValueChange={setExercise}
          buttons={[
            {
              value: 'walk',
              label: 'Walking'
            },
            {
              value: 'run',
              label: 'Running'
            }, {
              value: 'bike',
              label: 'Biking'
            },
          ]}
        />
        <TextInput mode='outlined' label="Duration" placeholder="minutes" keyboardType='number-pad' value={duration} onChangeText={duration => setDuration(duration)} />
        <TextInput mode='outlined' label="Distance" placeholder="kilometers" keyboardType='number-pad' value={distance} onChangeText={distance => setDistance(distance)} />
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
        <Button style={Styles.viewExercisesButton} mode='contained'>View All Exercises</Button>
      </View>
    </View>
  )
}