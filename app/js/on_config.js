'use strict';

let conditionalRoute = ($state) => {
  setTimeout( () => {
    let role = parseInt(window.localStorage['role']);
    let current = $state.current.name;
    if(!role)
      $state.go('Registrar');

    switch(current){
      case 'Home':
        switch(role){
          case 1: $state.go('administrador'); break;
          case 2: $state.go('indexActividades'); break;
          case 3: $state.go('alumno'); break;
          default: $state.go('login');; break;
        }
      break;

      case 'administrador':
        if(role != 1) $state.go('Home');
      break;

      case 'indexActividades':
      case 'indexGrupos':
      case 'asociarAlumno':
      case 'asociarGrupo':
      case 'CrearActividad':
      case 'CrearGrupo':
      case 'notas':
        if(role != 2) $state.go('Home');
      break;

      case 'alumno':
      case 'evaluar':
        if(role != 3) $state.go('Home');
      break;
    }
  },1);
}

function OnConfig($stateProvider, $locationProvider,
 $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('login', {
    url: '/login',
    controller: 'LogInCtrl as ctrl',
    templateUrl: 'login.html',
    title: 'Login'
  });

  $stateProvider
  .state('CrearActividad', {
    url: '/crear-actividad',
    controller: 'AgregarActividadController as ctrl',
    templateUrl: 'crear_actividad.html',
    title: 'CrearActividad',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('administrador', {
    url: '/admin',
    controller: 'AdminCtrl as ctrl',
    templateUrl: 'administrador.html',
    title: 'Administrador',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('CrearGrupo', {
    url: '/crear-grupo',
    controller: 'AgregarGrupoCtrl as ctrl',
    templateUrl: 'crear_grupo.html',
    title: 'CrearGrupo',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('EditarPerfil', {
    url: '/',
    controller: 'ExampleCtrl as ctrl',
    templateUrl: 'editar_perfil.html',
    title: 'EditarPerfil',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('Evaluacion', {
    url: '/',
    controller: 'ExampleCtrl as ctrl',
    templateUrl: 'evaluacion.html',
    title: 'Evaluacion',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('indexActividades', {
    url: '/activity',
    controller: 'ActivityCtrl as ctrl',
    templateUrl: 'index_actividades.html',
    title: 'IndexActividades',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('indexGrupos', {
    url: '/groups',
    controller: 'GroupCtrl as ctrl',
    templateUrl: 'index_grupos.html',
    title: 'Grupos',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('Registrar', {
    url: '/register',
    controller: 'RegisterCtrl as ctrl',
    templateUrl: 'registrar.html',
    title: 'Registrar',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('asociarAlumno', {
    url: '/asociar-alumno',
    controller: 'AsociarAlumnoController as ctrl',
    templateUrl: 'asociar_alumno.html',
    title: 'Asociar Alumno',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('asociarGrupo', {
    url: '/asociar-grupo',
    controller: 'AsociarGrupoController as ctrl',
    templateUrl: 'asociar_grupo.html',
    title: 'Asociar Grupo',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('Credenciales', {
    url: '/cambiar-credenciales',
    controller: 'CredencialesController as ctrl',
    templateUrl: 'cambiar_credenciales.html',
    title: 'Credenciales',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('alumno', {
    url: '/alumno',
    controller: 'AlumnoController as ctrl',
    templateUrl: 'index_alumno.html',
    title: 'Alumno',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('evaluar', {
    url: '/evaluar?group&activity',
    controller: 'EvaluarController as ctrl',
    templateUrl: 'evaluar.html',
    title: 'Evaluar',
    resolve: {conditionalRoute}
  });

  $stateProvider
  .state('notas', {
    url: '/notas?group&activity',
    controller: 'NotasController as ctrl',
    templateUrl: 'notas.html',
    title: 'Notas',
    resolve: {conditionalRoute}
  });

  $urlRouterProvider.otherwise('/');
}

export default OnConfig;
