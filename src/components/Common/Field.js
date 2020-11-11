import React, {Component} from 'react';

class Field extends Component {
    render(){
        return (
            <div className={this.props.custom_class ? "form-group " + this.props.custom_class: "form-group"}>
                  {this.props.elementName === 'input' ? 
                    <input
                        className="form-control" 
                        id={this.props.name} 
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        required={this.props.required === true ? "required" : ""}
                        data-validation-required-message={this.props.requiredValidationMsg}
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                    :
                    <textarea className="form-control" 
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        required={this.props.required ? "required": ""}
                        data-validation-required-message={this.props.requiredValidationMsg}
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />


                }
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors) &&
                        <span>{this.props.errors}</span>
                    }
                </p>
            </div>
        )
    }

}

export default Field;