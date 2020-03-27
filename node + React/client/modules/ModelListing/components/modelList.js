import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../modelListActions';
import $ from 'jquery';
import _ from 'lodash';


class ModelList extends Component {

    constructor(props) {
        super(props);
        this.state = {isReadMore: false};
        this.loadMoreItems = this.loadMoreItems.bind(this);
        this.loadingButton = this.loadingButton.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.readMore = this.readMore.bind(this);
        this.allReadMore = this.allReadMore.bind(this);
        this.filters = [];
    
    }
    componentDidMount() {
        if (this.props.params.subCatId) {

            const {catId, subCatId} = this.props.params;

            this.props.loadModelsBySub({catId, subCatId});
        }
        else {
            this.props.loadModels(this.props.params.catId);
        }
       
        $(window).resize(function(){
            
            if( $(window).width() < 992 ){
            
                $(".input_wrapper>input").attr("placeholder","Search");
            
            }
            else{
            
                $(".input_wrapper>input").attr("placeholder","Products, Brands and More");
                    }
            
            });
            
            $(".dropdown112>a").click(function(e){
                e.preventDefault();
                if( $(this).find("i").hasClass("fa-angle-down")) {
                    $(this).find("i").removeClass("fa-angle-down");
                    $(this).find("i").addClass("fa-angle-up");
            
                }else{
            
                    $(this).find("i").addClass("fa-angle-down");
            
                }
            
                $(this).closest("li").find("ul").slideToggle();
            
            });
            $("#filter_slider").click(function(e){
                
                e.preventDefault();
                $("#Filter_slide").toggleClass("open")
                $(this).toggleClass("active")
                
            });

    }
    loadMoreItems() {
        const  skip = this.props.countObj.currentCount;
        const categoryId = this.props.params.catId;
        const filters = this.filters;
        this.props.loadMoreModels({skip,categoryId,filters});
    }
    onChangeHandler(brandId, event) {

        if (event.target.checked) {
            this.filters.push(brandId);
        }
        else {
            let filteredArray = this.filters.filter(item => item !== brandId)
            this.filters = filteredArray;
        }
    
        this.props.filterModels(this.filters); 
    }
    loadingButton() {
        if (this.props.loader && this.props.loader.isLoadingCompleted == true) {
            return (
                <a  onClick={this.loadMoreItems} style={{color:'#fff',cursor:'pointer'}} className="btn112 active" id="ajax-loader"><i>Load More</i> <img src={require("../../../img/loading.png")} alt="" /></a>
            )
        }
        else {
            if (this.props.countObj.count != this.props.countObj.currentCount) {
                return (
                    <a  onClick={this.loadMoreItems} style={{color:'#fff',cursor:'pointer'}} className="btn112" id="ajax-loader"><i>Load More</i> <img  src={require("../../../img/loading.png")} alt="" /></a>
                );
            }
           
        }
    }
    allReadMore() {
        this.setState({isReadMore: true});
    }
    readMore() {
        if (this.props.brands.length > 5 && !this.state.isReadMore) {
            return (
                <a onClick={this.allReadMore} style={{cursor:'pointer'}} className="read-more">{this.props.brands.length - 5} More</a>
            )
        }
    }
    render() {
        let {models, brands, countObj} = this.props;
        let {isReadMore} = this.state;
 
        return (
            <div>
                <header id="header" className="Sub-Page">
                    <div className="header_content flex-center">
                        <div className="container">
                            <form className="search_bar">
                                <div className="input_wrapper">
                                    <img src={require('../../../img/search.png')}  />
                                    <input type="text" placeholder="Products, Brands and More" />
                                </div>
                                <div className="select_wrapper">
                                    <img src={require('../../../img/category.png')} alt="" />
                                    <select name="" id="">
                                        <option value="">All Categories</option>
                                        <option value="">All Categories</option>
                                        <option value="">All Categories</option>
                                        <option value="">All Categories</option>
                                        <option value="">All Categories</option>
                                    </select>
                                </div>
                                <a href="#" >Search</a>
                            </form>
                        </div>

                    </div>
                </header>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <aside className="sidebar112 col-xl-2 pr-lg-0 col-lg-3">
                                <a href="#" className="filter_btn" id="filter_slider"> 
                                    <img  src={require('../../../img/controls.png')} alt="" /> Filter
                                </a>

                                <div className="widget112" id="Filter_slide">
                                    <h2>Filter By <a href="#" className="float-right">Clear all</a></h2>
                                    <ul className="list-unstyled">
                                        <li className="dropdown112">
                                            <a href="#" className="clearfix">Brand <i className="fa fa-angle-down float-right"></i> 
                                            </a>

                                            <ul className=" list-unstyled">
                                                {isReadMore ?
                                                    brands.map((brand,index) => {
                                                    
                                                        return (
                                                                <li key={brand._id}><input type="checkbox" onChange={(e) => {this.onChangeHandler(brand._id, e)}} /> {brand.name}</li>
                                                        )
                                                       
                                                    })
                                                    :
                                                    brands.map((brand,index) => {
                                                        if (index < 5) {
                                                            return (
                                                                <li key={brand._id}><input type="checkbox" onChange={(e) => {this.onChangeHandler(brand._id, e)}} /> {brand.name}</li>
                                                            )
                                                        }
                                                       
                                                    })

                                                }

                                            </ul>

                                        </li>
                                        {this.readMore()}
                        
                                     </ul>

                                </div>

                                <div className="ad_sidebar">
                                    <img src={require('../../../img/ad-sidebar.png')} className="desktop-Visible" alt="" />
                                    <img src={require('../../../img/ad.png')} className="mobile-Visible" alt="" />
                                </div>

                            </aside>
                            
                            <div className="col-xl-10 col-lg-9">
                                <div className="model_listing text-center">
                                    <div className="header-listing text-center">
                                        <ul className="list-unstyled list-inline bread-crumb112">
                                            <li className="list-inline-item"><a href="index.html">Home</a> <i className="fa fa-angle-right"></i></li>
                                            <li className="list-inline-item"><a href="#">Product</a> <i className="fa fa-angle-right"></i></li>
                                            <li className="list-inline-item"><a href="#">Iphone</a></li>
                                        </ul>

                                        <h1>IphonEs</h1>

                                        <h3>{countObj.count} items </h3>

                                        <p>Showing 1 - {countObj.currentCount} of {countObj.count} results</p>

                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            {models.map(function(model,index) {
                                                return (
                                                    <div key={model._id} className="col-lg-4 col-xl-3 col-sm-6 col-6 text-center">
                                                        <a href="#" className="model_product">
                                                            <div className="img-holder">
                                                                <img style={{width:'120px'}} src={require(`../../../img/${model.imageUrl}`)}  alt="" />
                                                            </div>
                                                            <h3>$700</h3>
                                                            <p>{model.name}</p>
                                                        </a>
                                                    </div>);
                                                    
                                                
                                                
                                            })}

                                        </div>
                                    </div>
                                    {this.loadingButton()}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                  
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
      return {

        brands: state.brands, 
        models: state.allModels,
        loader: state.loader,
        countObj: state.countObj
    };
}

const mapDispatchToProps = (dispatch) => {
    
  return {

    loadModels: (categoryId) => {  dispatch(actions.loadModels(categoryId)); },
    loadMoreModels: (values) =>   {  dispatch(actions.loadMoreModels(values)); },
    updateModels: (newModels) => {  dispatch(actions.updateModels(newModels)); },
    filterModels: (values) => {  dispatch(actions.filterModels(values)); },
    loadModelsBySub: (catObj) => {  dispatch(actions.loadModelsBySub(catObj)); },

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ModelList);