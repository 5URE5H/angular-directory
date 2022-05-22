export interface Directory {
  name: string;
  type: Type;
  children?: Directory[];
}

export enum Type {
  folder,
  file,
}
