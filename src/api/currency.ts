const CURRENCY_BASE_URL = 'https://www.cbr-xml-daily.ru/latest.js';

export const UAN = 'CNY';
export const KZT = 'KZT';

export const fetchCurrency = async (): Promise<any> => {
  const response = await fetch(CURRENCY_BASE_URL);
  const result = response.json();
  return result;
};
