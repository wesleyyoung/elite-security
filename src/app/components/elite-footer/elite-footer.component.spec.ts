import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteFooterComponent } from './elite-footer.component';

describe('EliteFooterComponent', () => {
  let component: EliteFooterComponent;
  let fixture: ComponentFixture<EliteFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliteFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
