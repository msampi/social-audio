export class EmptyErrorMessage {
  private _fieldname: string = '';

  constructor(message: string) {
    this._fieldname = message;
  }

  toString(): string {
    const result = this._fieldname.replace(/([A-Z])/g, ' $1');
    const msg = result.charAt(0).toUpperCase() + result.slice(1);
    return 'You must complete the field ' + msg.toLowerCase();
  }
}
