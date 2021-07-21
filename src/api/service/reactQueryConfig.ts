import { UseQueryOptions } from 'react-query';
import showLogger from './showLogger';
import { LoggerTypeEnum, LoggerServiceEnum } from './enums';
import { QueryKeyEnum } from '../enums';

function getReactQueryConfig<TResType, TError>(queryKey: QueryKeyEnum): UseQueryOptions<TResType, TError> {
  return {
    onSuccess: (response) => {
      showLogger({
        serviceName: LoggerServiceEnum.REACT_QUERY,
        action: `${queryKey}_SUCCESS`,
        loggerType: LoggerTypeEnum.SUCCESS,
        response,
      });
    },
    onError: (error) => {
      showLogger({
        serviceName: LoggerServiceEnum.REACT_QUERY,
        action: `${queryKey}_ERROR`,
        loggerType: LoggerTypeEnum.FAILURE,
        error,
      });
    },
  };
}

export default getReactQueryConfig;
