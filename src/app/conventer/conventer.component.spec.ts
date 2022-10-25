import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventerComponent } from './conventer.component';

describe('ConventerComponent', () => {
  let component: ConventerComponent;
  let fixture: ComponentFixture<ConventerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConventerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConventerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
