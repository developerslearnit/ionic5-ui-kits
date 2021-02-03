import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogintwoPage } from './logintwo.page';

describe('LogintwoPage', () => {
  let component: LogintwoPage;
  let fixture: ComponentFixture<LogintwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogintwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogintwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
