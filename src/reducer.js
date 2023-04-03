

const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      }
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((e) => {
          return e.objectID !== action.payload
        })
      }
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      }

    case "PREV_PAGE":
      let pageNum = state.page
      if (pageNum <= 0) {
        pageNum = 0;
      } else {
        pageNum = pageNum - 1;
      }
      return {
        ...state,
        page: pageNum,
      }

    case "NEXT_PAGE":
      let nextPage = state.page
      if (nextPage >= state.nbPages) {
        nextPage = 0;
      } else {
        nextPage = nextPage + 1;
      }
      return {
        ...state,
        page: nextPage,
      }


    default:
      return state;

  }



}

export default reducer;