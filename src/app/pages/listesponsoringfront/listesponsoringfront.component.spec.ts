import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesponsoringfrontComponent } from './listesponsoringfront.component';

describe('ListesponsoringfrontComponent', () => {
  let component: ListesponsoringfrontComponent;
  let fixture: ComponentFixture<ListesponsoringfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListesponsoringfrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesponsoringfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
