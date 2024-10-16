import { DecodedToken } from 'src/type/userType';

export const decodeJWT = (token: string): DecodedToken | null => {
  try {
    const payloadBase64 = token.split('.')[1];
    if (!payloadBase64) {
      throw new Error('Invalid token format');
    }
    const decodedPayload = atob(payloadBase64);
    return JSON.parse(decodedPayload) as DecodedToken;
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};
