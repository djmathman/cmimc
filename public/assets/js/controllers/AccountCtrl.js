app.controller('AccountCtrl', [
  '$scope',
  '$state',
  '$http',
  'auth',
  'account',
  function($scope, $state, $http, auth, account) {
    $scope.new_team = {"members" : [{
      "subjects" : {},
      "tshirt" : "M"
    }]}
    $scope.teams_original = [
      {
        "id" : 1,
        "name" : "The Sexy Primes",
        "chaperone_name" : "Cody Johnson",
        "chaperone_email" : "ctj@math.cmu.edu",
        "chaperone_number" : "(561) 676-5696",
        "paid" : "Paid",
        "members" : [
          {
            "name" : "Elizabeth Cao",
            "age" : 17,
            "subjects" : ["Algebra", "Combinatorics"],
            "tshirt" : "M",
            "email" : "idk@idk.com"
          },
          {
            "name" : "Rithvik Pasumarty",
            "age" : 17,
            "subjects" : ["Computer Science", "Combinatorics"],
            "tshirt" : "XXL",
            "email" : "idk@idk.com"
          },
          {
            "name" : "Weihua Zhu (Aiden)",
            "age" : 17,
            "subjects" : ["Algebra", "Combinatorics"],
            "tshirt" : "S",
            "email" : "idk@idk.com"
          },
          {
            "name" : "Xuyang Li (Irio)",
            "age" : 17,
            "subjects" : ["Algebra", "Combinatorics"],
            "tshirt" : "S",
            "email" : "idk@idk.com"
          },
          {
            "name" : "Zihao Li (Chris)",
            "age" : 18,
            "subjects" : ["Algebra", "Combinatorics"],
            "tshirt" : "L",
            "email" : "idk@idk.com"
          }
        ]
      },
      {
        "id" : 2,
        "name" : "The Ugly Primes",
        "chaperone_name" : "Cody Johnson",
        "chaperone_email" : "ctj@math.cmu.edu",
        "chaperone_number" : "(561) 676-5696",
        "paid" : "Paid",
        "members" : [
          {
            "name" : "Elizabeth Cao",
            "age" : 17,
            "subjects" : ["Algebra", "Combinatorics"],
            "tshirt" : "M",
            "email" : "idk@idk.com"
          },
          {
            "name" : "Rithvik Pasumarty",
            "age" : 17,
            "subjects" : ["Algebra", "Combinatorics"],
            "tshirt" : "XXL",
            "email" : "idk@idk.com"
          },
          {
            "name" : "Weihua Zhu (Aiden)",
            "age" : 17,
            "subjects" : ["Algebra", "Combinatorics"],
            "tshirt" : "S",
            "email" : "idk@idk.com"
          },
          {
            "name" : "Xuyang Li (Irio)",
            "age" : 17,
            "subjects" : ["Algebra", "Combinatorics"],
            "tshirt" : "S",
            "email" : "idk@idk.com"
          },
          {
            "name" : "Zihao Li (Chris)",
            "age" : 18,
            "subjects" : ["Algebra", "Combinatorics"],
            "tshirt" : "L",
            "email" : "idk@idk.com"
          }
        ]
      }
    ]
    $scope.teams = JSON.parse(JSON.stringify($scope.teams_original))
    $scope.addMember = function(i) {
      if (i == -1)
        $scope.new_team.members.push({
          "subjects" : {},
          "tshirt" : "M"
        })
      else
        $scope.teams[i].members.push({
          "subjects" : {},
          "tshirt" : "M"
        })
    }
    $scope.removeMember = function(i, j) {
      if (i == -1) {
        $scope.new_team.members.splice(j, 1)
        if ($scope.new_team.members.length == 0)
          $scope.addMember(-1)
      } else {
        $scope.teams[i].members.splice(j, 1)
        if ($scope.teams[i].members.length == 0)
          $scope.addMember(i)
      }
    }

    $scope.$on('refreshMaterialize', function() {
      $('select').material_select()
      Materialize.updateTextFields()
      $('.modal').modal({
          complete: function() {
            $state.reload()
          }
        }
      )
    })

    $scope.addTeam = function() {
      account.addTeam($scope.new_team)
    }
}])
