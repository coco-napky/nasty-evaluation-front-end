function UsersService($http) {
  'ngInject';

  const service = {};
  const baseUrl = 'http://localhost:3000/api/usuarios';

  service.getUsers = (onSuccess, onError) =>
      $http.get(baseUrl)
      .success(onSuccess)
      .error(onError);

  service.getUserById = (id, onSuccess, onError) =>
      $http.get(`${baseUrl}/${id}`)
      .success(onSuccess)
      .error(onError);

  service.postUser = (data, onSuccess, onError) =>
      $http.post(baseUrl,data)
      .success(onSuccess)
      .error(onError);

  service.putUser = (data, onSuccess, onError) =>
      $http.put(baseUrl,data)
      .success(onSuccess)
      .error(onError);

  service.deleteUser = (id, onSuccess, onError) =>
      $http.delete(`${baseUrl}/${id}`)
      .success(onSuccess)
      .error(onError);

  return service;
}

export default {
  name: 'UsersService',
  fn: UsersService
};
