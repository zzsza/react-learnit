import React from 'react';

// List
class List extends React.Component {
  // props을 받아와서 사용
  render() {
    const { tags } = this.props;
    // console.log(tags);
    return (
      <div>
        {tags.map((tag, index) => {
          return (
            <div key={index}>{tag}</div>
          );
        })}
      </div>
    )
  }
}

// Input
class Input extends React.Component {
  // 추가하는 것을 state로 관리
  
  render() {
    const { value, onChange, onAdd } = this.props;
    // console.log(value)
    return (
      <div>
        <input 
          value={value}
          onChange={onChange}/>
        <button onClick={onAdd}>추가</button>
    </div>
    )
  }
}


class Tags extends React.Component {

  state = {
    tags: [
      '이태원맛집',
      '압구정마카롱',
      '겨울코디'
    ],
    
    value: '', 
    // value를 가지고, 
    // tags 안에 handleChange 생성, 
    // input에 넘겨주기
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({
      value:value
    });
  }

  handleAdd = () => {
  // value값을 tags 뒤에 붙이면 됨
    this.setState({
      tags: [
        ...this.state.tags,
        this.state.value
        // ...은 state의 tags를 나열
      ],
      value : '', // input을 추가하고 나서 안에있는 값이 빈값으로
      // 데이터는 immutable하게 해야됨! 변수에 새로운 값을 할당ㄴㄴ
      // 새로운 것을 생성해서 할당
    })
  }

  render() {
    const { tags, value } = this.state;
    return (
      <div>
        <List tags={tags}/>
        <Input 
          value={value}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
        />
      </div>

    );
  }
}

export default Tags;