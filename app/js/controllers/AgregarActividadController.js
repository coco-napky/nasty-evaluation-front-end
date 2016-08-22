function AgregarActividadController(ActivitiesService) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.activities = [];
  vm.nombre = '';

  vm.getActivities = () => ActivitiesService.getActivities(
	  		data => {
          vm.activities = data.usuarios;
          console.log(vm.activities);
        },
	  		error => console.log(error)
	);

  vm.postActivity = (nombre) => ActivitiesService.postActivity(
      {
        id: 0,
        nombre: nombre
      },
      () => vm.getActivities(),
      error    => console.log(error)
  );

  vm.handlePostActivity = () => {
    if(vm.nombre.length > 0)
      vm.postActivity(vm.nombre);
  };

  vm.getActivities();
}



export default {
  name: 'AgregarActividadController',
  fn: AgregarActividadController
};
