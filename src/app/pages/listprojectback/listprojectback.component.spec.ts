import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprojectbackComponent } from './listprojectback.component';

describe('ListprojectbackComponent', () => {
  let component: ListprojectbackComponent;
  let fixture: ComponentFixture<ListprojectbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListprojectbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListprojectbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
