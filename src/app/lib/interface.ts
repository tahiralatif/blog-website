import { PortableTextBlock } from "@portabletext/types";

export interface ImageType {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
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
  smallDescription: string; // Changed from ReactNode to string
  title: string;
  content: PortableTextBlock[]; // PortableTextBlock[] is correct
  titleImage: ImageType;
  currentSlug: string;
}
