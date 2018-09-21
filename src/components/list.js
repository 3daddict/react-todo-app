import React from 'react';
import Item from './item';

const List = (props) => {
        const listElements = props.data.map((item, index) => {
            return <Item key={item._id} item={item} delete={() => props.delete(item._id)} />
        });

        return (
                <ul className="collection">
                    {listElements}
                </ul>
        )
    }

export default List;