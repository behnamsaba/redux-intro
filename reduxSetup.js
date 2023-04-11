const INITIAL_STATE = { mood : "(-_-)/"};

function moodSelector(state=INITIAL_STATE,action) {
    switch(action.type){
        case "HAPPY":
            return {...state , mood: "^_^"}
        
        case "SAD":
            return {...state , mood: "⊙︿⊙"}

        case "ANGRY":
            return {...state ,mood:"ಠ_ಠ"}
        
        case "NORMAL":
            return {...state , mood: "(-_-)/"};

        default:
            return state;
    }
}

const store = Redux.createStore(moodSelector);



