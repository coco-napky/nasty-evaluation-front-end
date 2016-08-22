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

  let role = window.localStorage['role'];

  if(!role)
    $state.go('Login');
    else if(role == 1)
    $state.go('administrador');
  else if(role == 2)
    $state.go('IndexGrupos');
  else if(role == 3)
    $state.go('IndexActividades');
  else
    $state.go('Login');
}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
