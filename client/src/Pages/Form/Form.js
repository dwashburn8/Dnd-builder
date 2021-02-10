import React, { useState, useEffect } from "react"
import "./Form.css"
import { saveUser } from "../../utils/API"
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from "../../Components/LogoutButton/LogoutButton"
import { useHistory } from "react-router-dom";


const Form = () => {
    let history = useHistory();
    const { user} = useAuth0();

    const nateDog = useAuth0();
    
    const [values, setValues] = useState({ firstName: "", lastName: "", email: "", phone: ""});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = event => {

        event.preventDefault();
        setErrors(validation(values));
        setIsSubmitting(true);
        // submit();
    }

    useEffect(() => {
        
        //check to see if there are any errors, if not, then submit 
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submit();
            
        }
    }, [errors])

    function submit() {
        
        saveUser(values)
            .then(response => {

                setValues(response.data)
            })
            .catch(err => console.log(err))
        
        console.log("Submitted Successfully: pass validation", values)
        // history.push('/main');
        //routing back to Invisible page --> otherwise MainPaige does not get Auto0 props
        history.push('/react');
    }

    function validation(values) {

        let errors = {};

        if (!values.firstName) {
            errors.firstName = "First Name is required";
        }
        if (!values.lastName) {
            errors.lastName = "Last Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required";
        }
        return errors;
    }

    const handleChange = event => {
        
        const {name, value } = event.target;
        setValues(
            {
            ...values,
            [name]: value
            }
        )

    }
    
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <input
                        className={`${errors.firstName && "inputError"}`}
                        name="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleChange} />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    <input 
                        className={`${errors.lastName && "inputError"}`}
                        name="lastName" 
                        label="Last Name" 
                        value={values.lastName}
                        onChange={handleChange} />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                    <input 
                        className={`${errors.email && "inputError"}`}
                        name="email" 
                        label="Email" 
                        value={values.email}
                        onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    <input 
                        className={`${errors.phone && "inputError"}`}
                        name="phone" 
                        label="Phone" 
                        value={values.phone}
                        onChange={handleChange} />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                        
                    <button type="submit">Submit</button>
                        <LogoutButton />
                    </form>
                </div>

                <div class="col-md-3"></div>
            </div>
        </div>

    )



}

export default Form;