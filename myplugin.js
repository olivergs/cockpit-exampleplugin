$(document).ready(function() {
  service = cockpit.dbus('org.freedesktop.FleetCommander');
  proxy = service.proxy();
  proxy.wait().done(function(resp) {
    console.log('Connected to Fleet Commander dbus service');
    // Get the public key
    proxy.GetPublicKey().done(function(resp) {
      $('#publickey').html(resp);
    }).fail(function(){
      console.log('Failed to get public key');
    });
  }).fail(function(err){
    console.log('Failed to connect to Fleet Commander dbus service');
  });
});
