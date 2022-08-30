import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View, Text, Image } from 'react-native';
import Header from '../components/Header';
import CustomTextInput from '../components/CustomTextInput';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import GradientView from '../components/GradientView';
import CustomButton from '../components/CustomButton';
import RadioButtonGroup from '../components/RadioButton/RadioButtonGroup';
import ContentView from '../components/ContentView';
import ContainerView from '../components/ContainerView';
import PhoneInput from '../components/PhoneInput';
import { RegisterFormType, RadioButtonsType, ImageUrlType } from '../../core/domain/Types';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Font, Theme } from '../theme/theme';

interface LoginScreenUIProps {
  loading: boolean;
  formData: RegisterFormType;
  formErrors: RegisterFormType;
  handleFormData: (value: string, field: string) => void;
  profiles: RadioButtonsType[];
  handleRegister: () => void;
  investorTypes: RadioButtonsType[];
  selectImage: () => void,
  handlePhoneData: (data: Record<string, any>) => void;
}

const RegisterScreenUI: React.FC<LoginScreenUIProps> = ({ loading,formData, formErrors, handleFormData, profiles, handleRegister, investorTypes, selectImage, handlePhoneData }) => {
  const businessEmailLabel = 'You must enter an authorized business email address to be considered for a corporate account';

  return (
    <GradientView>
      <ContainerView>
        <Header back title={'Sign Up'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={10} >
          <ScrollView>
            <ContentView>
              <RadioButtonGroup style={styles.radioGroup} items={profiles} selected={formData.profile} onSelect={(value) => handleFormData(value, 'profile')} />
              <View style={styles.avatarContainer}>
                <TouchableOpacity onPress={selectImage}>
                  <View style={styles.image}>
                    {/*<Text style={styles.avatarText}>{profileImageText}</Text>*/}
                    <Image style={styles.profileImage} source={{ uri: formData.avatar.uri }} />
                  </View>
                </TouchableOpacity>
              </View>
              { formData.profile === 'company' &&
              <CustomTextInput
                value={formData.companyName}
                onChange={(value) => handleFormData(value, 'companyName')}
                placeholder={'Enter your company name'}
                label={'Company name'}
                error={formErrors.companyName!}
                autocapitalize
              />
              }
              <CustomTextInput
                value={formData.firstName}
                onChange={(value) => handleFormData(value, 'firstName')}
                placeholder={'Enter your first name'}
                label={'First Name'}
                error={formErrors.firstName}
                autocapitalize
              />
              <CustomTextInput
                value={formData.lastName}
                onChange={(value) => handleFormData(value, 'lastName')}
                placeholder={'Enter your last name'}
                label={'Last Name'}
                error={formErrors.lastName}
                autocapitalize
              />
              <PhoneInput
                value={formData.phone}
                onChangeValue={(value) => handleFormData(value, 'phone')}
                onChangeCountry={handlePhoneData}
                error={formErrors.phone}
                code={formData.phoneCountry}
              />
              <CustomTextInput
                value={formData.email}
                onChange={(value) => handleFormData(value, 'email')}
                placeholder={formData.profile === 'company' ? 'Enter your business email' : 'Enter your email'}
                label={formData.profile === 'company' ? 'Business email' : 'Email'}
                error={formErrors.email}
                bottomLabel={formData.profile === 'company' ? businessEmailLabel : undefined}
              />
              { formData.profile === 'investor' && <RadioButtonGroup
                style={styles.radioGroup}
                items={investorTypes}
                selected={formData.investorType!}
                onSelect={(value) => handleFormData(value, 'investorType')}
              />}
              <CustomTextInput
                value={formData.password}
                onChange={(value) => handleFormData(value, 'password')}
                placeholder={'Enter your password'}
                label={'Password'}
                error={formErrors.password}
                password
              />
              <CustomTextInput
                value={formData.confirmPassword}
                onChange={(value) => handleFormData(value, 'confirmPassword')}
                placeholder={'Confirm your password'}
                label={'Confirm password'}
                error={formErrors.confirmPassword}
                password
              />
              <CustomButton loading={loading} style={styles.fullWidth} label={'SIGN UP'} onPress={handleRegister} />
            </ContentView>
          </ScrollView>
        </KeyboardAvoidingView>
      </ContainerView>
    </GradientView>
  );
};

const styles = StyleSheet.create({
  radioGroup: {
    marginBottom: responsiveHeight(2),
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10,
    borderWidth: 5,
    borderColor: Theme.lightGray,
    padding: 5,
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  fullWidth: {
    width: '100%',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(3),
  },
  avatarContainer: {
    width: '100%',
    alignItems: 'center',
  },
  avatarText: {
    ...Font.Bold,
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },


});

export default RegisterScreenUI;
