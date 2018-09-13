angular.module('sinllorar', []).controller('mainController', function ($scope) {
    var self = this;
    self.p = ['Jorge', 'Fraga', 'Edgar', 'Eduardo', 'Saurio', 'Cau', 'Julio', 'Emmanuel'];
    self.e = [
        ['Rusia', 'Arabia Saudita', 'Egipto', 'Uruguay'],
        ['Portugal', 'Espana', 'Marruecos', 'Iran'],
        ['Francia', 'Australia', 'Peru', 'Dinamarca'],
        ['Argentina', 'Islandia', 'Croacia', 'Nigeria'],
        ['Brasil', 'Suiza', 'Costa Rica', 'Serbia'],
        ['Alemania', 'Mexico', 'Suecia', 'Korea'],
        ['Belgica', 'Panama', 'Tunes', 'Inglaterra'],
        ['Polonia', 'Senegal', 'Colombia', 'Japon']
    ];

    $scope.a = [];
    $scope.b = [];
    $scope.c = [];
    $scope.d = [];

    $scope.shuffle = 100;

    self.getChairos = function () {       
        for (var i = 0; i < $scope.shuffle; i++) {
            self.p.shuffle();           
        }            
        return self.p;
    };

    self.mixealeMas = function (groups) {       
        for (var i = 0; i < $scope.shuffle; i++) {
            groups.shuffle();                         
        }        
        return groups;
    };

    self.mixeale = function (mixGroup) {
        var sortGroup = [];
        for (var i = 0; i < self.e.length; i++) {
            sortGroup.push(self.e[i][mixGroup - 1]);
        }
        return self.mixealeMas(sortGroup);
    };

    self.s = function (gg) {
        var pp = self.getChairos();
        var yAsiQuedo = [];

        for (var i = 0; i < pp.length; i++) {
            yAsiQuedo.push({
                chairo: pp[i],
                equipo: gg[i]
            });
        }
        return yAsiQuedo;
    };

    $scope.roundFour = function () {
        $scope.a = self.s(self.mixeale(4));
    };

    $scope.roundThree = function () {       
        $scope.b = self.s(self.mixeale(3));
    };

    $scope.roundTwo = function () {       
        $scope.c = self.s(self.mixeale(2));
    };

    $scope.roundOne = function () {      
        $scope.d = self.s(self.mixeale(1));
    };
});

Array.prototype.shuffle = function () {
    var i = this.length,
        j, temp;
    if (i == 0) return this;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};