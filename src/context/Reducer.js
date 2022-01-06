const Reducer = (state, action) => {
    switch(action.type){
        case "LOOIN_START":
            return{
                user:null,
                inFetching: true,
                error:false,
            }
            case "LOOIN_SUCCESS":
                return{
                    user:action.payload,
                    inFetching: false,
                    error:false,
                }
                case "LOOIN_FAILURE":
                    return{
                        user:null,
                        inFetching: false,
                        error:true,
                    }
    }
};

export default Reducer;