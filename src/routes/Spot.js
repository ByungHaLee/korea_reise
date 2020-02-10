import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Spot.css';

class Spot extends React.Component {
    state = {
        isLoading: true,
        data:[]
    }
    getSpots = async () => {
        const { data } = await axios.get("./tourspot.json");
        this.setState({ data, isLoading: false});
    }
    componentDidMount () {
        this.getSpots();
    }
    render (){
        
        const { isLoading, data } = this.state;
        return (
            <section className="container">
                {isLoading ? 
                (<div className="loader">
                    <span className="loader__text">Loading...</span>
                </div>
                ) : (
                    <div className="spotitems">
                        {data.map(spotitems => (
                            <div className="spotitem">
                                <Link to={
                                    {pathname:`/spot-detail/${spotitems.no}`,
                                    state: {
                                        id:spotitems.no,
                                        name:spotitems.name,
                                        image:spotitems.image,
                                        link:spotitems.link
                                    }}}>
                                    <h5>{spotitems.name}</h5>
                                    <img src={spotitems.image} alt={spotitems.name} title={spotitems.name} />
                                </Link>
                                
                                
                                
                               
                                
                               
                            </div>
                        ))}
                    </div>
                )

                }
                
            </section>
            
        );
    }
}

export default Spot;