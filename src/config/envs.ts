import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  STRIPE_SECRET: string;
  //DATABASE_URL: string;
}

const envSchema = joi.object({
  PORT: joi.number().required(),
  STRIPE_SECRET: joi.string().required(),
  //DATABASE_URL: joi.string().required(),
}).unknown(true);

const { error, value} = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    PORT: envVars.PORT,
    STRIPE_SECRET: envVars.STRIPE_SECRET,
    //DATABASE_URL: envVars.DATABASE_URL,
}