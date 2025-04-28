import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojectbackComponent } from './editprojectback.component';

describe('EditprojectbackComponent', () => {
  let component: EditprojectbackComponent;
  let fixture: ComponentFixture<EditprojectbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditprojectbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprojectbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
