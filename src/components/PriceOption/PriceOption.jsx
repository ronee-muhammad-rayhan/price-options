import PropTypes from 'prop-types';

const PriceOption = ({ option }) => {
    return (
        <div>
            {
                option.features.map(feature => <li>{feature}</li>)
            }
        </div>
    )
}

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption
