import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategorySidebar = (props) => {
  if (props.loaded) {
    const categoryList = props.data.map((item, index) => {
      return (
        <article key={"category" + item.category}>
          <a data-toggle="collapse" href={'#collapse' + index} role="button" aria-expanded="false" aria-controls="collapseExample">
            {item.category} <FontAwesomeIcon icon="caret-down" />
          </a>
          <ul id={'collapse' + index} className="collapse show">
            {item.subcategories.map((subItem, index) => {
              const subCatClasses = subItem.items.length === 0 ? 'disabled' : null;

              return (
                <li key={subItem.name}>
                  <Link onClick={(e) => props.onCategoryChange({
                    category: {
                      name: item.category
                    },
                    subcategory: {
                      name: subItem.name,
                      index: index
                    }
                  })} to={'?subcategory=' + subItem.name.split(' ').join('')} className={subCatClasses}>{subItem.name}</Link> ({subItem.items.length})
            </li>
              )
            })}
          </ul>
        </article>
      )
    });

    return (
      <section className="accordion card bg-light p-3 mb-5" id="categoryListAccordion">
        <h3 className="mb-3">Categories</h3>
        {categoryList}
      </section>
    );
  } else {
    return <p>Loading...</p>
  }
};

export default CategorySidebar;