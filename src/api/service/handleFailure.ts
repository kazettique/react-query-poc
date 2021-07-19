import showLogger from './showLogger';
import { LoggerTypeEnum } from './enums';

// type ServiceConfigType = {
//   name: string;
// };

function handleFailure(error: string, queryKey: string): Error {
  showLogger({ action: `${queryKey}_FAILURE`, loggerType: LoggerTypeEnum.FAILURE });

  throw new Error(error);
}

export default handleFailure;
