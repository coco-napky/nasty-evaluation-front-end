function ActivityCtrl(ActivitiesService) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.activities = [];

  console.log(vm.activities);

  vm.getActivities = () => ActivitiesService.getActivities(
	  		data => {
          vm.activities = data.usuarios; 
          console.log(data);
        },
	  		error => console.log(error)
	);

  vm.postActivity = () => ActivitiesService.putActivity(
      response => console.log(response),
      error    => console.log(error)
  );

  vm.deleteActivity = (id) => ActivitiesService.deleteActivity(
      id,
      error    => console.log(error)
  );

  vm.handleDeleteActivity = ($event) => { 
    let activityId = $event.currentTarget.attributes['data-activity-id'].value;
    vm.deleteActivity(activityId);
  };

  vm.getActivities();
}


export default {
  name: 'ActivityCtrl',
  fn: ActivityCtrl
};
