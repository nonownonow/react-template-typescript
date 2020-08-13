export const article = {
  heading: (pickingJob: any) => pickingJob.id,
  progress: {
    min: 0,
    max: 30,
  },
  table: {},
  form: {
    fieldset: {
      input: { id: 'pickingNum', label: '입력' },
    },
  },
}

export default function pickingJob(main: any) {
  return {
    article,
  }
}
