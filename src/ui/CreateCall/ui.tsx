import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import CustomTextInput from '../components/CustomTextInput';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import CustomButton from '../components/CustomButton';
import ContentView from '../components/ContentView';
import ContainerView from '../components/ContainerView';
import { Font } from '../theme/theme';
import GradientView from '../components/GradientView';
import { CreateCallFormType, RadioButtonsType } from '../../core/domain/Types';
import { CustomDateTimePicker } from '../components/CustomDatepicker';
import {LoadingScreen} from "../components/LoadingScreen";

interface CreateCallScreenUIProps {
  formData: CreateCallFormType;
  errors: CreateCallFormType;
  handleFormData: (value: string | Date, field: string) => void;
  onPressCreate: () => void;
}

const CreateCallScreenUI: React.FC<CreateCallScreenUIProps> = ({ formData, onPressCreate, handleFormData, errors }) => {
  return (
    <GradientView>
      <ContainerView>
        <Header back />
        <ContentView>
          <Text style={styles.title}>Create a new</Text>
          <Text style={styles.title}>Conference call</Text>
          <Text style={styles.title}>for {formData.companyName}</Text>
          <Text style={styles.leyend}>After create the call it will set a CALL ID that you can share with your audience</Text>
          <CustomTextInput
            value={formData.name}
            onChange={(value) => handleFormData(value, 'name')}
            placeholder={'i.e Your company name 3QT call'}
            label={'Name'}
            error={errors.name}
          />
          <CustomDateTimePicker value={formData.date} onChange={(value) => handleFormData(value, 'date')}/>
          <CustomTextInput value={formData.pdf} onChange={(value) => handleFormData(value, 'pdf')} placeholder={'Enter the pdf url'} label={'Pdf URL'}  />
          <CustomButton style={styles.button} label={'CREATE CALL'} onPress={onPressCreate} />
        </ContentView>
      </ContainerView>
    </GradientView>
  );
};

const styles = StyleSheet.create({
  radioGroup: {
    marginTop: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '40%',
  },
  title: {
    ...Font.Bold,
    fontSize: 32,
    color: 'white',
  },
  leyend: {
    ...Font.Regular,
    fontSize: 18,
    color: 'white',
    marginVertical: responsiveHeight(3),
  },
  button: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
});

export default CreateCallScreenUI;
