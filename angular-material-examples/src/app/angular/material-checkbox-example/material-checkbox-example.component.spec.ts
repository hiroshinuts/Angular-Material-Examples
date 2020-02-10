import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCheckboxExampleComponent } from './material-checkbox-example.component';

describe('MaterialCheckboxExampleComponent', () => {
  let component: MaterialCheckboxExampleComponent;
  let fixture: ComponentFixture<MaterialCheckboxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCheckboxExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCheckboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
