function AlumnoController(UsersService,GroupsService, $state) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.groups = [];

  vm.getGroups = () => UsersService.getGrupos(
        window.localStorage['role'],
	  		data => {
          vm.groups = data.grupos;
          console.log('Alumno Groups :', vm.groups);
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
  console.log('Role ',role);
}



export default {
  name: 'AlumnoController',
  fn: AlumnoController
};
