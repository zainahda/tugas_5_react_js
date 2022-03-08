import React, { Component } from "react";

class FormMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesanan: "",
      jumlah: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeJumlah = this.handleChangeJumlah.bind(this);
    this.handleSUbmit = this.handleSUbmit.bind(this);
    this.pesanan = React.createRef();
  }

  handleChange(e) {
    this.setState({ pesanan: e.target.value });
  }

  handleChangeJumlah(e) {
    this.setState({ jumlah: e.target.value });
  }

  handleSUbmit(e){
    e.preventDefault();
    alert(`Pesanan Anda Adalah : ${this.state.pesanan} | Jumlah Pesanan : ${this.state.jumlah}`);
    this.setState({ pesanan: "", jumlah: ""});
    this.pesanan.current.focus();
  }

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.handleSUbmit}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.pesanan}
              ref={this.pesanan}
              placeholder="Masukan Pesanan Anda"
            />
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChangeJumlah}
              placeholder="Masukan Jumlah Pesanan"
            />
            <br />
            <br />
            <input type="submit" value="Pesan" />
          </form>
        </center>
      </div>
    );
  }
}

export default FormMakanan;
