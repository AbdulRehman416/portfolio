$(window).load(function () {
  var mapUrl =
      "https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Hospital+Chowk,+DC+Office+Rd,+Bahawalnagar,+Punjab,+Pakistan&amp;ll=30.007063979052088,73.25866810774022&amp;spn=0.01628,0.025663&amp;z=14&amp;iwloc=A&amp;output=embed",
    onLoadWebSite = false,
    googleMapHolder = $(".google_map"),
    backgroundColor = googleMapHolder.css("backgroundColor"),
    mapWidth = googleMapHolder.css("width"),
    mapHeight = googleMapHolder.css("height"),
    borderTopLeftRadius = googleMapHolder.css("borderTopLeftRadius"),
    borderTopRightRadius = googleMapHolder.css("borderTopLeftRadius"),
    borderBottomLeftRadius = googleMapHolder.css("borderTopLeftRadius"),
    borderBottomRightRadius = googleMapHolder.css("borderTopLeftRadius"),
    addMap = false,
    idPage,
    intervalCall;

  if (backgroundColor == "rgba(0, 0, 0, 0)") {
    backgroundColor = "#ffffff";
  }
  verificationPageHandler();
  if (onLoadWebSite == false) {
    $(window).bind("hashchange", verificationPageHandler);
  }
  function verificationPageHandler() {
    if (onLoadWebSite == false) {
      idPage =
        "#" + window.location.hash.substring(3, window.location.hash.length);
      if (idPage != "#") {
        if (googleMapHolder.parents(idPage).length != 0) {
          addGoogleMapHandler();
        }
      }
    } else {
      addGoogleMapHandler();
    }
  }
  function addGoogleMapHandler() {
    if (!addMap) {
      addMap = true;
      $(window).unbind("hashchange", verificationPageHandler);
      googleMapHolder.css({ overflow: "hidden" });
      googleMapHolder.append(
        "<div id='loaderPart' style='position:absolute; z-index:1; width:" +
          mapWidth +
          "; height:" +
          mapHeight +
          "; background:" +
          backgroundColor +
          " url(images/googleMapLoader.gif) no-repeat 50%; border-top-left-radius:" +
          borderTopLeftRadius +
          "; border-top-right-radius:" +
          borderTopRightRadius +
          "; border-bottom-right-radius:" +
          borderBottomLeftRadius +
          "; border-bottom-left-radius:" +
          borderBottomRightRadius +
          ";'></div>"
      );
      intervalCall = setInterval(addIframe, 200);
    }
    function addIframe() {
      console.log("idPage: ", idPage);

      if ($(idPage).css("display") != "none") {
        clearInterval(intervalCall);
        googleMapHolder.append(
          "<iframe width='" +
            mapWidth +
            "' height='" +
            mapHeight +
            "' frameborder='0' src='" +
            mapUrl +
            "' style='position:absolute; z-index:0; border-top-left-radius:" +
            borderTopLeftRadius +
            "; border-top-right-radius:" +
            borderTopRightRadius +
            "; border-bottom-right-radius:" +
            borderBottomLeftRadius +
            "; border-bottom-left-radius:" +
            borderBottomRightRadius +
            ";'></iframe>"
        );
        googleMapHolder.find("iframe").load(googleMapLoadCompleteHandler);
      }
    }
  }
  function googleMapLoadCompleteHandler() {
    var loaderPart = googleMapHolder.find("#loaderPart");
    loaderPart.delay(100).fadeOut(500, function () {
      loaderPart.css({ display: "none" });
    });
  }
});
