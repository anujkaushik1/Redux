const initialStat = {
    balls : 60
}

const BallReducer = (state = initialStat, action)=>{

    switch(action.type){
        case 'BUY_BALL':
            // return {...state, balls : state.balls - 1}  
            // return {...state, a : state.balls - 1}   galat hojaega exact same hona chaiye


            return {...state, balls : state.balls -  action.payload}

    
        case 'SELL_BALL':
            return {...state, balls : state.balls + 1}

        default : 
            return state;
    }
}

export default BallReducer;