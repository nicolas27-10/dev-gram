import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegDevPage } from './reg-dev.page';

describe('RegDevPage', () => {
  let component: RegDevPage;
  let fixture: ComponentFixture<RegDevPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegDevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
