import { HttpClient } from './HttpClient';
import { CallService } from '../../domain/CallService';
import { LoginIntent } from '../../domain/LoginIntent';
import { CreateCallFormType, CredentialsType, RegisterFormType, UserInCall } from '../../domain/Types';
import { Call } from '../../domain/Call';
import { User } from '../../domain/User';

export class CallHttpService implements CallService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async login(credentials: CredentialsType): Promise<LoginIntent> {
    const data = {
      email: credentials.email,
      password: credentials.password,
    };
    const response = await this.httpClient.post('/login', data);
    return new LoginIntent(200, response.data.authInfo.token, response.data.user._id, response.data.user.profile, response.data.user.companyName);
  }

  async getCallList(): Promise<Call[]> {
    const response = await this.httpClient.get('/calls');
    return this.toCallList(response.data.calls);
  }

  private toCallList(calls: Record<string, any>): Call[] {
    return calls.map((call: Record<string, any>) => this.toCall(call));
  }

  async getCall(id: string): Promise<Call> {
    const response = await this.httpClient.get('/calls/' + id);
    return this.toCall(response.data.call);
  }

  async register(formData: RegisterFormType): Promise<LoginIntent> {
    const data = this.toFormData(formData);
    const response = await this.httpClient.postFormData('/users', data);
    return new LoginIntent(response.status, response.data.authInfo.token, response.data.user._id, response.data.user.profile, response.data.user.companyName);
  }

  private toFormData(formData: RegisterFormType) {
    const data = new FormData();
    data.append('profile', formData.profile);
    data.append('firstname', formData.firstName);
    data.append('lastname', formData.lastName);
    data.append('companyName', formData.companyName);
    data.append('phone', formData.phone);
    data.append('phoneCountry', formData.phoneCountry);
    data.append('phoneCode', formData.phoneCode);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('active', false);
    data.append('investorType', formData.investorType);
    data.append('avatar', formData.avatar);
    return data;
  }

  async createCall(formData: CreateCallFormType, userId: string): Promise<string> {
    const data = {
      userId,
      name: formData.name,
      companyName: formData.companyName,
      pdfUrl: formData.pdf,
      date: formData.date,
    };
    const response = await this.httpClient.post('/calls', data);
    return response.data.call.callId;
  }

  async getCompanyCallList(companyId: string): Promise<Call[]> {
    const response = await this.httpClient.get('/calls/company/' + companyId);
    return this.toCallList(response.data.calls);
  }

  async getUser(id: string): Promise<User> {
    const response = await this.httpClient.get('/users/' + id);
    return this.toUserEntity(response);
  }

  async updateUser(formData: RegisterFormType, id: string): Promise<User> {
    const data = this.toUpdateUserFormData(formData);
    const response = await this.httpClient.patchFormData('/users/' + id, data);
    return this.toUserEntity(response);
  }

  private toUserEntity(response) {
    return new User(response.data.user._id, response.data.user.profile, response.data.user.firstname, response.data.user.lastname, response.data.user.companyName, response.data.user.email, response.data.user.phone, response.data.user.phoneCode, response.data.user.phoneCountry, response.data.user.avatar, response.data.user.investorType, true);
  }

  private toUpdateUserFormData(formData: RegisterFormType) {
    const data = new FormData();
    data.append('firstname', formData.firstName);
    data.append('lastname', formData.lastName);
    data.append('companyName', formData.companyName);
    data.append('phone', formData.phone);
    data.append('phoneCountry', formData.phoneCountry);
    data.append('phoneCode', formData.phoneCode);
    if (formData.password.length > 0) { data.append('password', formData.password); }
    if (formData.avatar.name.length > 0) { data.append('avatar', formData.avatar); }
    return data;
  }

  async addUserToCall(userId: string, callId: string): Promise<void> {
    const data = {
      userId,
      id: callId,
    };
    await this.httpClient.post('/calls/addAudience', data);
  }

  async removeUserFromCall(userId: string, callId: string): Promise<void> {
    const data = {
      userId,
      id: callId,
    };
    await this.httpClient.post('/calls/removeUser', data);
  }

  async getRaiseHandCallSpeakers(callId: string): Promise<UserInCall[]> {
    const response = await this.httpClient.get('/calls/raisedHandSpeakers/' + callId);
    return this.toUserInCallList(response.data.callRaisedHandSpeakerList);
  }

  async raiseHand(callId: string, userId: string, raise: boolean): Promise<void> {
    const data = {
      userId,
      id: callId,
      raise,
    };
    await this.httpClient.post('/calls/addHandSpeaker', data);
  }

  async getCallUserList(callId: string): Promise<UserInCall[]> {
    const response = await this.httpClient.get('/calls/userList/' + callId);
    return this.toUserInCallList(response.data.callUserList);
  }

  async addUserAsAudience(callId: string, userId: string): Promise<Call> {
    const data = {
      userId,
      id: callId,
    };
    const response = await this.httpClient.post('/calls/addAudience', data);
    return this.toCall(response.data.call);
  }

  private toCall(call: Record<string, any>): Call {
    return new Call(
      call._id,
      call.name,
      call.companyName,
      call.date,
      null,
      this.toUserInCallList(call.audience),
      this.toUserInCallList(call.speakers),
      call.callId,
      call.userId,
      this.toUserInCallOrNUll(call.speakerId),
      call.status,
      'cuti-2',
      '007eJxTYAgJZvZbI9x4cHUbw757m5kO5Ans3PMv/8tdPsUP7owrVK4pMKQmmhmbGxknplqaW5oYJhlbpKUaWBqbGiebmadZGJkZmwhzJm9L4Up+XdzBzMgAgSA+G0NyaUmmrhEDAwBcpx/C',
    );
  }

  private toUserInCallList(users: Record<string, any>): UserInCall[] {
    return users.map((user: Record<string, any>) => {
      return {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        avatar: user.avatar,
        role: user.role ? user.role : 'audience',
      };
    });
  }

  private toUserInCallOrNUll(user: Record<string, any>): UserInCall | null{
    if (user) {
      return {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        avatar: user.avatar,
        role: user.role ? user.role : 'audience',
      };
    }
    return null;
  }

  async addUserAsSpeaker(callId: string, userId: string): Promise<Call> {
    const data = {
      userId,
      id: callId,
    };
    const response = await this.httpClient.post('/calls/addSpeaker', data);
    return this.toCall(response.data.call);
  }

  async allowSpeakUser(callId: string, userId: string): Promise<Call> {
    const data = {
      userId,
      id: callId,
    };
    const response = await this.httpClient.post('/calls/setSpeaker', data);
    return this.toCall(response.data.call);
  }

  async setCallStatus(id: string, status: number): Promise<Call> {
    const data = {
      id,
      status,
    };
    const response = await this.httpClient.post('/calls/setStatus', data);
    return this.toCall(response.data.call);
  }

}

