import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { TestingDeferrableComponent } from './testing-deferrable.component';

describe('PageWithDeferrableComponent', () => {
  let component: TestingDeferrableComponent;
  let fixture: ComponentFixture<TestingDeferrableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingDeferrableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingDeferrableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
