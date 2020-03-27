import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import * as actions from './categoryActions';
import SimpleSlider from './simple_slider';
import ModelSlider from './model_slider';
import SubCategorySlider from './subcategory_slider';
import $ from 'jquery';


class Home extends Component {
  
  constructor(props) {
    super(props);
  
  }
  componentDidMount() {
    this.props.loadCategories();
    $(window).resize(function(){
      if( $(window).width() < 992 ){
        $(".input_wrapper>input").attr("placeholder","Search");
      
        }else{
      
          $(".input_wrapper>input").attr("placeholder","Products, Brands and More");
        }
      
      });
      
  }

  render() {
    let {categories, models} = this.props;
    return (
          <div>
             <div className="header_content flex-center">
                <div className="container">
                  <h1>Explore Top Quality Gadgets at Perfect Time</h1>
                  <p>Find what you're looking for around the corner and across the country</p>

                  <form className="search_bar">
                    <div className="input_wrapper">
                      <img src={require('../../img/search.png')} />
                      <input type="text" placeholder="Products, Brands and More" />
                    </div>
                    <div className="select_wrapper">
                      <img src={require('../../img/category.png')} alt="" />
                      <select name="" id="">
                        <option value="">All Categories</option>
                        <option value="">All Categories</option>
                        <option value="">All Categories</option>
                        <option value="">All Categories</option>
                        <option value="">All Categories</option>
                      </select>
                    </div>
                    <a href="#">Search</a>
                </form>

              </div>

            </div>
            <section>
            <div className="default_padd categories112">
              <div className="container">

                <h2 className="section_h">Browse by Categories</h2>

                <div className=" cat-block-flex text-center">
                
                  {categories.map(category =>{

                    return (
                        <div key={category._id} className="block-cat">
                          <a href="#">
                            <div className="img-holder"><span><img src={require(`../../img/${category.imageUrl}`)} alt=""/></span></div>
                            <h3>{category.name}</h3>
                          </a>
                        </div>
                    )

                  })}

                </div>

              </div>
            </div>
            {categories.map(category =>{
              if (category.isSubCategory == false) {

                return (
                <div key={category._id} className="iphones_sale11">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-2 flex-center">
                        <h2>{category.name}</h2>
                        <Link to={`list/${category._id}`}>View All</Link>
                      </div>
                      <div className="col-lg-10">

                        <ModelSlider models={models} categoryId={category._id} />

                      </div>
                    </div>
                  </div>
                </div>
                )

              }
              else {
                return(
                  <div>
                    {category.subCategories.map( subCategory => {
                      return(
                        
                        <div key={subCategory.id} className="iphones_sale11">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-lg-2 flex-center">
                                <h2>{subCategory.name}</h2>
                                <Link to={`list/${category._id}/${subCategory.id}`}>View All</Link>
                              </div>
                              <div className="col-lg-10">
                    
                                <SubCategorySlider models={models} categoryId={subCategory.id} />
                                
                              </div>
                          


                            </div>
                          </div>
                        </div>
                      )
                    
                    })}
                
                  </div>
                )
              }
            })}

          </section>
          </div>
         
      )
  }
}

function mapStateToProps(state) {

  return {categories: state.categories, models: state.models };
}

const mapDispatchToProps = (dispatch) => {
    
  return {
        loadCategories: () => {  dispatch(actions.loadCategories()); }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);