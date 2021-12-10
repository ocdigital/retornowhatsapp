var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'retornowhatsapp',
  description: 'Integração entre os servidores',
  script: 'C:\\MGA\\retornowhatsapp'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();