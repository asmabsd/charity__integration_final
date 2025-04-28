import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsponsorComponent } from './viewsponsor.component';

describe('ViewsponsorComponent', () => {
  let component: ViewsponsorComponent;
  let fixture: ComponentFixture<ViewsponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsponsorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
