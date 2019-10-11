import React, {useEffect}from 'react';
import {connect} from 'react-redux'
import {fetchSmurfs, postSmurfs} from '../actions/index'
import styled from 'styled-components'

const SmurfWrap = styled.div`
display:flex;
justify-content: center;
align-items: center;
align-content: center;
div{
    width: 33%;
}
`

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
        <SmurfWrap>
            
           { props.smurfs.map(smurf=>{
                return (
                    
                    <div key={smurf.id}>
                        <h3>{smurf.name}</h3>
                        <h3>{smurf.age}</h3>
                        <h3>{smurf.height}</h3>
                    </div>
                )
            })}
        </SmurfWrap>
    );
};

const mapStateToProps = (state) =>{
   return  {smurfs:state.smurfs,
    isFetching: state.isFetching,
    isPosting:state.isPosting,
    error:state.error}
} 


export default connect(mapStateToProps,{fetchSmurfs,postSmurfs})(Smurfs);