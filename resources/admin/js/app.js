import $ from "jquery";
import 'alpinejs'

$(document).ready(function(){
    window.livewire.on('alert_remove',()=>{
        setTimeout(function(){ $(".alert").fadeOut('fast');
        }, 3000); // 3 secs
    });
});