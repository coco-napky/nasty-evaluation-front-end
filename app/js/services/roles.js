function RolesService($http) {
  'ngInject';

  const service = {};

  const baseUrl    = 'http://localhost:3000/api/roles',
        userRoleUrl = 'http://localhost:3000/api/usuario-has-roles';

  service.getRoles = (onSuccess, onError) =>
      $http.get(`${baseUrl}`)
      .success(onSuccess)
      .error(onError);

  service.getRoleById = (id, onSuccess, onError) =>
      $http.get(`${baseUrl}/${id}`)
      .success(onSuccess)
      .error(onError);

  //data : {id: 0, name:"bar"}
  service.postRole = (data, onSuccess, onError) =>
      $http.post(baseUrl,data)
      .success(onSuccess)
      .error(onError);

  //data : {id: 0, name:"bar"}
  service.putRole = (data, onSuccess, onError) =>
      $http.put(baseUrl,data)
      .success(onSuccess)
      .error(onError);

  service.deleteRole = (id, onSuccess, onError) =>
      $http.delete(`${baseUrl}/${id}`)
      .success(onSuccess)
      .error(onError);

  service.addRoleToUser = (usuarioId, rolId, onSuccess, onError) =>
      $http.post(`${userRoleUrl}`, { usuarioId, rolId })
      .success(onSuccess)
      .error(onError);

  return service;
}

export default {
  name: 'RolesService',
  fn: RolesService
};
