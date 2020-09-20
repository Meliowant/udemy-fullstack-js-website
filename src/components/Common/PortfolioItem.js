import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PortfolioItem extends Component{
    render(){
        return(
            <div className={this.props.screenSpacing}>
                <div className="portfolio-item">
                    <Link className="portfolio-link" data-toggle="modal" to={this.props.modalID}>
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.image} alt="" />
                    </Link>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.heading}</div>
                        <div className="portfolio-caption-subheading text-muted">{this.props.subheading}</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PortfolioItem;