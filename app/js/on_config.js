
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
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
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'login.html',
    title: 'Login'
  });

    $stateProvider
  .state('CrearActividad', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'crear_actividad.html',
    title: 'CrearActividad'
  });

   $stateProvider
  .state('administrador', {
    url: '/',
    controller: 'ExampleCtrl as home',
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
    controller: 'ExampleCtrl as home',
    templateUrl: 'editar_perfil.html',
    title: 'EditarPerfil'
  });

        $stateProvider
  .state('Evaluacion', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'evaluacion.html',
    title: 'Evaluacion'
  });

         $stateProvider
  .state('IndexActividades', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'index_actividades.html',
    title: 'IndexActividades'
  });

        $stateProvider
  .state('IndexActividadesEstudiantes', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'index_actividades_estudiante.html',
    title: 'IndexActividadesEstudiantes'
  });

          $stateProvider
  .state('IndexGrupos', {
    url: '/groups',
    controller: 'GroupCtrl as groupctrl',
    templateUrl: 'index_grupos.html',
    title: 'IndexGrupos'
  });

           $stateProvider
  .state('Registrar', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'registrar.html',
    title: 'Registrar'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
