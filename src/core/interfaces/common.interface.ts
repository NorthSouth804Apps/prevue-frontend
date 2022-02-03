export type ColorTypes = 'rose' | 'blue' | 'gray' | 'white' | '';

export type SizeTypes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ObjectInterfaceGenerator<T, N> = {
  [K in N as any]: T
}
