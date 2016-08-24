function AdminCtrl(UsersService, $state, RolesService) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.users = [];
  vm.nombre = '';
  


  vm.getUsers = () => UsersService.getUsers(
        data => {
          vm.users = data.usuario;
          console.log(data);
        },
        error => console.log(error)
  );

  vm.deleteUser = (id) => UsersService.deleteUser(
      id,
      () => vm.getUsers(),
      error    => console.log(error)
  );

  vm.handleDeleteUser = ($event) => {
    let userId = $event.currentTarget.attributes['data-user-id'].value;
    vm.deleteUser(userId);
    console.log('Borro: ');
    console.log(userId);
  };

  vm.addRoleToUser = (usuarioId, rolId) => RolesService.addRoleToUser
  (
      usuarioId,
      rolId,      
      response => vm.getUsers(),
      error    => console.log(error)

  );

  vm.postUser = (nombre) => UsersService.postUser(
      {
        id: 0,
        nombre: nombre
      },
      (response) => {
        vm.addRoleToUser( response.id, 2);
      },
      error    => console.log(error)
  );

  vm.handlePostUser = () => {
    if(vm.nombre.length > 0)
      vm.postUser(vm.nombre);
  };


  vm.getUsers();
}
  export default {
    name: 'AdminCtrl',
    fn: AdminCtrl
  };
