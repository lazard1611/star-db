import React from "react";
import './item-list.scss';

const ItemList = (props) => {
    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {
        const {id} = item;
        const label = renderLabel(item);
        return (
            <li
                key={id}
                className="list_item list_group__item"
            >
                <a
                    className="list_link list_group__link"
                    onClick={(e) => {
                        e.preventDefault();
                        onItemSelected(id)}
                    } href="#">{label}</a>
            </li>
        )
    })

    return (
        <ul className="block list_group">
            {items}
        </ul>
    )
};

ItemList.defaultProps = {
    onItemSelected: () => {}
};

export default ItemList;



