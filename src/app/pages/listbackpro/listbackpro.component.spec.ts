import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbackproComponent } from './listbackpro.component';

describe('ListbackproComponent', () => {
  let component: ListbackproComponent;
  let fixture: ComponentFixture<ListbackproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListbackproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListbackproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
