import {
  ComponentFixture,
  DeferBlockBehavior,
  DeferBlockFixture,
  DeferBlockState,
  TestBed,
} from '@angular/core/testing';
import { TestingDeferrableComponent } from './testing-deferrable.component';

describe('PageWithDeferrableComponent', () => {
  let component: TestingDeferrableComponent;
  let fixture: ComponentFixture<TestingDeferrableComponent>;
  // let deferredBlockFixture: DeferBlockFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingDeferrableComponent],
      deferBlockBehavior: DeferBlockBehavior.Manual,
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestingDeferrableComponent);
    component = fixture.componentInstance;
    // deferredBlockFixture = (await fixture.getDeferBlocks())[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render deferred element', async () => {
    const element = fixture.nativeElement.querySelector('[data-test-id="deferred-element"]');
    expect(element).toBeTruthy();
  });
});
