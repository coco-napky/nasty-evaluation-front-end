function EvaluarController(UsersService, GroupsService, EvaluationsService, $stateParams) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.group  = {};
  vm.grades = [];
  vm.evaluations = [];

  vm.id = window.localStorage['id'];
  vm.groupId = $stateParams.group;
  vm.activityId = $stateParams.activity;

  vm.putGrade = (evaluator, evaluated, activity, group, grade, refresh) =>
  EvaluationsService.putEvaluation(
    {
      'id': 0,
      'evaluador': evaluator,
      'evaluado': evaluated,
      'nota': grade,
      'actividadId': activity,
      'grupoId': group
    },
      () => {
        if(refresh)
          vm.getGroupUsers();
      },
      error => console.log(error)
  );

  vm.getGroup = (id) => GroupsService.getGroupById(
      id,
      group => vm.group = group,
      error => console.log(error)
  )

  vm.getGrades = (evaluatedId, groupId, activityId) =>
  EvaluationsService.getEvaluationsByEvaluator
  (
    evaluatedId,
    groupId,
    activityId,
    grades => {
      vm.grades = grades.notas;
      vm.students = vm.students.filter( (student) => {
          for (let i = 0; i < vm.grades.length; ++i)
              if( vm.grades[i].evaluado == student.id )
                return false;
          return true;
      });

      for (let i = 0; i < vm.students.length; ++i)
          vm.evaluations[i] = 5;
    },
    error => console.log(error)
  );

  vm.getGroupUsers = () => GroupsService.getGroupUsersById(
        vm.groupId,
	  		students => {
          vm.students = students;
          vm.getGrades(vm.id, vm.groupId, vm.activityId);
        },
	  		error => console.log(error)
	);

  vm.submitHandler = () => {
    for (var i = 0; i < vm.students.length; ++i)
      vm.putGrade(vm.id, vm.students[i].id, vm.activityId,
        vm.groupId, vm.evaluations[i], i == vm.students.length - 1);
  };
  vm.getGroup(vm.groupId);
  vm.getGroupUsers();
}

export default {
  name: 'EvaluarController',
  fn: EvaluarController
};
