import { Alert, Keyboard, View } from "react-native";
import { Button, Divider, SegmentedButtons, Text, TextInput } from "react-native-paper";
import { MyTheme, Styles } from '../styles/style';
import { DatePickerInput, registerLocale } from 'react-native-paper-dates'
import { en, registerTranslation } from 'react-native-paper-dates'
import { useContext, useState } from "react";
import { FormContext, ModalContext } from "./Context";

registerTranslation("en", en)

export default function ExerciseForm() {

  const [exercise, setExercise] = useState('')
  const [date, setDate] = useState(new Date())
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('');
  const [distance, setDistance] = useState('')

  const { setModalVisible } = useContext(ModalContext)
  const { addExercise } = useContext(FormContext)

  const handleSave = () => {
    if (!exercise || !minutes || !distance || !date) {
      Alert.alert("Error", "Please fill in all fields.")
      return
    }

    const duration = hours ? `${hours}h ${minutes}min` : `${minutes}min`

    addExercise({ exercise, date, duration, distance })
    setExercise('')
    setDate(new Date())
    setHours('')
    setMinutes('')
    setDistance('')

    Keyboard.dismiss()

    Alert.alert("Success", "Exercise added successfully!")
  }

  const handleMinutesChange = (value) => {
    if (value === '' || parseInt(value) <= 59) {
      setMinutes(value);
    }
  }

  return (

    <View>
      <View style={Styles.headerBackground}>
        <View style={Styles.header}>
          <Text variant='headlineLarge'>ADD EXERCISE</Text>
          <Button
            mode='contained'
            onPress={handleSave}
            style={Styles.saveButton}
          >
            Save
          </Button>
        </View>
      </View>
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
        <View style={Styles.durationRow}>
          <TextInput
            mode='outlined'
            label='Hours'
            right={<TextInput.Icon icon="timer-sand-empty" />}
            keyboardType='number-pad'
            value={hours}
            onChangeText={hours => setHours(hours)}
            style={Styles.durationInput}
          />
          <TextInput
            mode='outlined'
            label='Minutes'
            right={<TextInput.Icon icon="timer-outline" />}
            keyboardType='number-pad'
            value={minutes}
            onChangeText={handleMinutesChange}
            style={Styles.durationInput}
          />
        </View>
        <TextInput
          mode='outlined'
          label='Distance'
          placeholder='Kilometers'
          right={<TextInput.Icon icon='map-marker-distance' />}
          keyboardType='number-pad'
          value={distance}
          onChangeText={distance => setDistance(distance)}
        />
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