import Apierror from "../utils/Apierror.js"

const ishotellister=(req,res,next)=>{
    if(req.user && req.user.role=='hotel_lister'){
        next();
    }
    else {
        throw new Apierror(400 ,"access denied ");
    }
}
export default ishotellister;
