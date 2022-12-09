import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoriaComponent } from './mercadoria.component';

describe('MercadoriaComponent', () => {
  let component: MercadoriaComponent;
  let fixture: ComponentFixture<MercadoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
