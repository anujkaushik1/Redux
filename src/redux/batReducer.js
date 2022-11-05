const initialStat = {
    bats : 60
}

const BatReducer = (state = initialStat, action)=>{

    switch(action.type){
        case 'BUY_BAT':
            return {...state, bats : state.bats - 1}

        default : 
            return state;
    }
}

export default BatReducer;