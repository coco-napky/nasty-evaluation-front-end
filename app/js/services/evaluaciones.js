function EvaluationsService($http) {
  'ngInject';

  const service = {};

  const baseUrl      = 'http://localhost:3000/api/evaluaciones';

  service.getEvaluaciones = (onSuccess, onError) =>
      $http.get(`${baseUrl}`)
      .success(onSuccess)
      .error(onError);

  service.getEvaluacionesByGroupAndActivity = (groupId, activityId,onSuccess, onError) =>
      $http.get(`${baseUrl}/getNotasGrupo-Actividad?ActividadId=${activityId}&GrupoId=${groupId}`)
      .success(onSuccess)
      .error(onError);

  service.getEvaluationsByEvaluator = (evaluadoId, grupoId, actividadId, onSuccess, onError) =>
      $http.get(`${baseUrl}/getEvaluados?ActividadId=${actividadId}&GrupoId=${grupoId}&EvaluadorId=${evaluadoId}`)
      .success(onSuccess)
      .error(onError);

  service.getEvaluationsByEvaluated = (evaluadorId, grupoId, actividadId, onSuccess, onError) =>
      $http.get(`${baseUrl}/getNotas?ActividadId=${actividadId}&GrupoId=${grupoId}&EvaluadoId=${evaluadorId}`)
      .success(onSuccess)
      .error(onError);

  //data : { "id": 0, "evaluador": 0, "evaluado": 0, "nota": 0, "actividadId": 0, "grupoId": 0 }
  service.postEvaluation = (data, onSuccess, onError) =>
      $http.post(baseUrl,data)
      .success(onSuccess)
      .error(onError);

  //data : { "id": 0, "evaluador": 0, "evaluado": 0, "nota": 0, "actividadId": 0, "grupoId": 0 }
  service.putEvaluation = (data, onSuccess, onError) =>
      $http.put(baseUrl,data)
      .success(onSuccess)
      .error(onError);

  return service;
}

export default {
  name: 'EvaluationsService',
  fn: EvaluationsService
};
