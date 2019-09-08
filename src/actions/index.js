export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch({ type: 'FETCH_POSTS', payload: data.slice(0, 5) });
    };
};
