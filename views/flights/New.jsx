const React = require("react")


// User to Create New Flight Search
// Departure enter valid date& time hint<input type="datetime-local"

class New extends React.Component{
    render( ){
        return (
            <div>
                <h1>New Flights Page</h1>
                <form action = "/flights" method="POST">
                    Airline: <input type = "text" name="airline"/> <br/>
                    Flight Number: <input type = "text" name="flightNo"/> <br/>
                    Departure: <input type = "datetime-local" name="departs"/> <br/>
                    <input type ="submit" value="Create New Flight Search" />
                </form>
                <nav>
                    <a href="/flights">Back to Flights Index Page</a>
                </nav>
            </div>
        )
    }
}

// export jsx file
module.exports = New;

