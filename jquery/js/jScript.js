var dataNavi = [
	{
		href: "",
		thema: "Список тем уроков",
		title: "Оглавление"
	},
	{
		href: "u1",
		thema: "Сумма значений инпутов",
		title: "Урок 1"
	},
	{
		href: "u2",
		thema: "Создание таблицы",
		title: "Урок 2"
	},
	{
		href: "u3",
		thema: "Вывод дней недели из массива",
		title: "Урок 3"
	},
	{
		href: "u4",
		thema: "Вывод дней недели и языков",
		title: "Урок 4"
	},
	{
		href: "u5",
		thema: "Вывод элементов и выделение последнего дочернего элемента по клику на первый",
		title: "Урок 5"
	},
	{
		href: "u6",
		thema: "Рисуем карту",
		title: "Урок 6"
	},
	{
		href: "u7",
		thema: "Монеты в тарелке",
		title: "Урок 7"
	},
	{
		href: "u8",
		thema: "Игра в кости",
		title: "Урок 8"
	},
	{
		href: "u9",
		thema: "Попади в зверя",
		title: "Урок 9"
	},
	{
		href: "u10",
		thema: "Функция-конструктор",
		title: "Урок 10"
	},
	{
		href: "u11",
		thema: "Классы class",
		title: "Урок 11"
	},
	{
		href: "u12",
		thema: "Лабиринт",
		title: "Урок 12"
	},
	{
		href: "u13",
		thema: "Посчитай ворон",
		title: "Урок 13"
	},
	{
		href: "u14",
		thema: "Забей на шарики",
		title: "Урок 14"
	},
	{
		href: "u15",
		thema: "Создание стены из кирпичей",
		title: "Урок 15"
	},
	{
		href: "u16",
		thema: "Найди одинаковые картинки",
		title: "Урок 16"
	},
	{
		href: "u17",
		thema: "Создать карточки",
		title: "Урок 17"
	},
	{
		href: "u18",
		thema: "Семья",
		title: "Урок 18"
	},
	{
		href: "u19",
		thema: "Камень, ножницы, бумага",
		title: "Урок 19"
	},
	{
		href: "u20",
		thema: "Игровой автомат",
		title: "Урок 20"
	},
	{
		href: "u21",
		thema: "Напечатай слово",
		title: "Урок 21"
	},
	{
		href: "u22",
		thema: "Найди предметы",
		title: "Урок 22"
	},
	{
		href: "u23",
		thema: "Часы с цифрами",
		title: "Урок 23"
	},
	{
		href: "u24",
		thema: "Часы со стрелками",
		title: "Урок 24"
	},
	{
		href: "u25",
		thema: "Найди чужого",
		title: "Урок 25"
	},
	{
		href: "u26",
		thema: "Правильное питание для всех",
		title: "Урок 26"
	},
	{
		href: "u27",
		thema: "Сравни конфетки",
		title: "Урок 27"
	},
	{
		href: "u28",
		thema: "Найди координаты",
		title: "Урок 28"
	},
	{
		href: "u29",
		thema: "Сортировка",
		title: "Урок 29"
	},
	{
		href: "u30",
		thema: "Сортировка картин",
		title: "Урок 30"
	},
	{
		href: "u31",
		thema: "Пирамидки",
		title: "Урок 31"
	},
	{
		href: "u32",
		thema: "Найди одинаковые фигуры",
		title: "Урок 32"
	},
	{
		href: "u33",
		thema: "В каком стакане больше воды?",
		title: "Урок 33"
	},
	{
		href: "u34",
		thema: "Шарики",
		title: "Урок 34"
	},
	{
		href: "u35",
		thema: "Аквариум",
		title: "Урок 35"
	},
	{
		href: "u36",
		thema: "Игра с графиком",
		title: "Урок 36"
	},
	{
		href: "u37",
		thema: "Математическая логика",
		title: "Урок 37"
	},
	{
		href: "u38",
		thema: "Найди автобус",
		title: "Урок 38"
	},
	{
		href: "u39",
		thema: "Картинки",
		title: "Урок 39"
	},
	{
		href: "u40",
		thema: "Найди фрагмент картинки",
		title: "Урок 40"
	},
	{
		href: "u41",
		thema: "Посчитай динозавров",
		title: "Урок 41"
	},
	{
		href: "u42",
		thema: "Поправь гусеницу, перетащи животики",
		title: "Урок 42"
	},
	{
		href: "u43",
		thema: "Жизненный цикл бабочки",
		title: "Урок 43"
	},
	{
		href: "u44",
		thema: "Найди правильную тень",
		title: "Урок 44"
	},
	{
		href: "u45",
		thema: "Собери обезьянку",
		title: "Урок 45"
	}


]

