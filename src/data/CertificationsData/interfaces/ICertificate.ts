import { ReactElement } from 'react';

interface ICertificate {
  id: number,
  icon: ReactElement,
  title: string,
  institution: string,
  description: string,
  link: string,
}

export default ICertificate;
