import React, { Component } from 'react'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'



class App extends Component{
    state = {
        monstars: [],
        searchKey: '',
        filteredMonstar: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(respose => respose.json()).then(users => this.setState({monstars: users, filteredMonstar: users}))
    }

    SearchResult = (e)  =>{
        const { monstars } = this.state
        const searchFiltered = monstars.filter((monstar) =>
            monstar.name.toLowerCase().includes(e.toLowerCase())
        )
        this.setState(() => ({
            searchKey: e,
            filteredMonstar: searchFiltered
        }))
       
    }

    

    render() {
        return (
            <>
                <SearchBox searchKey={this.state.searchKey} searchResult={this.SearchResult} />
                <CardList monstars={this.state.filteredMonstar} searchKey={this.state.searchKey} />
            </>
        )
    }
}

export default App;