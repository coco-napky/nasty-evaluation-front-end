function UsersService($http) {
  'ngInject';

  const service = {};
  const baseUrl = 'http://localhost:3000/api/usuarios';


  service.setSession = user => {
    console.log(user);
    window.localStorage['token'] = user.id;
    window.localStorage['id']    = user.userId;
    window.localStorage['name']  = user.name;
    window.localStorage['email'] = user.email;
    window.localStorage['role']  = user.role;
  }

  service.getSession = () => {
    let token = window.localStorage['token'],
        id    = window.localStorage['id'],
        name  = window.localStorage['name'],
        email = window.localStorage['email'],
        role  = window.localStorage['role'];

    return { token, id, name, email, role };
  }

  service.getUsers = (onSuccess, onError) =>
      $http.get(`${baseUrl}/0/getUsuarios-Roles`)
      .success(onSuccess)
      .error(onError);

  service.getUserById = (id, onSuccess, onError) =>
      $http.get(`${baseUrl}/${id}/getUsuario-Rol`)
      .success(onSuccess)
      .error(onError);

  service.getGrupos = (id, onSuccess, onError) =>
      $http.get(`${baseUrl}/getGruposActividades?UsuarioId=${id}`)
      .success(onSuccess)
      .error(onError);

   // data : { "id": 0, "nombre": "string",
  // "correo": "string", "contrasena": "string", "activo": 1 }
  service.postUser = (data, onSuccess, onError) =>
      $http.post(baseUrl,data)
      .success(onSuccess)
      .error(onError);

   // data : { "id": 0, "nombre": "string",
  // "correo": "string", "contrasena": "string", "activo": 1 }
  service.putUser = (data, onSuccess, onError) =>
      $http.put(baseUrl,data)
      .success(onSuccess)
      .error(onError);

  service.deleteUser = (id, onSuccess, onError) =>
      $http.delete(`${baseUrl}/${id}`)
      .success(onSuccess)
      .error(onError);

  service.login = (email, password, onSuccess, onError) =>
    $http.post(`${baseUrl}/login`, { email, password })
    .success( (response) => {

      let id     = response.id,
          userId = response.userId;

      window.localStorage['token'] = id;
      service.getUserById(
        userId,
        getUserreponse => {

          let name  = getUserreponse.usuario.nombre,
              email = getUserreponse.usuario.email,
              role  = getUserreponse.usuario.roles[0].id;

          service.setSession({id, userId, name, email, role});
          onSuccess(getUserreponse);
        },
        onError
      )
    })
    .error(onError);

  return service;
}

export default {
  name: 'UsersService',
  fn: UsersService
};
