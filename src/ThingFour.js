import React from 'react'

class ThingFour extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOn: true,
            color: "green"
        }

        this.colorChange = this.colorChange.bind(this)
        this.displayItem = this.displayItem.bind(this)
    }

    colorChange() {
        this.setState({ color: "blue", isOn: false })

    }

    displayItem() {
        if (this.state.isOn) {
            return "block"
        } else {
            return "none"
        }
    }

    render() {
        return (
            <div>
                <p>My favorite color is {this.state.color}</p>
                <br />
                <button type="submit" onClick={this.colorChange}>Change Color</button>

                <h3 style={{ display: this.displayItem() }} >Some stuff</h3>
            </div>
        )
    }
}

export default ThingFour;