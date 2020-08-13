import { button } from './button'
import { job } from './job'

export const article = {
  heading: '피킹잡 수동 할당',
  form: [
    {
      fieldset: [
        {
          id: 'searchJob',
          input: {
            id: 'jobNumber',
            error: '유효한 피킹잡이 아닙니다! 다시 입력해주세요!',
          },
        },
      ],
      button: button.search,
    },
    {
      fieldset: [job],
      button: button.select,
    },
    {
      legend: '토트바코드를 스캔하여 피킹을 시작하세요!',
      fieldset: {
        input: { id: 'pickingNum', label: '입력' },
      },
      button: {
        id: 'submit',
        label: '피킹 시작하기',
      },
    },
  ],
}
