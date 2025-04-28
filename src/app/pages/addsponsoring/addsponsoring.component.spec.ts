import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsponsoringComponent } from './addsponsoring.component';

describe('AddsponsoringComponent', () => {
  let component: AddsponsoringComponent;
  let fixture: ComponentFixture<AddsponsoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddsponsoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsponsoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
