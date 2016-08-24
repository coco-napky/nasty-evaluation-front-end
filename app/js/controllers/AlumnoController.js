function AlumnoController(UsersService,GroupsService, $state) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.groups = [];

  vm.getGroups = () => UsersService.getGrupos(
        window.localStorage['role'],
	  		data => {
          vm.groups = data.actividades.grupos;
          console.log('Alumno Groups :', data);
          console.log('Alumno Groups :', vm.groups);
        },
	  		error => console.log(error)
	);

  vm.deleteGroup = (id) => GroupsService.deleteGroup(
      id,
      () => vm.getGroups(),
      error    => console.log(error)
  );

  vm.activityClickHandler = ($event) => {
    let groupId = $event.currentTarget.attributes['data-group-id'].value;
    let activityId = $event.currentTarget.attributes['data-activity-id'].value;
    $state.go('evaluar', {group: groupId, activity: activityId});

  };

  vm.getGroups();
}



export default {
  name: 'AlumnoController',
  fn: AlumnoController
};
