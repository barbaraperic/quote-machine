export const FETCH_QUOTE = 'FETCH_QUOTE'

export const fetchingQuote = quote => {
    return {
        type: FETCH_QUOTE,
        quote
    }
}

export const fetchQuote = () => {
    return async function(dispatch) {
        const url = 'https://type.fit/api/quotes'
        fetch(url)
        .then((res) => {

            console.log('res', res)
            return res.json()
        })
        .then((data) => {
            dispatch(fetchingQuote(data))
        })
    } 
}

//https://cors-anywhere.herokuapp.com/