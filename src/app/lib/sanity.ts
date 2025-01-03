import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { ImageType } from './interface'; // Import ImageType from where it is defined

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'v0pfapro',
    useCdn: false,
});

const builder = imageUrlBuilder(client);


export function urlFor(source: ImageType) {
    return builder.image(source);
}
