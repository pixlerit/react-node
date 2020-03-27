import React, { Component } from 'react';
import Slider from 'react-slick';
var sliderObj;
class ModelSlider extends Component {
    
    constructor(props) {
      super(props);
      
    }

    
    render() {
        const settings = {
              infinite: false,
              speed: 500,
              slidesToShow: 4,
              slidesToScroll: 4,
              arrows: true
            };
        const {categoryId} = this.props;
        return (
            <div>
            <Slider {...settings} >
               
            {this.props.models.map( model => {
                if (model.brandId.categoryId === categoryId) {
                    return (
                        <div key={model._id} className="item text-center" >
                            <img src={ require(`../../img/${model.imageUrl}`)} alt=""/>
                            <h3>$700</h3>
                            <p>{model.name}</p>
                        </div>  )
                }
               
                })}
                            
                
            </Slider>
        
            </div>
        );
    }
    
    
}


export default ModelSlider;