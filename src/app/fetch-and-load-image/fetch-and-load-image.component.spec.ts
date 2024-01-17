import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAndLoadImageComponent } from './fetch-and-load-image.component';

describe('FetchAndLoadImageComponent', () => {
  let component: FetchAndLoadImageComponent;
  let fixture: ComponentFixture<FetchAndLoadImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchAndLoadImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchAndLoadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
