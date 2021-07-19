import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';
import showLogger from './showLogger';
import handleSuccess from './handleSuccess';
import handleFailure from './handleFailure';
import { LoggerTypeEnum } from './enums';

const defaultConfig: AxiosRequestConfig = {
  url: '',
  method: 'GET',
  params: {},
  baseURL: '',
  // name: 'CHANGE_YOUR_SERVICE_NAME_HERE',
  // currentEnv: process.env.NODE_ENV,
  // transformResponse: defaultNormalizer,
  // transformRequest: defaultNormalizer,
  // withAccessToken: true,
};

// type ServiceReturnType = () => AxiosInstance;

function getAxiosPromise<ResponseDataType>(
  axiosConfig: AxiosRequestConfig,
  queryKey: string
): AxiosPromise<ResponseDataType> {
  const apiConfig: AxiosRequestConfig = { ...defaultConfig, ...axiosConfig };

  // const { name } = serviceConfig;

  const callAPI = (): AxiosPromise<ResponseDataType> => {
    const axiosInstance: AxiosInstance = axios.create(apiConfig);

    // showLogger(`${name}_REQUEST`, LoggerTypeEnum.INFO);
    showLogger({ action: `${queryKey}_REQUEST`, loggerType: LoggerTypeEnum.INFO });

    return axiosInstance(apiConfig)
      .then((response) => handleSuccess(response, queryKey))
      .catch((error: string) => handleFailure(error, queryKey));
  };

  return callAPI();
}

export default getAxiosPromise;

// * Ref: https://levelup.gitconnected.com/enhance-your-http-request-with-axios-and-typescript-f52a6c6c2c8e
// abstract class HttpClient {
//   protected readonly instance: AxiosInstance;

//   public constructor(baseURL: string) {
//     this.instance = axios.create({
//       baseURL,
//     });

//     this.initializeResponseInterceptor();
//   }

//   private initializeResponseInterceptor = () => {
//     this.instance.interceptors.response.use(this.handleResponse, this.handleError);
//   };

//   private handleResponse = ({ data }: AxiosResponse) => data;

//   protected handleError = (error: any) => Promise.reject(error);
// }
