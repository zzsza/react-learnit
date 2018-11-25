import React from 'react';


// 4) 이벤트 핸들링 - 값 접근하기
class Color extends React.Component {
  
  state = {
    selectedColor: null
  }

  // 버튼 클릭이벤트 핸들러
  handleClick = (event) => {
    const value = event.target.innerHTML;
    // alert(value);
    // window.alert('버튼이 클릭되었습니다!');
    this.setState({
        selectedColor: event.target.innerText
    });

  };

  render() {
    const { selectedColor } = this.state;
    return (
      <div>
        <span>선택한 색깔: {selectedColor}</span>
        <div>
          <button onClick={this.handleClick}>RED</button>
          <button onClick={this.handleClick}>GREEN</button>
          <button onClick={this.handleClick}>BLUE</button>
        </div>
      </div>
    );
  }
}

export default Color;