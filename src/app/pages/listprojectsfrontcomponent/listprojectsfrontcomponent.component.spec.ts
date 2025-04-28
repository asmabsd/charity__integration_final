import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprojectsfrontcomponentComponent } from './listprojectsfrontcomponent.component';

describe('ListprojectsfrontcomponentComponent', () => {
  let component: ListprojectsfrontcomponentComponent;
  let fixture: ComponentFixture<ListprojectsfrontcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListprojectsfrontcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListprojectsfrontcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
