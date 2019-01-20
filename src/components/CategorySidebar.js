import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategorySidebar = (props) => {
  if (props.loaded) {
    const toUrlCase = (str) => {
      return str.toLowerCase().split(' ').join('-');
    }
    const categoryList = props.data.map((item, index) => {
      return (
        <article key={"category" + item.category}>
          <a data-toggle="collapse" href={'#collapse' + index} role="button" aria-expanded="false" aria-controls="collapseExample">
            {item.category} <FontAwesomeIcon icon="caret-down" />
          </a>
          <ul id={'collapse' + index} className="collapse">
            {item.subcategories.map((subItem, index) => {
              const subCatClasses = subItem.items.length === 0 ? 'disabled' : null;

              return (
                <li key={subItem.name}>
                  <Link to={'/shop/' + toUrlCase(item.category) + '/' + toUrlCase(subItem.name)} className={subCatClasses}>{subItem.name}</Link> ({subItem.items.length})
            </li>
              )
            })}
          </ul>
        </article>
      )
    });

    return (
      <section className="accordion card bg-light p-3 mb-5" id="categoryListAccordion">
        <p className="h5 mb-3">Categories</p>
        {categoryList}
      </section>
    );
  } else {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
};

export default CategorySidebar;