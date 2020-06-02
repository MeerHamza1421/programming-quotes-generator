import React, { Component } from 'react'

class ErrorHandler extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isError: false
        }
    }
    static getDerivedStateFromError() {
        return { isError: true }
    }
    componentDidCatch(err, info) {
        console.error(`this code has ${err} and is ${info}`);
    }
    render() {
        console.log(this.state.isError);
        if (this.state.isError) {
            return (
                <div>
                    <h1>something went wrong</h1>
                </div>
            )
        }
        return this.props.children;
    }
}
export default ErrorHandler
