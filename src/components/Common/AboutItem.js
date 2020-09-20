import React, {Component} from 'react';

class AboutItem extends Component{
    render() {
        return(
            <li className={this.props.itemClass}>
                <div className="timeline-image">{this.props.hasImage ?
                    <img className="rounded-circle img-fluid" src={this.props.image} alt="" />
                : this.props.heading
                }</div>
                {this.props.hasImage ?
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>{this.props.heading}</h4>
                        <h4 className="subheading">{this.props.subheading}</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">{this.props.text}</p></div>
                </div>
                : null }
            </li>
        )
    }
}

export default AboutItem;