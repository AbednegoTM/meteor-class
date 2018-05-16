import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import ContactUs from '/imports/ui/ContactUs.jsx';
import AboutUs from '/imports/ui/AboutUs.jsx';
import Login from '/imports/ui/Login.jsx';
import Register from '/imports/ui/Register.jsx';



route('/', Home);
route('/contact',ContactUs,{},{
    name : 'contacts'
});
route('/about',AboutUs);
route('/login',Login);
route('/register',Register);
