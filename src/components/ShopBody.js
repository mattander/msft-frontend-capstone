import React, { Component } from 'react';
import Card from './Card';
import FilterBarContainer from '../containers/FilterBarContainer';
import { Redirect } from 'react-router-dom';
import { toTitleCase } from '../constants/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ShopBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }
  }

  goToPage(e) {
    this.setState({ page: parseInt(e.target.attributes['data-page'].value) });
  }

  prevPage(e) {
    const currentPage = this.state.page;
    this.setState({ page: currentPage - 1 });
  }

  nextPage(e) {
    const currentPage = this.state.page;
    this.setState({ page: currentPage + 1 });
  }

  render() {
    if (this.props.loaded) {
      if (this.props.subcategory) {
        if (this.props.data.filter(item => toTitleCase(item.category, ' ') === this.props.category)[0].subcategories.filter(item => item.name === this.props.subcategory).length === 0) {
          //invalid subcategory in url
          return <Redirect to="/404" />
        } else {
          //valid category
          const itemsList = this.props.data.filter(item => toTitleCase(item.category, ' ') === this.props.category)[0].subcategories.filter(item => item.name === this.props.subcategory)[0].items;

          const filterItems = (items) => {
            let filteredList = items;
            if (this.props.filters.sortBy) {
              if (this.props.filters.sortBy === 'lowToHigh') {
                const listCopy = filteredList.sort((a, b) => a.price - b.price);
                filteredList = listCopy;
              } else if (this.props.filters.sortBy === 'highToLow') {
                const listCopy = filteredList.sort((a, b) => b.price - a.price);
                filteredList = listCopy;
              } else if (this.props.filters.sortBy === 'aToZ') {
                const listCopy = filteredList.sort((a, b) => {
                  if (a.name.toString() < b.name.toString()) {
                    return -1;
                  } else {
                    return 1;
                  }
                });
                filteredList = listCopy;
              } else if (this.props.filters.sortBy === 'zToA') {
                const listCopy = filteredList.sort((a, b) => {
                  if (a.name.toString() > b.name.toString()) {
                    return -1;
                  } else {
                    return 1;
                  }
                });
                filteredList = listCopy;
              } else if (this.props.filters.sortBy === 'ratingHighToLow') {
                const listCopy = filteredList.sort((a, b) => {
                  if (parseInt(b.rating) <= parseInt(a.rating)) {
                    return -1;
                  } else {
                    return 1;
                  }
                });
                filteredList = listCopy;
              } else if (this.props.filters.sortBy === 'ratingLowToHigh') {
                const listCopy = filteredList.sort((a, b) => {
                  if (parseInt(a.rating) <= parseInt(b.rating)) {
                    return -1;
                  } else {
                    return 1;
                  }
                });
                filteredList = listCopy;
              } else {
                filteredList = items;
              }
            }

            if (this.props.filters.inStockOnly) {
              const listCopy = filteredList.filter(item => item.stock > 0);
              filteredList = listCopy;
            }
            return filteredList;
          };

          const filteredItems = filterItems(itemsList);

          // Pagination code. Saving this just in case.

          const paginateItems = (list, itemsPerPage) => {
            if (list.length > itemsPerPage) {
              let paginatedItemsList = [];
              if (parseInt(list.length) % parseInt(itemsPerPage > 0)) {
                for (let i = 0; i <= parseInt(list.length / itemsPerPage); i++) {
                  const startIndex = itemsPerPage * i;
                  const stopIndex = i < parseInt(list.length / itemsPerPage) ? itemsPerPage * (i + 1) : list.length;
                  paginatedItemsList.push(list.slice(startIndex, stopIndex));
                }
              } else {
                for (let i = 0; i < parseInt(list.length / itemsPerPage); i++) {
                  const startIndex = itemsPerPage * i;
                  const stopIndex = i < parseInt(list.length / itemsPerPage) ? itemsPerPage * (i + 1) : list.length;
                  paginatedItemsList.push(list.slice(startIndex, stopIndex));
                }
              }
              return paginatedItemsList;
            } else {
              return list;
            }
          }

          let paginatedItems = [];

          if (filteredItems.length > this.props.filters.showNumItems) {
            paginatedItems = paginateItems(filteredItems, this.props.filters.showNumItems).map((item, index) => {
              return item.map((item, index) => {
                return (
                  <Card onCartAddItem={this.props.onCartAddItem} key={'product-' + item.name} itemData={item} itemIndex={index} itemType="product" categoryInfo={this.props.categoryInfo} history={this.props.history} />
                )
              })
            });
          } else {
            paginatedItems = filteredItems.map((item, index) => {
              return (
                <Card onCartAddItem={this.props.onCartAddItem} key={'product-' + item.name} itemData={item} itemIndex={index} itemType="product" categoryInfo={this.props.categoryInfo} history={this.props.history} />
              );
            })
          };

          const paginationButtons = paginateItems(filteredItems, this.props.filters.showNumItems).map((item, index) => {
            return <li key={'page' + index} className={this.state.page === index ? "page-item active test" : "page-item no"}><button data-page={index} onClick={(e) => this.goToPage(e)} className="page-link">{index + 1}</button></li>
          })

          if (filteredItems.length === 0) {
            return (
              <section id="shopBodyContent" className="p-5">
                <p className="lead">Sorry, it looks like we don't have any products in this category right now.</p>
                <p className="lead">Look in a different category to see what we have for sale.</p>
              </section>
            );
          } else {
            return (
              <section id="shopBodyContent" className="container-fluid">
                {/* rubric14 - The user shall see a controls bar */}
                {/* rubric20 - The user shall see a grid that is populated with the products of
the selected category  */}
                <FilterBarContainer itemsShown={paginatedItems} page={this.state} itemsList={itemsList} filteredItemsList={filteredItems} categoryInfo={this.props.categoryInfo} />
                <div className="card-container">
                  {filteredItems.length > this.props.filters.showNumItems ? paginatedItems[this.state.page] : paginatedItems}
                </div>
                {filteredItems.length > parseInt(this.props.filters.showNumItems) ? <nav className="d-flex justify-content-center">
                  <ul className="pagination">
                    {this.state.page === 0 ? <li className="page-item disabled"><button className="page-link" onClick={(e) => this.prevPage(e)}><FontAwesomeIcon icon="chevron-left" /> Prev</button></li> : <li className="page-item"><button className="page-link" onClick={(e) => this.prevPage(e)}><FontAwesomeIcon icon="chevron-left" /> Prev</button></li>}
                    {paginationButtons}
                    {this.state.page === paginateItems(filteredItems, this.props.filters.showNumItems).length - 1 ? <li className="page-item disabled"><button className="page-link" onClick={(e) => this.nextPage(e)}>Next <FontAwesomeIcon icon="chevron-right" /></button></li> : <li className="page-item"><button className="page-link" onClick={(e) => this.nextPage(e)}>Next <FontAwesomeIcon icon="chevron-right" /></button></li>}
                  </ul>
                </nav> : null}
              </section>
            );
          }
        }

      } else if (this.props.category) {
        //Only category is provided

        if (this.props.data.filter((item) => item.category === this.props.category).length === 0) {
          //invalid category
          return <Redirect to="/404" />;
        } else {
          //valid category
          return (
            <section id="shopBodyContent" className="shop-content__no-sub-this.props.category">
              <h3>Subcategories in {this.props.category}</h3>
              <p>Pick a subcategory</p>
              <div className="card-container">
                {this.props.data.filter((item) => item.category === this.props.category)[0].subcategories.map((item, index) => {
                  return (
                    <Card key={'subcategory-' + item.name} itemData={item} itemIndex={index} itemType="subCategory" categoryInfo={this.props.categoryInfo} />
                  )
                })}
              </div>
            </section>
          )
        }
      } else {
        //no category
        return (
          <section id="shopBodyContent" className="shopContent-all">
            <p>Pick a category below or in the panel on the left.</p>
            <div className="card-container">
              {this.props.data.map((item, index) => {
                return (
                  <Card key={'category-' + item.category} itemData={item} itemType="category" />
                )
              })}
            </div>
          </section>
        )
      }
    } else {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
  }
}

export default ShopBody;