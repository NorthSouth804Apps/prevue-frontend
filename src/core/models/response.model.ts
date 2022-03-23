export default class ResponseModel<DataModel> {
  success?: boolean;
  message?: string;
  data?: DataModel = {} as any;
  callBack?: Function;
}
