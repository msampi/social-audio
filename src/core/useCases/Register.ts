import { Validator } from '../domain/Validator';
import { EmptyFieldError } from '../domain/errors/EmptyFieldError';
import { CallService } from '../domain/CallService';
import { RegisterFormType, SessionData } from '../domain/Types';
import { LoginIntent } from '../domain/LoginIntent';
import { EmailInvalidFormatError } from '../domain/errors/EmailInvalidFormatError';
import { PasswordsNotMatchError } from '../domain/errors/PasswordsNotMatchError';
import { SessionStorage } from '../domain/SessionStorage';

export default class Register {
  private service: CallService;
  private sessionStorage: SessionStorage;

  constructor(service: CallService, sessionStorage) {
    this.service = service;
    this.sessionStorage = sessionStorage;
  }

  async execute(formData: RegisterFormType): Promise<SessionData> {
    const validator = new Validator();
    this.validate(validator, formData);
    const response = await this.service.register(formData);
    await this.saveSession(response);
    return this.sessionData(response);
  }

  private validate(validator: Validator, formData: RegisterFormType) {
    this.validateCompany(formData, validator);
    validator.empty(formData.firstName, new EmptyFieldError('firstName'));
    validator.empty(formData.lastName, new EmptyFieldError('lastName'));
    validator.empty(formData.phone, new EmptyFieldError('phone'));
    validator.empty(formData.email, new EmptyFieldError('email'));
    validator.emailFormat(formData.email, new EmailInvalidFormatError('email'));
    validator.empty(formData.password, new EmptyFieldError('password'));
    validator.empty(formData.confirmPassword, new EmptyFieldError('confirmPassword'));
    validator.notEqualFields(formData.password, formData.confirmPassword, new PasswordsNotMatchError('confirmPassword'));
  }

  private validateCompany(formData: RegisterFormType, validator: Validator) {
    if (formData.profile === 'company') {
      validator.empty(formData.companyName!, new EmptyFieldError('companyName'));
    }
  }

  private async saveSession(response: LoginIntent) {
    await this.sessionStorage.store(response.token);
  }

  private sessionData(response: Record<string, any>): SessionData {
    return {
      profile: response.profile,
      userId: response.userId,
      companyName: response.companyName,
    };
  }

}
