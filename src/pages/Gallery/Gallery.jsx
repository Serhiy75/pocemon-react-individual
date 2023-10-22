import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { fetchImages } from 'services/galleryApi';
import errorImage from 'images/man-pointing-up.jpg';
import { Button, ImageGallery, Loader, Modal, SearchForm } from 'components';

import { AppDiv, SearchHeader, StyledSection } from './Gallery.styled';
import { NotFound } from 'components/NotFound/NotFound';
import { BeginSearch } from 'components/BeginSearch/BeginSearch';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
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
        if (data.hits.length === 0) {
          setIsEmpty(true);
        }
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
    setIsEmpty(false);
  };

  return (
    <>
      <StyledSection>
        <SearchHeader>
          <SearchForm onSubmit={handleSubmit} />
        </SearchHeader>
        <AppDiv>
          <ImageGallery images={images} openModal={openModal} />
        </AppDiv>
        {isLoading && <Loader />}
        {!query && <BeginSearch image={errorImage} />}
        {isEmpty && (
          <NotFound title={' Nothing find! Please enter a valid query! 🤦‍♂️  '} />
        )}
        {loadMore && <Button onClick={changePage} />}
        {isModalOpen && (
          <Modal handleClick={openModal} height={'auto'}>
            <img src={dataModal.image} alt={dataModal.alt} />
          </Modal>
        )}
      </StyledSection>
    </>
  );
};

export default Gallery;
