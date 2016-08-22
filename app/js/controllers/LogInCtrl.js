function LogInCtrl(UsersService, $rootScope, $state) {
  'ngInject'

  // ViewModel
  const vm = this;
  vm.password = '';
  vm.users = [];
  vm.activeUser = '';
  vm.email = '';
  console.log($rootScope);
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
         $rootScope.session = vm.users[i];
          window.localStorage['id'] = vm.users[i].id;
          window.localStorage['name'] = vm.users[i].name;

          if(vm.users[i].roles[0])
            window.localStorage['role'] = vm.users[i].roles[0].id;
       $state.go('Home');
      }
    }
  };

  if($rootScope.session)
        $state.go('Home');
  vm.getUsers();
}

  export default {
    name: 'LogInCtrl',
    fn: LogInCtrl
  };
