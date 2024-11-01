import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardchildComponent } from './dashboardchild.component';

describe('DashboardchildComponent', () => {
  let component: DashboardchildComponent;
  let fixture: ComponentFixture<DashboardchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
