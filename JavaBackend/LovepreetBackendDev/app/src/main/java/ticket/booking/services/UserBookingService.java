package ticket.booking.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import ticket.booking.entities.User;
import ticket.booking.util.UserServiceUtil;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

public class UserBookingService {

    // User once logged in should not be asked to login again, thats why we are creating a global User


    private User user;

    // Making users list so that functions can access users from localDb
    // This will access localDb and fetch and store users in the list
    private List<User> userList;

    // For mapping
    private static final ObjectMapper objectMapper  = new ObjectMapper();

    private static final String USERS_PATH="app/src/main/java/ticket/booking/localDb/users.json";


    // constructor
    // we are assuming that the user has made a login, then only he is able to book a service
    public UserBookingService(User user1) throws IOException {
        this.user = user1;
        //1. We'll read users from file(.json) in plain text
        File users = new File(USERS_PATH);
        // 2. Now we have to map user entity to .json
        // // Now mapping, here "users" is mapped with "List<users>"
        // // user from users.json is deserialized to list<User>
        // // Why TypeReference?
        // // // because below, it says users can be inserted in User.class this way, but we used TypeReference as "List" which is a generic type internally and we need to deserialize this at runtime. ie. It says: first use the User then deserialize it into List
        // Therefore to resolve generic type at runtime, we make use of TypeReference
//    userList = objectMapper.readValue(users, User.class) // for normal data
        userList = objectMapper.readValue(users, new TypeReference<List<User>>() {});

    }

    public boolean loginUser() {
//        filtering out the user whole name and password matches
        // // "user" global user
        // Optional means if user is not there, the result shouldn't be null pointer
        Optional<User> foundUser = userList.stream().filter(user1 ->{
            return user1.getName().equalsIgnoreCase(user.getName()) && UserServiceUtil.checkPassword(user.getPassword(), user1.getHashedPassword());
        }).findFirst();
        return foundUser.isPresent(); // This returns true if foundUser is not empty
                // DT of user1 is "User"

    }

    public Boolean signUp(User user1) throws IOException {
        try {
            userList.add(user1);
            saveUserListToFile(); // this adds user to global list of user
            return Boolean.TRUE; // Now whats this
        } catch (IOException e) {
//            throw new RuntimeException(e);
            return Boolean.FALSE;
        }


    }

    private void saveUserListToFile() throws IOException{
        File usersFile = new File(USERS_PATH); // Storing user to Database ie. Serialization is done here
        objectMapper.writeValue(usersFile, userList);
    }
    public void fetchBookings() {
            user.printTickets();
        }

        public Boolean cancelBooking(String ticketId){
        // todo: Complete this function
            return Boolean.FALSE;
        }
    public void cancel() {

    }

    public void bookTicket(String source, String destination) {

    }
}
