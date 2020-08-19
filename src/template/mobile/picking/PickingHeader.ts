import { progressBar } from './ProgressBar'

export function PickingHeader(store: any) {
  return {
    heading: `피킹 할당 - ${store.heading}`,
    progressBar: progressBar(0, store.zone.total, store.zone.progress),
  }
}
