
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
    title: 'Home'
  });

  $stateProvider
  .state('Login', {
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
    title: 'CrearActividad'
  });

  $stateProvider
  .state('administrador', {
    url: '/admin',
    controller: 'AdminCtrl as ctrl',
    templateUrl: 'administrador.html',
    title: 'Administrador'
  });

  $stateProvider
  .state('CrearGrupo', {
    url: '/crear-grupo',
    controller: 'AgregarGrupoCtrl as ctrl',
    templateUrl: 'crear_grupo.html',
    title: 'CrearGrupo'
  });

  $stateProvider
  .state('EditarPerfil', {
    url: '/',
    controller: 'ExampleCtrl as ctrl',
    templateUrl: 'editar_perfil.html',
    title: 'EditarPerfil'
  });

  $stateProvider
  .state('Evaluacion', {
    url: '/',
    controller: 'ExampleCtrl as ctrl',
    templateUrl: 'evaluacion.html',
    title: 'Evaluacion'
  });

  $stateProvider
  .state('IndexActividades', {
    url: '/activity',
    controller: 'ActivityCtrl as ctrl',
    templateUrl: 'index_actividades.html',
    title: 'IndexActividades'
  });

  $stateProvider
  .state('IndexActividadesEstudiantes', {
    url: '/',
    controller: 'ExampleCtrl as ctrl',
    templateUrl: 'index_actividades_estudiante.html',
    title: 'IndexActividadesEstudiantes'
  });

  $stateProvider
  .state('IndexGrupos', {
    url: '/groups',
    controller: 'GroupCtrl as ctrl',
    templateUrl: 'index_grupos.html',
    title: 'IndexGrupos'
  });

  $stateProvider
  .state('Registrar', {
    url: '/register',
    controller: 'RegisterCtrl as ctrl',
    templateUrl: 'registrar.html',
    title: 'Registrar'
  });

  $stateProvider
  .state('AsociarAlumno', {
    url: '/asociar-alumno',
    controller: 'AsociarAlumnoController as ctrl',
    templateUrl: 'asociar_alumno.html',
    title: 'Registrar'
  });

  $stateProvider
  .state('AsociarGrupo', {
    url: '/asociar-grupo',
    controller: 'AsociarGrupoController as ctrl',
    templateUrl: 'asociar_grupo.html',
    title: 'Registrar'
  });

  $stateProvider
  .state('Credenciales', {
    url: '/cambiar-credenciales',
    controller: 'CredencialesController as ctrl',
    templateUrl: 'cambiar_credenciales.html',
    title: 'Credenciales'
  });

  $stateProvider
  .state('alumno', {
    url: '/alumno',
    controller: 'AlumnoController as ctrl',
    templateUrl: 'index_alumno.html',
    title: 'Alumno'
  });

  $stateProvider
  .state('evaluar', {
    url: '/evaluar?group&activity',
    controller: 'EvaluarController as ctrl',
    templateUrl: 'evaluar.html',
    title: 'Evaluar'
  });
  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
