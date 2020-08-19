import { appNav } from './app/app-nav'
import { appHeader } from './app/app-header'

export default function app(article: any) {
  return {
    header: appHeader,
    nav: appNav,
    main: article,
  }
}
