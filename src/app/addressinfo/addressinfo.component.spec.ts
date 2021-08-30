import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressinfoComponent } from './addressinfo.component';

describe('AddressinfoComponent', () => {
  let component: AddressinfoComponent;
  let fixture: ComponentFixture<AddressinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
