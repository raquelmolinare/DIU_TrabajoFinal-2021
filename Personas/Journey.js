/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU RMR";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Ángel Martínez",
                Photo: "angel.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere encontrar entretenimiento para sus vacaciones.",
                touch1: "móvil",
                feel1: "5",
                con1: "Encontrar información de eventos y entrenenimiento por Granada",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet información sobre eventos cercanos",
                touch2: "móvil",
                feel2: "3",
                con2: "Hay muchas webs sobre turismo y eventos en Granada",
                ima2: "cartoon-thinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar eventos en Yuzin porque aparece de los primeros resultados en la búsqueda",
                touch3: "móvil",
                feel3: "1",
                con3: "No puede ver bien la página de inicio en el movil.",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Puede filtrar los eventos que hay solo este mes que él tiene vacaciones.",
                touch4: "móvil",
                feel4: "3",
                con4: "La descripción de los eventos es muy pequeña y no le queda claro que se ofrece.",
                ima4: "cartoon-looking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "No encuentra un evento que le llame la atención.",
                touch5: "móvil",
                feel5: "3",
                con5: "Considera que falta información sobre el evento y la variedad es escasa.",
                ima5: "cartoon-looking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Deja de buscar en esta web y prueba otras páginas alternativas.",
                touch6: "móvil",
                feel6: "3",
                con6: "No consigue aclararse ni encontrar variedad de eventos.",
                ima6: "cartoon-KO.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Carmen García",
                Photo: "carmen.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere encontrar eventos interesantes a los que poder asistir con su pareja e hijos",
                touch1: "ordenador",
                feel1: "4",
                con1: "No conoce muy bien sevilla ni los lugares donde se celebran eventos",
                ima1: "cartoon-thinking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet informacion sobre eventos",
                touch2: "ordenador",
                feel2: "4",
                con2: "Hay muchas webs y no hay valoraciones de usuarios así que no sabe por cual decidirse",
                ima2: "cartoon-looking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar eventos en Yuzin porque una amiga se lo recomienda",
                touch3: "ordenador",
                feel3: "3",
                con3: "No entiende muy bien que tiene que ver la página de incio de la web con eventos.",
                ima3: "cartoon-why.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Quiere conocer los eventos de la ciudad para este mes",
                touch4: "ordenador",
                feel4: "2",
                con4: "No distingue bien la fecha de los eventos y no percibe una organización cronológica buena",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra un apartado para poder descargar la revista con los eventos de este mes",
                touch5: "ordenador",
                feel5: "4",
                con5: "Siente que la revista está mucho más organizada que la web aunque se da cuenta de que para otras ciudades hay más información de eventos que para Sevilla",
                ima5: "cartoon-PCSurprised.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Gracias a la versión revista encuentra un evento que le llama la atención",
                touch6: "ordenador",
                feel6: "4",
                con6: "Busca ese evento en internet y compra las entradas en otra página web porque la revista digital no tiene enlace para comprar entradas.",
                ima6: "cartoon-writting.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



