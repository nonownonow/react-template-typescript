import { problemType } from './app/problemType'
import { button } from './app/button'
import { progressBar } from './picking/ProgressBar'

export const pickingJobFormProblem = {
  progressBar,
  form: (job: any) => ({
    id: '',
    fieldset: [
      {},
      {
        input: problemType,
      },
    ],
    button: button.submit,
  }),
}
