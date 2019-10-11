import React, {useEffect}from 'react';
import {connect} from 'react-redux'
import {fetchSmurfs, postSmurfs} from '../actions/index'

const Smurfs = (props) => {
    console.log(props)
    useEffect(()=>{
        props.fetchSmurfs()
    },[])

    const newSmurf = {
        name: "Sleepy",
        age: 200,
        height: "5cm",
        id: 1
      }
    useEffect(()=>{
        props.postSmurfs(newSmurf)
    },[])


    return (
        props.smurfs.map(smurf=>{
            return (
                
                <div key={smurf.id}>
                    <p>{smurf.name}</p>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
            )
        })
    );
};

const mapStateToProps = (state) =>{
   return  {smurfs:state.smurfs,
    isFetching: state.isFetching,
    isPosting:state.isPosting,
    error:state.error}
} 


export default connect(mapStateToProps,{fetchSmurfs,postSmurfs})(Smurfs);