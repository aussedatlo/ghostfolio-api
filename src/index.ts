import axios, { AxiosResponse } from 'axios';
import { AuthResponseData, ImportRequestBody } from './types';

const GhostfolioApi = (
  accessToken: string,
  host: string = '127.0.0.1',
  port: number = 3333,
) => {
  let bearerToken: string | undefined = undefined;

  const _getBearerToken = async () => {
    const url = `http://${host}:${port}/api/v1/auth/anonymous`;

    try {
      const response: AxiosResponse<AuthResponseData> = await axios.post(
        url,
        `accessToken=${accessToken}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      return response.data.authToken;
    } catch (error: any) {
      throw error;
    }
  };

  const importData = async (requestBody: ImportRequestBody) => {
    if (!bearerToken) bearerToken = await _getBearerToken();

    const url = `http://${host}:${port}/api/v1/import`;

    try {
      const response: AxiosResponse = await axios.post(url, requestBody, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (error: any) {
      throw error;
    }
  };

  return { importData };
};

export default GhostfolioApi;
