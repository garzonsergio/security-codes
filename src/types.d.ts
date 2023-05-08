export interface AppState {
  state: {
    error: boolean;
    loading: boolean;
    value: string | number;
    deleted: boolean;
    confirmed: boolean;
  };
}