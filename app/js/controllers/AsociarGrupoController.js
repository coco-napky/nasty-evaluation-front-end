function AsociarGrupoController(GroupsService, ActivitiesService) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.groups = [];
  vm.activities  = [];
  vm.getGroups = () => GroupsService.getGroups(
        data => {
          vm.groups = data.grupo;
          console.log(vm.groups);
        },
        error => console.log(error)
  );

  vm.getActivities = () => ActivitiesService.getActivities(
        data => {
        	vm.activities = data.usuarios;
   			console.log(vm.activities);
    		},
        error => console.log(error)
  );

  vm.addGroupToActivity = (activityId, groupId) => ActivitiesService.addGroupToActivity(
      activityId,
      groupId,
      response => console.log(response),
      error    => console.log(error)

  );


 vm.submitHandler = () => { 
	  console.log('Variables ?');
	  console.log(vm.activityId);
	  console.log(vm.groupId);

 	vm.addGroupToActivity(vm.activityId, vm.groupId);

 }
 	

  vm.getGroups();
  vm.getActivities();
}


export default {
  name: 'AsociarGrupoController',
  fn: AsociarGrupoController
};

