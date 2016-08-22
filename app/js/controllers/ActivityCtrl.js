function ActivityCtrl(ActivitiesService) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.activities = [];

  vm.getActivities = () => ActivitiesService.getActivities(
  		data => {
        vm.activities = data.usuarios;
        console.log(data);
      },
  		error => console.log(error)
	);

  vm.deleteActivity = (id) => ActivitiesService.deleteActivity(
      id,
      ()     => vm.getActivities(),
      error  => console.log(error)
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
