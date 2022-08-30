export class LoginIntent {
  private readonly _status: number = 401;
  private readonly _token: string = 'AAA';
  private readonly _userId: string = 'BBB';
  private readonly _profile: string = 'investor';
  private readonly _companyName: string = '';

  constructor(status: number, token: string, userId: string, profileType: string, companyName: string) {
    this._status = status;
    this._token = token;
    this._userId = userId;
    this._profile = profileType;
    this._companyName = companyName;
  }

  get status(): number {
    return this._status;
  }

  get token(): string {
    return this._token;
  }

  get userId(): string {
    return this._userId;
  }

  get profile(): string {
    return this._profile;
  }

  get companyName(): string | null {
    return this._companyName;
  }
}
