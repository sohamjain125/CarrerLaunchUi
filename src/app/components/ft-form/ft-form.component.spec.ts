import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtFormComponent } from './ft-form.component';

describe('FtFormComponent', () => {
  let component: FtFormComponent;
  let fixture: ComponentFixture<FtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
