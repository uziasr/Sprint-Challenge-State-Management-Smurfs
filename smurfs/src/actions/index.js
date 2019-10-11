import axios from 'axios'

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const START_POST = 'START_POST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE'; 

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING });
    // do some async action and dispatch an error or success action
    axios
      .get(
        'http://localhost:3333/smurfs'
      )
      .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.message }))
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
  };

export const postSmurfs = (dispatch) =>{
    dispatch({type:START_POST});
    axios
    .post('http://localhost:3333/smurfs')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}