import { CallService } from '../domain/CallService';
import { UserInCall } from '../domain/Types';

export default class GetCallUserList {
  private service: CallService;

  constructor(service: CallService) {
    this.service = service;
  }

  async execute(callId: string): Promise<UserInCall[]> {
    return await this.service.getCallUserList(callId);
  }
}
