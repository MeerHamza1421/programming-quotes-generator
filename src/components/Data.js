import React, { Component } from 'react'
import axios from 'axios';
import './Data.css';
import ErrorHandler from './ErrorHandler';
// import ErrorHandler from './ErrorHandler';
class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qoute: null,
            loading: false
        }

    }
    loader = async () => {
        let url = `http://quotes.stormconsultancy.co.uk/random.json`;
        await axios
            .get(url)
            .then(data => {
                this.setState({
                    qoute: data,
                    loading: true
                })
            })
        let qoute = document.getElementById('click');
        if (qoute.style.display === 'none') {
            qoute.style.display = 'block';
        } else {
            qoute.style.display = 'none';
        }
    }
    render() {
        let { qoute, loading } = this.state;
        return (
            <div>
                <h3 className="heading">Click the button to generate a programming qoute</h3>
                {!loading ? <h1> </h1> :
                    <div id="click" style={{ display: 'none' }}>
                        <h2>{`" ${qoute.data.quote} "`}</h2>
                        <h4>{qoute.data.author}</h4>
                    </div>
                }
                <button onClick={this.loader} className="btn">Click me</button>
            </div>
        )
    }
}

export default (props) => {
    return (
        <ErrorHandler>
            <Data {...props} />
        </ErrorHandler>
    )
}
