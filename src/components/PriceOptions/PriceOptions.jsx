import React from 'react'

function PriceOptions() {

    const gymPriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Basic fitness classes",
                "24/7 access",
                "Online workout videos",
                "Fitness assessment"
            ],
            "price": 29.99
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited fitness classes",
                "Personal training session (1/month)",
                "Nutritional consultation",
                "Sauna and steam room access"
            ],
            "price": 49.99
        },
        {
            "id": 3,
            "name": "Family Membership",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Basic fitness classes",
                "24/7 access",
                "Discounted rates for family members (up to 4)",
                "Childcare services",
                "Family fitness classes"
            ],
            "price": 79.99
        }
    ]


    return (
        <>
            <h1>PriceOptions</h1>
            {
                gymPriceOptions.map(option => <h3>{option.name}</h3>)
            }
        </>
    )
}

export default PriceOptions
