import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeliverybackComponent } from './viewdeliveryback.component';

describe('ViewdeliverybackComponent', () => {
  let component: ViewdeliverybackComponent;
  let fixture: ComponentFixture<ViewdeliverybackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewdeliverybackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdeliverybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
