import { PortableTextBlock } from '@portabletext/types';

export interface ImageType {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface simpleBlogCard {
  title: string;
  correctTitle: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: ImageType;
}

export interface blogArticle {
  title: string;
  content: PortableTextBlock[] ; // Replace `any` with `PortableTextBlock[]`
  titleImage: ImageType;
  currentSlug: string;
}
