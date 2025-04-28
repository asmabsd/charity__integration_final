import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverylistbackComponent } from './deliverylistback.component';

describe('DeliverylistbackComponent', () => {
  let component: DeliverylistbackComponent;
  let fixture: ComponentFixture<DeliverylistbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverylistbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverylistbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