let url = location.pathname
function isHome(){
	if("/jquery/" === url){
		return true
	}
	else{
		return false
	}
}

function navi(link, i){
	let naviTempl = ""
	if(isHome()){
		naviTempl = `
		<li class="navi-item"><a href="/jquery/pages/${link.href}.html" id="item_${i}">${link.title}</a></li>`
	}
	else{
		naviTempl = `
		<li class="navi-item"><a href="/jquery/pages/${link.href}.html" id="item_${i}">${link.title}</a></li>`
	}
	$(".navi ul").append(naviTempl);
	$(".navi ul .navi-item").first().find('a').attr('href', '/')
}

dataNavi.map(function(link, i){
	navi(link, i)

})

function title(){
	dataNavi.map(function(link){

	if(isHome()){
		if(link.href === url){
			$("h1").html(link.thema)
			$("title").html(link.thema)
		}
	}
	else{
		let passName = url.split("/jquery/pages/")[1].split(".html")[0]
		if(link.href === passName){
			$("h1").html(link.thema)
			$("title").html(link.thema)
		}
	}
})
}
title()

if(isHome()){
		follMenu()
	}
function follMenu(){
	dataNavi.map(function(link){
	let naviTempl = `
		<li class="navi-item"><a href="/jquery/pages/${link.href}.html">${link.title}: ${link.thema}</a></li>`
	$(".naviGross ul").append(naviTempl)
	
	})
}

$(".navi ul").on("click", ".navi-item a", function(){
	localStorage.setItem("active", $(this).attr("id"))
	$(this).addClass("active")
	console.log(this)
})


if(isHome()){
	localStorage.removeItem("active")
}

var active = localStorage.getItem("active")
//localStorage.removeItem("active")
if(active === null){
$("#item_0").parent().addClass("active")
}
else{
	$("#"+active).parent().addClass("active")
}
$(".naviGross ul").on("click", ".navi-item a", function(event){
	let _this = this
	$(".navi ul").children().toArray().map(function(li){
		let link = $(li).children("a").toArray()[0]
		if ($(link).attr("href") === $(_this).attr("href")){
			localStorage.setItem("active", $(link).attr("id"))
		}
	})
})



var aquariumTpl = ` 
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 700">
<title>Aquarium</title>
<desc>Aquarium für Logo</desc>

<mask id="mask">
	<circle cx="350" cy="350" r="300"  fill="rgba(100, 100, 100, .8)" />
</mask>
<g mask="url(#mask)">
<rect x="0" y="0" width="700" height="700" fill="rgb(100, 100, 100)" />
<g transform="translate(0, -350)">
 <path id="wasser" fill="rgb(255, 255, 255)" d="M350 23c41,0 57,35 93,49 47,18 132,6 145,54 14,52 59,78 74,125 10,31 15,64 15,99 0,18 -26,40 -29,57 -5,32 10,59 -4,87 -18,36 -43,69 -73,97 -27,25 -64,21 -98,36 -39,17 -77,50 -123,50 -70,0 -137,-7 -184,-46 -29,-24 -44,-70 -66,-103 -20,-30 -57,-50 -72,-85 -11,-25 -5,-64 -5,-93 0,-47 -7,-105 28,-133 46,-37 83,-79 100,-127 24,-65 124,-67 199,-67z">
	<animateTransform attributeName="transform"
       attributeType="XML"
       type="rotate"
       from="0 350 350"
       to="360 350 350"
       dur="20s"
       repeatCount="indefinite"/>
</path>
</g>
<g transform="translate(150, -350)">
 <path id="wasser" fill="rgb(255, 255, 255)" d="M350 23c41,0 57,35 93,49 47,18 132,6 145,54 14,52 59,78 74,125 10,31 15,64 15,99 0,18 -26,40 -29,57 -5,32 10,59 -4,87 -18,36 -43,69 -73,97 -27,25 -64,21 -98,36 -39,17 -77,50 -123,50 -70,0 -137,-7 -184,-46 -29,-24 -44,-70 -66,-103 -20,-30 -57,-50 -72,-85 -11,-25 -5,-64 -5,-93 0,-47 -7,-105 28,-133 46,-37 83,-79 100,-127 24,-65 124,-67 199,-67z">
	<animateTransform attributeName="transform"
       attributeType="XML"
       type="rotate"
       from="0 350 350"
       to="360 350 350"
       dur="20s"
       repeatCount="indefinite"/>
</path>
</g>
<g transform="translate(-150, -350)">
 <path id="wasser" fill="rgb(255, 255, 255)" d="M350 23c41,0 57,35 93,49 47,18 132,6 145,54 14,52 59,78 74,125 10,31 15,64 15,99 0,18 -26,40 -29,57 -5,32 10,59 -4,87 -18,36 -43,69 -73,97 -27,25 -64,21 -98,36 -39,17 -77,50 -123,50 -70,0 -137,-7 -184,-46 -29,-24 -44,-70 -66,-103 -20,-30 -57,-50 -72,-85 -11,-25 -5,-64 -5,-93 0,-47 -7,-105 28,-133 46,-37 83,-79 100,-127 24,-65 124,-67 199,-67z">
	<animateTransform attributeName="transform"
       attributeType="XML"
       type="rotate"
       from="0 350 350"
       to="360 350 350"
       dur="20s"
       repeatCount="indefinite"/>
</path>
</g>
</g>
</svg>
	`
	var dataBilderU30 = [
		{
			class: "bild naturmort aquarell",
			src: "../bilder/u30/bild_1.jpg",
			alt: "Apfel",
			datum: "01/10/2019",
			preis: 35
		},
		{
			class: "bild landschaft aquarell",
			src: "../bilder/u30/bild_2.jpg",
			alt: "Meer",
			datum: "02/05/2019",
			preis: 40
		},
		{
			class: "bild naturmort aquarell",
			src: "../bilder/u30/bild_3.jpg",
			alt: "Wassermelone",
			datum: "02/11/2019",
			preis: 20
		},
		{
			class: "bild naturmort ol",
			src: "../bilder/u30/bild_4.jpg",
			alt: "Kirschen",
			datum: "02/12/2019",
			preis: 150
		},
		{
			class: "bild naturmort ol",
			src: "../bilder/u30/bild_5.jpg",
			alt: "Kirschen",
			datum: "02/20/2019",
			preis: 155
		},
		{
			class: "bild naturmort aquarell",
			src: "../bilder/u30/bild_6.jpg",
			alt: "Apfel",
			datum: "03/05/2019",
			preis: 30
		},
		{
			class: "bild naturmort ol",
			src: "../bilder/u30/bild_7.jpg",
			alt: "Granatapfel",
			datum: "04/10/2020",
			preis: 190
		},
		{
			class: "bild naturmort ol",
			src: "../bilder/u30/bild_8.jpg",
			alt: "Birnen",
			datum: "05/28/2021",
			preis: 110
		},
		{
			class: "bild naturmort ol",
			src: "../bilder/u30/bild_9.jpg",
			alt: "Apfel",
			datum: "06/15/2020",
			preis: 120
		},
		{
			class: "bild landschaft aquarell",
			src: "../bilder/u30/bild_10.jpg",
			alt: "Meer",
			datum: "06/10/2019",
			preis: 45
		}
	]
