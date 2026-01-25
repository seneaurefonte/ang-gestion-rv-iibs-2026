import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderPublicComponent } from './hearder-public.component';

describe('HearderPublicComponent', () => {
  let component: HearderPublicComponent;
  let fixture: ComponentFixture<HearderPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HearderPublicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HearderPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
