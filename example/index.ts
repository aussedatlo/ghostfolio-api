import GhostfolioApi from '../src';
import { ImportRequestBody } from '../src/types';

const ghost = GhostfolioApi('access-token');

const requestBody: ImportRequestBody = {
  activities: [
    {
      currency: 'USD',
      dataSource: 'YAHOO',
      date: '2021-09-15T00:00:00.000Z',
      fee: 19,
      quantity: 5,
      symbol: 'MSFT',
      type: 'BUY',
      unitPrice: 298.58,
    },
  ],
};

(async () => {
  console.log(await ghost.importData(requestBody));
})();
