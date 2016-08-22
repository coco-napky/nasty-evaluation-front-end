function GroupCtrl(GroupsService) {
  'ngInject'

  // ViewModel
  const vm = this;

  vm.groups = [];

  vm.getGroups = () => GroupsService.getGroups(
	  		data => {
          vm.groups = data.grupo;
          console.log(vm.groups);
        },
	  		error => console.log(error)
	);

  vm.deleteGroup = (id) => GroupsService.deleteGroup(
      id,
      () => vm.getGroups(),
      error    => console.log(error)
  );

  vm.handleDeleteGroup = ($event) => {
    let groupId = $event.currentTarget.attributes['data-group-id'].value;
    vm.deleteGroup(groupId);
  };

  vm.getGroups();
}



export default {
  name: 'GroupCtrl',
  fn: GroupCtrl
};
