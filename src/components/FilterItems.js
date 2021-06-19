import React, { useState } from 'react';
import '../styles/FilterItems.css';
import Card from './Card';

const FilterItems = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [doctorsList, setDoctorsList] = useState(data);
    const excludeItems = ['Country', 'Gender']

    const handleChange = (value) => {
        setSearchText(value);
        filterData(value)
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if (lowerCaseValue === '') setDoctorsList(data);
        else {
            const filteredData = doctorsList.filter(item => {
                return Object.keys(item).some(key => excludeItems.includes(key) ? false : item[key].toString().toLowerCase().includes(lowerCaseValue))
            })
            setDoctorsList(filteredData)
        }
    }


    return (
        <div>
            <div className="mt-3 input-icons w-50 mx-auto">
                <i className="fas fa-search icon"></i>
                <input type="text" className="w-100 input-field" placeholder="Search" value={searchText} onChange={e => handleChange(e.target.value)} />
            </div>

            <div className="container pb-5">
                {
                    <div className="row mt-4">
                        {searchText ?
                            doctorsList.map((item, index) => <Card key={index} item={item} />)
                            :
                            data.map((item, index) => <Card key={index} item={item} />)}
                    </div>
                }
            </div>
        </div>
    );
};

export default FilterItems;


