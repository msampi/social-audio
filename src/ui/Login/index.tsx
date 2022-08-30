import React, { useContext, useState } from 'react';
import LoginScreenUI from './ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CredentialsErrorType, CredentialsType } from '~core/domain/Types';
import Login from '~core/useCases/Login';
import { callService, sessionStorage } from '~core/infrastructure/instances';
import { initialCredentialsErrorValues, initialCredentialsValues } from '../../core/domain/InitialValues';
import { EmptyFieldError } from '~core/domain/errors/EmptyFieldError';
import { NotFoundError } from '~core/infrastructure/http/NetworkFound';
import { AppContext } from '../AppProvider';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [credentials, setCredentials] = useState<CredentialsType>(initialCredentialsValues);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<CredentialsErrorType>(initialCredentialsErrorValues);
  const login = new Login(callService, sessionStorage);
  const { setCompanyName, setUserId, setProfile  } = useContext(AppContext);

  const navigateToRegisterScreen = () => { navigation.navigate('Register');};

  const tryLogin = async () => {
    setLoading(true);
    try {
      const sessionData = await login.execute(credentials);
      setUserId(sessionData.userId);
      setCompanyName(sessionData.companyName);
      setProfile(sessionData.profile);
      navigation.navigate('CallList');
    } catch (e: any) {
      handleErrors(e);
    }
    setLoading(false);
  };

  const handleErrors = (e: any) => {
    if (e instanceof NotFoundError) { setErrors({ ...errors, server: 'Credentials does not match with any user.' });}
    else if (e instanceof EmptyFieldError) { setErrors({ ...errors, [e.fieldName]: e.message });}
    else {setErrors({ ...errors, server: e.message });}
  };

  const handleCredentials = (value: string, field: string) => {
    resetErrors();
    setCredentials({ ...credentials, [field]: value });
  };

  const resetErrors = () => setErrors(initialCredentialsErrorValues);

  return (
    <LoginScreenUI
      loading={loading}
      errors={errors}
      credentials={credentials}
      handleCredentials={handleCredentials}
      navigateToRegisterScreen={navigateToRegisterScreen}
      tryLogin={tryLogin}
    />
  );
};

export default LoginScreen;
