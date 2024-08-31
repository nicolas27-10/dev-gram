import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectPage } from './select.page';

describe('SelectPage', () => {
  let component: SelectPage;
  let fixture: ComponentFixture<SelectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
