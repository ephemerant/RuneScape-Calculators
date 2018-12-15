angular.module('app', []).controller('main', function ($scope) {
    var vm = $scope;

    // Store amount of points per master
    vm.masters = {
        'Turael or Spria': 0,
        'Mazchna or Achtryn': 2,
        'Vannaka': 4,
        'Chaeldar': 10,
        'Sumona': 12,
        'Duradel or Lapalok': 15,
        'Kuradal': 18,
        'Morvran': 20
    };

    // Was there any previous form data that can be loaded?
    loadData();

    // Calculate remaining tasks to reach slayer point target
    vm.calculate = function () {
        saveData();

        if (vm.master !== 'Turael or Spria') {
            var points = vm.points;
            var tasks = vm.tasks;

            while (points < vm.target)
                points += getPoints(++tasks);

            vm.tasksNeeded = tasks - vm.tasks;
        }
        else
            vm.tasksNeeded = -1;
    };

    // Get points rewarded for a given task streak
    function getPoints(tasks) {
        var points;

        if (tasks % 50 === 0)
            points = 15 * vm.masters[vm.master];

        else if (tasks % 10 === 0)
            points = 5 * vm.masters[vm.master] + (vm.master === 'Duradel or Lapalok' && vm.eliteKaramja ? 5 : 0);

        else
            points = vm.masters[vm.master];

        return vm.smokingKills ? points : Math.floor(points / 2);
    }

    // Save form fields to localStorage
    function saveData() {
        localStorage.slayerPointsCalc = JSON.stringify({
            points: vm.points,
            target: vm.target,
            tasks: vm.tasks,
            master: vm.master,
            smokingKills: vm.smokingKills,
            eliteKaramja: vm.eliteKaramja
        });
    }

    // Load form fields from localStorage
    function loadData() {
        if (localStorage.slayerPointsCalc) {
            var data = JSON.parse(localStorage.slayerPointsCalc);

            vm.points = data.points;
            vm.target = data.target;
            vm.tasks = data.tasks;
            vm.master = data.master;
            vm.smokingKills = data.smokingKills;
            vm.eliteKaramja = data.eliteKaramja;
        }
    }
});