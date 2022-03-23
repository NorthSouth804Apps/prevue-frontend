export type ColorTypes = 'rose' | 'blue' | 'gray' | 'white' | '';

export type SizeTypes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ObjectInterfaceGenerator<T, N> = {
  [K in N as any]: T;
};

export type QueryParamsType = {
  [N in string]: any;
};

export enum StatusValues {
  suspended = 'SUSPENDED',
  active = 'ACTIVED',
  blocked = 'BLOCKED',
  all = 'ALL',
  delete = 'DELETED',
  ignore = 'IGNORE',
  warning = 'WARNING',
}

export type StatusTypes = keyof typeof StatusValues;

export type StatusValuesType =
  | 'WARNING'
  | 'DELETED'
  | 'SUSPENDED'
  | 'BLOCKED'
  | 'IGNORE';

export interface Dialog {
  header: string;
  message: string;
}
export type IDialogOptions = {
  [N in StatusValuesType]?: Dialog | ((status?: boolean) => Dialog);
};
