 
angular.module('routerApp')
	.controller('aboutController', aboutController);

function aboutController($scope, $timeout, blockUI, cfpLoadingBar, pageService) {
  // pageService.setTitle("Paweł Rostek - o mnie");
  // loadingBar($scope, $timeout, blockUI, cfpLoadingBar);
}

function loadingBar($scope, $timeout, blockUI, cfpLoadingBar)
{
   var myBlockUI = blockUI.instances.get('aboutBlockUi');

   myBlockUI.start();
// $scope.start();
   $scope.hideIntro = true;
   $timeout(function() {
      // $scope.complete();
       myBlockUI.stop();
      $scope.hideIntro = false;
    }, 1150);
}