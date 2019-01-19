import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AddItemToCartForm from './AddItemToCartForm';
import NotFound from './404NotFound';

const Product = (props) => {
    // if data is loaded, load the component, otherwise say loading
    if (props.loaded) {

        // if the item exists show all the item information, if it doesn't exist, show the 404 page
        if (props.data.filter(item => item.category === props.categoryName)[0].subcategories.filter(item => item.name === props.subcategoryName)[0].items.filter(item => item.name === props.productName).length !== 0) {
            const item = props.data.filter(item => item.category === props.categoryName)[0].subcategories.filter(item => item.name === props.subcategoryName)[0].items.filter(item => item.name === props.productName)[0];

            let rating = [];

            for (let i = 0; i < item.rating; i++) {
                rating.push(<FontAwesomeIcon key={'star' + i} icon="star" />);
            }

            return (
                <section>
                    <div className="row">
                        <div className="col-md-5 col-lg-3">
                            {/* rubric36 - the user should see an image of the selected product */}
                            <img className="product-image" src={item.imagelink} alt="" />
                        </div>
                        <div className="col-md-6 offset-md-1 col-lg-8">
                            {/* rubric35 - the user should see the name of the selected product */}
                            <h1>{item.name}</h1>
                            {/* rubcric39 - the user should see the price of the selected product */}
                            <p>${item.price.toFixed(2)}</p>
                            {/* rubric37 - the user should see the rating of the selected product */}
                            <p>{rating}</p>
                            {/* rubric38 - the user should see the number of items in stock of the selected item */}
                            <p>{item.stock === 0 ? 'Sorry. Out of stock.' : item.stock + " currently in stock."}</p>
                            {/* rubric40 - the user should see a description of the selected product */}
                            <p>{item.description}</p>
                            {/* rubric41 and rubric 42 - user should see an input field for quantity and a button to add to cart. */}
                            <AddItemToCartForm onCartAddItem={props.onCartAddItem} item={item} />

                            {/* rubric43 - user should see a button labeled back */}
                            {/* I changed the text for the button to be more descriptive for better UX */}
                            <Link className="btn btn-outline-primary mt-5" to={"/shop/" + props.match.params.category + "/" + props.match.params.subcategory}>Back to {props.subcategoryName}</Link>
                        </div>
                    </div>
                </section>
            )
        } else {
            return <NotFound />;
        }
    } else {
        return (
            <p>Loading...</p>
        )
    }
}

export default Product;