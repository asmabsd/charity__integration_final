import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainingComponent } from './edit-training.component';

describe('EditTrainingComponent', () => {
  let component: EditTrainingComponent;
  let fixture: ComponentFixture<EditTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTrainingComponent]
    });
    fixture = TestBed.createComponent(EditTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
