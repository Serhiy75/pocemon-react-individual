import { ImgGalleryImage, ImgGalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <ImgGalleryItem
      className="gallery-item"
      onClick={e => openModal(image.largeImageURL, image.tags)}
    >
      <ImgGalleryImage src={image.webformatURL} alt={image.tags} />
    </ImgGalleryItem>
  );
};
