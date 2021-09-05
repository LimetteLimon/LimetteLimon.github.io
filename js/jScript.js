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
		thema: "Перебор массивов и объектов",
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
	}

]

let url = location.pathname
function isHome(){
	if("/" === url){
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
		<li class="navi-item"><a href="/pages/${link.href}.html" id="item_${i}">${link.title}</a></li>`
	}
	else{
		naviTempl = `
		<li class="navi-item"><a href="/pages/${link.href}.html" id="item_${i}">${link.title}</a></li>`
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
		let passName = url.split("/pages/")[1].split(".html")[0]
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
		<li class="navi-item"><a href="/pages/${link.href}.html">${link.title}: ${link.thema}</a></li>`
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
