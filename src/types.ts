import { Image } from "./components/react-grid-gallery"

export type Category = {
  id: string;
  name: string;
  description?: string;
}

export type ImageInGallery = Image & {
  categoryId: string;
}