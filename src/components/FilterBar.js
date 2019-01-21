import React from 'react'
import { toTitleCase } from '../constants/constants';

const FilterBar = (props) => {
  const subcat = toTitleCase(props.categoryInfo.subcategory, ' ');
  return (
    <div className="container-fluid">
      <div>Showing {props.filteredItemsList.length} of {props.itemsList.length} items in {subcat}</div>
      <form className="my-3 form-inline">
        <div className="form-group form-check">
          <input onChange={(e) => props.onFilterChange({
            filter: 'inStockOnly',
            state: e.target.checked
          })} type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Show in-stock only&nbsp;<span className="text-muted">({props.itemsList.filter(item => item.stock > 0).length})</span></label>
        </div>

        <div className="ml-3 form-group">
          <label className="sr-only" htmlFor="itemSort">Sort items:</label>
          <select onChange={(e) => props.onFilterChange({
            filter: 'sortBy',
            state: e.target.value
          })} className="form-control custom-select custom-select-sm ml-2" id="itemSort" defaultValue="lowToHigh">
            <option value="lowToHigh">Price (low to high)</option>
            <option value="highToLow">Price (high to low)</option>
          </select>
        </div>
      </form>


    </div>
  )
}

export default FilterBar;