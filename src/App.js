import React, { Component } from 'react';
import logo from './sea-beach-holiday-vacation.jpg';
import pic1 from './three_new_yoga_poses.jpg'
import pic2 from './n-YOGA-COBRA-POSE-628x314.jpg'
import pic3 from './massage-table.jpg'
import './App.css'

const yogaTitle = '👭 Yoga';
const massageTitle = "👬 Massage";
class App extends Component {
  constructor() {
    super();
    this.state = {
      tabStatus: massageTitle
    }
  }
  switchTab(e) {
    this.setState({ tabStatus: e.target.innerText })
  }
  render() {
    return (
      <div className="App">
        <div className="headerTabSwitch">
          <div onClick={(e) => this.switchTab(e)} className={this.state.tabStatus === yogaTitle ? "tabActive" : ''}>{yogaTitle}</div>
          <div onClick={(e) => this.switchTab(e)} className={this.state.tabStatus === massageTitle ? "tabActive" : ''}>{massageTitle}</div>
        </div>
        <div className="titleText">{this.state.tabStatus}</div>
        {this.state.tabStatus === yogaTitle
          ?
          <div className="yogaPage">
            <div style={{ marginTop: '40px' }}>
              <div>Just relax and experience.</div>
              <div>Based on the Presence, Touch and Listening Fundamental to the teaching is the emphasis on Movement and Rhythm.</div>
              <div>本課程將教導你如何將韻律結合瑜伽，聆聽著音樂，將身體放輕鬆。</div>

              <ul><li>Morning meditation</li><li>Relaxing Massage</li><li>Fitness and Yoga experience</li><li>Mindful movement</li></ul>

              <img src={pic2} />

              <div style={{ fontWeight: 'bold', marginTop: '50px' }}>Pricing:</div>
              <div>New member have 1 Free trial Course.</div>
              <div>12 SGD / hour ( 1 by 1 teaching )</div>


            </div>
          </div>

          :
          <div className="massagePage">
            <div style={{marginTop: '20px'}}>We offer Chinese massage for women.</div>
            <div>我們提供女生一個舒服的環境，搭配音樂，享受精油按摩</div>
            <table style={{marginTop: '20px'}}>
            <tbody>
              <tr>
                <td>1. Full Body &nbsp; </td><td> 80 mins </td><td> 40 SGD </td>
              </tr>
              <tr>
                <td>2. Full Body &nbsp;</td><td> 60 mins </td><td> 20 SGD </td>
              </tr>
              <tr>
                <td>3. Shoulder &nbsp;</td><td> 30 mins </td><td> 10 SGD </td>
              </tr>
              <tr>
                <td>4. Legs &nbsp;</td><td> 30 mins </td><td> 10 SGD </td>
              </tr>
              </tbody>
            </table>

            <img src={pic3} style={{marginTop: '60px',width: '600px'}} />

          </div>
        }

        <div style={{ fontWeight: 'bold', marginTop: '50px' }}>Contact</div>
        <div>mail@mail.niceir.com</div>

        <div style={{ fontWeight: 'bold', marginTop: '80px' }}>Location:</div>

        <div style={{ margin: '10px', marginLeft: '50px' }}>Paya Lebar place</div>
        <div>
          <iframe width="600" height="450" frameBorder="0" style={{ border: 0 }} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJjaZ-Uj0Y2jERzwdePrkRKw0&key=AIzaSyBetlQveWVId3RwAKe54xyVFtwOXImGADc" allowFullScreen></iframe>
        </div>

        <div style={{ margin: '10px', marginLeft: '50px' }}>Downtown place</div>
        <div>
          <iframe width="600" height="450" frameBorder="0" style={{ border: 0 }} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJk4si1xEZ2jERnGbj_QIw9B8&key=AIzaSyBetlQveWVId3RwAKe54xyVFtwOXImGADc" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

export default App;
