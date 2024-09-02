import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargestObjectNgmodelComponent } from './largest-object-ngmodel.component';

describe('LargestObjectNgmodelComponent', () => {
  let component: LargestObjectNgmodelComponent;
  let fixture: ComponentFixture<LargestObjectNgmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargestObjectNgmodelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargestObjectNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
