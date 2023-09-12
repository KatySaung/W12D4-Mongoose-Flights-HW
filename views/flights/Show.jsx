const React = require("react")


// Display each flight airline, flight no and departure date/time to user
// Form and Submission
// include flight airline, flight no and departure date/time



// Display user flight search req


class Show extends React.Component{
    render( ) {
        // pass flights key from the server.js
        const { airline, flightNo, departs } = this.props.flight

        return (
            <div>
                <h1> Show Flight Page </h1>
                {airline} flight number {flightNo} has a departure of {departs}.
                <nav>
                    <a href="/flights" >Back to All Flights Index Page</a>
                </nav>
            </div>
        )
    }

}

module.exports = Show;