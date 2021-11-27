export interface Game {
  readonly id: number,
  title: string,
  description: string,
  genre: gameOption,
  platform: gameOption,
  editor: gameOption,
  type: gameOption,
  releaseDate: string,
  online: boolean
}

export interface gameOption {
  readonly id: number,
  uri: string,
  type: string,
  name: string
}

export interface Infos {
  context: string,
  id: string,
  type: string
  totalItems: Number
}