// src/app/services/models/payment-request.model.ts
export interface PaymentRequest {
  campaignId: string;
  amount: number;
  donorName: string;
  donorEmail: string;
  paymentMethodId: string;
}
