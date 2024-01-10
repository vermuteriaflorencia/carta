
import './App.css';
import React, { useEffect, useState } from "react";
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
		itemName: "Aceitunas Hechizos del Sur",
		description: "",
		price: "2,00 €"
	},
	{
		itemName: "Aceitunas Picantonas",
		description: "",
		price: "2,00 €"
	},
	{
		itemName: "Albondigas a la jardinera",
		description: "",
		price: "6,00 €"
	},
	{
		itemName: "Alitas de pollo",
		description: "",
		price: "7,50 €"
	},
	{
		itemName: "Boquerones en vinagre con patatas chips",
		description: "",
		price: "7,50 €"
	},
	{
		itemName: "Croquetas de boletus (5 unidades)",
		description: "",
		price: "10,00 €"
	},
	{
		itemName: "Croquetas de jamón ibérico (5 unidades)",
		description: "",
		price: "10,00 €"
	},
	{
		itemName: "Cocas mini (unidad)",
		description: "",
		price: "1,25 €"
	},
	{
		itemName: "Ensaladilla rusa",
		description: "",
		price: "5,00 €"
	},
	{
		itemName: "Gamba salada",
		description: "",
		price: "6,00 €"
	},
	{
		itemName: "Gilda (pincho de aceituna,pepinillo,piparra, anchoa o boquerón)",
		description: "",
		price: "1,35 €"
	},
	{
		itemName: "Jamón Ibérico",
		description: "",
		price: "18,00 €"
	},
	{
		itemName: "Marinera de anchoa",
		description: "",
		price: "3,30 €"
	},
	{
		itemName: "Marinera de salmón",
		description: "",
		price: "3,30 €"
	},
	{
		itemName: "Magro con tomate",
		description: "",
		price: "8,00 €"
	},
	{
		itemName: "Nuggets con patatas (6 unidades)",
		description: "",
		price: "6,50 €"
	},
	{
		itemName: "Patatas bravas",
		description: "",
		price: "7,50 €"
	},
	{
		itemName: "Pincho moruno de pollo",
		description: "",
		price: "2,60 €"
	},
	{
		itemName: "Pincho de morcilla con queso de cabra y chutney de cebolla",
		description: "",
		price: "2,70 €"
	},
	{
		itemName: "Piparras rebozadas",
		description: "",
		price: "9,80 €"
	},
	{
		itemName: "Piquillos confitados, ventres de bonito, piparras y coca de mollitas",
		description: "",
		price: "14,00 €"
	},
	{
		itemName: "Queso en aceite",
		description: "",
		price: "5,50 €"
	},
	{
		itemName: "Surtido 4 quesos(Xirós, corteza lavada, trode mar y cabra afinado)",
		description: "",
		price: "13,00 €"
	},
	{
		itemName: "Torreznos con guacamole",
		description: "",
		price: "7,00 €"
	},
	{
		itemName: "Ración de pan",
		description: "",
		price: "1,50 €"
	}]
	,
	postres: [{
		itemName: "Tarta de queso manchego con crumble de chocolate y salsa de turrón ",
		description: "",
		price: "6.00 €"
	},
	{
		itemName: "Torrija brioche con salsa de turrón",
		description: "",
		price: "8.00 €"
	}],
	cafes: [{
		itemName: "Café solo",
		description: "",
		price: "1,40 €"
	},
	{
		itemName: "Café con leche",
		description: "",
		price: "1,60 €"
	},
	{
		itemName: "Cortado",
		description: "",
		price: "1,40 €"
	},
	{
		itemName: "Café descafeinado de sobre",
		description: "",
		price: "1,70 €"
	},
	{
		itemName: "Café descafeinado de máquina",
		description: "",
		price: "1,50 €"
	},
	{
		itemName: "Bombón",
		description: "",
		price: "1,80 €"
	},
	{
		itemName: "Carajillo",
		description: "",
		price: "2,70 €"
	}],
	infusiones: [{
		itemName: "Poleo menta",
		description: "",
		price: "1.60 €"
	},
	{
		itemName: "Té",
		description: "",
		price: "1.60 €"
	},
	{
		itemName: "Manzanilla",
		description: "",
		price: "1.60 €"
	}],
	vinos: {
		rosado: [{
			itemName: "",
			cupPrice: "Copa",
			bottlePrice: "Botella"
		},{
			itemName: "Quebero",
			cupPrice: "2,20 €",
			bottlePrice: "9,00 €"
		},
		{
			itemName: "Albarroble (Almansa)",
			cupPrice: "3,00 €",
			bottlePrice: "14,00 €"
		},
		{
			itemName: "Cava Pasión",
			cupPrice: "4,60 €",
			bottlePrice: "20,00 €"
		}],
		tinto: [{
			itemName: "",
			cupPrice: "Copa",
			bottlePrice: "Botella"
		},{
			itemName: "Quebero",
			cupPrice: "2,20 €",
			bottlePrice: "9,00 €"
		},
		{
			itemName: "Montes de Leza (La Rioja)",
			cupPrice: "3,50 €",
			bottlePrice: "14,00 €"
		},
		{
			itemName: "Moneo (Ribera del Duero)",
			cupPrice: "4,50 €",
			bottlePrice: "18,50 €"
		},
		{
			itemName: "Albiker (La Rioja)",
			cupPrice: "5,00 €",
			bottlePrice: "21,00 €"
		},
		{
			itemName: "Casica del Abuelo (vino de Alicante)",
			cupPrice: "5,60 €",
			bottlePrice: "25,00 €"
		}],
		blanco: [{
			itemName: "",
			cupPrice: "Copa",
			bottlePrice: "Botella"
		},{
			itemName: "Quebero",
			cupPrice: "2,20 €",
			bottlePrice: "9,00 €"
		},
		{
			itemName: "Hombre Pez (Rueda)",
			cupPrice: "2,95 €",
			bottlePrice: "12,00 €"
		},
		{
			itemName: "Rias Altas (Albariño)",
			cupPrice: "3,40 €",
			bottlePrice: "15,00 €"
		},
		{
			itemName: "Valle de Orón (Rueda)",
			cupPrice: "3,50 €",
			bottlePrice: "15,00 €"
		}]
	},
	vermut: {
		especiales: [{
			itemName: "Mixto Bocamanga",
			description: "",
			price: "6,00 €"
		},
		{
			itemName: "Naranja Bocamanga",
			description: "",
			price: "6,50 €"
		},
		{
			itemName: "Tinto reserva Martínez La Cuesta ",
			description: "",
			price: "8,00 €"
		}],
		tinto: [{
			itemName: "Myrrah (Tarragona)",
			description: "",
			price: "3,00 €"
		},
		{
			itemName: "Riko (Jalón)",
			description: "",
			price: "3,00 €"
		},
		{
			itemName: "Martínez La Cuesta (La Rioja)",
			description: "",
			price: "4,00 €"
		},
		{
			itemName: "Ostras Pedrín (Gandía)",
			description: "",
			price: "4,50 €"
		},
		{
			itemName: "La Fabulosa (Galicia)",
			description: "",
			price: "4,50 €"
		},
		{
			itemName: "Petroni (Galicia)",
			description: "",
			price: "4,50 €"
		},
		{
			itemName: "Bocamanga Barrica (Madrid)",
			description: "",
			price: "6,00 €"
		},
		{
			itemName: "Bocamanga Enebro (Madrid)",
			description: "",
			price: "6,50 €"
		},
		{
			itemName: "Lustao (Jerez de la Frontera)",
			description: "",
			price: "8,50 €"
		}
		],
		blanco: [{
			itemName: "Myrrah",
			description: "",
			price: "3,00 €"
		},
		{
			itemName: "La Fabulosa",
			description: "",
			price: "4,00 €"
		},
		{
			itemName: "Bocamanga",
			description: "",
			price: "6,00 €"
		}]
	},
	bebida: [
		{
			itemName: "Agua Lanjarón sin gas 1/2L",
			description: "",
			price: "1,75 €"
		},
		{
			itemName: "Agua Lanjarón con gas 1/2L",
			description: "",
			price: "2,50 €"
		},
		{
			itemName: "Tónica Lanjarón Bliss",
			description: "",
			price: "2,00 €"
		},
		{
			itemName: "Casera Schuss",
			description: "",
			price: "1,75 €"
		},
		{
			itemName: "Nestea",
			description: "",
			price: "2,60 €"
		},
		{
			itemName: "Aquarius de limón/naranja",
			description: "",
			price: "2,60 €"
		},
		{
			itemName: "Coca Cola",
			description: "",
			price: "2,60 €"
		},
		{
			itemName: "Coca Cola Zero",
			description: "",
			price: "2,60 €"
		},
		{
			itemName: "Fanta limón/naranja",
			description: "",
			price: "2,60 €"
		},
		{
			itemName: "Sprite",
			description: "",
			price: "2,60 €"
		},
		{
			itemName: "Zumo de naranja / manzana / piña / melocotón",
			description: "",
			price: "2,60 €"
		}],
	cerveza: [
		{
			itemName: "Caña Estrella Damm 0,33cl",
			description: "",
			price: "2,00 €"
		},
		{
			itemName: "Caña Estrella Damm 0,25cl",
			description: "",
			price: "1,80 €"
		},
		{
			itemName: "Pinta 1/2L Estrella Damm",
			description: "",
			price: "3,00 €"
		},
		{
			itemName: "Radler Amstel",
			description: "",
			price: "3,00 €"
		},
		{
			itemName: "Aguila sin filtrar",
			description: "",
			price: "3,00 €"
		},
		{
			itemName: "Mahou roja",
			description: "",
			price: "3,00 €"
		},
		{
			itemName: "1/3 Alhambra verde reserva",
			description: "",
			price: "3,00 €"
		},
		{
			itemName: "13 Turia",
			description: "",
			price: "2,70 €"
		},
		{
			itemName: "1/3 Free Damm Tostada 00%",
			description: "",
			price: "2,70 €"
		},
	]
}


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

					<span className='anticdidone whiteSpace horario'>Abierto de 12:00h a 16:00h y de 19:00h a 23:00h
					</span>
				</div>

			</header>

			<main>
				<div className='cartaBox'>
					<h3 className='anticdidone'>Carta Vermuteria Florencia</h3>
					<Carta title="Vino Rosado" edibles={edibless.vinos.rosado} cupView={true}></Carta>
					<Carta title="Vino Tinto" edibles={edibless.vinos.tinto} cupView={true}></Carta>
					<Carta title="Vino Blanco" edibles={edibless.vinos.blanco} cupView={true}></Carta>

					<Carta title="Vermut Tinto" edibles={edibless.vermut.tinto} cupView={false}></Carta>
					<Carta title="Vermut Blanco" edibles={edibless.vermut.blanco} cupView={false}></Carta>
					<Carta title="Vermut Especiales" edibles={edibless.vermut.especiales} cupView={false}></Carta>
					<Carta title="Otras Bebidas" edibles={edibless.bebida} cupView={false}></Carta>
					<Carta title="Cerveza" edibles={edibless.cerveza} cupView={false}></Carta>

					<Carta title="Tapas" edibles={edibless.tapas} cupView={false}></Carta>
					<Carta title="Postres" edibles={edibless.postres} cupView={false}></Carta>
					<Carta title="Cafés" edibles={edibless.cafes} cupView={false}></Carta>
					<Carta title="Infusiones" edibles={edibless.infusiones} cupView={false}></Carta>


				</div>
				<gmp-map center="38.64411163330078,0.04517728090286255" zoom="14" map-id="DEMO_MAP_ID">
					<gmp-advanced-marker position="38.64411163330078,0.04517728090286255" title="My location">
					</gmp-advanced-marker>
				</gmp-map>
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
