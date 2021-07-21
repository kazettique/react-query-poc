/* eslint-disable no-console */
import { LoggerTypeEnum, LoggerServiceEnum } from './enums';
import { LoggerParamsType, ConsoleLogStyleType } from './types';

const successStyle: ConsoleLogStyleType = {
  titleBackground: '#35495e',
  titleColor: '#ffffff',
  messageBackground: '#41b883',
  messageColor: '#ffffff',
};

const failureStyle: ConsoleLogStyleType = {
  titleBackground: '#35495e',
  titleColor: '#ffffff',
  messageBackground: '#BF0000',
  messageColor: '#ffffff',
};

const infoStyle: ConsoleLogStyleType = {
  titleBackground: '#35495e',
  titleColor: '#ffffff',
  messageBackground: '#4C7BA5',
  messageColor: '#ffffff',
};

const defaultStyle: ConsoleLogStyleType = {
  titleBackground: '#35495e',
  titleColor: '#ffffff',
  messageBackground: 'orange',
  messageColor: '#ffffff',
};

function showLogger<TResType>(params: LoggerParamsType<TResType>): void {
  const {
    serviceName = LoggerServiceEnum.DEFAULT,
    action,
    response,
    error,
    loggerType = LoggerTypeEnum.DEFAULT,
  } = params;

  switch (loggerType) {
    case LoggerTypeEnum.SUCCESS:
      console.log(
        `%c ${serviceName} %c ${action}`,
        `background:${successStyle.titleBackground}; padding: 1px 3px; border-radius: 3px 0 0 3px;  color: ${successStyle.titleColor}`,
        `background:${successStyle.messageBackground}; padding: 1px 3px; border-radius: 0 3px 3px 0;  color: ${successStyle.titleColor}`
      );
      console.log('response: ', response);
      break;
    case LoggerTypeEnum.FAILURE:
      console.log(
        `%c ${serviceName} %c ${action}`,
        `background:${failureStyle.titleBackground}; padding: 1px 3px; border-radius: 3px 0 0 3px;  color: ${failureStyle.titleColor}`,
        `background:${failureStyle.messageBackground}; padding: 1px 3px; border-radius: 0 3px 3px 0;  color: ${failureStyle.titleColor}`
      );
      console.log('error: ', error);
      break;
    case LoggerTypeEnum.INFO:
      console.log(
        `%c ${serviceName} %c ${action}`,
        `background:${infoStyle.titleBackground}; padding: 1px 3px; border-radius: 3px 0 0 3px;  color: ${infoStyle.titleColor}`,
        `background:${infoStyle.messageBackground}; padding: 1px 3px; border-radius: 0 3px 3px 0;  color: ${infoStyle.titleColor}`
      );
      break;
    case LoggerTypeEnum.DEFAULT:
    default:
      console.log(
        `%c ${serviceName} %c ${action}`,
        `background:${defaultStyle.titleBackground}; padding: 1px 3px; border-radius: 3px 0 0 3px;  color: ${defaultStyle.titleColor}`,
        `background:${defaultStyle.messageBackground}; padding: 1px 3px; border-radius: 0 3px 3px 0;  color: ${defaultStyle.titleColor}`
      );
  }

  // console.groupCollapsed(`API STATUS: ${action}`);

  // console.log('%c logger response', CONSOLE_LOG_STYLE, response);

  // console.groupEnd();
}

export default showLogger;
