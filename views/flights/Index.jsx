const React = reqire('react')

// Create List of All Flights 
class Index extends React.Component {
    render( ){
        const { flights } = this.this.props
        return (
            <div>
                <h1> See A List of All Flights</h1>
                <nav>
                    <a href="/flights/new">Create a New Flight</a>
                </nav>
                <ul>
                    {
                        flights.map(( flight, i) =>{
                            return (
                                // updated object to flights._id to work with Mongo
                                // IS an A tag needed here to return anything like in Pokemon?
                                <li key= { i }>
                              
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}