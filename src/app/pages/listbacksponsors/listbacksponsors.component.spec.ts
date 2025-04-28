import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbacksponsorsComponent } from './listbacksponsors.component';

describe('ListbacksponsorsComponent', () => {
  let component: ListbacksponsorsComponent;
  let fixture: ComponentFixture<ListbacksponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListbacksponsorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListbacksponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
