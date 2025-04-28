import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectstatsbackComponent } from './projectstatsback.component';

describe('ProjectstatsbackComponent', () => {
  let component: ProjectstatsbackComponent;
  let fixture: ComponentFixture<ProjectstatsbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectstatsbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectstatsbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
