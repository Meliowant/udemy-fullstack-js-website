import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import "../assets/css/site.css";

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name *', required: true, requiredValicationMsg: 'Please enter your name.'},
            {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email *', required: true, requiredValicationMsg: 'Please enter your email address.'},
            {name: 'phone', elementName: 'input', type: 'tel', placeholder: 'Your Phone *', required: true, requiredValicationMsg: 'Please enter your phone number.', custom_class: "mb-md-0"}
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your Message *', required: true, requiredValicationMsg: 'Please enter your message.', custom_class: "form-group-textarea mb-md-0" },
        ]

    ]
} 


class Contact extends Component{
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="newContactForm" name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, sectionIndex) => {
                                console.log("Rendering section", sectionIndex, "with", section);
                                return(
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((item, key) => {
                                            return <Field 
                                                {...item} 
                                                key={key} 
                                                value={this.props.values[item.name]}
                                                name={item.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={this.props.touched[item.name]}
                                                errors={this.props.errors[item.name]}
                                            />
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button 
                                className="btn btn-primary btn-xl text-uppercase" 
                                id="sendMessageButton" 
                                type="submit"
                                >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    validate: values => {
        const errors = {};

        Object.keys(values).map(v => {
            if (!values[v]){
                errors[v] = "Required";
            }
        });

        return errors;
    },
    handleSubmit: (values, {setSubmitting}) => {
        console.log(JSON.stringify(values));
        alert("You've submitted the form" + JSON.stringify(values));
    }
})(Contact);