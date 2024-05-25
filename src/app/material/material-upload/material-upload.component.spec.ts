import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUploadComponent } from './material-upload.component';

describe('MaterialUploadComponent', () => {
  let component: MaterialUploadComponent;
  let fixture: ComponentFixture<MaterialUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
