import React from 'react'

const SearchBox = (props) => {
    return (
        <div className="search">
            <input
                type="search"
                name="search"
                placeholder="Search Monstars"
                onChange={(e) => props.searchResult(e.target.value)}
            />
        </div>
    )
}

export default SearchBox
