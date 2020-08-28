import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingcomponentComponent } from './testingcomponent.component';

describe('TestingcomponentComponent', () => {
  let component: TestingcomponentComponent;
  let fixture: ComponentFixture<TestingcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
