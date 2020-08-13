import { mainNav } from './main-nav'

export const myPage = {}
export default function app(main: any) {
  return {
    header: {
      heading: 'wms',
      myPage: '',
    },
    mainNav,

    main,
  }
}
