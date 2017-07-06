angular.module('BeMEAN', [])
		.filter('maioridade', function(){
			return function(idade){
				if (!isNaN(idade)){
					if(idade >= 18) return "Maior";
					else return "Menor";
				}
				else return "Digite sua idade";
			}
		});