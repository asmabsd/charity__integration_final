import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsprojectfrontComponent } from './detailsprojectfront.component';

describe('DetailsprojectfrontComponent', () => {
  let component: DetailsprojectfrontComponent;
  let fixture: ComponentFixture<DetailsprojectfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsprojectfrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsprojectfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
