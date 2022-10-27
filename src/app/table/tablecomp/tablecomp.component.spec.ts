import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecompComponent } from './tablecomp.component';

describe('TablecompComponent', () => {
  let component: TablecompComponent;
  let fixture: ComponentFixture<TablecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
