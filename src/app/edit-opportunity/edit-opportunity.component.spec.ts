import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOpportunityComponent } from './edit-opportunity.component';

describe('EditOpportunityComponent', () => {
  let component: EditOpportunityComponent;
  let fixture: ComponentFixture<EditOpportunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditOpportunityComponent]
    });
    fixture = TestBed.createComponent(EditOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
