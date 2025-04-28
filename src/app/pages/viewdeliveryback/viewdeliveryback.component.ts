import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { DeliveryService } from '../../services/services/delivery.service';
  import { Delivery } from '../../services/models/delivery.model';
import { CommonModule } from '@angular/common';
  
@Component({
  selector: 'app-viewdeliveryback',
  imports: [CommonModule],
  templateUrl: './viewdeliveryback.component.html',
  styleUrl: './viewdeliveryback.component.scss'
})
export class ViewdeliverybackComponent implements OnInit {
  
 
    delivery: Delivery | undefined;
    errorMessage: string = '';
  
    constructor(
      private deliveryService: DeliveryService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.deliveryService.getDeliveryById(+id).subscribe(
          (data) => {
            this.delivery = data;
          },
          (error) => {
            console.error('Error fetching delivery:', error);
            this.errorMessage = 'Failed to fetch delivery details.';
          }
        );
      }
    }
  
    goBack(): void {
      this.router.navigate(['/dashboard/deliverylist']);  // Redirect to delivery list
    }
  }
  

