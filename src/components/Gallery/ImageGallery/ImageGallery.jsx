import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ImgGallery className="gallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openModal={openModal}
          />
        ))}
      </ImgGallery>
    </>
  );
};
