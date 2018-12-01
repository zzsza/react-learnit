import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  render() {
    const { pokemons, onPokemonClick, selectedPokemonUrl } = this.props;

    return (
      <Wrapper>
        {pokemons.map((pokemon) => {
          const { name, url } = pokemon;
          return (
            <Item 
              key={url}
              active={url === selectedPokemonUrl}
              onClick={()=> onPokemonClick(url)}
            >{name}</Item>
          )
        })}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: inline-block;
  width: 250px;
  height: 800px;
  border: 3px solid #333;
  border-left: 0px;
  overflow-y: scroll;
`;

const Item = styled.div`
  cursor: pointer;
  height: 60px;
  padding: 15px 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: ${(props) => props.active ? '#fff' : '#333'};
  background-color: ${(props) => props.active ? '#333' : '#f9f9f9' };
`;

List.propTypes = {
  pokemons: PropTypes.array,
  selectedPokemonUrl: PropTypes.string,
  onPokemonClick: PropTypes.func
}