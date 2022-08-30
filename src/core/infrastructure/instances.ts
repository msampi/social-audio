import { HttpClient } from './http/HttpClient';
import { CallHttpService } from './http/CallHttpService';
import { LocalStorage } from './LocalStorage';

export const sessionStorage = new LocalStorage();
export const httpClient = new HttpClient(sessionStorage);
export const callService = new CallHttpService(httpClient);
