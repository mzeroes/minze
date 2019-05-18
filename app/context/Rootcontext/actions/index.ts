import { UPDATE_SERVER_STATUS, UPDATE_TOKEN_REGISTERED, RESET_CONTEXT } from './types';

export const updateServerStatus = (onLine: boolean) => ({
  type: UPDATE_SERVER_STATUS,
  payload: onLine ? 'Online' : 'Offline'
});

interface IUpdateTokenPayload {
  idTokenRegistered: boolean;
  authToken: string;
}

export const updateTokenRegistered = (payload: IUpdateTokenPayload) => ({
  type: UPDATE_TOKEN_REGISTERED,
  payload
});

export const resetContext = (payload: boolean) => ({
  type: RESET_CONTEXT,
  payload
});