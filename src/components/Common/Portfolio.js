import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';
import threadsImage from "../assets/img/portfolio/threads-image-thumb.jpg";
import graphicsImage from "../assets/img/portfolio/graphics-image-thumb.jpg";
import finishImage from "../assets/img/portfolio/finish-image-thumb.jpg";
import linesImage from "../assets/img/portfolio/lines-image-thumb.jpg";
import southwestImage from "../assets/img/portfolio/southwest-image-thumb.jpg";
import windowImage from "../assets/img/portfolio/window-image-thumb.jpg";

const portfolioItems = [
    {
        screenSpacing: "col-lg-4 col-sm-6 mb-4",
        image: threadsImage,
        heading: "Threads",
        subheading: "Illustration",
        modalID: "#portfolioModal1",
    },
    {
        screenSpacing: "col-lg-4 col-sm-6 mb-4",
        image: graphicsImage,
        heading: "Explore",
        subheading: "Graphic Design",
        modalID: "#portfolioModal2",
    },
    {
        screenSpacing: "col-lg-4 col-sm-6 mb-4",
        image: finishImage,
        heading: "Finish",
        subheading: "Identity",
        modalID: "#portfolioModal3",
    },
    {
        screenSpacing: "col-lg-4 col-sm-6 mb-4 mb-lg-0",
        image: linesImage,
        heading: "Lines",
        subheading: "Branding",
        modalID: "#portfolioModal4",
    },
    {
        screenSpacing: "col-lg-4 col-sm-6 mb-4 mb-sm-0",
        image: southwestImage,
        heading: "Southwest",
        subheading: "Website Design",
        modalID: "#portfolioModal5",
    },
    {
        screenSpacing: "col-lg-4 col-sm-6",
        image: windowImage,
        heading: "Window",
        subheading: "Photography",
        modalID: "#portfolioModal6",
    }
];

class Portfolio extends Component {
    render() {
        return(
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {portfolioItems.map((item, index) => {
                            return <PortfolioItem {...item} key={index} />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;