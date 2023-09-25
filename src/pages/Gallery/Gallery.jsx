import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { fetchImages } from 'services/galleryApi';
import { AppDiv } from './Gallery.styled';
import { SearchForm } from 'components/SearchForm';
import { ImageGallery } from 'components/Gallery/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataModal, setDataModal] = useState({
    image: '',
    alt: '',
  });

  useEffect(() => {
    if (!query) return;
    const getSearchedImages = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setLoadMore(page * 12 < data.totalHits);
      } catch (error) {
        Notiflix.Notify.failure(
          'Failed to fetch images. Please try again later.'
        );
      } finally {
        setIsLoading(false);
      }
    };
    getSearchedImages();
  }, [query, page]);

  const openModal = (image, alt) => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
    setDataModal({ image, alt });
  };
  const changePage = () => {
    setPage(prevPage => prevPage + 1);
  };
  const handleSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  return (
    <AppDiv>
      <SearchForm onSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {loadMore && <Button onClick={changePage} />}
      {isModalOpen && (
        <Modal handleClick={openModal}>
          <img src={dataModal.image} width="70%" alt={dataModal.alt} />
        </Modal>
      )}
    </AppDiv>
  );
};

export default Gallery;
