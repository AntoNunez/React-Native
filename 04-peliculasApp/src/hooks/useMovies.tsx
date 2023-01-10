import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieDBMoviesResponse, Result } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Result[];
    popular: Result[];
    topRated: Result[];
    upComing: Result[];
}


export const useMovies = () => {
    const [isLoading, setIsLoding] = useState(true)
    const [moviesState, setMovieState] = useState<MoviesState>({
        nowPlaying:[],
        popular: [],
        topRated: [],
        upComing: []

    })



    const getMovies = async () => {
        const nowPayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const upComingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

        const response = await Promise.all([
            nowPayingPromise,
            popularPromise,
            topRatedPromise,
            upComingPromise
        ]);

        setMovieState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upComing: response[3].data.results,
        })

       


        setIsLoding(false)

    }

    useEffect(() => {
        //now_playing
        getMovies();

    }, [])

    return {
        ...moviesState,
        isLoading
    }

}