export const job = [
  {
    id: '198-A-01',
    wave: '다스 198회차',
    type: '멀티 피킹',
    zone: ['A'],
    destination: '빨강컨베이어',
    started: '2020-12-11T23:24:13',
    recent: '2020-12-12T00:44:13',
    created: '2020-12-12-20:32',
  },
]

interface IJob {
  id: string
  wave: string
  type: string
  zone: string[]
  destination: string
  started: string | Date
  recent: string | Date
  created: string | Date
}

export interface Job extends IJob {}
export class Job {
  started: Date
  recent: Date
  created: Date
  constructor(job: IJob) {
    Object.assign(this, job)
    this.started = new Date(job.started)
    this.recent = new Date(job.recent)
    this.created = new Date(job.created)
  }
  get elapsed() {
    return this.recent.getTime() - this.started.getTime()
  }
  async fetchZone() {
    const { zone } = await import('./zone')
    Object.assign(this, { zone })
  }
}
