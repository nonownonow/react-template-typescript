export const job = {
  id: 'job',
  label: [
    { id: 'wave', label: '피킹 wave' },
    { id: 'no', label: '피킹잡 No' },
    { id: 'type', label: '피킹 유형' },
    { id: 'zone', label: '피킹 존/ 수량' },
    { id: 'created', label: '지시 시각' },
    { id: 'destination', label: '냉장QPS2호기' },
  ],
  option: [
    {
      id: 'xxx-xxx-xxx',
      wave: 'yyy-yyy-yyy',
      type: '멀티 피킹',
      zone: {
        id: 'B',
        amount: '**',
      },
      created: '2020-12-12-20:32',
    },
  ],
}
