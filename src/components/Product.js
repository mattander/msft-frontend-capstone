import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Product = (props) => {
    if (props.loaded) {
        const toTitleCase = (str, joiner = ' ', seperator = '-') => {
            if (str.indexOf(seperator) !== -1) {
                return str.toLowerCase().split(seperator).map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
            } else {
                return str.toLowerCase().split(seperator).map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
            }
        }
        const cat = toTitleCase(props.match.params.category, ' ');
        const subcat = toTitleCase(props.match.params.subcategory, ' ');
        const product = toTitleCase(props.match.params.product, ' ');
        const item = props.data.filter(item => item.category === cat)[0].subcategories.filter(item => item.name === subcat)[0].items.filter(item => item.name === product)[0];

        let rating = [];

        for (let i = 0; i < item.rating; i++) {
            rating.push(
                <FontAwesomeIcon key={'star' + i} icon="star" />
            );
        }

        return (
            <section>
                <div className="row">
                    <div className="col-md-5 col-lg-3">
                        <img className="product-image" src={item.imagelink} alt="" />
                    </div>
                    <div className="col-md-6 offset-md-1 col-lg-8">
                        <h1>{item.name}</h1>
                        <p>${item.price.toFixed(2)}</p>
                        <p>{rating}</p>
                        <p>{item.stock} currently in stock.</p>
                        <p>{item.description}</p>
                        <Link className="btn btn-primary" to={"/shop/" + props.match.params.category + "/" + props.match.params.subcategory}>Back to {toTitleCase(props.match.params.subcategory, ' ')}</Link>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <p>Loading...</p>
        )
    }
}

export default Product;