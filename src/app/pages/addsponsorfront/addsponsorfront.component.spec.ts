import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsponsorfrontComponent } from './addsponsorfront.component';

describe('AddsponsorfrontComponent', () => {
  let component: AddsponsorfrontComponent;
  let fixture: ComponentFixture<AddsponsorfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddsponsorfrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsponsorfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
