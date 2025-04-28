import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdeliverybackComponent } from './editdeliveryback.component';

describe('EditdeliverybackComponent', () => {
  let component: EditdeliverybackComponent;
  let fixture: ComponentFixture<EditdeliverybackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditdeliverybackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdeliverybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
