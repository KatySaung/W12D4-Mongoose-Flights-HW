const React = require('react');

// Part2: MongoDB
// Create Edit page (will be in update route in server.js)
// User to add a destination for that flight, including its arrival date/time and one of the established airport codes.
class Edit extends React.Component {
    render( ) {
        const date = new Date( );
        const futureDate = date.getDate( ) + 367;
        date.setDate(futureDate);
        const defaultValue = date.toLocaleDateString('en-CA');

        return (
            <div>
            <form action={`/flights/${this.props.flight._id}?_method=PUT`} method="POST">
                Airport: <select name="flight">
                         <option value = "AUS">AUS</option>
                        <option value = "DAL">DAL </option>
                        <option value = "LAX">LAX </option>
                        <option value = "SAN">SAN</option>
                        <option value = "SEA">SEA</option>
                </select> 
                Arrival: <input type = "datetime-locale" name="arrival" defaultValue={defaultValue} /> <br/>
                <input type ="submit" value="Update Flight Search" />
            </form>
            </div>
        )
    }
}
module.exports = Edit;