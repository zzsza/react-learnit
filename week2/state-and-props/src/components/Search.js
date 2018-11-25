import React from 'react';

// 하위
class SearchInput extends React.Component {
    render() {
        const { value, onChange } = this.props;
        return (
            <div>
                <input 
                    value={value}
                    onChange={onChange}
                />
            </div>
        )
    }
}

// 상위
class Search extends React.Component {

    state = {
        value: '안녕하세요'
    }

    handleChange = (event) => {
        // console.log('변화됨!');
        
        const value = event.target.value; // 이게 각 element마다 데이터를 빼오는 패턴. 이 패턴은 많이 쓰임
        console.log(value)
        this.setState({
            value: value
        });
    

    }
    render () {
        const {value} = this.state;

        return (
            <div>
                <h1>검색어: {value}</h1>
                <SearchInput 
                    value={value}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Search