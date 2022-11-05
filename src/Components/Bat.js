import React, { useState } from 'react'
import {connect} from 'react-redux'

function Bat(props) {

    console.log(props);

    // const [bat, setBat] = useState(60);

    return (
        <div>
            {/*         
        <h1>Bat : {bat}</h1>
        <button onClick={() => setBat(bat - 1)}>Click here</button> */}

        <h1>Bat : {props.anuj}</h1>
        <button onClick={props.buyBat}>Click Here</button>

        </div>
    )
}

const mapStateToProps = (state) => {   // global store se value chaiye toh mapState vala fun use krna hoga
    return {
        anuj : state.bat.bats
    }
}


// iss function mei hum apne khud ke functions define krte hai
const mapDispatchToProps = (dispatch) => {   // kuch store ki state mei change krwana hai
    return {
        buyBat : () => dispatch({type : 'BUY_BAT'})  // yeh type vala ek objject hai or yeh reducer ke pass jata hai or batata hai yeh wala action hai or usk accoring change krdo
            // dispatch ka kaam iss normal se object ko reducer tk phochana
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bat)

// connect method => mapsStatetorpops ko state provide krta hai

// connect ke args mei map vala method chalaya usne return kra ek object or yeh object hamarae component bat ko mila phir usne as a props use krlia
// iss component ke props me jo jo humn return kra woh aagay