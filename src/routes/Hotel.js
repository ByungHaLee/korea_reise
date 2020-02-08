import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Hotel.css';
// import PropTypes from 'prop-types';

class Hotel extends React.Component {

    state = {
        isLoading: true,
        records:[]
    }
    getHotels = async () => {
        
        const {
            data: {records}
        } = await axios.get("./hotels.json");
        console.log(records);
        this.setState({ records, isLoading: false});
    };
    componentDidMount() {
        this.getHotels();
    }
    render(){
        const { isLoading, records } = this.state;
     
        return (
            <section className="container">
                {isLoading
                ? (<div className="loader">
                    <span className="loader__text">Loading...</span>
                </div>
                ) : (
                    <div className="hotels">
                        {records.map(hotel => (
                            <div className="hotel">
                                <Link to={
                                    {pathname: `/hotel-detail/${hotel.contentid}`,
                                    state:{
                                        title:hotel.title,
                                        tel:hotel.tel,
                                        add:hotel.add
                                    }
                            
                        }}>
                                    <h3>{hotel.title}</h3>
                                    <p>tel: {hotel.tel}</p>
                                    <p>add: {hotel.add}</p>
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


// Hotel.prototype = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     tel: PropTypes.string.isRequired,
//     add: PropTypes.string.isRequired,
//     mapx: PropTypes.number.isRequired,
//     mapy: PropTypes.number.isRequired
// };

export default Hotel;