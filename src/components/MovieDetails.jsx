import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {

    const {id} = useParams()
    console.log(id)

    return (
        <div className='App-header'>
            Selected Movie ID: {id}
        </div>
    );
}

export default MovieDetails;
