const React = require('react')

// Create List of All Flights 
class Index extends React.Component {
    render( ){
        const { flights } = this.props
        return (
            <div>
                <h1> See A List of All Flights</h1>
                <nav>
                    <a href="/flights/new">Create a New Flight Search</a>
                </nav>
                <ul>
                    {
                        flights &&
                        flights.map((flight, i) =>{
                            return (
                                // map through properties airline,flightNo,departs
                                // link for user to create a new flight search
                                <li key= { i }>{`${flight.airline} ${flight.flightNo} ${flight.departs}`}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
module.exports = Index;