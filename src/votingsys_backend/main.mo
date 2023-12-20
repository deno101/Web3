import Text "mo:base/Text";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import List "mo:base/List";
import Buffer "mo:base/Buffer";

actor {
  public type Record = {
    time : Time.Time;
    polling_station : Text;
    clerk_name : Text;
    votes : Nat;
  };


  var results = Buffer.Buffer<Record>(100);

  public func addResult(polling_station : Text, clerk_name : Text, votes : Nat) : async () {
    let r : Record = {
      time = Time.now();
      polling_station = polling_station;
      clerk_name = clerk_name;
      votes = votes;
    };

    results.add(r);
  };

  public func getResults() : async [Record] {
    return Buffer.toArray(results);
  };

};
