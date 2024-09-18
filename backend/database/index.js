import mongoose from "mongoose";

mongoose.connect("url");


const profileSchema = new mongoose.Schema({
    
})

const IndieProfile = mongoose.model('Profile',profileSchema);

export default IndieProfile;