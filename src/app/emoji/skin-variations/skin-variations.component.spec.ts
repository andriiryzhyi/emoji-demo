import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinVariationsComponent } from './skin-variations.component';

describe('SkinVariationsComponent', () => {
  let component: SkinVariationsComponent;
  let fixture: ComponentFixture<SkinVariationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinVariationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
