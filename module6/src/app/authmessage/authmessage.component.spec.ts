import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmessageComponent } from './authmessage.component';

describe('AuthmessageComponent', () => {
  let component: AuthmessageComponent;
  let fixture: ComponentFixture<AuthmessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthmessageComponent]
    });
    fixture = TestBed.createComponent(AuthmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
