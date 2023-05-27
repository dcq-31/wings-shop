export * from './component'
export type Category = 'Todo' | 'Ropa' | 'Zapatos' | 'Perfumes' | 'Accesorios' | 'Joyas' | 'Casa'

export type ThemeColors =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'base-100'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export interface Image {
  src: string
  alt: string
}
