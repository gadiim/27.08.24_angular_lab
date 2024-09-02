import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargestObjectsClickComponent } from './largest-objects-click.component';

describe('LargestObjectsClickComponent', () => {
  let component: LargestObjectsClickComponent;
  let fixture: ComponentFixture<LargestObjectsClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargestObjectsClickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargestObjectsClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
