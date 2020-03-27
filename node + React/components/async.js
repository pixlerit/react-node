export default function({dispatch}) {
    return next => action => {
        //if action does not have payload or, the payload does not have .then
        //property we dont care about it, send it on
        if(!action.payload || !action.payload.then) {
            return next(action);
        }
        //make sure the action's promise resolve
        action.payload
          .then(function(response){
             const newAction =  {...action, payload:response };
             debugger;
             dispatch(newAction);
          })
        
    }
   
}