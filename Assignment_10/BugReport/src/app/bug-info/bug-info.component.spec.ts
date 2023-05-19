import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugInfoComponent } from './bug-info.component';

describe('BugInfoComponent', () => {
  let component: BugInfoComponent;
  let fixture: ComponentFixture<BugInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BugInfoComponent]
    });
    fixture = TestBed.createComponent(BugInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
