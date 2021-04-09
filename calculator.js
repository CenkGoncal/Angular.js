var mainApp = angular.module("mainApp", []);



mainApp.controller('TestController', function ($scope, MathService, KeyPressService) {
    $scope.sayi1 ="";
    $scope.sayi2 ="";

    $scope.keyup = function (keyEvent) {
        var keynum = keyEvent.keyCode || keyEvent.which;

        var islemflag=false;
        // klavyeden iþlemler
        if (keynum == 107) { $scope.islem(1); islemflag = true;  }
        if (keynum == 109) { $scope.islem(2); islemflag = true; }
        if (keynum == 106) { $scope.islem(3); islemflag = true; }
        if (keynum == 111) { $scope.islem(4); islemflag = true; }
        if (keynum == 13) { $scope.esittir(); }
        if (keynum == 27) { $scope.temizle(); }
        var a = KeyPressService.kontrol(keynum);
        if (!islemflag && a != undefined) $scope.deger(a);
    };

    $scope.toplam = function () {
        $scope.kontrol();
        $scope.result = MathService.addition(parseInt($scope.sayi1),parseInt($scope.sayi2));
    }

    $scope.cikarma = function () {
        
        if ($scope.sayi1 != "" && $scope.sayi2 != "")
        {
            if ($scope.tip == 1) $scope.result = MathService.subraction(parseInt($scope.sayi2), parseInt($scope.sayi1));
            if ($scope.tip == 2) $scope.result = MathService.subraction(parseInt($scope.sayi1), parseInt($scope.sayi2));;
        }
       
    }

    $scope.carpma = function () {
        $scope.kontrolx();
        $scope.result = MathService.multiplication(parseInt($scope.sayi1), parseInt($scope.sayi2));
    }

    $scope.bolme = function () {
        if ($scope.sayi1 != "" && $scope.sayi2 != "") {
            if ($scope.tip == 1) $scope.result = MathService.divition(parseInt($scope.sayi2), parseInt($scope.sayi1));
            if ($scope.tip == 2) $scope.result = MathService.divition(parseInt($scope.sayi1), parseInt($scope.sayi2));
        }
    }

    $scope.mod = function () {
        if ($scope.sayi1 != "" && $scope.sayi2 != "") {
            if ($scope.tip == 1) $scope.result = MathService.mod(parseInt($scope.sayi2), parseInt($scope.sayi1));
            if ($scope.tip == 2) $scope.result = MathService.mod(parseInt($scope.sayi1), parseInt($scope.sayi2));
        }
    }

    $scope.temizle = function () {
        $scope.result = "";
        $scope.sayi1="";
        $scope.sayi2="";
    }

    $scope.esittir = function () {
       $scope.islem($scope.islemturu);
        $scope.islemturu = 0; // bittikten sonra iþlem yapma
    }

    $scope.kontrol = function () {
        if ($scope.sayi1 == "") $scope.sayi1 = "0";
        if ($scope.sayi2 == "") $scope.sayi2 = "0";
    }

    $scope.kontrolx = function () {
        if ($scope.sayi1 == "") $scope.sayi1 = "1";
        if ($scope.sayi2 == "") $scope.sayi2 = "1";
    }

    $scope.deger = function (value) {
        if ($scope.tip == 1) {
              $scope.sayi1 = $scope.sayi1 + "" + value;
              $scope.countIslemClick = 0;
            }
        else {
              $scope.sayi2 = $scope.sayi2 + "" + value;
              $scope.countIslemClick = 0;
             }
    }

    //islem kontrol  
    $scope.countIslemClick = 0;

    $scope.islem = function (tur)
    {
        $scope.islemturu = tur;
        $scope.countIslemClick = $scope.countIslemClick + 1;
        if (tur == 1) {
                       $scope.toplam();
                       $scope.tip == 1 ? $scope.sayi1 = $scope.result : $scope.sayi2 = $scope.result;
                       $scope.tip == 1 ? $scope.sayi2 ="" : $scope.sayi1 = "";
                       if ($scope.countIslemClick == 1) $scope.tip == 1 ? $scope.tip = 2 : $scope.tip = 1;
                      }
        if (tur == 2) {
                        $scope.cikarma();
                        if ($scope.sayi1 != "" && $scope.sayi2 != "") {
                            $scope.tip == 1 ? $scope.sayi1 = $scope.result : $scope.sayi2 = $scope.result;
                            $scope.tip == 1 ? $scope.sayi2 = "" : $scope.sayi1 = "";
                            if ($scope.countIslemClick == 1) $scope.tip == 1 ? $scope.tip = 2 : $scope.tip = 1;
                        }
                        else { if ($scope.countIslemClick == 1) $scope.tip == 1 ? $scope.tip = 2 : $scope.tip = 1; }
                      }
        if (tur == 3) {
                        $scope.carpma();
                        $scope.tip == 1 ? $scope.sayi1 = $scope.result : $scope.sayi2 = $scope.result;
                        $scope.tip == 1 ? $scope.sayi2 = "" : $scope.sayi1 = "";
                        if ($scope.countIslemClick == 1)  $scope.tip == 1 ? $scope.tip = 2 : $scope.tip = 1;
                      }
        if (tur == 4) {
                        $scope.bolme();
                        if ($scope.sayi1 != "" && $scope.sayi2 != "") {
                            $scope.tip == 1 ? $scope.sayi1 = $scope.result : $scope.sayi2 = $scope.result;
                            $scope.tip == 1 ? $scope.sayi2 = "" : $scope.sayi1 = "";
                            if ($scope.countIslemClick == 1) $scope.tip == 1 ? $scope.tip = 2 : $scope.tip = 1;
                        }
                        else { if ($scope.countIslemClick == 1) $scope.tip == 1 ? $scope.tip = 2 : $scope.tip = 1; }
                      }
        if (tur == 5) {
                          $scope.mod();
                          if ($scope.sayi1 != "" && $scope.sayi2 != "") {
                                $scope.tip == 1 ? $scope.sayi1 = $scope.result : $scope.sayi2 = $scope.result;
                                $scope.tip == 1 ? $scope.sayi2 = "" : $scope.sayi1 = "";
                                if ($scope.countIslemClick == 1) $scope.tip == 1 ? $scope.tip = 2 : $scope.tip = 1;
                            }
                          else { if ($scope.countIslemClick == 1) $scope.tip == 1 ? $scope.tip = 2 : $scope.tip = 1; }
                      }
    }



});



mainApp.factory('MathService', function () {
    var result = {};
    result.addition = function (a, b) {
        
        return a + b
    }
    result.divition = function (a, b)
    {
        return a / b;
    }
    result.multiplication = function (a, b)
    {
        return a * b;
    }
    result.subraction= function(a,b)
    {
        return a - b;
    }
    result.mod = function (a, b)
    {
        return a % b;
    }
    return result;
});


mainApp.service('KeyPressService', function () {
    var test = {};

    test.kontrol = function (keycode)
    {
        if (keycode == 96 || keycode == 48) return 0;
        if (keycode == 97 || keycode == 49) return 1;
        if (keycode == 98 || keycode == 50) return 2;
        if (keycode == 99 || keycode == 51) return 3;
        if (keycode == 100 || keycode == 52) return 4;
        if (keycode == 101 || keycode == 53) return 5;
        if (keycode == 102 || keycode == 54) return 6;
        if (keycode == 103 || keycode == 55) return 7;
        if (keycode == 104 || keycode == 56) return 8;
        if (keycode == 105 || keycode == 57) return 9;
    }
    return test;
})
