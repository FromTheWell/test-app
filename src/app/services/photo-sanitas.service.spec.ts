import { TestBed } from '@angular/core/testing';

import { PhotoSanitasService } from './photo-sanitas.service';

describe('PhotoSanitasService', () => {
  let service: PhotoSanitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoSanitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
