import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsDetailComponent } from './comps-detail.component';

describe('CompsDetailComponent', () => {
  let component: CompsDetailComponent;
  let fixture: ComponentFixture<CompsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
