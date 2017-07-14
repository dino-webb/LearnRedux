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
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  // console.log('searchText is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

// console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Games'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Work'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Dog'
});

console.log('searchText should be Pacifica', store.getState());
