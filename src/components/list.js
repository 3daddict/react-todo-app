import React from 'react';

const List = (props) => {
        const listElements = props.data.map((item, index) => {
            return <li className="collection-item" key={item._id}>{item.title}</li>
        });

        return (
                <ul className="collection">
                    {listElements}
                </ul>
        )
    }

export default List;