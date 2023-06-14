import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferenciaEnviadasComponent } from './tranferencia-enviadas.component';

describe('TranferenciaEnviadasComponent', () => {
  let component: TranferenciaEnviadasComponent;
  let fixture: ComponentFixture<TranferenciaEnviadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranferenciaEnviadasComponent]
    });
    fixture = TestBed.createComponent(TranferenciaEnviadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
