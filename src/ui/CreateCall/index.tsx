import React, { useContext, useEffect, useState } from 'react';
import CreateCallScreenUI from './ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CreateCallFormType } from '~core/domain/Types';
import { initialCreateCallFormValues } from '~core/domain/InitialValues';
import { EmptyFieldError } from '~core/domain/errors/EmptyFieldError';
import CreateCall from '~core/useCases/CreateCall';
import { callService } from '~core/infrastructure/instances';
import { AppContext } from '../AppProvider';


const CreateCallScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [formData, setFormData] = useState<CreateCallFormType>(initialCreateCallFormValues);
  const [formErrors, setFormErrors] = useState<CreateCallFormType>(initialCreateCallFormValues);
  const createCallUC = new CreateCall(callService);
  const { companyName, userId } = useContext(AppContext);

  const handleFormData = (value: string | Date, field: string) => {
    resetErrors();
    setFormData({ ...formData, [field]: value });
  };

  useEffect(() => {
    setFormData({ ...formData, companyName: companyName! });
  }, []);

  const resetErrors = () => setFormErrors(initialCreateCallFormValues);

  const tryCreateCall = async () => {
    try {
      const callId = await createCallUC.execute(formData, userId!);
      navigation.navigate('CreateCallResponse', { params: { callId } });
    } catch (e) {
      handleErrors(e);
    }
  };

  const handleErrors = (e: any) => {
    if (e instanceof EmptyFieldError) { setFormErrors({ ...formErrors, [e.fieldName]: e.message }); }
    else {
      console.log(e);
    }
  };

  return (
    <CreateCallScreenUI
      formData={formData}
      errors={formErrors}
      handleFormData={handleFormData}
      onPressCreate={tryCreateCall}
    />
  );
};

export default CreateCallScreen;
