import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Font, Theme } from '../theme/theme';
import { responsiveHeight } from 'react-native-responsive-dimensions';

interface CustomDatepickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

export const CustomDateTimePicker: React.FC<CustomDatepickerProps> = ({ value, onChange }) => {
  const [datepickerVisible, setDatepickerVisible] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(value);

  const closeDatepicker = () => { setDatepickerVisible(false); };

  const setDateAndCloseModal = () => {
    onChange(date);
    setDatepickerVisible(false);
  };

  const renderIOS = () =>
    (
      <>
        <Text style={styles.label}>Date and time</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.input} onPress={() => setDatepickerVisible(!datepickerVisible)}>
          <Text style={styles.inputLabel}>{value.toLocaleString()}</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={datepickerVisible}
          onRequestClose={closeDatepicker}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity onPress={closeDatepicker}>
                  <Text style={styles.modalButtons}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setDateAndCloseModal}>
                  <Text style={styles.modalButtons}>OK</Text>
                </TouchableOpacity>
              </View>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="datetime"
                textColor="white"
                display="spinner"
                onChange={(event, date) => {setDate(date!);}}
              />
            </View>
          </View>
        </Modal>
      </>
    );

  const renderAndroid = () =>
    (
      <>
        {datepickerVisible &&
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="datetime"
          textColor="white"
          onChange={(event, date) => { setDate(date!); }}
        />
        }
      </>
    );

  if (Platform.OS === 'android') {
    return renderAndroid();
  } else {
    return renderIOS();
  }
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#2d2d2d',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    justifyContent: 'flex-end',
  },
  modalButtons: {
    color: 'white',
    marginRight: 10,
  },
  input: {
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Theme.accentLight,
    borderColor: Theme.accent,
    width: '100%',
    marginBottom: responsiveHeight(3),
  },
  inputLabel: {
    ...Font.Regular,
    color: 'white',
  },
  label: {
    ...Font.Bold,
    color: 'white',
    marginVertical: responsiveHeight(0.2),
  },
});

