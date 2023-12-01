import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z
    .string()
    .min(1, { message: 'NEXT_PUBLIC_API_URL é requerido' })
    .url({ message: 'NEXT_PUBLIC_API_URL deve ser uma URL válida' }),
  APP_URL: z.string().min(1, { message: 'APP_URL é requerido' }).url({
    message: 'APP_URL deve ser uma URL válida',
  }),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  throw new Error(
    `Variáveis de ambiente inválidas: ${parsedEnv.error.flatten().fieldErrors}`,
  );
}

export const env = parsedEnv.data;
