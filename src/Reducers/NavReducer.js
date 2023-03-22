const initialState={
    title:"notes"
    }

    const navReducer=(state=initialState,action)=>{

        switch(action.type){
                case "notes" : return {title:"notes"}
                case "archive" : return {title:"archive"}
                case "trash" : return {title:"trash"}
        
                default: return state 
        }
    }

    export default navReducer