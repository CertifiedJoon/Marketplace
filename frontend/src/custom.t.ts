declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.ts'
declare module '*.svg'
declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}
