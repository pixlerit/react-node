import React, { Component } from 'react';
import Slider from 'react-slick';

var sliderObj;

class SubCategorySlider extends Component {
    
    constructor(props) {
      super(props);
      
    }
    componentDidMount() {
  
    }
    render() {
        const settings = {
            infinite: false,
            speed: 200,
            slidesToShow: 3.3,
            slidesToScroll: 1,
            arrows: true
          };
        const {categoryId} = this.props;
        return (
            <div className="owl-theme">
            <Slider {...settings} >
            {this.props.models.map( model => {
                
                if (model.brandId.subCategoryId === categoryId) {
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


export default SubCategorySlider;