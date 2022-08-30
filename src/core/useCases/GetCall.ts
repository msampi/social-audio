import { CallService } from '../domain/CallService';
import { Call } from '../domain/Call';

export default class GetCall {
  private service: CallService;

  constructor(service: CallService) {
    this.service = service;
  }

  async execute(id: string): Promise<Call> {
    return await this.service.getCall(id);
  }
}
