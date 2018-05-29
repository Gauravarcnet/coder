var app=angular.module('main',['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/',{
        templateUrl:'./components/home.html',
        controller:'homeCtrl'
    }).when('/login',{
        templateUrl:'./components/login.html',
        controller:'loginCtrl'
    }).when('/Registration',{
        templateUrl:'./components/registration.html',
        controller:'registrationCtrl'
    }).when('/dashboard',{
        resolve: {
            check: function ($location, user) {
                if (!user.isUserLoggedIn()) {
                    $location.path('/login')

                }
            },
        },
        templateUrl:'./components/dashboard.html',
        controller:'dashboardCtrl'
    }).otherwise({
        templateUrl:'404'
    });
    //$locationProvider.html5Mode(true);
});
app.service('user',function () {
    var username;
    var loggedin =false;
    var id;
    this.setName=function (name) {
        username=name;
    };
    this.getName=function () {
        return username;
    };
    this.setId=function (userId) {
        id=userId;
    };
    this.getId=function () {
        return id;
    };
    this.isUserLoggedIn=function () {
        return loggedin;
    };
    this.userLoggedIn=function () {
        loggedin=true;
    };
});
app.controller('homeCtrl',function ($scope,$location) {
    $scope.goToLogin=function () {
        $location.path('/login');
    };
    $scope.goToRegistration=function () {
        $location.path('/Registration');
    };

});
app.controller('loginCtrl',function ($scope ,$http,user,$location) {
    $scope.login=function () {
        var userName=$scope.userName;
        var userPassword=$scope.userPassword;
        alert(userName);
        $http({
            url:'http://localhost/angularjs/server.php',
            method:'POST',
            headers:{
                'content-Type':'application/x-www-form-urlencoded',
            },
            data:'username='+userName+'&password='+userPassword,
        }).then(function (responce) {
            if(responce.data.status=='Loggin'){
                user.userLoggedIn();
                user.setName(responce.data.user)
                $location.path('/dashboard')
            }else{
                alert("invalid credentails");
            }

        })
    }
});
app.controller('dashboardCtrl',function ($scope,$location,user) {
        $scope.user=user.getName();


});

