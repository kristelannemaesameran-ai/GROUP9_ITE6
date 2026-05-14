import {BrowserRouter, Routes, Route} from "react-router-dom";
import Activity1 from "./pages/activities/activity1/Activity1";
import Activity2 from "./pages/activities/activity2/Activity2";
import Activity3 from "./pages/activities/activity3/Activity3";
import Activity4 from "./pages/activities/activity4/Activity4";
import Activity5 from "./pages/activity5/Activity5";
import Mco from "./pages/mco/Mco";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mco/>}/>
                <Route path="Activity1" element={<Activity1/>}/>
                <Route path="Activity2" element={<Activity2/>}/>
                <Route path="Activity3" element={<Activity3/>}/>
                <Route path="Activity4" element={<Activity4/>}/>
                <Route path="Activity5" element={<Activity5/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
