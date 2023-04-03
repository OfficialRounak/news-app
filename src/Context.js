import React, { useContext, useEffect, useReducer } from "react";
import reducer from './reducer'


let API = "http://hn.algolia.com/api/v1/search?";
const initialState = {
    isLoading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: [],
}


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const fetchApiData = async (url) => {
        dispatch({type: "IS_LOADING"})
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({
                type : "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                },
            })
           
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {

        fetchApiData(`${API}query=${state.query}&page=${state.page}`);

    },[state.query,state.page]);
    //remove post
    const removePost =(post_id)=>{
        dispatch({type:"REMOVE_POST",payload:post_id})
    }
    //search post
    const searchPost=(query)=>{
        dispatch({type:"SEARCH_POST",payload:query})
    }
    //pagination
    const getPrevPage=()=>{
        dispatch({type:"PREV_PAGE"})
    }
    const getNextPage=()=>{
        dispatch({type:"NEXT_PAGE"})
    }

    return (
        <AppContext.Provider value={{ ...state , removePost , searchPost,getPrevPage,getNextPage }}>
            {children}
        </AppContext.Provider>);
}

// creating the custom hook
const useGLobalContext = () => {
    return (
        useContext(AppContext)
    );
}

export { AppContext, AppProvider, useGLobalContext }