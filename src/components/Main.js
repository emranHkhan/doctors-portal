import React from 'react';
import FilterOptions from './FilterOptions';
import FilterItems from './FilterItems';

const Main = ({ nameOptions, specialtyOptions, genderOptions, countryOptions, changeOption, removeAllFilter, data }) => {
    return (
        <>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-2">
                        <FilterOptions
                            nameOptions={nameOptions}
                            specialtyOptions={specialtyOptions}
                            genderOptions={genderOptions}
                            countryOptions={countryOptions}
                            changeOption={changeOption}
                            removeAllFilter={removeAllFilter}
                        />
                    </div>
                    <div className="col-md-10 pb-5">
                        <FilterItems data={data} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;