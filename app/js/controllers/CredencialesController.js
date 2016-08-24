function CredencialesController(UsersService, $state) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.password = '';
  vm.user     = '';
  vm.email    = '';

  vm.putUser = () => {

      UsersService.putUser(
      {
        id:  window.localStorage['id'],
        nombre: vm.user,
        correo: vm.email,
        contrasena: vm.password,
        activo: true
      },
        usuario =>  console.log(usuario),
        error    => console.log(error)
      );


  };

  vm.onClickHandler = () => {
    if(vm.password.length > 0 && vm.user.length > 0 && vm.email.length > 0){
      vm.putUser();
    }
    else
      console.log('fail')
  };

  if(!window.localStorage['role']){
    console.log('Role not set');
    $state.go('Login')
  }
}

  export default {
    name: 'CredencialesController',
    fn: CredencialesController
  };
