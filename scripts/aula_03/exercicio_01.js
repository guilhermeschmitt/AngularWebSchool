angular.module('BeMEAN', [])
		.controller("UserController", UserController)
		.controller("CursoController", CursoController)
		.controller("ProfessorController", ProfessorController);

		function CursoController(){
			var vm = this;
			vm.titulo = "Be MEAN - Cursos";
			vm.cursos = [
				{name: 'Angular', teacher:'Jhonata'}
				,{name: 'React', teacher:'Toru'}
			];
		}


		function UserController(){
			var vm = this;
			vm.titulo = "Be MEAN - Alunos";
			vm.users = [
				{name: 'Guilherme', email:'gui@gmail.com'}
				,{name: 'João', email:'jão@gmail.com'}
			];
		}

		function ProfessorController(){
			var vm = this;
			vm.universidade = "UFSC";
			vm.professores = [{name: 'Dantas', aula:'Distribuida'}, {name:'Westphall', aula:'Redes'}
							 ,{name: 'Elder', aula:'Inteligencia Artificial'}];
		}