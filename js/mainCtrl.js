var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

  $scope.getQuotes = function(){
	$scope.list = dataService.getData();
  };
	
  $scope.showAdd = function(){
  	$scope.showNewQuote = !$scope.showNewQuote;
  	$scope.showFilter = false;
  	$scope.showRemoveQuote = false;
  }

  $scope.showRemove = function(){
  	$scope.showNewQuote = false;
  	$scope.showFilter = false;
  	$scope.showRemoveQuote = !$scope.showRemoveQuote;
  }

  $scope.addQuote = function(){
  	var quote = {};
  	quote.text = $scope.newQuote;
  	quote.author = $scope.newAuthor;
  	dataService.addData(quote);
  	$scope.newQuote = "";
  	$scope.newAuthor = "";
  };

  $scope.removeQuote = function(){
  	dataService.removeData($scope.deleteQuote);
  	$scope.deleteQuote = "";
  };

  $scope.filterQuotes = function(){
  	$scope.showNewQuote = false;
  	$scope.showFilter = !$scope.showFilter;
  	$scope.showRemoveQuote = false;
  }

  $scope.getQuotes();

});