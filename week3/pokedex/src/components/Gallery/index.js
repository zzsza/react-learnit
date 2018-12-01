import React from 'react';
import styled from 'styled-components';
import GalleryCarousel from '../GalleryCarousel'
import PropTypes from 'prop-types';

export default class Gallery extends React.Component {
  
  state = {
    selectedSpriteType: 'front_default',
  }

  handleClick = (type) => {
    this.setState({
      selectedSpriteType: type
    })
  }

  render() {
    const { sprites } = this.props;
    // console.log(sprites)
    let selectedSprite = null;
    let carouselImages = [];

    if (sprites) {
      selectedSprite = sprites[this.state.selectedSpriteType];

      carouselImages = Object.keys(sprites).filter((key) => {
        return sprites[key] !== null;
      }).map((key) => {
        return {
          type: key,
          url: sprites[key]
        }
      })
       // object를 루프가 불가능해서 key만 접근
      //  console.log(carouselImages)

    }

    // console.log(sprites);
    return (
      <Wrapper>
        <Main image={selectedSprite}/>
        <GalleryCarousel images={carouselImages} onClick={this.handleClick}/>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Main = styled.div`
  width: 100%;
  height: 270px;
  border: 3px solid #333;
  background-color: #fff;
  margin-bottom: 30px;
  ${(props) => {
    if (props.image) {
      return `background-image: url(${props.image});`
    }
  }}
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
`;

Gallery.propTypes = {
  sprites: PropTypes.object,
}