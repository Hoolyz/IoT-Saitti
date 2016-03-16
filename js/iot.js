var app = angular.module('BBapp', ['ngAudio']);

app.controller('BBController', function($scope,$http,$timeout,$interval,ngAudio){



 $scope.talvi = ngAudio.load("talvi.mp3"); // returns NgAudioObject
  $scope.kesa = ngAudio.load("kesa.mp3"); // returns NgAudioObject
  


 $scope.blinds = [];
  $interval(function() {

          $http({
            method: 'GET', url: "https://palikkapeli.blob.core.windows.net/vhds/testi/0_4c96151e3d7e49c48db665a327d07f19_1.json",
            headers: { "Accept": "application/json" }
        }).
        success(function (data, status, headers, config) {
			data = JSON.parse(data + "]");
			$scope.blinds = data;
			$scope.blinds = $scope.blinds;
        });

$timeout(function() {

$scope.testi = $scope.blinds[$scope.blinds.length - 1];
	$scope.talvi.volume = "0.01";
	$scope.kesa.volume = "0.01";
	$timeout(function (){

	if ($scope.testi.maxtempc > 24)
	{
	 $scope.talvi.pause();
	$scope.kesa.play();

	 
	}
	else 
	{
		$scope.kesa.pause();
	$scope.talvi.play();

	}
	}, 1000);


	console.log($scope.blinds[$scope.blinds.length - 1].maxtempc);
 console.log($scope.testi);
  }, 2000);	

  }, 5000);	
  
});

