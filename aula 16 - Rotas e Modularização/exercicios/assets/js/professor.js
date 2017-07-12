angular.module('Professor', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
				.when('/professores-list/', {
					templateUrl: '../../views/professores-list.html',
					controller: 'ProfessorController',
					controllerAs: 'Professor'
				})
				.when('/professores-list/:id/', {
					templateUrl: '../../views/professores-list-detail.html',
					controller: 'ProfessorDetailController',
					controllerAs: 'ProfessorDetail'
				})
				.when('/professores-list/aulas/:id', {
					templateUrl: '../../views/professores-list-aulas.html',
					controller: 'ProfessorDetailController',
					controllerAs: 'ProfessorDetail'
				})
				.when('/professores-add/',{
					templateUrl: '../../views/professores-add.html',
					controller: 'ProfessorController',
					controllerAs: 'Professor'
				})
				.when('/professores/:id/edit',{
					templateUrl:'../../views/professores-edit.html',
					controller:'ProfessorController',
					controllerAs:'Professor'
				})		
	}])
	.controller("ProfessorController", ProfessorController)
	.controller("ProfessorDetailController", ProfessorDetailController)
	.filter('maioridade', function(){
		return function(idade){
			if (!isNaN(idade)){
				if(idade >= 18) return "Maior";
				else return "Menor";
			}
			else return "Digite sua idade";
		}
	});

	function ProfessorController(){
		var vm = this;
		vm.editing = false;
		vm.checking = false;
		vm.universidade = "UFSC";
		vm.professores = [{name: 'Dantas', aula:'Distribuida', idade:18, carga:120, dia_contratacao:"03-03-2003"
						 , password:"abcdefgh", edit:false}
						 ,{name:'Westphall', aula:'Redes', idade:29, carga:100, dia_contratacao:"04-04-2004"
						 , password:"abcdefgh", edit:false}
						 ,{name: 'Elder', aula:'Inteligencia Artificial', idade:15, carga:180
						 , dia_contratacao:"05-05-2005", password:"abcdefgh", edit:false}
		];

		vm.add = add;
		function add(professor){
			vm.professores.push(angular.copy(professor));
			console.log(vm.professores);
		}

		vm.remove = remove;
		function remove(professores){
			var aux = []
			professores.forEach(function(el){
				if(!el.selecionado) aux.push(el);
			})
			vm.professores = aux;
		}

		vm.edit = edit;
		function edit(professor, index){
			console.log("EDITANDO");
			console.log(index);
			console.log(professor);
			vm.form = angular.copy(professor);
			vm.form.index = index;
			vm.editing = true;
			professor.edit = true;
		}

		vm.save = save;
		function save(professor){
			vm.professores.forEach(function(el){
				var i = 0;
				if(i === professor.index){
					delete professor.index;
					professor.edit = false;
					vm.professores[i] = angular.copy(professor);
				}
				else{
					i++
				}
			})
			vm.editing = false;
		}

		vm.checkboxStyle = checkboxStyle;
		function checkboxStyle(){
			if(!vm.checking){
				console.log("If")
				vm.checking = true;
				return {color:'green'};
			}
			else{
				console.log("else");
				vm.checking = false;
				return {color:'rgba(0,0,0,0.87)'};
			}
		}

		vm.getTituloStyle = function(){ return "titulo-style"};	

		vm.checkEdit = checkEdit;
		function checkEdit(index, professor){
			return professor.edit;
		}

		vm.submitForm = submitForm;
		function submitForm(professor){
			console.log("Submit");
			if(vm.professorForm.$valid){
				add(professor);
			}
			else{
				alert("Confira o seu formulário");
			}
		}
	}



	function ProfessorDetailController($routeParams){
		var vm = this;
		vm.routeParams = $routeParams;
		vm.editing = false;
		vm.checking = false;
		vm.getTituloStyle = function(){ return "titulo-style"};
		vm.universidade = "UFSC";
		vm.professores = [{name: 'Dantas', aula:'Distribuida', idade:18, carga:120, dia_contratacao:"03-03-2003"
						 , password:"abcdefgh", edit:false}
						 ,{name:'Westphall', aula:'Redes', idade:29, carga:100, dia_contratacao:"04-04-2004"
						 , password:"abcdefgh", edit:false}
						 ,{name: 'Elder', aula:'Inteligencia Artificial', idade:15, carga:180
						 , dia_contratacao:"05-05-2005", password:"abcdefgh", edit:false}
		];

	}