export const tote = [
  {
    id: 'xxx-xxxx-xxxx',
    nextTote: 'yyy-yyyy-yyyy',
    status: 'picking',
  },
]
/*
*   id: 'tote',
  label: [
    { id: 'id', label: '현재 토트' },
    { id: 'nextTote', label: '다음' },
  ],
* */

export const toteStatus = [['피킹중', 'picking']]

class Tote {
  constructor(obj: any) {
    Object.assign(this, obj)
  }
}
