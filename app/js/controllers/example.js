function ExampleCtrl(UsersService) {
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
}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
