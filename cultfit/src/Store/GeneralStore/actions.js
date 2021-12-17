import axios from 'axios';


export const Actions = (action, Data) => {
    return {
        type: action,
        payload: Data
    }
}

// export const getToDo = () => async (dispatch) => {

//     dispatch(Actions(GET_TODO_LOADING, ""))

//     try {
//         const res = await axios.get("http://localhost:3004/todos")
//         dispatch(Actions(GET_TODO_SUCCESS, res.data))

//         const c = res.data.filter((e) => {
//             return e.status === false
//         }).length

//         dispatch(Actions(TOTAL_NONCOMPLETED, c))

//     } catch (err) {
//         dispatch(Actions(GET_TODO_ERROR, err))
//     }
// }

// export const addToDo = (todo) => async (dispatch) => {

//     dispatch(Actions(ADD_TODO_LOADING, ""))

//     const payload = {
//         id: nanoid(4),
//         title: todo,
//         status: false
//     }

//     try {
//         const res = await axios.post("http://localhost:3004/todos", payload)
//         dispatch(Actions(ADD_TODO_SUCCESS, res.data))
//         dispatch(getToDo());
//     } catch (err) {
//         dispatch(Actions(ADD_TODO_ERROR, err))
//     }
// }

// export const toggleToDo = (e,toSetCurrentData) => async (dispatch) => {

//     dispatch(Actions(UPDATE_TODO_LOADING, ""))

//     try {
//         const res = await axios.patch(`http://localhost:3004/todos/${e.id}`, { status: !e.status })
//         dispatch(Actions(UPDATE_TODO_SUCCESS, res.data))
       
//         if(toSetCurrentData){
//             toSetCurrentData(res.data)
//         }else{
//             dispatch(getToDo());
//         }

//     } catch (err) {
//         dispatch(Actions(UPDATE_TODO_ERROR, err))
//     }

// }

// export const deleteToDo = (e,toSetFlag) => async (dispatch) => {

//     dispatch(Actions(DELETE_TODO_LOADING, ""))

//     try {
//         const res = await axios.delete(`http://localhost:3004/todos/${e.id}`)
//         dispatch(Actions(DELETE_TODO_SUCCESS, res.data))

//         if(toSetFlag){
//             toSetFlag()
//         }else{
//             dispatch(getToDo());
//         }

//     } catch (err) {
//         dispatch(Actions(DELETE_TODO_ERROR, err))
//     }

// }

// export const editToDo = (e,edit,closeModal) => async (dispatch) => {

//     dispatch(Actions(EDIT_TODO_LOADING, ""))

//     try {
//         const res = await axios.patch(`http://localhost:3004/todos/${e.id}`, { title: edit})
//         dispatch(Actions(EDIT_TODO_SUCCESS, res.data))

//         if(closeModal){
//             dispatch(getToDo());
//             closeModal()
//         }

//     } catch (err) {
//         dispatch(Actions(EDIT_TODO_ERROR, err))
//     }

// }

