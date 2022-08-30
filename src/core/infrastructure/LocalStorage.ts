import { SessionStorage } from '../domain/SessionStorage';
import AsyncStorage from '@react-native-community/async-storage';

const TOKEN = 'CUTI_LOCAL_TOKEN';

export class LocalStorage implements SessionStorage {
  async get(): Promise<string | null> {
    return await AsyncStorage.getItem(TOKEN);
  }

  async store(value: string): Promise<void> {
    await AsyncStorage.setItem(TOKEN, value);
  }

  async remove(): Promise<void> {
    await AsyncStorage.removeItem(TOKEN);
  }

  async hasSession(): Promise<boolean> {
    const token = await AsyncStorage.getItem(TOKEN);
    return !!token;
  }
}
