export type ColorTypes = 'rose' | 'blue' | 'gray' | 'white' | '';

export type SizeTypes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ObjectInterfaceGenerator<T, N> = {
  [K in N as any]: T
}

export type QueryParamsType = {
  [N in string]: string;
}

export enum StatusValues {
  suspended = 'SUSPENDED',
  active = 'SUSPENDED',
  blocked = 'BLOCKED',
  all = 'ALL',
  delete = 'DELETED',
  warning = 'WARNING',
}

export type StatusTypes = keyof typeof StatusValues;


