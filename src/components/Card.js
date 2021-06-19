import React from 'react';
import male from '../images/male.png';
import female from '../images/female.png';
import '../styles/Card.css';

const Card = ({ item }) => {
    return (
        <div className="col-lg-4 col-md-6">
            {
                <div className="card mt-4 mb-3 mx-auto" style={{ width: '280px', height: '90%' }}>
                    <div className="row no-gutters my-auto">
                        <div className="col-sm-5">
                            <img className="card-img" src={item.Gender === 'Male' ? male : female} alt="doctors" />
                        </div>
                        <div className="col-sm-7">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">{item.Name}</h6>
                                <b className="card-text">{item.Specialty}</b>
                                <p className="card-text mt-2">{item.Country}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Card;