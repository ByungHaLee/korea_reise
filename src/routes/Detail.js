import React from 'react';


class Detail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        console.log(this.props);
        if (location.state === undefined){ //그냥 hotel-detail 로 접근하면 홈으로 보냄 
            history.push("/");
        }
    }
    
    render() {
        const { location } = this.props;
        if (location.state){
            return (
                <div>
                <span>{location.state.title}</span>
                <span>{location.state.tel}</span>
                <span>{location.state.add}</span>
                <span>{location.state.mapx}</span>
                <span>{location.state.mapy}</span>
            </div>   
            )
        } else {
            return null;
        }
    }
}

export default Detail;