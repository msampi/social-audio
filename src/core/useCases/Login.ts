import { CallService } from '../domain/CallService';
import { SessionStorage } from '../domain/SessionStorage';
import { EmptyFieldError } from '../domain/errors/EmptyFieldError';
import { EmailInvalidFormatError } from '../domain/errors/EmailInvalidFormatError';
import { Validator } from '../domain/Validator';
import { CredentialsType, SessionData } from '../domain/Types';
import { LoginIntent } from '../domain/LoginIntent';

export default class Login {
  private service: CallService;
  private sessionStorage: SessionStorage;

  constructor(service: CallService, sessionStorage: SessionStorage) {
    this.service = service;
    this.sessionStorage = sessionStorage;
  }

  async execute(credentials: CredentialsType): Promise<SessionData> {
    this.validate(credentials);
    return await this.tryLogin(credentials);
  }

  private validate = (credentials: CredentialsType) => {
    const validator = new Validator();
    validator.empty(credentials.email, new EmptyFieldError('email'));
    validator.empty(credentials.password, new EmptyFieldError('password'));
    validator.emailFormat(credentials.email, new EmailInvalidFormatError('email'));
  };

  private async tryLogin(credentials: CredentialsType) {
    const response = await this.service.login(credentials);
    await this.saveSession(response);
    return this.sessionData(response);
  }

  private sessionData(response: Record<string, any>): SessionData {
    return {
      profile: response.profile,
      userId: response.userId,
      companyName: response.companyName,
    };
  }

  private async saveSession(response: LoginIntent) {
    await this.sessionStorage.store(response.token);
  }

}
