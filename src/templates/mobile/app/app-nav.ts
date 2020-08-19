import { button } from './button'

export const appNav = {
  button: button.mainNav,
  ul: [
    [
      {
        id: 'das',
        label: 'DAS피킹',
      },
      [
        {
          id: 'auto',
          label: '자동배치',
          href: '',
        },
        {
          id: 'manual',
          label: '수동배치',
          href: '',
        },
      ],
    ],
    [
      {
        id: 'single',
        label: '싱글피킹',
      },
      [
        {
          id: 'auto',
          label: '자동배치',
          href: '',
        },
        {
          id: 'manual',
          label: '수동배치',
          href: '',
        },
      ],
    ],
    [
      {
        id: 'issue',
        label: '문제피킹',
      },
      [
        {
          id: 'auto',
          label: '자동배치',
          href: '',
        },
        {
          id: 'manual',
          label: '수동배치',
          href: '',
        },
      ],
    ],
  ],
}
