import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDToDoComponent } from './crudto-do.component';

describe('CRUDToDoComponent', () => {
  let component: CRUDToDoComponent;
  let fixture: ComponentFixture<CRUDToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
