import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from '../../services/services/delivery.service';
import { Delivery, DeliveryStatus } from '../../services/models/delivery.model';
import { CommonModule, Location } from '@angular/common'; // to go back to the previous page
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editdeliveryback',
  imports: [CommonModule,FormsModule],
  templateUrl: './editdeliveryback.component.html',
  styleUrl: './editdeliveryback.component.scss'
})
export class EditdeliverybackComponent implements OnInit {
  delivery: Delivery = {
    donationId: 0,
    pickupLocation: '',
    dropOffLocation: '',
    status: DeliveryStatus.PENDING
  };
  successMessage: string = '';
  errorMessage: string = '';
  statusEnum = DeliveryStatus;

  constructor(
    private deliveryService: DeliveryService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get the delivery ID from the route
    if (id) {
      this.getDelivery(id); // Fetch the delivery to edit
    }
  }

  // Fetch the delivery details to populate the form
  getDelivery(id: string): void {
    this.deliveryService.getDeliveryById(+id).subscribe(
      (delivery) => {
        this.delivery = delivery;
      },
      (error: any) => {
        console.error('Error fetching delivery:', error);
        this.errorMessage = 'Failed to fetch delivery.';
      }
    );
  }

  // Update the delivery
  updateDelivery(): void {
    if (!this.delivery.donationId || !this.delivery.pickupLocation || !this.delivery.dropOffLocation || !this.delivery.status) {
      this.errorMessage = 'Please fill in all the fields.';
      return;
    }
  
    if (this.delivery.id !== undefined) {
      this.deliveryService.updateDelivery(this.delivery.id, this.delivery).subscribe(
        (updatedDelivery) => {
          console.log('Delivery updated successfully', updatedDelivery);
          this.router.navigate(['/dashboard/deliverylist']);
        },
        (error: any) => {
          console.error('Error updating delivery:', error);
          this.errorMessage = 'Failed to update delivery.';
        }
      );
    } else {
      this.errorMessage = 'Delivery ID is undefined.';
    }
  }
  
}