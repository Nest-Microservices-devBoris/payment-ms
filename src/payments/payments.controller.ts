import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment-session-dto';
import { Request, Response } from 'express';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

@Post('create-payment-session')
async createPaymentSession(@Body() paymentSessionDto: PaymentSessionDto) {
  
  
  return this.paymentsService.createPaymentSession(paymentSessionDto);

  }

@Get('success')
sucess() {
  return {
    ok: true,
    message: 'Sucess payment'

    }
  }

@Get('cancel')
  cancel() {
    return {
      ok: true,
      message: 'Sucess payment'

      }
  }

@Post('webhook')
async stripeWebhook(@Req() req: Request, @Res() res: Response) {
  return this.paymentsService.stripeWebhook(req, res);
  }
   
}
