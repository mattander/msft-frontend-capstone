import React from 'react';

const FilterBar = (props) => {
  return (
    <div className="container-fluid">
      {/* rubric15 - The user shall see a section in the controls bar that displays the
selected category name  */}
      {/* rubric16 - The user shall see a section in the controls bar that displays the
number of items shown out of the total number of items in the
selected category */}
      {/* rubric27 - Clicking on a subcategory should change the name of the selected
category in the controls bar -- it's pulled from the route */}
      <div>Showing {props.filteredItemsList.length} of {props.itemsList.length} items in Category: {props.subcategory}</div>
      <form className="my-3 form-inline">
        <div className="form-group form-check">
          {/* rubric17 - The user shall see a toggle switch labeled “In Stock Only” in the
controls bar */}
          <input onChange={(e) => props.onFilterChange({
            filter: 'inStockOnly',
            state: e.target.checked
          })} type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Show in-stock only&nbsp;<span className="text-muted">({props.itemsList.filter(item => item.stock > 0).length})</span></label>
        </div>
        {/* rubric18 - The user shall see a dropdown list labeled “Sort By” that has the
following options: (None, Price, Alphabetical, Rating) in the
controls bar */}
        <div className="ml-3 form-group">
          <label className="sr-only" htmlFor="itemSort">Sort items:</label>
          <select onChange={(e) => props.onFilterChange({
            filter: 'sortBy',
            state: e.target.value
          })} className="form-control custom-select custom-select-sm ml-2" id="itemSort" defaultValue="none">
            <option value="none">None</option>
            <option value="lowToHigh">Price (low to high)</option>
            <option value="highToLow">Price (high to low)</option>
            <option value="aToZ">Alpha (a to z)</option>
            <option value="zToA">Reverse alpha (z to a)</option>
            <option value="ratingHighToLow">Rating (high to low)</option>
            <option value="ratingLowToHigh">Rating (low to high)</option>
          </select>
        </div>
        <div className="ml-3 form-group">
          <label htmlFor="showNumItems">Items per page:</label>
          <select onChange={(e) => props.onFilterChange({
            filter: 'showNumItems',
            state: parseInt(e.target.value)
          })} className="form-control custom-select custom-select-sm ml-2" id="showNumItems" defaultValue="6">
            <option value="6">6</option>
            <option value="10">10</option>
            <option value="14">14</option>
          </select>
        </div>
      </form>


    </div>
  )
}

export default FilterBar;