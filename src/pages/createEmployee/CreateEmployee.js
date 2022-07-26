import { useState } from 'react';
import './CreateEmployee.css';
import { statesUSA, departments } from "../../assets/Ressources"
import React from 'react'
import Select from 'react-select'
import DatePicker from 'react-date-picker';
import { useDispatch } from 'react-redux';
import { add } from '../../store/employeeSlice';
import { format } from 'date-fns';
import { Modal } from 'simple-react-modal-jess'
import { Menu } from '../../components/menu/Menu';


export default function CreateEmployee() {

    const [modal, setModal] = useState(false);

    const Toggle = () => setModal(!modal);

    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        birthDate: null,
        startDate: null,
        street: "",
        city: "",
        state: {value: "AL", label: "Alabama"},
        zipCode: "",
        department: "Sales",
      });

      const dispatch = useDispatch();

      const handleSubmit = (e) => {
        e.preventDefault();
        const dataForm = {
            firstname: input.firstName,
            lastname: input.lastName,
            start: input.startDate == null ? null : format(input.startDate, 'dd/MM/yyyy'),
            department: input.department,
            birth: input.birthDate == null ? null : format(input.birthDate, 'dd/MM/yyyy'),
            street: input.street,
            city: input.city,
            state: input.state.value,
            zipcode: input.zipCode,
        };
        dispatch(add(dataForm));
        Toggle();
      };

    return (
        <div className="create-employee">
            <main>
                <div className="header">
                    <Menu section="home"></Menu>
                </div>
                <section className="create-employee-content">
                    <h3>Create Employee</h3>
                    <form onSubmit={handleSubmit} className='form'>
                        <div className="input">
                            <label className="label" htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                value={input.firstName}
                                onChange={(e) => setInput({ ...input, firstName: e.target.value })}
                            />
                        </div>
                        <div className="input">
                            <label className="label" htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                value={input.lastName}
                                onChange={(e) => setInput({ ...input, lastName: e.target.value })}
                            />
                        </div>
                        <div className="input">
                            <label className="label" htmlFor="birthDate">Date of birth</label>
                            <DatePicker 
                                value={input.birthDate}
                                onChange={(e) => setInput({ ...input, birthDate: e })}
                            />
                            
                        </div>
                        <div className="input">
                            <label className="label" htmlFor="startDate">Start Date</label>
                            <DatePicker 
                                value={input.startDate}
                                onChange={(e) => setInput({ ...input, startDate: e})}
                            />
                        </div>
                        <fieldset>
                            <legend>Address</legend>
                            <div className="input">
                            <label className="label" htmlFor="street">Street</label>
                            <input
                                type="text"
                                id="street"
                                value={input.street}
                                onChange={(e) => setInput({ ...input, street: e.target.value })}
                            />
                            </div>
                            <div className="input">
                                <label className="label" htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    value={input.city}
                                    onChange={(e) => setInput({ ...input, city: e.target.value })}
                                />
                            </div>
                            <div className="input">
                                <label className="label" htmlFor="state">State</label>
                                <Select
                                    name="state"
                                    inputId="state"
                                    options={statesUSA}
                                    className="select-state"
                                    defaultValue={statesUSA[0].value}
                                    form="form"
                                    menuPlacement="auto"
                                    value={{ label: input.state.label, value: input.state.value }}
                                    onChange={(e) => setInput({ ...input, state: {value: e.value, label: e.label} })}
                                />
                            </div>
                           
                            <div className="input">
                                <label className="label" htmlFor="zipCode">Zip Code</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    value={input.zipCode}
                                    onChange={(e) => setInput({ ...input, zipCode: e.target.value })}
                                />
                            </div>
                        </fieldset>
                        <div className="input">
                            <label className="label" htmlFor="department">Department</label>
                            <Select
                                    name="department"
                                    inputId="department"
                                    options={departments}
                                    className="select-department"
                                    defaultValue={departments[0]}
                                    form="form"
                                    menuPlacement="auto"
                                    value={{ label: input.department, value: input.department }}
                                    onChange={(e) => setInput({ ...input, department: e.label })}
                                />
                        </div>
                        
                        <input className="sign-in-button" type='submit' value="Save" />
                    </form>
                    <Modal show={modal} close={Toggle}>
                        Employee created!
                    </Modal>
                </section>
            </main>
        </div>
    )
}