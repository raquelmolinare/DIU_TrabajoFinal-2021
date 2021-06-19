/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019     */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function ($scope) {
		$scope.Grupo_ID = "DIU RMR";
		$scope.Curso = "2020/21";
		$scope.Github_ID = "https://github.com/mgea/UX-DIU-Toolkit";

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{


				/*************************************/
				/**** PRIMERA PERSONA          *******/
				/*** Cambiar datos             *******/
				/*************************************/


				Id: 0,
				Name: "Ángel Martínez",
				Photo: "angel.jpg",
				Quote: "Mente Positiva",
				Age: 27,
				Occupation: "Community manager de una empresa de productos deportivos",
				Family: "Con pareja desde hace 3 años.",
				Location: "Granada capital.",
				Character: "Es un fanático del deporte, la naturaleza y los planes al aire libre.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				],
				Goals: [
					"Conseguir sacar tiempo para formarse como entrenador personal.",
					"Participar en carreras benéficas de todas las provincias de España."
				],
				Frustrations: [
					"No consigue una forma de vivir cerca del trabajo y del campo."
				],
				Bio: "Nació en un pueblo de Jaén pero se mudó a Granada para estudiar el grado en Marketing e investigación de mercados en la universidad de Granada. De pequeño quería ser profesor de educación física, pero en el instituto se atrajo más por la economía. Estos dos últimos años ha estado trabajando de Community manager en una empresa de productos deportivos. Le gusta la naturaleza y hacer deporte al aire libre. Le gustaría vivir en el campo pero necesita vivir en la ciudad para estar cerca del trabajo.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 1 }

				],
				Contextos: "Pronto empieza sus vacaciones y por la situación actual del Covid-19 su pareja y él han decido quedarse en Granada y disfrutar de pequeños planes locales. Necesita encontrar información acerca de eventos y acontecimientos interesantes en la ciudad.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{

				/*************************************/
				/**** SEGUNDA PERSONA          *******/
				/*** Cambiar datos             *******/
				/*************************************/


				Id: 1,
				Name: "Carmen García",
				Photo: "carmen.jpg",
				Quote: "El conocimiento es poder",
				Age: 46,
				Occupation: "Profesora de filosofía.",
				Family: "Casada desde hace 13 años y con dos hijos pequeños.",
				Location: "Sevilla.",
				Character: "Alegre y muy exigente con ella misma.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				],
				Goals: ["Escribir libros de ficción con connotaciones filosóficas.", "Bucear con tiburones en Costa Rica."],
				Frustrations: ["A veces no tiene tiempo para ella misma."],
				Bio: "Nació en Ciudad Real pero se mudó a Málaga para estudiar el grado de Filosofía y acabó enamorándose de la ciudad y la costa. De pequeña quería ser profesora de infantil para poder enseñar a niños y niñas, pero en el instituto se atrajo más por la filosofía y las letras. Este año se ha mudado a Sevilla con su familia por motivos de trabajo y actualmente tiene un puesto de trabajo fijo en un instituto de la ciudad.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value:  2},
					{ Name: "Software", Value: 0 }

				],
				Contextos: "Aún no conoce muchos sitios de la ciudad y le gustaría hacer planes culturales con su pareja e hijos.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])