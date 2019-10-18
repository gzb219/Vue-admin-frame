export enum ITypeSex {
  female,
  male
}

export enum ITypeArticleStatus {
  draft,
  committed,
  failing,
  auditing,
  audited,
  deleted
}

export interface ITypeUser {
  id: string | number;
  username: string;
  password: string;
  token?: string;
  expire?: number;
  roles: string[];
  nickname?: string;
  phone?: string;
  email?: string;
  qq?: number;
  company?: string;
  avatar?: string;
  sex: ITypeSex;
  age?: number;
  birthday?: Date | string | number;
  height?: number;
  weight?: number;
  intro?: string;
}

export interface ITypeNotification {
  id: string | number;
  title: string;
  timestamp: Date | string | number;
  isUnread: boolean;
}

export interface ITypeArticle {
  id: string | number;
  timestamp: Date | string | number;
  author: string | number;
  auditor: string | number;
  title: string;
  summery: string;
  content: string;
  status: ITypeArticleStatus;
  source: string;
  pageviews: number;
}

export interface ITypePaintedFace {
  version: string | number;
  timestamp: string | number | Date;
  user: string;
  word: string;
}
