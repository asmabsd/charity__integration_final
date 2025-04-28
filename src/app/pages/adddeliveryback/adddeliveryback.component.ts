import { Component, OnInit } from '@angular/core';
import { Delivery, DeliveryStatus } from '../../services/models/delivery.model';
import { DeliveryService } from '../../services/services/delivery.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Correct Router import
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-adddeliveryback',
  imports: [CommonModule,FormsModule],
  templateUrl: './adddeliveryback.component.html',
  styleUrl: './adddeliveryback.component.scss'
})
export class AdddeliverybackComponent {
  // Removed duplicate declaration of statusEnum

  delivery: Delivery = {
 
  donationId: 0,
  pickupLocation: '',
  dropOffLocation: '',
  status: DeliveryStatus.PENDING,
};
successMessage = '';
errorMessage: string = '';

statusEnum = DeliveryStatus;
  // Removed duplicate declaration of router

constructor(private deliveryService: DeliveryService,private router: Router 
) {}

goToList() {
  this.router.navigate(['/projectliste']); 
}

addDelivery(): void {
  this.deliveryService.createDelivery(this.delivery).subscribe(
    (newDelivery) => {
      this.successMessage = 'Delivery added successfully!';
      this.delivery = {
        id: 0,
        donationId: 0,
        pickupLocation: '',
        dropOffLocation: '',
        status: DeliveryStatus.PENDING,
      };
      this.router.navigate(['/dashboard/deliverylist']);

    },
    (error) => {
      console.error('Error adding delivery:', error);
      this.errorMessage = 'Failed to add delivery.';
    }
  );
}}

