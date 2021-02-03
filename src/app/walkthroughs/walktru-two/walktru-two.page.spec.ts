import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalktruTwoPage } from './walktru-two.page';

describe('WalktruTwoPage', () => {
  let component: WalktruTwoPage;
  let fixture: ComponentFixture<WalktruTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalktruTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalktruTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
