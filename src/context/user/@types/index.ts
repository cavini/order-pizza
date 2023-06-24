export enum UserStateStatus {
  IDLE = 'idle',
  ERROR = 'error',
  LOADING = 'loading',
}

export interface Position {
  latitude?: number;
  longitude?: number;
}

export interface UserInitialState {
  username: string;
  status: UserStateStatus;
  position: Position;
  address: string;
  error: undefined | string;
}
