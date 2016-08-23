function AlumnoController(UsersService,GroupsService, $state) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.groups = [];

  vm.getGroups = () => UsersService.getUserActivitiesById(
        window.localStorage['role'],
	  		data => {
          vm.groups = data.actividades;
          console.log('Alumno Groups :', data);
        },
	  		error => console.log(error)
	);

  vm.deleteGroup = (id) => GroupsService.deleteGroup(
      id,
      () => vm.getGroups(),
      error    => console.log(error)
  );

  vm.handleDeleteGroup = ($event) => {
    let groupId = $event.currentTarget.attributes['data-group-id'].value;
    vm.deleteGroup(groupId);
  };

  vm.getGroups();

  let role = window.localStorage['role'];
    if(!role || role != 3 )
      $state.go('Home');
}



export default {
  name: 'AlumnoController',
  fn: AlumnoController
};
