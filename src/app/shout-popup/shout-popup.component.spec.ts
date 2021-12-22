import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutPopupComponent } from './shout-popup.component';

describe('ShoutPopupComponent', () => {
  let component: ShoutPopupComponent;
  let fixture: ComponentFixture<ShoutPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoutPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
