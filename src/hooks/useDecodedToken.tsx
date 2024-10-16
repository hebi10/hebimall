import { useState, useEffect } from 'react';
import { DecodedToken } from 'src/type/userType';
import { decodeJWT } from 'src/utils/decodeJWT';

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
