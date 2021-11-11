import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoremIpsum } from 'lorem-ipsum';
import { Photo } from '../models/photo.model';

@Injectable()
export class PhotoSanitasService {
  constructor(private http: HttpClient, private lorenImpsum: LoremIpsum) {}

  private uri =
    'data:application/json;charset=UTF-8,' +
    encodeURIComponent(JSON.stringify(this.generateJson()));

  public getJSON(): Observable<any> {
    return this.http.get(this.uri);
  }

  private generateJson(): Photo[] {
    const photos: Photo[] = [];

    for (let index = 0; index < 4000; index++) {
      const id: number = Math.trunc(Math.random() * (1084 - 1) + 1);
      const photo: Photo = new Photo(
        id,
        `https://picsum.photos/id/${id}/500/500.jpg`,
        'Texto de prueba'
      );

      photos.push(photo);
    }
    console.log(photos);

    return photos;
  }
}
