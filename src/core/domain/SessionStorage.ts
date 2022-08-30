export interface SessionStorage {
  get(): Promise<string | null>;
  store(value: string): void;
  remove(): void;
  hasSession(): Promise<boolean>
}
