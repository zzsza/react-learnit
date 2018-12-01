import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// class를 사용하지 않고 함수를 사용해 만들어보겠음!
const GalleryCarousel = (props) => {
  const { images, onClick } = props;
  return (
    <Wrapper>
    {images.map((image) => {
      const { type, url } =image;
      return (
        <Box 
          key={url}
          onClick={() => onClick(type)}
        >
          <img src={url} alt={type}/>
        </Box>
      )
    })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  white-space: nowrap;
  overflow-y: scroll;
`;
const Box = styled.div`
  display: inline-block;
  margin-right: 20px;
  border: 3px solid #333;
  width: 100px;
  height: 100px;
  background-color: #fff;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;

GalleryCarousel.PropTypes = {
  images: PropTypes.array
}

export default GalleryCarousel;
