import {reset} from "../redux/actions/userAction";

export const validateAppVersion = (dispatch) => {
    const version = localStorage.getItem("version_app")
    const currentVersion = process.env.NEXT_PUBLIC_CURRENT_VERSION_APP
    const url = process.env.NEXT_PUBLIC_BASE_URL
    console.log("version", version)
    console.log("currentVersion", currentVersion)
    console.log("url", url)
    console.log("timeout", process.env.NEXT_PUBLIC_GET_HOTELS_TIMEOUT)
    console.log("process.env", process.env)
    if(version){
        console.log("VALIDATE")
        if(parseInt(version)<parseInt(currentVersion)){
            dispatch(reset())
            localStorage.setItem("version_app", currentVersion)
            emptyCache()
        }
    }else{
        console.log("RESET")
        dispatch(reset())
        localStorage.setItem("version_app", currentVersion)
        emptyCache()
    }
}

const emptyCache = () => {
    if('caches' in window){
        caches.keys().then((names) => {
            // Delete all the cache files
            names.forEach(name => {
                caches.delete(name);
            })
        });

        // Makes sure the page reloads. Changes are only visible after you refresh.
        window.location.reload(true);
    }
}