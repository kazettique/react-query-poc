/* eslint-disable no-console */
import { LoggerTypeEnum } from './enums';

type LogStyleType = {
  theme: 'SUCCESS' | 'DANGER' | 'ALERT';
};

type ConsoleLogStyleType = {
  titleBackground: string;
  titleColor: string;
  messageBackground: string;
  messageColor: string;
};

type LoggerParamsType<ResponseType> = {
  action: string;
  response?: ResponseType;
  loggerType?: LoggerTypeEnum;
};

function showLogger<ResponseType>(params: LoggerParamsType<ResponseType>): void {
  const { action, response, loggerType } = params;

  const CONSOLE_LOG_STYLE = 'font-weight: bold; color: #B5B5B5;';

  switch (loggerType) {
    case LoggerTypeEnum.SUCCESS:
      console.log(
        `%c API STATUS %c ${action}`,
        'background:#35495e; padding: 1px 3px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:#41b883; padding: 1px 3px; border-radius: 0 3px 3px 0;  color: #fff'
      );
      break;
    case LoggerTypeEnum.FAILURE:
      console.log(
        `%c API STATUS %c ${action}`,
        'background:#35495e; padding: 1px 3px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:#BF0000; padding: 1px 3px; border-radius: 0 3px 3px 0;  color: #fff'
      );
      break;
    case LoggerTypeEnum.INFO:
      console.log(
        `%c API STATUS %c ${action}`,
        'background:#35495e; padding: 1px 3px; border-radius: 3px 0 0 3px;  color: #fff',
        'background: #4C7BA5; padding: 1px 3px; border-radius: 0 3px 3px 0;  color: #fff'
      );
      break;
    default:
      console.log('default logger message');
  }

  // console.groupCollapsed(`API STATUS: ${action}`);

  // console.log('%c logger response', CONSOLE_LOG_STYLE, response);

  // console.groupEnd();
}

export default showLogger;
