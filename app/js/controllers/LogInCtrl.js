function LogInCtrl(UsersService, $state) {
  'ngInject'

  // ViewModel
  const vm = this;
  vm.password = '';
  vm.users = [];
  vm.activeUser = '';
  vm.email = '';

  vm.getUsers = () => {

    UsersService.getUsers(
      data  => {vm.users = data.usuario; console.log(data)},
      error => console.log(error)
      );
  };

  vm.onClickHandler = () =>
  {
    for (let i = 0; i < vm.users.length; ++i) {
      if(vm.users[i].contrasena == vm.password &&
         vm.users[i].correo == vm.email){
          window.localStorage['id'] = vm.users[i].id;
          window.localStorage['name'] = vm.users[i].name;

          if(vm.users[i].roles[0])
            window.localStorage['role'] = vm.users[i].roles[0].id;
       $state.go('Home');
      }
    }
  };

  window.localStorage['id'] = null;
  window.localStorage['name'] = null;
  window.localStorage['role'] = null;

  vm.getUsers();
}

  export default {
    name: 'LogInCtrl',
    fn: LogInCtrl
  };
