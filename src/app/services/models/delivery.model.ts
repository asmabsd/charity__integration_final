export interface Delivery {
    id?: number;
    donationId: number;
    pickupLocation: string;
    dropOffLocation: string;
    status: DeliveryStatus;
  }
  
  export enum DeliveryStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_TRANSIT',
    COMPLETED = 'DELIVERED'}