import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsprojectbackComponent } from './detailsprojectback.component';

describe('DetailsprojectbackComponent', () => {
  let component: DetailsprojectbackComponent;
  let fixture: ComponentFixture<DetailsprojectbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsprojectbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsprojectbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
