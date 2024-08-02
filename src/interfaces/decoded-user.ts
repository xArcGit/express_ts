/**
 * @description Interface for decoded user
 */
export default interface DecodedUser {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}
