import React, { Component } from 'react';
import Slider from 'react-slick';
var sliderObj;
class SimpleSlider extends Component {
    
    constructor(props) {
      super(props);
      
    }

    
    render() {
        const settings = {
              infinite: false,
              speed: 200,
              slidesToShow: 3.3,
              slidesToScroll: 1,
              arrows: true
            };
        return (
            <div>
            <Slider {...settings} >
               
            {this.props.categories.map(function(category) {
                return (
                    <div>
                        <h1 style={{textAlign: 'center'}}>{category.name}</h1>
                        <img className="align-center"  src={ require(`../../img/${category.imageUrl}`)}/>
                    </div>  )
                })}
                            
                
            </Slider>
        
            </div>
        );
    }
    
    
}


export default SimpleSlider;