import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsReactiveComponent } from './personal-details-reactive.component';

describe('PersonalDetailsReactiveComponent', () => {
  let component: PersonalDetailsReactiveComponent;
  let fixture: ComponentFixture<PersonalDetailsReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDetailsReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
