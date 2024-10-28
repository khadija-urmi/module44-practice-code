import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "option_name": "Basic Pack",
            "price": 1.99,
            "features": [
                "5 pieces of gum",
                "Classic mint flavor",
                "Sugar-free",
                "Pocket-friendly packaging",
                "No artificial colors or flavors",
                "Low-calorie",
                "Non-stick formula"
            ]
        },
        {
            "id": 2,
            "option_name": "Value Pack",
            "price": 3.49,
            "features": [
                "10 pieces of gum",
                "Variety of flavors: mint, cinnamon, fruit",
                "Sugar-free",
                "Lasts longer with double pack size",
                "Freshens breath instantly",
                "No added preservatives",
                "Chew-proof wrapping"
            ]
        },
        {
            "id": 3,
            "option_name": "Family Pack",
            "price": 5.99,
            "features": [
                "20 pieces of gum",
                "Mix of popular flavors",
                "Individually wrapped for convenience",
                "Great for sharing with friends and family",
                "Boosts focus and concentration",
                "Naturally sourced sweeteners",
                "Extended flavor release"
            ]
        },
        {
            "id": 4,
            "option_name": "Premium Pack",
            "price": 9.99,
            "features": [
                "40 pieces of gum",
                "Premium flavors: spearmint, peppermint, eucalyptus",
                "Extra long-lasting flavor",
                "Resealable packaging",
                "Enhanced freshness with herbal extracts",
                "Helps relieve stress",
                "Dentist-recommended for oral health"
            ]
        },
        {
            "id": 5,
            "option_name": "Ultra Pack",
            "price": 14.99,
            "features": [
                "60 pieces of gum",
                "Wide flavor selection",
                "Enhanced breath-freshening effect",
                "Travel-friendly bottle",
                "Boosts energy with natural caffeine",
                "Contains xylitol for dental benefits",
                "Long-lasting freshness up to 2 hours",
                "Eco-friendly packaging"
            ]
        }
    ]

    return (
        <div>
            <h2 className='text-5xl '>Best Prices in town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;