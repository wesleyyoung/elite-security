import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliteToolbarComponent } from './elite-toolbar.component';

describe('EliteToolbarComponent', () => {
  let component: EliteToolbarComponent;
  let fixture: ComponentFixture<EliteToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliteToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliteToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
