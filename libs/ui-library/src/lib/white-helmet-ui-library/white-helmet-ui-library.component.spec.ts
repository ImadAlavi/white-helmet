import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhiteHelmetUiLibraryComponent } from './white-helmet-ui-library.component';

describe('WhiteHelmetUiLibraryComponent', () => {
  let component: WhiteHelmetUiLibraryComponent;
  let fixture: ComponentFixture<WhiteHelmetUiLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteHelmetUiLibraryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhiteHelmetUiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
