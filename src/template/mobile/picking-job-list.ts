import { button } from './app/button'
import picking from './picking'
import { dateToString } from '../../util'

export default function pickingJobList(job: any, zone: any) {
  return picking({
    heading: '수동 할당',
    form: [
      {
        fieldset: [
          {
            id: 'searchJob',
            input: {
              id: 'jobId',
              error: '유효한 피킹잡이 아닙니다! 다시 입력해주세요!',
            },
          },
        ],
        button: button.search,
      },
      {
        fieldset: [
          {
            id: 'job',
            label: [
              { label: '피킹 wave', format: 'wave' },
              { label: '피킹잡', format: 'no' },
              { label: '피킹 유형', format: 'type' },
              {
                label: '피킹 존/수량',
                format: (job: any) =>
                  `${job.zone.id} / ${job.zone.amount.total}`,
              },
              {
                label: '지시 시간',
                format: (job: any) => dateToString(job.created),
              },
            ],
          },
        ],
        button: button.select,
      },
      {
        fieldset: [
          {
            legend: '토트바코드를 스캔하여 피킹을 시작하세요!',
            input: { id: 'pickingNum', label: '입력' },
          },
        ],
        button: {
          id: 'submit',
          label: '피킹 시작하기',
        },
      },
    ],
  })
}
