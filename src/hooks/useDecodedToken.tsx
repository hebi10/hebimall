import { useState, useEffect } from 'react';
import { DecodedToken } from 'src/type/userType';

export const decodeJWT = (token: string): DecodedToken | null => {
  try {
    const payloadBase64 = token.split('.')[1];
    if (!payloadBase64) {
      throw new Error('Invalid token format');
    }
    const decodedPayload = atob(payloadBase64);
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};

const useDecodedToken = (): DecodedToken | null => {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = decodeJWT(token);
      if (decoded) {
        if (decoded.exp * 1000 > Date.now()) {
          setDecodedToken(decoded);
        } else {
          console.warn('Token is expired');
          localStorage.removeItem('token');
        }
      }
    }
  }, []);

  return decodedToken;
};

export default useDecodedToken;
