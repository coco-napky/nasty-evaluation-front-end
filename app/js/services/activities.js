function ActivitiesService($http) {
  'ngInject';

  const service = {};

  const baseUrl      = 'http://localhost:3000/api/actividades',
        userGroupUrl = 'http://localhost:3000/api/grupo-has-actividades';

  service.getActivities = (onSuccess, onError) =>
      $http.get(`${baseUrl}/0/getActividadesUsuarios`)
      .success(onSuccess)
      .error(onError);

  service.getActivityById = (id, onSuccess, onError) =>
      $http.get(`${baseUrl}/${id}`)
      .success(onSuccess)
      .error(onError);

  service.getActivityGroupsById = (id, onSuccess, onError) =>
      $http.get(`${baseUrl}/${id}/getUsuarios`)
      .success(onSuccess)
      .error(onError);

  //data : {id: 0, name:"bar"}
  service.postActivity = (data, onSuccess, onError) =>
      $http.post(baseUrl,data)
      .success(onSuccess)
      .error(onError);

  //data : {id: 0, name:"bar"}
  service.putActivity = (data, onSuccess, onError) =>
      $http.put(baseUrl,data)
      .success(onSuccess)
      .error(onError);

  service.deleteActivity = (id, onSuccess, onError) =>
      $http.delete(`${baseUrl}/${id}`)
      .success(onSuccess)
      .error(onError);

  service.addGroupToActivity = (actividadId, grupoId, onSuccess, onError) =>
      $http.post(`${userGroupUrl}`, { actividadId, grupoId })
      .success(onSuccess)
      .error(onError);

  return service;
}

export default {
  name: 'ActivitiesService',
  fn: ActivitiesService
};
