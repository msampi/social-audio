import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { Font } from '../theme/theme';
import GradientView from '../components/GradientView';
import ContainerView from '../components/ContainerView';
import ContentView from '../components/ContentView';
import { CredentialsErrorType, CredentialsType } from '../../core/domain/Types';

interface LoginScreenUIProps {
  loading: boolean;
  errors: CredentialsErrorType;
  credentials: CredentialsType;
  handleCredentials: (value: string, field: string) => void;
  navigateToRegisterScreen: () => void;
  tryLogin: () => void;
}

const LoginScreenUI: React.FC<LoginScreenUIProps> = ({ loading, errors, credentials, handleCredentials, navigateToRegisterScreen, tryLogin }) => {
  return (
    <GradientView>
      <ContainerView>
        <ContentView contentCenter>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />
          <CustomTextInput
            value={credentials.email}
            onChange={(value) => handleCredentials(value, 'email')}
            placeholder={'Enter your email'}
            error={errors.email}
          />
          <CustomTextInput
            value={credentials.password}
            onChange={(value) => handleCredentials(value, 'password')}
            placeholder={'Enter your password'}
            error={errors.password || errors.server}
            password
          />
          <CustomButton style={styles.fullWidth} label={'SIGN IN'} onPress={tryLogin} loading={loading} />
          <TouchableOpacity style={styles.createAccountTextContainer} onPress={navigateToRegisterScreen}>
            <Text style={styles.createAccountText}>Don't have an account yet? </Text>
            <Text style={styles.createAccountTextBig}>CREATE NEW HERE</Text>
          </TouchableOpacity>
        </ContentView>
      </ContainerView>
    </GradientView>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginBottom: 50,
    width: 150,
    height: 120,
  },
  createAccountTextContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  createAccountText: {
    ...Font.Regular,
    color: 'white',
    fontSize: 14,
  },
  fullWidth: {
    width: '100%',
  },
  createAccountTextBig: {
    ...Font.Bold,
    color: 'white',
    fontSize: 14,
  },


});

export default LoginScreenUI;
