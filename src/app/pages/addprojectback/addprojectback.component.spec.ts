import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectbackComponent } from './addprojectback.component';

describe('AddprojectbackComponent', () => {
  let component: AddprojectbackComponent;
  let fixture: ComponentFixture<AddprojectbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddprojectbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprojectbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
