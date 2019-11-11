export enum ITypeArticleStatus {
  draft,
  committed,
  failing,
  auditing,
  audited,
  deleted
}

export interface ITypeStatisticsGender {
  male: number;
  female: number;
  unknown: number;
}

export interface ITypeStatisticsArea {
  name: string;
  value: number;
}

export interface ITypeStatisticsTraffic {
  type: 'source' | 'interview';
  url: string;
  pageviews: number;
}

export interface ITypeStatisticsBasic {
  date: number;
  pv: number;
  uv: number;
  cvr: number;
}

export interface ITypeStatistics {
  basic: ITypeStatisticsBasic[];
  areas: ITypeStatisticsArea[];
}

export interface ITypeNotification {
  id: string | number;
  from: string;
  title: string;
  timestamp: Date | string | number;
  isUnread: boolean;
}

export interface ITypeArticle {
  id: string | number;
  timestamp: number;
  author: string;
  auditor?: string;
  title: string;
  summery?: string;
  content: string;
  status: ITypeArticleStatus;
  source?: string;
  pageviews?: number;
}

export interface ITypePaintedFace extends ITypeArticle {
  version: string | number;
}