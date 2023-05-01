//buttons
const inicioButton = document.querySelector("#Inicio");
const servicesButton = document.querySelector("#services");
const tubosButton = document.querySelector("#tubos-button");
const revestButton = document.querySelector("#revest-button");
const reservaButton = document.querySelector("#reserva-button");
const sobreButton = document.querySelector("#sobre");
const contatoButton = document.querySelector("#contato");

// itens
const serviceContent = document.querySelector(".servicos");
const contentInicio = document.querySelector("#Main1");
const descriçãoInicio = document.querySelector(".MainText");
const tubosContent = document.querySelector("#tubulacoes");
const revest = document.querySelector("#revestimento");
const reservaContent = document.querySelector("#reservatórios");
const sobreContent = document.querySelector("#sobre-grid");
const contatoContent = document.querySelector(".info_grid_contact");

//botão inicio

inicioButton.addEventListener("click", function () {
	serviceOut();
	sobreOut();
	contatoOut();
	inicioIn();
});
servicesButton.addEventListener("click", function () {
	inicioOut();
	sobreOut();
	contatoOut();
	serviceIn();
});
sobreButton.addEventListener("click", function () {
	inicioOut();
	serviceOut();
	contatoOut();
	sobreIn();
});

contatoButton.addEventListener("click", function () {
	inicioOut();
	serviceOut();
	sobreOut();
	contatoIn();
});

//lógica da entrada e saida dos itens de serviços.
tubosButton.addEventListener("click", function () {
	revestOut();
	reservaOut();
	setTimeout(function () {
		tubosIn();
	}, 10);
});

revestButton.addEventListener("click", function () {
	tubosOut();
	reservaOut();
	setTimeout(function () {
		revestIn();
	}, 10);
});

reservaButton.addEventListener("click", function () {
	tubosOut();
	revestOut();

	setTimeout(function () {
		reservaIn();
	}, 10);
});

// Predefinições das Transições

function inicioIn() {
	setTimeout(function () {
		contentInicio.style.transform = "translateX(0px)";
	}, 100);
}

function inicioOut() {
	contentInicio.style.transform = "translateX(-500px)";
}

function serviceIn() {
	setTimeout(function () {
		serviceContent.style.transform = "translateY(0px)";
	}, 10);
}

function serviceOut() {
	serviceContent.style.transform = "translateY(600px)";
}

function sobreIn() {
	setTimeout(function () {
		sobreContent.style.transform = "translateY(0px)";
	}, 10);
}
function sobreOut() {
	sobreContent.style.transform = "translateY(600px)";
}

function contatoIn() {
	setTimeout(function () {
		contatoContent.style.transform = "translateY(0px)";
	}, 10);
}
function contatoOut() {
	contatoContent.style.transform = "translateX(600px)";
}

// pré-Definições dos itens de serviços

function revestIn() {
	setTimeout(function () {
		revest.style.transform = "translateY(0px)";
	}, 10);
}

function revestOut() {
	revest.style.transform = "translateY(600px)";
}

function tubosIn() {
	setTimeout(function () {
		tubosContent.style.transform = "translateY(0px)";
	}, 10);
}

function tubosOut() {
	tubosContent.style.transform = "translateY(600px)";
}

function reservaIn() {
	setTimeout(function () {
		reservaContent.style.transform = "translateY(0px)";
	}, 10);
}

function reservaOut() {
	reservaContent.style.transform = "translateY(600px)";
}
