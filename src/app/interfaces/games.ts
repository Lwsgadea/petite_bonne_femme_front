export interface Game {
  readonly id: number,
  title: string,
  description: string,
  genres: gameOption[],
  platforms: gameOption[],
  editors: gameOption[],
  types: gameOption[],
  releaseDate: string,
  online: boolean
}

export interface gameOption {
  readonly id: number,
  uri: string,
  name: string
}

export interface Infos {
  readonly context: string,
  readonly id: string,
  readonly type: string
  readonly totalItems: Number
}