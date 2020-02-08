import React from 'react';
import axios from 'axios';
import './Spot.css';

class Spot extends React.Component {
    state = {
        data:[]
    }
    getSpots = async () => {
        const {
            data
        } = await axios.get("./tourspot.json");
        this.setState({ data, isLoading: false});
    }
    componentDidMount () {
        this.getSpots();
    }
    render (){
        const { data } = this.state;
        return (
            <section classNmae="container">
                <div className="spotitems">
                    {data.map(spotitems => (
                        <div className="spotitem">
                            <span>{spotitems.no}</span>
                            <h3>{spotitems.name}</h3>
                            <img src={spotitems.image} alt={spotitems.name} title={spotitems.name} />
                            <a href={spotitems.link}>{spotitems.link}</a>
                        </div>
                    ))}
                </div>
            </section>
            
        );
    }
}

export default Spot;