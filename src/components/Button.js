import React, { Component } from 'react';

const Button = props => {
    return (
        <div style={styles.button}>
            {props.title}
        </div>
    )
}

export default Button
const styles = {
    button: {
        display: 'flex', backgroundColor: 'tranparent', padding: 10, paddingLeft: 40, paddingRight: 40, color: '#00B894', borderRadius: 10, marginLeft: 10, borderStyle: 'solid', marginRight: 635, marginTop: 3,
    }
}