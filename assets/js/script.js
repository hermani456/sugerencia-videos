// funcion iife con una funcion publica y un metodo privado
// recibe un id y una url que le asigna al atributo src en el doom
const categoriaVideo = (() => {
	miMetodoPrivado = (url, id) => {
		document.querySelector(id).setAttribute("src", url)
		console.log("hola")
	}
	return {
		miFuncionPublica: (direccion, identificador) =>
			miMetodoPrivado(direccion, identificador),
	}
})()

// clase multimedia
class Multimedia {
	constructor(url) {
		let _url = url
		this.getUrl = () => {
			return _url
		}
		this.setUrl = (url) => {
			_url = url
		}
	}
	get url() {
		return this.getUrl()
	}
	set url(url) {
		this.setUrl(url)
	}
	setInicio() {
		return "este metodo es para realizar un cambio en la URL del video"
	}
}

// clase reproductor que extiende a clase multimedia
class Reproductor extends Multimedia {
	constructor(url, id) {
		super(url)
		let _id = id
		this.getId = () => {
			return _id
		}
		this.setId = (id) => {
			_id = id
		}
	}
	get id() {
		return this.getId()
	}
	set id(id) {
		this.setId(id)
	}
	// metodo que llama a la clase iife pasandole los atribulos de url y id
	playMultimedia() {
		categoriaVideo.miFuncionPublica(this.url, this.id)
	}
	// metodo que setea el comienzo del video en segundos
	setInicio(segundos) {
		document
			.querySelector(this.id)
			.setAttribute("src", `${this.url}?start=${segundos}`)
	}
}

// creando reproductor para musica
const musica = new Reproductor()
musica.url = "https://www.youtube.com/embed/Ddn4MGaS3N4"
musica.id = "#musica"

// creando reproductor para peliculas
const peliculas = new Reproductor()
peliculas.url = "https://www.youtube.com/embed/9mOIxyRTY5I"
peliculas.id = "#peliculas"

// creando reproductor para series
const series = new Reproductor()
series.url = "https://www.youtube.com/embed/PHlJQCyqiaI"
series.id = "#series"

// llamando al metodo playmultimedia que a su vez llama a la funcion iife
musica.playMultimedia()
peliculas.playMultimedia()
series.playMultimedia()

// llamando al metodo setinicio que setea los segundos en los que comienza el video
musica.setInicio(15)
peliculas.setInicio(60)
series.setInicio(90)
