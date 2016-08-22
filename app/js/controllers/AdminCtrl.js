function AdminCtrl(UsersService) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.users = [];

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

vm.getUsers();

}


  export default {
    name: 'AdminCtrl',
    fn: AdminCtrl
  };
