import { LoggerServiceEnum, LoggerTypeEnum } from './enums';

export type LoggerParamsType<TResType> = {
  serviceName?: LoggerServiceEnum;
  action: string;
  response?: TResType;
  error?: any;
  loggerType?: LoggerTypeEnum;
};

export type ConsoleLogStyleType = {
  titleBackground: string;
  titleColor: string;
  messageBackground: string;
  messageColor: string;
};
