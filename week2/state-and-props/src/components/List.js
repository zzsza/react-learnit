// List

import React from 'react'

// 하위
class Artists extends React.Component {
    render() {
        
        const { list } = this.props;
        console.log(list);
        
        return (
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        )
    }
}

// 상위 : 데이터를 관리
class List extends React.Component {
    render() {

        const artists = [
            '모모랜드',
            '트와이스',
            '레드벨벳',
            '장기하밴드'
        ];

        return (
            <div>
                <h1>한국의 아티스트</h1>
                <Artists list={artists} />
            </div>
        )
    }
}

export default List;