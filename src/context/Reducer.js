const Reducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                inFetching: true,
                error:false,
            }
        case "LOGIN_SUCCESS":
            return{
                    user:action.payload,
                    inFetching: false,
                    error:false,
                }
        case "LOGIN_FAILURE":
            return{
                        user:null,
                        inFetching: false,
                        error:true,
                    }
            default:
                return state;
    }
};

export default Reducer;