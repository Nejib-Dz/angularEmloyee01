import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterdepartementComponent } from './ajouterdepartement.component';

describe('AjouterdepartementComponent', () => {
  let component: AjouterdepartementComponent;
  let fixture: ComponentFixture<AjouterdepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterdepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterdepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
