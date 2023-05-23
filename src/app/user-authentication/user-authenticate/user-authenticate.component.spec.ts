import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthenticateComponent } from './user-authenticate.component';

describe('UserAuthenticateComponent', () => {
  let component: UserAuthenticateComponent;
  let fixture: ComponentFixture<UserAuthenticateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuthenticateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAuthenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
