export interface colaborator {
  name: string;
  github: string;
}

export interface IProject {
  nameProject: string;
  media: {
    img: string,
    alt: string,
    video: string,
  },
  links: {
    github: string,
    deploy: string,
  }
  infos: {
    description: string,
    functionalities: string[],
    languages: string[],
    tools: string[],
    colaborators: colaborator[],
  }
}

export interface IProjects {
  fundamentos: IProject[],
  frontend: IProject[],
  backend: IProject[],
  fullstack: IProject[],
}
