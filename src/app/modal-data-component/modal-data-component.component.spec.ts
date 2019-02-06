import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDataComponentComponent } from './modal-data-component.component';

describe('ModalDataComponentComponent', () => {
  let component: ModalDataComponentComponent;
  let fixture: ComponentFixture<ModalDataComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDataComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
