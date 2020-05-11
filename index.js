// bring in the MongoDB Connection import
import './dbconnection.js';
import User from './user.js';
import ServicesList from './service.js';
import ShelterList from './shelter.js';


// Main added
const main = async() => {
    try {
        await connectToDB();
        let someUser = { firstName: 'Ryan', lastName: 'Ivy', email: 'r0446151@amarillocollege.com', policeId: 'none', providerDirector: 'none', admin: 'Yes'};
        let someService = { serviceName: 'Female Beds', serviceDescription: 'This service is only offered to Females.'};
        let someShelter = { shelterName: 'New Hope Home', shelterInfo: 'We have large facility to help women and children who need a safe place', shelterBedAmount: '50'}
        let userDoc = await addUser(someUser.firstName, someUser.lastName, someUser.email, someUser.policeId, someUser.providerDirector, someUser.admin);
        let serviceDoc = await addService(someService.serviceName, someService.serviceDescription);
        let shelterDoc = await addSheler(someShelter.shelterName, someShelter.shelterInfo, someShelter.shelterBedAmount);
        // await listingServices(userDoc, [serviceDoc])
        // await listingShelters(userDoc, [shelterDoc])
        // await updatedUser(id)
        // await updatedService(id)
        // await updatedShelter(id)
        // await deleteUser(id)
        // await deleteService(id)
        // await deleteShelter(id)
    } catch (err) {
        console.log(err)
    }
}

main()