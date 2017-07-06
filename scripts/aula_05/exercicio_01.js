angular.module('BeMEAN', [])
		.controller("UserController", UserController)
		.controller("CursoController", CursoController)
		.controller("ProfessorController", ProfessorController)
		.filter('maioridade', function(){
			return function(idade){
				if (!isNaN(idade)){
					if(idade >= 18) return "Maior";
					else return "Menor";
				}
				else return "Digite sua idade";
			}
		});;

		function CursoController(){
			var vm = this;
			vm.titulo = "Be MEAN - Cursos";
			vm.reverse = false;
			vm.cursos = [
				{name: 'Angular', teacher:'Jhonata', carga:96}
				,{name: 'React', teacher:'Toru', carga: 70}
			];

			vm.orderByName = orderByName;
		      function orderByName(){
		        vm.predicate = 'name';
		        vm.reverse = !vm.reverse;

		      }

		      vm.orderByTeacher = orderByTeacher;
		      function orderByTeacher(){
		        vm.predicate = 'teacher';
		        vm.reverse = !vm.reverse;
		      }
		}


		function UserController(){
			var vm = this;
			vm.titulo = "Be MEAN - Alunos";
			vm.reverse = false;
			vm.users = [
				{name: 'Guilherme', email:'gui@gmail.com', signo:'Leão'}
				,{name: 'João', email:'jão@gmail.com', signo:'Virgem'}
			];

			vm.orderByName = orderByName;
		      function orderByName(){
		        vm.predicate = 'name';
		        vm.reverse = !vm.reverse;

		      }

		      vm.orderByEmail = orderByEmail;
		      function orderByEmail(){
		        vm.predicate = 'email';
		        vm.reverse = !vm.reverse;
		      }
		}

		function ProfessorController(){
			var vm = this;
			vm.universidade = "UFSC";
			vm.reverse = false;
			vm.professores = [{name: 'Dantas', aula:'Distribuida', idade:18, carga:120}
							 ,{name:'Westphall', aula:'Redes', idade:29, carga:100}
							 ,{name: 'Elder', aula:'Inteligencia Artificial', idade:15, carga:180}];

			vm.orderByName = orderByName;
		      function orderByName(){
		        vm.predicate = 'name';
		        vm.reverse = !vm.reverse;
		      }

		      vm.orderByIdade = orderByIdade;
		      function orderByIdade(){
		        vm.predicate = 'idade';
		        vm.reverse = !vm.reverse;
		      }
		}