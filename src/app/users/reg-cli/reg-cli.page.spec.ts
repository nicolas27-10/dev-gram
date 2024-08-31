import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegCliPage } from './reg-cli.page';

describe('RegCliPage', () => {
  let component: RegCliPage;
  let fixture: ComponentFixture<RegCliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
