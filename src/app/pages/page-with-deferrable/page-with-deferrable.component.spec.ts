import { ComponentFixture, DeferBlockBehavior, TestBed } from '@angular/core/testing';
import { PageWithDeferrableComponent } from './page-with-deferrable.component';

describe('PageWithDeferrableComponent', () => {
  let component: PageWithDeferrableComponent;
  let fixture: ComponentFixture<PageWithDeferrableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageWithDeferrableComponent],
      deferBlockBehavior: DeferBlockBehavior.Manual,
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithDeferrableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests here
  it('should have a title', async () => {
    const deferBlockFixture = await fixture.getDeferBlocks();
    expect(deferBlockFixture).toBeTruthy();
  });
});
