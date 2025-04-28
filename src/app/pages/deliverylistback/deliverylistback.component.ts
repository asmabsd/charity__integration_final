import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../services/models/delivery.model';
import { DeliveryService } from '../../services/services/delivery.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-deliverylistback',
  imports: [CommonModule,RouterModule],
  templateUrl: './deliverylistback.component.html',
  styleUrl: './deliverylistback.component.scss'
})
export class DeliverylistbackComponent  implements OnInit {
  deliveries: Delivery[] = [];
  errorMessage: string = '';
  router: any;

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.loadDeliveries();
  }

  loadDeliveries(): void {
    this.deliveryService.getAllDeliveries().subscribe(
      (data) => {
        this.deliveries = data;
      },
      (error) => {
        console.error('Error loading deliveries:', error);
        this.errorMessage = 'Failed to load deliveries.';
      }
    );
  }

  viewDelivery(delivery: Delivery): void {
    this.router.navigate([`/delivery/view`, delivery.id]);
  }

  editDelivery(delivery: Delivery): void {
    this.router.navigate([`/dashboard/editdelivery` , delivery.id]);
  }


 

  // Delete Delivery
  deleteDelivery(id: number): void {
    if (confirm('Are you sure you want to delete this delivery?')) {
      this.deliveryService.deleteDelivery(id).subscribe(
        () => {
          this.deliveries = this.deliveries.filter(delivery => delivery.id !== id);
        },
        (error) => {
          console.error('Error deleting delivery:', error);
          this.errorMessage = 'Failed to delete delivery.';
        }
      );
    }
  }
}