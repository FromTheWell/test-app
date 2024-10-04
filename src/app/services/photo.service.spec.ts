import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { LoremIpsum } from 'lorem-ipsum';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoService, LoremIpsum, HttpClient, HttpHandler],
    });
    service = TestBed.inject(PhotoService);
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
