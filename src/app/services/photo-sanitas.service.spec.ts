import { TestBed } from '@angular/core/testing';

import { PhotoSanitasService } from './photo-sanitas.service';
import { LoremIpsum } from 'lorem-ipsum';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PhotoSanitasService', () => {
  let service: PhotoSanitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoSanitasService, LoremIpsum, HttpClient, HttpHandler],
    });
    service = TestBed.inject(PhotoSanitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Exppected generation JSON called', () => {
    const spyOnGenerateJSON = spyOn(service, 'generateJson');
    service.generateJson();
    expect(spyOnGenerateJSON).toHaveBeenCalled();
  });
});
