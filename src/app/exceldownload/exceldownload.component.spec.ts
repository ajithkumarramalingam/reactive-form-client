import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceldownloadComponent } from './exceldownload.component';

describe('ExceldownloadComponent', () => {
  let component: ExceldownloadComponent;
  let fixture: ComponentFixture<ExceldownloadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExceldownloadComponent]
    });
    fixture = TestBed.createComponent(ExceldownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
