// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Barbell Curls',
          description: 'Stand upright holding the barbell with your hands shoulder-width apart and palms facing forward. Bring the bar up to your chest using the natural lever action of your arms. Slowly reverse the process bringing the barbell to the starting position. Repeat.'
        },
        {
          id: '2',
          title: 'Bench Press',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Plank',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
        {
          id: '4',
          title: 'Dumbell Lunge',
          description: 'Standing with your torso upright holding 2 dumbbells in your hands by your sides. Step forward with right leg approximately 2 feet and lower your body down. Using the heel of your foot push up and return to starting position. Repeat this movement with your left leg.'
        },
        {
          id: '5',
          title: 'Military Press',
          description: 'Standing with your torso upright holding 2 dumbbells in your hands by your sides. Step forward with right leg approximately 2 feet and lower your body down. Using the heel of your foot push up and return to starting position. Repeat this movement with your left leg.'
        },
        {
          id: '6',
          title: 'Tricep Extension',
          description: 'Standing with your torso upright holding 2 dumbbells in your hands by your sides. Step forward with right leg approximately 2 feet and lower your body down.\r\n Using the heel of your foot push up and return to starting position. Repeat this movement with your left leg.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});


// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
