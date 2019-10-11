import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const FormWrap = styled.div`
display:flex;
form{
    display: flex;
    flex-direction:column;
    width: 50%;
    justify-content: center;
    align-items:center;
    align-content: center;
    margin: 3% auto;
    input{
        margin: 4%;
    }
}
`

document.body.style.background = 'lightblue'

const SmurfForm = (props) => {
    console.log('smurf',props)
   
    useEffect((newSmurf)=>{
        if (smurf.age){
        props.postSmurfs(newSmurf)}
    },[])

    const [smurf, setSmurf] = useState({
        name:'',
        age:0,
        height:0
    })

    const nameHandleChanges = e => {
        console.log(e.target)
        const g =e.target.placeholder
        setSmurf(
            {
            ...smurf,
            name: e.target.value
            }
        );
      };
      const ageHandleChanges = e => {
        console.log(e.target)
        setSmurf(
            {
            ...smurf,
            age: Number(e.target.value)
            }
        );
      };
      const heightHandleChanges = e => {
        console.log(e.target)
        setSmurf(
            {
            ...smurf,
            height: (`${e.target.value}cm`)
            }
        );
      };

    return (
        <FormWrap>
            <form>
                <input type='text' placeholder='name' onChange={nameHandleChanges}/>
                <input type='text'  placeholder='age' onChange={ageHandleChanges}/>
                <input type='text'  placeholder='height in cm' onChange={heightHandleChanges}/>
                <button onClick={()=>{props.postSmurfs(smurf)}}>Submit Smurf</button>
            </form>
        </FormWrap>
    );
};
export default SmurfForm
