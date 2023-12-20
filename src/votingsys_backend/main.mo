import Text "mo:base/Text";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import List "mo:base/List";

actor {
  public type Record = {
    time : Time.Time;
    polling_station : Text;
    clerk_name : Text;
    votes : Nat;
  };

  type List<Record> = ?(Record, List<Record>);

  var results : List<Record> = List.nil();

  public func addResult(polling_station : Text, clerk_name : Text, votes : Nat) : async () {
    let r : Record = {
      time = Time.now();
      polling_station = polling_station;
      clerk_name = clerk_name;
      votes = votes;
    };

    results := List.push<Record>(r, results);
  };

  public func getResults() : async List<Record> {
    return results;
  };

};
