export default function pickingJobForm() {
  return {
    header: {
      heading: '${job number}',
    },
    footer: {
      subMenu: {
        label: '',
        ul: [
          {
            label: '작업정보',
          },
          {
            label: '문제보고',
          },
          {
            label: '토트 가득참',
          },
        ],
      },
    },
  }
}
