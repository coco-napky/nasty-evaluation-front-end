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

  vm.addUserToGroup = (userId, groupId) => GroupsService.addUserToGroup(
      userId,
      groupId,
      response => console.log(response),
      error    => console.log(error)

  );

  vm.submitHandler = () => vm.addUserToGroup(vm.userId, vm.groupId);

  vm.getGroups();
  vm.getUsers();
}



export default {
  name: 'AsociarAlumnoController',
  fn: AsociarAlumnoController
};
