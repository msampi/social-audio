import { UserInCall } from './Types';

export class Call {
  private readonly _id: string = 'hbduhbfh';
  private readonly _callName: string = 'Conference call name';
  private readonly _date: string = '2022-10-12';
  private readonly _companyName: string = 'Bancolombia';
  private readonly _recordFileUrl: string | null = null ;
  private readonly _audience: UserInCall[] = [];
  private readonly _speakers: UserInCall[] = [];
  private readonly _callId: string = 'jsgdfjhgsd';
  private readonly _userId: string = '12345';
  private readonly _speaker: UserInCall | null = { id: '1', avatar: '', firstname: '', lastname: '', role: 'speaker' };
  private readonly _status: number = 0;
  private readonly _channelName: string = 'cuti';
  private readonly _channelToken: string = 'channel token';
  private _agoraAppID: string = 'ea63723ae97941b38fe09353c67f8263';

  constructor(id:string, callName:string, companyName: string, date:string, recordFile: string | null, audience: UserInCall[], speakers: UserInCall[], callId: string, userId: string, speaker: UserInCall | null, status: number, channelName: string, channelToken: string) {
    this._id = id;
    this._callName = callName;
    this._companyName = companyName;
    this._date = date;
    this._recordFileUrl = recordFile;
    this._audience = audience;
    this._speakers = speakers;
    this._callId = callId;
    this._userId = userId;
    this._speaker = speaker;
    this._status = status;
    this._channelName = channelName;
    this._channelToken = channelToken;
  }

  get id(): string {
    return this._id;
  }

  get date(): string {
    return this._date;
  }
  get companyName(): string {
    return this._companyName;
  }

  get callName(): string {
    return this._callName;
  }

  get recordFileUrl(): string | null {
    return this._recordFileUrl;
  }

  get speakers(): UserInCall[] {
    return this._speakers;
  }

  get audience(): UserInCall[] {
    return this._audience;
  }

  get usersLength(): number {
    return this._audience.length + this._speakers.length;
  }

  get users(): UserInCall[] {
    return [...this._speakers, ...this._audience];
  }

  get callId(): string {
    return this._callId;
  }

  get userId(): string {
    return this._userId;
  }

  get speaker(): UserInCall | null{
    return this._speaker;
  }

  get status(): string {
    switch (this._status){
      case 0: return 'notStarted';
      case 1: return 'started';
      case 2: return 'paused';
      case 3: return 'finished';
      default: return 'notStarted';
    }
  }

  isSpeaker(userId: string): boolean {
    return !!(this._speaker && this._speaker.id === userId);
  }

  get channelToken(): string {
    return this._channelToken;
  }

  get channelName(): string {
    return this._channelName;
  }
  get agoraAppID(): string {
    return this._agoraAppID;
  }

}
