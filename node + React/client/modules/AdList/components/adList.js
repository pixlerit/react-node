import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import _ from 'lodash';

class AdList extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
            return(
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

                            <div className="container-fluid header_ad_listing mt-3">
                                <div className="row">

                                    <div className="col-lg-6 pl-lg-0 ">

                                        <h1 className="m-0">Iphones</h1>
                                         <ul className="list-unstyled list-inline bread-crumb112 m-0 desktop-Visible">
                                            <li className="list-inline-item"><a href="/home">Home</a><i className="fa fa-angle-right"></i></li>
                                            <li className="list-inline-item"><a href="#">Product</a> <i className="fa fa-angle-right"></i></li>
                                            <li className="list-inline-item"><a href="#">Iphone</a> <i className="fa fa-angle-right"></i></li>
                                            <li className="list-inline-item"><a href="#">IphoneX</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6  pl-lg-0">
                                        <ul className="list-unstyled list-inline m-0">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-bell-o"> </i> Subscribe</a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"> </i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"> </i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"> </i></a></li>
                                        </ul>

                                    </div>

                                </div>
                            </div>
                            <div className="row">

                                <aside className="sidebar112 col-xl-2 pr-lg-0 col-lg-3">

                                    <a href="#" className="filter_btn" id="filter_slider"> 
                                        <img  src={require('../../../img/controls.png')} alt="" /> Filter
                                    </a>
                                    <div className="widget112 flex-center pt-4 pb-4 desktop-Visible main_device">

                                        <img src={require('../../../img/selected-phone.png')} alt="" />
                                    </div>

                                    <div className="widget112" id="Filter_slide">

                                        <h2 className="clearfix">Filter By <a href="#" className="float-right">Clear all</a></h2>
                                        <ul className="list-unstyled">
                                            <li className="dropdown112">

                                                <a href="#" className="clearfix">Condition <i className="fa fa-angle-down float-right"></i> </a>

                                                <ul className=" list-unstyled">
                                                    <li><input type="checkbox" /> New</li>
                                                    <li><input type="checkbox" /> Mint</li>
                                                    <li><input type="checkbox" /> Good</li>
                                                    <li><input type="checkbox" /> Fair</li>
                                                    <li><input type="checkbox" /> Bad</li>
                                                </ul>

                                            </li>
                                            <li className="dropdown112">

                                                <a href="#" className="clearfix">Select Storage <i className="fa fa-angle-down float-right"></i>
                                                </a>

                                                <ul className=" list-unstyled">
                                                    <li><input type="checkbox" /> 4GB</li>
                                                    <li><input type="checkbox" /> 8Gb</li>
                                                    <li><input type="checkbox" /> 16GB</li>
                                                    <li><input type="checkbox" /> 32GB</li>
                                                    <li><input type="checkbox" /> 64GB</li>
                                                </ul>

                                            </li>
                                            <li className="dropdown112">

                                                <a href="#" className="clearfix">Color <i className="fa fa-angle-down float-right"></i> </a>

                                                <ul className=" list-unstyled">
                                                    <li><input type="checkbox" /> Mate Black</li>
                                                    <li><input type="checkbox" /> Golden</li>
                                                    <li><input type="checkbox" /> Black</li>
                                                    <li><input type="checkbox" /> Blue</li>
                                                    <li><input type="checkbox" /> Pinks</li>
                                                </ul>

                                            </li>
                                            <li className="dropdown112">

                                                <a href="#" className="clearfix">Brand <i className="fa fa-angle-down float-right"></i> </a>

                                                <ul className=" list-unstyled">
                                                    <li><input type="checkbox" /> Iphone</li>
                                                    <li><input type="checkbox" /> Samsung</li>
                                                    <li><input type="checkbox" /> Lg</li>
                                                    <li><input type="checkbox" /> Nokia</li>
                                                    <li><input type="checkbox" /> Sony</li>
                                                </ul>

                                            </li>
                                        </ul>

                                        <a href="#" className="read-more">5 More</a>
                                    </div>

                                    <div className="ad_sidebar">
                                        <img src={require('../../../img/ad-sidebar.png')}  alt="" />
                                    </div>

                                </aside>

                            <div className="col-xl-10 col-lg-9">

                                <div className="head_add">
                                    <div className="row">

                                        <div className="col-lg-6">
                                            <h2>$100 - $1000</h2>
                                            <span>35 items</span>
                                        </div>

                                        <div className="col-lg-6">
                                            <p>Showing 1 - 24 of 35 results</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="container-fluid sort_tab">
                                    <div className="row">

                                        <div className="col-7 pl-0">

                                            <div className="dropdown show sort_by">
                                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
                                                    id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Sort by : <strong>Most Recent</strong> <i className="fa fa-angle-down"></i>
                                                </a>

                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a className="dropdown-item" href="#">Most Recent</a>
                                                    <a className="dropdown-item" href="#">Relevance</a>
                                                    <a className="dropdown-item" href="#">Highest Price</a>
                                                    <a className="dropdown-item" href="#">Lowest Price</a>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-5 p-0">

                                            <ul className="list-inline list-unstyled m-0">
                                                <li className="list-inline-item active"><a href="#"> <i className="fa fa-list"></i> All</a></li>
                                                <li className="list-inline-item"><a href="#"> <i className="fa fa-heart"></i> Saved</a></li>
                                            </ul>

                                        </div>

                                    </div>
                                </div>

                                <div className="ad_providers  container-fluid">
                                    <div className="row">

                                        <div className="provider_each container-fluid col-lg-12">

                                            <div>
                                                <div className="img-holder">
                                                    <img src={require('../../../img/seller1.png')} className="img-fluid" alt="" />
                                                </div>
                                                <div className="custom-row text-holder">
                                                    <div className="custm-1">
                                                        <h3 className="mbl-price">$50</h3>
                                                        <div className="mbl-rating">
                                                            <ul className="list-inline list-unstyled mb-0">
                                                                <li className="fa fa-star list-inline-item"></li>
                                                                <li className="fa fa-star list-inline-item"></li>
                                                                <li className="fa fa-star list-inline-item"></li>
                                                                <li className="fa fa-star list-inline-item"></li>
                                                                <li className="fa fa-star list-inline-item"></li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                    <div className="custm-2">
                                                        <div className="b-bottom"><span className="status">Condition:</span> Mint</div>
                                                        <div className="b-bottom"><span className="status">User Name:</span> George B.</div>
                                                    </div>

                                                    <div className="custm-3 b-bottom"><span className="status">Code:</span> <a href="#">RUC321</a></div>
                                                    <div className="custm-4 b-bottom"><span className="status">Warranty:</span> No Warranty</div>
                                                    <div className="custm-5 b-bottom"><span className="status">Accessories:</span> With Accessories</div>
                                                    <div className="custm-6 color12"><span className="status">Color:</span> <i className="fa fa-circle-o"></i> Green</div>
                                                    <div className="custm-7 fav-icon"><i className="fa fa-heart"></i></div>
                                                </div>

                                                <p className="description mb-0">
                                                    <strong>DESCRIPTION : </strong> With 2 years International warranty and with
                                                    no local warranty.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="provider_each container-fluid col-lg-12">

                                            <div>
                                                <div className="img-holder">
                                                    <img src={require('../../../img/seller2.png')} className="img-fluid" alt="" />
                                                </div>
                                                <div className="custom-row text-holder">
                                                    <div className="custm-1">
                                                        <h3 className="mbl-price">$50</h3>
                                                        <div className="mbl-rating">
                                                            <ul className="list-inline list-unstyled mb-0">
                                                                <li className="fa fa-star list-inline-item"></li>
                                                                <li className="fa fa-star list-inline-item"></li>
                                                                <li className="fa fa-star list-inline-item"></li>
                                                                <li className="fa fa-star list-inline-item"></li>
                                                                <li className="fa fa-star list-inline-item"></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                <div className="custm-2">
                                                    <div className="b-bottom"><span className="status">Condition:</span> Good</div>
                                                    <div className="b-bottom"><span className="status">User Name:</span> John Andrew.</div>
                                                </div>
                                                <div className="custm-3 b-bottom"><span className="status">Code:</span> <a href="#">RUC321</a></div>
                                                <div className="custm-4 b-bottom"><span className="status">Warranty:</span> With Warranty</div>
                                                <div className="custm-5 b-bottom"><span className="status">Accessories:</span> Only Charger</div>
                                                <div className="custm-6 color12 color-r"><span className="status">Color:</span> <i className="fa fa-circle-o"></i> Red</div>
                                                <div className="custm-7 fav-icon"><i className="fa fa-heart"></i></div>
                                            </div>

                                            <p className="description mb-0">
                                                <strong>DESCRIPTION : </strong> With 2 years International warranty and with
                                                 no local warranty.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <a href="#" className="btn112 mt-5" id="ajax-loader"><i>Load More</i> <img  src={require("../../../img/loading.png")}  alt="" /></a>

                        </div>

                    </div>
                </div>
            </section>
        </div>
        )
    }
}

export default AdList;