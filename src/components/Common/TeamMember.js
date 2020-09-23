import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TeamMember extends Component {
    render(){
        return(
            <div className="col-lg-4">
                <div className="team-member">
                    <img className="mx-auto rounded-circle" src={this.props.photo} alt="" />
                    <h4>{this.props.name}</h4>
                    <p className="text-muted">{this.props.position}</p>
                    <Link className="btn btn-dark btn-social mx-2" to={this.props.links.twitter ? this.props.links.twitter : "#!"}><i className="fab fa-twitter"></i></Link>
                    <Link className="btn btn-dark btn-social mx-2" to={this.props.links.facebook ? this.props.links.facebook : "#!"}><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-dark btn-social mx-2" to={this.props.links.linkedin ? this.props.links.linkedin : "#!"}><i className="fab fa-linkedin-in"></i></Link>
                </div>
            </div>

        )
    }
}

export default TeamMember;