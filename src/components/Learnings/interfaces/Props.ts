import { ReactElement } from 'react';

export interface IModalProps {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface ICardProps extends IModalProps {
  level: string;
  levelTip: string;
}