function svgTPL(figuren){
    var {color, translate, rotate} = figuren
	return ` <div class="figure">
	<svg  xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet"
width="100%" height="100%" viewBox="0 0 100 100">
 <title>SpielItem</title>
 <defs>
  <style type="text/css">
   <![CDATA[
    .black {fill:black; stroke:none;}
	.white {fill:white; stroke:black; stroke-width:1;}
   ]]>
  </style>
	
 </defs>
<circle class="${color[0]}" transform="translate(${translate[0]})" cx="25" cy="25" r="19"/>
<rect class="${color[1]}" transform="translate(${translate[1]}) rotate(${rotate[0]} 25 25)" width="30" height="30" x="10" y="10"/>
<circle class="${color[2]}" transform="translate(${translate[2]})" cx="25" cy="25" r="19"/>
<polygon  class="${color[3]}" transform="translate(${translate[3]}) rotate(${rotate[1]} 25 25)" points="25 5, 45 40, 5 40, 25 5"/>
 </svg>
 </div>
`
}


function addLogo (){
var template = 
`<!--?xml version="1.0" encoding="UTF-8"?-->
<svg id="logoBild" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" width="100%" height="100%" viewBox="0 0 400 150">

<title>Logo</title>
<desc>Ein Logo von Sergiy Tsytron</desc>

<defs>
	<linearGradient id="weiseGradient" x1="0" x2="0" y1="1" y2="0">
		<stop offset="5%" stop-color="orange" stop-opacity="1"></stop>
		<stop offset="50%" stop-color="orange" stop-opacity="0"></stop>
	</linearGradient>
	<style xmlns="http://www.w3.org/2000/svg" type="text/css">
		
			text {
			font-size:107px;
			font-family: 'Julius Sans One', serif
			font-family: 'Montserrat', sans-serif;
			}
		
	</style>

</defs>

<!-- <rect x="0" y="0" width="400" height="150" fill="black"></rect> -->
<g id="LOGOGroup" transform="translate(0,9)">
		<text id="LOGO" fill="orange" x="40" y="99">LOGO</text>
		<text id="LOGOSCHATTEN" transform="scale(1,-1)" fill="url(#weiseGradient)" x="40" y="-103">LOGO</text>
</g>
</svg>`
$(".logo a").append(template);
}

addLogo ()
