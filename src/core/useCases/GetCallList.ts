import { CallService } from '../domain/CallService';
import { Call } from '../domain/Call';

export default class GetCallList {
  private service: CallService;

  constructor(service: CallService) {
    this.service = service;
  }

  async execute(): Promise<Call[]> {
    return await this.service.getCallList();
  }
}
