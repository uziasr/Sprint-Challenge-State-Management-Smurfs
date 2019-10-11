import React from 'react';
import {connect} from 'react-redux'

const Smurfs = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

const mapStateToProps = (state) =>{
   return  {smurfs:state.smurfs,
    isFetching: state.isFetching,
    isPosting:state.isPosting,
    error:state.error}
} 


export default connect(mapStateToProps,{})(Smurfs);