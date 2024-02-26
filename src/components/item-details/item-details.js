import React, {Component} from "react";
import './item-details.scss';
import Spiner from '../spiner/spiner';
import ErrorButton from '../error-button/error-button';

const Record = ({item, field, label}) => {
    return (
        <li className="list_item item_detail__item">
            <span>{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export {
    Record
}

export default class ItemDetails extends Component {
    state = {
        item: null,
        image: null,
        loading: false,
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl
        ) {
            this.setState({
                loading: false,
            })
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) return;

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: true,
                })
            })
    }

    render() {
        const {item, image} = this.state;

        if (!item) {
            return <span>Select a person from a list</span>
        }

        const content = this.state.loading ? <ItemDetailsView
            item={this.state.item}
            image={image}
            props={
                React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, {item});
                })

            }
        /> : <Spiner/>;

        return (
            <div className="block item_detail">
                {content}
            </div>
        )
    }
};

const ItemDetailsView = ({item, image, props}) => {
    const { name } = item;
    return (
        <div className="item_detail__wrap">
            <picture className="item_detail__pic">
                <img src={image}/>
            </picture>
            <div className="item_detail__description">
                <h3 className="item_detail__title">
                    {name}
                </h3>
                <ul className="item_detail__list">
                    {props}
                </ul>
                <ErrorButton/>
            </div>
        </div>
    )
}
