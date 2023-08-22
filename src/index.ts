import axios, { AxiosResponse } from 'axios';
import {
  Activities,
  AuthResponseData,
  GhostfolioApi,
  ImportRequestBody,
} from './types';

const ghostfolioApi: GhostfolioApi = (
  accessToken: string,
  host: string = '127.0.0.1',
  port: number = 3333,
) => {
  let bearerToken: string | undefined = undefined;

  const _getBearerToken = async () => {
    const url = `http://${host}:${port}/api/v1/auth/anonymous`;

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
  };

  const importData = async (requestBody: ImportRequestBody) => {
    const url = `http://${host}:${port}/api/v1/import`;

    if (!bearerToken) bearerToken = await _getBearerToken();

    await axios.post(url, requestBody, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
    });
  };

  const order = async (): Promise<Activities> => {
    const url = `http://${host}:${port}/api/v1/order`;

    if (!bearerToken) bearerToken = await _getBearerToken();

    return (
      await axios.get(url, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      })
    ).data;
  };

  return { importData, order };
};

export default ghostfolioApi;
