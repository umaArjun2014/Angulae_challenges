import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutletConceptComponent } from './template-outlet-concept.component';

describe('TemplateOutletConceptComponent', () => {
  let component: TemplateOutletConceptComponent;
  let fixture: ComponentFixture<TemplateOutletConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateOutletConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOutletConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
