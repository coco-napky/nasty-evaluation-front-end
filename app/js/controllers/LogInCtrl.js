function LogInCtrl(UsersService) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.password = '';
  vm.user = [];
  vm.activeUser = '';
  vm.email = '';

  vm.getUsers = () => {
    
    UsersService.getUsers(
      data => {
        vm.user=data.users;
        console.log(data);

        for (var i = 0; i < data.usuario.length; i++) {
           console.log(data.usuario[i].correo);
            if(email == data.usuario[i].correo){
              console.log('Es igual');
            }
        }
           
      },
      
      error    => console.log(error)
      );
  };

  vm.onClickHandler = () =>
  {
      vm.getUsers();  
  };

}

  export default {
    name: 'LogInCtrl',
    fn: LogInCtrl
  };
