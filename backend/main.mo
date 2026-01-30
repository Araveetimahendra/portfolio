import MixinStorage "blob-storage/Mixin";
import Map "mo:core/Map";
import Int "mo:core/Int";
import Migration "migration";

(with migration = Migration.run)
actor {
  include MixinStorage();

  let resumePathMap = Map.empty<Text, Int>();
};
