import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsponsorComponent } from './editsponsor.component';

describe('EditsponsorComponent', () => {
  let component: EditsponsorComponent;
  let fixture: ComponentFixture<EditsponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditsponsorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
