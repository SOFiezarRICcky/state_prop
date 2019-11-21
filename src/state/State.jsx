import React, { Component } from 'react';

class Kursus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paket: "Kursus Programming",
            materi: "React JS",
            desc: "Belajar React JS",
            Harga: 200000
        };
    }
    render() {
        return (
            <div>
                <h1>Nama Paket : {this.state.paket}</h1>
                <h1>Jenis Materi : {this.state.materi}</h1>
                <h1>Deskripsi Paket : {this.state.desc}</h1>
                <h1>Nama Paket : {this.state.Harga}</h1>
            </div>
        );
    }
}

export default Kursus;