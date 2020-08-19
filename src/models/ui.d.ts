export interface UIValueOption<T> {
  id: string
  disabled?: boolean
  label: string
  value: T
}

export type UIValue = string | string[] | Document | Document[]

export interface Ui<T extends UIValue> {
  id: string
  value?: T
  label?: string
  error: string
  options?: UIValueOption<T>[]
  required?: boolean
  disabled?: boolean
  multiple?: boolean
  autofocus?: boolean
  placeholder?: string
  autocomplate?: boolean
  defaultValue?: string
  onChange: (data: any) => void
  isNative?: boolean
}

export type UITemplate<T extends UIValue> = Omit<Ui<T>, 'onChange'>
