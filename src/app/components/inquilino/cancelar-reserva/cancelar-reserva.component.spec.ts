import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarReservaComponent } from './cancelar-reserva.component';

describe('CancelarReservaComponent', () => {
  let component: CancelarReservaComponent;
  let fixture: ComponentFixture<CancelarReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelarReservaComponent]
    });
    fixture = TestBed.createComponent(CancelarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
