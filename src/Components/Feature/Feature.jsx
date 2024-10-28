import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
import PropTypes from 'prop-types';

const Feature = ({ feature }) => {
    return (
        <div>
            <p className='flex items-center'>
                <AiFillCheckCircle className='text-green-500 mr-2'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;