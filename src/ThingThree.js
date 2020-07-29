import React from 'react'


class ThingThree extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Dave"
        }

        this.buttonClicked = this.buttonClicked.bind(this)
    }

    buttonClicked() {
        if (this.state.name == "Dave") {
            this.setState({ name: "Bob" })
        } else if (this.state.name == "Bob") {
            this.setState({ name: "Dave" })
        }
    }

    render() {
        return (
            <div>
                <h3>Hello {this.state.name}</h3>
                <button type="submit" onClick={this.buttonClicked}>Change Name</button>
            </div>
        )
    }
}

export default ThingThree;