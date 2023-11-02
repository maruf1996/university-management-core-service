import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    code: z.string({
      required_error: 'code is needed',
    }),
    startMonth: z.string({
      required_error: 'Start Month is needed',
    }),
    endMonth: z.string({
      required_error: 'End Month is needed',
    }),
  }),
});

const update = z.object({
  body: z.object({
    title: z.string().optional(),
    year: z.string().optional(),
    code: z.string().optional(),
    startMonth: z.string().optional(),
    endMonth: z.string().optional(),
  }),
});

export const AcademicSemesterValidation = { create, update };
