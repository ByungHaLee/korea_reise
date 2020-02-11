import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        if (location.state === undefined){ //그냥 hotel-detail 로 접근하면 홈으로 보냄 
            history.push("/");
        }
    }
    
    render() {
        const { location } = this.props;
        if (location.state){
            return (
                <div className="hoteldetails">
                    <h5>{location.state.title}</h5>
                    <span>{location.state.tel}</span>
                    <span>{location.state.add}</span>
                    <span>{location.state.info}</span>
                </div>   
            )
        } else {
            return null;
        }
    }
}

export default Detail;