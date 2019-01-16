import React from 'react'

const FilterBar = (props) => {
  const toTitleCase = (str, joiner) => {
    if (str.indexOf('-') !== -1) {
      return str.toLowerCase().split('-').map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    } else {
      return str.toLowerCase().split(' ').map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    }
  }
  const subcat = toTitleCase(props.categoryInfo.subcategory, ' ');
  console.log(props.itemsList[0])
  return (
    <div className="d-flex container-fluid justify-content-between">
      <div>Showing {props.itemsList.length} of {props.itemsList.length} items in {subcat}</div>

      <div>Filters:
        <div className="ml-3 form-group form-check">
          <input onChange={(e) => props.onFilterChange({
            filter: 'inStockOnly',
            state: e.target.checked
          })} type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">In-stock only <span className="text-muted">({props.itemsList.filter(item => item.stock > 0).length})</span></label>
        </div>
        <div className="ml-3 form-group form-check">
          <input onChange={(e) => props.onFilterChange({
            filter: 'testFilter',
            state: 'reverseAlpha'
          })} type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">In-stock only <span className="text-muted">({props.itemsList.filter(item => item.stock > 0).length})</span></label>
        </div>
      </div>

    </div>
  )
}

export default FilterBar;