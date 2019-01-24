import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddItemToCartForm from './AddItemToCartForm';
import NotFound from './404NotFound';
import { toTitleCase } from '../constants/constants';

const Product = (props) => {
    // if data is loaded, load the component, otherwise say loading
    if (props.loaded) {
        // if the item exists show all the item information, if it doesn't exist, show the 404 page
        if (props.productList.filter(item => toTitleCase(item.name, '-', ' ', 'lower') === props.productName).length !== 0) {

            const item = props.productList.filter(item => toTitleCase(item.name, '-', ' ', 'lower') === props.productName)[0];

            let rating = [];

            for (let i = 0; i < item.rating; i++) {
                rating.push(<FontAwesomeIcon key={'star' + i} icon="star" />);
            }

            return (
                <section className="container mt-3">
                    <div className="row">
                        <div className="col-md-5 col-lg-3">
                            {/* rubric36 - the user should see an image of the selected product */}
                            <img className="product-image" src={item.imagelink} alt="" />
                        </div>
                        <div className="col-md-6 offset-md-1 col-lg-8">
                            {/* rubric35 - the user should see the name of the selected product */}
                            <h1>{item.name}</h1>
                            {/* rubcric39 - The user should see the price of the selected product */}
                            <p>${item.price.toFixed(2)}</p>
                            {/* rubric37 - the user should see the rating of the selected product */}
                            <p>{rating}</p>
                            {/* rubric38 - the user should see the number of items in stock of the selected item */}
                            <p>{item.stock === 0 ? 'Sorry. Out of stock.' : item.stock + " currently in stock."}</p>
                            {/* rubric40 - The user should see a description of the selected product */}
                            <p>{item.description}</p>
                            <AddItemToCartForm onCartAddItem={props.onCartAddItem} item={item} />

                            {/* rubric43 - The user should see a button labeled “Back”  */}
                            {/* rubric45 - Clicking the “Back” button should take the user back to where they came from, whether it was the Shopping page or the Product Page. */}
                            <button className="btn btn-outline-primary mt-3" onClick={(e) => props.history.goBack()}>Back</button>
                        </div>
                    </div>
                </section>
            )
        } else {
            return <NotFound />;
        }
    } else {
        return (
            <section className="container mt-3">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default Product;