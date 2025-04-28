import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailssponsorfrontComponent } from './detailssponsorfront.component';

describe('DetailssponsorfrontComponent', () => {
  let component: DetailssponsorfrontComponent;
  let fixture: ComponentFixture<DetailssponsorfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailssponsorfrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailssponsorfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
