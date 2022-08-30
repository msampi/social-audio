import { LoginIntent } from './LoginIntent';
import { CreateCallFormType, CredentialsType, RegisterFormType, UserInCall } from './Types';
import { Call } from './Call';
import { User } from './User';

export interface CallService {
  login(credentials: CredentialsType): Promise<LoginIntent>;
  register(formData: RegisterFormType): Promise<LoginIntent>;
  getCallList(): Promise<Call[]>;
  getCall(id: string): Promise<Call>;
  createCall(formData: CreateCallFormType, userId: string): Promise<string>;
  getCompanyCallList(companyId: string): Promise<Call[]>;
  addUserToCall(userId: string, callId: string): Promise<void>;
  getUser(id: string): Promise<User>;
  updateUser(formData: RegisterFormType, id: string): Promise<User>;
  removeUserFromCall(userId: string, callId: string): Promise<void>;
  getRaiseHandCallSpeakers(callId: string): Promise<UserInCall[]>;
  raiseHand(callId: string, userId: string, raise: boolean): Promise<void>;
  addUserAsAudience(callId: string, userId: string): Promise<Call>;
  getCallUserList(callId: string): Promise<UserInCall[]>;
  addUserAsSpeaker(callId: string, userId: string): Promise<Call>;
  allowSpeakUser(callId: string, userId: string): Promise<Call>;
  setCallStatus(id: string, status: number): Promise<Call>;
}
