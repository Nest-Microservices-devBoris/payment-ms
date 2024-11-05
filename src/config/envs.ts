import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  STRIPE_SECRET: string;
  STRIPE_SUCCESS_URL: string;
  STRIPE_CANCEL_URL: string;
  STRIPE_ENDPOINT_SECRET: string;
  NATS_SERVER: string[];
}

const envSchema = joi.object({
  PORT: joi.number().required(),
  STRIPE_SECRET: joi.string().required(),
  STRIPE_SUCCESS_URL: joi.string().required(),
  STRIPE_CANCEL_URL: joi.string().required(),
  STRIPE_ENDPOINT_SECRET: joi.string().required(),
  NATS_SERVER: joi.array().items(joi.string()).required(),
}).unknown(true);

const { error, value} = envSchema.validate({
  ...process.env,
  NATS_SERVER: process.env.NATS_SERVER?.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    PORT: envVars.PORT,
    STRIPE_SECRET: envVars.STRIPE_SECRET,
    STRIPE_SUCCESS_URL: envVars.STRIPE_SUCCESS_URL,
    STRIPE_CANCEL_URL: envVars.STRIPE_CANCEL_URL,
    STRIPE_ENDPOINT_SECRET: envVars.STRIPE_ENDPOINT_SECRET,
    NATS_SERVER: envVars.NATS_SERVER,
}