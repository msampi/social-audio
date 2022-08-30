import { CallService } from '../domain/CallService';
import { CreateCallFormType } from '../domain/Types';
import { EmptyFieldError } from '../domain/errors/EmptyFieldError';
import { Validator } from '../domain/Validator';

export default class CreateCall {
  private service: CallService;

  constructor(service: CallService) {
    this.service = service;
  }

  async execute(formData: CreateCallFormType, userId: string): Promise<string> {
    const validator = new Validator();
    validator.empty(formData.name, new EmptyFieldError('name'));
    return await this.service.createCall(formData, userId);
  }
}
