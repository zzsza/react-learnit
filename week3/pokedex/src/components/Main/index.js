import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import logo from '../../assets/pokedex-logo.svg'
import Gallery from '../Gallery';

export default class Main extends React.Component {
  render() {
    const { selectedPokemonData } = this.props;
    // console.log(selectedPokemonData);
    return (
      <Wrapper>
        <Logo>
          <img src={logo} width="74px" alt="logo"/>
        </Logo>
       <Gallery sprites={selectedPokemonData ? selectedPokemonData.sprites : null} />

      <Info>
        {
          selectedPokemonData ? (
            <div>
              <p>이름 : {selectedPokemonData.name}</p>
              <p>신장: {selectedPokemonData.height}</p>
              <p>무게: {selectedPokemonData.weight}</p>
              <p>타입: {selectedPokemonData.types[0].type.name}</p>
            </div>
          ) : null
        }

      </Info>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: inline-block;
  width: 640px;
  height: 800px;
  background-color: #DF0025;
  border: 3px solid #333;
  padding: 0px 100px;
`;

const Logo = styled.div`
  padding: 30px 0px;
  text-align: center;
`;

const Info = styled.div`
  padding: 30px;
  border: 3px solid #333;
  height: 180px;
  background-color: #fff;
  text-align: left;
  p {
    font-size: 20px;
    font-weight: 800;
    margin: 0px;
  }
`;

Main.propTypes = {
  // 어떤 prop을 받는지 알아야 함 App.js에서 확인
  selectedPokemonData : PropTypes.object
  // 여기에 array가 들어오면 콘솔에서 에러 발생
  // 협업시 prop type을 정의해줘야 함
  // 혹은 type script
}