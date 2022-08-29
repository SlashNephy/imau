import { StatusState } from "./annictGql"

export type AnimeWork = {
  annictId: number
  malId: string | null
  title: string
  titleEn: string | null
  titleRo: string | null
  noEpisodes: boolean
  watchedEpisodeCount: number
  status: StatusState
}

export type StatusDiff = {
  work: AnimeWork
  target?: {
    watchedEpisodeCount: number
    status: keyof typeof StatusState
    title: string
    id: string
  }
}
