function NotasController(ActivitiesService, GroupsService, EvaluationsService, $stateParams) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.activity = {};
  vm.group    = {};
  vm.grades   = [];
  vm.evaluations = [];

  vm.id = window.localStorage['id'];
  vm.groupId = parseInt($stateParams.group);
  vm.activityId = parseInt($stateParams.activity);

  vm.getGroup = (id) => GroupsService.getGroupById(
      id,
      group => vm.group = group,
      error => console.log(error)
  )

  vm.getActivity = (id) => ActivitiesService.getActivityById(
      id,
      activity => {
        vm.activity = activity;
        console.log(vm.activity);
      },
      error => console.log(error)
  )

  vm.getGrades = (groupId, activityId) =>
  EvaluationsService.getEvaluacionesByGroupAndActivity
  (
    groupId,
    activityId,
    grades => {
      vm.grades = grades.notas;

      //set average score
      for (let i = 0; i < vm.students.length; ++i){
          vm.students[i].score = 0;
          vm.students[i].average = 0;
          vm.students[i].evaluations = 0;

          for (var j = 0; j < vm.grades.length; ++j) {
            if(vm.students[i].id == vm.grades[j].evaluado){
              vm.students[i].score += vm.grades[j].nota;
              vm.students[i].evaluations++;
            }
          }
          if(vm.students[i].evaluations > 0)
            vm.students[i].average = vm.students[i].score/vm.students[i].evaluations;
          console.log(vm.students[i].nombre, vm.students[i].average)
      }

    },
    error => console.log(error)
  );

  vm.getGroupUsers = () => GroupsService.getGroupUsersById(
        vm.groupId,
	  		students => {
          vm.students = students;
          console.log('Group id', vm.groupId);
          console.log('Activity id', vm.activityId);
          vm.getGrades(vm.groupId, vm.activityId);
        },
	  		error => console.log(error)
	);

  vm.getGroup(vm.groupId);
  vm.getActivity(vm.activityId);
  vm.getGroupUsers();
}

export default {
  name: 'NotasController',
  fn: NotasController
};
