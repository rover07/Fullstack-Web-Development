package ticket.booking.entities;

import java.util.Date;
import java.util.List;
import java.util.Map;

public class Train {

    private String trainId;
    private String trainNo;
//    private Date departTime;
//    private Date arrivalTime;
    // 2d matrix type to represent seats
    // // 0 -> Not occupied
    // // 1 -> Occupied
    private List<List<Integer>> seats;

    private Map<String, Date> stationTimes;
    private List<String> stations;

    public Train(String trainId, String trainNo, List<List<Integer>> seats, Map<String, Date> stationTimes, List<String> stations) {
        this.trainId = trainId;
        this.trainNo = trainNo;
        this.seats = seats;
        this.stationTimes = stationTimes;
        this.stations = stations;
    }

    public String getTrainId() {
        return trainId;
    }

    public void setTrainId(String trainId) {
        this.trainId = trainId;
    }

    public String getTrainNo() {
        return trainNo;
    }

    public void setTrainNo(String trainNo) {
        this.trainNo = trainNo;
    }

    public List<List<Integer>> getSeats() {
        return seats;
    }

    public void setSeats(List<List<Integer>> seats) {
        this.seats = seats;
    }

    public Map<String, Date> getStationTimes() {
        return stationTimes;
    }

    public void setStationTimes(Map<String, Date> stationTimes) {
        this.stationTimes = stationTimes;
    }

    public List<String> getStations() {
        return stations;
    }

    public void setStations(List<String> stations) {
        this.stations = stations;
    }
    public String getTrainInfo(){
        return String.format("Train ID: %s Train No: %s", trainId, trainNo);
    }

}
