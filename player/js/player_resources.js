angular.module("angledPlayer")
  .factory("Music", function() {
    function Music(attributes) {
      if (!attributes) attributes = {};

      this.url = attributes.url;
      this.name = attributes.name;
      this.artist = attributes.artist;
      this.duration = attributes.duration;
    }

    return Music;
  });
