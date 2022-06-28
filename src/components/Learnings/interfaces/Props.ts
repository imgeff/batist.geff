import { ReactNode } from 'react';

interface IBasicToolInfo {
  icons: { defaultIcon: ReactNode, customIcon: ReactNode };
  title: string;
  level: string;
  levelTip: string;
  description: string;
}

export interface IModalProps extends IBasicToolInfo {
  iconCurrentColor: string | undefined;
}

export interface ICardProps extends IBasicToolInfo {
  stack: string;
  defaultColor: string;
}
