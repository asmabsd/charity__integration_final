// src/app/services/services/payment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentRequest } from '../models/payment-request.model';
import { PaymentResponse } from '../models/payment-response.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private base = `${environment.apiUrl}/payments`;

  constructor(private http: HttpClient) {}

  process(request: PaymentRequest): Observable<PaymentResponse> {
    return this.http.post<PaymentResponse>(this.base, request);
  }
}
