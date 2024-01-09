import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Slider from '@mui/material/Slider';
import Carta from './Carta';


const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const edibless = {
	tapas: [{
		itemName: "Aceitunas Hechizos del sur",
		description: "buenisimas del sur, con anchoa.",
		price: "2.00€"
	},
	{
		itemName:"Aceitunas picantonas",
		description:"para los mas valientes",
		price:"2.00€"
	}
	,
	{
		itemName:"Albondigas a la jardinera",
		description:"hechas con azada y rastrillo",
		price:"2.00€"
	}
	],
	postres: [{
		itemName: "Tarta de queso",
		description: " Queso manchego con crumble de chocolate y salsa de turrón ",
		price: "6.00€"
	},
	{
		itemName: "Torrija brioche con salsa de turrón",
		description: "receta de la casa",
		price: "8.00€"
	}],
	cafes: [{
		itemName: "café solo",
		description: "",
		price: "1.40€"
	}],
	infusiones: [{
		itemName: "poleo menta",
		description: "",
		price: "1.60€"
	}],
	vinos: {
		rosado: [{
			itemName: "Quebero",
			cupPrice: "2.20€",
			bottlePrice: "9,00€"
		}],
		tinto: [{
			itemName: "Quebero",
			cupPrice: "2.20€",
			bottlePrice: "9,00€"
		}],
		blanco: [{
			itemName: "Quebero",
			cupPrice: "2.20€",
			bottlePrice: "9,00€"
		}]
	},
	vermut: {
		especiales: [{
			itemName: "Mixto Bocamanga",
			description: " so good",
			bottlePrice: "9,00€"
		}],
		tinto: [{
			itemName: "Myrrah (Tarragona)",
			description: "muy amargo",
			bottlePrice: "9,00€"
		}],
		blanco: [{
			itemName: "Myrrah",
			description: "increible",
			bottlePrice: "9,00€"
		}]
	},
	bebida: [{
		itemName: "Agua Lanjarón sin gas 1/2L ",
		description: "",
		bottlePrice: "1,75€"
	}],
	cerveza: [{
		itemName: "Caña Estrella Damm 0,33cl ",
		description: "",
		bottlePrice: "2,00€"
	}]



}
function Edible(itemName, description, price) {

	this.itemName = itemName;
	this.description = description;
	this.price = price;
}
var patatas = new Edible("patatas", "buenisimas con tomate", "15.95");
var croquetas = new Edible("croquetas", "buenisimas con turron", "3.95");

var allEdibles = [patatas, croquetas];
console.log(allEdibles)
function App() {

	const [open, setOpen] = React.useState(false);
	const handleOpen = (event) => {

	};
	const handleClose = () => setOpen(false);

	return (
		<div className="App">
			<header className="App-header">
				<div className='whiteSpace'>
					<span className='brittany'>
						Vermuteria Florencia
					</span>
				</div>
				<span className='anticdidone parrafo'>

				</span>


				<br></br>
				<br></br>
				<br></br>
				<br></br><br></br>
				<div >
				
				<span className='anticdidone whiteSpace'>Abierto de 12:00h a 16:00h y de 19:00h a 23:00h
				</span>
				</div>

			</header>

			<main>
				<div className='cartaBox'>
					<h3 >Carta</h3>

					<Carta title="Tapas" edibles={edibless.tapas}></Carta>
					<Carta title="Postres" edibles={edibless.postres}></Carta>
					<Carta title="Vermuts" edibles={edibless.vermut.blanco}></Carta>

				</div>

			</main>
			<footer>
				<div className='footerLeft'>
					<span className='bold'>Ana</span>
					<span>666 66 66 66</span>
				</div>
				<div className='footerRight'>
					<span className='bold'>Samantha</span>
					<span>666 66 66 66</span>
				</div>
			</footer>
		</div>

	);
}

export default App;
