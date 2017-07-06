angular.module('BeMEAN', [])
		.controller("UserController", UserController)
		.controller("CursoController", CursoController)
		.controller("ProfessorController", ProfessorController)
		.controller("CBLOLController", CBLOLController)
		.filter('maioridade', function(){
			return function(idade){
				if (!isNaN(idade)){
					if(idade >= 18) return "Maior";
					else return "Menor";
				}
				else return "Digite sua idade";
			}
		});

		function CursoController(){
			var vm = this;
			vm.titulo = "Be MEAN - Cursos";
			vm.cursos = [
				{name: 'Angular', teacher:'Jhonata', carga:96}
				,{name: 'React', teacher:'Toru', carga: 70}
			];

			vm.add = add;
			function add(curso){
				vm.cursos.push(curso);
			}
		}


		function UserController(){
			var vm = this;
			vm.titulo = "Be MEAN - Alunos";
			vm.users = [
				{name: 'Guilherme', email:'gui@gmail.com', signo:'Leão'}
				,{name: 'João', email:'jão@gmail.com', signo:'Virgem'}
			];

			vm.add = add;
			function add(user){
				vm.users.push(user);
			}
		}

		function ProfessorController(){
			var vm = this;
			vm.universidade = "UFSC";
			vm.professores = [{name: 'Dantas', aula:'Distribuida', idade:18, carga:120}
							 ,{name:'Westphall', aula:'Redes', idade:29, carga:100}
							 ,{name: 'Elder', aula:'Inteligencia Artificial', idade:15, carga:180}
			];

			vm.add = add;
			function add(professor){
				vm.professores.push(professor);
			}
		}

		function CBLOLController(){
			var vm = this;
			vm.campeonato = "CBLOL";
			vm.times = [{name:'Pain', mjogador:'Mylon', idade:21}
					   ,{name:'CNB', mjogador:'TinOwns', idade:18}
					   ,{name:'RED', mjogador:'BrTT', idade:24}
					   ,{name:'INTZ', mjogador:'MicaO', idade:17}
			];

			vm.add = add;
			function add(cblol){
				vm.times.push(cblol);
			}
		}