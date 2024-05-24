import PropTypes from 'prop-types';

// const getMessage = (a,b)=> a+b;

export const FirstApp = ({title, subtitle, name = 'Johann'}) => {
// console.log(props)


    return (
        <>
            <h1 data-testid={"test-title"}>{title}</h1>
            {/* <h1>{getMessage(2,3)}</h1> */}
            {/* <code>{ JSON.stringify(newMessage)}</code> */}
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}