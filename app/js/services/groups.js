function GroupsService($http) {
  'ngInject';

  const service = {};

  const baseUrl      = 'http://localhost:3000/api/grupos',
        userGroupUrl = 'http://localhost:3000/api/UsuarioHasGrupos';

  service.getGroups = (onSuccess, onError) =>
      $http.get(`${baseUrl}/0/getGrupos-Usuarios`)
      .success(onSuccess)
      .error(onError);

  service.getGroupUsersById = (id, onSuccess, onError) =>
      $http.get(`${baseUrl}/${id}/usuarios`)
      .success(onSuccess)
      .error(onError);

  //data : {id: 0, name:"bar"}
  service.postGroup = (data, onSuccess, onError) =>
      $http.post(baseUrl,data)
      .success(onSuccess)
      .error(onError);

  //data : {id: 0, name:"bar"}
  service.putGroup = (data, onSuccess, onError) =>
      $http.put(baseUrl,data)
      .success(onSuccess)
      .error(onError);

  service.deleteGroup = (id, onSuccess, onError) =>
      $http.delete(`${baseUrl}/${id}`)
      .success(onSuccess)
      .error(onError);

  service.addUserToGroup = (usuarioId, grupoId, onSuccess, onError) =>
      $http.post(`${userGroupUrl}`, { usuarioId, grupoId })
      .success(onSuccess)
      .error(onError);

  return service;
}

export default {
  name: 'GroupsService',
  fn: GroupsService
};
