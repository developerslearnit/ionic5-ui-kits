import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginonePage } from './loginone.page';

describe('LoginonePage', () => {
  let component: LoginonePage;
  let fixture: ComponentFixture<LoginonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
