const GET_DATA = 'GET_DATA';
const LOADED = 'LOADED';
const CART_ADD_ITEM = 'CART_ADD_ITEM';
const UPDATE_FILTERS = 'UPDATE_FILTERS';
const CART_REMOVE_ITEM = ' CART_REMOVE_ITEM';
const CART_UPDATE_ITEM = 'CART_UPDATE_ITEM';
const SORT_DATA = 'SORT_DATA';
const toTitleCase = (str, joiner = ' ', seperator = '-', caseStyle = 'title') => {
  if (caseStyle === 'lower') {
    // if the case is title, cap each word other than and
    if (seperator === '-' && str.indexOf(' ')) {
      // sep is dashes and there are spaces, make them dashes
      const strCopy = str.split(' ').join('-')
      return strCopy.toLowerCase().split(seperator).map(item => { if (item.indexOf('and') === -1) { return item[0].toLowerCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    } else if (seperator === ' ' && str.indexOf('-')) {
      // if sep is spaces and there are dashes, make them spaces
      const strCopy = str.split('-').join(' ')
      return strCopy.toLowerCase().split(seperator).map(item => { if (item.indexOf('and') === -1) { return item[0].toLowerCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    } else {
      return str.toLowerCase().split(seperator).map(item => { if (item.indexOf('and') === -1) { return item[0].toLowerCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    }
  } else {
    // if the case is title, cap each word other than and
    if (seperator === '-' && str.indexOf(' ')) {
      // sep is dashes and there are spaces, make them dashes
      const strCopy = str.split(' ').join('-')
      return strCopy.toLowerCase().split(seperator).map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    } else if (seperator === ' ' && str.indexOf('-')) {
      // if sep is spaces and there are dashes, make them spaces
      const strCopy = str.split('-').join(' ')
      return strCopy.toLowerCase().split(seperator).map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    } else {
      return str.toLowerCase().split(seperator).map(item => { if (item.indexOf('and') === -1) { return item[0].toUpperCase() + item.slice(1, item.length) } else { return item } }).join(joiner);
    }
  }
}

module.exports = {
  GET_DATA,
  LOADED,
  UPDATE_FILTERS,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_ITEM,
  toTitleCase,
  SORT_DATA
}