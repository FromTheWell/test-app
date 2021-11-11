import { LoremIpsum } from 'lorem-ipsum';
import { Photo } from '../models/photo.model';

export function generateJson(): Photo[] {
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
