import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTableDialogComponent } from './update-table-dialog.component';

describe('UpdateTableDialogComponent', () => {
  let component: UpdateTableDialogComponent;
  let fixture: ComponentFixture<UpdateTableDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTableDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
