export const initialRegisterFormValues = {
  companyName: '',
  firstName: '',
  lastName: '',
  profile: 'company',
  investorType: 'individual',
  phone: '',
  phoneCountry: 'US',
  phoneCode: '+01',
  email: '',
  password: '',
  confirmPassword: '',
  avatar: {
    uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    name: '',
    type: '',
  },
};

export const initialCredentialsValues = {
  email: 'jwallace@bancolombia.com',
  password: '12345678',
};

export const initialCredentialsErrorValues = {
  email: '',
  password: '',
  server: '',
};

export const initialCreateCallFormValues = {
  name: '',
  companyName: '',
  date: new Date(),
  pdf: '',
};

export const userProfiles = [
  { label: 'Investor', value: 'investor' },
  { label: 'Company', value: 'company' },
];

export const investorTypes = [
  { label: 'Individual', value: 'individual' },
  { label: 'Institutional', value: 'institutional' },
  { label: 'RIA', value: 'ria' },
];

