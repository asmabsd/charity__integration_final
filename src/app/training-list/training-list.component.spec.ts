import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingListComponent } from './training-list.component';

describe('TrainingListComponent', () => {
  let component: TrainingListComponent;
  let fixture: ComponentFixture<TrainingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingListComponent]
    });
    fixture = TestBed.createComponent(TrainingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
