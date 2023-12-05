// var dropdown = document.getElementsByClassName("buttonExpandir");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function () {

//     this.classList.toggle("active");

//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//       this.style.transform = "none";
//     } else {
//       dropdownContent.style.display = "block";
//       this.style.transform = 'rotate(180deg)';
//     }
//   });
// }

// new SimpleSlide({
//   slide: 'home_slide', // nome do atributo data-slide="principal"
//   nav: true, // se deve ou não mostrar a navegação
//   auto: true, // se o slide deve passar automaticamente
//   time: 5000, // tempo de transição dos slides
//   pauseOnHover: false, // pausa a transição automática
// });
//const btnMobile = document.getElementById('btn-mobile');
// const iconMobile = document.getElementById("icon-mobile");

// function toggleMenu() {
// 	const nav = document.getElementById("nav");

// 	nav.classList.toggle("active");
// }

// //btnMobile.addEventListener('click', toggleMenu);
// iconMobile.addEventListener("click", toggleMenu);

// if (window.SimpleAnime) {
// 	new SimpleAnime();
// }

// // Debounce do Lodash
// const debounce = function (func, wait, immediate) {
// 	let timeout;
// 	return function (...args) {
// 		const context = this;
// 		const later = function () {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		const callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };

// //Traz todos os elementos que possuem o data-scroll
// const target = document.querySelectorAll("[data-scroll]");

// const animateClass = "animate";

// function animeScroll() {
// 	console.log("Teve Scroll");

// 	//Traz o valor da distancia do elemento com o topo da página
// 	const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

// 	target.forEach(function (element) {
// 		if (windowTop > element.offsetTop) {
// 			element.classList.add(animateClass);
// 		} else {
// 			element.classList.remove(animateClass);
// 		}
// 	});
// }

// animeScroll();

// if (target.length) {
// 	//O listener vai ficar observando qndo houver scroll na página
// 	window.addEventListener(
// 		"scroll",
// 		debounce(function () {
// 			animeScroll();
// 		}, 200)
// 	);
// }

// $(function () {
// 	$(".lista").slick({
// 		infinite: true,
// 		autoplay: true,
// 		autoplaySpeed: 2000,
// 		prevArrow: $("#arrow-prev"),
// 		nextArrow: $("#arrow-next"),

// 		responsive: [
// 			{
// 				breakpoint: 640,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1,
// 				},
// 			},
// 		],
// 	});
// });

$(window).on("load", function(){
	var largura = window.screen.width;

	if (largura > 600) {
		var bannerAltura = $(".bannerPagina_imagem").height();
		var bannerTituloAltura = -bannerAltura / 2 - 30 + "px";

		$(".bannerPagina_titulo").css("top", bannerTituloAltura);
	} else {
		var bannerAltura = $(".bannerPagina_imagem").height();
		var bannerTituloAltura = -bannerAltura / 2 - 18 + "px";

		$(".bannerPagina_titulo").css("top", bannerTituloAltura);
	}
	
	$(function () {
		$(".banner").slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
	
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false,
					},
				},
	
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false,
					},
				},
	
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false,
					},
				},
			],
		});
	});
});

var botaoMobile = $("#btn_mobile");
	var iconeMenu = $("#icone_menu");
	var menu = $("#menu");

function toggleMenu() {
	menu.toggleClass("active_menu");
	iconeMenu.toggleClass("close");
}

$(function () {
	$(".lista").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		// prevArrow: $("#arrow-prev"),
		// nextArrow: $("#arrow-next"),

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},

			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
				},
			},
		],
	});
});



//botaoMobile.click(toggleMenu());
// function rotateImg() {
//   let img = document.getElementById('imageExpandir')
//   img.style.transform = 'rotate(180deg)';
// }
