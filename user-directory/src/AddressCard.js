import React, {Component} from 'react';


const AddressCard = (props) => {

const {data, index} = props

return (
    <div className="card">
        <div className="counter">
            <h2>{index + 1}/{data.length}</h2>
        </div>
        <div className="words">
        <h1>{data[index].name.first} {data[index].name.last}</h1>
        <div className="boldBoys">
        <p className="bold">From: </p>
        <p>{data[index].city}, {data[index].country}</p>
        </div>
        <div className="boldBoys">
        <p className="bold">Job Title:</p>
        <p>{data[index].title}</p>
        </div>
        <div className="boldBoys">
        <p className="bold">Employer: </p>
        <p>{data[index].employer}</p>
        </div>
        <div className="favorites">
            <p className="bold">Favorite Movies:</p>
            <ol>
            {data[index].favoriteMovies.map(e => {
                return <li>{e}</li>
            })}
            </ol>

        </div>
        </div>

    </div>
)



}

export default AddressCard
