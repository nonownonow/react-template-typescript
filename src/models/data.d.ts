export interface IColumn {
  id: string
  label: string
}

export type ITable<T> = {
  header: IColumn[]
  body: T[]
}
