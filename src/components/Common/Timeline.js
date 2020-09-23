import React, {Component} from 'react';
import TimelineItem from './TimelineItem';
import img1 from '../assets/img/about/1.jpg';
import img2 from '../assets/img/about/2.jpg';
import img3 from '../assets/img/about/3.jpg';
import img4 from '../assets/img/about/4.jpg';

const timeline = [
    {
        itemClass: null,
        hasImage: true,
        image: img1,
        heading: '2009-2011',
        subheading: 'Our Humble Beginning',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
    },
    {
        itemClass: "timeline-inverted",
        hasImage: true,
        image: img2,
        heading: 'March 2011',
        subheading: 'An Agency is Born',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
    },
    {
        itemClass: null,
        hasImage: true,
        image: img3,
        heading: 'December 2012',
        subheading: 'Transition to Full Service',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
    },
    {
        itemClass: "timeline-inverted",
        hasImage: true,
        image: img4,
        heading: 'July 2014',
        subheading: 'Phase Two Expansion',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
    },
    {
        itemClass: null,
        hasImage: false,
        image: '',
        heading: <h4>Be Part <br />Of Our<br />Story!</h4>,
        subheading: '',
        text: ''
    },

]

class Timeline extends Component {
    render() {
        return(
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <ul className="timeline">
                        {timeline.map((item, index) => {
                            return <TimelineItem {...item} key={index} />
                        })}
                    </ul>
                </div>
            </section>
        )
    }
}

export default Timeline;