import { progressBar } from './picking/ProgressBar'
import { pickingFooterNav } from './picking/PickingFooterNav'

export default function pickingJobForm(form: any) {
  return {
    form,
    footer: {
      pickingJobNav: pickingFooterNav,
    },
  }
}
