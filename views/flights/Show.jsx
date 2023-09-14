const React = require("react")


// Display each flight search request, flight no and departure date/time to user
// Form and Submission
// include flight airline, flight no and departure date/time

// Part 2: MongoDB
// #5 NEED TO DO: Details Page, add destination include arrival & airport
// #6 NEED TO DO: Details Page, see list of flight's destination(arrival & airport)


class Show extends React.Component{
    render( ) {
        // pass flights key from the server.js
        // const { airline, flightNo, departs, airport, destination } = this.props.flight
        const flights = this.props.flight

        return (
            <div>
                <h1> Show Flight Page </h1>
                {/* see as JSON, problem no value with airport. Path on server.js is issue */}
                {`${flights.airline} flight number 
                ${flights.flightNo} has a departure of 
                ${flights.departs} from 
                ${flights.airport} to destination 
                ${flights.destination}`}.
                <nav>
                    <a href="/flights" >Back to All Flights Index Page</a>
                </nav>
            </div>
        )
    }

}

module.exports = Show;