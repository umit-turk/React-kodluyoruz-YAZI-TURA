import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";



class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      total: 0,
      yazisum:0,
      turasum:0,
    };
    
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    //random sayıyı alıp bu işleme göre stateleri güncelleyeceğiz.
    const random = () => Math.floor(Math.random() * 2);
    const randomNum = random();



    if(randomNum === 0){
      setTimeout(() => this.setState((state) => {
        return {total: state.total + 1, side: "tura", turasum: state.turasum + 1, flipping: false,}
      }),1000)
    } else{
      setTimeout(() => this.setState((state) => {
        return {total: state.total + 1, side: "yazi" , yazisum: state.yazisum + 1, flipping: true,}
      }))
    }

    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    
  };

 

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side}  flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.total} </strong>
          atıştan
          <strong> {this.state.turasum} </strong>ü tura
          <strong> {this.state.yazisum} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
