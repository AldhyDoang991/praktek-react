import React, { Component } from "react";
import Background from "./bg2.png";
import bali from './bali.png';

class Latihan extends Component {
    render() {
        return (
            <div style={styles.background}>
                <div style={styles.parent}>
                    <div style={styles.logo}>
                        <img src={bali} style={{
                            position: "absolute",
                            width: 165,
                            height: 165,
                            marginLeft: 50,
                            left: 564,
                            top: 44,
                        }} />
                    </div>
                    <div style={styles.parentQuotes}>
                        <h1>a better Way To
                            <b>Travel To Bali</b> </h1>
                    </div>*
                </div>
            </div>
        );
    }
}
let h = window.innerHeight;

const styles = {
    background: {
        display: "flex",
        backgroundImage: `url(${Background})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    parent: {
        backgroundColor: "rgba(42, 38, 61, 0.82)",
        height: h,
        width: "100%"
    },
    parentQuotes: {
        position: "absolute",
        left: 476,
        right: 476,
        top: 223,
        bottom: 329,
        color: '#FFFFFF',
        fontFamily: "Pacifico",
    }
}

export default Latihan;