angular.module('BeMEAN', ['ngAnimate'])
		.controller("ProfessorController", ProfessorController)
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
			vm.professores = [{name: 'Dantas', aula:'Distribuida', idade:18, carga:120}
							 ,{name:'Westphall', aula:'Redes', idade:29, carga:100}
							 ,{name: 'Elder', aula:'Inteligencia Artificial', idade:15, carga:180}
			];

			vm.add = add;
			function add(professor){
				vm.professores.push(angular.copy(professor));
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
				vm.form = angular.copy(professor);
				vm.form.index = index;
				vm.editing = true;
			}

			vm.save = save;
			function save(professor){
				vm.professores.forEach(function(el){
					var i = 0;
					if(i === professor.index){
						delete professor.index;
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
		}