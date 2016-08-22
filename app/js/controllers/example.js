function ExampleCtrl(UsersService, $rootScope, $state) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.users = [];

  vm.getUsers = () => UsersService.getUsers(
	  		users => vm.users = users,
	  		error => console.log(error)
	);

  vm.postUsers = () => UsersService.putUser(
      {
        id: vm.userId,
        nombre: vm.username,
        correo: vm.userEmail,
        contrasena: vm.userPassword,
        activo: true
      },
      response => console.log(response),
      error    => console.log(error)
  );

  if(!$rootScope.session)
    $state.go('Login');
    else if($rootScope.session.roles[0].id == 1)
    $state.go('IndexGrupos');
  else if($rootScope.session.roles[0].id == 2)
    $state.go('IndexGrupos');
  else if($rootScope.session.roles[0].id == 3)
    $state.go('IndexActividades');
  else
    $state.go('Login');
}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
