import React, { useContext, useState } from 'react';
import RegisterScreenUI from './ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { RegisterFormType, RadioButtonsType, SessionData } from '../../core/domain/Types';
import { initialRegisterFormValues, userProfiles, investorTypes } from '../../core/domain/InitialValues';
import { callService, sessionStorage } from '../../core/infrastructure/instances';
import Register from '../../core/useCases/Register';
import { AppContext } from '../AppProvider';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [formData, setFormData] = useState<RegisterFormType>(initialRegisterFormValues);
  const [formErrors, setFormErrors] = useState<RegisterFormType>(initialRegisterFormValues);
  const [profiles] = useState<RadioButtonsType[]>(userProfiles);
  const [invTypes] = useState<RadioButtonsType[]>(investorTypes);
  const [loading, setLoading] = useState<boolean>(false);
  const { setCompanyName, setUserId, setProfile  } = useContext(AppContext);

  const handleRegister = async () => {
    setLoading(true);
    try {
      cleanUnnecessaryFields();
      const sessionData = await register();
      setUserId(sessionData.userId);
      setCompanyName(sessionData.companyName);
      setProfile(sessionData.profile);
      navigateToNextScreen();
    } catch (e: any) {
      handleErrors(e);
    }
    setLoading(false);
  };

  const cleanUnnecessaryFields = () => {
    if (formData.profile === 'company') {
      setFormData({ ...formData, investorType: null });
    }
    if (formData.profile === 'investor') {
      setFormData({ ...formData, companyName: null });
    }
  };

  const register = async (): Promise<SessionData> => {
    const register = new Register(callService, sessionStorage);
    return await register.execute(formData);
  };

  const selectImage = () => {
    ImagePicker.openPicker({ writeTempFile: false, width: 150, height: 150, cropping: true }).then(image => {
      if ('path' in image) {
        setFormData({ ...formData, avatar: {
          uri: image.path,
          name: `${new Date().valueOf().toString()}.${image.mime.split('/')[1]}`,
          type: image.mime,
        } });
      }
    });
  };

  const navigateToNextScreen = () => {
    if (formData.profile === 'company') { navigation.navigate('SelectPlan'); }
    else { navigation.navigate('CallList'); }
  };

  const handleErrors = (e: any) => {
    if (e.status === 409) { setFormErrors({ ...formErrors, email: 'This email already exist.' }); }
    else { setFormErrors({ ...formErrors, [e.fieldName]: e.message }); }
  };

  const handleFormData = (value: string, field: string) => {
    resetErrors();
    setFormData({ ...formData, [field]: value });
  };

  const resetErrors = () => setFormErrors(initialRegisterFormValues);

  const handlePhoneData = (data: Record<string, any>) => {
    setFormData({ ...formData, 'phoneCountry': data.cca2, 'phoneCode': data.callingCode[0] });
  };

  return (
    <RegisterScreenUI
      loading={loading}
      formData={formData}
      formErrors={formErrors}
      handleFormData={handleFormData}
      profiles={profiles}
      handleRegister={handleRegister}
      investorTypes={invTypes}
      selectImage={selectImage}
      handlePhoneData={handlePhoneData}
    />
  );
};

export default RegisterScreen;
