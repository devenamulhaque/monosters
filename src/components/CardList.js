import React from 'react'

const CardList = ({ monstars, searchKey }) => {
    return (
        <div className="card-wrapper">
            <div className="container">
                {searchKey && (
                    <div className="search-key">
                        <h3>Your search key: "{searchKey}"</h3>
                    </div>
                )}
                <div className="card-list">
                    {monstars.length ? (
                        monstars.map(({ name, email }, i) => (
                            <div className="single-card" key={i}>
                                <img src={`https://robohash.org/${i}?set=set2`} alt={name} />
                                <h2>{name}</h2>
                                <p>{email}</p>
                            </div>
                        ))
                    ) : (
                        <h2 className="not-found">There is no Monstar found</h2>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardList