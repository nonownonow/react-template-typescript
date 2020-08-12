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
      button: {
        id: 'search',
        label: '조회',
      },
    },
    {
      fieldset: [
        {
          id: 'selectJob',
          input: [
            {
              id: 'job',
              label: [
                { id: 'wave', label: '피킹 wave' },
                { id: 'no', label: '피킹잡 No' },
                { id: 'type', label: '피킹 유형' },
                { id: 'zone', label: '피킹 존/ 수량' },
                { id: 'created', label: '지시 시각' },
              ],
              option: [
                {
                  wave: 'yyy-yyy-yyy',
                  num: 'xxx-xxx-xxx',
                  type: '멀티 피킹',
                  zone: {
                    id: 'B',
                    amount: '**',
                  },
                  created: '2020-12-12-20:32',
                },
                {
                  wave: '***-***_***',
                  num: '***-***-***',
                  type: '멀티 피킹',
                  zone: {
                    id: 'A',
                    amount: '**',
                  },
                  created: '2020-12-12-20:32',
                },
              ],
            },
          ],
        },
      ],
      button: {
        id: 'select',
        label: '선택',
      },
    },
  ],
}
