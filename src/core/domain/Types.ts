export interface RegisterFormType {
  companyName: string | null;
  firstName: string;
  lastName: string;
  profile: string,
  investorType: string | null,
  phone: string;
  phoneCountry: string;
  phoneCode: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: ImageFileType;
}

export type RadioButtonsType = {
  label: string;
  value: string;
};

export type CredentialsType = {
  email: string;
  password: string;
};

export type CredentialsErrorType = {
  email: string;
  password: string;
  server: string;
};

export type CreateCallFormType = {
  name: string;
  companyName: string;
  date: Date;
  pdf: string;
};

export type ImageFileType = {
  uri: string;
  name: string;
  type: string;
};

export type ImageUrlType = {
  uri: string
};

export type UserInCall = {
  id: string;
  firstname: string;
  lastname: string;
  avatar: string;
  role: 'audience' | 'speaker'
};

export type SessionData = {
  profile: 'investor' | 'company',
  userId: string,
  companyName: string,
};


