function RegisterCtrl(UsersService, RolesService, $state) {
  'ngInject'

  // ViewModel
  const vm    = this;
  vm.password = '';
  vm.user     = '';
  vm.email    = '';

  vm.postUsers = () => {

      UsersService.postUser(
      {
        id: 0,
        nombre: vm.user,
        email: vm.email,
        password: vm.password,
        activo: true
      },
        usuario => {
          vm.addRoleToUser(
            usuario.id,
            3
          );
        },
        error    => console.log(error)
      );
  };

  vm.onClickHandler = () => {
    if(vm.password.length > 0 && vm.user.length > 0 && vm.email.length > 0)
      vm.postUsers();
    else
      console.log('Algun Dato Vacillo');
  };

  vm.addRoleToUser = (userId, roleId) =>  RolesService.addRoleToUser
  (
    userId,
    roleId,
    ()    => $state.go('login'),
    error => console.log(error)
  );

}

export default {
    name: 'RegisterCtrl',
    fn: RegisterCtrl
};
