export class User {
  private readonly _id: string = 'hbduhbfh';
  private readonly _profile: string = 'company';
  private readonly _companyName: string | null = 'Bancolombia';
  private readonly _firstname: string = 'Conference call name';
  private readonly _lastname: string = '2022-10-12';
  private readonly _phone: string = '12:45';
  private readonly _phoneCode: string = '01';
  private readonly _phoneCountry: string = 'US';
  private readonly _email: string  = 'am';
  private readonly _avatar: string | null = null;
  private readonly _investorType: string | null;
  private readonly _active: boolean;

  constructor(id:string, profile: string, firstName:string, lastName:string, companyName: string | null, email:string, phone:string, phoneCode: string, phoneCountry: string, avatar:string | null, investorType: string | null, active: boolean ) {
    this._id = id;
    this._profile = profile;
    this._firstname = firstName;
    this._lastname = lastName;
    this._companyName = companyName;
    this._phone = phone;
    this._phoneCode = phoneCode;
    this._phoneCountry = phoneCountry;
    this._email = email;
    this._avatar = avatar;
    this._investorType = investorType;
    this._active = active;
  }

  get id(): string {
    return this._id;
  }

  get profile(): string {
    return this._profile;
  }

  get firstname(): string {
    return this._firstname;
  }

  get lastname(): string {
    return this._lastname;
  }

  get companyName(): string | null {
    return this._companyName;
  }

  get phone(): string {
    return this._phone;
  }

  get phoneCode(): string {
    return this._phoneCode;
  }

  get phoneCountry(): string {
    return this._phoneCountry;
  }

  get email(): string {
    return this._email;
  }

  get avatar(): string | null {
    return this._avatar;
  }

  get investorType(): string | null {
    return this._investorType;
  }

  get active(): boolean {
    return this._active;
  }

}
