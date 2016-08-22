function AsociarAlumnoController(GroupsService, UsersService) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.groups = [];
  vm.users  = [];
  vm.getGroups = () => GroupsService.getGroups(
        data => {
          vm.groups = data.grupo;
          console.log(vm.groups);
        },
        error => console.log(error)
  );

  vm.getUsers = () => UsersService.getUsers(
        data => {
          vm.users = data.usuario;
          console.log(vm.users);
        },
        error => console.log(error)
  );

  vm.submitHandler = () => {
    console.log('checkpoint');
  }

  vm.getGroups();
  vm.getUsers();
}



export default {
  name: 'AsociarAlumnoController',
  fn: AsociarAlumnoController
};
