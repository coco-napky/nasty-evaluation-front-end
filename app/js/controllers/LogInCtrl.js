function LogInCtrl(UsersService, $state) {
  'ngInject'

  // ViewModel
  const vm      = this;
  vm.password   = '';
  vm.email      = '';
  vm.user       = {};

  vm.login = (email, password) =>
    UsersService.login(
      email,
      password,
      () => $state.go('Home'),
      (error) => console.log(error)
  )

  vm.onClickHandler = () => vm.login(vm.email,vm.password)
  window.localStorage.clear();

}

  export default {
    name: 'LogInCtrl',
    fn: LogInCtrl
  };
