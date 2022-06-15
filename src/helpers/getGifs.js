


    export const getGifs = async(category) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${category}t&limit=10&api_key=oLylrQAJVvvd6IbGy9DZuM6ERGaXJ9JX`
        const resp = await fetch(url)
        const { data } = await resp.json()
        // desestructuto data (de donde viene?)> await resp.json()

        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        return gifs;
    }