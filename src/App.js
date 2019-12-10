import React, { Component } from 'react';
import Background from './gambar.png';
import { Button, Button2 } from './components';
import logo from './call.png'
class App extends Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.overlay}>
          <div style={styles.container}>
            <div style={styles.h1}>
              Save your earth
                            <div style={styles.h2}>
               
                            </div>
            </div>
            <div style={styles.subTittle}>
              Menanam satu pohon,menghasilkan sejuta manfaat 
                        </div>
            <div style={styles.wrapperInput}>
              
              <Button2 title="Donasi pohon"
               />
               <div>
              <Button title="Hubungi kami" />
               </div>
            </div>
            <img
            src={logo}
            style={{
              marginRight:570,
              marginTop: -35,
            }}
            />

          </div>
        </div>
      </div>
    );
  }
}

let w = window.innerWidth;
let h = window.innerHeight;
const styles = {
  background: {
    display: 'flex',
    backgroundImage: `url(${Background})`,
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgoundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  overlay: {
    
    height: h,
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Pangolin'
  },
  h1: {
    alignSelf: 'center',
    marginTop: 250,
    marginRight: 700,
    color: 'black',
    fontSize: 48,
    textAlign: 'center',
    maxWidth: 700
  },
  h2: {
    color: 'orange',
    textAlign: 'center',
    maxWidth: 700,
  },
  wrapperInput: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: 50
  },
  subTittle: {
    color: 'black',
    fontFamily: "Roboto",
    marginTop: 20,
    marginRight:680,
  },
}

export default App;

