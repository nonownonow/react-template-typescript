import { dateToString } from '../../util'

export default function pickingJob(job: any, zone: any) {
  return {
    id: 'pickingJob',
    heading: '피킹잡 상세정보',
    table: [
      {
        id: 'zone',
        label: [
          {
            label: '집품수량',
            format: (zone: any) =>
              `${zone.amount.process}/${zone.amount.total}`,
          },
          {
            label: '진행율',
            format: (zone: any) => `${zone.processRatio * 100}%`,
          },
          { label: '지번구역', format: 'id' },
        ],
      },
      {
        id: 'job',
        label: [
          { label: '피킹 wave', format: 'wave' },
          { label: '피킹잡', format: 'no' },
          { label: '피킹 유형', format: 'type' },
          { label: '목적지', format: 'destination' },
          {
            label: '피킹 시작시간',
            format: (job: any) => dateToString(job.started),
          },
          {
            label: '작업 경과시간',
            format: (job: any) => dateToString(job.elapsed),
          },
        ],
      },
    ],
  }
}
