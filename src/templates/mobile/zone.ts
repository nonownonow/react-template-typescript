export const zone = {
  id: 'zone',
  label: [
    {
      id: 'id',
      label: '지번 구역',
    },
    {
      id: 'progressRatio',
      label: '진행율',
      format: (progressRatio: any) => `${progressRatio * 100}%`,
    },
    {
      id: 'amount',
      label: '집품수량',
      format: (amount: any) => `${amount.progress}/${amount.total}`,
    },
  ],
  option: [
    {
      id: 'A',
      amount: {
        total: 30,
        progress: 14,
      },
      progressRatio: 0.49,
    },
  ],
}
