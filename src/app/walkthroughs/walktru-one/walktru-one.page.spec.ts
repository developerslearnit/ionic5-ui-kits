import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalktruOnePage } from './walktru-one.page';

describe('WalktruOnePage', () => {
  let component: WalktruOnePage;
  let fixture: ComponentFixture<WalktruOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalktruOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalktruOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
