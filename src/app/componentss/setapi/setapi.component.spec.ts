import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetapiComponent } from './setapi.component';

describe('SetapiComponent', () => {
  let component: SetapiComponent;
  let fixture: ComponentFixture<SetapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
