function AgregarGrupoCtrl(GroupsService) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.groups = [];
  vm.nombre = '';
  vm.getGroups = () => GroupsService.getGroups(
	  		data => {
          vm.groups = data.grupo;
          console.log(vm.groups);
        },
	  		error => console.log(error)
	);

  vm.postGroup = (nombre) => GroupsService.postGroup(
      {
        id: 0,
        nombre: nombre
      },
      () => vm.getGroups(),
      error    => console.log(error)
  );

  vm.handlePostGroup = () => {
    if(vm.nombre.length > 0)
      vm.postGroup(vm.nombre);
  };
  vm.getGroups();
}



export default {
  name: 'AgregarGrupoCtrl',
  fn: AgregarGrupoCtrl
};
