import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarHospedajeComponent } from './reservar-hospedaje.component';

describe('ReservarHospedajeComponent', () => {
  let component: ReservarHospedajeComponent;
  let fixture: ComponentFixture<ReservarHospedajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarHospedajeComponent]
    });
    fixture = TestBed.createComponent(ReservarHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
