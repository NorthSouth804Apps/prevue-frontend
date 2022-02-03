import { SizeTypes } from './common.interface';

export interface IIConSize {
  width: string;
  height?: string;
  viewBox: string;
}

export type IIconSizePresets = {
  [N in SizeTypes]: IIConSize;
};

export type IconTypes = '' | 'campaigns' |
'checkbox-unchecked' |
'campaigns-active' |
'checkbox-checked' |
'calendar' |
'chevron-down' |
'clients-active' |
'chevron-right' |
'delete' |
'add' |
'emoji' |
'home' |
'exit' |
'home-active' |
'incoming-message' |
'link' |
'incoming' |
'lists' |
'messages' |
'messages-active' |
'new' |
'new-message' |
'online' |
'lists-active' |
'outgoing' |
'messages-icon' |
'outgoing-message' |
'radio-not-selected' |
'search' |
'select-script' |
'edit' |
'select-time' |
'settings' |
'settings-active' |
'textsurge-login-logo' |
'users' |
'user-placeholder' |
'users-active' |
'clients' |
'view' |
'send-message' |
'dollar-sign' |
'approve' |
'assign' |
'user-placeholder' |
'user-placeholder-online' |
'radio-selected';
