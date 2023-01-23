export interface LoginState {
  email: string | null;
  password: string | null;
  isSubmitted: boolean;
  isError: boolean;
}
