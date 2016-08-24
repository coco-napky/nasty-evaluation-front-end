function ActivityCtrl(ActivitiesService, $state) {
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

  vm.activityClickHandler = ($event) => {
    let groupId = $event.currentTarget.attributes['data-group-id'].value;
    let activityId = $event.currentTarget.attributes['data-activity-id'].value;
    $state.go('notas', {group: groupId, activity: activityId});
  };

  vm.getActivities();
}


export default {
  name: 'ActivityCtrl',
  fn: ActivityCtrl
};
