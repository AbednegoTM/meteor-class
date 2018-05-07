import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import ContactUs from '/imports/ui/ContactUs.jsx';
import AboutUs from '/imports/ui/AboutUs.jsx';

route('/', Home);
route('/contact/:_id',ContactUs,{},{
    name : 'contacts'
});
route('/about',AboutUs);
