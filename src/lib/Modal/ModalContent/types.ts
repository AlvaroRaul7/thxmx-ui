import { ModalSize } from '../types';

interface ModalContentAction {
  label?: string;
  onClick?: () => void;
}

export interface ModalContentProps {
  title: string;
  size?: ModalSize;
  content: string;
  confirm?: ModalContentAction;
  cancel?: ModalContentAction;
}

export const THXMX_MODAL_TITLE_FONT_SIZE = {
  sm: 28,
  m: 38,
  full: 52,
};

export const THXMX_MODAL_CONTENT_FONT_SIZE = {
  sm: 15,
  m: 21,
  full: 32,
};

export const SIZE_MODAL_ACTION_CONTAINER = {
  sm: '25px',
  m: '50px',
  full: '80px',
};
