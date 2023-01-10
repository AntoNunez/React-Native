import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '6ff275cf73e920f37a91bec08a19bc40',
        language: 'es-ES'

    }
});
export default movieDB;