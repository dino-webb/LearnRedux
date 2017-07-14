var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}
var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }

  return state;
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Pacifica'
});

console.log('searchText should be Pacifica', store.getState());
