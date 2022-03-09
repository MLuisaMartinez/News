import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';
import { response } from 'express';


class Sidenews extends Component {
constructor(props) {
    super(props);
    this.state = {
        sidenews: [],
        error: false,
    };
    }
    componentDidMount() {
        const url = 'https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=a42835790e8d4061bc8150e8e4141bcd';   
        axios.get(url)
            .then((response) => {
                this.setState({
                    sidenews: response.data.articles
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            });
        }

    renderItems(){
            if (!this.state.error) {
                return this.state.sidenews.map((item) => (
                    <SingleSide key={item.url} item={item} />
        ));
        
    } else {
    render <Error />
    }
}
 render () {
return (
            <div> 
            {this.renderItems()}
            </div>
        );
    }


}
export default Sidenews;
