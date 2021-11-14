import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoremIpsum } from 'lorem-ipsum';
import { Photo } from '../models/photo.model';

@Injectable()
export class PhotoSanitasService {
  constructor(private http: HttpClient, private lorenImpsum: LoremIpsum) {}

  private lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  public API_URL =
    'data:application/json;charset=UTF-8,' +
    encodeURIComponent(JSON.stringify(this.generateJson()));

  /*Servicio que devuelve un JSON de tipo Photo[]*/
  public getJSON(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  /*Función de generación de un Json Aleatorio de tipo Photo[]*/
  public generateJson(): Photo[] {
    const photos: Photo[] = [];

    for (let index = 0; index < 4000; index++) {
      const id: number = Math.trunc(Math.random() * (1084 - 1) + 1);
      const photo: Photo = new Photo(
        id,
        `https://picsum.photos/id/${id}/500/500.jpg`,
        this.lorem.generateWords(5)
      );

      photos.push(photo);
    }

    return photos;
  }
}
