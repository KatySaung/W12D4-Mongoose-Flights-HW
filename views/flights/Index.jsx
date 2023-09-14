const React = require('react')

// Create List of All Flights 
// Part 2: MongoDB
// Create a detail link that clicks to Show page for each flight to display all properties of flight

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
                                // Part 2#4: link for user to create a new flight search
                                <div>
                                    <li key= { i }>{`${flight.airline} ${flight.flightNo} ${flight.departs}`}
                                    <nav>
                                        <a href={`/flights/${flight._id}`}>Detail</a><br/>
                                        <a href={`/flights/${flight._id}`}>Edit Flight</a>
                                    </nav>
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
module.exports = Index;