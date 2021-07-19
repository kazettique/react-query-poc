import { AxiosResponse } from 'axios';
import { LoggerTypeEnum } from './enums';
import showLogger from './showLogger';

// type ServiceConfigType = {
//   name: string;
// };

function handleSuccess<ResponseDataType>(
  response: AxiosResponse<ResponseDataType>,
  queryKey: string
): ResponseDataType {
  showLogger({ action: `${queryKey}_SUCCESS`, loggerType: LoggerTypeEnum.SUCCESS, response });
  return response.data;
}

export default handleSuccess;
