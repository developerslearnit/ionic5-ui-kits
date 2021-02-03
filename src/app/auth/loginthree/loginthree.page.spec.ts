import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginthreePage } from './loginthree.page';

describe('LoginthreePage', () => {
  let component: LoginthreePage;
  let fixture: ComponentFixture<LoginthreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginthreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginthreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
