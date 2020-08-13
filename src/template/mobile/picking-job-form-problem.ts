import { problemType } from './common/problemType'
import { button } from './button'
import { progressBar } from './progress-bar'

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
