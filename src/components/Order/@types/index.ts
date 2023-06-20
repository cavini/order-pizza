import { Params } from 'react-router-dom';

export interface ParamsParams extends Params {
  orderId?: string | undefined;
}

export interface LoaderParams {
  params: {
    [key: string]: string | undefined;
  };
}
