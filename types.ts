export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  instagram?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role: string;
}

export interface VIPPackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}