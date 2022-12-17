import { DB_PREFIX, DB_USER, DB_HOST, DB_PASSWORD, DB_QUERY_STRING } from '@config';
import { ConnectOptions } from 'mongoose';

interface IDBConnection {
  url: string;
  options: ConnectOptions;
}

export const dbConnection: IDBConnection = {
  url: `${DB_PREFIX}://${DB_USER}:${encodeURIComponent(DB_PASSWORD)}@${DB_HOST}/?${DB_QUERY_STRING}`,
  options: {},
};
