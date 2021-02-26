import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortInfoComponent } from './sort-info.component';

describe('SortInfoComponent', () => {
  let component: SortInfoComponent;
  let fixture: ComponentFixture<SortInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
