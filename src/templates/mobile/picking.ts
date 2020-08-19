import { progressBar } from './picking/ProgressBar'
import app from './app'
import { PickingHeader } from './picking/PickingHeader'
import { pickingStore } from './store/pickingStore'

export default function picking(article: any) {
  const store = { pickingStore }
  store.pickingStore.heading = `피킹  할당 - ${article.heading}`

  return app({
    id: 'pickingJob',
    header: PickingHeader(store.pickingStore),
    main: article,
  })
}
