import React from 'react';

const FilterOptions = ({ nameOptions, specialtyOptions, genderOptions, countryOptions, changeOption }) => {
    const handleChangeOption = (type, event) => {
        const value = event.target.value;
        changeOption(value, type);
    };


    return (
        <div className="mt-4 pt-5 text-white">
            <div className="d-flex flex-column">
                <div className="d-flex flex-column mt-4">
                    <label>Name</label>
                    <select id="Name" className="form-select" onChange={(e) => handleChangeOption('Name', e)}>
                        <option hidden value="">Name</option>
                        {nameOptions.map(function (option, index) {
                            return (<option key={index} value={option}>{option}</option>)
                        })}
                    </select>
                </div>

                <div className="d-flex flex-column mt-3">
                    <label>Specialty</label>
                    <select id="Specialty" className="form-select" onChange={(e) => handleChangeOption('Specialty', e)}>
                        <option hidden value="">Specialty</option>
                        {specialtyOptions.map(function (option, index) {
                            return (<option key={index} value={option}>{option}</option>)
                        })}
                    </select>
                </div>

                <div className="d-flex flex-column mt-3">
                    <label>Gender</label>
                    <select id="Gender" className='form-select' onChange={(e) => handleChangeOption('Gender', e)}>
                        <option hidden value="">Gender</option>
                        {genderOptions.map(function (option, index) {
                            return (<option key={index} value={option}>{option}</option>)
                        })}
                    </select>
                </div>

                <div className="d-flex flex-column mt-3">
                    <label>Country</label>
                    <select id="Country" onChange={(e) => handleChangeOption('Country', e)}>
                        <option hidden value="">Country</option>
                        {countryOptions.map(function (option, index) {
                            return (<option key={index} value={option}>{option}</option>)
                        })}
                    </select>
                </div>

                <div className="mt-4">
                    <button className="btn btn-sm btn-danger w-100 rounded-0" onClick={() => window.location.reload()}><i className="fas fa-filter pr-2"></i>Clear Filter</button>
                </div>
            </div>
        </div>
    );
};

export default FilterOptions;