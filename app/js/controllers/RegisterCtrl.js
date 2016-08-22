function RegisterCtrl(UsersService, RolesService) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.password = '';
  vm.user = '';
  vm.email = '';

  vm.postUsers = () => {
    
      UsersService.putUser(
      {
        id: 0,
        nombre: vm.user,
        correo: vm.email,
        contrasena: vm.password,
        activo: true
      },
      usuario => vm.addRoleToUser(usuario.id, 3),
      error    => console.log(error)
      );

      console.log(vm.user);
      console.log(vm.email);
      console.log(vm.password);
  };

  vm.onClickHandler = () => {
    if(vm.password.length > 0 && vm.user.length > 0 && vm.email.length > 0)
    {
      vm.postUsers();
    }else{
      console.log('Algun Dato Vacillo');
    }
  };

  vm.addRoleToUser = (userId, roleId) => {

    RolesService.addRoleToUser(
        userId, 
        roleId, 
        response => console.log(response),
        error => console.log(error)
      );

  };

        

}

  export default {
    name: 'RegisterCtrl',
    fn: RegisterCtrl
  };
