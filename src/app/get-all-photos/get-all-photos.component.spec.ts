import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPhotosComponent } from './get-all-photos.component';

describe('GetAllPhotosComponent', () => {
  let component: GetAllPhotosComponent;
  let fixture: ComponentFixture<GetAllPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
