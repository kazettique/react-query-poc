import { AxiosResponse } from 'axios';
import { LoggerTypeEnum, LoggerServiceEnum } from './enums';
import showLogger from './showLogger';

export function handleSuccess<TResType>(response: AxiosResponse<TResType>, queryKey: string): TResType {
  // showLogger({
  //   serviceName: LoggerServiceEnum.AXIOS,
  //   action: `${queryKey}_SUCCESS`,
  //   loggerType: LoggerTypeEnum.SUCCESS,
  //   response,
  // });

  return response.data;
}

export function handleFailure(error: string, queryKey: string): Promise<never> {
  // showLogger({
  //   serviceName: LoggerServiceEnum.AXIOS,
  //   action: `${queryKey}_FAILURE`,
  //   loggerType: LoggerTypeEnum.FAILURE,
  // });

  return Promise.reject(error);
}
