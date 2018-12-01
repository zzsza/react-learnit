import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Main from './components/Main';
import List from './components/List';


class App extends Component {
  
  state = {
    pokemons: [], 
    selectedPokemonUrl: null,
    selectedPokemonData: null,
  }

  async componentDidMount() {
    try {

      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      // 개발자 도구에서 확인하면 pokemon이라는 것이 있음
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      // results 안에 949개의 객체가 있음
      const { results } = data;
      
      this.setState({
        pokemons: results
      })


    } catch (error) {
      console.error(error);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    // 인자를 2개 받음
    // update되고 나서 받음
    // 이전 props, state랑 비교
    try {
      // 특정 케이스만 로직을 수행해야! => If문으로 조건
      if (this.state.selectedPokemonUrl !== prevState.selectedPokemonUrl) {
        // 다를 때만 네트워크 요청
        const response = await fetch(this.state.selectedPokemonUrl);
        const data = await response.json();
        
        // console.log(data);
        
        this.setState({
          selectedPokemonData: data
        })
      }
    } catch (error) {
      console.error(error);
    }
  }

  handlePokemonclick = (url) => {
    // console.log(url);
    this.setState({
      selectedPokemonUrl: url
    })
  }

  render() {
    const { pokemons, selectedPokemonUrl, selectedPokemonData } = this.state;
    return (
        <Wrapper> 
          <Globalstyle /> 
          <Main selectedPokemonData={selectedPokemonData}/>
          <List 
            pokemons={pokemons}
            selectedPokemonUrl={selectedPokemonUrl}
            onPokemonClick={this.handlePokemonclick}
          />
        </Wrapper>
    );
  }
}

const Globalstyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: "NanumSquare";
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export default App;
