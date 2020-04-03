import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropexampleComponent } from './dragdropexample.component';

describe('DragdropexampleComponent', () => {
  let component: DragdropexampleComponent;
  let fixture: ComponentFixture<DragdropexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragdropexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
