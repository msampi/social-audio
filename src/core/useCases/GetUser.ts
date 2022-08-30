import { CallService } from '../domain/CallService';
import { User } from '../domain/User';

export default class GetUser {
  private service: CallService;

  constructor(service: CallService) {
    this.service = service;
  }

  async execute(id: string): Promise<User> {
    return await this.service.getUser(id);
  }
}
