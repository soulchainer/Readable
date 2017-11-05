// as seen on the re-ducks architecture example project https://github.com/FortechRomania/react-redux-complete-example/blob/master/src/app/state/utils/createReducer.js
export default ( initialState ) => ( reducerMap ) => ( state = initialState, action ) => {
  const reducer = reducerMap[ action.type ];
  return reducer ? reducer( state, action ) : state;
};
