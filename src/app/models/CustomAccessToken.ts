export class CustomAccessToken{
  public accessToken!: string;
  public tokenType!: string;
  public refreshToken!: string;
  public expiresIn!: number;
  public scope!: string;

  constructor() {
  }
}
