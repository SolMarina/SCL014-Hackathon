import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Ruleta from './Ruleta';
import Premios from './Premios';
import './RouletteSection.css';
import audiocoins from '../../Assets/audio/coins.m4a';
// import './index.css';

class RouletteSection extends Component {

    constructor(...props) {
        super(...props);

        this.state = {
            total_points: 0,
            data_ruleta: 0,
            animated_ruleta: false,
        }


        this.premios = [
            { id: 1, premio: 'Premio 1', precio: '150' },
            { id: 2, premio: 'Premio 2', precio: '200' },
            { id: 3, premio: 'Premio 3', precio: '500' },
            { id: 4, premio: 'Premio 4', precio: '1000' }
        ]

        this.premios_list = [100, 200, 0, 500, 50, -1, 0, 150];

        this.points_data = 0;
        this.rulets_data = 0;

        this.ruleta = React.createRef()

        this.animarEvent = this.animarEvent.bind(this)
        this.showRuletaResult = this.showRuletaResult.bind(this)
        this.shopPremio = this.shopPremio.bind(this)

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }


    animarEvent() {

        var ruleta_temp = this.rulets_data;

        let grados_circulo = 360;
        let premio = grados_circulo / 8;

        var valor_aleatorio = Math.floor(Math.random() * 8);
        var ruleta_result = premio * valor_aleatorio;
        var valor_premio = (grados_circulo * 4) + ruleta_result;

        this.rulets_data = valor_aleatorio;

        // puntos ganados
        this.points_data = this.premios_list[valor_aleatorio];

        this.setState({
            data_ruleta: ruleta_temp * premio,
            animated_ruleta: true,
        })


        setTimeout(() => {
            this.ruleta.current.classList.add('img-ruleta');
            this.setState({
                data_ruleta: valor_premio,
            })
            new Audio(audiocoins).play();        
        }, 200);
    }

    showRuletaResult() {

        this.ruleta.current.classList.remove("img-ruleta");

        if (this.points_data >= 0) {

            this.setState({
                total_points: this.state.total_points + this.points_data,
                animated_ruleta: false,
            })

        }
        else {

            this.setState({
                animated_ruleta: false,
            })

        }

        if (this.points_data === -1) {
            Swal.fire("Felicidades", "Ha ganado un premio!");
        }
        else if (this.points_data > 0) {
            Swal.fire("¡Ganaste!", "Has ganado " + this.points_data + " puntos "+"¡Sigue subiendo de nivel!");
        }
        else {
            Swal.fire("¡Vuelve mañana!", "Puedes girar la Ruleta MACH una vez al día para ganar puntos y beneficios.");
        }

    }

    shopPremio(item) {

        if (this.premios[item].precio <= this.state.total_points) {

            this.setState({
                total_points: this.state.total_points - this.premios[item].precio,
            })

            alert("Comprado", "Has comprado un item con éxito. (" + this.premios[item].premio + ")", "success");

        }
        else {

            alert("Ups...", "No tienes puntos suficientes para comprar este item...", "warning");

        }

    }


    render() {

        return (
            <div id="main">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <Ruleta
                                total_points={this.state.total_points}
                                animatedRuleta={this.state.animated_ruleta}
                                data_ruleta={this.state.data_ruleta}
                                showRuletaResult={this.showRuletaResult}
                                animarEvent={this.animarEvent}
                                ruleta={this.ruleta}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default RouletteSection