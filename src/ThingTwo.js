import React from 'react'


class ThingTwo extends React.Component {

        constructor(props) {
            super(props)
        }

    render() {
        return (
            <div>
                <h4>Hello {this.props.thePropTwo}</h4>
            </div>
        )
    }

}

export default ThingTwo;