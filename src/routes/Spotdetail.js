import React from 'react';
import './Spotdetail.css';

class Spotdetail extends React.Component {
    componentDidMount (){
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        
        if(location.state){
            return (
                <div className="spotdetails">
                    <div className="spotdetail">
                        <h3>{location.state.name}</h3>
                        <img src={location.state.image} alt={location.state.name} />
                        <a href={location.state.link}>{location.state.link}</a>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Spotdetail;